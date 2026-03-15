# Technical SEO Audit & Next.js Migration Requirements

## Current State Assessment

### Critical Issues (Blocking Ranking)

#### 1. Client-Side Rendering Only
- **Status**: CRITICAL
- **Issue**: Vite + React SPA — all content rendered via JavaScript. Server returns blank `index.html` shell.
- **Impact**: Googlebot can render JS but delays it (days to weeks). Bing and AI crawlers may not see content at all.
- **Fix**: Migrate to Next.js with SSR (Server-Side Rendering) or SSG (Static Site Generation).
- **Next.js approach**: Use `generateStaticParams()` for static pages, `generateMetadata()` for dynamic SEO.

#### 2. Single HTML Shell for All Pages
- **Status**: CRITICAL
- **Issue**: `vercel.json` rewrites ALL routes to `/index.html`. Every URL returns identical HTML.
- **Impact**: Without JS execution, Google sees the same page for every URL.
- **Fix**: Next.js App Router gives each route its own server-rendered HTML.

#### 3. No Server-Side Meta Tags
- **Status**: HIGH
- **Issue**: Although `react-helmet-async` was added, meta tags are only injected client-side via JS.
- **Impact**: Crawlers that don't execute JS (most AI bots, social media scrapers) see static fallback meta.
- **Fix**: Next.js `metadata` export or `generateMetadata()` renders meta tags server-side.

### High Priority Issues

#### 4. No Proper OG Image
- **Status**: HIGH
- **Issue**: OG image references `og-image.png` which doesn't exist. Previous was SVG (unsupported by most platforms).
- **Fix**: Create 1200x630px PNG OG image. In Next.js, use `opengraph-image.tsx` for dynamic OG images.

#### 5. Missing hreflang Tags
- **Status**: MEDIUM (needed for US + Switzerland)
- **Issue**: No language/region targeting.
- **Fix**: Add `<link rel="alternate" hreflang="en-US" href="https://vantalo.in/..." />` and `<link rel="alternate" hreflang="en-CH" href="https://vantalo.in/..." />` on all pages.
- **Future**: German content for Swiss market would need `hreflang="de-CH"`.

#### 6. No Security Headers
- **Status**: MEDIUM
- **Issue**: Missing `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `Content-Security-Policy`.
- **Fix**: Add via `next.config.js` headers configuration:
```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }];
}
```

#### 7. Font Loading Optimization
- **Status**: MEDIUM
- **Issue**: Google Fonts loaded via external `<link>` tag — render-blocking.
- **Fix**: Next.js `next/font/google` with `display: swap` and automatic self-hosting:
```tsx
import { Plus_Jakarta_Sans } from 'next/font/google';
const font = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' });
```

#### 8. No Image Optimization
- **Status**: MEDIUM
- **Issue**: Images loaded as regular `<img>` tags. No lazy loading, no srcset, no WebP.
- **Fix**: Next.js `<Image>` component with automatic optimization, WebP conversion, lazy loading.

### Low Priority Issues

#### 9. Bundle Size Warning
- **Status**: LOW
- **Issue**: Single JS bundle at 668KB (gzipped 198KB). Large for initial load.
- **Fix**: Next.js automatic code splitting per route. Each page loads only its own JS.

#### 10. Broken Footer Links
- **Status**: LOW
- **Issue**: `/terms` and `/privacy` routes don't exist.
- **Fix**: Create these pages in Next.js migration.

---

## Next.js Migration Technical Spec

### Rendering Strategy Per Route

| Route | Strategy | Why |
|-------|----------|-----|
| `/` | SSG | Static content, high traffic |
| `/services` | SSG | Static content |
| `/services/[slug]` | SSG | Known slugs at build time |
| `/industries/[slug]` | SSG | Known slugs at build time |
| `/work` | SSG | Portfolio grid |
| `/work/[slug]` | SSG with `generateStaticParams` | Known project slugs |
| `/about` | SSG | Static content |
| `/about/akash-yadav` | SSG | Static content |
| `/insights` | ISR (60s) | Blog listing, updates often |
| `/insights/[slug]` | ISR (3600s) | Individual posts |
| `/contact` | SSG | Static form |
| `/faq` | SSG | Static FAQ content |
| `/compare/[slug]` | SSG | Known comparison pages |
| `/tools/roi-calculator` | SSG | Interactive client-side tool |
| `/terms`, `/privacy` | SSG | Legal pages |

### Core Web Vitals Targets

| Metric | Current (estimated) | Target | How |
|--------|-------------------|--------|-----|
| LCP | ~3.5s (SPA hydration) | < 2.0s | SSG + Image optimization |
| INP | ~250ms (heavy JS) | < 150ms | Code splitting + less JS |
| CLS | ~0.15 (no image dims) | < 0.05 | next/image + font swap |
| TTFB | ~200ms (static HTML) | < 100ms | Vercel Edge + SSG |
| FCP | ~2.0s | < 1.0s | Server-rendered HTML |

### Next.js App Router Structure

```
app/
├── layout.tsx              → Root layout (fonts, analytics, schema)
├── page.tsx                → Homepage (SSG)
├── services/
│   ├── page.tsx            → Services overview
│   └── [slug]/page.tsx     → Individual service pages
├── industries/
│   └── [slug]/page.tsx     → Industry vertical pages
├── work/
│   ├── page.tsx            → Portfolio grid
│   └── [slug]/page.tsx     → Case study detail
├── about/
│   ├── page.tsx            → About Vantalo
│   └── akash-yadav/page.tsx → Founder profile
├── insights/
│   ├── page.tsx            → Blog listing
│   └── [slug]/page.tsx     → Blog post
├── contact/page.tsx        → Contact form
├── faq/page.tsx            → FAQ page
├── compare/
│   └── [slug]/page.tsx     → Comparison pages
├── tools/
│   └── roi-calculator/page.tsx → ROI Calculator
├── terms/page.tsx          → Terms of Service
├── privacy/page.tsx        → Privacy Policy
├── sitemap.ts              → Dynamic XML sitemap
├── robots.ts               → Programmatic robots.txt
├── opengraph-image.tsx     → Default OG image
└── not-found.tsx           → Custom 404
```

### Metadata Pattern (Next.js App Router)

```tsx
// app/services/[slug]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const service = getService(params.slug);
  return {
    title: `${service.title} for Coaches & Educators | Vantalo`,
    description: service.seoDescription,
    alternates: {
      canonical: `https://vantalo.in/services/${params.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.seoDescription,
      type: 'website',
      url: `https://vantalo.in/services/${params.slug}`,
      images: [{ url: service.ogImage || '/og-image.png' }],
    },
  };
}
```

### Sitemap Generation (Next.js)

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vantalo.in';
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    // ... all routes
  ];
  const projectPages = projects.map(p => ({
    url: `${baseUrl}/work/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [...staticPages, ...projectPages];
}
```

### Robots.txt (Next.js)

```tsx
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
    ],
    sitemap: 'https://vantalo.in/sitemap.xml',
  };
}
```

### Security & Performance Headers

```js
// next.config.js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  },
};
```

### Redirect Map (Vite → Next.js)

| Old URL | New URL | Type |
|---------|---------|------|
| /services | /services | Keep |
| /projects | /work | 301 redirect |
| /project/[slug] | /work/[slug] | 301 redirect |
| /about | /about | Keep |
| /contact | /contact | Keep |

```js
// next.config.js
async redirects() {
  return [
    { source: '/projects', destination: '/work', permanent: true },
    { source: '/project/:slug', destination: '/work/:slug', permanent: true },
  ];
}
```

---

## Crawlability Checklist for Next.js

- [ ] Every page returns full HTML with content (no JS required)
- [ ] Unique `<title>` and `<meta description>` per page
- [ ] Self-referencing canonical on every page
- [ ] BreadcrumbList JSON-LD on every page
- [ ] XML sitemap auto-generated from routes
- [ ] robots.txt allows all bots + references sitemap
- [ ] hreflang tags for en-US and en-CH
- [ ] 301 redirects from old Vite URLs
- [ ] Custom 404 page
- [ ] No orphan pages
- [ ] All internal links use `<Link>` component (prefetching)
- [ ] Images use `<Image>` component (lazy + WebP + srcset)
- [ ] Fonts self-hosted via next/font
- [ ] Security headers set
- [ ] HTTPS enforced
