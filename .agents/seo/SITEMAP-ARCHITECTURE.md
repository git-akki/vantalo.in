# Sitemap Architecture — Vantalo (Next.js)

## Full URL Map

### Tier 1: Core Pages (Priority 1.0 - 0.9)

| URL | Page Type | Title Pattern | Priority | Frequency |
|-----|-----------|---------------|----------|-----------|
| / | Homepage | Vantalo \| AI-Powered Marketing for Coaches & Educators | 1.0 | weekly |
| /services | Services Hub | AI Social Media, Web Development & Automation Services \| Vantalo | 0.9 | monthly |
| /services/social-media | Service | AI Social Media Management for Coaches & Educators \| Vantalo | 0.9 | monthly |
| /services/web-development | Service | Web Development for Coaches & Online Courses \| Vantalo | 0.9 | monthly |
| /services/ai-automation | Service | AI Automation Agents for Coaching Businesses \| Vantalo | 0.9 | monthly |

### Tier 2: Industry & Portfolio (Priority 0.8 - 0.7)

| URL | Page Type | Title Pattern | Priority | Frequency |
|-----|-----------|---------------|----------|-----------|
| /industries/coaches | Industry | AI-Powered Marketing for Coaches & Consultants \| Vantalo | 0.8 | monthly |
| /industries/educators | Industry | Growth Systems for Online Educators & Course Creators \| Vantalo | 0.8 | monthly |
| /work | Portfolio Hub | Our Work — Case Studies & Results \| Vantalo | 0.8 | weekly |
| /work/hair-mastery | Case Study | Hair Mastery — WordPress LMS Platform \| Vantalo | 0.7 | monthly |
| /work/timeline-by-harsh | Case Study | Timeline by Harsh — 5M+ Views in 3 Months \| Vantalo | 0.7 | monthly |
| /work/modom-grooming | Case Study | Modom Grooming — E-Commerce Launch \| Vantalo | 0.7 | monthly |
| /work/hair-mastery-social | Case Study | Hair Mastery Social — 0 to 48K Followers \| Vantalo | 0.7 | monthly |
| /work/salon-appointment-system | Case Study | Salon Booking Automation \| Vantalo | 0.7 | monthly |
| /work/order-fulfillment-system | Case Study | Order Fulfillment Automation \| Vantalo | 0.7 | monthly |
| /work/ai-subtitle-translator | Case Study | AI Subtitle Translator — 9 Languages \| Vantalo | 0.7 | monthly |

### Tier 3: About & Trust (Priority 0.7 - 0.6)

| URL | Page Type | Title Pattern | Priority | Frequency |
|-----|-----------|---------------|----------|-----------|
| /about | About | About Vantalo — AI-Powered Growth Agency \| Vantalo | 0.7 | monthly |
| /about/akash-yadav | Person | Akash Yadav — Founder & Lead Architect \| Vantalo | 0.7 | monthly |
| /contact | Contact | Free Strategy Call — Contact Vantalo | 0.6 | monthly |
| /faq | FAQ | Frequently Asked Questions \| Vantalo | 0.6 | monthly |
| /terms | Legal | Terms of Service \| Vantalo | 0.3 | yearly |
| /privacy | Legal | Privacy Policy \| Vantalo | 0.3 | yearly |

### Tier 4: Blog/Insights (Priority 0.6 - 0.5)

| URL | Page Type | Title Pattern | Priority | Frequency |
|-----|-----------|---------------|----------|-----------|
| /insights | Blog Hub | Insights — AI Marketing for Coaches & Educators \| Vantalo | 0.6 | daily |
| /insights/[slug] | Blog Post | [Post Title] \| Vantalo Insights | 0.5 | monthly |
| /insights/category/[cat] | Category | [Category] Articles \| Vantalo Insights | 0.4 | weekly |

### Tier 5: Comparison & Tools (Priority 0.6 - 0.5)

| URL | Page Type | Title Pattern | Priority | Frequency |
|-----|-----------|---------------|----------|-----------|
| /compare/vantalo-vs-kajabi | Comparison | Vantalo vs Kajabi for Coaches \| Vantalo | 0.6 | monthly |
| /compare/vantalo-vs-diy-marketing | Comparison | Hiring Vantalo vs DIY Marketing for Coaches | 0.6 | monthly |
| /compare/vantalo-vs-freelancer | Comparison | Agency vs Freelancer for Your Coaching Business | 0.6 | monthly |
| /compare/kajabi-alternative-for-coaches | Alternative | Kajabi Alternative for Coaches — Custom Growth System | 0.6 | monthly |
| /compare/teachable-marketing-alternative | Alternative | Teachable Marketing Alternative for Course Creators | 0.6 | monthly |
| /tools/roi-calculator | Tool | Free ROI Calculator for Coaches \| Vantalo | 0.5 | monthly |

### Special Files

| URL | Type | Purpose |
|-----|------|---------|
| /sitemap.xml | XML Sitemap | Auto-generated from Next.js |
| /robots.txt | Robots | Crawl directives + sitemap reference |
| /llms.txt | AI Guide | Structured site overview for LLMs |
| /llms-full.txt | AI Full | Complete content for LLM ingestion |
| /opengraph-image.png | OG Image | Default social sharing image |

---

## Internal Linking Architecture

### Link Flow (PageRank Distribution)

```
Homepage (highest authority)
├── → /services (passes authority to service hub)
│   ├── → /services/social-media → links to case studies + blog posts
│   ├── → /services/web-development → links to case studies + blog posts
│   └── → /services/ai-automation → links to case studies + blog posts
├── → /industries/coaches (cross-links all 3 services)
├── → /industries/educators (cross-links all 3 services)
├── → /work (portfolio hub distributes to case studies)
├── → /about → /about/akash-yadav
└── → /contact (CTA from every page)
```

### Cross-Linking Rules

1. **Every service page** links to:
   - 2-3 relevant case studies
   - Relevant industry page(s)
   - 2-3 relevant blog posts
   - Contact/CTA

2. **Every case study** links to:
   - The service(s) used
   - Related case studies
   - Contact/CTA

3. **Every blog post** links to:
   - Parent service page
   - Related blog posts (2-3)
   - Relevant case study
   - Contact/CTA

4. **Every industry page** links to:
   - All 3 service pages
   - 2-3 relevant case studies
   - Industry-specific blog posts
   - Comparison pages

5. **Every comparison page** links to:
   - Relevant service page
   - Industry pages
   - Contact/CTA

### Breadcrumb Structure

| Page | Breadcrumb |
|------|-----------|
| Service page | Home > Services > [Service Name] |
| Industry page | Home > Industries > [Industry] |
| Case study | Home > Our Work > [Project Name] |
| Blog post | Home > Insights > [Category] > [Title] |
| Comparison | Home > Compare > [Title] |
| Founder page | Home > About > Akash Yadav |

---

## Quality Gates

### Before Adding Any URL to Sitemap:
- [ ] Page has unique title (< 60 chars)
- [ ] Page has unique meta description (< 160 chars)
- [ ] Page has 300+ words of unique content
- [ ] Page has self-referencing canonical
- [ ] Page has BreadcrumbList schema
- [ ] Page has at least 3 internal links pointing TO it
- [ ] Page has at least 2 internal links pointing FROM it
- [ ] Page returns 200 status code
- [ ] Page is not a thin content / doorway page

### Sitemap Health Metrics
- Total URLs: ~40-50 (Phase 1-2), scaling to ~120+ (Phase 4)
- No URLs returning 4xx or 5xx
- All URLs have `<lastmod>` dates
- No duplicate content URLs
- No non-canonical URLs in sitemap
- Submitted to Google Search Console and Bing Webmaster Tools

---

## Dynamic Sitemap Implementation (Next.js)

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';
import { getAllPosts } from '@/lib/blog';
import { getAllComparisons } from '@/lib/comparisons';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vantalo.in';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/social-media`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/ai-automation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/industries/coaches`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/educators`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/akash-yadav`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tools/roi-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const projects = await getAllProjects();
  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const posts = await getAllPosts();
  const postRoutes = posts.map((p) => ({
    url: `${baseUrl}/insights/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const comparisons = await getAllComparisons();
  const compareRoutes = comparisons.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes, ...compareRoutes];
}
```
