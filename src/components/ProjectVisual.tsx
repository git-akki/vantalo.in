import { motion } from "framer-motion";
import { 
  Calendar, 
  Check, 
  Package, 
  Truck, 
  Languages, 
  ShoppingCart, 
  User, 
  Box, 
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Users
} from "lucide-react";
import { projects } from "../data/projects";

interface ProjectVisualProps {
  project: typeof projects[0];
}

const SalonBookingVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-8 relative overflow-hidden">
      {/* Calendar Grid UI */}
      <div className="w-64 bg-card border border-border/50 rounded-xl shadow-lg p-4 relative z-10">
        <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-2">
          <div className="flex gap-2 items-center">
             <Calendar className="w-4 h-4 text-foreground/70" />
             <div className="h-2 w-20 bg-secondary rounded-full" />
          </div>
          <div className="h-2 w-8 bg-secondary rounded-full" />
        </div>
        
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 items-center">
              <div className="w-8 text-[10px] text-muted-foreground font-mono">10:0{i}</div>
              <motion.div 
                initial={{ backgroundColor: "hsl(var(--secondary))", borderColor: "transparent" }}
                animate={i === 2 ? { 
                  backgroundColor: ["hsl(var(--secondary))", "hsl(var(--primary))", "hsl(var(--primary))"],
                  borderColor: ["transparent", "hsl(var(--primary))", "hsl(var(--primary))"],
                  opacity: [0.3, 0.1, 0.1]
                } : {}}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 1] }}
                className={`flex-1 h-8 rounded border border-border/50 relative flex items-center px-3 overflow-hidden ${i !== 2 ? 'bg-secondary/30' : ''}`}
              >
                {i === 1 && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <div className="h-1.5 w-16 bg-primary/10 rounded-full" />
                  </div>
                )}
                
                {i === 2 && (
                  <>
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 1] }}
                        className="flex items-center gap-2 z-10"
                     >
                        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <div className="h-1.5 w-20 bg-primary rounded-full" />
                     </motion.div>
                     
                     {/* Cursor Click Animation */}
                     <motion.div
                        animate={{ 
                           opacity: [0, 1, 0],
                           scale: [1, 0.8, 1],
                           x: [20, 0, 20],
                           y: [20, 0, 20]
                        }}
                        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 1] }}
                        className="absolute right-2 bottom-2 pointer-events-none z-20"
                     >
                        <div className="w-3 h-3 bg-primary rounded-full shadow-lg border border-background" />
                     </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OrderFulfillmentVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 relative overflow-hidden">
       <div className="relative w-full max-w-[280px]">
          {/* Conveyor Belt Path */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 rounded-full" />
          
          {/* Nodes */}
          <div className="flex justify-between relative z-10">
             {[ShoppingCart, Package, Truck, CheckCircle2].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm relative group">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      
                      {/* Active State Ring */}
                      <motion.div
                         animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                         transition={{ duration: 3, delay: i * 0.75, repeat: Infinity }}
                         className="absolute inset-0 border border-primary/50 rounded-full"
                      />
                   </div>
                </div>
             ))}
          </div>

          {/* Moving Package */}
          <motion.div
             animate={{ x: [0, 240], opacity: [0, 1, 1, 0] }} // Adjust based on width
             transition={{ duration: 3, ease: "linear", repeat: Infinity }}
             className="absolute top-1/2 -translate-y-1/2 left-[15px] z-20"
          >
             <div className="w-8 h-8 bg-primary text-primary-foreground rounded flex items-center justify-center shadow-lg border border-background/20">
                <Box className="w-4 h-4" />
             </div>
          </motion.div>
       </div>
    </div>
  );
};

const TranslatorVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-6 relative overflow-hidden">
       <div className="grid grid-cols-2 gap-4 w-full max-w-[300px]">
          {/* Source Text */}
          <div className="bg-card border border-border rounded-lg p-3 shadow-sm space-y-2">
             <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                <span className="text-[10px] text-muted-foreground font-mono">EN</span>
             </div>
             {[1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 bg-secondary rounded-full w-full opacity-60" />
             ))}
          </div>

          {/* Target Text (Animated) */}
          <div className="bg-card border border-border rounded-lg p-3 shadow-sm space-y-2 relative overflow-hidden">
             <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] text-muted-foreground font-mono">ES</span>
             </div>
             {[1, 2, 3].map((i) => (
                <motion.div 
                   key={i}
                   initial={{ width: 0, opacity: 0 }}
                   animate={{ width: "100%", opacity: 1 }}
                   transition={{ duration: 0.5, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                   className="h-1.5 bg-primary/20 rounded-full" 
                />
             ))}
             
             {/* Processing Indicator */}
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-3 right-3"
             >
                <Languages className="w-3 h-3 text-primary/40" />
             </motion.div>
          </div>
       </div>
       
       {/* Central Arrow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border rounded-full p-1.5 z-10 shadow-sm">
          <ArrowRight className="w-3 h-3 text-muted-foreground" />
       </div>
    </div>
  );
};

const WebsiteVisual = ({ type }: { type: 'hair' | 'grooming' | 'generic' }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-6 relative overflow-hidden">
       <div className="w-full max-w-[260px] aspect-[4/3] bg-card border border-border rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Browser Header */}
          <div className="h-6 bg-secondary/50 border-b border-border flex items-center px-2 gap-1.5">
             <div className="w-2 h-2 rounded-full bg-primary/20" />
             <div className="w-2 h-2 rounded-full bg-primary/40" />
             <div className="w-2 h-2 rounded-full bg-primary/60" />
          </div>
          
          {/* Content Area */}
          <div className="flex-1 p-3 space-y-3 relative overflow-hidden">
             {/* Hero */}
             <div className="flex gap-3">
                <div className="flex-1 space-y-1.5">
                   <div className="h-2 w-2/3 bg-primary/20 rounded-full" />
                   <div className="h-1.5 w-full bg-secondary rounded-full" />
                   <div className="h-1.5 w-4/5 bg-secondary rounded-full" />
                </div>
                <div className="w-12 h-12 rounded bg-primary/10" />
             </div>

             {/* Grid Items */}
             <div className="grid grid-cols-2 gap-2">
                {[1, 2].map((i) => (
                   <div key={i} className="space-y-1">
                      <div className="aspect-square rounded bg-secondary/30" />
                      <div className="h-1 w-2/3 bg-secondary rounded-full" />
                   </div>
                ))}
             </div>

             {/* Scrolling Cursor/Overlay */}
             <motion.div 
               animate={{ y: [0, 100, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-2 w-1.5 h-16 bg-primary/20 rounded-full"
             />
             
             {/* Subtle loading shine */}
             <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12"
             />
          </div>
       </div>
    </div>
  );
};

const GrowthDashboardVisual = ({ project }: { project: typeof projects[0] }) => {
  // Use project data or fallbacks
  const stats = project.stats || [
    { label: "Followers", value: "10K+", trend: "+12%" },
    { label: "Reach", value: "500K", trend: "+25%" }
  ];
  
  // Mock graph data if not present - ensure we have enough points for a nice chart
  const dataPoints = project.graphData?.map(d => d.value) || [1200, 1800, 3200, 2800, 4500, 5800];
  const maxVal = Math.max(...dataPoints);
  // Normalize to percentage (0-100)
   const normalizedData = dataPoints.map(v => (v / maxVal) * 100);

   const formatValue = (val: number) => {
      if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
      if (val >= 1000) return (val / 1000).toFixed(0) + 'k';
      return val.toString();
   };

   return (
     <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-6 relative overflow-hidden">
       <div className="w-full max-w-[280px] space-y-3">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3">
           {stats.slice(0, 2).map((stat, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-card border border-border rounded-xl p-3 shadow-sm relative overflow-hidden group"
              >
                 <div className="flex items-center gap-2 mb-1 relative z-10">
                    {stat.label.toLowerCase().includes("follower") ? <Users className="w-3 h-3 text-primary/70" /> : <TrendingUp className="w-3 h-3 text-primary" />}
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</span>
                 </div>
                 <div className="flex items-end gap-2 relative z-10">
                    <span className="text-lg font-bold leading-none">{stat.value}</span>
                    <span className="text-[10px] text-primary font-medium mb-0.5 bg-primary/10 px-1 rounded">{stat.trend}</span>
                 </div>
                 
                 {/* Subtle shimmer effect on hover/load */}
                 <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, delay: i * 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12"
                 />
              </motion.div>
           ))}
        </div>

        {/* Main Chart Card */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="bg-card border border-border rounded-xl p-4 shadow-sm h-[140px] relative flex flex-col overflow-hidden"
        >
           <div className="flex justify-between items-center mb-4 relative z-10">
              <div className="flex items-center gap-2">
                 <BarChart3 className="w-4 h-4 text-primary/70" />
                 <span className="text-xs font-medium">Growth Analytics</span>
              </div>
              <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                 <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              </div>
           </div>

           {/* Chart Area */}
           <div className="flex-1 flex items-end justify-between gap-2 px-1 relative z-10">
              {normalizedData.map((height, i) => (
                 <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                    className="w-full bg-primary/80 relative group rounded-t-[2px]"
                 >
                    {/* Value Tooltip (Animated) */}
                    <motion.div 
                        animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2 + (i * 0.5), repeatDelay: 3 }}
                        className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-primary/70 opacity-0 whitespace-nowrap"
                     >
                        {formatValue(dataPoints[i])}
                     </motion.div>
                 </motion.div>
              ))}
           </div>
           
           {/* Background Grid Lines */}
           <div className="absolute inset-0 z-0 flex flex-col justify-end pb-4 px-4 pt-12 space-y-4 opacity-10">
              <div className="border-t border-foreground w-full" />
              <div className="border-t border-foreground w-full" />
              <div className="border-t border-foreground w-full" />
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProjectVisual = ({ project }: ProjectVisualProps) => {
   // Specific Automation Projects
   if (project.title.includes("Salon")) return <SalonBookingVisual />;
   if (project.title.includes("Order Fulfillment")) return <OrderFulfillmentVisual />;
   if (project.title.includes("Translator")) return <TranslatorVisual />;
   
   // Specific Social/Web Projects
   if (project.title.includes("Hair Mastery Social")) return <GrowthDashboardVisual project={project} />;
   if (project.title.includes("Hair Mastery")) return <WebsiteVisual type="hair" />;
   if (project.title.includes("Modom")) return <WebsiteVisual type="grooming" />;
   if (project.title.includes("Timeline")) return <GrowthDashboardVisual project={project} />;
   
   // Fallbacks based on type
   if (project.type === "social") return <GrowthDashboardVisual project={project} />;
   if (project.type === "website") return <WebsiteVisual type="generic" />;
   
   return <OrderFulfillmentVisual />; // Default fallback
};
