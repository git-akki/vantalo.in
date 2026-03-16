"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { Bot, CheckCircle2, Clock, Workflow, Brain } from "lucide-react";
import BookCall from "@/components/BookCall";
import Link from "next/link";

export default function AIAutomationContent() {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero */}
      <section className="container mb-24">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
              <Bot className="w-3.5 h-3.5 mr-2" />
              AI Automation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI Automation Agents for Coaching Businesses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              We build and deploy custom AI agents that handle lead qualification, appointment booking, client onboarding, and workflow automation 24/7. These are not generic chatbots — they are purpose-built automation systems trained on your specific coaching methodology, pricing, and client journey. Scale your coaching business without adding headcount, burning out, or letting leads slip through the cracks while you sleep.
            </p>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>
          </motion.div>
        </motion.div>
      </section>

      {/* What Types of AI Agents Can You Build? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            What Types of AI Agents Can You Build for Coaches?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AI agents for coaching businesses fall into three broad categories: client-facing agents that interact with leads and students, operational agents that automate internal workflows, and intelligence agents that analyze data and surface insights. Most of our coaching clients start with one or two agents and expand as they see ROI.
            </p>
            <p>
              Client-facing agents are the most immediately impactful. These include lead qualification bots that engage website visitors in real time, answer questions about your programs, assess whether the prospect is a good fit, and book discovery calls directly on your calendar. They also include student support agents that answer common questions about course access, assignments, scheduling, and program logistics — freeing you and your team from repetitive support tasks.
            </p>
            <p>
              Operational agents work behind the scenes. They connect your CRM, email platform, calendar, payment processor, and project management tools into automated workflows. When a new lead fills out a form, the agent can automatically score the lead, add them to the right email sequence, notify your team, and create a follow-up task — all without anyone touching a button. McKinsey estimates that AI automation can reduce operational costs by 20-30% while improving response times by 80%.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Agent Types Cards */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants}>
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-12">AI Agents We Build for Coaches</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "24/7 Lead Qualification", desc: "AI agents that engage website visitors, qualify leads based on your specific criteria, and book discovery calls on your calendar — even while you sleep. These agents understand your ideal client profile, ask the right qualifying questions, handle objections intelligently, and seamlessly hand off qualified leads to your booking system. They respond in under 3 seconds, ensuring no visitor leaves your site without engagement." },
              { icon: Workflow, title: "Workflow Automation", desc: "Connect your CRM, email, calendar, and project tools into automated workflows. New lead → qualified → booked → onboarded, completely hands-free. We build these using platforms like Make, Zapier, and custom API integrations depending on your tool stack. Each workflow is designed with error handling, retry logic, and notification alerts so nothing falls through the cracks even when third-party services have downtime." },
              { icon: Brain, title: "Custom Knowledge Bases", desc: "AI trained on your specific coaching methodology, course content, FAQ documents, and business data. It answers client questions accurately, in your voice and tone. Unlike generic AI chatbots, these knowledge base agents understand the nuances of your programs, can reference specific modules or lessons, and provide contextual answers that reflect your expertise. They improve over time as we feed them more of your content and refine their responses based on real conversations." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How Do AI Automation Agents Actually Work? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            How Do AI Automation Agents Actually Work?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              At the simplest level, an AI automation agent is a software system that takes a trigger (like a new form submission, a website visit, or a scheduled time), processes it using predefined logic and AI models, and executes one or more actions (like sending an email, updating a database, or booking an appointment). The &quot;AI&quot; part comes from the agent&apos;s ability to understand natural language, make decisions based on context, and handle edge cases that would break a simple rule-based automation.
            </p>
            <p>
              For example, a lead qualification agent works like this: a visitor lands on your website and starts a conversation via a chat widget. The agent greets them, asks about their goals, budget, and timeline, and evaluates their responses against your ideal client criteria. If the lead is qualified, the agent checks your calendar for available slots, suggests times, and books the call — all within a single conversation that takes 2-3 minutes. If the lead is not qualified, the agent politely directs them to your free resources or lower-tier programs.
            </p>
            <p>
              Behind the scenes, we use a combination of large language models for natural language understanding, vector databases for knowledge retrieval, and workflow automation platforms for executing actions across your tool stack. The entire system is designed to be reliable, fast, and easy for you to monitor through a simple dashboard that shows conversation logs, qualification rates, and booking metrics.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Common Automations for Coaches */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            What Are the Most Common Automations for Coaches?
          </motion.h2>
          <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Here are the specific automations our coaching clients request most frequently. Each of these can be built as a standalone system or combined into a comprehensive automation suite.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Lead Qualification & Booking", desc: "AI agent on your website that qualifies visitors and books discovery calls automatically based on your criteria." },
              { title: "Email Sequence Triggers", desc: "Automated email nurture sequences triggered by specific actions like downloading a lead magnet, attending a webinar, or abandoning a checkout." },
              { title: "Client Onboarding Flows", desc: "Automated welcome sequences that send contracts, collect intake forms, grant course access, and schedule kickoff calls when a new client pays." },
              { title: "Appointment Reminders & Follow-ups", desc: "SMS and email reminders before calls, plus automated follow-up messages after sessions with action items and next steps." },
              { title: "Course Progress Tracking", desc: "Automated notifications when students complete modules, fall behind, or earn certificates, with personalized nudge messages to improve completion rates." },
              { title: "Review & Testimonial Collection", desc: "Timed requests for testimonials sent at peak satisfaction moments, with automated follow-ups and easy submission workflows." },
              { title: "Invoice & Payment Automation", desc: "Automatic invoice generation, payment reminders, failed payment recovery sequences, and revenue reporting dashboards." },
              { title: "Social Media Lead Capture", desc: "DM automation on Instagram and Facebook that responds to comments, qualifies leads, and funnels them to your booking page." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ROI Section */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            What ROI Can Coaches Expect from AI Automation?
          </motion.h2>
          <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The return on investment from AI automation comes from three areas: time saved, leads captured, and operational costs reduced. Here are the typical metrics we see across our coaching clients.
          </motion.p>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="p-4 text-sm font-bold text-foreground">Metric</th>
                  <th className="p-4 text-sm font-bold text-foreground">Before Automation</th>
                  <th className="p-4 text-sm font-bold text-foreground">After Automation</th>
                </tr>
              </thead>
              <tbody className="text-sm text-muted-foreground">
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Lead Response Time</td>
                  <td className="p-4">4-24 hours</td>
                  <td className="p-4 text-emerald-500 font-medium">Under 3 seconds</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Admin Hours per Week</td>
                  <td className="p-4">10-15 hours</td>
                  <td className="p-4 text-emerald-500 font-medium">2-4 hours</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Lead-to-Call Rate</td>
                  <td className="p-4">15-25%</td>
                  <td className="p-4 text-emerald-500 font-medium">40-60%</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">After-Hours Lead Capture</td>
                  <td className="p-4">0% (lost)</td>
                  <td className="p-4 text-emerald-500 font-medium">100% captured</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="bg-secondary/5 py-24 border-y border-border/50 mb-24">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">Case Studies</Badge>
            <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-4">Automation Systems We&apos;ve Built</motion.h2>
            <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Each of these systems was built to solve a specific operational bottleneck for our clients. They run 24/7 with minimal maintenance and have collectively saved hundreds of hours of manual work.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Salon Booking System", desc: "Automated appointment booking with real-time availability, dynamic pricing display, confirmation reminders, and no-show follow-up sequences. Reduced booking-related phone calls by 85% and eliminated double-booking errors entirely.", link: "/work/salon-appointment-system" },
                { title: "Order Fulfillment", desc: "End-to-end automation connecting Shopify orders to inventory tracking, shipping label generation, and customer status update emails. Processing time dropped from 15 minutes per order to under 30 seconds with zero manual intervention.", link: "/work/order-fulfillment-system" },
                { title: "AI Subtitle Translator", desc: "Batch AI translation tool converting course content into 9 languages with context-aware translations that understand coaching terminology. Enabled our client to expand into international markets without hiring translators, reducing translation costs by over 90%.", link: "/work/ai-subtitle-translator" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants}>
                  <Link href={item.link} className="block bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors h-full">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <span className="text-primary text-sm font-medium">View case study →</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Attribution */}
      <section className="container mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp as unknown as unknown as Variants}
          className="border-t border-border/30 pt-8"
        >
          <p className="text-sm text-muted-foreground">
            Author: Akash Yadav, Founder of Vantalo
          </p>
        </motion.div>
      </section>

      <BookCall />
    </div>
  );
}
