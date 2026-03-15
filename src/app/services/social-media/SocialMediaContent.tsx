"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { Share2, CheckCircle2, TrendingUp, Users, BarChart3 } from "lucide-react";
import BookCall from "@/components/BookCall";
import Link from "next/link";

export default function SocialMediaContent() {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp as unknown as unknown as Variants}>
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
              <Share2 className="w-3.5 h-3.5 mr-2" />
              Social Media Management
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI-Powered Social Media Management for Coaches & Educators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              We use AI to build social media infrastructure that turns your coaching expertise into organic reach, engaged communities, and a steady pipeline of qualified leads. Our approach combines machine learning content analysis, algorithmic trend detection, and data-driven publishing schedules to ensure every piece of content you put out works harder than the last. No vanity metrics — just systems that drive real revenue for your coaching business.
            </p>
            <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="grid grid-cols-3 gap-6 py-8 border-y border-border/30">
            <div>
              <div className="text-3xl font-bold text-foreground">5M+</div>
              <div className="text-sm text-muted-foreground">Views in 3 months</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">48K+</div>
              <div className="text-sm text-muted-foreground">Organic followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">1.2M</div>
              <div className="text-sm text-muted-foreground">Monthly reach</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Do Coaches Need AI-Powered Social Media? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            Why Do Coaches Need AI-Powered Social Media?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Most coaches know they need a social media presence, but few have the time or expertise to execute consistently. The average coaching professional spends 6-10 hours per week creating content, managing comments, and trying to stay on top of platform algorithm changes. That is time taken directly away from coaching clients, developing programs, and growing revenue. The result is inconsistent posting, generic content, and a social presence that fails to convert followers into paying clients.
            </p>
            <p>
              AI-powered social media management solves this by automating the research, strategy, and optimization layers of content creation. Instead of guessing what will perform well, our AI systems analyze thousands of data points — trending topics in your niche, competitor performance metrics, optimal posting times, and audience engagement patterns — to build a content strategy that is both data-driven and authentic to your voice.
            </p>
            <p>
              According to Sprout Social&apos;s 2025 report, 73% of consumers say a brand&apos;s social media presence influences their purchase decisions. For coaches, this means your Instagram, YouTube, or LinkedIn profile is often the first touchpoint a potential client has with your brand. If that first impression is inconsistent, low-quality, or infrequent, you are losing clients before they ever reach your website.
            </p>
            <p>
              The coaches we work with typically see a 3-5x increase in engagement within the first 60 days, not because we use tricks or hacks, but because we replace guesswork with systematic, AI-informed execution. Every post has a purpose, every caption is optimized, and every piece of content moves your audience one step closer to booking a call.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What's Included */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-12">
            What&apos;s Included in Our Social Media Service?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Strategic Narrative",
                desc: "AI-driven content strategy that positions you as the authority in your coaching niche. We craft narratives that resonate with your ideal clients by analyzing what top-performing accounts in your space are doing, identifying content gaps, and building a unique positioning framework. This includes monthly content pillars, audience persona mapping, and competitive analysis reports that keep your messaging sharp and differentiated.",
              },
              {
                icon: BarChart3,
                title: "High-Velocity Content",
                desc: "Short-form video and text content optimized for algorithmic reach across Instagram Reels, YouTube Shorts, LinkedIn, and TikTok. We use data-driven editing techniques including 3-second hook optimization, retention graph analysis, and A/B format testing to maximize engagement. Our AI tools analyze which thumbnails, captions, and content structures drive the most saves, shares, and profile visits — the metrics that actually matter for lead generation.",
              },
              {
                icon: Users,
                title: "Community Architecture",
                desc: "Building engaged communities that become your referral engine. We turn passive followers into active advocates for your coaching brand through strategic engagement sequences, DM automation funnels, and community nurture campaigns. This includes comment response strategies, story engagement frameworks, and audience segmentation to ensure your most engaged followers receive personalized touchpoints that move them toward becoming paying clients.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp as unknown as unknown as Variants}
                className="bg-card border border-border/50 p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Results Can Coaches Expect? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            What Results Can Coaches Expect from Social Media?
          </motion.h2>
          <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Results vary depending on your niche, existing audience, and content consistency, but here is a general timeline based on the coaching clients we have worked with over the past two years.
          </motion.p>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="p-4 text-sm font-bold text-foreground">Timeline</th>
                  <th className="p-4 text-sm font-bold text-foreground">What Happens</th>
                  <th className="p-4 text-sm font-bold text-foreground">Typical Results</th>
                </tr>
              </thead>
              <tbody className="text-sm text-muted-foreground">
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Month 1</td>
                  <td className="p-4">Audit, strategy, content system setup</td>
                  <td className="p-4">Baseline established, first content published</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Month 2-3</td>
                  <td className="p-4">Consistent publishing, format testing, optimization</td>
                  <td className="p-4">2-3x engagement increase, follower growth begins</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium text-foreground">Month 4-6</td>
                  <td className="p-4">Scaling winning formats, community building</td>
                  <td className="p-4">5-10x reach, inbound DMs and leads increasing</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Month 6-12</td>
                  <td className="p-4">Compounding growth, authority positioning</td>
                  <td className="p-4">Established authority, consistent lead pipeline</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* How Is AI Used in Social Media Management? */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-8">
            How Is AI Used in Social Media Management?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              When we say &quot;AI-powered,&quot; we mean it in a specific, practical sense — not as a buzzword. Our AI systems operate at three levels of the content pipeline. First, at the research level, we use natural language processing to scan trending topics, hashtags, and competitor content across platforms to identify what your target audience is engaging with right now. This replaces hours of manual research with real-time data.
            </p>
            <p>
              Second, at the creation level, AI assists with caption optimization, hook generation, and content repurposing. A single long-form video can be automatically broken into multiple short-form clips, with AI identifying the most engaging segments based on speech patterns, visual movement, and topic relevance. Your voice and expertise remain authentic — AI simply amplifies and distributes it more effectively.
            </p>
            <p>
              Third, at the analytics level, our systems track performance metrics far beyond likes and followers. We monitor save rates, share ratios, profile visit conversions, and audience retention curves. These insights feed back into the strategy, creating a continuous improvement loop that gets smarter the longer we work together.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Study Highlight */}
      <section className="bg-secondary/5 py-24 border-y border-border/50 mb-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer as unknown as unknown as Variants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp as unknown as unknown as Variants}>
              <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
                Case Study
              </Badge>
              <h2 className="text-3xl font-bold mb-4">5M+ Views in 3 Months</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Timeline by Harsh came to us wanting to build a personal brand from scratch. He had zero social media presence, no existing audience, and no content creation experience. Our AI-driven short-form content strategy achieved over 5 million views in just 3 months, launching a viral personal brand from nothing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The key was our systematic approach: we identified underserved content angles in his niche, developed a signature content format that was highly shareable, and used retention graph analysis to optimize every video for maximum watch time. By month two, the algorithm was actively pushing his content to new audiences, creating a compounding growth effect.
              </p>
              <ul className="space-y-3">
                {["Viral short-form content strategy", "Data-driven format optimization", "3-second hook methodology", "Retention graph analysis", "Algorithmic trend surfacing", "Community engagement automation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/work/timeline-by-harsh" className="inline-block mt-6 text-primary font-medium hover:underline">
                Read full case study →
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp as unknown as unknown as Variants} className="bg-card border border-border/50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Views Growth</div>
                    <div className="text-4xl font-bold">5M+</div>
                  </div>
                  <div className="text-sm text-emerald-500 font-bold">in 3 months</div>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[10, 25, 50, 80, 95, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }}>
                      <div className="w-full bg-primary rounded-t" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl font-bold mb-12">
            How We Build Your Social Media Growth System
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit & Strategy", desc: "We analyze your niche, audience demographics, competitor content, and platform-specific opportunities to build a data-driven content strategy. This includes a full audit of your existing content, audience sentiment analysis, and identification of your unique positioning angles." },
              { step: "02", title: "Content System", desc: "We create a complete content engine — reusable templates, proven formats, editorial calendars, and batch production workflows optimized for your coaching brand. This system is designed so content creation takes hours, not days, while maintaining quality and authenticity." },
              { step: "03", title: "Execute & Optimize", desc: "We publish consistently, run A/B tests on hooks and formats, and iterate using AI analytics to continuously improve performance. Every week, we review retention graphs, engagement rates, and conversion metrics to refine the strategy in real time." },
              { step: "04", title: "Scale & Compound", desc: "As the system matures, we double down on winning formats, expand to additional platforms, and build compounding organic reach. The goal is to create a self-reinforcing growth engine where each piece of content amplifies the next." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp as unknown as unknown as Variants} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-2">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Author Attribution */}
      <section className="container mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
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
