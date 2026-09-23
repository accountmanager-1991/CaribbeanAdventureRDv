# Technical Debt Tracker

**Project:** Caribbean Adventure RD
**Last Updated:** 2026-09-23

Track shortcuts, workarounds, and "fix later" items.

---

## Debt Summary

| Category | Count | Highest Priority |
|----------|-------|------------------|
| Code Quality | 1 | Medium |
| Architecture | 1 | Medium |
| Deliverability | 1 | Medium |
| Infrastructure | 3 | Medium |
| Testing | 1 | Medium |

---

## Active Debt Items

### High Priority (Fix Soon)

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|

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

### TD-001: Unoptimized Tour Photos  [RESOLVED 2026-09-23]

**Category:** Performance
**Priority:** ~~High~~ Resolved
**Added:** 2026-04-03
**File(s):** `public/images/tour-*.jpg`

**What's the problem?**
Photos are original resolution from WhatsApp (up to 4160x3123px, 1-2MB each). Hero carousel loads 10 images. Activity cards load 6. Confirmed in production on 2026-08-27: `tour-01.jpg` serves at **1.5 MB**. Now that the site is on a live customer-facing domain, this is the highest-value remaining fix.

**Why was it done this way?**
Speed of initial development — photos were copied directly from WhatsApp without processing.

**How it was resolved (2026-09-23)**
All 26 photos re-encoded with sharp: **20.5 MB → 9.3 MB (54% smaller)**, capped
at 1920px on the **longest** side, mozjpeg quality 82, progressive.

One trap worth recording: capping only the *width* is not enough. `tour-01` and
`tour-11` are 9:16 portrait phone photos. A width cap of 1920 left them at
1920×3415 — 6.6 megapixels and still ~1.2 MB each. Constraining both dimensions
(`fit: "inside"`) brought them to 1080×1920 and ~500 KB.

WebP variants were not added: the site serves everything through `next/image`,
which already negotiates WebP/AVIF per request. Pre-generating them would
duplicate work the optimizer does anyway.

Originals are preserved — the untouched WhatsApp exports remain in `public/`
root (untracked, excluded from deploys by `.vercelignore`).

---

### TD-003: Booking Emails Send from a Generic Shared Domain  [RESOLVED 2026-09-23]

**Category:** Deliverability
**Priority:** ~~High~~ Resolved
**Added:** 2026-04-03
**Revised:** 2026-08-27
**File(s):** `src/app/api/booking/route.ts:58`

**What's the problem?**
Emails send from `onboarding@resend.dev`, a generic sender shared across all unverified Resend accounts. Gmail may filter it to spam — which means **Junior silently misses booking inquiries**. On an inquiry-only site with no other notification path, that is lost revenue, not a cosmetic issue.

The original note framed this as looking unprofessional. That framing was wrong: the booking email is internal-only (`to:` Junior, `cc:` Eddy, `replyTo:` the customer), so the customer never sees the `from` address. The problem is deliverability alone.

**Why was it done this way?**
No verified domain was thought to be available at the time.

**How it was resolved (2026-09-23)**
Sender changed to `Caribbean Adventure RD <bookings@emozca.com>`. `emozca.com`
has been verified in the Resend account since 2026-03-27, so no DNS setup was
needed — any address on a verified domain is accepted.

Verified before deploying by sending a test from the new address to
`accountmanager@emozca.com` only (deliberately **not** Junior, to avoid a test
email landing in a real inbox). Resend reported `delivered`.

Recipients were left unchanged: `to` Junior, `cc` `accountmanager@emozca.com`,
`replyTo` the customer — so replying from Gmail still reaches the customer
directly. Using a `gosimpleflow.com` address was explicitly declined.

Longer term, verifying `caribbeanadventurerd.com` in Resend would decouple the
tour business from emozca's account — see TD-010.

**This unblocks TD-008.** A customer confirmation email is customer-facing and
required a verified sender; that constraint is now satisfied.

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
Send a second Resend email to the submitter confirming the request, echoing the activity, date and guest count, and setting expectations for response time. TD-003 is now resolved, so the verified-sender prerequisite is satisfied — this is ready to build.

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
| TD-003 | Booking emails sent from `onboarding@resend.dev` | 2026-04-03 | 2026-09-23 | Sender changed to `bookings@emozca.com`, a domain already verified in Resend. Test send to Eddy only confirmed `delivered` before deploy. Recipients unchanged. Unblocks TD-008. |
| TD-001 | Unoptimized tour photos (1-2MB each) | 2026-04-03 | 2026-09-23 | Re-encoded all 26 with sharp: 20.5 MB → 9.3 MB, both dimensions capped at 1920px. Capping width alone had left two 6.6MP portrait images untouched. Originals preserved untracked in `public/`. See the detailed entry above. |
| TD-002 | 26 original WhatsApp photos in `/public` root | 2026-04-03 | 2026-08-27 | **Mitigated, not deleted.** `.vercelignore` excludes `public/WhatsApp Image *.jpeg` from deployments; verified returning 404 in production. The files remain untracked on disk locally and are not in git, so they no longer bloat the repo or the deployment. Deleting the local copies is safe whenever desired — `public/images/` holds the renamed versions the site uses. |
