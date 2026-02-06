import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getAdapter, getRestaurantConfig } from '../restaurants/registry';
import { BookingRequest } from '../lib/types';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    restaurantSlug,
    targetDate,
    preferredTimes,
    partySize,
    firstName,
    lastName,
    phone,
    email,
  } = req.body as BookingRequest;

  // Validate required fields
  if (!restaurantSlug || !targetDate || !firstName || !lastName || !phone || !email) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['restaurantSlug', 'targetDate', 'firstName', 'lastName', 'phone', 'email'],
    });
  }

  const config = getRestaurantConfig(restaurantSlug);
  if (!config) {
    return res.status(404).json({ error: `Restaurant '${restaurantSlug}' not found` });
  }

  try {
    const adapter = getAdapter(restaurantSlug);
    if (!adapter) {
      return res.status(500).json({ error: `No adapter for platform '${config.platform}'` });
    }

    const request: BookingRequest = {
      restaurantSlug,
      targetDate,
      preferredTimes: preferredTimes || [],
      partySize: partySize || 2,
      firstName,
      lastName,
      phone,
      email,
    };

    console.log(`Booking ${config.name} for ${targetDate}, party of ${request.partySize}`);
    const result = await adapter.bookReservation(request);

    if (result.success) {
      res.status(200).json({
        success: true,
        message: `Reservation booked at ${config.name}`,
        bookedTime: result.bookedTime,
        confirmationCode: result.confirmationCode,
        details: result.details,
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.error,
      });
    }
  } catch (error: any) {
    console.error(`Error booking ${restaurantSlug}:`, error);
    res.status(500).json({ error: error.message || 'Booking failed' });
  }
}
