# Hard2Book API Documentation

## Endpoints

### GET /api/health
Returns service health status.

**Response:** `{ status: "ok", service: "hard2book-backend" }`

---

### GET /api/restaurants
List all active restaurants.

**Response:** `{ restaurants: [{ slug, name, platform, city, country, baseUrl, shopPath }] }`

---

### GET /api/slots/[slug]
Get available time slots for a restaurant.

**Query params:**
- `date` (required) - YYYY-MM-DD
- `partySize` (optional, default 2)

**Response:**
```json
{
  "restaurant": "Pizza 4P's Indiranagar",
  "date": "2026-02-14",
  "partySize": 2,
  "totalSlots": 20,
  "availableCount": 5,
  "slots": [{ "time": "7:00 PM", "epoch": "1739538600", "available": true }]
}
```

---

### POST /api/book
Book a reservation.

**Body:**
```json
{
  "restaurantSlug": "pizza-4ps-indiranagar",
  "targetDate": "2026-02-14",
  "preferredTimes": ["7:00 PM", "7:30 PM", "8:00 PM"],
  "partySize": 2,
  "firstName": "Kartikay",
  "lastName": "Agarwal",
  "phone": "9757417677",
  "email": "kartikayagarwal27@gmail.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Reservation booked at Pizza 4P's Indiranagar",
  "bookedTime": "7:00 PM",
  "details": { "date": "2026-02-14", "time": "7:00 PM", "epoch": "...", "partySize": 2 }
}
```
