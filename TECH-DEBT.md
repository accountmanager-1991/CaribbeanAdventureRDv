# Technical Debt Tracker

**Project:** Caribbean Adventure RD
**Last Updated:** 2026-08-27

Track shortcuts, workarounds, and "fix later" items.

---

## Debt Summary

| Category | Count | Highest Priority |
|----------|-------|------------------|
| Code Quality | 1 | Medium |
| Architecture | 1 | Medium |
| Performance | 1 | High |
| Deliverability | 2 | High |
| Infrastructure | 3 | Medium |
| Testing | 1 | Medium |

---

## Active Debt Items

### High Priority (Fix Soon)

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-001 | Performance | Unoptimized tour photos (1-2MB each) | 2026-04-03 | Slow page loads, high bandwidth |
| TD-003 | Deliverability | Booking emails send from `onboarding@resend.dev` | 2026-04-03 | Junior may silently miss booking inquiries |

---

### Medium Priority (Fix When Convenient)

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-004 | Architecture | Language preference not persisted | 2026-04-03 | Resets to EN on page refresh |
| TD-005 | Code Quality | Form data not validated server-side | 2026-04-03 | API route trusts all input |
| TD-006 | Testing | Zero tests | 2026-04-03 | No safety net for changes |
| TD-008 | Deliverability | No confirmation email to the customer | 2026-08-27 | Customer submits form and hears nothing |
| TD-009 | Infrastructure | Vercel Framework Preset still reads "Other" | 2026-08-27 | Site depends on `vercel.json` not being deleted |

---

### Low Priority

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-007 | Infrastructure | `RESEND_API_KEY` missing in Preview environment | 2026-08-27 | Branch preview builds fail; production unaffected |
| TD-010 | Infrastructure | Resend account belongs to emozca, not Junior | 2026-08-27 | Shared quota; dependency if Junior takes ownership |

---

## Detailed Debt Descriptions

### TD-001: Unoptimized Tour Photos

**Category:** Performance
**Priority:** High
**Added:** 2026-04-03
**File(s):** `public/images/tour-*.jpg`

**What's the problem?**
Photos are original resolution from WhatsApp (up to 4160x3123px, 1-2MB each). Hero carousel loads 10 images. Activity cards load 6. Confirmed in production on 2026-08-27: `tour-01.jpg` serves at **1.5 MB**. Now that the site is on a live customer-facing domain, this is the highest-value remaining fix.

**Why was it done this way?**
Speed of initial development — photos were copied directly from WhatsApp without processing.

**What's the ideal solution?**
- Resize to max 1920px wide
- Compress to ~100-200KB each using sharp or squoosh
- Consider using Next.js Image component with remote optimization (already using `<Image>` but source files are too large)
- Add WebP format variants

**Estimated effort:** Small

---

### TD-003: Booking Emails Send from a Generic Shared Domain

**Category:** Deliverability
**Priority:** High
**Added:** 2026-04-03
**Revised:** 2026-08-27
**File(s):** `src/app/api/booking/route.ts:58`

**What's the problem?**
Emails send from `onboarding@resend.dev`, a generic sender shared across all unverified Resend accounts. Gmail may filter it to spam — which means **Junior silently misses booking inquiries**. On an inquiry-only site with no other notification path, that is lost revenue, not a cosmetic issue.

The original note framed this as looking unprofessional. That framing was wrong: the booking email is internal-only (`to:` Junior, `cc:` Eddy, `replyTo:` the customer), so the customer never sees the `from` address. The problem is deliverability alone.

**Why was it done this way?**
No verified domain was thought to be available at the time.

**What's the ideal solution?**
`emozca.com` is **already verified** in the Resend account (verified 2026-03-27, sending enabled), so this is a one-line change today with no new setup:

```
from: "Caribbean Adventure RD <bookings@emozca.com>"
```

Longer term, verifying `caribbeanadventurerd.com` in Resend would decouple the tour business from emozca's account — see TD-010.

**Estimated effort:** Trivial

---

### TD-004: Language Preference Not Persisted

**Category:** Architecture
**Priority:** Medium
**Added:** 2026-04-03
**File(s):** `src/context/LanguageContext.tsx`

**What's the problem?**
Language selection (EN/ES) is stored in React state. It resets to English on every page refresh or new visit.

**What's the ideal solution?**
Store preference in `localStorage` and read it on mount. Or migrate to Next.js i18n routing if SEO in both languages becomes important.

**Estimated effort:** Small

---

### TD-005: No Server-Side Form Validation

**Category:** Code Quality
**Priority:** Medium
**Added:** 2026-04-03
**File(s):** `src/app/api/booking/route.ts`

**What's the problem?**
The booking API route accepts any JSON body without validation. Malformed or malicious input could cause errors or email injection. Input is interpolated directly into an HTML email template.

**What's the ideal solution?**
Add Zod schema validation to the API route. Sanitize all string inputs before inserting into HTML email template.

**Estimated effort:** Small

---

### TD-006: Zero Tests

**Category:** Testing
**Priority:** Medium
**Added:** 2026-04-03

**What's the problem?**
No test coverage anywhere. No safety net for changes.

**What's the ideal solution?**
At minimum, a smoke test that every route returns 200 and that `/api/booking` rejects malformed payloads. The Session 2 recovery showed that a deployment can report success while every route 404s — a route-level smoke test against the deployed URL would have caught that immediately.

**Estimated effort:** Medium

---

### TD-007: RESEND_API_KEY Missing in Preview Environment

**Category:** Infrastructure
**Priority:** Low
**Added:** 2026-08-27

**What's the problem?**
`RESEND_API_KEY` is set for Production and Development but not Preview. Because the key is read at module scope and the Resend constructor throws when it is missing, **preview builds for any non-`main` branch will fail**. Production is unaffected.

**Why was it done this way?**
The Vercel CLI kept re-prompting for a git-branch scope and rejected its own suggested non-interactive `--value --yes` invocation.

**What's the ideal solution?**
Add it via the Vercel dashboard: Settings → Environment Variables → add `RESEND_API_KEY` to Preview (all branches). Two clicks.

**Estimated effort:** Trivial

---

### TD-008: No Confirmation Email to the Customer

**Category:** Deliverability
**Priority:** Medium
**Added:** 2026-08-27
**File(s):** `src/app/api/booking/route.ts`

**What's the problem?**
The booking form notifies Junior, but the customer receives nothing. They submit the form, see a success state, and get no record of what they requested or any confirmation that it was received. This hurts trust on an inquiry-based model where the next contact may take hours.

**What's the ideal solution?**
Send a second Resend email to the submitter confirming the request, echoing the activity, date and guest count, and setting expectations for response time. Requires TD-003 to be fixed first, since this email **is** customer-facing and must come from a verified domain.

**Estimated effort:** Small

---

### TD-009: Vercel Framework Preset Still Reads "Other"

**Category:** Infrastructure
**Priority:** Medium
**Added:** 2026-08-27
**File(s):** `vercel.json`

**What's the problem?**
The Vercel project's dashboard Framework Preset is "Other". Correct builds currently depend entirely on `vercel.json` overriding it at deploy time. If `vercel.json` is ever deleted — say, by someone tidying up "unnecessary config" — Vercel will skip the Next.js build, serve `public/` as static files, and the live customer-facing domain will 404 while still reporting a successful deployment.

**Why was it done this way?**
CLI-created Vercel projects default to "Other", and the preset cannot be changed from the CLI.

**What's the ideal solution?**
Set Settings → General → Framework Preset to **Next.js** in the Vercel dashboard, so the repo config and the project config agree. Keep `vercel.json` regardless — it is the version-controlled guarantee.

**Estimated effort:** Trivial

---

### TD-010: Resend Account Coupled to emozca

**Category:** Infrastructure
**Priority:** Low
**Added:** 2026-08-27

**What's the problem?**
Booking emails run on **emozca's** Resend account, sharing its 100/day free-tier quota with everything else emozca sends. The API key is labelled "Junior" but belongs to the emozca account, and the only verified domain is `emozca.com`. Junior owns the business and the domain, but not the email infrastructure.

**What's the ideal solution?**
If and when Junior takes full ownership of the site, verify `caribbeanadventurerd.com` in a Resend account he controls and move the key. Not urgent while Eddy operates the site.

**Estimated effort:** Small

---

## Resolved Debt

| ID | Description | Added | Resolved | Resolution Notes |
|----|-------------|-------|----------|------------------|
| TD-002 | 26 original WhatsApp photos in `/public` root | 2026-04-03 | 2026-08-27 | **Mitigated, not deleted.** `.vercelignore` excludes `public/WhatsApp Image *.jpeg` from deployments; verified returning 404 in production. The files remain untracked on disk locally and are not in git, so they no longer bloat the repo or the deployment. Deleting the local copies is safe whenever desired — `public/images/` holds the renamed versions the site uses. |
