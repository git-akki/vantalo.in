import { motion } from "framer-motion";
import { MessageSquare, Heart, Share2, MousePointer2, BarChart3, Globe, Bot, Zap, Sparkles } from "lucide-react";

export const SocialVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-6 relative overflow-hidden">
      {/* Mobile Frame */}
      <div className="w-[180px] h-[300px] border-4 border-border bg-card rounded-[2rem] overflow-hidden relative shadow-xl">
        {/* Dynamic Header */}
        <div className="h-8 bg-secondary/50 border-b border-border flex items-center justify-center">
           <div className="w-16 h-1.5 bg-border/50 rounded-full" />
        </div>

        {/* Feed Content */}
        <div className="p-3 space-y-3">
           {/* Post 1 */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="space-y-2"
           >
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-secondary" />
                 <div className="w-20 h-2 bg-secondary/50 rounded-full" />
              </div>
              <div className="w-full aspect-video bg-secondary/30 rounded-lg relative overflow-hidden">
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"
                 />
                 <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: [0, 1.2, 1, 0] }}
                   transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                   className="absolute inset-0 flex items-center justify-center"
                 >
                    <Heart className="w-8 h-8 text-foreground fill-foreground" />
                 </motion.div>
              </div>
           </motion.div>

           {/* Post 2 */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="space-y-2"
           >
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-secondary" />
                 <div className="w-24 h-2 bg-secondary/50 rounded-full" />
              </div>
              <div className="w-full h-16 bg-secondary/30 rounded-lg" />
           </motion.div>
        </div>

        {/* Floating Reactions */}
        <div className="absolute right-2 bottom-12 flex flex-col gap-2">
           {[Heart, MessageSquare, Share2].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center shadow-sm"
              >
                 <Icon className="w-3.5 h-3.5 text-muted-foreground" />
              </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export const WebsiteVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-6 relative overflow-hidden">
      <div className="w-full max-w-[280px] aspect-[4/3] bg-card border border-border rounded-xl shadow-xl overflow-hidden flex flex-col relative">
         {/* Browser Chrome */}
         <div className="h-7 bg-secondary/50 border-b border-border flex items-center px-3 gap-1.5">
            <div className="flex gap-1.5">
               <div className="w-2 h-2 rounded-full bg-border" />
               <div className="w-2 h-2 rounded-full bg-border" />
            </div>
            <div className="ml-2 flex-1 h-3 bg-background rounded-full border border-border/50 opacity-50" />
         </div>

         {/* Website Body */}
         <div className="flex-1 p-4 relative">
            {/* Hero Section */}
            <div className="flex items-center justify-between mb-6">
               <div className="space-y-2 w-2/3">
                  <div className="w-24 h-2 bg-foreground/10 rounded-full" />
                  <div className="w-full h-1.5 bg-secondary rounded-full" />
                  <div className="w-4/5 h-1.5 bg-secondary rounded-full" />
                  <motion.div 
                     whileHover={{ scale: 1.05 }}
                     className="mt-2 w-20 h-6 bg-primary/10 rounded-md border border-primary/20 flex items-center justify-center"
                  >
                     <span className="w-12 h-1.5 bg-primary/40 rounded-full" />
                  </motion.div>
               </div>
               <div className="w-16 h-16 rounded-lg bg-secondary/30" />
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-3 gap-2">
               {[1, 2, 3].map((i) => (
                  <div 
                     key={i}
                     className="aspect-square rounded bg-secondary/20 border border-border/50" 
                  />
               ))}
            </div>

            {/* Mouse Cursor Animation */}
            <motion.div
               animate={{ 
                  x: [100, 40, 40, 100],
                  y: [100, 40, 40, 100],
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 left-0 pointer-events-none z-20"
            >
               <MousePointer2 className="w-4 h-4 text-primary fill-primary/20" />
            </motion.div>
         </div>
      </div>
    </div>
  );
};

export const AiVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary/5 p-6 relative overflow-hidden">
       {/* Central Node */}
       <div className="relative z-10">
          <motion.div 
             animate={{ boxShadow: ["0 0 0 0px rgba(var(--primary), 0)", "0 0 0 20px rgba(var(--primary), 0.1)", "0 0 0 40px rgba(var(--primary), 0)"] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg relative"
          >
             <Bot className="w-8 h-8 text-primary" />
             <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </motion.div>
       </div>

       {/* Orbiting Nodes */}
       {[0, 1, 2].map((i) => (
          <motion.div
             key={i}
             className="absolute"
             animate={{ rotate: 360 }}
             transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
             style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
             <motion.div 
                className="absolute"
                style={{ transform: `translateX(${80 + i * 30}px)` }}
             >
                <div className="w-8 h-8 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm">
                   {i === 0 && <MessageSquare className="w-3 h-3 text-muted-foreground" />}
                   {i === 1 && <Zap className="w-3 h-3 text-muted-foreground" />}
                   {i === 2 && <Sparkles className="w-3 h-3 text-muted-foreground" />}
                </div>
             </motion.div>
          </motion.div>
       ))}

       {/* Connection Lines (Simulated) */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <circle cx="50%" cy="50%" r="80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="110" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="140" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
       </svg>
    </div>
  );
};
