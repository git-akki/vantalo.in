import type { Metadata } from "next";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import CoachesContent from "./CoachesContent";

export const metadata: Metadata = {
  title: "AI-Powered Marketing for Coaches & Consultants",
  description: "Vantalo builds growth systems for coaches: AI social media management that fills your pipeline, websites that convert visitors to clients, and AI agents that handle operations 24/7.",
  alternates: { canonical: "https://vantalo.in/industries/coaches" },
  keywords: ["marketing agency for coaches", "social media for coaches", "website for coaches", "AI automation for coaching business", "digital marketing for life coaches"],
};

const faqs = [
  { question: "Why do coaches need a specialized marketing agency?", answer: "Coaches sell transformation, not products. Generic marketing agencies don't understand how to communicate intangible value. We specialize in building systems that showcase your expertise and convert curious visitors into committed clients." },
  { question: "Can you help me get more coaching clients through social media?", answer: "Yes. Our AI-powered social media management builds your authority, grows your audience organically, and creates a consistent pipeline of qualified leads who already trust you before they book a call." },
  { question: "I already have a website. Can you improve it?", answer: "Absolutely. We audit your current site for conversion bottlenecks, then rebuild or optimize it into a client acquisition machine. Most coaching websites leave 80% of their potential leads on the table." },
];

export default function CoachesPage() {
  const faqSchema = createFaqSchema(faqs);
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Industries", url: "https://vantalo.in/industries/coaches" },
    { name: "Coaches", url: "https://vantalo.in/industries/coaches" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CoachesContent />
    </>
  );
}
