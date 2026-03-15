import type { Metadata } from "next";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import EducatorsContent from "./EducatorsContent";

export const metadata: Metadata = {
  title: "Growth Systems for Online Educators & Course Creators",
  description: "Vantalo helps educators and course creators scale with AI social media management, conversion-focused course websites, and AI automation agents that handle student support 24/7.",
  alternates: { canonical: "https://vantalo.in/industries/educators" },
  keywords: ["marketing for course creators", "social media for educators", "website for online courses", "AI automation for educators", "LMS development"],
};

const faqs = [
  { question: "Can you build a custom course platform?", answer: "Yes. We've built LMS platforms with LearnDash, role-based instructor economies, secure video streaming, and automated earnings tracking. Our Hair Mastery platform is a prime example." },
  { question: "How do you help course creators get more students?", answer: "We build a three-part system: social media that establishes your authority and drives traffic, a conversion-optimized website that turns visitors into students, and AI agents that handle enrollment and support." },
];

export default function EducatorsPage() {
  const faqSchema = createFaqSchema(faqs);
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Industries", url: "https://vantalo.in/industries/educators" },
    { name: "Educators", url: "https://vantalo.in/industries/educators" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <EducatorsContent />
    </>
  );
}
