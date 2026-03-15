"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Share2, Globe, Bot, CheckCircle2, ArrowRight } from "lucide-react";
import BookCall from "@/components/BookCall";
import Link from "next/link";

export default function EducatorsContent() {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      <section className="container mb-24">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
              <GraduationCap className="w-3.5 h-3.5 mr-2" />
              For Educators & Course Creators
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Growth Infrastructure for Online Educators & Course Creators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              You create world-class educational content. We build the systems that get it in front of the right students and scale your operations. Social media presence, a course platform that converts, and AI that handles the admin.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The online education space has exploded — and so has the competition. There are now millions of courses on Udemy, Teachable, and Skillshare, which means the barrier is no longer creating content. It is getting discovered. Course creators face three compounding challenges: intense competition for student attention, platform lock-in that limits your branding and margins, and student acquisition costs that eat into profitability. If you are spending more on ads than you are earning from enrollments, the math does not work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What separates successful education businesses from struggling ones is infrastructure. The creators who win are not necessarily the best teachers — they are the ones with the best systems for reaching students, converting them, and retaining them. That is the gap Vantalo fills. We build the growth engine so you can focus on what you do best: teaching.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              According to Research and Markets, the global online education market is projected to reach $350 billion by 2025 — making now the critical time to invest in growth infrastructure.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Do Course Creators Need a Custom Growth System? */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Do Course Creators Need a Custom Growth System?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Marketplace platforms like Udemy and Coursera give you distribution, but they own the student relationship. You cannot email your students directly, you cannot set your own prices, and you are competing with thousands of similar courses in the same search results. Building on someone else&apos;s platform means building someone else&apos;s business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              On the other hand, going fully independent with your own platform means you are responsible for everything — traffic, conversion, payments, student support, and retention. Most course creators are not marketers, developers, or operations managers. They are educators. And the gap between &ldquo;I built a great course&rdquo; and &ldquo;I have a profitable education business&rdquo; is almost entirely an infrastructure problem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A custom growth system solves this by giving you the best of both worlds: full ownership of your platform and student data, combined with automated systems for acquisition, conversion, and support. Instead of stitching together eight different tools and hoping they work, you get a single integrated stack built specifically for education businesses.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants}>
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-12">Built for the Education Business Model</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Share2,
                title: "Student Acquisition via Social",
                desc: "AI-powered social media that turns your expertise into viral content. Build an audience of prospective students who are pre-sold on your teaching before they ever see a landing page. We develop platform-specific strategies — educational Reels for Instagram, long-form thought leadership on LinkedIn, tutorial clips on YouTube Shorts — all optimized by AI to maximize reach within your niche. Every post is engineered to demonstrate your teaching ability and drive traffic to your enrollment funnel.",
                link: "/services/social-media",
              },
              {
                icon: Globe,
                title: "Course Platforms That Convert",
                desc: "Custom LMS builds with LearnDash, secure Vimeo streaming, instructor economies, and enrollment funnels. Your platform should sell as well as it teaches. We build course websites with proper enrollment funnels — landing pages that address objections, pricing pages with social proof, checkout flows optimized for completion rates, and student dashboards that reduce churn. Every element is designed to move visitors from browsing to buying, with conversion tracking at every step so you know exactly what is working.",
                link: "/services/web-development",
              },
              {
                icon: Bot,
                title: "AI-Powered Student Support",
                desc: "Deploy AI agents trained on your course content to handle student questions, enrollment inquiries, and operational tasks 24/7. Reduce support load by 80%. Our AI agents can answer questions about course content, guide students through technical issues, handle refund inquiries, send progress reminders, and even re-engage students who have gone inactive. They are trained specifically on your curriculum and policies, so responses are accurate and on-brand — not generic chatbot answers.",
                link: "/services/ai-automation",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 p-8 rounded-2xl">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <Link href={item.link} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Makes Education Businesses Different? */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Makes Education Businesses Different?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Generic marketing agencies treat education businesses like e-commerce stores — run ads, optimize for purchases, and hope the numbers work out. But education is fundamentally different. The customer journey is longer because students need to trust your expertise before committing. The product is intangible, which means your content and social proof have to do the selling. And retention matters as much as acquisition, because refund rates and completion rates directly impact your reputation and revenue.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That is why we specialize. We understand enrollment funnels, student lifecycle marketing, LMS architecture, content drip strategies, and the specific metrics that matter for education businesses — not just traffic and clicks, but enrollment rates, completion rates, student satisfaction, and lifetime value. When your growth partner understands your business model, every decision is better.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study */}
      <section className="bg-secondary/5 py-24 border-y border-border/50 mb-24">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">Case Study</Badge>
            <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-4">Hair Mastery: Education Platform + Social Growth</motion.h2>
            <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              We built a complete growth system for Hair Mastery — a custom WordPress LMS with instructor economy, secure Vimeo streaming, and role-based access. Combined with an organic social strategy that grew them from 0 to 48K+ followers and 1.2M monthly reach.
            </motion.p>
            <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              The platform includes multi-instructor support with revenue sharing, progress tracking, certificate generation, and a gated content system that protects premium material while offering free previews to drive conversions. On the social side, our AI-optimized content strategy focused on short-form tutorials and transformation videos that consistently outperformed industry benchmarks for engagement. The result: a self-sustaining education business where organic social drives enrollment and the platform handles delivery and retention automatically.
            </motion.p>
            <motion.div variants={fadeInUp as unknown as unknown as Variants} className="grid sm:grid-cols-4 gap-6 mb-6">
              {[
                { value: "48K+", label: "Organic followers" },
                { value: "1.2M", label: "Monthly reach" },
                { value: "+2300%", label: "Growth rate" },
                { value: "80%", label: "Support load reduced via AI" },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            <div className="flex gap-4">
              <Link href="/work/hair-mastery" className="text-primary font-medium hover:underline">Platform case study →</Link>
              <Link href="/work/hair-mastery-social" className="text-primary font-medium hover:underline">Social case study →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who Is This For?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work with education businesses at every stage — from solo creators launching their first course to established programs looking to scale. If you teach online and want more students with less manual work, this is for you.
            </p>
            <ul className="space-y-3">
              {[
                "Course creators building or scaling their own platform outside of marketplaces",
                "Coaching program operators who need enrollment funnels and student management systems",
                "Bootcamp founders looking for a custom LMS with cohort-based delivery",
                "Workshop leaders and event educators who want to monetize recorded content",
                "University extension programs and continuing education departments going digital",
                "Membership site operators who need recurring billing, gated content, and community features",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Educator-Specific FAQ */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Common Questions from Educators</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can you migrate my courses from Teachable or Udemy to a custom platform?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. We handle full migrations including video content, student data, progress records, and enrollment history. The transition is planned to minimize disruption — we typically run both platforms in parallel during migration so no student loses access. Most migrations are completed within 2–4 weeks depending on the volume of content and complexity of your existing setup.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How does the AI student support actually work?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We train AI agents on your course content, syllabus, FAQ documents, and policies. When a student asks a question — whether it is about lesson content, technical issues, or billing — the AI provides an accurate, context-aware response. For questions it cannot answer, it escalates to you or your team with full context so the handoff is seamless. Most education clients see a 70–80% reduction in direct support tickets.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What if I already have a social media presence — do we start from scratch?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not at all. We audit your existing content, audience, and performance data to identify what is working and what is not. From there, we build on your strengths while filling the gaps. If your YouTube is strong but Instagram is underperforming, we focus resources accordingly. The goal is always to amplify what you have, not tear it down and rebuild unnecessarily.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Citation */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInUp as unknown as unknown as Variants} className="max-w-3xl">
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Source:</strong> Research and Markets, <em>Global Online Education Market Report, 2025</em>.{" "}
              <a href="https://www.researchandmarkets.com/reports/4986759/online-education-market-global-industry" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                researchandmarkets.com
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Attribution */}
      <section className="container mb-16">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Written by Akash Yadav, Founder of Vantalo</p>
          <p className="text-sm text-muted-foreground mt-1">Last updated: March 2026</p>
        </div>
      </section>

      <BookCall />
    </div>
  );
}
