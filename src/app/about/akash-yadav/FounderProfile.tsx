"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Linkedin, Instagram, Twitter, BookOpen, Newspaper, Brain, Cpu, Zap, Code } from "lucide-react";
import BookCall from "@/components/BookCall";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: BookOpen, href: "#", label: "Substack" },
  { icon: Newspaper, href: "#", label: "Medium" },
];

const skills = [
  { icon: Brain, label: "Growth Strategy", desc: "Designing systems that turn attention into revenue for coaches and educators." },
  { icon: Code, label: "Full-Stack Development", desc: "Next.js, React, WordPress, and custom platform engineering." },
  { icon: Cpu, label: "AI & Automation", desc: "Building intelligent agents that handle operations 24/7." },
  { icon: Zap, label: "Social Media Systems", desc: "Data-driven content strategies that compound organic reach." },
];

export default function FounderProfile() {
  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Back Link */}
      <div className="container px-6 pb-6">
        <Link href="/about" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group text-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to About
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer as unknown as unknown as Variants}
          className="grid lg:grid-cols-5 gap-0 bg-card border border-border/50 rounded-3xl overflow-hidden"
        >
          {/* Image */}
          <motion.div
            variants={fadeInUp as unknown as unknown as Variants}
            className="lg:col-span-2 relative h-[350px] sm:h-[450px] lg:h-auto lg:min-h-[550px]"
          >
            <Image
              src="/akash-yadav.png"
              alt="Akash Yadav - Founder & Lead Architect at Vantalo"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer as unknown as unknown as Variants}
            className="lg:col-span-3 p-8 sm:p-10 lg:p-14 flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp as unknown as unknown as Variants}>
              <Badge variant="outline" className="py-1.5 px-4 text-sm border-blue-500/20 bg-blue-500/5 text-blue-500 rounded-full mb-4">
                Founder & Lead Architect
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">Akash Yadav</h1>
              <p className="text-xl text-muted-foreground mb-8">The Architect behind the Systems.</p>
            </motion.div>

            <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-5 text-lg leading-relaxed text-muted-foreground/90 mb-10">
              <p>
                &quot;I&apos;m obsessed with one thing: <strong className="text-foreground">Eliminating Inefficiency.</strong>&quot;
              </p>
              <p>
                I founded Vantalo because I saw coaches and educators drowning in fragmented tools and broken agency promises. They needed systems, not services. Infrastructure, not deliverables.
              </p>
              <p>
                My approach is simple: treat every business like a codebase. Audit it, refactor the bottlenecks, and deploy systems that scale without human babysitting. Social media, web, and AI automation are not separate departments&mdash;they are modules in a single growth engine.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp as unknown as unknown as Variants} className="flex gap-10 pb-8 border-b border-border/50 mb-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground">2.5+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Years Experience</span>
              </div>
              <div className="w-px bg-border/50" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground">12+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Systems Built</span>
              </div>
              <div className="w-px bg-border/50" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground">5M+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Views Generated</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp as unknown as unknown as Variants} className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-secondary/10 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills & Expertise */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Core Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeInUp as unknown as unknown as Variants}
                className="group bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{skill.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="container mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp as unknown as unknown as Variants} className="text-3xl sm:text-4xl font-bold mb-8">
            Philosophy
          </motion.h2>
          <motion.div variants={fadeInUp as unknown as unknown as Variants} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I believe the best marketing doesn&apos;t feel like marketing. It feels like value. When you give people genuine insight, education, and entertainment, they don&apos;t just follow you&mdash;they champion you.
            </p>
            <p>
              Every system I build is designed around one question: <strong className="text-foreground">&quot;Does this compound?&quot;</strong> If the answer is no, we don&apos;t build it. If the answer is yes, we engineer it to run on autopilot.
            </p>
            <p>
              I&apos;m not interested in vanity metrics. I care about pipeline, revenue, and the freedom my clients get when their business runs like a well-oiled machine.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <BookCall />
    </div>
  );
}
