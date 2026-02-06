import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Mock data for now
const MOCK_BOOKINGS = [
  {
    id: '1',
    restaurant_name: "Pizza 4P's Indiranagar",
    restaurant_slug: 'pizza-4ps-indiranagar',
    target_date: '2026-02-14',
    booked_time: '7:00 PM',
    party_size: 2,
    status: 'booked',
    created_at: '2026-02-06T10:00:00Z',
  },
];

const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  pending: { bg: 'bg-yellow-500/10 border-yellow-500/20', text: 'text-yellow-400', label: 'Pending' },
  booked: { bg: 'bg-green-500/10 border-green-500/20', text: 'text-green-400', label: 'Confirmed' },
  failed: { bg: 'bg-red-500/10 border-red-500/20', text: 'text-red-400', label: 'Failed' },
  cancelled: { bg: 'bg-white/5 border-white/10', text: 'text-white/40', label: 'Cancelled' },
};

export default function Bookings() {
  const { user, signInWithGoogle } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">My Bookings</h1>
          <p className="text-white/50 mb-6">Sign in to view your bookings</p>
          <button
            onClick={signInWithGoogle}
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  const bookings = MOCK_BOOKINGS; // TODO: fetch from Supabase

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <span className="text-6xl mb-4 block">🍽️</span>
          <p className="text-white/50 text-lg mb-4">No bookings yet</p>
          <Link to="/" className="text-orange-400 hover:text-orange-300 underline">Browse restaurants</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => {
            const style = STATUS_STYLES[booking.status] || STATUS_STYLES.pending;
            return (
              <Link
                key={booking.id}
                to={`/bookings/${booking.id}`}
                className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {booking.restaurant_name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-white/50">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(booking.target_date + 'T00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {booking.booked_time}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {booking.party_size}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${style.bg} ${style.text}`}>
                    {style.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
