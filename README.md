# Caribbean Adventure RD

Curated adventure tours in Puerto Plata, Dominican Republic.

**Live:** https://www.caribbeanadventurerd.com

A bilingual (EN/ES) marketing and booking-inquiry site. Visitors browse hand-picked
local activities and submit a booking request; the owner is notified by email and
confirms manually. There are no online payments or prices on the site by design —
see ADR 3 in [DECISIONS.md](DECISIONS.md).

| Role | Person |
|------|--------|
| Owner | Junior Marte |
| Developer | Eddy Ozoria |

---

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Resend** for booking notification emails
- **Vercel** hosting, deployed from GitHub

> **Important:** this Next.js version has breaking changes relative to most
> training data and older tutorials. Read the guides in `node_modules/next/dist/docs/`
> before writing code. See [AGENTS.md](AGENTS.md).

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Environment variables

Create `.env.local`:

```
RESEND_API_KEY=re_...
```

Without it the **build fails** — not just email sending. The Resend client is
constructed at module scope in [src/app/api/booking/route.ts](src/app/api/booking/route.ts),
and its constructor throws on a missing key.

---

## Project Structure

```
src/
  app/
    page.tsx              Landing page — hero carousel, categories, featured
    adventures/           Activity listings with category filter
    gallery/              Photo gallery with filters and lightbox
    about/                Puerto Plata history and owner bio
    contact/              Booking inquiry form, map, WhatsApp
    privacy/ terms/ cancellation/    Legal pages (EN/ES)
    api/booking/route.ts  Resend email notification endpoint
    icon.svg              Brand mark — source for all generated icons
    opengraph-image.tsx   Social share image, generated with next/og
  components/             Header, Footer, TopBanner, ActivityCard,
                          HeroCarousel, PhotoGallery, VideoGallery
  context/                LanguageContext — EN/ES toggle
  data/
    activities.ts         Activity data model — add new activities here
    gallery.ts            Gallery photos and videos, with EN/ES captions
    translations.ts       All EN/ES strings — add new copy here
scripts/
  generate-icons.mjs      Regenerates favicon/apple/PWA icons from icon.svg
public/images/            Tour photos (tour-01 … tour-26)
public/videos/            Tour videos — see its README before adding any
```

**Content is static.** Activities live in TypeScript, not a database, so adding
or editing one means a code change and a deploy (ADR 2).

---

## Deployment

Pushing to `main` deploys to production automatically.

```bash
git push origin main
```

| Item | Value |
|------|-------|
| Vercel project | `caribbean-adventure-rd` (emozca team) |
| GitHub repo | `accountmanager-1991/CaribbeanAdventureRDv` |
| DNS host | Squarespace Domains |

### Do not delete `vercel.json`

It pins `framework: "nextjs"`. The Vercel project's dashboard preset is still
set to "Other", so without this file Vercel skips the Next.js build, serves
`public/` as static files, and **every route on the live domain 404s while the
deployment still reports "Ready"**. This has broken the site twice. See ADR 6
and TD-009.

### Verifying a deploy

```bash
curl -s -o /dev/null -w '%{http_code}' https://www.caribbeanadventurerd.com/
curl -s -o /dev/null -w '%{http_code}' https://www.caribbeanadventurerd.com/api/booking
```

The site root should return `200`. The API should return `405` — only `POST` is
exported, so 405 proves the module loaded and `RESEND_API_KEY` is present. A
`500` means the environment variable is broken.

---

## Documentation

| File | Contents |
|------|----------|
| [PROJECT-BRIEF.md](PROJECT-BRIEF.md) | Scope, problem, stakeholders, success criteria |
| [SESSION-STATUS.md](SESSION-STATUS.md) | Current state, next steps, session history |
| [DECISIONS.md](DECISIONS.md) | Architecture decision records |
| [TECH-DEBT.md](TECH-DEBT.md) | Known shortcuts and fix-later items |
| [RESEARCH-LOG.md](RESEARCH-LOG.md) | Findings, diagnostics, open questions |
| [CHANGELOG.md](CHANGELOG.md) | Release history |
| [AGENTS.md](AGENTS.md) | Instructions for AI coding agents |
