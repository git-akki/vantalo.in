import type { Metadata } from "next";
import { createBreadcrumbSchema, createServiceSchema, createFaqSchema } from "@/lib/schemas";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: "AI Social Media Management for Coaches & Educators",
  description:
    "Strategic AI-powered social media management that builds your brand, grows your audience, and fills your pipeline. Organic growth systems specifically designed for coaches and educators.",
  alternates: { canonical: "https://vantalo.in/services/social-media" },
  keywords: [
    "AI social media management for coaches",
    "social media agency for educators",
    "social media growth for coaches",
    "organic social media strategy",
    "social media for course creators",
  ],
};

const faqs = [
  {
    question: "How does AI improve social media management for coaches?",
    answer:
      "AI analyzes audience behavior, optimizes posting schedules, identifies trending content formats, and generates data-driven content strategies. This means higher engagement, faster growth, and more leads — all without the guesswork of manual social media management.",
  },
  {
    question: "How long until I see results from social media?",
    answer:
      "Most coaching clients see measurable engagement growth within 30 days and significant audience growth within 90 days. Our case study with Timeline by Harsh achieved 5M+ views in just 3 months.",
  },
  {
    question: "Do you manage all social media platforms?",
    answer:
      "We focus on the platforms where your coaching audience lives — typically Instagram, LinkedIn, YouTube, and TikTok. We build a strategy tailored to your niche rather than spreading thin across every platform.",
  },
];

export default function SocialMediaPage() {
  const serviceSchema = createServiceSchema(
    "AI-Powered Social Media Management for Coaches",
    "Strategic AI-powered social media management that builds your coaching brand, grows your audience organically, and fills your pipeline with qualified leads.",
    "Social Media Management"
  );
  const faqSchema = createFaqSchema(faqs);
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Services", url: "https://vantalo.in/services" },
    { name: "AI Social Media Management", url: "https://vantalo.in/services/social-media" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SocialMediaContent />
    </>
  );
}
