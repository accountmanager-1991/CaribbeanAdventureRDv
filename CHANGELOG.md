# Changelog

All notable changes to Caribbean Adventure RD will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Image optimization (compress tour photos)
- Custom domain setup
- Persist language preference in localStorage
- Server-side form validation with Zod

---

## [0.3.0] - 2026-04-03

### Added
- About page (`/about`) with Puerto Plata history (founded 1502)
- Junior Marte biography section highlighting 20+ years in tourism
- Values section: experience, customer service, local knowledge, safety
- Photo gallery strip on about page
- Real tour photos replacing emoji placeholders throughout site
- Hero carousel with 10 rotating photos (4-second intervals)
- Photo backgrounds on category grid cards

### Removed
- Star ratings and review counts from activity cards (not ready for launch)
- Emoji-only placeholders on activity cards and category grid

---

## [0.2.0] - 2026-04-03

### Added
- English/Spanish bilingual support with toggle button in header (🇺🇸/🇩🇴)
- Contact page (`/contact`) with booking inquiry form
- Booking form fields: name, email, phone, date, guests, activity selector, "Other" option
- Google Maps embed showing Puerto Plata Central Park (satellite view)
- WhatsApp button linking to (+1) 809-974-3407
- Email notifications via Resend — form submissions sent to juniormarte67@gmail.com with CC to accountmanager@emozca.com
- Contact info top banner on all pages (phone, WhatsApp, email, location)
- Privacy Policy page (`/privacy`) in EN/ES
- Terms & Conditions page (`/terms`) in EN/ES
- Cancellation Policy page (`/cancellation`) with 48hr/24hr/no-show tiers in EN/ES
- Privacy and terms checkbox required on booking form
- Loading state on form submit button

### Changed
- Activity cards show "Inquire" button instead of prices (inquiry-based model)
- Footer expanded to 4 columns with legal links
- "Book Now" buttons throughout site now link to `/contact`

---

## [0.1.0] - 2026-04-03

### Added
- Initial Next.js 16 + TypeScript + Tailwind CSS project scaffold
- Landing page with hero section, category browser, featured adventures, "Why Us" section, CTA
- Adventures listing page (`/adventures`) with category filter buttons
- 6 sample Puerto Plata activities: Snorkeling Sosua Bay, 27 Waterfalls Damajagua, Cable Car & Fort San Felipe, Sunset Catamaran, Dominican Cooking Class, Jungle Zip Line
- Activity data model (`src/data/activities.ts`) with full TypeScript types
- Reusable ActivityCard component with ratings, duration, location
- Sticky header with navigation and mobile hamburger menu
- 3-column footer with brand, links, contact
- Dominican tourism color scheme: ocean blue, sunset orange, palm green, sand
- Project documentation: CLAUDE.md, SESSION-STATUS.md, PROJECT-BRIEF.md
- GitHub repo and Vercel project setup
