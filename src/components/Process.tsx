import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Zap, 
  User, 
  ArrowUp, 
  Check, 
  Database,
  LineChart,
  Layout,
  Target,
  MonitorSmartphone,
  Clock,
  BarChart3,
  Video,
  Cpu,
  Workflow,
  Scan,
  Fingerprint,
  Terminal,
  CircuitBoard,
  Network
} from "lucide-react";
import { Badge } from "./ui/badge";
import { fadeInUp, staggerContainer } from "../utils/animations";

type ServiceType = "social" | "web" | "ai";

const Process = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>("social");

  const services = [
    { id: "social", label: "Social Media", icon: Target },
    { id: "web", label: "Website & Solution", icon: MonitorSmartphone },
    { id: "ai", label: "AI Automation", icon: Cpu },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={fadeInUp as Variants} className="mb-6 flex justify-center">
            <Badge variant="soft" className="uppercase tracking-wider gap-2">
              <Settings className="w-3 h-3" />
              How We Work
            </Badge>
          </motion.div>
          
          <motion.h2 variants={fadeInUp as Variants} className="text-4xl sm:text-5xl font-bold mb-6">
            From <span className="text-primary">Strategy</span> to <span className="text-primary">Scale</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp as Variants} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            A unified workflow tailored to your specific growth needs.
          </motion.p>

          {/* Custom Tabs */}
          <motion.div 
            variants={fadeInUp as Variants}
            className="inline-flex p-1 bg-secondary/30 backdrop-blur-sm rounded-full border border-border/50"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id as ServiceType)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                  activeTab === service.id 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <service.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{service.label}</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {getServiceContent(activeTab)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const getServiceContent = (type: ServiceType) => {
  switch (type) {
    case "social":
      return (
        <>
          {/* Social Step 1 */}
          <Card
            step="01"
            title="Signal Detection"
            description="We deploy listening algorithms to identify high-intent market gaps and decode competitor positioning."
            icon={Scan}
          >
             <div className="relative h-full flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/10 rounded-full blur-xl"
                  />
                  <div className="absolute inset-0 border border-primary/20 rounded-full" />
                  <div className="absolute inset-8 border border-primary/20 rounded-full" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-1">
                    <span className="text-xs font-bold text-primary tracking-widest">SIGNAL</span>
                    <span className="text-[10px] text-muted-foreground uppercase">Detected</span>
                  </div>
                </div>
             </div>
          </Card>

          {/* Social Step 2 */}
          <Card
            step="02"
            title="Retention Engineering"
            description="Architecting psychological pattern-interrupts and narrative loops that maximize watch time."
            icon={Fingerprint}
          >
            <div className="h-full bg-secondary/30 rounded-lg border border-border/50 p-5 font-mono text-xs relative overflow-hidden flex flex-col justify-center">
               <div className="space-y-3 opacity-90">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">01</span>
                    <span className="text-muted-foreground"># Hook: Pattern Break</span>
                  </div>
                  <div className="pl-8 text-foreground/80 border-l border-border ml-1.5">
                    "Stop [Old Method]. Use [New Mechanism]."
                  </div>
                  <div className="flex gap-3 mt-2">
                    <span className="text-primary font-bold">02</span>
                    <span className="text-muted-foreground"># Visual: Dynamic Cut</span>
                  </div>
               </div>
               <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-px bg-primary/30 mt-4"
               />
            </div>
          </Card>

          {/* Social Step 3 */}
          <Card
            step="03"
            title="Cinematic Production"
            description="Studio-grade production with dynamic captions, sound design, and color grading."
            icon={Video}
          >
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-[200px] space-y-2">
                 {/* Timeline Tracks */}
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="h-1.5 bg-secondary rounded-full overflow-hidden relative">
                     <motion.div 
                       initial={{ x: "-100%" }}
                       whileInView={{ x: "100%" }}
                       transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-0 bg-primary/20"
                     />
                   </div>
                 ))}
                 
                 <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[9px] uppercase tracking-wider text-primary font-medium">REC</span>
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground">00:00:12:45</span>
                 </div>
              </div>
            </div>
          </Card>

          {/* Social Step 4 */}
          <Card
            step="04"
            title="Algorithmic Scale"
            description="Data-driven distribution strategies that compound engagement and convert viewers into leads."
            icon={BarChart3}
          >
             <div className="h-full flex items-end justify-between px-6 pb-4 pt-8 gap-2">
                {[40, 65, 45, 80, 55, 95].map((h, i) => (
                  <div key={i} className="relative w-full h-full flex items-end">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`w-full rounded-sm ${i === 5 ? 'bg-primary' : 'bg-secondary'}`}
                    />
                  </div>
                ))}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-background/80 backdrop-blur-sm p-1.5 rounded border border-border shadow-sm">
                   <ArrowUp className="w-3 h-3 text-primary" />
                   <div>
                      <div className="text-xs font-bold text-foreground">+245%</div>
                   </div>
                </div>
             </div>
          </Card>
        </>
      );

    case "web":
      return (
        <>
          {/* Web Step 1 */}
          <Card
            step="01"
            title="Conversion Systems"
            description="Scalable component libraries and intuitive interfaces engineered to prioritize user action."
            icon={Layout}
          >
             <div className="h-full flex items-center justify-center p-4">
                <div className="relative w-full max-w-[200px] aspect-video border border-border bg-card shadow-sm rounded-lg flex flex-col overflow-hidden group">
                   <div className="h-3 border-b border-border bg-secondary/50 flex items-center gap-1 px-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                   </div>
                   <div className="flex-1 p-2 grid grid-cols-3 gap-1.5">
                      <motion.div 
                        className="col-span-2 h-full bg-secondary/50 rounded-sm" 
                      />
                      <motion.div 
                        className="col-span-1 h-full bg-secondary/30 rounded-sm" 
                      />
                      <motion.div 
                        className="col-span-3 h-6 bg-primary/10 rounded-sm mt-auto border border-primary/10" 
                      />
                   </div>
                   {/* Cursor */}
                   <motion.div 
                     animate={{ x: [40, 120, 60], y: [40, 70, 20] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="absolute w-3 h-3 text-primary drop-shadow-sm z-10"
                   >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" />
                      </svg>
                   </motion.div>
                </div>
             </div>
          </Card>

          {/* Web Step 2 */}
          <Card
            step="02"
            title="Performance Core"
            description="Deploying high-performance applications with React Server Components for instant load times."
            icon={Terminal}
          >
             <div className="h-full bg-secondary/50 rounded-lg border border-border/50 p-4 font-mono text-[10px] leading-relaxed relative overflow-hidden">
                <div className="flex gap-2 text-muted-foreground mb-2 border-b border-border/50 pb-1">
                   <span>page.tsx</span>
                </div>
                <div className="space-y-0.5">
                   <div className="flex gap-1.5">
                      <span className="text-muted-foreground">export default</span>
                      <span className="text-primary">async</span>
                      <span className="text-foreground">Page()</span> {`{`}
                   </div>
                   <div className="pl-4 text-muted-foreground/50">// Server Component</div>
                   <div className="pl-4 text-foreground">return (</div>
                   <div className="pl-8">
                      <span className="text-primary">&lt;Suspense&gt;</span>
                   </div>
                   <div className="pl-12 flex items-center gap-1">
                      <span className="text-foreground">&lt;Content /&gt;</span>
                   </div>
                   <div className="pl-8 text-primary">&lt;/Suspense&gt;</div>
                   <div className="pl-4 text-foreground">)</div>
                   <div className="text-foreground">{`}`}</div>
                </div>
             </div>
          </Card>

          {/* Web Step 3 */}
          <Card
            step="03"
            title="Unified Data API"
            description="Integrating content systems and third-party APIs for a unified, real-time data experience."
            icon={Database}
          >
             <div className="h-full flex items-center justify-center">
                <div className="relative w-full max-w-[180px] flex items-center justify-between">
                   <div className="w-10 h-10 bg-card rounded border border-border flex items-center justify-center z-10">
                      <Layout className="w-4 h-4 text-muted-foreground" />
                   </div>
                   
                   <div className="absolute inset-x-0 h-px bg-border top-1/2 -translate-y-1/2 -z-0">
                      <motion.div 
                        animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-primary left-1/2 -translate-x-1/2"
                      />
                   </div>
                   
                   <div className="w-10 h-10 bg-primary/5 rounded border border-primary/20 flex items-center justify-center shadow-sm z-10">
                      <Database className="w-4 h-4 text-primary" />
                   </div>
                </div>
                <div className="absolute bottom-6 flex items-center gap-1.5 px-2 py-1 bg-primary/5 rounded border border-primary/10">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                   <span className="text-[10px] font-medium text-primary uppercase tracking-wider">Synced</span>
                </div>
             </div>
          </Card>

          {/* Web Step 4 */}
          <Card
            step="04"
            title="Global Edge"
            description="Deploying to global edge networks ensuring 100% uptime and optimal Core Web Vitals scores."
            icon={Zap}
          >
             <div className="h-full flex items-center justify-center flex-col gap-4">
                <div className="relative w-24 h-24">
                   <svg className="w-full h-full -rotate-90">
                      <circle cx="48" cy="48" r="38" className="stroke-secondary fill-none stroke-[6]" />
                      <motion.circle 
                        cx="48" cy="48" r="38" 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="stroke-primary fill-none stroke-[6] drop-shadow-sm"
                        strokeLinecap="round"
                      />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold tracking-tighter text-foreground">100</span>
                      <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Score</span>
                   </div>
                </div>
             </div>
          </Card>
        </>
      );

    case "ai":
      return (
        <>
          {/* AI Step 1 */}
          <Card
            step="01"
            title="Topology Mapping"
            description="Mapping operational workflows to identify high-friction nodes suitable for autonomous intervention."
            icon={Workflow}
          >
             <div className="h-full flex items-center justify-center">
                <div className="flex flex-col gap-3 items-center">
                   <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center shadow-sm">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center shadow-sm">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                      </div>
                   </div>
                   
                   <div className="relative h-8 w-px bg-border">
                      <motion.div 
                         animate={{ height: [0, 32, 0], opacity: [0, 1, 0] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="absolute top-0 w-full bg-primary"
                      />
                   </div>

                   <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center relative shadow-sm">
                      <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <Clock className="w-4 h-4 text-primary" />
                   </div>
                </div>
             </div>
          </Card>

          {/* AI Step 2 */}
          <Card
            step="02"
            title="Agent Swarms"
            description="Deploying context-aware agent swarms trained on proprietary data for autonomous execution."
            icon={Network}
          >
             <div className="h-full flex items-center justify-center p-4">
                <div className="relative w-full max-w-[200px] h-32 bg-secondary/20 rounded-xl border border-border/50 p-4">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/10">
                         <Network className="w-4 h-4 text-primary" />
                      </div>
                      <div className="h-1.5 w-16 bg-secondary rounded-full" />
                   </div>
                   <div className="space-y-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1 }}
                        className="h-1.5 bg-primary/20 rounded-full"
                      />
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-1.5 bg-primary/20 rounded-full"
                      />
                   </div>
                   {/* Brain/Network Nodes */}
                   <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div 
                           key={i}
                           animate={{ opacity: [0.3, 1, 0.3] }}
                           transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                           className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                      ))}
                   </div>
                </div>
             </div>
          </Card>

          {/* AI Step 3 */}
          <Card
            step="03"
            title="Neural Integration"
            description="Weaving agents into existing infrastructure for seamless end-to-end automation."
            icon={CircuitBoard}
          >
             <div className="h-full flex items-center justify-center">
                <div className="relative">
                   <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center relative z-10 bg-background shadow-sm">
                      <CircuitBoard className="w-5 h-5 text-primary" />
                   </div>
                   {/* Orbiting Apps */}
                   {[0, 120, 240].map((deg, i) => (
                      <motion.div
                         key={i}
                         animate={{ rotate: 360 }}
                         transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-0 w-24 h-24 -m-5 border border-dashed border-border/60 rounded-full"
                         style={{ transform: `rotate(${deg}deg)` }}
                      >
                         <motion.div 
                           className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-card border border-border rounded-full flex items-center justify-center shadow-sm"
                           animate={{ rotate: -360 }}
                           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                         >
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-foreground' : 'bg-muted-foreground'}`} />
                         </motion.div>
                      </motion.div>
                   ))}
                </div>
             </div>
          </Card>

          {/* AI Step 4 */}
          <Card
            step="04"
            title="Self-Optimizing"
            description="Continuous monitoring and latency optimization to maximize token efficiency and output velocity."
            icon={LineChart}
          >
             <div className="h-full flex flex-col justify-center px-6 gap-6">
                <div>
                   <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Manual Ops</span>
                      <span className="text-xs font-mono text-muted-foreground">-99%</span>
                   </div>
                   <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "100%" }}
                        whileInView={{ width: "1%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-muted-foreground/50"
                      />
                   </div>
                </div>
                
                <div>
                   <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Velocity</span>
                      <span className="text-xs font-mono text-primary font-bold">+100x</span>
                   </div>
                   <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "10%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-primary"
                      />
                   </div>
                </div>
             </div>
          </Card>
        </>
      );
  }
};

interface CardProps {
  step: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  children?: React.ReactNode;
}

const Card = ({ step, title, description, icon: Icon, children }: CardProps) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md"
  >
    <div className="mb-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
         <span className="text-xs font-mono text-primary/80 font-medium tracking-wider bg-primary/5 px-2 py-1 rounded border border-primary/10">{step}</span>
         {Icon && <Icon className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary/60 transition-colors" />}
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    <div className="relative h-40 rounded-xl bg-secondary/20 border border-border/40 overflow-hidden mt-auto group-hover:bg-secondary/30 transition-colors">
      {children}
    </div>
  </motion.div>
);

export default Process;
