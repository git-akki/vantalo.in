const SITE_URL = "https://vantalo.in";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Vantalo",
  url: SITE_URL,
  logo: `${SITE_URL}/VANTALO_PRIMARY.svg`,
  description:
    "AI-powered agency building unified growth systems for educators and coaches. We combine AI social media management, conversion-focused web development, and AI automation agents.",
  founder: {
    "@type": "Person",
    name: "Akash Yadav",
    jobTitle: "Founder & Lead Architect",
  },
  sameAs: [
    "https://www.linkedin.com/company/vantalo",
    "https://x.com/vantalo_agency",
    "https://www.instagram.com/vantalo.in",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${SITE_URL}/contact`,
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Switzerland" },
  ],
  knowsAbout: [
    "AI Social Media Management",
    "Web Development for Coaches",
    "AI Automation Agents",
    "Growth Systems for Educators",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Social Media Management",
          description:
            "AI-driven social media strategy and content management for coaches and educators.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversion-Focused Web Development",
          description:
            "High-performance websites for coaching businesses using Next.js and React.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation Agents",
          description:
            "Custom AI agents for lead qualification, workflow automation, and business scaling.",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Vantalo",
  url: SITE_URL,
  description:
    "AI-powered social media management, web development, and AI automation agency for coaches and educators.",
  publisher: {
    "@type": "Organization",
    name: "Vantalo",
  },
};

export function createServiceSchema(
  name: string,
  description: string,
  serviceType: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Vantalo",
      url: SITE_URL,
    },
    serviceType,
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Switzerland" },
    ],
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: {
      "@type": "Person",
      name: "Akash Yadav",
      url: `${SITE_URL}/about/akash-yadav`,
    },
    publisher: {
      "@type": "Organization",
      name: "Vantalo",
      url: SITE_URL,
    },
    datePublished,
    dateModified: dateModified || datePublished,
  };
}
