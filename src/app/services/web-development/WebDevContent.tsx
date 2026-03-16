"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { Globe, CheckCircle2, Zap, Layout, Code } from "lucide-react";
import BookCall from "@/components/BookCall";
import Link from "next/link";

export default function WebDevContent() {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero */}
      <section className="container mb-24">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer as unknown as unknown as Variants} className="max-w-3xl">
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
              <Globe className="w-3.5 h-3.5 mr-2" />
              Web Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Conversion-Focused Web Development for Coaches & Educators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              We build high-performance websites using Next.js and React that turn your coaching website from a digital brochure into a client acquisition machine. Every page is engineered to convert visitors into booked calls, with performance optimization, SEO architecture, and conversion funnel design baked in from the start. Whether you need a landing page, a full course platform, or a complex LMS, we build it to load fast, rank well, and drive revenue.
            </p>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Do Coaches Need a Custom Website? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            Why Do Coaches Need a Custom Website?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Template website builders like Wix, Squarespace, and generic WordPress themes are designed for general use. They look decent, but they are not built to convert coaching prospects into paying clients. A coaching website has a very specific job: it needs to establish authority, communicate your unique methodology, overcome objections, and move the visitor toward booking a discovery call or purchasing a program — all within a few minutes of landing on the page.
            </p>
            <p>
              According to Google, 53% of mobile users abandon sites that take longer than 3 seconds to load. Template builders are notorious for bloated code, slow load times, and poor Core Web Vitals scores. This directly impacts your Google rankings and your conversion rates. A custom-built site using modern frameworks like Next.js loads in under 2 seconds, scores 90+ on Lighthouse, and provides the kind of experience that keeps visitors engaged.
            </p>
            <p>
              Beyond performance, a custom website gives you full control over your conversion funnel. Every element — from the hero section to the testimonials placement to the CTA positioning — is designed based on conversion data, not template constraints. We have seen coaching clients increase their website conversion rates by 2-4x simply by moving from a template to a purpose-built site.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section className="container mb-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants}>
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-12">What We Build for Coaches</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Funnel Architecture", desc: "Logical page flows that guide visitors from awareness to booking. Every click moves them closer to becoming a client. We map out multi-step funnels with dedicated landing pages, lead magnets, thank-you sequences, and booking integrations that create a seamless journey from first visit to first call. Each funnel is tracked end-to-end so you know exactly where leads drop off and where to optimize." },
              { icon: Zap, title: "Performance-First", desc: "Sub-2-second load times with Next.js SSR and static generation. Fast sites rank higher on Google and convert better — we optimize for both. Our builds include image optimization, lazy loading, code splitting, CDN distribution, and Core Web Vitals monitoring. Every site we deliver scores 90+ on Google Lighthouse across performance, accessibility, and SEO metrics." },
              { icon: Code, title: "LMS & Course Platforms", desc: "Custom learning platforms with LearnDash, role-based access, instructor economies, and secure content delivery. We build platforms that handle video hosting with Vimeo or Bunny.net, progress tracking, certificates, quizzes, community features, and payment integrations. Whether you have 10 students or 10,000, the platform scales without compromising the learning experience." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Tech Stack Do We Use and Why? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            What Tech Stack Do We Use and Why?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              We choose our technology based on what delivers the best results for your specific needs, not based on trends. For most coaching websites and landing pages, we use Next.js with React — the same framework used by companies like Netflix, Nike, and Notion. Next.js provides server-side rendering for fast initial loads, static site generation for pages that rarely change, and a component architecture that makes the site easy to maintain and extend over time.
            </p>
            <p>
              For coaches who need content management flexibility — the ability to update blog posts, testimonials, or program details without touching code — we pair Next.js with a headless CMS like Sanity or use WordPress with a custom theme. WordPress remains the best choice for complex LMS platforms because of its mature plugin ecosystem, particularly LearnDash for course delivery and WooCommerce for payment processing.
            </p>
            <p>
              On the hosting and deployment side, we use Vercel for Next.js projects, which provides automatic deployments, edge caching, and analytics out of the box. For WordPress projects, we use managed hosting providers that offer staging environments, automatic backups, and enterprise-grade security. The result is a site that is fast, secure, and easy for you to manage without relying on a developer for every small change.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How Does a Conversion-Focused Website Work? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            How Does a Conversion-Focused Website Work?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A conversion-focused website is built around a funnel architecture. Unlike a traditional website where every page is treated equally, a conversion-focused site has a clear hierarchy: traffic pages that attract visitors through SEO and social media, engagement pages that build trust through case studies, testimonials, and methodology explanations, and conversion pages that drive a specific action like booking a call or purchasing a program.
            </p>
            <p>
              Each page is designed with a single primary objective. Your homepage establishes authority and directs visitors to the next step. Your services pages explain what you offer and handle objections. Your about page builds personal connection and trust. And your booking or sales pages are optimized purely for conversion — minimal distractions, clear value propositions, strong social proof, and a frictionless call-to-action.
            </p>
            <p>
              We also build in analytics and tracking from day one. Every button click, page scroll, and form submission is tracked so we can identify exactly where visitors drop off and continuously optimize. This data-driven approach means your website gets better over time, not just at launch.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Results */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            What Results Can Coaches Expect from a Custom Website?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="p-4 text-sm font-bold text-foreground">Metric</th>
                  <th className="p-4 text-sm font-bold text-foreground">Template Site</th>
                  <th className="p-4 text-sm font-bold text-foreground">Custom Vantalo Build</th>
                </tr>
              </thead>
              <tbody className="text-sm text-muted-foreground">
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Page Load Time</td>
                  <td className="p-4">4-8 seconds</td>
                  <td className="p-4 text-emerald-500 font-medium">&lt; 2 seconds</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Lighthouse Score</td>
                  <td className="p-4">40-65</td>
                  <td className="p-4 text-emerald-500 font-medium">90+</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Bounce Rate</td>
                  <td className="p-4">65-80%</td>
                  <td className="p-4 text-emerald-500 font-medium">30-45%</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Visitor-to-Lead Rate</td>
                  <td className="p-4">1-2%</td>
                  <td className="p-4 text-emerald-500 font-medium">4-8%</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study */}
      <section className="bg-secondary/5 py-24 border-y border-border/50 mb-24">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">Case Study</Badge>
            <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-4">Hair Mastery: Custom LMS Platform</motion.h2>
            <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              We engineered a WordPress + LearnDash platform with a custom instructor economy, automated earnings tracking, role-based access, and Vimeo streaming for a hair education company. The platform needed to support multiple instructors, each with their own course catalog, revenue sharing, and student management.
            </motion.p>
            <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              The biggest technical challenge was building a custom earnings calculation system that tracked per-course revenue, applied different commission rates for different instructors, and generated automated payout reports. We built a custom WordPress plugin that integrated directly with WooCommerce and LearnDash to handle all of this without any manual spreadsheet work. The platform now supports thousands of students and multiple instructors with full self-service capabilities.
            </motion.p>
            <motion.ul variants={staggerContainer as unknown as unknown as Variants} className="space-y-3 mb-6">
              {["Custom earnings calculation plugin", "Role-based instructor & student access", "Secure Vimeo streaming integration", "Elementor-driven frontend for rapid iteration", "Automated payout reporting system", "Multi-instructor course management"].map((item, i) => (
                <motion.li key={i} variants={fadeInUp as unknown as unknown as Variants} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />{item}
                </motion.li>
              ))}
            </motion.ul>
            <Link href="/work/hair-mastery" className="text-primary font-medium hover:underline">Read full case study →</Link>
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
