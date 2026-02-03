import { motion, Variants } from "framer-motion";
import { Calendar, ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const BookCall = () => {
  const handleBookingClick = () => {
    window.open(
      "https://calendar.app.google/mS1urwHfqaaBTso3A",
      "GoogleCalendar",
      "width=600,height=700,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <section id="book-call" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Minimal background pattern to match other sections */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer as unknown as Variants}
          viewport={{ once: false }}
          className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-primary/5"
        >
          {/* Subtle gradient glow - refined */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <motion.div variants={staggerContainer as unknown as Variants} className="relative z-10 max-w-3xl">
            <motion.div variants={fadeInUp as unknown as Variants} className="mb-8">
              <Badge variant="outline" className="px-4 py-1.5 gap-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-sm font-medium tracking-wide">
                  Discovery Session
                </span>
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Let’s build your <span className="text-primary">infrastructure.</span>
            </motion.h2>

            <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Not sure where to start? We'll map out your current bottlenecks and identify the highest-leverage automation opportunities.
            </motion.p>

            <motion.div variants={staggerContainer as unknown as Variants} className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary Action */}
              <motion.div variants={fadeInUp as unknown as Variants}>
                <Button
                  onClick={handleBookingClick}
                  size="lg"
                  className="w-full sm:w-auto transition-all group"
                >
                  Book 30-Min Audit
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Secondary Action */}
              <motion.div variants={fadeInUp as unknown as Variants}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto hover:bg-secondary/50 transition-colors"
                >
                  <a href="mailto:contact@vantalo.in" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">contact@vantalo.in</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp as unknown as Variants} className="pt-8 border-t border-border/50 w-full">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "Zero obligation",
                  "Strategy focused",
                  "Actionable roadmap"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary/60" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
