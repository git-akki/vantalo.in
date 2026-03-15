"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { Share2, Globe, Bot, Zap, CheckCircle2 } from "lucide-react";
import { SocialVisual, WebsiteVisual, AiVisual } from "@/components/ServiceVisuals";
import BookCall from "@/components/BookCall";
import RoiCalculator from "@/components/RoiCalculator";
import Link from "next/link";

export default function ServicesPageContent() {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="container mb-24 lg:mb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer as unknown as unknown as Variants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={fadeInUp as unknown as unknown as Variants}>
              <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
                <Zap className="w-3.5 h-3.5 mr-2 fill-primary/20" />
                Holistic Growth Infrastructure
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                AI Social Media, Web Development <br />
                <span className="text-muted-foreground">& Automation Services.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Stop treating social media management, web development, and AI automation as separate silos.
                We engineer them into a unified growth system specifically designed for coaches and educators that turns attention into revenue.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most agencies sell you isolated services — a social media package here, a website there, maybe some ads.
                The result? Disconnected tools that don&apos;t talk to each other and a marketing strategy held together with duct tape.
                Vantalo is different. We build all three pillars as one interconnected system where your social media drives traffic
                to a conversion-optimized website, supported by AI agents that qualify leads and automate operations 24/7.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp as unknown as unknown as Variants} className="flex flex-col sm:flex-row gap-4">
               <Link href="/services/social-media" className="px-6 py-3 rounded-full bg-secondary/10 border border-border text-foreground hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> Social Media
               </Link>
               <Link href="/services/web-development" className="px-6 py-3 rounded-full bg-secondary/10 border border-border text-foreground hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" /> Web Development
               </Link>
               <Link href="/services/ai-automation" className="px-6 py-3 rounded-full bg-secondary/10 border border-border text-foreground hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                  <Bot className="w-4 h-4" /> AI Agents
               </Link>
            </motion.div>
          </div>

          {/* Hero Visual - Abstract System */}
          <motion.div
             variants={fadeInUp as unknown as unknown as Variants}
             className="relative aspect-square lg:aspect-[4/3] bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl border border-border/50 p-8 flex items-center justify-center overflow-hidden"
          >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Central Core */}
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                 <div className="col-span-2 aspect-[2/1] bg-card border border-border/50 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <div className="text-center">
                       <h3 className="text-2xl font-bold">Revenue</h3>
                       <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Output</p>
                    </div>
                 </div>

                 <div className="aspect-square bg-card border border-border/50 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 p-4">
                    <Share2 className="w-8 h-8 text-blue-400" />
                    <span className="font-semibold text-sm">Traffic</span>
                 </div>

                 <div className="aspect-square bg-card border border-border/50 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 p-4">
                    <Globe className="w-8 h-8 text-indigo-400" />
                    <span className="font-semibold text-sm">Conversion</span>
                 </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M50 50 L20 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                 <path d="M50 50 L80 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 1: Social Media */}
      <section id="social" className="container py-24 border-t border-border/30">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
               variants={fadeInUp as unknown as unknown as Variants}
               className="order-2 lg:order-1 relative h-[350px] sm:h-[400px] lg:h-[500px] bg-secondary/5 rounded-3xl border border-border/50 overflow-hidden"
            >
               <SocialVisual />
               <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
               variants={staggerContainer as unknown as unknown as Variants}
               className="order-1 lg:order-2 space-y-8"
            >
               <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Share2 className="w-6 h-6 text-blue-500" />
               </div>

               <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl sm:text-4xl font-bold">
                  AI-Powered Social Media Management
               </motion.h2>

               <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed">
                  Most brands post content. We build social media infrastructure. <br/>
                  Our AI-driven approach treats your social presence as a media company, focusing on strategic narrative, authority building, and compounding organic reach.
               </motion.p>

               <motion.ul variants={staggerContainer as unknown as unknown as Variants} className="space-y-4 pt-4">
                  {[
                     { title: "Strategic Narrative", desc: "Positioning you as the only logical choice." },
                     { title: "High-Velocity Content", desc: "Short-form video & text that dominates feeds." },
                     { title: "Community Architecture", desc: "Turning followers into a tribe." }
                  ].map((item, i) => (
                     <motion.li key={i} variants={fadeInUp as unknown as unknown as Variants} className="flex gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground">{item.title}</h4>
                           <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                     </motion.li>
                  ))}
               </motion.ul>
            </motion.div>
         </div>
      </section>

      {/* Section 2: Website */}
      <section id="web" className="container py-24 border-t border-border/30">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
               variants={staggerContainer as unknown as unknown as Variants}
               className="space-y-8"
            >
               <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-indigo-500" />
               </div>

               <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl sm:text-4xl font-bold">
                  Conversion-Focused Web Development
               </motion.h2>

               <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed">
                  Your website isn&apos;t a brochure. It&apos;s a sales funnel. <br/>
                  We build high-performance, conversion-focused websites using Next.js and React that capture attention and guide visitors toward purchase.
               </motion.p>

               <motion.ul variants={staggerContainer as unknown as unknown as Variants} className="space-y-4 pt-4">
                  {[
                     { title: "Immersive 3D/Interactive", desc: "Retain attention with premium visuals." },
                     { title: "Funnel Architecture", desc: "Logical flows that reduce friction." },
                     { title: "Next.js Performance", desc: "Blazing fast load times for SEO dominance." }
                  ].map((item, i) => (
                     <motion.li key={i} variants={fadeInUp as unknown as unknown as Variants} className="flex gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground">{item.title}</h4>
                           <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                     </motion.li>
                  ))}
               </motion.ul>
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
               variants={fadeInUp as unknown as unknown as Variants}
               className="relative h-[350px] sm:h-[400px] lg:h-[500px] bg-secondary/5 rounded-3xl border border-border/50 overflow-hidden"
            >
               <WebsiteVisual />
               <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </motion.div>
         </div>
      </section>

      {/* Section 3: AI Agents */}
      <section id="ai" className="container py-24 border-t border-border/30">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
               variants={fadeInUp as unknown as unknown as Variants}
               className="order-2 lg:order-1 relative h-[350px] sm:h-[400px] lg:h-[500px] bg-secondary/5 rounded-3xl border border-border/50 overflow-hidden"
            >
               <AiVisual />
               <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
               variants={staggerContainer as unknown as unknown as Variants}
               className="order-1 lg:order-2 space-y-8"
            >
               <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-purple-500" />
               </div>

               <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl sm:text-4xl font-bold">
                  AI Automation Agents
               </motion.h2>

               <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed">
                  Scale your business without adding headcount. <br/>
                  We build and deploy custom AI automation agents that handle customer support, lead qualification, and business operations 24/7.
               </motion.p>

               <motion.ul variants={staggerContainer as unknown as unknown as Variants} className="space-y-4 pt-4">
                  {[
                     { title: "24/7 Lead Qualification", desc: "Never miss an opportunity while you sleep." },
                     { title: "Workflow Automation", desc: "Connect your CRM, Email, and Project tools." },
                     { title: "Custom Knowledge Bases", desc: "AI trained on your specific business data." }
                  ].map((item, i) => (
                     <motion.li key={i} variants={fadeInUp as unknown as unknown as Variants} className="flex gap-4">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                           <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-semibold text-foreground">{item.title}</h4>
                           <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                     </motion.li>
                  ))}
               </motion.ul>
            </motion.div>
         </div>
      </section>

      {/* Why a Unified System */}
      <section className="container py-24 border-t border-border/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl sm:text-4xl font-bold mb-6">
            Why Do Coaches Need a Unified Growth System?
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Most coaches hire a social media manager, a web designer, and maybe a virtual assistant — three separate vendors
              with three separate strategies that don&apos;t connect. The social media drives followers who land on a website
              that doesn&apos;t convert, and leads get lost because there&apos;s no automation to follow up.
            </p>
            <p>
              According to HubSpot&apos;s 2025 State of Marketing report, businesses with aligned marketing systems see
              36% higher customer retention and 38% higher sales win rates. That&apos;s the power of a unified system
              versus disconnected tools.
            </p>
            <p>
              At Vantalo, we engineer all three pillars as one interconnected machine. Your social media builds authority
              and drives qualified traffic. Your website captures that traffic with conversion-optimized pages. And AI agents
              qualify leads, book calls, and handle operations — 24/7. One system. One team. One strategy.
            </p>
          </motion.div>
          <motion.p variants={fadeInUp as unknown as unknown as Variants} className="text-sm text-muted-foreground mt-8">
            Last updated: March 2026 · Written by Akash Yadav, Founder of <Link href="/about/akash-yadav" className="text-primary hover:underline">Vantalo</Link>
          </motion.p>
        </motion.div>
      </section>

      <RoiCalculator />
      <BookCall />
    </div>
  );
}
