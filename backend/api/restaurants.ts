import type { VercelRequest, VercelResponse } from '@vercel/node';
import { listRestaurants } from '../restaurants/registry';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') return res.status(200).end();

  const restaurants = listRestaurants();
  res.status(200).json({ restaurants });
}
