/**
 * TableCheck Platform Adapter
 * Implements booking flow for restaurants on tablecheck.com
 * 
 * Flow: 5 API calls
 * 1. GET /reserve → extract CSRF token (authenticity_token)
 * 2. GET /available/timetable → get available time slots
 * 3. GET /available → verify specific slot still available
 * 4. POST /reserve/create → submit reservation (AJAX, returns redirect to /reserve/review)
 * 5. POST /reserve/review → final confirmation (_method: 'put')
 */

import * as cheerio from 'cheerio';
import { TimeSlot, BookingRequest, BookingResult, RestaurantAdapter, RestaurantConfig } from '../../lib/types';

// Cookie jar simulation using headers
interface SessionState {
  cookies: Record<string, string>;
  token: string | null;
  shopId: string | null;
}

function parseCookies(setCookieHeaders: string[]): Record<string, string> {
  const cookies: Record<string, string> = {};
  for (const header of setCookieHeaders) {
    const parts = header.split(';')[0].split('=');
    if (parts.length >= 2) {
      cookies[parts[0].trim()] = parts.slice(1).join('=').trim();
    }
  }
  return cookies;
}

function cookieString(cookies: Record<string, string>): string {
  return Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ');
}

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36';

export function createTableCheckAdapter(config: RestaurantConfig): RestaurantAdapter {
  const baseUrl = config.baseUrl;
  const shopPath = config.shopPath;
  const reserveUrl = `${baseUrl}${shopPath}/reserve`;

  let session: SessionState = {
    cookies: {},
    token: null,
    shopId: null,
  };

  async function fetchWithCookies(url: string, options: RequestInit = {}): Promise<Response> {
    const headers: Record<string, string> = {
      'User-Agent': USER_AGENT,
      'Cookie': cookieString(session.cookies),
      ...(options.headers as Record<string, string> || {}),
    };

    const response = await fetch(url, {
      ...options,
      headers,
      redirect: 'manual',
    });

    // Collect cookies from response
    const setCookies = response.headers.getSetCookie?.() || [];
    const newCookies = parseCookies(setCookies);
    session.cookies = { ...session.cookies, ...newCookies };

    return response;
  }

  async function getAuthenticityToken(): Promise<string | null> {
    console.log('Getting authenticity token...');
    const response = await fetchWithCookies(reserveUrl);
    const html = await response.text();
    const $ = cheerio.load(html);

    // Try meta tag first
    const metaToken = $('meta[name="csrf-token"]').attr('content');
    if (metaToken) {
      console.log('Got token from meta tag');
      session.token = metaToken;

      // Also grab shop_id
      const shopIdInput = $('input[name="reservation[shop_id]"]').val();
      if (shopIdInput) {
        session.shopId = shopIdInput as string;
      }

      return metaToken;
    }

    // Try hidden input
    const inputToken = $('input[name="authenticity_token"]').val();
    if (inputToken) {
      console.log('Got token from form input');
      session.token = inputToken as string;

      const shopIdInput = $('input[name="reservation[shop_id]"]').val();
      if (shopIdInput) {
        session.shopId = shopIdInput as string;
      }

      return inputToken as string;
    }

    console.log('Could not find authenticity token');
    return null;
  }

  async function getAvailableSlots(date: string, partySize: number): Promise<TimeSlot[]> {
    // Ensure we have a token
    if (!session.token) {
      await getAuthenticityToken();
    }

    if (!session.token) {
      throw new Error('Failed to get authenticity token');
    }

    console.log(`Checking available slots for ${date} with ${partySize} people...`);

    const params = new URLSearchParams({
      'authenticity_token': session.token,
      'reservation[num_people_adult]': String(partySize),
      'reservation[num_people_senior]': '',
      'reservation[num_people_child]': '',
      'reservation[num_people_baby]': '',
      'reservation[start_date]': date,
    });

    const url = `${baseUrl}/en${shopPath}/available/timetable?${params.toString()}`;
    const response = await fetchWithCookies(url);

    if (response.status !== 200) {
      console.log(`Failed to get slots: ${response.status}`);
      return [];
    }

    const data = await response.json() as any;
    const queriedDate = data.queried_date;
    const slotsData = data?.data?.slots?.[queriedDate] || {};

    const slots: TimeSlot[] = [];
    for (const [epochStr, slotInfo] of Object.entries(slotsData)) {
      const info = slotInfo as any;
      const epochInt = parseInt(epochStr);
      const dt = new Date(epochInt * 1000);
      const timeStr = dt.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      });

      slots.push({
        time: timeStr,
        epoch: epochStr,
        available: !!info.available,
      });
    }

    // Sort by epoch
    slots.sort((a, b) => parseInt(a.epoch) - parseInt(b.epoch));
    console.log(`Found ${slots.filter(s => s.available).length} available slots out of ${slots.length} total`);
    return slots;
  }

  async function checkSlotAvailability(epoch: string, partySize: number): Promise<boolean> {
    if (!session.token) return false;

    const params = new URLSearchParams({
      'authenticity_token': session.token,
      'reservation[start_at_epoch]': epoch,
      'reservation[num_people_adult]': String(partySize),
      'reservation[num_people_senior]': '',
      'reservation[num_people_child]': '',
      'reservation[num_people_baby]': '',
    });

    const url = `${baseUrl}/en${shopPath}/available?${params.toString()}`;
    const response = await fetchWithCookies(url);
    return response.status === 200;
  }

  async function bookReservation(request: BookingRequest): Promise<BookingResult> {
    // Reset session for fresh booking
    session = { cookies: {}, token: null, shopId: null };

    // Step 1: Get authenticity token
    const token = await getAuthenticityToken();
    if (!token) {
      return { success: false, error: 'Failed to get authenticity token' };
    }

    // Step 2: Get available slots
    const allSlots = await getAvailableSlots(request.targetDate, request.partySize);
    const availableSlots = allSlots.filter(s => s.available);

    if (availableSlots.length === 0) {
      return { success: false, error: 'No available slots found' };
    }

    // Step 3: Find preferred slot
    let selectedSlot: TimeSlot | null = null;
    for (const preferredTime of request.preferredTimes) {
      const normalizedPref = preferredTime.toUpperCase().replace(/\s+/g, ' ');
      selectedSlot = availableSlots.find(s => {
        const normalizedSlot = s.time.toUpperCase().replace(/\s+/g, ' ');
        return normalizedSlot.includes(normalizedPref) || normalizedPref.includes(normalizedSlot);
      }) || null;
      if (selectedSlot) break;
    }

    if (!selectedSlot) {
      // Take first available
      selectedSlot = availableSlots[0];
      console.log(`Preferred times not found, using first available: ${selectedSlot.time}`);
    } else {
      console.log(`Found preferred time: ${selectedSlot.time}`);
    }

    // Step 4: Verify slot availability
    const isAvailable = await checkSlotAvailability(selectedSlot.epoch, request.partySize);
    if (!isAvailable) {
      return { success: false, error: 'Selected slot is no longer available' };
    }

    // Step 5: Submit reservation
    console.log(`Booking ${selectedSlot.time} on ${request.targetDate}...`);

    const formData = new URLSearchParams({
      'authenticity_token': token,
      'return_to_shop': '',
      'reservation[shop_id]': session.shopId || '',
      'reservation_confirm_shop_note': 'true',
      'reservation[start_date]': request.targetDate,
      'reservation[start_at_epoch]': selectedSlot.epoch,
      'reservation[num_people_adult]': String(request.partySize),
      'reservation[num_people_senior]': '',
      'reservation[num_people_child]': '',
      'reservation[num_people_baby]': '',
      'reservation[customer][is_single_name]': '',
      'reservation[customer][first_name]': request.firstName,
      'reservation[customer][last_name]': request.lastName,
      'reservation[customer][phone]': request.phone,
      'reservation[customer][email]': request.email,
      'commit': 'Next Step',
    });

    const createUrl = `${baseUrl}/en${shopPath}/reserve/create`;
    const createResponse = await fetchWithCookies(createUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': reserveUrl,
        'Origin': baseUrl,
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: formData.toString(),
    });

    console.log(`Reserve/create response: ${createResponse.status}`);

    // Handle redirect to review page
    if (createResponse.status === 302 || createResponse.status === 303) {
      const redirectUrl = createResponse.headers.get('location');
      if (!redirectUrl) {
        return { success: false, error: 'Got redirect but no location header' };
      }

      const fullRedirectUrl = redirectUrl.startsWith('http') ? redirectUrl : baseUrl + redirectUrl;
      console.log(`Redirected to: ${fullRedirectUrl}`);

      // Step 6: Get review page and extract new token
      const reviewResponse = await fetchWithCookies(fullRedirectUrl);
      const reviewHtml = await reviewResponse.text();
      const $review = cheerio.load(reviewHtml);

      const reviewToken = $review('input[name="authenticity_token"]').val() as string || token;

      // Step 7: Final confirmation (PUT via POST)
      const confirmData = new URLSearchParams({
        '_method': 'put',
        'authenticity_token': reviewToken,
        'commit': 'Confirm',
      });

      console.log('Submitting final confirmation...');
      const finalResponse = await fetchWithCookies(fullRedirectUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Referer': fullRedirectUrl,
          'Origin': baseUrl,
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: confirmData.toString(),
      });

      console.log(`Final confirmation status: ${finalResponse.status}`);
      const finalHtml = await finalResponse.text();

      const isConfirmed = finalHtml.toLowerCase().includes('thank') ||
        finalHtml.toLowerCase().includes('confirmed') ||
        finalResponse.status === 200;

      return {
        success: isConfirmed,
        bookedTime: selectedSlot.time,
        details: {
          date: request.targetDate,
          time: selectedSlot.time,
          epoch: selectedSlot.epoch,
          partySize: request.partySize,
        },
      };
    }

    // If we got 200 (no redirect), check for errors
    if (createResponse.status === 200) {
      const responseHtml = await createResponse.text();

      // Check for error messages
      if (responseHtml.includes('alert-danger') || responseHtml.includes('error')) {
        return { success: false, error: 'Validation error in booking form' };
      }

      return {
        success: true,
        bookedTime: selectedSlot.time,
        details: {
          date: request.targetDate,
          time: selectedSlot.time,
          note: 'Got 200 response - check email for confirmation',
        },
      };
    }

    return { success: false, error: `Unexpected status: ${createResponse.status}` };
  }

  return {
    getAvailableSlots,
    bookReservation,
  };
}
