"use client";
import { motion, Variants } from "framer-motion";
import { Bot, ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const ToolCTA = () => {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp as unknown as Variants}
        >
          <Link href="/tools/website-grader" className="block group">
            <div className="relative rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-primary/40 hover:bg-primary/[0.06]">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />

              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">
                        Free AI Website Audit
                      </h3>
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" />
                        New
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Grade your website across 5 conversion categories. Get your score in 2 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-primary shrink-0 group-hover:gap-3 transition-all">
                  Try it free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolCTA;
