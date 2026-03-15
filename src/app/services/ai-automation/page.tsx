import type { Metadata } from "next";
import { createBreadcrumbSchema, createServiceSchema, createFaqSchema } from "@/lib/schemas";
import AIAutomationContent from "./AIAutomationContent";

export const metadata: Metadata = {
  title: "AI Automation Agents for Coaching Businesses",
  description: "Deploy custom AI automation agents that handle lead qualification, appointment booking, workflow automation, and client support 24/7. Scale your coaching business without adding headcount.",
  alternates: { canonical: "https://vantalo.in/services/ai-automation" },
  keywords: ["AI automation for coaches", "coaching business automation", "AI lead qualification", "workflow automation for educators", "AI chatbot for coaches"],
};

const faqs = [
  { question: "What kind of AI agents can you build for coaches?", answer: "We build lead qualification bots, appointment scheduling agents, onboarding automation, FAQ chatbots trained on your coaching methodology, email follow-up sequences, and CRM workflow connectors." },
  { question: "Do AI agents replace human interaction?", answer: "No. AI agents handle the repetitive operational tasks so you can focus on high-value coaching interactions. They qualify leads, book calls, and handle admin — you handle the coaching." },
  { question: "How quickly can an AI agent be deployed?", answer: "Simple automation agents (booking, FAQ) can be live in 1-2 weeks. Complex agents with custom knowledge bases and multi-system integrations typically take 4-6 weeks." },
];

export default function AIAutomationPage() {
  const serviceSchema = createServiceSchema("AI Automation Agents for Coaching Businesses", "Custom AI agents for lead qualification, workflow automation, and 24/7 business operations for coaches and educators.", "AI Automation");
  const faqSchema = createFaqSchema(faqs);
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Services", url: "https://vantalo.in/services" },
    { name: "AI Automation", url: "https://vantalo.in/services/ai-automation" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AIAutomationContent />
    </>
  );
}
