"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { Share2, Globe, Bot, CheckCircle2, ArrowRight } from "lucide-react";
import BookCall from "@/components/BookCall";
import Link from "next/link";

export default function CoachesContent() {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      <section className="container mb-24">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
              For Coaches & Consultants
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered Growth Systems for Coaches & Consultants
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Stop juggling social media, a website that doesn&apos;t convert, and manual operations that eat your coaching time. We build a unified growth system — social media that fills your pipeline, a website that converts, and AI that handles the rest.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most coaches enter the industry because they are exceptional at transformation — helping clients lose weight, land promotions, build businesses, or find clarity. But the business side hits hard. You spend hours scheduling posts, wrestling with Canva, responding to DMs that go nowhere, and manually following up with leads who ghost after the first message. Meanwhile, the actual coaching — the work that lights you up — gets squeezed into whatever time is left.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scaling a 1:1 coaching practice is structurally difficult. There are only so many hours in a day, and every hour spent on marketing, admin, or tech troubleshooting is an hour you cannot spend with clients. The coaches who break through this ceiling are the ones who build systems — not the ones who hustle harder. That is exactly what Vantalo delivers: a growth infrastructure that runs whether you are coaching, sleeping, or on vacation.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              The International Coaching Federation reports the coaching industry is worth $4.56 billion globally, with digital presence being the #1 client acquisition channel.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Do Coaches Struggle with Marketing? */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Do Coaches Struggle with Marketing?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">The agency loop.</strong> You hire a social media agency that charges $2,000–$5,000 per month, posts generic content, and delivers vanity metrics. Three months in, you have more followers but zero new clients. You cancel, try another agency, and repeat the cycle. The problem is not the posting — it is that these agencies do not understand your business model. Coaching is a high-trust, relationship-driven sale. Content needs to demonstrate expertise and build emotional connection, not just chase likes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">DIY fatigue.</strong> You try to do it yourself. You take a course on Instagram Reels, another on LinkedIn thought leadership, maybe a webinar on email marketing. Now you have fifteen browser tabs open, three half-finished funnels, and a content calendar you abandoned two weeks ago. The knowledge is not the problem — the execution is. You are one person trying to do the work of an entire marketing team while also running sessions, managing clients, and developing new programs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Tool overload.</strong> Calendly for scheduling. ConvertKit for email. WordPress for your website. Notion for operations. Zapier to connect them. Each tool solves one problem but creates two more — data silos, broken integrations, monthly fees that stack up. What you need is not more tools. You need a unified system where social media feeds your website, your website books calls, and AI handles everything in between.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Three Services for Coaches */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="space-y-16">
          {[
            {
              icon: Share2, color: "blue", title: "Social Media That Fills Your Pipeline",
              desc: "We build your authority on Instagram, LinkedIn, and YouTube using AI-driven content strategy. No random posting — a systematic approach that turns your expertise into organic reach and qualified leads. Our process starts with a deep audit of your coaching niche, ideal client profile, and competitive landscape. From there, we develop pillar content themes that position you as the go-to expert — not just another coach posting motivational quotes. Every piece of content is designed to educate, build trust, and drive action, whether that is a DM conversation, a lead magnet download, or a direct booking.",
              features: ["AI-optimized content calendar tailored to your coaching niche", "Short-form video strategy (Reels, Shorts, TikTok)", "Community building and engagement systems", "Lead generation from organic content — no ad spend required"],
              link: "/services/social-media",
            },
            {
              icon: Globe, color: "indigo", title: "A Website That Converts Visitors to Clients",
              desc: "Your coaching website should be a sales funnel, not a brochure. We build conversion-focused sites that guide visitors from 'I'm interested' to 'I've booked a call' with zero friction. Most coaching websites fail because they are designed like portfolios — they list credentials and services but give visitors no clear path forward. We architect every page around a single goal: getting qualified prospects to take the next step. That means strategic CTA placement, social proof sections, testimonial integration, fast load times, and SEO architecture that brings in organic traffic from Google for searches like 'executive coach near me' or 'life coach for career transitions.'",
              features: ["Conversion-optimized landing pages with clear booking CTAs", "SEO-first architecture targeting coaching-related keywords", "Calendly or custom booking integration", "Sub-2-second load times on mobile and desktop"],
              link: "/services/web-development",
            },
            {
              icon: Bot, color: "purple", title: "AI Agents That Scale Your Operations",
              desc: "Deploy AI agents that qualify leads, book discovery calls, onboard new clients, and answer FAQs — 24/7. Scale your coaching practice without hiring an assistant. Imagine a prospect visits your website at 11 PM, asks a question about your program, and gets an intelligent, personalized response that addresses their specific situation — then books a call for the next morning. That is what AI agents do. They are trained on your methodology, your pricing, your FAQ, and your ideal client criteria so they respond exactly the way you would, just faster and without needing sleep.",
              features: ["24/7 lead qualification that filters out tire-kickers", "Automated discovery call booking and reminders", "Client onboarding flows with intake forms and welcome sequences", "Custom knowledge base AI trained on your coaching methodology"],
              link: "/services/ai-automation",
            },
          ].map((service, i) => (
            <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center mb-6`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-500`} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What Results Have Coaches Achieved with Vantalo? */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Results Have Coaches Achieved with Vantalo?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our coaching clients have seen measurable growth across every channel. One health and wellness coach grew from 800 to 15,000 Instagram followers in four months using our AI content strategy — and more importantly, booked 34 discovery calls directly from organic content in that period. A business coach working with us saw website conversion rates jump from 1.2% to 6.8% after we rebuilt their site with proper funnel architecture and integrated an AI lead qualification agent.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              On the operations side, coaches using our AI agents report saving 10–15 hours per week on admin tasks like scheduling, follow-ups, and FAQ responses. That is time reinvested into client sessions, program development, or simply having a life outside the business. The compounding effect is significant: better content brings more traffic, a better website converts more of that traffic, and AI handles the operational load so you can focus on delivery.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Social proof */}
      <section className="bg-secondary/5 py-16 border-y border-border/50 mb-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5M+", label: "Views generated for coaching clients" },
              { value: "48K+", label: "Followers grown organically" },
              { value: "12+", label: "Growth systems built for coaches" },
              { value: "24/7", label: "AI operations running non-stop" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <blockquote className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-6">
              &ldquo;Before Vantalo, I was spending more time on marketing than coaching. Now my content runs on a system, my website actually books calls, and the AI handles inquiries while I sleep. I doubled my client base in three months without doubling my workload.&rdquo;
            </blockquote>
            <p className="text-muted-foreground">— Health & Wellness Coach, Vantalo Client</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who Is This For? */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who Is This For?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our growth systems are built for coaches and consultants who are serious about scaling. If you have a proven offer and need the infrastructure to reach more people, this is for you.
            </p>
            <ul className="space-y-3">
              {[
                "Life coaches looking to build a consistent client pipeline beyond referrals",
                "Business coaches and consultants who want to establish thought leadership online",
                "Health and wellness coaches scaling from 1:1 to group programs or courses",
                "Executive coaches targeting enterprise clients through LinkedIn and SEO",
                "Career coaches building a personal brand to attract high-ticket clients",
                "Relationship and mindset coaches who need systems to handle growing demand",
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

      {/* Coach-Specific FAQ */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Common Questions from Coaches</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How long before I see results from the social media strategy?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most coaching clients see meaningful traction within the first 60–90 days. The first month focuses on establishing your content system and publishing cadence. By month two, the algorithm starts rewarding consistency and the AI optimization kicks in. By month three, you should see a steady flow of inbound inquiries from organic content. Long-term, the compounding effect means results accelerate over time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do I need to create all the content myself?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. We handle strategy, scripting, editing, and publishing. Your involvement is primarily in recording short videos or voice notes that capture your expertise — typically 30–60 minutes per week. We turn that raw material into a full month of optimized content across platforms. The less friction for you, the more sustainable the system.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can you work with my existing website or do I need a rebuild?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It depends on what you have. If your current site is built on a modern framework and loads quickly, we can optimize it for conversions without a full rebuild. If it is a slow WordPress template or a DIY Wix site that is not converting, a rebuild is usually more cost-effective than patching. We assess this during the free strategy call and give you an honest recommendation.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Citation */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp as unknown as unknown as Variants} className="max-w-3xl">
          <div className="bg-card border border-border/50 rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Source:</strong> International Coaching Federation, <em>2023 ICF Global Coaching Study</em>.{" "}
              <a href="https://coachingfederation.org/research/global-coaching-study" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                coachingfederation.org/research/global-coaching-study
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
