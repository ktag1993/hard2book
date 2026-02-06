import { useParams, Link } from 'react-router-dom';

// Mock data
const MOCK_BOOKING = {
  id: '1',
  restaurant_name: "Pizza 4P's Indiranagar",
  restaurant_slug: 'pizza-4ps-indiranagar',
  target_date: '2026-02-14',
  booked_time: '7:00 PM',
  party_size: 2,
  status: 'booked',
  first_name: 'Kartikay',
  last_name: 'Agarwal',
  phone: '9757417677',
  email: 'kartikayagarwal27@gmail.com',
  confirmation_code: 'TC-2026-0214-001',
  created_at: '2026-02-06T10:00:00Z',
  booked_at: '2026-02-07T10:00:05Z',
};

export default function BookingDetail() {
  const { id: _id } = useParams<{ id: string }>();
  const booking = MOCK_BOOKING; // TODO: fetch from Supabase by _id

  const isConfirmed = booking.status === 'booked';

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link to="/bookings" className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/70 mb-6 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Bookings
      </Link>

      {/* Status Banner */}
      <div className={`rounded-2xl p-6 mb-6 border ${
        isConfirmed
          ? 'bg-green-500/10 border-green-500/20'
          : 'bg-yellow-500/10 border-yellow-500/20'
      }`}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{isConfirmed ? '✅' : '⏳'}</span>
          <div>
            <h2 className={`text-xl font-bold ${isConfirmed ? 'text-green-400' : 'text-yellow-400'}`}>
              {isConfirmed ? 'Booking Confirmed' : 'Booking Pending'}
            </h2>
            {booking.confirmation_code && (
              <p className="text-sm text-white/50 mt-1">
                Confirmation: <span className="text-white/80 font-mono">{booking.confirmation_code}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* Restaurant */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-white">{booking.restaurant_name}</h1>
          <Link to={`/r/${booking.restaurant_slug}`} className="text-sm text-orange-400 hover:text-orange-300 mt-1 inline-block">
            View restaurant
          </Link>
        </div>

        {/* Reservation Details */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Date</p>
              <p className="text-white font-medium">
                {new Date(booking.target_date + 'T00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Time</p>
              <p className="text-orange-400 font-bold text-lg">{booking.booked_time}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Party Size</p>
              <p className="text-white font-medium">{booking.party_size} Guest{booking.party_size > 1 ? 's' : ''}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Status</p>
              <p className={`font-medium ${isConfirmed ? 'text-green-400' : 'text-yellow-400'}`}>
                {isConfirmed ? 'Confirmed' : 'Pending'}
              </p>
            </div>
          </div>
        </div>

        {/* Guest Details */}
        <div className="p-6 border-t border-white/10">
          <h3 className="text-sm text-white/40 uppercase tracking-wider mb-3">Guest Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-white/30 mb-1">Name</p>
              <p className="text-white">{booking.first_name} {booking.last_name}</p>
            </div>
            <div>
              <p className="text-xs text-white/30 mb-1">Phone</p>
              <p className="text-white">{booking.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-white/30 mb-1">Email</p>
              <p className="text-white">{booking.email}</p>
            </div>
          </div>
        </div>

        {/* Timestamps */}
        <div className="p-6 border-t border-white/10 bg-white/[0.02]">
          <div className="flex justify-between text-xs text-white/30">
            <span>Requested: {new Date(booking.created_at).toLocaleString()}</span>
            {booking.booked_at && <span>Confirmed: {new Date(booking.booked_at).toLocaleString()}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
