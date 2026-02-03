import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, Share2, Zap, Bot } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Organic background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-left"
          >
            {/* Status badge - Minimalist */}
            <motion.div
              variants={fadeInUp as unknown as Variants}
              className="mb-8"
            >
              <Badge variant="soft" className="rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting New Clients
              </Badge>
            </motion.div>

            {/* Main heading - Balanced & Minimal */}
            <motion.h1
              variants={fadeInUp as unknown as Variants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Social Growth. <br />
              <span className="text-primary">Web Systems.</span> <br />
          AI Automation.
        </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp as unknown as Variants}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              We build the ecosystem that connects your content to your customers. 
              No hacks, just infrastructure that scales.
            </motion.p>

            {/* CTA Buttons - Service Focused */}
            <motion.div
              variants={staggerContainer as unknown as Variants}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <motion.div variants={fadeInUp as unknown as Variants}>
                <Button
                  variant="inverse"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300 group"
                  onClick={() => document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Free Strategy Call
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
                <div className="mt-3 text-xs text-muted-foreground font-medium tracking-wide ml-2">No pitch. No obligation.</div>
              </motion.div>
              
              <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center h-14">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-foreground font-medium transition-colors hover:text-primary"
                >
                  <span className="border-b border-foreground/30 group-hover:border-primary pb-0.5">How it works</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Content - The Growth Engine */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract System Visual */}
            <div className="relative w-full max-w-md aspect-square">
               {/* Center Hub */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
               />
               
               {/* Connecting Lines Animation */}
               <svg className="absolute inset-0 w-full h-full text-primary/20" viewBox="0 0 400 400">
                  <motion.path 
                    d="M200,200 L100,80" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                  <motion.path 
                    d="M200,200 L300,80" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                  {/* Center to Bottom-Right (AI Agent) */}
                  <motion.path
                    d="M200,200 L315,300"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
               </svg>

               {/* Floating Cards */}
               {/* Top Left: Social */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[10%] left-[0%] sm:left-[5%] p-4 bg-card border border-border rounded-2xl shadow-xl backdrop-blur-sm z-10"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500">
                     <Share2 className="w-5 h-5" />
                   </div>
                   <span className="font-semibold text-sm">Social</span>
                 </div>
                 <div className="space-y-2">
                   <div className="w-24 h-2 bg-muted rounded-full" />
                   <div className="w-16 h-2 bg-muted/50 rounded-full" />
                 </div>
               </motion.div>

               {/* Top Right: Web */}
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute top-[10%] right-[0%] sm:right-[5%] p-4 bg-card border border-border rounded-2xl shadow-xl backdrop-blur-sm z-10"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                     <Globe className="w-5 h-5" />
                   </div>
                   <span className="font-semibold text-sm">Website</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-8 h-8 bg-muted/30 rounded-md" />
                    <div className="space-y-1">
                      <div className="w-16 h-2 bg-muted rounded-full" />
                      <div className="w-10 h-2 bg-muted/50 rounded-full" />
                    </div>
                 </div>
               </motion.div>

               {/* Bottom Right: AI Agent */}
               <motion.div 
                 animate={{ y: [0, -8, 0] }}
                 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-[6%] right-[0%] sm:right-[5%] p-4 bg-card border border-border rounded-2xl shadow-xl backdrop-blur-sm z-10"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-violet-500/10 rounded-lg text-violet-500">
                     <Bot className="w-5 h-5" />
                   </div>
                   <span className="font-semibold text-sm">AI Agent</span>
                 </div>
                 <div className="space-y-2">
                   <div className="w-24 h-2 bg-muted rounded-full" />
                   <div className="w-16 h-2 bg-muted/50 rounded-full" />
                 </div>
               </motion.div>

               {/* Central Core */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-card border border-primary/20 rounded-full flex items-center justify-center shadow-2xl z-0">
                  <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
