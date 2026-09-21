# NorthBit Labs - SEO & Traffic Growth Playbook

_Last updated: 2026-09-21_

**The honest diagnosis:** your on-page/technical SEO is already good (the audit agrees). You have
almost no traffic because the domain is new, has **0 backlinks / 0 referring domains**, and is likely
**barely indexed**. None of that is fixed by meta tags - it's fixed by the actions below. Do them in
order; #1 and #3 are the highest leverage.

The code-side items the audit flagged have now been handled in this repo:
meta description length, `www → apex` canonical redirect, image optimization (`next/image` → AVIF/WebP),
hero LCP (server-rendered, no longer JS-gated), and heading structure. See the bottom of this file.

---

## 1. Get indexed - do this first (30 min, then wait)

If Google hasn't indexed your pages, you cannot rank. Confirm and force it.

- [ ] **Google Search Console** → https://search.google.com/search-console - add property `northbitlabs.tech`.
  - Verify via **DNS TXT** (you're on Cloudflare - easiest) OR set the env var the code already supports:
    add `GOOGLE_SITE_VERIFICATION=<token>` in **Vercel → Project → Settings → Environment Variables**,
    redeploy, then verify with the "HTML tag" method. (Code: `src/app/layout.tsx` reads this env var.)
  - **Sitemaps** → submit `https://northbitlabs.tech/sitemap.xml`.
  - **URL Inspection** → paste your homepage + `/services`, `/industries`, `/work`, `/free-consultation`
    → click **Request Indexing** for each key page.
- [ ] **Bing Webmaster Tools** → https://www.bing.com/webmasters - add the site, import from GSC, submit sitemap.
  (Bing also feeds ChatGPT search, so this matters for AI answer engines too.)
- [ ] After ~1 week: in GSC → **Pages**, confirm pages show as "Indexed", not "Discovered / Crawled – not indexed".

## 2. Fix the analytics blind spot (15 min)

GA4 + Microsoft Clarity **are installed** - but they only load **after** a visitor accepts the cookie
banner (`src/components/ui/CookieConsent.tsx`). That's why the SEO auditor "couldn't detect analytics"
and why your dashboards may look empty even with real visitors.

- [ ] Open GA4 → **Realtime** while visiting the live site and accepting cookies - confirm you register.
- [ ] Consider **Google Consent Mode v2** so anonymous, cookieless pings still count basic traffic before
  consent (keeps you compliant AND gives you real numbers). Ask me to wire this up if you want it.
- [ ] Treat **Search Console** (not GA) as the source of truth for organic search impressions/clicks -
  it counts every crawl/impression regardless of cookie consent.

## 3. Google Business Profile - your biggest local lever (1 hr)

You're Kenya-based with a phone number (+254 795 684258). A verified GBP gets you into Google Maps and
the local pack, which is often the fastest real traffic for a local services firm.

- [ ] Create/claim at https://business.google.com - category "Software company" / "Website designer".
- [ ] Add phone, service areas (Nairobi / Kenya / East Africa), website, hours, and 5–10 photos.
- [ ] Complete verification (postcard/phone/video as offered).
- [ ] Ask 3–5 past clients (RemitCore, Premier Beauty, Count Technologies, Magena, SSocials) for a Google review.
      Reviews are one of the strongest local-ranking signals.

## 4. Backlinks - you have zero; get the first 10–20 (ongoing)

Backlinks are the #1 off-page ranking factor and the audit's only HIGH-priority off-page item. Easy first wins:

- [ ] **LinkedIn Company Page** for NorthBit Labs (you currently only link a personal profile) → link it in the footer.
- [ ] Business/agency directories: **Clutch**, **GoodFirms**, **DesignRush**, **Crunchbase**, **G2**,
      plus Kenyan directories (**Yellow Pages Kenya**, **BusinessList.co.ke**, local chambers of commerce).
- [ ] Get a link from each **client's website** ("Built by NorthBit Labs" in their footer) - high-relevance links.
- [ ] Publish on **Medium / Dev.to / Hashnode** and link back to your `/insights` articles.
- [ ] Answer questions on **Reddit / Quora / relevant Slack & WhatsApp founder groups** with a genuine link when useful.

## 5. Social profiles the audit flagged (30 min)

You have Instagram + LinkedIn. Missing (create + link in footer + add to Organization JSON-LD `sameAs`):

- [ ] **X (Twitter)** business profile.
- [ ] **Facebook Page** (also needed if you ever run Meta ads / a Pixel).
- [ ] **YouTube channel** - even a placeholder with one intro/demo video; strong entity signal.

_When created, tell me the URLs and I'll add them to the footer and the `sameAs` list in the Organization schema._

## 6. Content cadence - the long game that compounds (weekly/biweekly)

Your `/insights` section is your keyword engine. Target real questions people search, in your niche:

- [ ] Publish **1 article every 1–2 weeks**. Working titles that match search intent:
  - "M-Pesa Daraja API integration: a practical guide for Kenyan businesses"
  - "Custom software vs off-the-shelf for African SMEs - a cost breakdown"
  - "CBK compliance for fintech software: what founders must know"
  - "AI automation for operations teams: 5 workflows to start with"
- [ ] Each post: one clear primary keyword in the title, H1, first paragraph, and URL slug.
- [ ] Internally link each new post to `/services` and `/free-consultation`.
- [ ] Resubmit the sitemap / request indexing in GSC after publishing.

## 7. Measure (weekly, 10 min)

- [ ] GSC → **Performance**: track total impressions & clicks week over week. Impressions rising = you're being
      seen; then optimize titles/descriptions of pages with impressions but low CTR.
- [ ] GSC → **Pages**: watch indexed count climb.
- [ ] Clarity: watch session recordings/heatmaps to fix drop-off on key pages.

---

## Appendix - code changes already shipped (2026-09-21)

| Audit item | Fix | File |
|---|---|---|
| Meta description too long (220 → 155 chars) | Rewrote, keyword-front-loaded | `src/app/layout.tsx` |
| URL canonicalization (HIGH) | `www → apex` 308 redirect (canonical tag already present) | `next.config.ts` |
| Images not in modern format / not sized (HIGH+MED) | Raw `<img>` → `next/image` (AVIF/WebP, responsive) | `IndustriesStack`, `ServicesCarousel`, `page.tsx`, `industries/page.tsx` |
| Mobile LCP 8.8s | Hero `<h1>` now server-rendered + CSS animation (no longer waits for JS hydration) | `src/components/ui/HeroReveal.tsx` |
| Skipped heading levels (3) | `h2 → h4` items promoted to `h3`; footer labels to `h2` | `page.tsx`, `Footer.tsx` |
| Missing alt (decorative homepage image) | Gave pillar photo a descriptive alt | `src/app/page.tsx` |

**Not applicable / intentional (don't "fix"):**
- **Hreflang** - the site is single-language (`en-KE`); hreflang is only for multi-language/region variants.
- **"Analytics not detected"** - GA4 + Clarity are installed but gated behind cookie consent (see §2).
- **CDN** - you're already on Vercel's edge CDN; the audit just didn't recognize it.
- **Inline styles / >20 requests** - cosmetic audit nits with negligible ranking impact; not worth the churn.
