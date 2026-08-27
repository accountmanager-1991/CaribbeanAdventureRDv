# Project Brief

**Project Name:** Caribbean Adventure RD
**Created:** 2026-04-03
**Last Updated:** 2026-08-27
**Owner:** Junior Marte
**Developer:** Eddy Ozoria

---

## One-Line Summary

> A travel and tourism platform for booking curated, authentic adventure experiences across the Dominican Republic.

---

## The Problem

**What problem does this solve?**

Tourists visiting the Dominican Republic struggle to find authentic, local adventure experiences. Major platforms like TripAdvisor and Viator are cluttered with generic options and don't highlight the hand-picked, curated experiences that make the DR unique.

**Who has this problem?**

International tourists visiting the Dominican Republic who want authentic, curated adventure experiences beyond typical resort offerings.

**How do they currently solve it?**

They rely on large travel platforms (TripAdvisor, Viator), word-of-mouth, or hotel concierge recommendations — often missing the best local experiences or overpaying through middlemen.

---

## The Solution

**What are we building?**

A full marketplace platform where tourists can browse, book, and review curated adventure activities across the Dominican Republic. Local tour operators can list and manage their offerings through an operator dashboard.

**What makes this better than alternatives?**

Hand-picked, authentic local experiences curated specifically for the DR market, with direct connections to local operators and a focus on quality over quantity.

---

## Core Features (MVP)

1. **Activity Listings** - Browse adventures with photos, descriptions, pricing, and availability
2. **Online Booking** - Book and pay for activities directly through the platform
3. **User Reviews & Ratings** - Read and leave reviews for completed adventures
4. **User Accounts** - Tourist profiles with booking history and saved favorites
5. **Operator Dashboard** - Tour operators can list, manage, and track their activities
6. **Payment Processing** - Secure payments via PayPal and/or Stripe

---

## Out of Scope (For Now)

- Mobile native app (iOS/Android)
- Multi-language support beyond English and Spanish
- Real-time chat between tourists and operators
- Loyalty/rewards program

---

## Success Criteria

- [x] Platform live and accepting booking inquiries — https://www.caribbeanadventurerd.com (2026-08-27)
- [ ] At least 10 adventure activities listed — currently 6
- [ ] Successful end-to-end booking and payment flow — deferred, inquiry-based for now (ADR 3)
- [ ] Operator dashboard functional for managing listings — not started; activities are static (ADR 2)

---

## Technical Constraints

| Constraint | Details |
|------------|---------|
| Platform | Web (Next.js 16, fully custom) |
| Hosting | Vercel (emozca team) |
| Domain | caribbeanadventurerd.com — DNS at Squarespace Domains |
| Email | Resend (emozca account) |
| Payments | Deferred — inquiry-based booking for now |
| Budget | TBD |
| Timeline | TBD |

---

## Key Stakeholders

| Role | Person | Responsibility |
|------|--------|----------------|
| Owner | Junior Marte | Final decisions, vision, business |
| Developer | Eddy Ozoria | Implementation, technical decisions |
| Users | Tourists visiting DR | Feedback, testing |

---

## Activity Types

- Water sports & beach (snorkeling, surfing, boat tours)
- Nature & eco-tourism (hiking, waterfalls, wildlife)
- Cultural tours
- Food & culinary experiences
- Nightlife & entertainment
- Extreme sports & adventure

---

## Open Questions

- [x] ~~Squarespace integration approach — custom code injection vs headless?~~ **Resolved 2026-04-03:** neither. Fully custom Next.js on Vercel (ADR 1). Squarespace remains only as the DNS host.
- [ ] PayPal vs Stripe vs both for payments? — deferred; MVP is inquiry-based (ADR 3)
- [ ] Commission/fee structure for operators?
- [ ] Content: who provides activity photos and descriptions? — all 26 current photos came from Junior
- [ ] Who owns the infrastructure long term? Vercel, Resend and GitHub all sit under Eddy/emozca accounts, while Junior owns the business and domain registration (TD-010)

See [RESEARCH-LOG.md](RESEARCH-LOG.md) for the full open-questions list and research findings.

---

## References

- [Squarespace Developer Docs](https://developers.squarespace.com/)
- [Stripe Docs](https://stripe.com/docs)
- [PayPal Developer](https://developer.paypal.com/)

---

*This brief should be updated as the project evolves and decisions are made.*
