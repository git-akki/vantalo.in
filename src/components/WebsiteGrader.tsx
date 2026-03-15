"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Eye,
  ShieldCheck,
  MousePointerClick,
  Users,
  Gauge,
  TrendingUp,
  Sparkles,
  ChevronDown,
  Scissors,
  Dumbbell,
  Briefcase,
  GraduationCap,
  Palette,
  RotateCcw,
  Brain,
  Scan,
  Bot,
  Zap,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// ─── Types ──────────────────────────────────────────────
type NicheType = "hair" | "beauty" | "fitness" | "business" | "education" | "creative";
type CategoryId = "clarity" | "trust" | "conversion" | "social" | "technical";
type ScreenState = "niche" | "audit" | "analyzing" | "results";

interface CheckItem {
  label: string;
  weight: number;
}

interface Category {
  id: CategoryId;
  label: string;
  icon: typeof Eye;
  items: CheckItem[];
}

// ─── Data ──────────────────────────────────────────────
const niches: { id: NicheType; label: string; icon: typeof Scissors; desc: string }[] = [
  { id: "hair", label: "Hair Educator", icon: Scissors, desc: "Courses for stylists & barbers" },
  { id: "beauty", label: "Beauty / Esthetics", icon: Palette, desc: "Skincare, makeup & nails" },
  { id: "fitness", label: "Fitness Coach", icon: Dumbbell, desc: "Training programs & coaching" },
  { id: "business", label: "Business Coach", icon: Briefcase, desc: "Strategy & growth coaching" },
  { id: "education", label: "Online Educator", icon: GraduationCap, desc: "Digital courses & tutoring" },
  { id: "creative", label: "Creative / Other", icon: Palette, desc: "Art, design & other niches" },
];

const nicheLabels: Record<NicheType, { student: string; product: string; result: string }> = {
  hair: { student: "student", product: "course/masterclass", result: "before & after transformations" },
  beauty: { student: "student", product: "course/training", result: "before & after results" },
  fitness: { student: "client", product: "program/course", result: "client transformations" },
  business: { student: "client", product: "program/coaching", result: "client success stories" },
  education: { student: "student", product: "course", result: "student outcomes" },
  creative: { student: "student", product: "course/workshop", result: "portfolio/project results" },
};

function getCategories(niche: NicheType): Category[] {
  const n = nicheLabels[niche];
  return [
    {
      id: "clarity", label: "Offer Clarity", icon: Eye,
      items: [
        { label: `A visitor can understand what ${n.product} you sell within 5 seconds`, weight: 3 },
        { label: `Your ${n.product} curriculum or outline is clearly visible`, weight: 2 },
        { label: "Your pricing is displayed (or there's a clear path to see it)", weight: 2 },
        { label: `Your headline speaks to the ${n.student}'s problem, not just your credentials`, weight: 3 },
      ],
    },
    {
      id: "trust", label: "Trust & Authority", icon: ShieldCheck,
      items: [
        { label: `You show ${n.result} from real ${n.student}s`, weight: 3 },
        { label: `${n.student} testimonials are visible with photos or video`, weight: 3 },
        { label: "Your face and personal story are on the page", weight: 2 },
        { label: "You display years of experience, certifications, or media features", weight: 1 },
      ],
    },
    {
      id: "conversion", label: "Conversion Power", icon: MousePointerClick,
      items: [
        { label: "There's ONE clear CTA ('Enroll Now', 'Join', 'Book') above the fold", weight: 3 },
        { label: "You offer a free preview, lesson, or lead magnet", weight: 2 },
        { label: "A money-back guarantee or risk-reversal is visible", weight: 2 },
        { label: `There's a clear path from landing on the page to buying your ${n.product}`, weight: 3 },
      ],
    },
    {
      id: "social", label: "Social Proof", icon: Users,
      items: [
        { label: `You show how many ${n.student}s have enrolled or worked with you`, weight: 2 },
        { label: "Your Instagram/TikTok/YouTube content is embedded or linked", weight: 1 },
        { label: "You display follower counts, video views, or reach numbers", weight: 1 },
        { label: "You have brand logos, partner logos, or 'as seen in' section", weight: 1 },
      ],
    },
    {
      id: "technical", label: "Technical Health", icon: Gauge,
      items: [
        { label: "Your site loads fast (under 3 seconds)", weight: 3 },
        { label: "Your site looks good and works on mobile", weight: 3 },
        { label: "You have SSL (https://) and it feels secure", weight: 2 },
        { label: `${n.student}s can pay with cards and local payment methods`, weight: 2 },
      ],
    },
  ];
}

function getGrade(score: number): { label: string; color: string; bg: string; description: string } {
  if (score >= 85) return { label: "Elite", color: "text-green-400", bg: "from-green-500/20 to-green-500/5", description: "Your website is a conversion machine. Fine-tune and scale." };
  if (score >= 65) return { label: "Solid", color: "text-blue-400", bg: "from-blue-500/20 to-blue-500/5", description: "Good foundation. A few strategic fixes could unlock serious growth." };
  if (score >= 40) return { label: "Needs Work", color: "text-yellow-400", bg: "from-yellow-500/20 to-yellow-500/5", description: "You're leaving money on the table. Key areas need attention." };
  return { label: "Critical", color: "text-red-400", bg: "from-red-500/20 to-red-500/5", description: "Your website is actively losing you clients. Urgent fixes needed." };
}

function getRecommendations(categoryScores: Record<CategoryId, number>, niche: NicheType): string[] {
  const n = nicheLabels[niche];
  const recs: string[] = [];
  const sorted = Object.entries(categoryScores).sort(([, a], [, b]) => a - b);

  for (const [catId, score] of sorted) {
    if (recs.length >= 3) break;
    if (score >= 80) continue;
    switch (catId as CategoryId) {
      case "clarity":
        recs.push(`Rewrite your headline to focus on the ${n.student}'s problem and desired outcome — not your credentials. Make your ${n.product} offer impossible to miss within 5 seconds.`);
        break;
      case "trust":
        recs.push(`Add 3-5 ${n.result} with ${n.student} testimonials. People buy transformations, not features. Video testimonials convert 2x better than text.`);
        break;
      case "conversion":
        recs.push(`Add ONE dominant CTA button above the fold. Remove competing links. Offer a free preview or lesson to capture leads who aren't ready to buy yet.`);
        break;
      case "social":
        recs.push(`Display your ${n.student} count and embed your best-performing social content. Numbers build instant credibility — even "50+ ${n.student}s" works.`);
        break;
      case "technical":
        recs.push(`Your site speed and mobile experience directly impact conversions. Compress images, enable caching, and test on a phone. Every second of delay costs you ~7% in conversions.`);
        break;
    }
  }
  if (recs.length === 0) {
    recs.push("Your website is strong across all categories. Focus on driving more traffic and A/B testing your CTA copy for incremental gains.");
  }
  return recs;
}

// ─── Sub-components ──────────────────────────────────────

/** Typewriter that streams text character-by-character */
const TypewriterText = ({ text, delay = 0, speed = 15 }: { text: string; delay?: number; speed?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, started, speed]);

  if (!started) return null;

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-4 ml-0.5 bg-primary animate-pulse align-middle" />
      )}
    </span>
  );
};

/** Animated grid background */
const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
    {/* Scanning line */}
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

/** Floating particles around score */
const ScoreParticles = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ─── Analysis Loading Screen ─────────────────────────────

const analysisSteps = [
  { label: "Initializing AI audit engine", icon: Brain, duration: 800 },
  { label: "Scanning offer clarity signals", icon: Eye, duration: 700 },
  { label: "Evaluating trust & authority markers", icon: ShieldCheck, duration: 600 },
  { label: "Analyzing conversion architecture", icon: MousePointerClick, duration: 700 },
  { label: "Processing social proof density", icon: Users, duration: 500 },
  { label: "Running technical health diagnostics", icon: Gauge, duration: 600 },
  { label: "Generating personalized recommendations", icon: Sparkles, duration: 900 },
  { label: "Compiling audit report", icon: Zap, duration: 500 },
];

const AnalyzingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStep >= analysisSteps.length) {
      // Small delay before showing results
      const timeout = setTimeout(onComplete, 400);
      return () => clearTimeout(timeout);
    }

    const stepDuration = analysisSteps[currentStep].duration;
    const timeout = setTimeout(() => {
      setCurrentStep((s) => s + 1);
      setProgress(((currentStep + 1) / analysisSteps.length) * 100);
    }, stepDuration);

    return () => clearTimeout(timeout);
  }, [currentStep, onComplete]);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden min-h-screen flex items-center">
      <GridBackground />

      <div className="container relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          {/* AI Brain Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-10"
          >
            <div className="w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center relative overflow-hidden">
              <Brain className="w-10 h-10 text-primary relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                animate={{ y: ["100%", "0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-primary/20 rounded-full"
            />
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            AI Analyzing Your Website
          </h2>
          <p className="text-muted-foreground text-sm mb-10">
            Running diagnostics across 5 critical categories...
          </p>

          {/* Progress Bar */}
          <div className="w-full max-w-md mb-8">
            <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full relative"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Shimmer effect on progress bar */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between mt-2 text-xs font-mono text-muted-foreground">
              <span>{Math.round(progress)}%</span>
              <span>{currentStep}/{analysisSteps.length} modules</span>
            </div>
          </div>

          {/* Step Log — Terminal Style */}
          <div className="w-full max-w-md bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-left space-y-2 font-mono text-xs">
            {analysisSteps.map((step, i) => {
              const isDone = i < currentStep;
              const isCurrent = i === currentStep;
              const isPending = i > currentStep;

              if (isPending) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-2.5 py-1 ${isDone ? "text-muted-foreground/60" : "text-foreground"}`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  ) : isCurrent ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Scan className="w-3.5 h-3.5 text-primary shrink-0" />
                    </motion.div>
                  ) : null}
                  <span className={isCurrent ? "text-primary" : ""}>{step.label}</span>
                  {isCurrent && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="text-primary"
                    >
                      _
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Main Component ──────────────────────────────────────

const WebsiteGrader = () => {
  const [screen, setScreen] = useState<ScreenState>("niche");
  const [selectedNiche, setSelectedNiche] = useState<NicheType | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [expandedCategory, setExpandedCategory] = useState<CategoryId | null>("clarity");

  const categories = useMemo(() => (selectedNiche ? getCategories(selectedNiche) : []), [selectedNiche]);

  const totalWeight = useMemo(() => categories.reduce((sum, cat) => sum + cat.items.reduce((s, item) => s + item.weight, 0), 0), [categories]);

  const earnedWeight = useMemo(() => {
    let earned = 0;
    categories.forEach((cat) => {
      cat.items.forEach((item, idx) => {
        if (checkedItems[`${cat.id}-${idx}`]) earned += item.weight;
      });
    });
    return earned;
  }, [categories, checkedItems]);

  const overallScore = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;

  const categoryScores = useMemo(() => {
    const scores: Record<CategoryId, number> = { clarity: 0, trust: 0, conversion: 0, social: 0, technical: 0 };
    categories.forEach((cat) => {
      const catWeight = cat.items.reduce((s, item) => s + item.weight, 0);
      let catEarned = 0;
      cat.items.forEach((item, idx) => {
        if (checkedItems[`${cat.id}-${idx}`]) catEarned += item.weight;
      });
      scores[cat.id] = catWeight > 0 ? Math.round((catEarned / catWeight) * 100) : 0;
    });
    return scores;
  }, [categories, checkedItems]);

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleReset = useCallback(() => {
    setCheckedItems({});
    setScreen("niche");
    setSelectedNiche(null);
    setExpandedCategory("clarity");
  }, []);

  const handleNicheSelect = (niche: NicheType) => {
    setSelectedNiche(niche);
    setScreen("audit");
  };

  const handleAnalyze = () => {
    setScreen("analyzing");
  };

  const handleAnalysisComplete = useCallback(() => {
    setScreen("results");
  }, []);

  const grade = getGrade(overallScore);
  const recommendations = useMemo(
    () => getRecommendations(categoryScores, selectedNiche || "hair"),
    [categoryScores, selectedNiche]
  );

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallScore / 100) * circumference;

  // ─── SCREEN: Niche Selection ────────────────────────────
  if (screen === "niche") {
    return (
      <section className="py-24 sm:py-32 relative overflow-hidden min-h-screen flex items-center">
        <GridBackground />

        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer as unknown as Variants}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp as unknown as Variants} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">AI-Powered Audit</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp as unknown as Variants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Is Your Website{" "}
              <span className="text-primary relative">
                Losing You Clients?
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary/40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Our AI audits your website across 5 critical conversion categories in under 2 minutes.
            </motion.p>
            <motion.p variants={fadeInUp as unknown as Variants} className="text-sm text-muted-foreground/60 font-mono">
              No sign-up required. Instant results.
            </motion.p>
          </motion.div>

          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <span className="text-foreground font-medium">Select niche</span>
              <div className="w-8 h-px bg-border" />
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-muted-foreground text-xs">2</span>
              <span>Audit</span>
              <div className="w-8 h-px bg-border" />
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-muted-foreground text-xs">3</span>
              <span>AI Report</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer as unknown as Variants}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {niches.map((niche) => (
              <motion.button
                key={niche.id}
                variants={fadeInUp as unknown as Variants}
                onClick={() => handleNicheSelect(niche.id)}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-left relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300">
                    <niche.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{niche.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{niche.desc}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Powered by badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
              <Zap className="w-3 h-3" />
              Powered by Vantalo Growth OS
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ─── SCREEN: AI Analysis Loading ────────────────────────
  if (screen === "analyzing") {
    return <AnalyzingScreen onComplete={handleAnalysisComplete} />;
  }

  // ─── SCREEN: Results ────────────────────────────────────
  if (screen === "results") {
    return (
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <GridBackground />

        <div className="container relative z-10 max-w-5xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AI Audit Complete</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Your Website Audit Report</h2>
            <p className="text-muted-foreground font-mono text-sm">
              {niches.find((n) => n.id === selectedNiche)?.label} &middot; {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Score Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 flex flex-col items-center"
            >
              <div className={`relative w-56 h-56 flex items-center justify-center mb-6 rounded-full bg-gradient-to-b ${grade.bg}`}>
                <ScoreParticles active={overallScore > 0} />

                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 border border-dashed border-primary/15 rounded-full"
                />

                <svg className="w-48 h-48 transform -rotate-90 relative z-10" viewBox="0 0 220 220">
                  <circle cx="110" cy="110" r={radius} fill="transparent" stroke="currentColor" strokeWidth="8" className="text-secondary/20" />
                  <motion.circle
                    cx="110" cy="110" r={radius}
                    fill="transparent" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                    className={grade.color}
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
                    className="text-5xl font-bold tracking-tighter"
                  >
                    {overallScore}
                  </motion.span>
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">/100</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center"
              >
                <h3 className={`text-2xl font-bold ${grade.color}`}>{grade.label}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">{grade.description}</p>
              </motion.div>

              <button
                onClick={handleReset}
                className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Start over
              </button>
            </motion.div>

            {/* Breakdown + Recommendations */}
            <div className="lg:col-span-3 space-y-6">
              {/* Category Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Scan className="w-4 h-4 text-primary" />
                    Category Breakdown
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground">5 MODULES SCANNED</span>
                </div>
                {categories.map((cat, i) => {
                  const score = categoryScores[cat.id];
                  const barColor = score >= 70 ? "bg-green-500" : score >= 45 ? "bg-yellow-500" : "bg-red-500";
                  const statusColor = score >= 70 ? "text-green-500" : score >= 45 ? "text-yellow-500" : "text-red-500";
                  return (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2 font-medium">
                          <cat.icon className="w-4 h-4 text-muted-foreground" />
                          {cat.label}
                        </span>
                        <span className={`font-mono font-semibold ${statusColor}`}>{score}%</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full rounded-full ${barColor} relative`}
                          initial={{ width: 0 }}
                          animate={{ width: `${score}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Recommendations — Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-4"
              >
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Recommendations
                </h4>
                <p className="text-xs text-muted-foreground font-mono mb-2">
                  Generated based on your weakest categories
                </p>
                {recommendations.map((rec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + i * 0.3 }}
                    className="flex gap-3 p-4 bg-secondary/10 border border-border/30 rounded-xl"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <TypewriterText text={rec} delay={1800 + i * 600} speed={12} />
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                <div className="relative border border-primary/20 rounded-2xl p-8 text-center space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-8 h-8 text-primary mx-auto" />
                  </motion.div>
                  <h4 className="text-xl font-bold">Want Us to Fix This For You?</h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    We build conversion-focused websites for educators. Get a free strategy call — no pitch, no obligation.
                  </p>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden"
                    onClick={() => window.open("https://vantalo.in/#book-call", "_self")}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book Free Strategy Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── SCREEN: Audit Checklist ────────────────────────────
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <GridBackground />

      <div className="container relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp as unknown as Variants}
          className="text-center mb-12 space-y-4"
        >
          {/* Step Indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <span className="text-muted-foreground/60">Niche</span>
              <div className="w-8 h-px bg-primary/30" />
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <span className="text-foreground font-medium">Audit</span>
              <div className="w-8 h-px bg-border" />
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-muted-foreground text-xs">3</span>
              <span>Report</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full">
              <Bot className="w-3.5 h-3.5 mr-2" />
              {niches.find((n) => n.id === selectedNiche)?.label}
            </Badge>
            <button
              onClick={handleReset}
              className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
            >
              Change
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Audit Your <span className="text-primary">Website</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Check each statement that's true for your site. Be honest — the AI needs accurate data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Checklist Column */}
          <div className="lg:col-span-3 space-y-3">
            {categories.map((cat, catIndex) => {
              const isExpanded = expandedCategory === cat.id;
              const catChecked = cat.items.filter((_, idx) => checkedItems[`${cat.id}-${idx}`]).length;
              const catComplete = catChecked === cat.items.length;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.05 }}
                  className={`bg-card/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-colors duration-300 ${
                    catComplete ? "border-green-500/30" : "border-border/50"
                  }`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-secondary/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        catComplete
                          ? "bg-green-500/10 text-green-500"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {catComplete ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <cat.icon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-foreground">{cat.label}</h3>
                        <p className="text-xs text-muted-foreground font-mono">
                          {catChecked}/{cat.items.length} signals detected
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-1">
                        {cat.items.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              checkedItems[`${cat.id}-${idx}`] ? "bg-primary" : "bg-secondary/40"
                            }`}
                          />
                        ))}
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {/* Items */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-2">
                          {cat.items.map((item, idx) => {
                            const key = `${cat.id}-${idx}`;
                            const isChecked = !!checkedItems[key];

                            return (
                              <button
                                key={key}
                                type="button"
                                role="checkbox"
                                aria-checked={isChecked}
                                onClick={() => toggleItem(key)}
                                className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 group relative overflow-hidden ${
                                  isChecked
                                    ? "bg-primary/5 border-primary/30"
                                    : "bg-secondary/5 border-transparent hover:border-border/50 hover:bg-secondary/10"
                                }`}
                              >
                                {/* Left accent bar */}
                                {isChecked && (
                                  <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-bottom"
                                  />
                                )}

                                <div className={`shrink-0 w-5 h-5 mt-0.5 rounded border flex items-center justify-center transition-all duration-200 ${
                                  isChecked
                                    ? "bg-primary border-primary shadow-[0_0_8px_rgba(var(--primary),0.3)]"
                                    : "border-muted-foreground/30 group-hover:border-primary/50"
                                }`}>
                                  {isChecked && (
                                    <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", bounce: 0.5 }}>
                                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                                    </motion.div>
                                  )}
                                </div>

                                <span className={`text-sm leading-relaxed transition-colors flex-1 ${
                                  isChecked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground/80"
                                }`}>
                                  {item.label}
                                </span>

                                {item.weight === 3 && (
                                  <span className={`ml-auto shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                                    isChecked
                                      ? "text-primary bg-primary/15"
                                      : "text-muted-foreground/50 bg-secondary/30"
                                  }`}>
                                    HIGH IMPACT
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Score Panel (Sticky) */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6 relative overflow-hidden">
              {/* Subtle background pulse */}
              <div className={`absolute inset-0 bg-gradient-to-b ${grade.bg} opacity-30 transition-all duration-1000`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    LIVE ANALYSIS
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{checkedCount}/{totalItems}</span>
                </div>

                {/* Score Circle */}
                <div className="flex flex-col items-center">
                  <div className="relative w-40 h-40 flex items-center justify-center mb-4">
                    <ScoreParticles active={overallScore > 20} />

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-full border border-dashed border-primary/15"
                    />

                    <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 220 220">
                      <circle cx="110" cy="110" r={radius} fill="transparent" stroke="currentColor" strokeWidth="8" className="text-secondary/20" />
                      <motion.circle
                        cx="110" cy="110" r={radius}
                        fill="transparent" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                        className={checkedCount > 0
                          ? (overallScore >= 65 ? "text-green-500" : overallScore >= 40 ? "text-yellow-500" : "text-red-500")
                          : "text-secondary/30"
                        }
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <motion.span
                        key={overallScore}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-bold tracking-tighter"
                      >
                        {overallScore}
                      </motion.span>
                      <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">/100</span>
                    </div>
                  </div>

                  <h4 className={`text-lg font-bold transition-colors ${checkedCount > 0 ? grade.color : "text-muted-foreground"}`}>
                    {checkedCount > 0 ? grade.label : "Awaiting Input"}
                  </h4>
                </div>

                {/* Mini Category Bars */}
                <div className="space-y-3 mt-6">
                  {categories.map((cat) => {
                    const score = categoryScores[cat.id];
                    const barColor = score >= 70 ? "bg-green-500" : score >= 45 ? "bg-yellow-500" : score > 0 ? "bg-red-500" : "bg-secondary/30";
                    return (
                      <div key={cat.id} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground flex items-center gap-1.5">
                            <cat.icon className="w-3 h-3" />
                            {cat.label}
                          </span>
                          <span className="font-mono font-medium">{score}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary/20 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${barColor}`}
                            animate={{ width: `${Math.max(score, 0)}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Generate Report Button */}
                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    {checkedCount >= 3 ? (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <Button
                          size="lg"
                          onClick={handleAnalyze}
                          className="w-full group relative overflow-hidden py-6"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Brain className="w-4 h-4" />
                            Generate AI Report
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="waiting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-14 flex items-center justify-center text-xs font-mono text-muted-foreground/40 bg-secondary/10 rounded-xl border border-dashed border-border/30"
                      >
                        <Scan className="w-3.5 h-3.5 mr-2 animate-pulse" />
                        CHECK {3 - checkedCount} MORE ITEM{3 - checkedCount !== 1 ? "S" : ""}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteGrader;
