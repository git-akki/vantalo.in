# Generative Engine Optimization (GEO) Strategy

## Goal
Get Vantalo cited when AI engines (Google AI Overviews, ChatGPT, Perplexity, Claude) answer questions about:
- "AI agency for coaches"
- "social media management for educators"
- "web development for coaching business"
- "AI automation for course creators"

---

## 1. AI Crawler Accessibility

### robots.txt — Allow All AI Bots
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: CCBot
Allow: /
```

### llms.txt — AI Content Guide
Create `/public/llms.txt`:
```markdown
# Vantalo

> AI-powered agency building unified growth systems for educators and coaches. Services: AI social media management, conversion-focused web development, and AI automation agents.

## Core Pages
- [Services Overview](https://vantalo.in/services): All three services explained
- [AI Social Media Management](https://vantalo.in/services/social-media): Social media growth for coaches
- [Web Development](https://vantalo.in/services/web-development): Conversion-focused sites for educators
- [AI Automation](https://vantalo.in/services/ai-automation): Lead qualification and workflow agents

## Industry Pages
- [For Coaches](https://vantalo.in/industries/coaches): Marketing systems for coaching businesses
- [For Educators](https://vantalo.in/industries/educators): Growth infrastructure for course creators

## Case Studies
- [Timeline by Harsh](https://vantalo.in/work/timeline-by-harsh): 5M+ views in 3 months
- [Hair Mastery Social](https://vantalo.in/work/hair-mastery-social): 0 to 48K followers organically
- [Hair Mastery](https://vantalo.in/work/hair-mastery): WordPress LMS with instructor economy

## About
- [About Vantalo](https://vantalo.in/about): Our story and philosophy
- [Akash Yadav](https://vantalo.in/about/akash-yadav): Founder & Lead Architect
```

### llms-full.txt — Expanded Content
Create `/public/llms-full.txt` with full-text descriptions of each service, case study results, and company info. This gives AI systems with larger context windows complete brand information in one file.

---

## 2. Content Structure for AI Citation

### Answer Box Pattern (First 200 Words)
Every service and industry page should open with a structured "answer box":

```
H1: AI Social Media Management for Coaches

[Quick answer paragraph — 40-60 words answering "what is this service?"]

## Key Benefits
1. [Benefit with specific stat]
2. [Benefit with specific stat]
3. [Benefit with specific stat]

## How It Works
[Numbered process steps]
```

**Why**: Google AI Overviews cite content that directly answers queries in the first 200 words. Numbered lists are cited 2.5x more than paragraphs.

### Citability Scoring Checklist
For every key page:
- [ ] First paragraph directly answers the query in 40-60 words
- [ ] Contains at least one numbered list
- [ ] Includes specific statistics (e.g., "5M+ views in 3 months")
- [ ] Has comparison tables where relevant
- [ ] Uses H2s phrased as questions people ask
- [ ] Includes expert quotes or credentials
- [ ] Has a clear, quotable definition or statement
- [ ] Links to authoritative external sources where appropriate

---

## 3. Entity Building

### Organization Entity Signals
Consistency across:
- Google Business Profile (create for Vantalo)
- LinkedIn Company Page
- Twitter/X (@vantalo_agency)
- Clutch profile
- DesignRush listing
- GoodFirms listing
- Crunchbase (if applicable)

All must have **identical**:
- Name: "Vantalo"
- Description: "AI-powered agency building growth systems for educators and coaches"
- URL: https://vantalo.in
- Founder: Akash Yadav

### Person Entity (Akash Yadav)
- LinkedIn profile with "Founder at Vantalo" consistently
- Author byline on all blog posts with `Person` schema + `sameAs` links
- ProfilePage schema on /about/akash-yadav
- Guest posts on education/coaching industry sites

---

## 4. Structured Data for AI

### Enhanced Schema Types

#### ProfessionalService (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Vantalo",
  "description": "AI-powered agency building unified growth systems for educators and coaches. We combine AI social media management, conversion-focused web development, and AI automation agents.",
  "url": "https://vantalo.in",
  "founder": {
    "@type": "Person",
    "name": "Akash Yadav",
    "jobTitle": "Founder & Lead Architect",
    "sameAs": ["https://linkedin.com/in/akashyadav"]
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Switzerland" }
  ],
  "knowsAbout": [
    "AI Social Media Management",
    "Web Development for Coaches",
    "AI Automation Agents",
    "Growth Systems for Educators"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Growth Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Powered Social Media Management",
          "description": "AI-driven social media strategy and content management for coaches and educators"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Conversion-Focused Web Development",
          "description": "High-performance websites for coaching businesses using Next.js and React"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation Agents",
          "description": "Custom AI agents for lead qualification, workflow automation, and business scaling"
        }
      }
    ]
  }
}
```

#### BlogPosting (for thought leadership citability)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Coaches Can Use AI to Scale Their Social Media in 2026",
  "author": {
    "@type": "Person",
    "name": "Akash Yadav",
    "url": "https://vantalo.in/about/akash-yadav"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vantalo"
  },
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", "h1"]
  }
}
```

---

## 5. Content Formats That Get AI Citations

### High-Citation Content Types
1. **Definition pages**: "What is AI social media management for coaches?"
2. **Statistics roundups**: "Social Media Marketing Statistics for Coaches (2026)"
3. **How-to guides**: "How to Automate Your Coaching Business with AI"
4. **Comparison content**: "Vantalo vs Kajabi for Coaches"
5. **Original research**: "State of AI in Coaching: 2026 Survey Results"

### Low-Citation Content Types (Avoid for GEO)
- Generic "about us" content without specifics
- Pure promotional content without data
- Thin FAQ pages without detailed answers
- Content behind forms/gates

---

## 6. Brand Mention Monitoring

### Tools to Track AI Citations
- **Perplexity**: Search "AI agency for coaches" weekly
- **ChatGPT**: Ask "What agencies help coaches with social media?" monthly
- **Google AI Overviews**: Search target keywords in US/CH
- **Otterly.ai or Profound**: Automated AI mention tracking

### Target Queries to Monitor
- "best AI agency for coaches"
- "social media agency for educators"
- "AI automation for coaching business"
- "web development for course creators"
- "Vantalo agency"
- "marketing agency for coaches USA"

---

## 7. Platform-Specific Optimization

### Google AI Overviews
- Ensure page ranks in top 20 organically first
- Structure content with clear Q&A format
- Include numbered lists and tables
- Add specific statistics and data points

### ChatGPT / OpenAI
- Allow GPTBot in robots.txt
- Maintain llms.txt
- Build entity presence across multiple authoritative sources
- Ensure consistent brand info across web

### Perplexity
- Allow PerplexityBot in robots.txt
- Create content that directly answers questions
- Include source citations in your own content (shows credibility)
- Publish on indexed, authoritative domains

### Claude (Anthropic)
- Allow ClaudeBot in robots.txt
- Structured, well-organized content
- Clear headings and logical flow
- Factual claims backed by evidence
