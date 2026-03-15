import type { Metadata } from "next";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/schemas";
import FAQ from "@/components/FAQ";
import BookCall from "@/components/BookCall";

const faqs = [
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
      "Vantalo treats social media, web development, and AI automation as a unified growth system. We build interconnected infrastructure specifically for coaches and educators, where your social presence drives traffic to a conversion-optimized website, supported by AI agents that automate operations — not three separate services bolted together.",
  },
  {
    question: "Do you work with coaches and educators outside the USA?",
    answer:
      "Yes. While our primary markets are the United States and Switzerland, we work with coaches and educators globally. Our systems are built to scale regardless of geography, and we have experience with multi-language content strategies and international payment processing.",
  },
  {
    question: "How much does it cost to work with Vantalo?",
    answer:
      "Every project is scoped individually based on your needs. We offer a free strategy call where we assess your situation and provide a clear proposal. No pitch, no obligation. Typical engagements range from focused single-service projects to full growth system builds, and we always start with what will deliver the highest impact for your budget.",
  },
  {
    question: "What is your process for onboarding a new client?",
    answer:
      "Onboarding starts with a free strategy call where we learn about your business, goals, and current pain points. From there, we conduct a deep audit of your existing digital presence — social accounts, website performance, and operational workflows. Within two weeks of signing, you receive a detailed roadmap with timelines, milestones, and deliverables. We assign a dedicated project lead so you always have one point of contact.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on the service. Social media typically shows meaningful traction within 60–90 days as the content system compounds. Websites launch within 4–8 weeks and start converting immediately once traffic flows. AI agents can be deployed within 2–3 weeks and deliver operational savings from day one. We set clear expectations during onboarding so there are no surprises.",
  },
  {
    question: "Do you offer ongoing support or is it project-based?",
    answer:
      "Both. Some clients engage us for a specific build — a website, an AI agent, or a social media launch — and then manage it themselves. Others work with us on a monthly retainer for ongoing content creation, optimization, and system management. Most clients start with a project and transition to ongoing support once they see results, but there is no lock-in contract requiring you to stay.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in coaches, consultants, and online educators — including life coaches, business coaches, health coaches, course creators, bootcamp operators, and membership site founders. Our systems are purpose-built for high-trust, expertise-driven businesses where content, credibility, and conversion funnels matter more than generic ad spend.",
  },
  {
    question: "Can you work with my existing website or do I need a new one?",
    answer:
      "We always assess what you have before recommending a rebuild. If your current site is on a modern framework, loads quickly, and has decent structure, we can optimize it for conversions — adding better CTAs, improving SEO, and integrating AI features. If it is a slow template site that is not converting, a rebuild is usually more cost-effective than patching. We give you an honest recommendation during the strategy call.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track metrics that directly tie to business outcomes, not vanity numbers. For social media, that means qualified leads generated and discovery calls booked — not just follower counts. For websites, we track conversion rates, time on page, and booking completions. For AI agents, we measure response accuracy, tickets deflected, and hours saved. Every client gets a monthly report with these metrics and clear analysis.",
  },
  {
    question: "What makes your AI automation different from tools like Zapier?",
    answer:
      "Zapier connects tools with if-then rules — it is useful but limited. Our AI agents understand context, make decisions, and handle nuanced conversations. A Zapier automation can send a follow-up email when someone fills out a form. Our AI agent can have a full conversation with a prospect, qualify them based on your criteria, answer their specific questions using your knowledge base, and book a call — all without human intervention. It is the difference between a flowchart and an intelligent assistant.",
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Vantalo's AI-powered social media management, web development, and automation services for coaches and educators.",
  alternates: { canonical: "https://vantalo.in/faq" },
};

export default function FAQPage() {
  const faqSchema = createFaqSchema(faqs);
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "FAQ", url: "https://vantalo.in/faq" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-24 pb-12">
        <FAQ />
        <BookCall />
      </div>
    </>
  );
}
