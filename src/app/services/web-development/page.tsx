import type { Metadata } from "next";
import { createBreadcrumbSchema, createServiceSchema, createFaqSchema } from "@/lib/schemas";
import WebDevContent from "./WebDevContent";

export const metadata: Metadata = {
  title: "Web Development for Coaches & Online Courses",
  description:
    "Conversion-focused web development using Next.js and React. We build high-performance websites for coaching businesses and online course platforms that turn visitors into clients.",
  alternates: { canonical: "https://vantalo.in/services/web-development" },
  keywords: ["web development for coaches", "website for online courses", "coaching website design", "Next.js web development", "conversion-focused website"],
};

const faqs = [
  { question: "What tech stack do you use for coaching websites?", answer: "We primarily build with Next.js and React for performance, SEO, and scalability. For course platforms, we also work with WordPress + LearnDash. Every stack decision is driven by your specific business needs." },
  { question: "How long does it take to build a coaching website?", answer: "A typical coaching website takes 4-6 weeks from strategy to launch. Complex platforms with LMS features or custom integrations may take 8-12 weeks." },
  { question: "Will my website be optimized for SEO?", answer: "Every website we build includes server-side rendering for instant crawlability, schema markup, Core Web Vitals optimization, and keyword-optimized content structure. SEO is not an add-on — it's built into the architecture." },
];

export default function WebDevPage() {
  const serviceSchema = createServiceSchema("Conversion-Focused Web Development for Coaches", "High-performance websites for coaching businesses using Next.js and React that turn visitors into paying clients.", "Web Development");
  const faqSchema = createFaqSchema(faqs);
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Services", url: "https://vantalo.in/services" },
    { name: "Web Development", url: "https://vantalo.in/services/web-development" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <WebDevContent />
    </>
  );
}
