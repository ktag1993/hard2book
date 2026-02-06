import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Restaurant {
  slug: string;
  name: string;
  platform: string;
  city: string;
  country: string;
  image_url?: string;
}

// Hardcoded for now until we wire up Supabase directly
const RESTAURANTS: Restaurant[] = [
  {
    slug: 'pizza-4ps-indiranagar',
    name: "Pizza 4P's Indiranagar",
    platform: 'tablecheck',
    city: 'Bangalore',
    country: 'India',
    image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
];

export default function Home() {
  const [restaurants] = useState<Restaurant[]>(RESTAURANTS);
  const [search, setSearch] = useState('');

  const filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              Get the <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">impossible</span> table
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
              We snipe reservations at the hardest-to-book restaurants the moment slots open. You just pick a time.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search restaurants or cities..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-white/90">
            {filtered.length} Restaurant{filtered.length !== 1 ? 's' : ''}
          </h2>
          <span className="text-sm text-white/40">More coming soon</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((restaurant) => (
            <Link
              key={restaurant.slug}
              to={`/r/${restaurant.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={restaurant.image_url || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/20">
                    {restaurant.platform}
                  </span>
                  <span className="text-xs text-white/50">
                    {restaurant.city}, {restaurant.country}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {restaurant.name}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No restaurants found</p>
          </div>
        )}
      </div>
    </div>
  );
}
