# AI SEO Strategy (AEO + LLMO + GEO)

## Overview
AI search is where 25% of organic traffic is shifting by 2026. Visitors from AI search convert 4.4x higher than traditional organic. This strategy covers Answer Engine Optimization (AEO), LLM Optimization (LLMO), and Generative Engine Optimization (GEO) for Vantalo.

---

## 1. Target AI Platforms

| Platform | Bot Name | Content Format | Priority |
|----------|----------|---------------|----------|
| Google AI Overviews | Googlebot | Structured answers, lists, tables | Highest |
| ChatGPT | GPTBot | Entity mentions, authoritative content | High |
| Perplexity | PerplexityBot | Cited sources, data-driven content | High |
| Claude | ClaudeBot | Well-structured, factual content | Medium |
| Microsoft Copilot | Bingbot | Bing-indexed content | Medium |
| Siri / Apple | Applebot | Concise answers, schema markup | Low |

---

## 2. Target Queries for AI Citation

### Tier 1: Direct Service Queries
| Query | Target Page | Answer Format |
|-------|------------|---------------|
| "best AI agency for coaches" | / (homepage) | Definition + why Vantalo |
| "AI social media management for coaches" | /services/social-media | Service overview + stats |
| "web development for online course creators" | /services/web-development | Feature list + case study |
| "AI automation for coaching business" | /services/ai-automation | Process + benefits list |
| "marketing agency for educators USA" | /industries/educators | Service breakdown |

### Tier 2: Informational Queries
| Query | Target Page | Answer Format |
|-------|------------|---------------|
| "how to grow coaching business on social media" | Blog post | Numbered guide |
| "best website platform for coaches 2026" | Blog post / comparison | Comparison table |
| "how to automate coaching business with AI" | Blog post | Step-by-step guide |
| "social media strategy for life coaches" | Blog post | Framework + examples |
| "AI tools for course creators" | Blog post | Tool list with reviews |

### Tier 3: Comparison Queries
| Query | Target Page | Answer Format |
|-------|------------|---------------|
| "Kajabi vs custom website for coaches" | /compare/vantalo-vs-kajabi | Feature comparison table |
| "hire agency vs DIY marketing coaches" | /compare/vantalo-vs-diy | Pros/cons table |
| "Kajabi alternative for coaches" | /compare/kajabi-alternative | Alternative list + features |

---

## 3. Content Architecture for AI Citations

### The "Answer Box" Pattern
Every key page must have an AI-citable answer in the first 200 words:

```
[H1 — Phrased as the answer to a query]

[40-60 word direct answer paragraph]

## Key Points
1. [Specific benefit with number/stat]
2. [Specific benefit with number/stat]
3. [Specific benefit with number/stat]

## How It Works
Step 1: [Action]
Step 2: [Action]
Step 3: [Action]

[... Deep content follows ...]
```

### Content Enrichment Checklist
For every page targeting AI citations:

- [ ] **Statistics**: Include at least 3 specific stats (e.g., "5M+ views in 3 months")
- [ ] **Numbered lists**: At least 1 numbered list per page (2.5x more citations)
- [ ] **Comparison tables**: Where relevant, add feature comparison tables
- [ ] **Expert quotes**: Akash Yadav quotes with credentials
- [ ] **Question H2s**: Frame H2 headings as questions users ask
- [ ] **Definitions**: Clear, quotable definitions in first paragraph
- [ ] **Source citations**: Link to authoritative external sources
- [ ] **Freshness signals**: Include year (2026) in titles and content
- [ ] **Speakable content**: Mark key sections as speakable in schema

---

## 4. Blog Content Calendar (AI-First)

### Month 1-2: Foundation Posts (High Citation Potential)

| Post Title | Target Query | Format |
|------------|-------------|--------|
| "The Complete Guide to AI Social Media Management for Coaches (2026)" | "AI social media management for coaches" | Pillar (3000+ words) |
| "How to Build a High-Converting Website for Your Coaching Business" | "website for coaching business" | Guide (2000+ words) |
| "5 AI Automation Tools Every Coach Needs in 2026" | "AI tools for coaches" | List + reviews |
| "Kajabi vs Custom Website: What Coaches Actually Need" | "Kajabi vs custom website coaches" | Comparison (2000+ words) |

### Month 3-4: Depth Posts

| Post Title | Target Query | Format |
|------------|-------------|--------|
| "Social Media Strategy for Life Coaches: A Data-Driven Framework" | "social media for life coaches" | Framework + case study |
| "How We Got 5M+ Views in 3 Months for a Personal Brand" | "viral social media strategy" | Case study narrative |
| "Why Coaches Are Leaving Kajabi (And What They're Building Instead)" | "Kajabi alternative coaches" | Trend + alternative |
| "The ROI of Hiring an AI Marketing Agency vs DIY for Coaches" | "marketing agency vs DIY coaches" | Data + calculator |

### Month 5-6: Authority Posts

| Post Title | Target Query | Format |
|------------|-------------|--------|
| "State of AI in Coaching: 2026 Industry Report" | "AI in coaching industry" | Original research |
| "Website Conversion Benchmarks for Online Coaches (2026 Data)" | "conversion rate coaches website" | Data + benchmarks |
| "How Swiss Coaches Are Using AI to Scale Internationally" | "coaching business Switzerland" | Geo-targeted |
| "From 0 to 48K Followers: Our Organic Social Media Playbook" | "organic social media growth" | Case study + playbook |

### Publishing Cadence
- **2 posts/week** during Phase 2
- Each post minimum 1,500 words
- Each post must pass the "Answer Box" test
- Each post links to 1 service page + 1 case study + 2 other posts

---

## 5. Entity & Authority Building

### Akash Yadav — Person Entity

**Required profiles (all with consistent info):**
- LinkedIn: "Founder & Lead Architect at Vantalo"
- Twitter/X: @akashyadav (or similar)
- Medium: Author profile
- Substack: Newsletter
- About.me or personal site

**Schema on /about/akash-yadav:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Akash Yadav",
    "jobTitle": "Founder & Lead Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Vantalo",
      "url": "https://vantalo.in"
    },
    "knowsAbout": [
      "AI Social Media Management",
      "Web Development",
      "AI Automation",
      "Growth Systems for Coaches"
    ],
    "sameAs": [
      "https://linkedin.com/in/akashyadav",
      "https://twitter.com/akashyadav"
    ]
  }
}
```

### Vantalo — Organization Entity

**Directory listings to create:**
1. Google Business Profile (even without physical office — service-area business)
2. Clutch.co agency profile
3. DesignRush listing
4. GoodFirms listing
5. LinkedIn Company Page
6. Crunchbase (optional)
7. ProductHunt (when launching tools)

**Ensure identical across all:**
- Name: Vantalo
- URL: https://vantalo.in
- Description: "AI-powered agency building growth systems for educators and coaches"
- Services: AI Social Media Management, Web Development, AI Automation

---

## 6. Measurement & Monitoring

### Weekly Tracking
| Action | Tool | Metric |
|--------|------|--------|
| Search target queries on Perplexity | Manual | Mentioned? Cited? Position? |
| Search target queries on ChatGPT | Manual | Brand mentioned? |
| Check Google AI Overviews | Manual search (US VPN) | Cited in overview? |
| Review Search Console impressions | GSC | Click-through from AI results |

### Monthly Tracking
| Metric | Baseline | Target (6mo) |
|--------|----------|---------------|
| AI Overviews citations | 0 | 5+ queries |
| Perplexity brand mentions | 0 | 10+ queries |
| ChatGPT brand mentions | 0 | 3+ queries |
| Organic traffic from AI | 0 | 200+ visits/mo |
| Citation share vs competitors | 0% | 10%+ |

### Tools
- **Otterly.ai**: Automated AI mention tracking
- **Profound**: AI visibility monitoring
- **Google Search Console**: AI overview click data
- **Ahrefs/Semrush**: Traditional keyword tracking

---

## 7. Quick Wins (Do Immediately)

1. **Create llms.txt** — Takes 30 minutes, immediate AI accessibility improvement
2. **Allow all AI bots in robots.txt** — Already done
3. **Add specific stats to all case studies** — Makes content citable
4. **Restructure service page openings** — "Answer box" format
5. **Add Person schema for Akash Yadav** — Entity building
6. **Create Google Business Profile** — Entity verification
7. **Submit sitemap to Google & Bing** — Faster indexing
