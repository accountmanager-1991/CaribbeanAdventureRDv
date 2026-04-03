# Technical Debt Tracker

**Project:** Caribbean Adventure RD

Track shortcuts, workarounds, and "fix later" items.

---

## Debt Summary

| Category | Count | Highest Priority |
|----------|-------|------------------|
| Code Quality | 1 | Medium |
| Architecture | 1 | Medium |
| Performance | 2 | High |
| Security | 1 | Medium |
| Testing | 1 | Medium |

---

## Active Debt Items

### High Priority (Fix Soon)

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-001 | Performance | Unoptimized tour photos (1-2MB each) | 2026-04-03 | Slow page loads, high bandwidth |
| TD-002 | Performance | 26 original WhatsApp photos still in /public root | 2026-04-03 | Bloats repo and deployment size |

---

### Medium Priority (Fix When Convenient)

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-003 | Security | Resend sends from onboarding@resend.dev | 2026-04-03 | Emails may land in spam |
| TD-004 | Architecture | Language preference not persisted | 2026-04-03 | Resets to EN on page refresh |
| TD-005 | Code Quality | Form data not validated server-side | 2026-04-03 | API route trusts all input |
| TD-006 | Testing | Zero tests | 2026-04-03 | No safety net for changes |

---

## Detailed Debt Descriptions

### TD-001: Unoptimized Tour Photos

**Category:** Performance
**Priority:** High
**Added:** 2026-04-03
**File(s):** `public/images/tour-*.jpg`

**What's the problem?**
Photos are original resolution from WhatsApp (up to 4160x3123px, 1-2MB each). Hero carousel loads 10 images. Activity cards load 6. This significantly impacts page load time, especially on mobile.

**Why was it done this way?**
Speed of initial development — photos were copied directly from WhatsApp without processing.

**What's the ideal solution?**
- Resize to max 1920px wide
- Compress to ~100-200KB each using sharp or squoosh
- Consider using Next.js Image component with remote optimization (already using `<Image>` but source files are too large)
- Add WebP format variants

**Estimated effort:** Small

---

### TD-002: Original WhatsApp Photos in /public Root

**Category:** Performance
**Priority:** High
**Added:** 2026-04-03
**File(s):** `public/WhatsApp Image *.jpeg` (26 files)

**What's the problem?**
The original photos with WhatsApp names are still in the public root alongside the renamed copies in `/public/images/`. This doubles the image storage in the repo and deployment.

**Why was it done this way?**
User dropped photos into public folder; we copied and renamed them to `/images/` but didn't delete the originals.

**What's the ideal solution?**
Delete all `public/WhatsApp Image *.jpeg` files. The renamed versions in `public/images/` are the ones used by the site.

**Estimated effort:** Small

---

### TD-003: Resend Sends from Generic Domain

**Category:** Security
**Priority:** Medium
**Added:** 2026-04-03
**File(s):** `src/app/api/booking/route.ts`

**What's the problem?**
Emails are sent from `onboarding@resend.dev` because no custom domain is verified in Resend. This looks unprofessional and may trigger spam filters.

**What's the ideal solution?**
- Verify a custom domain in Resend (e.g., caribbeanadventurerd.com)
- Update the `from` field in the API route to use the custom domain

**Estimated effort:** Small (once domain is purchased)

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
The booking API route accepts any JSON body without validation. Malformed or malicious input could cause errors or email injection.

**What's the ideal solution?**
Add Zod schema validation to the API route. Sanitize all string inputs before inserting into HTML email template.

**Estimated effort:** Small

---

## Resolved Debt

| ID | Description | Added | Resolved | Resolution Notes |
|----|-------------|-------|----------|------------------|
| — | None yet | — | — | — |
