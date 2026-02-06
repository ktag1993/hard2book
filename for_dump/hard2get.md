# Hard2Get - Restaurant Reservation Sniper Service

## Origin Story
- Built a booking bot for **Pizza 4P's Bangalore** (TableCheck) in Feb 2026
- Discovered slots open daily at 10 AM, sell out in minutes
- Reverse-engineered the API: 5 HTTP calls to complete a booking in ~8 seconds
- Realized this problem exists at 50+ restaurants globally across multiple platforms

## Business Model
- **Per-booking fee**: $20-29 per successful reservation (refundable deposit if not booked)
- **Bundle**: 5 bookings for $99
- **Subscription (later)**: $50/month for power users
- Free tier: cancellation alerts + restaurant guides (SEO traffic)

## Revenue Target
- $250K/year = ~$21K/month = ~700 bookings/month at $29 avg

---

## Competitor Landscape

### Booking Sniper / Bot Services (Direct Competitors)

| Service | URL | Model | Price | Platform | Coverage | Notes |
|---------|-----|-------|-------|----------|----------|-------|
| **Snatchd** | snatchd.app | Per-booking token + free cancellation alerts | $29/booking or $99/5 | Resy | NYC only (~20 restaurants) | iOS app + Chrome extension, auto-books at millisecond speed at drop time |
| **Reservation Sniper** | resysniper.com | Subscription (cancellation monitoring) | $25-50/month | Resy + OpenTable | US-wide | 5-25 active booking requests, monitors for cancellations only |

### Reservation Marketplaces (Buy/Sell/Trade)

| Service | URL | Model | Price | Coverage | Notes |
|---------|-----|-------|-------|----------|-------|
| **AppointmentTrader** | appointmenttrader.com | Marketplace (buy/sell) | 20-30% commission | Global | $2.4M+ traded, has Carbone, Rao's, Disfrutar, Masque, Gimlet Melbourne |
| **Cita Marketplace** | citamarketplace.com | Peer-to-peer marketplace | 30% commission | NYC | "Our tables are so good, American Express tried to shut us down" |
| **ResX** | resx.co | Free exchange (token-based) | Free / $10 premium | NYC | Diner-to-diner, earn tokens for submitting unused reservations |
| **TableSnatch** | tablesnatch.com | Marketplace (buy/sell) | Commission | US | Patent pending, markets restaurants in their media |

### Premium Access / Prepayment Platforms

| Service | URL | Model | Price | Coverage | Notes |
|---------|-----|-------|-------|----------|-------|
| **Dorsia** | dorsia.com | Members-only prepayment | Dynamic minimum spend ($90+/person) | NYC, LA, Miami, Hamptons | 53+ partner restaurants in NYC, requires membership application, partners with restaurants directly |

### Reservation Alert / Notification Services

| Service | URL | Model | Notes |
|---------|-----|-------|-------|
| **Resy Notify** | Built into Resy | Free | Official Resy feature, alerts when cancellations happen. Sunday has 19% better conversion |
| **OpenTable Notify Me** | Built into OpenTable | Free | Alerts when booked tables open up |
| **NYC RSVPs** | nycrsvps.com | Free tool | Reservation open date calculator for NYC restaurants |

### Key Differentiators for Hard2Get
- **Multi-platform**: Resy + TableCheck + OpenTable + SevenRooms + AirMenus + District by Zomato
- **Multi-city**: NYC + LA + Chicago + SF + London + Sydney + Melbourne + Bangalore + Mumbai + Paris + Barcelona
- **Web-based**: No app download needed (lower friction than Snatchd iOS-only)
- **Refundable deposit model**: Pay only on success (unlike Dorsia's prepayment or ResySniper's subscription)
- **SEO-first**: Guide pages for each restaurant driving free organic traffic
- **Both snipe AND monitor**: Combines drop-time sniping (like Snatchd) + cancellation monitoring (like ResySniper)

---

## Booking Platforms & Restaurants

### 1. Resy (resy.com)
**Status**: Open-source bot exists on GitHub (github.com/jeffknaide/resy-bot)
**Market**: Largest US market, ~16,000 restaurants, dominates NYC trendy scene

#### NYC - Full List with Exact Drop Times (from Resy Blog + ResX + OpenTable)

| Restaurant | Neighborhood | Drop Time | Advance Window | Walk-in? | Notes |
|-----------|-------------|-----------|---------------|----------|-------|
| **Carbone** | Greenwich Village | 10:00 AM | 30 days | No | $50/person dinner deposit. Bloodbath at drop time |
| **Don Angie** | West Village | 9:00 AM | 7 days | — | Michelin star, famous lasagna |
| **4 Charles Prime Rib** | West Village | Unknown | Rolling | No | 32 seats, prime time (6-9pm) NEVER on Resy |
| **I Sodi** | West Village | Midnight | Rolling | — | Set alarm for 11:59 PM |
| **Via Carota** | West Village | Limited | — | Yes | Rarely appears on Resy |
| **The Polo Bar** | Midtown | 10:00 AM (phone only) | 30 days | — | Phone: (212) 207-8562 |
| **Misi** | Brooklyn | 10:00 AM | 30 days | — | Check for cancellations around 2 PM |
| **Cote** | Flatiron | Rolling | 30 days | — | Korean steakhouse |
| **Tatiana** | Lincoln Center | 12:00 PM noon | 28 days | Yes (bar) | Kwame Onwuachi, show up at 5 PM |
| **Lilia** | Williamsburg | 10:00 AM | 28 days | Yes (5 PM) | Call (718) 576-3095 for help |
| **L'Artusi** | West Village | 9:00 AM | 14 days | Yes (5 PM) | Most notified on Resy NYC |
| **Rezdora** | Flatiron | Midnight | 30 days | Yes (bar) | Michelin star, pasta tasting menu |
| **Double Chicken Please** | LES | Midnight | 6 days | Yes (80% walk-in) | No Resy Notify, line up before 5 PM |
| **Coqodaq** | Flatiron | 10:00 AM | 14 days | Yes (patio/bar) | From Cote team, fried chicken |
| **Semma** | West Village | 9:00 AM | 15 days | Yes (12 bar seats) | Michelin star, James Beard winner |
| **Bungalow** | East Village | 11:00 AM | 20 days | Yes (5 PM) | Vikas Khanna |
| **Laser Wolf** | Williamsburg | 10:00 AM | 21 days | Yes (12 bar seats) | Rooftop, Michael Solomonov |
| **Raoul's** | Soho | 8:00 AM | 30 days | Yes (8 bar seats) | Show up 4:30 PM or 10:30 PM |
| **Bangkok Supper Club** | Meatpacking | Midnight | 30 days | Yes (bar + 25%) | Thai street food elevated |
| **Bemelmans Bar** | Upper East Side | Rolling | 3 months | Yes (long wait) | Iconic, live music + martinis |
| **Le Café Louis Vuitton** | Midtown East | Midnight | 28 days | Yes (6 bar seats) | Louis Vuitton 5th Ave flagship |
| **Golden Diner** | Chinatown | Midnight | 30 days | Yes (line at 8 AM for brunch) | Honey butter pancakes famous |
| **Theodora** | Fort Greene | 9:00 AM | 30 days | Yes (bar) | Dry-aged fish specialist |
| **Kisa** | LES | Midnight | 15 days | Yes (2/3 walk-in) | From C as in Charlie team |
| **Penny** | East Village | 9:00 AM | 14 days | Yes (most seats) | Seafood counter |
| **Monkey Bar** | Midtown East | 9:00 AM | 21 days | Yes (bar) | Since 1936, prime rib |
| **Bridges** | Chinatown | 12:00 PM noon | 21 days | Yes (bar) | European bistro |
| **Borgo** | Flatiron | 10:00 AM | 21 days | Yes | Andrew Tarlow's Manhattan spot |
| **Le Chêne** | West Village | 9:00 AM | 20 days | Yes (bar) | French, 3000+ wine bottles |
| **The Four Horsemen** | Williamsburg | 7:00 AM | 30 days | Yes (5 PM bar) | Food + wine legend since 2015 |
| **I Cavallini** | Williamsburg | 8:00 AM | 14 days | Yes (40% walk-in) | From Four Horsemen team |
| **Yamada** | Chinatown | Rolling | 18 days | No | Michelin + NYT 4-star kaiseki |
| **Bong** | Crown Heights | Midnight | 20 days | Unlikely (20 seats) | Cambodian, tiny |
| **Lei** | Chinatown | 9:00 AM | 14 days | Yes (most seats) | Wine bar + Chinese |
| **Ha's Snack Bar** | LES | 12:00 PM noon | 21 days | Yes (5:30 PM) | Vietnamese, often sold out |
| **schmuck.** | East Village | 10:00 AM | 14 days | Yes (main bar) | Cocktail bar from all-star team |
| **ADDA** | East Village | 9:00 AM | 7 days | Try (5 PM) | Indian, butter chicken experience |
| **Rubirosa** | NoLita | Midnight + 11 AM next day | 7 days | Yes (half room) | SI-style thin crust pizza |
| **The Corner Store** | Soho | TBD | TBD | — | Extremely hard |
| **The Nines** | NoHo | TBD | TBD | — | Prime time impossible |
| **Dame** | West Village | TBD | TBD | — | — |
| **Minetta Tavern** | Greenwich Village | TBD | TBD | — | — |
| **Red Hook Tavern** | Brooklyn | TBD | TBD | — | — |
| **Torrisi** | Nolita | TBD | TBD | 12 bar walk-in | 4.9 stars, 12K reviews |

#### NYC - On OpenTable (with exact drop times from OpenTable blog)

| Restaurant | Slots Open | Advance Window |
|-----------|-----------|---------------|
| **Don Angie** | Daily 9:00 AM | 7 days |
| **Una Pizza Napoletana** | Daily 9:00 AM | 14 days |
| **Kabawa** | Daily 12:00 AM | 14 days |
| **Jeju Noodle Bar** | Daily 12:00 AM | 30 days |
| **Oyamel Cocina Mexicana** | Daily 12:00 AM | 181 days |

#### Miami (from Resy Blog)

| Restaurant | Neighborhood | Drop Time | Advance Window | Walk-in? | Notes |
|-----------|-------------|-----------|---------------|----------|-------|
| **Sunny's** | Little River | Rolling | 30 days | Yes (bar/terrace) | Hottest steakhouse in Miami, show up 5:30 PM |
| **AVIV** | Miami Beach | 10:00 AM | 30 days | Yes (bar) | Michael Solomonov, Israeli cuisine, 1 Hotel South Beach |
| **COTE Miami** | Design District | 10:00 AM | 30 days | Yes (bar) | Only Michelin-starred Korean steakhouse in Miami |
| **Boia De** | Buena Vista | 12:00 PM noon | 30 days | Unlikely (27 seats) | Michelin star, strip mall legend, 6 years packed |
| **Carbone VINO** | Coconut Grove | 10:00 AM | 30 days | Yes (lounge) | Major Food Group, easier than main Carbone |
| **MILA** | Miami Beach | Rolling | 45 days | Yes (before 6 PM) | Med-Asian, DJ, glamorous |
| **Tâm Tâm** | Miami | TBD | TBD | — | Vietnamese hot spot |
| **Catch Miami Beach** | Miami Beach | TBD | TBD | — | Scene restaurant |
| **Rao's Miami** | Miami | Invite-like | Limited | — | Extremely exclusive |
| **Walrus Rodeo** | Miami | TBD | TBD | — | — |
| **Mandolin Aegean Bistro** | Design District | TBD | TBD | — | Greek, perpetually packed |

#### Los Angeles (from Resy Blog + Infatuation + OpenTable)

| Restaurant | Neighborhood | Drop Time | Advance Window | Platform | Notes |
|-----------|-------------|-----------|---------------|----------|-------|
| **Alba** | West Hollywood | 9:00 AM | 7 days | Resy | Books in 30 seconds, waitlist 500-3000 nightly |
| **Ètra** | Melrose Hill | Midnight | 30 days | Resy | 65 seats, weekends gone in 1 hour, 300+ Notify list |
| **Mother Wolf** | Hollywood | Midnight | 7 days | Resy | Las Vegas meets Roman banquet, A-list celebrities |
| **Horses** | Hollywood | Midnight | 28 days | Resy | French/Californian, grungy industry scene |
| **Sushi Kaneyoshi** | Little Tokyo | Perpetually sold out | Unknown | Tock | Parking structure omakase, THE sushi spot in LA |
| **Hayato** | DTLA | 1st of month at 10:00 AM | Monthly | Tock | Kaiseki, 7 seats, $100/person deposit, gone instantly |
| **Phenakite** | Hollywood | Unknown | Unknown | Tock | Reported 20,000 person waitlist |
| **Bestia** | Arts District | Rolling | 2 months | Resy | Italian legend, walk-in bar after 9 PM |
| **Dan Tana's** | West Hollywood | Phone (6-10 days ahead) | Rolling | Phone | Regulars first, Old Hollywood institution |
| **Felix** | Venice | Midnight | 7 days | OpenTable | Best pasta in LA, bar walk-in only |
| **Kato** | DTLA | Rolling | Few weeks | Tock | Taiwanese tasting menu, bar walk-in |
| **Melisse** | Santa Monica | Rolling | ~1 month | Own site | $295 tasting, strict no-cancellation policy |
| **Providence** | Hollywood | Rolling | 2 months | Own site | OG LA fine dining, seafood, 20 years |
| **Nobu Malibu** | Malibu | Rolling | 30 days | OpenTable | Call hosts directly, online rarely works |
| **MXO by Wes Avila** | LA | Daily 12:00 AM | 30 days | OpenTable | — |
| **Hummingbird Ceviche House** | LA | Daily 12:00 AM | 90 days | OpenTable | — |
| **Saffy's** | West Hollywood | Daily 12:00 AM | 60 days | OpenTable | Middle Eastern, scene |
| **Pizzeria Bianco** | DTLA | Daily 12:00 AM | 90 days | OpenTable | Chef's Table fame, walk-in W/Th 30 min |
| **Gjelina** | Venice | Daily 12:00 AM | 30 days | OpenTable | — |
| **Jon & Vinny's** | Multiple | Daily | Rolling | Resy | — |
| **Anajak Thai** | Sherman Oaks | TBD | TBD | Resy | Featured in Resy One Who Keeps Book |
| **Donna's** | Echo Park | TBD | TBD | Resy | Italian American |
| **Ladyhawk** | West Hollywood | TBD | TBD | Resy | Mediterranean |
| **De La Nonna** | Arts District | TBD | TBD | Resy | Italian |

#### Chicago (from Resy Blog + OpenTable + AppointmentTrader)

| Restaurant | Drop Time | Advance Window | Platform | Notes |
|-----------|-----------|---------------|----------|-------|
| **Bavette's Bar & Boeuf** | 9:00 AM CT | 21 days | Resy | 170 seats but Thu-Sun 6:30-8:30 PM gone in 3-12 min. 500 covers on busy nights. 40 walk-in seats |
| **Cindy's Rooftop** | Midnight | 30 days | Resy | 103 seats but only 42 bookable (12 tables). Fri/weekend gone immediately |
| **Maxwells Trading** | TBD | TBD | Resy | Boundary-breaking, featured in Resy blog |
| **Ambar** | Daily 12:00 AM | 121 days | OpenTable | — |
| **NADU** | 30th of month at 12:00 AM | Next 2 months | OpenTable | — |
| **Kumiko** | Daily 12:00 AM | 90 days | OpenTable | Cocktail bar/kaiseki |
| **Bar La Rue** | Daily 12:00 AM | 60 days | OpenTable | — |
| **Fatpour Tapworks Wicker Park** | Daily 12:00 AM | 14 days | OpenTable | — |
| **Bavette's** (AT) | — | — | AppointmentTrader | 447 trades, highest on AT in Chicago |
| **Armitage Alehouse** | — | — | AppointmentTrader | 254 trades |
| **Crying Tiger** | — | — | AppointmentTrader | 37 trades |
| **Ciccio Mio** | — | — | AppointmentTrader | 170 trades |
| **Maple & Ash** | — | — | AppointmentTrader | 56 trades |
| **Aba Chicago** | — | — | AppointmentTrader | 28 trades |

#### San Francisco (from OpenTable + Resy + AppointmentTrader)

| Restaurant | Drop Time | Advance Window | Platform | Notes |
|-----------|-----------|---------------|----------|-------|
| **House of Prime Rib** | Rolling | Weeks | Resy | 323 AT trades, #2 most traded restaurant worldwide |
| **SAN HO WON** | TBD | TBD | Resy | 75 AT trades, Korean |
| **7 Adams** | TBD | TBD | Resy | "One of toughest reservations since opening" per Resy |
| **Flour + Water** | TBD | TBD | Resy | Iconic pasta, AT rank #4 in SF |
| **Quince** | TBD | TBD | Resy | 3 Michelin stars, AT rank #5 |
| **Verjus** | TBD | TBD | Resy | Wine bar, 7 AT trades |
| **Cafe Shoji** | Daily 12:00 AM | 7 days | OpenTable | — |
| **Bon Delire** | Daily 12:00 AM | 30 days | OpenTable | — |
| **Wayfare Tavern** | Daily 12:00 AM | 90 days | OpenTable | — |
| **Harbor House Inn** | 1st of month at 10:00 AM | Entire next month | OpenTable | Elk, CA. Monthly batch drop |
| **PRESS Restaurant** | Daily 12:00 AM | 60 days | OpenTable | St. Helena (Napa) |

#### Other US Cities (from Resy + OpenTable + AppointmentTrader)

| Restaurant | City | Drop Time | Advance Window | Platform | Notes |
|-----------|------|-----------|---------------|----------|-------|
| **Kase x Noko** | Nashville | TBD | TBD | TBD | #1 most in-demand US (OpenTable 2026) |
| **Mawn** | Philadelphia | TBD | TBD | TBD | #2 most in-demand US (OpenTable 2026) |
| **Sammie's Italian** | Austin | TBD | TBD | Resy | 49 AT trades |
| **Tell Your Friends** | Scottsdale | TBD | TBD | Resy | 9 AT trades, bar |
| **Carry On** | Phoenix | TBD | TBD | Resy | 23 AT trades |
| **Albi** | Washington DC | TBD | TBD | Resy | 27 AT trades |
| **Polo Lounge** | Beverly Hills | TBD | TBD | TBD | 133 AT trades, iconic |
| **Melfi's** | Charleston | TBD | TBD | Resy | 5 AT trades |
| **Bar Sardine** | Dallas | TBD | TBD | Resy | 14 AT trades |
| **Angela Pastificio** | Vancouver | TBD | TBD | TBD | 7 AT trades |
| **El Catrin Destileria** | Toronto | TBD | TBD | TBD | 6 AT trades |
| **Saddle River Inn** | NJ (NYC area) | TBD | TBD | TBD | 16 AT trades, $200 avg |
| **Restaurant Pearl Morissette** | Niagara | TBD | TBD | TBD | 13 AT trades |
| **1587 Prime** | Kansas City | TBD | TBD | TBD | 7 AT trades |

---

### 2. TableCheck (tablecheck.com)
**Status**: API CRACKED - Working booking script built (pizza4p-api-booking.py)
**Market**: Popular in Asia (Japan, India, SE Asia), some US/Europe

#### India

| Restaurant | City | Seats | Slots Open | Advance Window | Sells Out In |
|-----------|------|-------|-----------|---------------|-------------|
| **Pizza 4P's Indiranagar** | Bangalore | ~60 | Daily 10:00 AM | 7 days (same weekday) | Minutes |

#### Potential TableCheck Restaurants (to investigate)
- Many Japanese restaurants worldwide use TableCheck
- High-end restaurants in Singapore, Bangkok, Hong Kong
- Some European fine dining

---

### 3. AirMenus (bookings.airmenus.in)
**Status**: NOT YET CRACKED - Needs reverse engineering
**Market**: Niche, used by exclusive Indian restaurants

| Restaurant | City | Seats | Slots Open | Advance Window | Sells Out In |
|-----------|------|-------|-----------|---------------|-------------|
| **Naru Noodle Bar** | Bangalore | 20 | Monday 8:00 PM | 1 week | **90 seconds** |

**Naru Details:**
- URL: bookings.airmenus.in/eatnaru/order
- 8 counter seats + 3 tables (max 4 per table)
- Lunch: 12:30, 2:30, 4:30 PM | Dinner: 6:30, 8:30 PM (Tue-Sun)
- 90-minute slots, closed Mondays
- ~400 covers/week, all booked in <2 minutes
- Full name required, no phone/email/Instagram bookings

---

### 4. District by Zomato
**Status**: NOT YET CRACKED - Needs reverse engineering
**Market**: India-specific premium restaurants

| Restaurant | City | Seats | Slots Open | Advance Window | Sells Out In |
|-----------|------|-------|-----------|---------------|-------------|
| **Papa's Bombay** | Mumbai | 12 | 1st of month at 11:00 AM | Entire next month | **Seconds** |

**Papa's Details:**
- TIME's World's Greatest Places 2025
- Chef's counter, 12 seats only
- Open Wed-Sat for dinner at 7:30 PM
- Tasting menu: Rs 7,000++ per person
- Advance deposit: Rs 6,500/person via District by Zomato
- Cancellation within 48 hours = no refund
- Phone for same-day: +91 7738895597

---

### 5. Zomato / Swiggy Dineout / Reservego
**Status**: NOT YET CRACKED
**Market**: India mainstream restaurants

| Restaurant | City | Platform | Notes |
|-----------|------|----------|-------|
| **Phurr** | Bangalore | Zomato, Swiggy Dineout, Reservego | Elevated vegetarian, book 3-4 days ahead for weekends |
| **Kopitiam Lah** | Bangalore | TBD | Malaysian, reservation-only |
| **NAVU** | Bangalore | TBD | Chef-led minimalist, ranked #9 at 2025 Top Restaurant Awards |

---

### 6. Direct Booking (Phone/Email/WhatsApp)
**Status**: Cannot automate via API (manual or phone bot needed)

| Restaurant | City | Seats | Booking Method | Notes |
|-----------|------|-------|---------------|-------|
| **Masque** | Mumbai | 48 | Phone/WhatsApp/Email | 10-course tasting Rs 6,500, deposit required |
| **Farmlore** | Bangalore | ~20 | Email (secret-retreats.com) | Chef's table, farm-to-table |
| **The Polo Bar** | NYC | ~100 | Phone only: (212) 207-8562 | 10 AM, 30 days ahead |
| **The Lost Kitchen** | Maine | — | Handwritten postcards only | Cannot automate |
| **Rao's** | NYC | — | Invitation only | Cannot automate |

---

### 7. OpenTable (opentable.com)
**Status**: NOT YET CRACKED - Larger platform, more anti-bot measures
**Market**: 60,000+ restaurants globally, mainstream platform

Already listed restaurants under each city above with "(OpenTable)" tag.

---

### 8. SevenRooms (sevenrooms.com)
**Status**: NOT YET CRACKED
**Market**: Premium restaurants globally, used by Firedoor Sydney, Gimlet Melbourne, etc.
**Pricing**: $700+/month for restaurants

| Restaurant | City | Seats | Slots Open | Advance Window | Notes |
|-----------|------|-------|-----------|---------------|-------|
| **Firedoor** | Sydney | ~40 | 1st Wednesday of month at 12:00 PM | 3 months | Netflix Chef's Table fame, sells out immediately |
| **Gimlet** | Melbourne | Medium | Rolling | 3 months | SevenRooms, walk-ins also welcome |

---

### 9. OMAKASE (omakase.in)
**Status**: NOT YET CRACKED
**Market**: Japanese restaurants, especially Tokyo

| Restaurant | City | Slots Open | Advance Window | Notes |
|-----------|------|-----------|---------------|-------|
| **KHAO** | Tokyo | 1st of month at 10:00 AM | 3 months | Thai fine dining, cancellations posted on Instagram |

---

### 10. Restaurant's Own Website (Custom Booking)
**Status**: Need per-restaurant reverse engineering

| Restaurant | City | Slots Open | Advance Window | Notes |
|-----------|------|-----------|---------------|-------|
| **Disfrutar** | Barcelona | Rolling | 12 months | #1 World's 50 Best, own website or phone +34 933 486 896 |
| **The Chairman** | Hong Kong | 1st day of quarter at 9:00 AM | 3 months | Michelin-starred Cantonese, own website |
| **Attica** | Melbourne | Daily 9:00 AM AEDT | 90 days | $385/person, $150 deposit, own website |
| **Septime** | Paris | Daily 10:00 AM Paris time | 3 weeks | Michelin-starred, #40 World's 50 Best |

---

## London (from The Infatuation + SevenRooms + AppointmentTrader)

| Restaurant | Neighborhood | Drop Time | Advance Window | Platform | Walk-in? | Notes |
|-----------|-------------|-----------|---------------|----------|----------|-------|
| **Singburi** | Shoreditch | Rolling | Weeks | TBD | No | HOTTEST booking in London right now. No prime time available, take any slot |
| **Carbone London** | Mayfair | Rolling | Weeks | Resy | — | 101 trades on AT ($267 avg). Aggressive refreshing needed at drop |
| **Gymkhana** | Mayfair | 6:00 AM | 2 months (3 months for vaults) | SevenRooms | Try weekday lunch | Best Indian in London, 481 AT trades |
| **Normah's** | Queensway Market | 10:00 AM on specific dates | Monthly batches | Own site | — | Malaysian, months sold out. Nov reservations open Oct 6 at 10am |
| **The Devonshire** | Chiswick | 10:30 AM Thursdays | 3 weeks | Own site | Try (roof terrace) | Above a pub, best British food. Early dinner last to go |
| **Sushi Tetsu** | Clerkenwell | 12:00 PM Mondays | Following week | Own site | No (7 seats) | £187 omakase, waitlist if sold out |
| **Core by Clare Smyth** | Notting Hill | Rolling | Months | OpenTable | No | 3 Michelin stars, use "show next available" |
| **Trattoria Brutto** | Farringdon | 9:30 AM | 14 days | Own site | Yes (bar) | Push notifications for cancellations |
| **Bouchon Racine** | Farringdon | Rolling | 30 days | Own site | Call 9-11 AM Tue-Sat | French bistro above pub. Call repeatedly |
| **Chatsworth Bakehouse** | Crystal Palace | 12:30 PM Mondays | Same week | Storekit | Yes (arrive 20 min early) | Sandwiches sell out in 60 seconds. Pre-order drops Mon 12:30 |
| **Crisp Pizza W6** | Hammersmith | 11:00 AM Mondays | Same week | Storekit | Yes (4 PM Wed) | Best NY-style pizza in London. Pre-order dough, no table reservation |
| **One Club Row** | Shoreditch | Rolling | Weeks | Own site | Yes (check Walk-In lightbox) | NY glamour, before 9:30 PM impossible |
| **Lagana** | Shoreditch | Rolling | TBD | TBD | Yes (walk-in friendly) | Greek hot spot, from Pachamama team |
| **Lupa** | Highbury | Rolling | TBD | TBD | Cancellations day before | Theo James trattoria, 90-min turnover, tiny |
| **Nina** | Mayfair | Rolling | 5 months | Own site | Yes (try) | Italian, afterparty vibes |
| **Shankeys** | Hackney | Rolling | TBD | TBD | — | Indian-Irish above bookies, no fixed date approach |
| **Plates** | Shoreditch | Rolling | Weeks | Own site | Yes (solo diners) | Plant-based tasting menu. Join waitlist for cancellations |
| **Dishoom King's Cross** | King's Cross | Walk-in after 6 PM | Pre-6PM bookable | Own site | Yes (leave work early) | Walk-in only after 6 PM for <6 people |
| **Bone** | Hoxton | Rolling | 1 month | TBD | — | 7 PM sitting impossible, 9 PM easier |
| **Legado** | Shoreditch | Rolling | Advance | TBD | — | — |
| **Chiltern Firehouse** | Marylebone | Rolling | Rolling | OpenTable | — | Celebrity hotspot, historically hardest |
| **BRAT** | Shoreditch | Rolling | Rolling | Resy | — | Grill restaurant |
| **The Clove Club** | Shoreditch | Rolling | Rolling | OpenTable | — | 2 Michelin stars, tasting £95+ |
| **The Sportsman** | Kent | Phone only | Rolling | Phone | — | 26 years, still impossible |
| **Skof** | — | Waitlist only | Rolling | Own site | — | Good Food Guide Best New Restaurant |
| **Berenjak** | Soho | TBD | TBD | Resy | — | 58 AT trades, Persian |
| **Annabel's** | Mayfair | Members + guests | — | Own site | No | Members club, AT trades |
| **Afternoon Tea at The Ritz** | Piccadilly | Rolling | Months | Own site | No | AT trades, iconic |

**AppointmentTrader London Top Traded**: Gymkhana (481), Carbone (101), Berenjak (58), Dishoom (multiple)

**SevenRooms London Restaurants**: Gymkhana, Trishna, Ambassadors Clubhouse, Bibi, Brigadiers

---

## Australia

### Sydney

| Restaurant | Platform | Seats | Slots Open | Advance Window | Sells Out In |
|-----------|----------|-------|-----------|---------------|-------------|
| **Firedoor** | SevenRooms | ~40 | 1st Wednesday of month at 12:00 PM | 3 months | Immediately |
| **Saint Peter** | TBD | Small | Rolling | Weeks ahead | Fast (Josh Niland fame) |
| **Restaurant Hubert** | TBD | Medium | Rolling | Months for Saturday | No walk-ins anymore |
| **Bennelong** | TBD | Medium | Rolling | Weeks ahead | — |
| **Quay** | TBD | Medium | Rolling | 22-week wait for 4pax at 8pm | Extremely hard |

### Melbourne

| Restaurant | Platform | Seats | Slots Open | Advance Window | Sells Out In |
|-----------|----------|-------|-----------|---------------|-------------|
| **Attica** | Own website | Small | Daily 9:00 AM AEDT | 90 days | Fast for weekends |
| **Gimlet** | SevenRooms | Medium | Rolling | 3 months | Hard for prime time |
| **Cutler & Co** | TBD | Medium | Rolling | 8-19 weeks waitlist | Very hard |
| **Vue de Monde** | TBD | Small | Rolling | Months | Very hard |
| **Royal Mail Hotel** | TBD | Small | Rolling | 8-19 weeks waitlist | Very hard |

---

## Europe (from TheFork + AppointmentTrader + Web Research)

### Paris

| Restaurant | Platform | Slots Open | Advance Window | Notes |
|-----------|----------|-----------|---------------|-------|
| **Septime** | Own website | Daily 10:00 AM Paris time | 3 weeks | Michelin star, #40 World's 50 Best |
| **La Renommée** | Resy/AT | TBD | TBD | 82 AT trades, new hot spot |
| **Le Jules Verne** | TheFork | TBD | Months | Eiffel Tower, 2 AT trades (Grenoble location) |

### Barcelona

| Restaurant | Platform | Slots Open | Advance Window | Notes |
|-----------|----------|-----------|---------------|-------|
| **Disfrutar** | Own website | Rolling | 12 months | #1 World's 50 Best 2024 |
| **El Celler de Can Roca** | TBD | Rolling | Months | 3 Michelin stars |
| **Bar-Terraza Ayre Rosellón** | Resy/AT | TBD | TBD | 23 AT trades, rooftop |
| **Sips** | AT | TBD | TBD | 1 AT trade, cocktail bar |

### Madrid

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Restaurante Lana** | Resy/AT | 15 AT trades |

### Rome

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **The Court Rooftop Bar (Palazzo Manfredi)** | AT | 8 AT trades, Colosseum views |

### Berlin

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Monkey Bar** | AT | 1 AT trade |

### Palma de Mallorca

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **El Olivo** | AT | 2 AT trades |

### Warsaw

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Panorama Sky Bar** | AT | 1 AT trade |

### Dubai

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Soul Kitchen** | Resy/AT | 1 AT trade, 551 AED |
| **Carbone Dubai** | Resy/AT | 10 AT trades, avg 808 AED ($220) |
| **Bar Du Port** | AT | 12 AT trades |

### Other Europe

| Restaurant | City | Platform | Notes |
|-----------|------|----------|-------|
| **Mugaritz** | San Sebastian | TBD | 2 Michelin stars, experimental Basque |

---

## Asia (Beyond India)

### Tokyo (from OMAKASE + TableCheck + AppointmentTrader)

| Restaurant | Platform | Slots Open | Notes |
|-----------|----------|-----------|-------|
| **KHAO** | OMAKASE | 1st of month at 10:00 AM | Thai fine dining, cancellations on Instagram |
| **Pokémon Cafe** | Own site | Rolling | 106 AT trades! Osaka location too |
| **Ben Fiddich** | Resy/AT | TBD | Shinjuku, 10 AT trades, cocktail bar |
| **Bar Centifolia** | Resy/AT | TBD | Minato City, 61 AT trades, cocktail bar |
| **The SG Club** | Resy/AT | TBD | Shibuya, cocktail bar |
| **Sukiyabashi Jiro** | Concierge only | — | No public bookings, documentary fame |
| **Sushisho Saito** | Concierge only | — | 3 Michelin stars, 10 seats, no public bookings |
| **Mibu** | Invitation only | — | Japan's most exclusive, apartment building |
| **Quintessence** | Connection required | — | 3 Michelin stars, 12-dish carte blanche |

### Hong Kong (from TableCheck + AppointmentTrader)

| Restaurant | Platform | Slots Open | Advance Window | Notes |
|-----------|----------|-----------|---------------|-------|
| **The Chairman** | Own website | 1st day of quarter at 9:00 AM | 3 months | Michelin-starred Cantonese, #1 Asia's Best 50 |
| **Din Tai Fung** | TableCheck/AT | TBD | TBD | 76 AT trades, dumplings |
| **Chaat** | SevenRooms | TBD | Months ahead | Elevated Indian street food, fully booked months out |
| **Batard** | TBD | TBD | TBD | Sai Ying Pun, signature roast chicken |

### Singapore

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Multiple via TableCheck** | TableCheck | TableCheck has strong presence in Singapore (Orchard, Clarke Quay, Marina Bay Sands) |

### Seoul

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **ZEST** | Resy/AT | 4 AT trades |

---

## US - Additional Cities

### Nashville

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Kase x Noko** | TBD | #1 most in-demand reservation in US (OpenTable 2026 report) |

### Philadelphia

| Restaurant | Platform | Notes |
|-----------|----------|-------|
| **Mawn** | TBD | #2 most in-demand reservation in US (OpenTable 2026 report) |

---

## India - Additional

| Restaurant | City | Seats | Platform | Notes |
|-----------|------|-------|----------|-------|
| **Noon** | Mumbai | 26 | TBD | Reservation-only |
| **Omo by Sidecar** | Delhi | 24 | TBD | Chef-led |

---

## Platform Priority (Build Order)

| Priority | Platform | Why | Restaurants Unlocked | Markets |
|----------|----------|-----|---------------------|---------|
| 1 | **Resy** | Largest high-value market, open-source bot on GitHub, NYC goldmine | ~30+ restaurants | NYC, LA, London |
| 2 | **TableCheck** | ALREADY CRACKED, easy wins in Asia | Pizza 4P + Japanese restaurants | Bangalore, Tokyo, Singapore |
| 3 | **OpenTable** | Huge (60K restaurants), published exact drop times on blog | ~20+ restaurants | NYC, LA, Chicago, SF, London |
| 4 | **SevenRooms** | Firedoor (sells out instantly) + Gimlet + premium restaurants | 5-10 restaurants | Sydney, Melbourne, NYC |
| 5 | **AirMenus** | Naru Noodle Bar alone is worth it (90 sec sellout) | 1-5 restaurants | Bangalore |
| 6 | **District by Zomato** | Papa's Bombay is iconic target | 1-3 restaurants | Mumbai |
| 7 | **Custom websites** | Disfrutar, Attica, Septime, The Chairman | 5-10 high-value targets | Barcelona, Melbourne, Paris, HK |
| 8 | **TheFork** | Major European platform (France, Italy, Spain) | Many | Europe |
| 9 | **OMAKASE** | Japanese restaurants (KHAO Tokyo etc) | 3-5 restaurants | Tokyo |

### Total Addressable Restaurants: ~200+

---

## SEO Content Pages to Build (per restaurant)

Each page should include:
- Restaurant name, location, cuisine, vibe
- When reservations open (exact time)
- How far in advance
- Which platform (Resy/OpenTable/TableCheck)
- How fast it sells out
- Pro tips for manual booking
- CTA: "Let Hard2Get book for you - pay only if we succeed"

### Priority Pages (by estimated search volume):
1. "Carbone reservation" / "how to book Carbone" - highest volume
2. "Don Angie reservation"
3. "Lilia reservation"
4. "L'Artusi reservation" - most notified on Resy NYC
5. "Tatiana reservation"
6. "Cote reservation"
7. "Bavette's Chicago reservation" (447 AT trades = massive demand)
8. "House of Prime Rib reservation SF" (323 AT trades)
9. "Gymkhana London reservation" (481 AT trades = highest globally)
10. "Firedoor Sydney reservation"
11. "Attica Melbourne reservation"
12. "Disfrutar Barcelona reservation"
13. "Septime Paris reservation"
14. "Alba LA reservation" (500-3000 person waitlist nightly)
15. "Bemelmans Bar reservation"
16. "Pizza 4P Bangalore reservation"
17. "Naru Noodle Bar booking"
18. "Papa's Bombay reservation"
19. "The Chairman Hong Kong reservation"
20. "hardest reservations NYC" / "hardest reservations London" / "hardest reservations LA"

---

## Useful Resources

- **NYC Reservation Calculator**: nycrsvps.com/reservation-open-date-calculator
- **OpenTable Toughest List**: opentable.com/blog/toughest-restaurant-reservations/ (updated monthly with exact drop times!)
- **Resy Bot (open source)**: github.com/jeffknaide/resy-bot
- **Resy Blog NYC Guide**: blog.resy.com/2025/09/toughest-restaurant-reservations-nyc/ (30+ restaurants with EXACT drop times)
- **Resy Blog Miami Guide**: blog.resy.com/2025/09/how-to-get-into-toughest-reservations-miami/
- **Resy Blog "One Who Keeps the Book" (all cities)**: blog.resy.com/category/the-one-who-keeps-the-book/
- **Infatuation London Guide**: theinfatuation.com/london/guides/toughest-restaurant-reservations-london
- **Infatuation LA Guide**: theinfatuation.com/los-angeles/guides/toughest-restaurant-reservations-los-angeles
- **Snatchd Services (NYC restaurants)**: snatchd.app/services
- **Snatchd Booking Data**: snatchd.app/bookingData
- **AppointmentTrader By City**: appointmenttrader.com/best-restaurants-in-{city}
- **AppointmentTrader Global Homepage**: appointmenttrader.com (most traded restaurants worldwide with trade counts)
- **Hot Dinners London**: hot-dinners.com/Features/Hot-Dinners-recommends/get-reservation-london-popular-restaurants-hard-to-book
- **Our Working Scripts**: for_dump/pizza4p-api-booking.py (TableCheck - WORKING)

## Platform Research Sources (what we scraped from each)

| Platform | Source URL | Data Extracted |
|----------|-----------|---------------|
| **Resy Blog** | blog.resy.com/category/the-one-who-keeps-the-book/ | Exact drop times, advance windows, walk-in tips for 30+ NYC, 6 Miami, 6+ LA restaurants |
| **OpenTable Blog** | opentable.com/blog/toughest-restaurant-reservations/ | Exact drop times for Chicago (5), LA (5), NYC (5), SF (5) restaurants |
| **Snatchd** | snatchd.app/services | 20+ NYC Resy restaurants they snipe: TATIANA, DCP, COTE, Semma, L'Artusi, Carbone, Lilia, etc. |
| **AppointmentTrader** | appointmenttrader.com | Trade volume data for 50+ restaurants globally. Top: Bavette's Chicago (447), House of Prime Rib SF (323), Gymkhana London (481), Ciccio Mio (170), Polo Lounge (133), Pokémon Cafe Osaka (106) |
| **The Infatuation** | theinfatuation.com/london/guides/... & /los-angeles/guides/... | London (18 restaurants with booking strategies), LA (14 restaurants with booking strategies) |
| **SevenRooms** | sevenrooms.com/explore/ | Gymkhana London (2 months advance), Firedoor Sydney (1st Wed of month) |
| **TableCheck** | tablecheck.com | Strong in Japan, Hong Kong, Singapore. Pizza 4P's API cracked |
| **OMAKASE** | omakase.in | Japanese restaurants, KHAO Tokyo (1st of month 10AM) |

---

## Restaurant Count Summary

| Region | Count | Key Restaurants |
|--------|-------|----------------|
| **NYC** | ~45 | Carbone, Don Angie, 4 Charles, I Sodi, Tatiana, Lilia, L'Artusi, Rezdora, Bemelmans, Le Café LV, Yamada, Bong |
| **Miami** | ~11 | Sunny's, AVIV, COTE Miami, Boia De, Carbone VINO, MILA, Rao's |
| **LA** | ~24 | Alba, Ètra, Mother Wolf, Horses, Sushi Kaneyoshi, Hayato, Phenakite, Bestia, Dan Tana's |
| **Chicago** | ~14 | Bavette's (447 AT trades!), Cindy's, Ambar, NADU, Kumiko, Ciccio Mio |
| **SF** | ~11 | House of Prime Rib (323 AT trades), 7 Adams, Flour + Water, Quince |
| **Other US** | ~16 | Kase x Noko (Nashville #1), Mawn (Philly #2), Polo Lounge (133 AT), Sammie's Austin |
| **London** | ~28 | Singburi, Carbone, Gymkhana (481 AT), Normah's, Devonshire, Sushi Tetsu, Core, Dishoom |
| **Paris** | ~3 | Septime, La Renommée (82 AT) |
| **Barcelona** | ~4 | Disfrutar, El Celler de Can Roca, Sips |
| **Other Europe** | ~8 | Restaurante Lana Madrid, Court Rooftop Rome, Carbone Dubai (10 AT), Soul Kitchen Dubai |
| **Sydney** | ~5 | Firedoor, Saint Peter, Restaurant Hubert, Quay, Bennelong |
| **Melbourne** | ~5 | Attica, Gimlet, Cutler & Co, Vue de Monde, Royal Mail Hotel |
| **Bangalore** | ~5 | Pizza 4P, Naru Noodle Bar, Phurr, Kopitiam Lah, NAVU |
| **Mumbai** | ~3 | Papa's Bombay, Masque, Noon |
| **Delhi** | ~1 | Omo by Sidecar |
| **Tokyo** | ~9 | KHAO, Pokémon Cafe (106 AT!), Bar Centifolia (61 AT), Jiro, Saito |
| **Hong Kong** | ~4 | The Chairman, Din Tai Fung (76 AT), Chaat, Batard |
| **Singapore/Seoul** | ~2 | Multiple TableCheck, ZEST Seoul |
| **Canada** | ~2 | Angela Pastificio Vancouver, El Catrin Toronto |
| **TOTAL** | **~200+** | |

---

## Legal Considerations

- **NYC**: Restaurant Reservation Anti-Piracy Act passed (targeting bots)
- **Resy**: Reports bot users have 4x no-show rate - our model (refundable deposit) mitigates this
- **Terms of Service**: Most platforms prohibit automation - operate carefully
- **Australia**: Deposit-based restaurants (Attica $150/person) reduce no-show risk
- **Europe**: Many restaurants require €50-200/person deposits, cancellation fees €25-75
- **Mitigation**: Position as "booking assistant" not "bot", ensure users actually show up, refundable deposit model aligns incentives

---

## APPENDIX A: Additional Competitor Platforms (Feb 2026 Research)

### Reservation Marketplaces (New Finds)

| Service | URL | Model | Notes |
|---------|-----|-------|-------|
| **TableConnect** | tableconnect.io | Buy/sell marketplace | Stripe payments, reservation verification, claims lower fees than AppointmentTrader, shares profits with restaurants |
| **Tablz** | tablz.com | Premium seating selection + dynamic pricing | Integrates with existing reservation systems, charges for premium seats (booths, views, corners). Mid-to-upscale target |

### Key Market Data (from Dojo 2025 Report + Food & Wine)
- AppointmentTrader generated **$5.7M in reservation sales** in one year, taking 20-30% cut
- One Brown University student earned **$100K over 19 months** reselling reservations on AT
- **80% of consumers** support protections against unauthorized reservation resellers (National Restaurant Association)
- **NYC**: Restaurant Reservation Anti-Piracy Act expected to be signed
- **Louisiana**: Moving to ban online reservation trading
- The French Laundry reservations resell for **$2,086** avg on secondary market
- Noma reservations resell for **$1,300** avg
- El Celler de Can Roca: **$270** avg resale
- Disfrutar: **$252** avg resale
- Osteria Francescana: **$216** avg resale
- Nobu Malibu: **$192** avg resale
- Pujol: **$181** avg resale
- Sexy Fish Miami: **$163** avg resale
- Firedoor Sydney: **$130** avg resale

---

## APPENDIX B: Tock Platform Restaurants (Major Missing Platform)

**Tock** (exploretock.com) is a MAJOR platform we haven't covered. It powers many of the world's most exclusive tasting-menu restaurants. These are NOT on Resy or OpenTable.

### Tock Restaurants - LA

| Restaurant | Drop Time | Advance Window | Seats | Notes |
|-----------|-----------|---------------|-------|-------|
| **Hayato** | 1st of month at 10:00 AM | Monthly | 7 | Kaiseki, $100 deposit, gone instantly |
| **N/Naka** | Sundays at 10:00 AM PST | Weekly | Small | 2 Michelin stars, 13-course kaiseki, fills in minutes |
| **Sushi Kaneyoshi** | Perpetually sold out | Unknown | Tiny | Parking structure omakase, THE sushi spot in LA |
| **Phenakite** | Unknown (locked Tock page) | Unknown | Small | Reported 20,000 person waitlist |
| **Sawa** (by Kaneyoshi) | TBD | TBD | 6 | Cocktail + omakase bar |

### Tock Restaurants - Chicago

| Restaurant | Drop Time | Advance Window | Seats | Notes |
|-----------|-----------|---------------|-------|-------|
| **Alinea** | 15th of month at 11:00 AM | 2 months | Medium | 3 Michelin stars, gone in 1 minute. Non-refundable |
| **Ever** | 1st Tuesday of month at 9:00 AM | 2-3 months | Small | Michelin star, $100/person deposit, Curtis Duffy |
| **Oriole** | Rolling | 90 days | Small | 2 Michelin stars, seasonal tasting menu |
| **Kyōten** | Saturdays at 10:00 PM | 4 weeks | Small | 18-bite omakase, $deposit required. Can go offline for weeks |
| **Kasama** | Daily at 12:00 AM | 45 days | Small | World's first Michelin-starred Filipino restaurant. 13-course |
| **Omakase Yume** | 1st of month | 2 months | 6/seating | Michelin-starred, 16-course, 300 sq ft |

### Tock Restaurants - NYC

| Restaurant | Drop Time | Advance Window | Notes |
|-----------|-----------|---------------|-------|
| **Eleven Madison Park** | Rolling | Months | 3 Michelin stars, plant-based tasting menu |
| **Atomix** | Rolling | Months | 2 Michelin stars, Korean tasting menu |
| **Chef's Table at Brooklyn Fare** | Rolling | Months | 3 Michelin stars |
| **Le Bernardin** | Rolling | Months | 3 Michelin stars |

### Tock Restaurants - Other Cities

| Restaurant | City | Drop Time | Notes |
|-----------|------|-----------|-------|
| **SingleThread** | Healdsburg, CA | Rolling | 3 Michelin stars, farm-restaurant-inn |
| **The French Laundry** | Yountville, CA | Rolling | 3 Michelin stars, **$2,086 avg resale price** |
| **Noma** (LA Residency) | Silver Lake, LA | Sold out in <3 min | $1,500/person, Jan 2026 |

---

## APPENDIX C: Dojo 2025 World's Most Exclusive Restaurants (Full Rankings)

### Global Top 20

| Rank | Restaurant | City | Country | Wait (days) | Instagram | Monthly Searches | Score |
|------|-----------|------|---------|-------------|-----------|-----------------|-------|
| 1 | **The Lost Kitchen** | Freedom, ME | USA | Postcard | 349,600 | 66,210 | 84.9 |
| 2 | **Rao's** | New York | USA | Members only | 50,900 | 27,100 | 81.4 |
| 3 | **Disfrutar** | Barcelona | Spain | 365 | 332,200 | 110,000 | 79.3 |
| 4 | **House of Prime Rib** | San Francisco | USA | 365 | 52,100 | 90,500 | 76.7 |
| 5 | **El Celler de Can Roca** | Girona | Spain | 330 | 661,800 | 60,500 | 75.7 |
| 6 | **The Bank Tavern** | Bristol | UK | 365 | 14,400 | 12,100 | 73.3 |
| 7 | **Pujol** | Mexico City | Mexico | 180 | 447,800 | 118,400 | 73.0 |
| 8= | **Damon Baehrel** | New York | USA | 365 | 88 | 1,050 | 72.8 |
| 8= | **Noma** | Copenhagen | Denmark | 90 | 1,300,000 | 246,000 | 72.8 |
| 10 | **La Mercerie** | Marseille | France | 180 | 30,600 | 95,160 | 69.5 |
| 11 | **Mugaritz** | Gipuzkoa | Spain | 180 | 295,300 | 35,000 | 68.7 |
| 12 | **The Inn at Little Washington** | Washington, VA | USA | 180 | 54,700 | 54,200 | 68.0 |
| 13 | **Firedoor** | Sydney | Australia | 180 | 182,400 | 24,200 | 67.6 |
| 14= | **Osteria Francescana** | Modena | Italy | 90 | 1,600,000 | 60,500 | 67.0 |
| 14= | **De Librije** | Zwolle | Netherlands | 180 | 66,200 | 27,100 | 67.0 |
| 16 | **Mesa 1** | Punta de Mita | Mexico | 180 | 98,300 | 30 | 66.1 |
| 17 | **Nina** | London | UK | 180 | 14,100 | 8,980 | 65.9 |
| 18 | **Tsuke Edomae** | Austin | USA | 180 | 12,800 | 5,400 | 65.8 |
| 19 | **Orso** | Anchorage | USA | 180 | 973 | 5,810 | 65.7 |
| 20 | **Cafe Lafayette Dinner Train** | North Woodstock | USA | 180 | 1,400 | 2,410 | 65.6 |

### US Top 10

| Rank | Restaurant | City | Wait | Monthly Searches | Score |
|------|-----------|------|------|-----------------|-------|
| 1 | **The Lost Kitchen** | Freedom, ME | Postcard | 66,210 | 89.8 |
| 2 | **Rao's** | New York | Members only | 27,100 | 82.2 |
| 3 | **House of Prime Rib** | San Francisco | 365 days | 90,500 | 77.8 |
| 4 | **Damon Baehrel** | New York | 365 days | 1,050 | 72.8 |
| 5 | **The Inn at Little Washington** | Washington, VA | 180 days | 54,200 | 69.0 |
| 6 | **The French Laundry** | Yountville, CA | 60 days | 165,000 | 68.4 |
| 7 | **Tsuke Edomae** | Austin | 180 days | 5,400 | 65.9 |
| 8 | **Orso** | Anchorage | 180 days | 5,810 | 65.7 |
| 9 | **Cafe Lafayette Dinner Train** | North Woodstock | 180 days | 2,410 | 65.6 |
| 10 | **MILA** | Miami | 120 days | 50,060 | 63.6 |

---

## APPENDIX D: Chicago Deep Dive (15 Hardest - TastingTable)

| Restaurant | Drop Time | Advance Window | Platform | Seats | Notes |
|-----------|-----------|---------------|----------|-------|-------|
| **Kasama** | Daily 12:00 AM | 45 days | Resy | Small | World's first Michelin-starred Filipino, 13-course |
| **Mirra** | Rolling | 1 month | OpenTable | 30 | Mexican-Indian fusion, Bucktown, 4:30-10:30 PM only |
| **Tre Dita** | Midnight | 7 days | Resy | Medium | St. Regis, Tuscan, Chef Evan Funke (also Mother Wolf LA) |
| **Akahoshi Ramen** | Mondays at 12:00 PM noon | 5 weeks | OpenTable | Small | Logan Square, communal table, no phone |
| **Alinea** | 15th of month at 11:00 AM | 2 months | Tock | Medium | 3 Michelin stars, gone in 1 minute |
| **Bavette's** | 9:00 AM | 21 days | Resy | 170 | Notify list up to 1,400 names. Walk-in bar only |
| **Armitage Alehouse** | 9:00 AM | 14 days | Resy | Medium | "Booking is an extreme sport" - Yelp reviewer |
| **Kyōten** | Saturdays at 10:00 PM | 4 weeks | Tock | Small | 18-bite omakase, can go offline |
| **Monteverde** | Midnight | 30 days | Resy | Medium | Notify list up to 1,400. Try lunch (160 notify vs 1400 dinner) |
| **Oriole** | Rolling | 90 days | Tock | Small | 2 Michelin stars |
| **Ever** | 1st Tuesday of month at 9:00 AM | 2-3 months | Tock | Small | $100/person deposit, Curtis Duffy |
| **Trivoli Tavern** | Rolling | 21 days | Resy | Medium | Creative cocktails, West Loop |
| **Pizz'amici** | Rolling | 30 days | OpenTable | 30 + 7 bar | Walk-in wait 2+ hours |
| **Omakase Yume** | 1st of month | 2 months | Resy | 6/seating | Michelin-starred, 300 sq ft |
| **Alla Vita** | Rolling | 60 days | OpenTable | Medium | 8-week dinner wait common |
| **Rose Mary** | Rolling | 60 days | OpenTable | Medium | Sells out quickly |

---

## APPENDIX E: Australia Deep Dive (New Finds)

### Melbourne - Additional

| Restaurant | Neighborhood | Drop Time | Advance Window | Seats | Platform | Notes |
|-----------|-------------|-----------|---------------|-------|----------|-------|
| **Chae** | Cockatoo | LOTTERY SYSTEM | Ongoing | 6 | Own site | HARDEST IN AUSTRALIA. 7,618 lottery entries for <600 seats. Some entered 100+ times |
| **Matsu** | Footscray | 1st of month at 10:00 PM | Monthly | 4 | Own site | Japanese, 4 seats only |
| **Minamishima** | Richmond | Rolling | 1-2 months | Small | Own site | Japanese omakase |
| **Enter Via Laundry** | Carlton North | Rolling | 3 months | Small | Own site | — |

---

## APPENDIX F: Europe Deep Dive (New Finds)

| Restaurant | City | Country | Wait | Platform | Notes |
|-----------|------|---------|------|----------|-------|
| **Osteria Francescana** | Modena | Italy | 90 days | Own site | 3 Michelin stars, Massimo Bottura, $216 avg resale |
| **De Librije** | Zwolle | Netherlands | 180 days | Own site | 3 Michelin + green star |
| **The Bank Tavern** | Bristol | UK | 365 days | Own site | #6 most exclusive globally (surprise pub entry!) |
| **La Mercerie** | Marseille | France | 180 days | Own site | Score 69.5, massive 95K monthly searches |
| **Mirazur** | Menton | France | Months | Own site (mirazur.fr) | Mauro Colagreco, €450/person cancellation penalty |
| **Armando al Pantheon** | Rome | Italy | Midnight | Own site | 20 bookable seats, 30 days advance, ignores emails/calls |
| **Noma** | Copenhagen | Denmark | 90 days | Tock | $1,300 avg resale, 1.3M Instagram followers |
| **Pujol** | Mexico City | Mexico | 180 days | Own site | Enrique Olvera, #7 most exclusive globally, $181 resale |
| **Mesa 1** | Punta de Mita | Mexico | 180 days | Own site | #16 globally |

---

## APPENDIX G: Additional US Restaurants (from Food & Wine, Eater, Mental Floss)

| Restaurant | City | Wait | Platform | Notes |
|-----------|------|------|----------|-------|
| **The French Laundry** | Yountville, CA | 60 days | Tock | 3 Michelin stars, **$2,086 avg resale** (#1 worldwide), 165K monthly searches |
| **Damon Baehrel** | Earlton, NY | 365 days | Direct only | 88 Instagram followers, 12-acre farm, all self-grown ingredients |
| **The Inn at Little Washington** | Washington, VA | 180 days | OpenTable | 54,200 monthly searches, ornate decor |
| **Tsuke Edomae** | Austin, TX | 180 days | Tock | 8 seats, 21 courses, score 65.8 |
| **Orso** | Anchorage, AK | 180 days | OpenTable | 5,810 monthly searches |
| **Cafe Lafayette Dinner Train** | North Woodstock, NH | 180 days | Own site | Dining on a train, 2,410 monthly searches |
| **Sexy Fish** | Miami | Months | Own site | $163 avg resale, London original |
| **Mujō** | Atlanta | TBD | TBD | Featured in F&W hardest reservations |
| **Bacanora** | Phoenix | TBD | TBD | Featured in F&W hardest reservations |
| **Flour + Water** | San Francisco | Midnight, 28 days | Resy | 11 tables, Steve Jobs was turned away |
| **N/Naka** | LA (Palms) | Sundays 10:00 AM PST | Tock | 2 Michelin stars, 13-course, fills in minutes |
| **Bungalow** (NYC) | East Village | 11:00 AM, 20 days | Resy | 18-month waitlist per Eater |
| **Noma LA Residency** | Silver Lake | Sold out <3 min | Tock | $1,500/person, Tock crashed at launch |

---

## APPENDIX H: LA Deep Dive (from Resident + Infatuation)

| Restaurant | Drop Time | Advance Window | Platform | Seats | Notes |
|-----------|-----------|---------------|----------|-------|-------|
| **N/Naka** | Sundays 10:00 AM PST | Weekly | Tock | Small | 2 Michelin, 13-course, fills in minutes |
| **Hayato** | 1st of month 10:00 AM | Monthly | Tock | 7 | $100 deposit, gone instantly |
| **Mélisse** | 1st week of month | Monthly | OpenTable | 14 | 2 Michelin, 18-course, $295, NO cancellation/reschedule |
| **Anajak Thai** | 9:00 AM | 30 days | Resy | Medium | Omakase drops 2 weeks ahead. Thai Taco Tuesday walk-in |
| **Sushi Kaneyoshi** | Sold out always | Unknown | Tock | Tiny | "Crystals? Magic? A flesh sacrifice?" - Infatuation |

---

## APPENDIX I: NYC Additional (from Snatchd Full List)

Restaurants Snatchd actively snipes (confirms high demand on Resy):
- TATIANA
- Double Chicken Please
- COTE
- Semma
- L'Artusi
- Carbone
- Lilia
- Minetta Tavern
- Bungalow
- Rezdóra
- Torrisi Bar & Restaurant
- The Four Horsemen
- Red Hook Tavern
- Misi
- Monkey Bar
- Raoul's
- Coqodaq
- Thai Diner

---

## UPDATED RESTAURANT COUNT (Feb 2026)

| Region | Count | Notes |
|--------|-------|-------|
| **NYC** | ~50+ | Resy + OpenTable + Tock |
| **Miami** | ~12 | Resy dominant |
| **LA** | ~30+ | Resy + Tock + OpenTable |
| **Chicago** | ~25+ | Resy + Tock + OpenTable |
| **SF / Napa** | ~15+ | Resy + OpenTable + Tock |
| **Other US** | ~20+ | Austin, Nashville, Philly, DC, Anchorage, Phoenix, etc. |
| **London** | ~30+ | SevenRooms + Resy + own sites |
| **Paris / France** | ~5+ | Septime, La Mercerie, Mirazur, La Renommée |
| **Spain** | ~5 | Disfrutar, El Celler, Mugaritz, Sips, Bar-Terraza |
| **Italy** | ~3 | Osteria Francescana, Armando al Pantheon |
| **Other Europe** | ~10+ | Netherlands, Denmark, Bristol, Madrid, Rome, Berlin, Dubai |
| **Australia** | ~15+ | Sydney + Melbourne (Chae is HARDEST with lottery) |
| **India** | ~10+ | Bangalore, Mumbai, Delhi |
| **Japan** | ~10+ | Tokyo (OMAKASE, Tock, TableCheck, concierge-only) |
| **Hong Kong** | ~5 | The Chairman, Din Tai Fung, Chaat, Batard |
| **Mexico** | ~3 | Pujol, Mesa 1 |
| **Canada** | ~3 | Angela Pastificio Vancouver, El Catrin Toronto |
| **GRAND TOTAL** | **~250+** | Across 10+ platforms |

---

## KEY PLATFORMS SUMMARY (for engineering prioritization)

| Platform | # Restaurants | Difficulty to Crack | Priority |
|----------|--------------|-------------------|----------|
| **Resy** | ~80+ | Medium (open source bot exists) | #1 |
| **Tock** | ~30+ | High (prepayment, deposits) | #2 |
| **OpenTable** | ~40+ | Medium-High (anti-bot) | #3 |
| **TableCheck** | ~10+ | DONE (API cracked) | Done |
| **SevenRooms** | ~15+ | Medium | #4 |
| **Own Website** | ~30+ | Per-restaurant | Ongoing |
| **AirMenus** | ~5 | Medium | #5 |
| **District by Zomato** | ~3 | Medium | #6 |
| **OMAKASE** | ~5 | Medium | #7 |
| **TheFork** | ~10+ | Medium | #8 |
| **Storekit** (London bakeries) | ~3 | Low | #9 |
