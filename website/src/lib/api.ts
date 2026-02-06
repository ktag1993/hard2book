const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function fetchRestaurants() {
  const res = await fetch(`${API_BASE}/api/restaurants`);
  if (!res.ok) throw new Error('Failed to fetch restaurants');
  const data = await res.json();
  return data.restaurants;
}

export async function fetchSlots(slug: string, date: string, partySize: number = 2) {
  const res = await fetch(`${API_BASE}/api/slots/${slug}?date=${date}&partySize=${partySize}`);
  if (!res.ok) throw new Error('Failed to fetch slots');
  return res.json();
}

export async function bookReservation(body: {
  restaurantSlug: string;
  targetDate: string;
  preferredTimes: string[];
  partySize: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}) {
  const res = await fetch(`${API_BASE}/api/book`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}
