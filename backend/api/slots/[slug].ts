import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getAdapter, getRestaurantConfig } from '../../restaurants/registry';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { slug } = req.query;
  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }

  const config = getRestaurantConfig(slug);
  if (!config) {
    return res.status(404).json({ error: `Restaurant '${slug}' not found` });
  }

  const date = req.query.date as string;
  const partySize = parseInt(req.query.partySize as string) || 2;

  if (!date) {
    return res.status(400).json({ error: 'Missing date parameter (YYYY-MM-DD)' });
  }

  try {
    const adapter = getAdapter(slug);
    if (!adapter) {
      return res.status(500).json({ error: `No adapter found for platform '${config.platform}'` });
    }

    const slots = await adapter.getAvailableSlots(date, partySize);
    const availableSlots = slots.filter(s => s.available);

    res.status(200).json({
      restaurant: config.name,
      date,
      partySize,
      totalSlots: slots.length,
      availableCount: availableSlots.length,
      slots: availableSlots,
    });
  } catch (error: any) {
    console.error(`Error fetching slots for ${slug}:`, error);
    res.status(500).json({ error: error.message || 'Failed to fetch slots' });
  }
}
