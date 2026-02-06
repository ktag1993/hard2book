# Hard2Book Database Schema

## Tables

### users
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK, auto-generated |
| name | TEXT | NOT NULL |
| email | TEXT | UNIQUE, NOT NULL |
| phone | TEXT | |
| created_at | TIMESTAMPTZ | default NOW() |

### restaurants
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK, auto-generated |
| slug | TEXT | UNIQUE, NOT NULL |
| name | TEXT | NOT NULL |
| platform | TEXT | tablecheck, resy, opentable, etc. |
| city | TEXT | NOT NULL |
| country | TEXT | NOT NULL |
| config | JSONB | Platform-specific config |
| booking_fee_cents | INTEGER | Default 50000 (Rs. 500) |
| active | BOOLEAN | Default true |
| created_at | TIMESTAMPTZ | default NOW() |

### bookings
| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK, auto-generated |
| user_id | UUID | FK → users.id |
| restaurant_id | UUID | FK → restaurants.id |
| target_date | DATE | NOT NULL |
| preferred_times | TEXT[] | Array of preferred times |
| party_size | INTEGER | Default 2 |
| status | TEXT | pending, booked, failed, cancelled |
| booked_time | TEXT | Actual booked time |
| confirmation_code | TEXT | |
| booking_details | JSONB | Full booking response details |
| payment_status | TEXT | pending, paid, refunded |
| created_at | TIMESTAMPTZ | default NOW() |
| booked_at | TIMESTAMPTZ | When booking was confirmed |
