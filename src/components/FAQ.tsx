"use client";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does an AI-powered social media agency do?",
    answer:
      "An AI-powered social media agency like Vantalo uses artificial intelligence to optimize content strategy, automate posting schedules, analyze audience engagement, and create data-driven social media campaigns that grow your brand's reach and revenue organically.",
  },
  {
    question: "How can AI automation help my business?",
    answer:
      "AI automation agents handle repetitive tasks like lead qualification, customer support, email follow-ups, and workflow management 24/7. This lets you scale operations without adding headcount, reducing costs while improving response times and customer experience.",
  },
  {
    question: "What makes Vantalo different from other digital agencies?",
    answer:
      "Vantalo treats social media, web development, and AI automation as a unified growth system rather than separate services. We build interconnected infrastructure where your social presence drives traffic to a conversion-optimized website, supported by AI agents that automate operations.",
  },
  {
    question: "Do you build websites with AI integration?",
    answer:
      "Yes. We build high-performance websites using modern frameworks like Next.js and React, with built-in AI features such as chatbots, lead qualification agents, personalized content, and automated workflows that connect your website to your entire business ecosystem.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <h3 className="text-base font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="container max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as unknown as Variants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp as unknown as unknown as Variants}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp as unknown as unknown as Variants}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know about our AI-powered growth services.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInUp as unknown as unknown as Variants}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
