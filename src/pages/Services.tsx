import Layout from "../components/Layout";
import BookCall from "../components/BookCall";
import RoiCalculator from "../components/RoiCalculator";
import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Badge } from "../components/ui/badge";
import { Share2, Globe, Bot, Zap, CheckCircle2 } from "lucide-react";
import { SocialVisual, WebsiteVisual, AiVisual } from "../components/ServiceVisuals";

const ServicesPage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-12 overflow-hidden">
        {/* Hero Section */}
        <section className="container mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer as unknown as Variants}
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div className="space-y-8">
              <motion.div variants={fadeInUp as unknown as Variants}>
                <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
                  <Zap className="w-3.5 h-3.5 mr-2 fill-primary/20" />
                  Holistic Growth Infrastructure
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Not Just Services.<br />
                  <span className="text-muted-foreground">A Unified System.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Stop treating Social, Web, and AI as separate silos. 
                  We engineer them into a single, self-reinforcing machine that turns attention into revenue.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp as unknown as Variants} className="flex flex-col sm:flex-row gap-4">
                 <a href="#social" className="px-6 py-3 rounded-full bg-secondary/10 border border-border text-foreground hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" /> Social
                 </a>
                 <a href="#web" className="px-6 py-3 rounded-full bg-secondary/10 border border-border text-foreground hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" /> Web
                 </a>
                 <a href="#ai" className="px-6 py-3 rounded-full bg-secondary/10 border border-border text-foreground hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                    <Bot className="w-4 h-4" /> AI Agents
                 </a>
              </motion.div>
            </div>

            {/* Hero Visual - Abstract System */}
            <motion.div 
               variants={fadeInUp as unknown as Variants}
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
                 variants={fadeInUp as unknown as Variants}
                 className="order-2 lg:order-1 relative h-[500px] bg-secondary/5 rounded-3xl border border-border/50 overflow-hidden"
              >
                 <SocialVisual />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </motion.div>

              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false, amount: 0.2 }}
                 variants={staggerContainer as unknown as Variants}
                 className="order-1 lg:order-2 space-y-8"
              >
                 <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Share2 className="w-6 h-6 text-blue-500" />
                 </div>
                 
                 <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold">
                    Social Media Infrastructure
                 </motion.h2>
                 
                 <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed">
                    Most brands post content. We build assets. <br/>
                    We treat your social presence as a media company, focusing on narrative, authority, and compounding reach.
                 </motion.p>

                 <motion.ul variants={staggerContainer as unknown as Variants} className="space-y-4 pt-4">
                    {[
                       { title: "Strategic Narrative", desc: "Positioning you as the only logical choice." },
                       { title: "High-Velocity Content", desc: "Short-form video & text that dominates feeds." },
                       { title: "Community Architecture", desc: "Turning followers into a tribe." }
                    ].map((item, i) => (
                       <motion.li key={i} variants={fadeInUp as unknown as Variants} className="flex gap-4">
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
                 variants={staggerContainer as unknown as Variants}
                 className="space-y-8"
              >
                 <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-indigo-500" />
                 </div>
                 
                 <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold">
                    Conversion-First Web Systems
                 </motion.h2>
                 
                 <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed">
                    Your website isn't a brochure. It's a sales funnel. <br/>
                    We design immersive, high-performance web experiences that capture attention and guide it relentlessly toward a purchase.
                 </motion.p>

                 <motion.ul variants={staggerContainer as unknown as Variants} className="space-y-4 pt-4">
                    {[
                       { title: "Immersive 3D/Interactive", desc: "Retain attention with premium visuals." },
                       { title: "Funnel Architecture", desc: "Logical flows that reduce friction." },
                       { title: "Next.js Performance", desc: "Blazing fast load times for SEO dominance." }
                    ].map((item, i) => (
                       <motion.li key={i} variants={fadeInUp as unknown as Variants} className="flex gap-4">
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
                 variants={fadeInUp as unknown as Variants}
                 className="relative h-[500px] bg-secondary/5 rounded-3xl border border-border/50 overflow-hidden"
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
                 variants={fadeInUp as unknown as Variants}
                 className="order-2 lg:order-1 relative h-[500px] bg-secondary/5 rounded-3xl border border-border/50 overflow-hidden"
              >
                 <AiVisual />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </motion.div>

              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false, amount: 0.2 }}
                 variants={staggerContainer as unknown as Variants}
                 className="order-1 lg:order-2 space-y-8"
              >
                 <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-purple-500" />
                 </div>
                 
                 <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold">
                    AI Automation Agents
                 </motion.h2>
                 
                 <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground leading-relaxed">
                    Scale without adding headcount. <br/>
                    We deploy intelligent agents that handle support, lead qualification, and operations 24/7.
                 </motion.p>

                 <motion.ul variants={staggerContainer as unknown as Variants} className="space-y-4 pt-4">
                    {[
                       { title: "24/7 Lead Qualification", desc: "Never miss an opportunity while you sleep." },
                       { title: "Workflow Automation", desc: "Connect your CRM, Email, and Project tools." },
                       { title: "Custom Knowledge Bases", desc: "AI trained on your specific business data." }
                    ].map((item, i) => (
                       <motion.li key={i} variants={fadeInUp as unknown as Variants} className="flex gap-4">
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

        <RoiCalculator />
        <BookCall />
      </div>
    </Layout>
  );
};

export default ServicesPage;
