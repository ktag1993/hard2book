export interface TimeSlot {
  time: string;       // Human-readable e.g. "02:00 PM"
  epoch: string;      // Epoch timestamp string
  available: boolean;
}

export interface BookingRequest {
  restaurantSlug: string;
  targetDate: string;        // YYYY-MM-DD
  preferredTimes: string[];  // e.g. ["7:00 PM", "7:30 PM", "8:00 PM"]
  partySize: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface BookingResult {
  success: boolean;
  bookedTime?: string;
  confirmationCode?: string;
  error?: string;
  details?: Record<string, any>;
}

export interface RestaurantAdapter {
  getAvailableSlots(date: string, partySize: number): Promise<TimeSlot[]>;
  bookReservation(request: BookingRequest): Promise<BookingResult>;
}

export interface RestaurantConfig {
  slug: string;
  name: string;
  platform: string;
  city: string;
  country: string;
  baseUrl: string;
  shopPath: string;
}
