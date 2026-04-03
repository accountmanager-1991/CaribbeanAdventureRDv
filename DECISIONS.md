# Architecture Decision Records

**Project:** Caribbean Adventure RD

This document tracks key technical and architectural decisions made during the project.

---

## Decisions Log

### 5. Client-Side Language Toggle (Not i18n Routing)

**Date:** 2026-04-03
**Status:** Accepted
**Deciders:** Eddy Ozoria

#### Context
Site needs to support English and Spanish. Next.js offers built-in i18n routing with `/en/` and `/es/` URL prefixes.

#### Decision
Used a React context-based toggle (`LanguageContext`) with a single set of routes. Language state is held in memory and toggled via a button in the header.

#### Consequences
- **Positive:** Simple implementation, no URL changes, fast switching, easy to maintain
- **Negative:** Language preference resets on page refresh (not persisted)
- **Risks:** SEO — search engines only see the default language. If SEO in both languages matters later, need to migrate to i18n routing.

#### Alternatives Considered
1. Next.js i18n routing (`/en/`, `/es/`) — More complex, better for SEO but overkill for MVP
2. next-intl library — Good but adds dependency complexity for 2 languages

---

### 4. Resend for Email Notifications

**Date:** 2026-04-03
**Status:** Accepted
**Deciders:** Eddy Ozoria

#### Context
Booking form needs to notify Junior Marte when someone submits a request. Need a reliable, free-tier email service.

#### Decision
Selected Resend (resend.com) with a Next.js API route at `/api/booking`.

#### Consequences
- **Positive:** Free 100 emails/day, excellent Next.js integration, simple API
- **Negative:** Free tier sends from `onboarding@resend.dev` (not custom domain)
- **Risks:** Need to add a verified domain in Resend for professional "from" address

#### Alternatives Considered
1. Formspree — Simpler but less control over email format
2. SendGrid — More complex setup, overkill for this use case
3. WhatsApp Business API — Requires Meta approval, paid, complex

---

### 3. Inquiry-Based Model (No Online Payments Yet)

**Date:** 2026-04-03
**Status:** Accepted
**Deciders:** Junior Marte, Eddy Ozoria

#### Context
Need to decide whether to implement online payments (Stripe/PayPal) for MVP or use an inquiry-based booking model.

#### Decision
MVP uses inquiry-based booking — customers fill a form, Junior receives an email, and confirms manually. No prices shown on the site.

#### Consequences
- **Positive:** No payment integration complexity, Junior controls pricing and availability manually
- **Negative:** More manual work for Junior, customers can't self-serve
- **Risks:** May lose impulsive bookings. Payment integration should be added when volume increases.

#### Alternatives Considered
1. Stripe Checkout — Too complex for MVP, requires pricing decisions
2. PayPal buttons — Simple but still needs pricing locked in

---

### 2. Static Activity Data (No Database Yet)

**Date:** 2026-04-03
**Status:** Accepted
**Deciders:** Eddy Ozoria

#### Context
Activities need to be displayed on the site. Options were a database (Postgres, Supabase) or static data in code.

#### Decision
Activities are stored as a TypeScript array in `src/data/activities.ts`. No database.

#### Consequences
- **Positive:** Zero infrastructure cost, instant deployment, simple to edit
- **Negative:** Requires code change + deploy to add/edit activities
- **Risks:** Not scalable if Junior needs to manage dozens of activities himself. Will need a CMS or admin dashboard eventually.

#### Alternatives Considered
1. Supabase/Postgres — Overkill for 6 activities
2. Contentful/Sanity CMS — Good for non-technical editing but adds complexity
3. JSON file — Similar to TS but loses type safety

---

### 1. Fully Custom Next.js on Vercel (No Squarespace)

**Date:** 2026-04-03
**Status:** Accepted
**Deciders:** Eddy Ozoria

#### Context
Initially considered building on Squarespace with custom code injection. Needed to decide platform approach.

#### Decision
Build a fully custom Next.js application deployed on Vercel. No Squarespace involvement.

#### Consequences
- **Positive:** Full control over design and functionality, easy deployments via git push, free hosting on Vercel
- **Negative:** More development effort than a Squarespace template
- **Risks:** Requires a developer for all changes (no drag-and-drop editing)

#### Alternatives Considered
1. Squarespace + custom code injection — Limited customization, harder to integrate booking forms
2. Squarespace as CMS + Vercel microservices — Split architecture adds complexity
3. WordPress — Maintenance burden, plugin dependency
