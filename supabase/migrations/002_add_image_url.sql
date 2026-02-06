-- Add image_url column to restaurants table
ALTER TABLE restaurants ADD COLUMN image_url TEXT;

-- Update Pizza 4P's with image
UPDATE restaurants SET image_url = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' WHERE slug = 'pizza-4ps-indiranagar';
