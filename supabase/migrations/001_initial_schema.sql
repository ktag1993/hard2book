-- Hard2Book Initial Schema
-- Tables: users, restaurants, bookings

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Restaurants table
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  platform TEXT NOT NULL,          -- tablecheck, resy, opentable, etc.
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  config JSONB DEFAULT '{}',       -- platform-specific config (shop_path, base_url, etc.)
  booking_fee_cents INTEGER DEFAULT 50000,  -- Rs. 500 = 50000 paise
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  target_date DATE NOT NULL,
  preferred_times TEXT[] DEFAULT '{}',
  party_size INTEGER NOT NULL DEFAULT 2,
  status TEXT NOT NULL DEFAULT 'pending',  -- pending, booked, failed, cancelled
  booked_time TEXT,
  confirmation_code TEXT,
  booking_details JSONB DEFAULT '{}',
  payment_status TEXT DEFAULT 'pending',   -- pending, paid, refunded
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  booked_at TIMESTAMPTZ
);

-- Indexes
CREATE INDEX idx_restaurants_slug ON restaurants(slug);
CREATE INDEX idx_restaurants_platform ON restaurants(platform);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_restaurant_id ON bookings(restaurant_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_target_date ON bookings(target_date);

-- Seed Pizza 4P's
INSERT INTO restaurants (slug, name, platform, city, country, config) VALUES (
  'pizza-4ps-indiranagar',
  'Pizza 4P''s Indiranagar',
  'tablecheck',
  'Bangalore',
  'India',
  '{"shopPath": "/shops/pizza-4ps-in-indiranagar", "baseUrl": "https://www.tablecheck.com", "slotsOpenTime": "10:00", "timezone": "Asia/Kolkata", "advanceWindowDays": 7}'::jsonb
);
