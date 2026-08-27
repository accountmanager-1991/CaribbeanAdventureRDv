# Session Status

**Project:** Caribbean Adventure RD
**Last Updated:** 2026-08-27
**Session:** 2

---

## Current Focus

**What I'm working on right now:**
> Session complete — site recovered from a deleted Vercel project and fully live on the production domain.

**Why this matters:**
> The Vercel project was destroyed when the old profile was deleted, taking the live site down. It is now restored, on the real customer-facing domain, with a self-sustaining deploy pipeline.

---

## Completed This Session

| Task | Status | Notes |
|------|--------|-------|
| Confirm no code loss | Done | Local repo was already in sync with GitHub; only the Vercel project record was gone |
| Verify local production build | Done | `npm run build` passed clean — 8 routes, no errors |
| Recreate Vercel project | Done | `caribbean-adventure-rd` on the **emozca** team |
| Diagnose original build failure | Done | Root cause found — Framework Preset "Other" (see Discoveries) |
| Pin framework in `vercel.json` | Done | `framework: "nextjs"` — survives dashboard misconfiguration |
| Add `.vercelignore` | Done | Excludes the 26 duplicate WhatsApp originals (TD-002) |
| Set `RESEND_API_KEY` in Vercel | Done | Production + Development (Preview still missing — see Known Issues) |
| Connect GitHub for auto-deploy | Done | `accountmanager-1991/CaribbeanAdventureRDv` → push to `main` deploys |
| Claim custom domain | Done | Domain was orphaned in another Vercel account; released via `_vercel` TXT verification |
| Verify production domain | Done | All 7 pages 200, SSL valid, apex 308 → www |
| Fix git push credentials | Done | Repo-local credential helper for `accountmanager-1991` |
| Identify Resend account | Done | Belongs to **emozca**; key labelled "Junior" |
| Commit deploy config | Done | `9684d06` — vercel.json, .vercelignore, .gitignore |

---

## Live URLs

| URL | Purpose |
|-----|---------|
| https://www.caribbeanadventurerd.com | Production (canonical) |
| https://caribbeanadventurerd.com | Apex — 308 redirect to www |
| https://caribbean-adventure-rd.vercel.app | Vercel alias |

---

## In Progress

Nothing blocking. Deployment pipeline is verified working end-to-end.

---

## Next Up (Priority Order)

1. **Resend sender address** — switch `from` off `onboarding@resend.dev` so booking emails stop risking Junior's spam folder
2. **Image optimization** (TD-001) — `tour-01.jpg` is 1.5 MB and 10 load in the hero carousel; highest-value fix now that real traffic can arrive
3. **Customer confirmation email** (TD-008) — customers currently receive nothing after submitting the booking form
4. **Preview env var** (TD-007) — add `RESEND_API_KEY` to the Preview environment
5. **SEO metadata** — Open Graph tags, social sharing images
6. **Google Analytics** — track visitor behavior
7. **More activities** — add additional adventure listings from Junior

---

## Known Issues / Bugs

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| Booking emails send from `onboarding@resend.dev` | High | Open | Spam-filter risk means Junior may silently miss inquiries (TD-003) |
| Unoptimized tour photos | High | Open | Confirmed live: `tour-01.jpg` serves at 1.5 MB (TD-001) |
| No customer confirmation email | Medium | Open | Form submits, customer receives nothing (TD-008) |
| `RESEND_API_KEY` missing in Preview env | Low | Open | Branch previews will fail to build; production unaffected (TD-007) |
| Vercel Framework Preset reads "Other" | Low | Mitigated | `vercel.json` overrides it; dashboard setting still wrong (TD-009) |
| Original WhatsApp photos still on disk | Low | Mitigated | Excluded from deploys via `.vercelignore`; files still in `public/` (TD-002) |
| Google Maps embed uses approximate coordinates | Low | Open | Could use exact coordinates for Calle Beller #18 |

---

## Discoveries / Learnings

1. **Root cause of the original "build failing" blocker:** the Vercel Framework Preset was set to **"Other"**, not Next.js. Vercel therefore skipped the build entirely and served `public/` as static files, so every route 404'd while the deployment still reported "Ready". This reproduced exactly on the fresh project — a CLI-created project defaults to "Other". Pinning `framework: "nextjs"` in `vercel.json` is the durable fix because it lives in the repo instead of a dashboard toggle.

2. **A "Ready" Vercel deployment does not mean a working site.** Status reflects the build step, not whether routes resolve. Always verify with real HTTP checks against the routes.

3. **`RESEND_API_KEY` is read at module scope** in `src/app/api/booking/route.ts` (`new Resend(process.env.RESEND_API_KEY)`). The Resend constructor throws on a missing key, so an unset env var breaks the **build**, not just the runtime. This was likely a second contributing cause of the original failure. A `GET /api/booking` returning 405 is a good health check: 405 means the module loaded, 500 means the env var is broken.

4. **Vercel domain ownership is account-level, not project-level.** Deleting the project did not release `caribbeanadventurerd.com` — the old account kept the ownership record, and every attempt to claim it returned `403 domain_not_owned`. Removing a domain from a *project* is not the same as removing it from the *account*. Resolved via the `_vercel` TXT ownership-verification flow, which lets DNS control override account ownership. That flow is only exposed in the dashboard; the CLI's `domains add` returns a flat 403 instead of offering the challenge.

5. **Vercel DNS targets are account-scoped and act as a fingerprint.** The orphaned domain pointed at `f4732b97818d7d82.vercel-dns-017.com` while the working emozca domain used the generic `cname.vercel-dns.com` — proof the domain had been configured under a different account.

6. **Resend belongs to emozca, not to Junior.** The account has one verified domain (`emozca.com`) and two API keys; the one in use is merely *labelled* "Junior". Caribbean Adventure's booking emails therefore run on emozca's account and share its 100/day free-tier quota. This is a dependency to untangle if Junior ever takes ownership of the site.

7. **The booking email is internal-only** — it goes to Junior with Eddy CC'd and the customer as reply-to. The customer never sees the `from` address, so the sender problem is about *deliverability*, not branding.

8. **Git credentials silently reverted** to `supportsimpleflow` despite `gh auth switch`, because Git Credential Manager caches per host. Fixed with a **repo-local** credential helper so other projects keep their own account.

---

## Files Modified This Session

| File | Change Type | Description |
|------|-------------|-------------|
| vercel.json | Created | Pins `framework: "nextjs"` |
| .vercelignore | Created | Excludes duplicate WhatsApp originals from deploys |
| .gitignore | Modified | Added `.vercel` (added by Vercel CLI on link) |
| SESSION-STATUS.md | Updated | Session 2 |
| CHANGELOG.md | Updated | 0.3.1 entry |
| DECISIONS.md | Updated | ADRs 6 and 7 |
| TECH-DEBT.md | Updated | TD-002 mitigated; TD-003 revised; TD-007/008/009 added |
| RESEARCH-LOG.md | Updated | Replaced template with real findings |

No application code changed this session — recovery was entirely configuration and infrastructure.

---

## Context for Next Session

### If continuing this work:
1. Read CLAUDE.md / AGENTS.md and SESSION-STATUS.md
2. **Do not remove `vercel.json`** — the project's dashboard preset is still "Other", so the live site depends on it
3. Switch the Resend `from` address (highest-value quick win)
4. Compress the tour photos

### Key files to review:
- `PROJECT-BRIEF.md` — full project scope
- `src/data/activities.ts` — activity data model (add more activities here)
- `src/data/translations.ts` — all EN/ES strings
- `src/app/api/booking/route.ts` — email notification logic

### Infrastructure reference:
| Item | Value |
|------|-------|
| Vercel project | `caribbean-adventure-rd` (emozca team) |
| Vercel user | `accountmanager-9393` |
| GitHub repo | `accountmanager-1991/CaribbeanAdventureRDv` |
| DNS host | Squarespace Domains (`ns-cloud-a*.googledomains.com`) |
| Resend account | emozca — key "Junior", verified domain `emozca.com` |

### Environment variables needed:
```
RESEND_API_KEY=re_... (set in Vercel: Production + Development; Preview still TODO)
```

---

## Project Progress Overview

### Milestone: MVP Launch

| Feature | Status | Progress |
|---------|--------|----------|
| Project setup & docs | Complete | 100% |
| Landing page | Complete | 100% |
| Adventures listing | Complete | 100% |
| Contact & booking form | Complete | 100% |
| About page | Complete | 100% |
| Legal pages (privacy/terms/cancellation) | Complete | 100% |
| EN/ES bilingual support | Complete | 100% |
| Email notifications | Complete | 100% |
| Real photos | Complete | 100% |
| Vercel deployment | Complete | 100% |
| Custom domain | Complete | 100% |
| Payment integration | Not Started | 0% |

**Overall Milestone Progress:** 95%
