# Research Log

**Project:** Caribbean Adventure RD
**Last Updated:** 2026-09-23

Track questions that need answers, research findings, and useful external resources discovered during development.

---

## Open Questions

| # | Question | Priority | Status | Notes |
|---|----------|----------|--------|-------|
| 1 | Should the Resend sender be `emozca.com` or a verified `caribbeanadventurerd.com`? | High | Open | `emozca.com` works today with zero setup; the tour domain would decouple Junior from emozca's account (TD-010) |
| 2 | Who ultimately owns the infrastructure — Eddy or Junior? | Medium | Open | Vercel, Resend and the GitHub repo all sit under Eddy/emozca accounts today. Junior owns the business and the domain registration |
| 3 | Commission/fee structure for operators? | Medium | Open | Carried over from PROJECT-BRIEF; unresolved |
| 4 | Payment integration — PayPal, Stripe, or both? | Medium | Open | Deferred by ADR 3 (inquiry-based MVP). Revisit when booking volume justifies it |
| 5 | Content: who provides new activity photos and descriptions? | Medium | Open | All 26 current photos came from Junior via WhatsApp; videos pending |
| 6 | Does SEO in both EN and ES matter? | Low | Open | Decides whether ADR 5 (client-side toggle) needs migrating to i18n routing |
| 7 | Should activity titles and descriptions be translated? | Medium | Open | `activities.ts` holds English-only strings while the UI chrome around them switches language |

Resolved: the Squarespace-vs-custom question from PROJECT-BRIEF is settled by ADR 1 — fully custom Next.js, no Squarespace. Squarespace remains only as the DNS host.

---

## Research Findings

### 2026-09-23 — Why Google showed the Vercel logo as the site icon

**Question:** Search results displayed a black circle with a white triangle — the
Vercel logo — instead of anything belonging to Caribbean Adventure RD. Was this a
Vercel setting, a deployment artefact, or something in the code?

**Summary:** None of those. `src/app/favicon.ico` was still the **create-next-app
default**, shipped with the scaffold and never replaced. Google was faithfully
displaying the site's own declared favicon.

**Details:**
The giveaway was file timestamps:

```
Apr  3 10:22  src/app/favicon.ico
Apr  3 10:22  public/next.svg, vercel.svg, file.svg, globe.svg, window.svg
```

Identical to the second — all scaffold files from `create-next-app`. Comparing a
suspect asset's timestamp against known-scaffold files identifies "never
replaced" in seconds, with no need to inspect image contents.

Two constraints worth remembering:

1. **Google requires a favicon of at least 48×48.** Next.js derives the `sizes`
   attribute from the largest frame in the `.ico`, so the container itself needs
   a 48px entry. A 16/32 file is fine for browser tabs but not for search.
2. **A mark legible at 512px can be unreadable at 16px.** The two-wave logo
   turned into a grey smear. The fix was to render a simplified single-wave
   variant for the 16px frame only. Verify by upscaling the *real* 16px render
   with nearest-neighbour rather than eyeballing the vector.

Next.js file conventions used (`app/`): `favicon.ico`, `icon.svg`,
`apple-icon.png`, `opengraph-image.tsx`. Note that **any** `app/icon*` file is
treated as an icon route, so a build-time-only source such as `icon-16.svg` must
not live in `app/` — it would be published as a live icon.

Google re-crawls favicons on its own schedule, so the search result can lag the
fix by days. Requesting re-indexing in Search Console shortens that.

**Sources:**
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md`
- `curl -s <url> | grep '<link rel="icon"'` — confirms what the site declares

**Action Items:**
- [x] Replace the default favicon with a brand mark at 16/32/48px
- [x] Add `apple-icon`, PWA icons, and an Open Graph image
- [ ] Request re-indexing in Google Search Console

---

### 2026-09-23 — Compressing the tour photos without breaking the portraits

**Question:** How much can the 26 WhatsApp photos be reduced, and why did the
first pass barely touch two of them?

**Summary:** 20.5 MB → 9.3 MB (54%). The first pass capped **width** at 1920px,
which does nothing for portrait images. Capping the longest side instead
(`fit: "inside"`) is what actually bounds the pixel count.

**Details:**
`tour-01` and `tour-11` are 9:16 phone photos. A width cap left them at
1920×3415 — 6.6 megapixels, still ~1.2 MB each, larger than any landscape shot
in the set. With both dimensions capped they became 1080×1920 at ~500 KB.

Settings used: `fit: "inside"` at 1920px, mozjpeg quality 82, progressive.

WebP variants were deliberately **not** generated: the site serves images through
`next/image`, which already negotiates WebP/AVIF per request. Pre-generating them
duplicates work the optimizer does anyway.

Separately, `tour-13` and `tour-19` rendered rotated 90°. They carried **no EXIF
orientation flag**, so `sharp.rotate()` had nothing to correct and neither would
a browser — they were simply stored sideways and had to be rotated explicitly.
A contact-sheet montage of the whole set caught this immediately; metadata alone
would not have.

**Sources:**
- `sharp` 0.34.5, bundled with Next.js 16 — no extra dependency needed
- `scripts/generate-icons.mjs` uses the same library

**Action Items:**
- [x] Compress all 26 photos (closes TD-001)
- [x] Rotate the two sideways photos
- [ ] Compress videos before committing them — see `public/videos/README.md`

---

### 2026-09-23 — Next.js 16 deprecated the Image `priority` prop

**Question:** What is the current way to prioritise the LCP image?

**Summary:** `priority` is **deprecated in Next.js 16** in favour of `preload`.
But the docs then advise against `preload` for most cases: "In most cases, you
should use `loading="eager"` or `fetchPriority="high"` instead."

**Details:**
`HeroCarousel` still used `priority={i === 0}`. Replaced with:

```tsx
loading={i === 0 ? "eager" : "lazy"}
fetchPriority={i === 0 ? "high" : "auto"}
```

Also changed in v16: the `qualities` config now defaults to `[75]`.

This is precisely the drift `AGENTS.md` warns about — the version's own docs in
`node_modules/next/dist/docs/` are authoritative over anything remembered from
older Next.js.

**Sources:**
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`

**Action Items:**
- [x] Replace `priority` in `HeroCarousel`
- [ ] Watch for other deprecated APIs when touching older components

---

### 2026-08-27 — Why a "Ready" Vercel deployment served 404s on every route

**Question:** The site deployed successfully and reported "Ready", yet every route returned 404. Why?

**Summary:** The Vercel project's Framework Preset was set to **"Other"** rather than Next.js. Vercel skipped the Next.js build entirely and served the `public/` directory as static files, with output directory defaulting to `public`. No `index.html` exists there, so every route 404'd — while the deployment still reported success, because the *build step* succeeded at doing nothing.

**Details:**
`vercel project inspect` exposed the misconfiguration:

```
Framework Preset   Other
Build Command      `npm run vercel-build` or `npm run build`
Output Directory   `public` if it exists, or `.`
```

A correct deployment builds serverless functions; `vercel inspect` on a healthy deploy lists `λ` entries. A broken one lists only static assets. This is the fastest way to tell the two apart.

Critically, **projects created via `vercel project add` default to "Other"** — framework auto-detection only runs in the dashboard's git-import flow. This is why the failure reproduced immediately on the rebuilt project and why it went undiagnosed in Session 1.

**Sources:**
- `vercel project inspect <name> --scope <team>`
- `vercel inspect <deployment-url>` — look for `λ` function entries

**Action Items:**
- [x] Pin `"framework": "nextjs"` in `vercel.json` (ADR 6)
- [ ] Also set the preset to Next.js in the dashboard so repo and project agree (TD-009)

---

### 2026-08-27 — Reclaiming a Vercel domain held by a deleted account

**Question:** DNS pointed correctly at Vercel and the registrar was fine, but `vercel domains add` returned `403 domain_not_owned` for both apex and www. Why, and how do you recover?

**Summary:** Vercel tracks domain ownership at the **account/team** level, entirely separately from project assignment. Deleting a project releases the project binding but leaves the ownership record intact on the account. The domain therefore stayed claimed by the deleted profile's account, and no other account could attach it.

The fix is the `_vercel` **TXT ownership-verification** flow, which lets proven DNS control override account ownership.

**Details:**
Symptoms that identify this specific failure:

| Signal | Value |
|---|---|
| HTTP response | `404` with header `X-Vercel-Error: DEPLOYMENT_NOT_FOUND` |
| CLI | `403 domain_not_owned` on `domains add`, including with `--force` |
| `vercel domains ls` | Domain absent from the team's list |

A useful diagnostic: **Vercel's DNS targets are account-scoped and act as a fingerprint.** The orphaned domain's www CNAME pointed at `f4732b97818d7d82.vercel-dns-017.com`, while emozca's working domain used the generic `cname.vercel-dns.com`. Different targets on the same team is strong evidence the domain was configured under a different account.

Two important gotchas:
1. **Removing a domain from a project is not the same as removing it from the account.** The account-level Domains page in the sidebar is the one that matters.
2. **The verification flow is dashboard-only.** The CLI's `domains add` returns a flat 403 rather than offering the TXT challenge, so this step cannot be scripted.

After verification, Vercel issued the certificate and configured the apex → www 308 redirect automatically. The apex A record also updated from `216.150.1.1` to `216.198.79.1`.

**Sources:**
- `nslookup -type=TXT _vercel.<domain> 8.8.8.8` — check for `vc-domain-verify` records
- `curl -sI <domain> | grep x-vercel-error`

**Action Items:**
- [x] Verify ownership via `_vercel` TXT records at Squarespace DNS
- [x] Confirm SSL, apex redirect, and all routes

---

### 2026-08-27 — RESEND_API_KEY breaks the build, not just the runtime

**Question:** Does a missing `RESEND_API_KEY` only affect sending, or something worse?

**Summary:** It breaks the **build**. `src/app/api/booking/route.ts:4` constructs the client at module scope:

```ts
const resend = new Resend(process.env.RESEND_API_KEY);
```

The Resend constructor throws on a missing key. Next.js imports route modules during "Collecting page data", so an unset variable fails the build rather than degrading gracefully at request time. This was likely a second contributing cause of the Session 1 deployment failure, alongside the framework preset.

**Details:**
A useful health check that sends no email: `GET /api/booking`. Only `POST` is exported, so a healthy deployment returns **405** — which proves the module loaded and the key is present. A **500** means the environment variable is broken.

**Action Items:**
- [ ] Consider lazy-initialising Resend inside the handler so a missing key degrades to a clean 500 instead of failing the build (candidate fix alongside TD-005)
- [ ] Add `RESEND_API_KEY` to the Preview environment (TD-007)

---

### 2026-08-27 — Which Resend account sends the booking emails

**Question:** Is Resend a dedicated account for Caribbean Adventure, or emozca's?

**Summary:** It is **emozca's** account. There is no separate Resend account for Junior or Caribbean Adventure.

**Details:**

| | |
|---|---|
| Verified domains | `emozca.com` only (verified 2026-03-27, sending enabled) |
| API keys | `Junior` (created 2026-04-03) and `Onboarding` (created 2026-03-25) |
| Key in use | `Junior` — a **label inside emozca's account**, not a separate account |

Consequences: Caribbean Adventure's booking emails share emozca's 100/day free-tier quota, and the email infrastructure belongs to Eddy while the business and domain belong to Junior (TD-010).

Also established: the booking email is **internal-only** — `to:` Junior, `cc:` Eddy, `replyTo:` the customer. The customer never sees the `from` address, so the `onboarding@resend.dev` problem is purely about **deliverability** (Junior's Gmail spam-filtering inbound leads), not branding. Since `emozca.com` is already verified, switching the sender costs nothing and carries no branding downside.

**Sources:**
- `GET https://api.resend.com/domains`
- `GET https://api.resend.com/api-keys`

**Action Items:**
- [ ] Switch `from` to a verified `emozca.com` address (TD-003)
- [ ] Add a customer-facing confirmation email once the sender is verified (TD-008)

---

## Useful Resources

### Documentation
| Resource | URL | What it's useful for |
|----------|-----|---------------------|
| Vercel project configuration | https://vercel.com/docs/project-configuration | `vercel.json` schema, including `framework` |
| Vercel custom domains | https://vercel.com/docs/domains | Domain ownership model and TXT verification |
| Resend Node SDK | https://resend.com/docs/send-with-nextjs | Sending from Next.js route handlers |
| Resend domain verification | https://resend.com/docs/dashboard/domains/introduction | Verifying a sending domain |
| Next.js docs (local) | `node_modules/next/dist/docs/` | **Authoritative** — this Next.js 16 has breaking changes vs. training data (see AGENTS.md) |

### Tools & Libraries
| Tool | URL | Purpose |
|------|-----|---------|
| Vercel CLI | https://vercel.com/docs/cli | Deploys, env vars, domain and project inspection |
| GitHub CLI | https://cli.github.com/ | Repo and auth management across multiple accounts |
| Resend | https://resend.com | Booking notification emails |
| Squarespace Domains | https://domains.squarespace.com/ | DNS host (absorbed Google Domains; NS are `ns-cloud-a*.googledomains.com`) |

### Diagnostics Worth Remembering
| Problem | Command | What it tells you |
|---------|---------|-------------------|
| Deploy "Ready" but site 404s | `vercel project inspect <name> --scope <team>` | Reveals a wrong Framework Preset |
| Is the Next.js build actually running? | `vercel inspect <url>` | Healthy deploys list `λ` function entries |
| Domain returns 404 | `curl -sI <domain> \| grep x-vercel-error` | `DEPLOYMENT_NOT_FOUND` = nothing claims the domain |
| Domain ownership conflict | `nslookup -type=CNAME www.<domain>` | Account-scoped `*.vercel-dns-*.com` target fingerprints the owning account |
| Is the booking API healthy? | `curl -sI <domain>/api/booking` | 405 = module loaded and env var present; 500 = env var broken |

---

## Competitors / Similar Projects

| Project | URL | Notes |
|---------|-----|-------|
| TripAdvisor | https://www.tripadvisor.com | Named in PROJECT-BRIEF as cluttered with generic options |
| Viator | https://www.viator.com | Same — middleman pricing is the gap this project targets |

---

## Ideas for Later

- [ ] **Route smoke test in CI** — a deployment that reports "Ready" while serving 404s is the exact failure this project has hit twice. A check that every route returns 200 post-deploy would catch it immediately (relates to TD-006)
- [ ] **Customer confirmation email** — echo the requested activity, date and guest count back to the submitter (TD-008)
- [ ] **Exact map coordinates** — replace the approximate Puerto Plata embed with Calle Beller #18
- [ ] **Structured data** — `TouristAttraction` / `Offer` schema markup for the activity pages

---

*Update this log whenever you research something - future you will thank present you.*
