import { motion, Variants } from "framer-motion";
import { Cpu, Target, MonitorSmartphone, ArrowRight, Network, Activity } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Badge } from "./ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content: The Strategic Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer as unknown as Variants}
            viewport={{ once: false }}
            className="flex flex-col justify-center h-full"
          >
            <motion.div variants={fadeInUp as unknown as Variants} className="mb-6">
              <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary">
                <Activity className="w-3 h-3 mr-2 animate-pulse" />
                The Vantalo Standard
              </Badge>
            </motion.div>
            
            <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              We don't sell "marketing". <br />
              <span className="text-primary">We install infrastructure.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp as unknown as Variants} className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
              Most growth problems aren't about "more content" or "better ads". They are <span className="text-foreground font-medium">system failures</span>. 
              We replace chaotic activity with a unified, self-optimizing engine designed for predictability.
            </motion.p>

            <motion.div variants={staggerContainer as unknown as Variants} className="space-y-4">
              {/* Feature 1: AI */}
              <motion.div 
                variants={fadeInUp as unknown as Variants} 
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-secondary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <Cpu className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Operational Velocity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Replacing manual bottlenecks with agentic swarms.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2: Social */}
              <motion.div 
                variants={fadeInUp as unknown as Variants} 
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-secondary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <Target className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Signal Precision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Targeting high-intent ICPs with algorithmic resonance.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3: Web */}
              <motion.div 
                variants={fadeInUp as unknown as Variants} 
                whileHover={{ x: 5 }}
                className="group flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-secondary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <MonitorSmartphone className="w-7 h-7 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Conversion Architecture</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Turning passive traffic into revenue through telemetry.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right content: The System Visualization */}
           <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp as unknown as Variants}
              className="relative h-[600px] w-full flex items-center justify-center lg:translate-x-10"
            >
              {/* Background decorative elements to fill space */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl opacity-30" />
              
              {/* Central Core: The Engine */}
              <div className="relative z-20 w-56 h-56 bg-card border border-primary/20 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-primary/10">
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse" />
                
                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] font-semibold text-primary tracking-wider">GROWTH OS</span>
                </div>
                
                {/* Logo */}
                <div className="text-3xl font-bold tracking-tight text-center">
                  Vantalo<span className="text-primary">.in</span>
                </div>
                
                {/* Orbiting Rings - Multiple Layers */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-30px] border border-dashed border-primary/20 rounded-full" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-60px] border border-primary/10 rounded-full" 
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-90px] border border-dashed border-secondary/20 rounded-full opacity-30" 
                />
              </div>

              {/* Orbiting Nodes Container */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {/* Node 1: AI (0 degrees - Top) */}
                <div className="absolute w-16 h-16 -translate-y-[200px]">
                  {/* Counter-rotate icon to keep upright */}
                  <motion.div 
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-background border border-border group-hover:border-primary/50 rounded-2xl flex items-center justify-center shadow-xl transition-colors duration-300 relative overflow-hidden z-20">
                       <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                       <Cpu className="w-8 h-8 text-primary group-hover:animate-pulse relative z-10" />
                    </div>
                  </motion.div>
                  {/* Connecting Line (Fixed relative to node, pointing to center) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border to-primary/50 overflow-hidden z-10 origin-top">
                       <motion.div 
                         className="absolute top-0 left-0 w-full h-1/2 bg-primary/50"
                         animate={{ y: ["-100%", "200%"] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       />
                  </div>
                </div>

                {/* Node 2: Social (120 degrees - Bottom Right) */}
                <div className="absolute w-16 h-16" style={{ transform: 'rotate(120deg) translateY(-200px)' }}>
                   <motion.div 
                    animate={{ rotate: [-120, -480] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-background border border-border group-hover:border-primary/50 rounded-2xl flex items-center justify-center shadow-xl transition-colors duration-300 relative overflow-hidden z-20">
                       <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                       <Target className="w-8 h-8 text-primary group-hover:animate-pulse relative z-10" />
                    </div>
                  </motion.div>
                  {/* Correct Line Placement: Sibling of IconWrapper, inside Rotated NodeGroup */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border to-primary/50 overflow-hidden z-10 origin-top">
                       <motion.div 
                         className="absolute top-0 left-0 w-full h-1/2 bg-primary/50"
                         animate={{ y: ["-100%", "200%"] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       />
                  </div>
                </div>

                {/* Node 3: Web (240 degrees - Bottom Left) */}
                <div className="absolute w-16 h-16" style={{ transform: 'rotate(240deg) translateY(-200px)' }}>
                   <motion.div 
                    animate={{ rotate: [-240, -600] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-background border border-border group-hover:border-primary/50 rounded-2xl flex items-center justify-center shadow-xl transition-colors duration-300 relative overflow-hidden z-20">
                       <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                       <MonitorSmartphone className="w-8 h-8 text-primary group-hover:animate-pulse relative z-10" />
                    </div>
                  </motion.div>
                  {/* Line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border to-primary/50 overflow-hidden z-10 origin-top">
                       <motion.div 
                         className="absolute top-0 left-0 w-full h-1/2 bg-primary/50"
                         animate={{ y: ["-100%", "200%"] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       />
                  </div>
                </div>
              </motion.div>

              {/* Connecting Lines (Background) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.circle 
                  cx="50%" cy="50%" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" 
                  className="text-muted-foreground"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
              </svg>

            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
