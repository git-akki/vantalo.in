import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import Articles from "@/components/Articles";
import BookingTrust from "@/components/BookingTrust";
import ProjectAudit from "@/components/ProjectAudit";
import FAQ from "@/components/FAQ";
import ToolCTA from "@/components/ToolCTA";
import { createFaqSchema, createBreadcrumbSchema } from "@/lib/schemas";

const homeFaqs = [
  {
    question: "What does an AI-powered social media agency do for coaches?",
    answer:
      "An AI-powered social media agency like Vantalo uses artificial intelligence to optimize content strategy, automate posting schedules, analyze audience engagement, and create data-driven social media campaigns that grow your coaching brand's reach and revenue organically.",
  },
  {
    question: "How can AI automation help my coaching business?",
    answer:
      "AI automation agents handle repetitive tasks like lead qualification, customer support, email follow-ups, and workflow management 24/7. This lets you focus on coaching while the system scales operations without adding headcount.",
  },
  {
    question: "What makes Vantalo different from other digital agencies?",
    answer:
      "Vantalo treats social media, web development, and AI automation as a unified growth system rather than separate services. We build interconnected infrastructure specifically for coaches and educators where your social presence drives traffic to a conversion-optimized website, supported by AI agents that automate operations.",
  },
  {
    question: "Do you build websites with AI integration for coaches?",
    answer:
      "Yes. We build high-performance websites using Next.js and React, with built-in AI features such as chatbots, lead qualification agents, personalized content, and automated workflows that connect your website to your entire coaching business ecosystem.",
  },
];

export default function HomePage() {
  const faqSchema = createFaqSchema(homeFaqs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <Brands />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <ProjectAudit />
      <ToolCTA />
      <Articles />
      <About />
      <FAQ />
      <BookCall />
      <BookingTrust />
      <Contact />
    </>
  );
}
