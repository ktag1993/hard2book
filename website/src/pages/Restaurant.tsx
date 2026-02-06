import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RESTAURANT_DATA: Record<string, { name: string; city: string; country: string; platform: string; image_url: string; description: string }> = {
  'pizza-4ps-indiranagar': {
    name: "Pizza 4P's Indiranagar",
    city: 'Bangalore',
    country: 'India',
    platform: 'tablecheck',
    image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    description: "Authentic Neapolitan pizza with a Japanese twist. Known for their signature burrata and cheese-making experience. Reservations open every Saturday at 10 AM for the following week and sell out within minutes.",
  },
};

export default function Restaurant() {
  const { slug } = useParams<{ slug: string }>();
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const restaurant = slug ? RESTAURANT_DATA[slug] : null;

  const [date, setDate] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [selectedTime, setSelectedTime] = useState('');
  const [firstName, setFirstName] = useState(user?.user_metadata?.full_name?.split(' ')[0] || '');
  const [lastName, setLastName] = useState(user?.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'select' | 'details' | 'confirm'>('select');

  // Mock available times
  const availableTimes = date
    ? ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM']
    : [];

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/50 text-lg">Restaurant not found</p>
      </div>
    );
  }

  const handleBook = async () => {
    if (!user) {
      signInWithGoogle();
      return;
    }
    setLoading(true);
    // TODO: Call API
    setTimeout(() => {
      setLoading(false);
      navigate(`/bookings/new?restaurant=${slug}&date=${date}&time=${selectedTime}&party=${partySize}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium border border-orange-500/30">
              {restaurant.platform}
            </span>
            <span className="text-sm text-white/60">
              {restaurant.city}, {restaurant.country}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white">{restaurant.name}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-white/60 text-base mb-10 leading-relaxed">{restaurant.description}</p>

        {/* Booking Flow */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Book a Table</h2>

          {/* Step 1: Date & Party */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm text-white/50 mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => { setDate(e.target.value); setSelectedTime(''); setStep('select'); }}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2">Party Size</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n} className="bg-gray-900">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: Time Slots */}
          {date && (
            <div className="mb-6">
              <label className="block text-sm text-white/50 mb-3">Available Times</label>
              <div className="flex flex-wrap gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => { setSelectedTime(time); setStep('details'); }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-white/5 text-white/70 border border-white/10 hover:border-orange-500/30 hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 'details' && selectedTime && (
            <div className="border-t border-white/10 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Details</h3>
              {!user ? (
                <div className="text-center py-8">
                  <p className="text-white/50 mb-4">Sign in to complete your booking</p>
                  <button
                    onClick={signInWithGoogle}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Sign in with Google
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/50 mb-1">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 ..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-white/5 rounded-xl p-4 mt-4 border border-white/5">
                    <div className="flex justify-between text-sm text-white/60 mb-1">
                      <span>Restaurant</span>
                      <span className="text-white">{restaurant.name}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/60 mb-1">
                      <span>Date</span>
                      <span className="text-white">{new Date(date + 'T00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/60 mb-1">
                      <span>Time</span>
                      <span className="text-orange-400 font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/60">
                      <span>Party</span>
                      <span className="text-white">{partySize} Guest{partySize > 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleBook}
                    disabled={loading || !firstName || !lastName || !phone || !email}
                    className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-orange-500/20 active:scale-[0.98]"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Booking...
                      </span>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
