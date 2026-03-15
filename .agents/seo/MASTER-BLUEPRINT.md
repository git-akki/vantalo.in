# Vantalo — Master SEO + Next.js Migration Blueprint

## Executive Summary

Vantalo is migrating from a Vite + React SPA to Next.js to unlock server-side rendering, per-page SEO, and advanced AI search optimization. The target market is **educators and coaches in the USA and Switzerland**.

### The 5 Critical Moves
1. **Next.js migration** — SSR/SSG for every page (currently invisible to most crawlers)
2. **Niche positioning** — Every page keyword-optimized for "coaches" and "educators" (not generic "businesses")
3. **Content engine** — Blog with 2 posts/week targeting informational queries coaches search
4. **AI search readiness** — llms.txt, structured data, answer-box content, entity building
5. **Comparison content** — vs Kajabi, vs DIY, vs freelancers (captures decision-stage traffic)

---

## Documents Created

| Document | Path | Purpose |
|----------|------|---------|
| Product Marketing Context | `.agents/product-marketing-context.md` | ICP, positioning, competitive landscape |
| SEO Strategy | `.agents/seo/SEO-STRATEGY.md` | Keywords, content pillars, architecture, phases |
| Competitor Pages | `.agents/seo/COMPETITOR-PAGES.md` | vs/alternative pages, industry pages |
| Technical SEO | `.agents/seo/TECHNICAL-SEO.md` | Audit, Next.js spec, Core Web Vitals |
| GEO Strategy | `.agents/seo/GEO-STRATEGY.md` | AI Overviews, ChatGPT, Perplexity optimization |
| Sitemap Architecture | `.agents/seo/SITEMAP-ARCHITECTURE.md` | Full URL map, internal linking, quality gates |
| AI SEO Strategy | `.agents/seo/AI-SEO-STRATEGY.md` | AEO, LLMO, entity building, content calendar |

---

## Next.js App Router Structure (Final)

```
app/
├── layout.tsx                    → Root layout (fonts, analytics, Organization schema)
├── page.tsx                      → Homepage
├── opengraph-image.tsx           → Dynamic OG image
├── sitemap.ts                    → Auto-generated XML sitemap
├── robots.ts                     → Programmatic robots.txt
├── not-found.tsx                 → Custom 404
│
├── services/
│   ├── page.tsx                  → Services hub
│   ├── social-media/page.tsx     → AI Social Media Management
│   ├── web-development/page.tsx  → Web Development for Coaches
│   └── ai-automation/page.tsx    → AI Automation Agents
│
├── industries/
│   ├── coaches/page.tsx          → For Coaches & Consultants
│   └── educators/page.tsx        → For Educators & Course Creators
│
├── work/
│   ├── page.tsx                  → Portfolio grid
│   └── [slug]/page.tsx           → Case study detail
│
├── about/
│   ├── page.tsx                  → About Vantalo
│   └── akash-yadav/page.tsx      → Founder profile (ProfilePage schema)
│
├── insights/
│   ├── page.tsx                  → Blog listing
│   ├── [slug]/page.tsx           → Blog post (BlogPosting schema)
│   └── category/[cat]/page.tsx   → Category archive
│
├── compare/
│   └── [slug]/page.tsx           → Comparison & alternative pages
│
├── tools/
│   └── roi-calculator/page.tsx   → ROI Calculator (lead gen)
│
├── contact/page.tsx              → Contact + booking
├── faq/page.tsx                  → FAQ (FAQPage schema)
├── terms/page.tsx                → Terms of Service
└── privacy/page.tsx              → Privacy Policy
```

---

## Schema Markup Summary

| Page | Schema Types |
|------|-------------|
| Homepage | ProfessionalService, WebSite, FAQPage |
| Service pages | Service, FAQPage, BreadcrumbList |
| Industry pages | Service, FAQPage, BreadcrumbList |
| Case studies | Article, BreadcrumbList |
| Blog posts | BlogPosting, Person, BreadcrumbList, SpeakableSpecification |
| About | Organization, BreadcrumbList |
| Founder | ProfilePage, Person, BreadcrumbList |
| FAQ | FAQPage, BreadcrumbList |
| Comparisons | Article, FAQPage, BreadcrumbList |

---

## Keyword → Page Map (Priority)

| Keyword | Target Page | Status |
|---------|------------|--------|
| AI social media agency for coaches | / + /services/social-media | Build |
| web development for coaches | /services/web-development | Build |
| AI automation for coaching business | /services/ai-automation | Build |
| marketing agency for educators USA | / + /industries/educators | Build |
| social media management for course creators | /services/social-media | Build |
| Kajabi alternative for coaches | /compare/kajabi-alternative | Phase 3 |
| how to grow coaching business social media | Blog post | Phase 2 |
| best website for coaches 2026 | Blog post | Phase 2 |

---

## Migration Checklist

### Pre-Migration
- [ ] Document all current URLs
- [ ] Set up Google Search Console for vantalo.in
- [ ] Set up Google Analytics 4
- [ ] Create OG image (1200x630 PNG)
- [ ] Prepare redirect map (Vite URLs → Next.js URLs)

### During Migration
- [ ] Scaffold Next.js App Router project
- [ ] Port all components (adapt for RSC / Client Components)
- [ ] Implement `generateMetadata()` on every route
- [ ] Add JSON-LD schema to every page
- [ ] Create dynamic `sitemap.ts` and `robots.ts`
- [ ] Self-host fonts via `next/font`
- [ ] Use `<Image>` component everywhere
- [ ] Add security headers in `next.config.js`
- [ ] Create llms.txt and llms-full.txt
- [ ] Set up 301 redirects for changed URLs
- [ ] Create Terms and Privacy pages
- [ ] Add hreflang tags (en-US, en-CH)

### Post-Migration
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Run Lighthouse audit (target 90+ on all scores)
- [ ] Test all pages render without JavaScript
- [ ] Verify schema with Google Rich Results Test
- [ ] Monitor Search Console for crawl errors
- [ ] Set up rank tracking for target keywords
- [ ] Create Google Business Profile
- [ ] Submit to Clutch, DesignRush, GoodFirms

---

## Timeline

| Phase | Duration | Key Deliverables |
|-------|----------|-----------------|
| **Phase 1: Next.js Migration** | Weeks 1-4 | Core pages, schema, sitemap, tech foundation |
| **Phase 2: Content Expansion** | Weeks 5-12 | Industry pages, blog launch, case studies, ROI tool |
| **Phase 3: Scale** | Weeks 13-24 | Comparison pages, programmatic SEO, link building, Swiss market |
| **Phase 4: Authority** | Months 7-12 | Original research, video, PR, advanced GEO |
