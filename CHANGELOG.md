# Changelog

All notable changes to Caribbean Adventure RD will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- More tour videos as footage arrives
- Persist language preference in localStorage
- Server-side form validation with Zod
- Customer confirmation email after booking submission
- Resend sender address on a verified domain

---

## [0.4.1] - 2026-09-23

### Added
- 8 new photos from Junior (`tour-27`–`tour-34`): the Mount Isabel de Torres
  viewpoint, the cacao and coffee houses, a north-coast beach, garden wildlife
  and a tour group arriving at the tobacco stop
- **Coffee & Chocolate** gallery category — four of the new photos are the
  cacao/coffee stops, which no existing category covered
- First tour video (`tour-highlights.mp4`), so the Tour Videos section on
  `/gallery` now renders instead of staying hidden

### Changed
- Hero carousel now leads with the Mount Isabel de Torres panorama and
  includes a coffee shot; 12 → 14 slides
- Gallery now holds 34 photos

### Notes
- The video needed no transcoding: 848×478, 4.2s, 898 KB, with its `moov` atom
  already at the front, so it streams rather than downloading in full first.
  Verified in production returning HTTP 206 for range requests.
- No ffmpeg available on the build machine, so the video poster is a still
  photo rather than an extracted frame.

---

## [0.4.0] - 2026-09-23

### Added
- Photo gallery page (`/gallery`) with category filters — City & Culture,
  Nature, Beach & Coast, Our Guests
- Lightbox with keyboard navigation (Esc to close, arrow keys to move) that
  returns focus to the thumbnail it was opened from
- Bilingual EN/ES captions for all 26 photos, doubling as alt text
- Brand icon: a sun-and-waves mark in the site's ocean/sunset palette
  (`src/app/icon.svg`), plus `favicon.ico` at 16/32/48px, a 180px Apple touch
  icon and 192/512px PWA icons
- `scripts/generate-icons.mjs` to regenerate all icons from the source mark
- Open Graph image for link previews, generated with `next/og`
- Open Graph, Twitter card, canonical URL, `metadataBase` and robots metadata
- Video gallery section, hidden until `galleryVideos` is populated
- `public/videos/README.md` documenting how to add and compress videos

### Fixed
- **Google displayed the Vercel logo as the site icon.** `src/app/favicon.ico`
  was still the create-next-app default — it carried the same timestamp as the
  other scaffold files and had never been replaced.
- `tour-13` and `tour-19` displayed rotated 90°; they were stored sideways with
  no EXIF orientation flag for the renderer to correct
- Hero carousel no longer includes a portrait photo that was being cropped to a
  narrow sliver in the full-bleed layout
- Replaced the `priority` prop, deprecated in Next.js 16, with `loading` and
  `fetchPriority`

### Changed
- Compressed all 26 tour photos: **20.5 MB → 9.3 MB** (TD-001). Both dimensions
  are now capped at 1920px; a width-only cap had left two 6.6-megapixel
  portrait images essentially untouched.
- Hero carousel expanded from 10 to 12 slides, now including the coastline and
  Fort San Felipe
- All 26 photos are now used; 11 had been sitting unreferenced on disk

### Removed
- Five unused create-next-app scaffold SVGs, including `vercel.svg`

---

## [0.3.1] - 2026-08-27

Recovery release. The Vercel project was deleted along with an old profile,
taking the live site down. No application code changed — this restores
deployment and pins the configuration that was silently broken from the start.

### Added
- `vercel.json` pinning `framework: "nextjs"` so git-triggered deploys build correctly
- `.vercelignore` excluding the 26 duplicate WhatsApp originals from deployments
- GitHub integration — pushes to `main` now auto-deploy to production

### Fixed
- Site returned 404 on every route despite deployments reporting "Ready". The Vercel
  Framework Preset was set to "Other", so Vercel skipped the Next.js build and served
  `public/` as static files. This was the unresolved blocker from Session 1 and it
  reproduced on the rebuilt project, since CLI-created projects default to "Other".
- Custom domain `caribbeanadventurerd.com` served `DEPLOYMENT_NOT_FOUND`. The domain
  was still owned at the account level by the deleted profile's Vercel account;
  reclaimed through `_vercel` TXT ownership verification.
- Apex domain now issues a 308 redirect to `www`, establishing a single canonical host.
- Git pushes were authenticating as the wrong GitHub account. Added a repo-local
  credential helper for `accountmanager-1991` so other projects are unaffected.

### Changed
- Vercel project renamed from `caribbeanadventuerd` (typo) to `caribbean-adventure-rd`
- `RESEND_API_KEY` re-provisioned on the new project (Production + Development)

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
