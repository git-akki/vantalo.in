import { motion, Variants } from "framer-motion";
import Layout from "../components/Layout";
import BookCall from "../components/BookCall";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Badge } from "../components/ui/badge";
import { Brain, Zap, ShieldCheck, Heart, Users, Crosshair, Cpu, Terminal, Code, PenTool, Linkedin, Instagram, Twitter, BookOpen, Newspaper } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 overflow-hidden">
        {/* Hero Section - Visual First */}
        <section className="container relative z-10 mb-24 lg:mb-32 pt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer as unknown as Variants}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
             {/* Text Content */}
             <div className="order-2 lg:order-1 text-left">
                <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center gap-2 mb-6">
                   <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full">
                     <Users className="w-3 h-3 mr-2" />
                     Who We Are
                   </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp as unknown as Variants}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                >
                  We Are the <br/> Engineers of the <br />
                  <span className="text-primary">New Economy.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp as unknown as Variants}
                  className="text-xl text-muted-foreground leading-relaxed max-w-xl"
                >
                  Vantalo isn't just an agency. It's a response to a broken market. 
                  We build the systems that power the next generation of industry leaders.
                </motion.p>
             </div>

             {/* Visual Content - Blueprint/Engine Theme */}
             <motion.div 
               variants={fadeInUp as unknown as Variants}
               className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] flex items-center justify-center"
             >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-75" />
                
                {/* Central Structure */}
                <div className="relative w-full max-w-md aspect-square">
                   {/* Orbiting Rings */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 border border-dashed border-primary/10 rounded-full"
                   />
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-4 sm:inset-12 border border-dashed border-primary/20 rounded-full"
                   />

                   {/* Floating "System" Nodes */}
                   {/* Node 1: Strategy */}
                   <motion.div 
                     animate={{ y: [0, -15, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-[15%] left-[10%] p-3 bg-card border border-border rounded-xl shadow-lg backdrop-blur-sm z-10"
                   >
                      <Brain className="w-6 h-6 text-primary" />
                   </motion.div>

                   {/* Node 2: Execution */}
                   <motion.div 
                     animate={{ y: [0, 15, 0] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute bottom-[20%] right-[10%] p-3 bg-card border border-border rounded-xl shadow-lg backdrop-blur-sm z-10"
                   >
                      <Zap className="w-6 h-6 text-yellow-500" />
                   </motion.div>

                   {/* Node 3: Scale */}
                   <motion.div 
                     animate={{ x: [0, 10, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                     className="absolute top-[40%] right-[0%] p-3 bg-card border border-border rounded-xl shadow-lg backdrop-blur-sm z-10"
                   >
                      <Crosshair className="w-6 h-6 text-red-500" />
                   </motion.div>

                   {/* Central Core - The "Engine" */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-card border border-primary/30 rounded-full flex items-center justify-center shadow-2xl z-20">
                      <Cpu className="w-12 h-12 text-primary" />
                      {/* Inner Pulse */}
                      <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20" />
                   </div>

                   {/* Connection Lines (SVG) */}
                   <svg className="absolute inset-0 w-full h-full text-primary/20 pointer-events-none" viewBox="0 0 400 400">
                      <path d="M200,200 L100,100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                      <path d="M200,200 L300,300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                      <path d="M200,200 L350,180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                   </svg>
                </div>
             </motion.div>
          </motion.div>
        </section>

        {/* The Origin Story - Emotional */}
        <section className="container mb-24 lg:mb-32">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, amount: 0.2 }}
             variants={staggerContainer as unknown as Variants}
             className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
             <div className="relative">
                <motion.div 
                  variants={fadeInUp as unknown as Variants}
                  className="relative z-10 rounded-3xl overflow-hidden border border-border shadow-2xl"
                >
                   <div className="aspect-[4/3] bg-secondary/10 relative overflow-hidden group">
                      {/* Abstract Visual for "Chaos vs Order" */}
                      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/5" />
                      
                      {/* Chaos Side */}
                      <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-wrap gap-4 opacity-30">
                         {[...Array(12)].map((_, i) => (
                           <div key={i} className="w-12 h-12 rounded-full border border-foreground/10 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                         ))}
                      </div>

                      {/* Order Side Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90" />
                      
                      <div className="absolute bottom-8 right-8 z-20">
                         <motion.div 
                           initial={{ opacity: 0, y: 20, scale: 0.95 }}
                           whileInView={{ opacity: 1, y: 0, scale: 1 }}
                           transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                           viewport={{ once: false }}
                           className="bg-background/95 backdrop-blur-md border border-border p-6 rounded-2xl shadow-xl max-w-[260px] relative overflow-hidden"
                         >
                            {/* Scanning Effect */}
                            <motion.div 
                              animate={{ top: ["-100%", "200%"] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
                            />
                            
                            <div className="flex items-center gap-4 mb-4 relative z-10">
                               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                  <Brain className="w-5 h-5 text-primary" />
                               </div>
                               <div>
                                  <div className="text-sm font-bold text-foreground">System Clarity</div>
                                  <div className="text-xs text-muted-foreground">Optimizing...</div>
                               </div>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative z-10">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "100%" }}
                                 transition={{ duration: 1.5, ease: "circOut", delay: 1 }}
                                 className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                               />
                            </div>
                         </motion.div>
                      </div>
                   </div>
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
             </div>

             <motion.div variants={staggerContainer as unknown as Variants}>
                <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold mb-6">
                   It Started With a <span className="text-primary">Frustration.</span>
                </motion.h2>
                <motion.div variants={fadeInUp as unknown as Variants} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                   <p>
                      We saw brilliant founders burning out. They had world-changing products but were stuck in the "agency loop"—hiring, firing, and hoping for a miracle.
                   </p>
                   <p>
                      We realized that <strong>"hustle" isn't a strategy. Systems are.</strong>
                   </p>
                   <p>
                      We didn't want to build another marketing firm that sells "hours" or "deliverables". We set out to build a machine—a Growth OS—that turns ambition into predictable, scalable revenue.
                   </p>
                </motion.div>
             </motion.div>
          </motion.div>
        </section>

        {/* The Philosophy - Business Focus */}
        <section className="bg-secondary/5 py-24 border-y border-border/50 mb-24">
           <div className="container">
              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false, amount: 0.2 }}
                 variants={staggerContainer as unknown as Variants}
                 className="text-center max-w-3xl mx-auto mb-16"
              >
                 <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold mb-6">The Era of Manual Growth is Over.</motion.h2>
                 <motion.p variants={fadeInUp as unknown as Variants} className="text-muted-foreground text-lg">
                    In a world of AI and automation, manual grunt work is a liability. Your business should run like code: efficient, scalable, and bug-free.
                 </motion.p>
              </motion.div>

              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false, amount: 0.2 }}
                 variants={staggerContainer as unknown as Variants}
                 className="grid md:grid-cols-3 gap-8"
              >
                 {[
                    {
                       icon: Zap,
                       title: "Velocity Over Volume",
                       desc: "We don't care about 'more' posts. We care about speed to result. We deploy rapid feedback loops to find what works, fast."
                    },
                    {
                       icon: Crosshair,
                       title: "Precision Over Noise",
                       desc: "Broadcasting is dead. We engineer narrow-cast signals that resonate deeply with your specific Ideal Customer Profile."
                    },
                    {
                       icon: Cpu,
                       title: "Systems Over Saviors",
                       desc: "Don't rely on a 'guru'. Build a system. We install infrastructure that works whether you're awake or asleep."
                    }
                 ].map((item, i) => (
                    <motion.div 
                       key={i}
                       variants={fadeInUp as unknown as Variants}
                       className="group bg-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-colors duration-300"
                    >
                       <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6" />
                       </div>
                       <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                       <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                       </p>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* The Team - Builders */}
        <section className="container mb-24 lg:mb-32">
           <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer as unknown as Variants}
              className="text-center max-w-3xl mx-auto mb-16"
           >
              <motion.div variants={fadeInUp as unknown as Variants} className="flex justify-center mb-6">
                 <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full">
                   <Users className="w-3 h-3 mr-2" />
                   The Team
                 </Badge>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Built by Builders.</h2>
              <p className="text-muted-foreground text-lg">
                 We aren't "marketers" guessing at what works. We are engineers, designers, and strategists obsessed with systemizing growth.
              </p>
           </motion.div>

           <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp as unknown as Variants}
              className="relative"
           >
              <div className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 transition-colors duration-500">
                  <div className="grid lg:grid-cols-5 gap-0">
                      {/* Image Section - Spans 2 cols */}
                      <div className="lg:col-span-2 relative h-[400px] lg:h-auto min-h-[400px]">
                          <img 
                              src="/buildwithakash.png" 
                              alt="Akash Yadav" 
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card pointer-events-none" />
                      </div>
                      
                      {/* Content Section - Spans 3 cols */}
                      <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center relative">
                          <div className="mb-6">
                              <Badge variant="outline" className="py-1.5 px-4 text-sm border-blue-500/20 bg-blue-500/5 text-blue-500 rounded-full mb-4">
                                  Founder & Lead Architect
                              </Badge>
                              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Akash Yadav</h3>
                              <p className="text-lg text-muted-foreground">The Architect behind the Systems.</p>
                          </div>

                          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground/90">
                              <p>
                                  "I'm obsessed with one thing: <strong>Eliminating Inefficiency.</strong>"
                              </p>
                              <p>
                                  Building the infrastructure that powers the next generation of brands. 
                                  It's not just about growth; it's about building a machine that grows itself.
                              </p>
                          </div>

                          <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-8 sm:items-center justify-between">
                             <div className="flex gap-8">
                                <div className="flex flex-col">
                                   <span className="text-3xl font-bold text-foreground">2.5+</span>
                                   <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Years Exp</span>
                                </div>
                                <div className="w-px h-12 bg-border/50" />
                                <div className="flex flex-col">
                                   <span className="text-3xl font-bold text-foreground">12+</span>
                                   <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Systems Built</span>
                                </div>
                             </div>

                             {/* Social Icons */}
                             <div className="flex gap-4">
                                {[
                                   { icon: Linkedin, href: "#", label: "LinkedIn" },
                                   { icon: Instagram, href: "#", label: "Instagram" },
                                   { icon: Twitter, href: "#", label: "X (Twitter)" },
                                   { icon: BookOpen, href: "#", label: "Substack" },
                                   { icon: Newspaper, href: "#", label: "Medium" }
                                ].map((social, i) => (
                                   <a 
                                      key={i}
                                      href={social.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-10 h-10 rounded-full bg-secondary/10 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                                      aria-label={social.label}
                                   >
                                      <social.icon className="w-5 h-5" />
                                   </a>
                                ))}
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
           </motion.div>
        </section>

        {/* The Promise - Professional */}
        <section className="container mb-24">
           <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer as unknown as Variants}
              className="grid lg:grid-cols-2 gap-12 items-center"
           >
              <div className="order-2 lg:order-1">
                 <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold mb-6">
                    Our Promise: <br/>
                    <span className="text-primary">Precision. Velocity. Transparency.</span>
                 </motion.h2>
                 <motion.div variants={fadeInUp as unknown as Variants} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                       We don't hide behind jargon. We deal in data, outcomes, and clear deliverables.
                    </p>
                    <ul className="space-y-4 mt-6">
                       {[
                          "No long-term contracts that trap you.",
                          "Weekly sprint reports, not monthly excuses.",
                          "Full access to your data and assets, always."
                       ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                             <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                <ShieldCheck className="w-3.5 h-3.5" />
                             </div>
                             {item}
                          </li>
                       ))}
                    </ul>
                    <p className="pt-4">
                       When you work with us, you're not hiring a vendor; you're upgrading your infrastructure.
                    </p>
                 </motion.div>
              </div>
              
              <div className="order-1 lg:order-2 flex justify-center">
                 {/* Visual Representation of Trust/Professionalism */}
                 <motion.div 
                   variants={fadeInUp as unknown as Variants}
                   className="relative w-full max-w-md aspect-square"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-60" />
                    <div className="relative h-full border border-border/60 bg-card shadow-2xl rounded-3xl p-8 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <div className="space-y-1">
                             <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                                <Heart className="w-7 h-7 fill-current" />
                             </div>
                             <div className="font-bold text-xl tracking-tight">Partner Success</div>
                             <div className="text-sm text-muted-foreground">Real-time metrics</div>
                          </div>
                          <div className="text-4xl font-mono font-bold text-primary tracking-tighter">100%</div>
                       </div>
                       
                       <div className="space-y-6">
                          {[
                             { label: "Retention", value: "98%" },
                             { label: "Satisfaction", value: "4.9/5" },
                             { label: "Referrals", value: "High" }
                          ].map((metric, i) => (
                             <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                   <span className="text-muted-foreground font-medium">{metric.label}</span>
                                   <span className="font-bold">{metric.value}</span>
                                </div>
                                <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                                   <motion.div 
                                     initial={{ width: 0 }}
                                     whileInView={{ width: "100%" }}
                                     transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                                     className="h-full bg-primary"
                                   />
                                </div>
                             </div>
                          ))}
                       </div>
                       
                       <div className="pt-6 border-t border-border/50">
                          <p className="text-sm text-muted-foreground text-center italic">
                             "We measure our success solely by yours."
                          </p>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </motion.div>
        </section>

        <BookCall />
      </div>
    </Layout>
  );
};

export default AboutPage;
