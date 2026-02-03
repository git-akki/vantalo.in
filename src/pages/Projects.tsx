import Layout from "../components/Layout";
import BookCall from "../components/BookCall";
import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Badge } from "../components/ui/badge";
import { ArrowUpRight, FolderOpen, Layers, Zap } from "lucide-react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "../components/ProjectVisual";

const ProjectCard = ({ project, className }: { project: typeof projects[0], className?: string }) => {
  return (
    <Link to={`/project/${project.slug}`} className={cn("block h-full", className)}>
      <motion.div
        variants={fadeInUp as unknown as Variants}
        className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden h-[400px] lg:h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-primary/20"
      >
        {/* Background Visuals / Animation */}
        <div className="absolute inset-0 z-0 bg-secondary/5">
          <ProjectVisual project={project} />
          {/* Gradient overlay for text readability - lighter to keep visuals visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Container - Visual First Layout */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          
          {/* Top Header - Minimal */}
          <div className="flex justify-end items-start">
            <div className="rounded-full bg-background/20 backdrop-blur-md border border-white/10 p-3 text-foreground/80 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom Content - Clean & Minimal */}
          <div className="flex flex-col gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Badge variant="outline" className="w-fit bg-background/40 backdrop-blur-md border-white/10 text-xs font-medium tracking-wide">
              {project.category}
            </Badge>
            
            <div className="space-y-1">
               <h3 className="text-2xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
                 {project.title}
               </h3>
               
               {/* Minimal Stats/Info - Only Key Data */}
               {project.stats ? (
                  <div className="flex items-center gap-3 pt-1">
                    {project.stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground/90">
                         {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
                         <span className="font-bold text-foreground">{stat.value}</span> 
                         <span className="opacity-80">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground/80 font-medium">
                     {project.tags.slice(0, 2).join(" • ")}
                  </div>
                )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const ProjectsPage = () => {
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
                  <FolderOpen className="w-3.5 h-3.5 mr-2 fill-primary/20" />
                  Selected Work
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Building the Future,<br />
                  <span className="text-muted-foreground">One System at a Time.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A curated collection of high-performance websites, social growth systems, and AI automation architectures.
                  We don't just build projects; we build assets.
                </p>
              </motion.div>
            </div>

            {/* Hero Visual - Abstract Projects */}
            <motion.div 
               variants={fadeInUp as unknown as Variants}
               className="relative aspect-square lg:aspect-[4/3] bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl border border-border/50 p-8 flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Floating Cards Visual */}
                <div className="relative w-full h-full flex items-center justify-center">
                   <motion.div 
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute z-20 w-48 aspect-[3/4] bg-card border border-border rounded-xl shadow-2xl p-4 flex flex-col gap-2"
                   >
                      <div className="w-8 h-8 rounded bg-primary/20 mb-2" />
                      <div className="w-full h-2 bg-secondary rounded" />
                      <div className="w-2/3 h-2 bg-secondary rounded" />
                      <div className="mt-auto w-full h-24 bg-secondary/10 rounded overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                      </div>
                   </motion.div>

                   <motion.div 
                      animate={{ y: [15, -15, 15], x: [10, -5, 10], rotate: [-5, -2, -5] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-10 top-10 z-10 w-40 aspect-[3/4] bg-card/80 backdrop-blur border border-border rounded-xl shadow-xl p-4 flex flex-col gap-2 opacity-60"
                   >
                      <div className="w-6 h-6 rounded bg-secondary mb-2" />
                      <div className="w-full h-2 bg-secondary/50 rounded" />
                      <div className="w-1/2 h-2 bg-secondary/50 rounded" />
                   </motion.div>

                   <motion.div 
                      animate={{ y: [5, -5, 5], x: [-10, 5, -10], rotate: [5, 2, 5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-10 bottom-10 z-10 w-44 aspect-[3/4] bg-card/80 backdrop-blur border border-border rounded-xl shadow-xl p-4 flex flex-col gap-2 opacity-60"
                   >
                      <div className="w-6 h-6 rounded bg-secondary mb-2" />
                      <div className="w-full h-2 bg-secondary/50 rounded" />
                      <div className="w-3/4 h-2 bg-secondary/50 rounded" />
                   </motion.div>
                </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="container mb-24">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, amount: 0.1 }}
             variants={staggerContainer as unknown as Variants}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
           >
             {projects.map((project, index) => (
               <motion.div
                 key={project.slug}
                 variants={fadeInUp as unknown as Variants}
                 className={cn(
                   "w-full",
                   // Make every 4th item span 2 columns if on large screen, for visual interest
                   index % 4 === 0 || index % 4 === 3 ? "lg:col-span-2" : "lg:col-span-1"
                 )}
               >
                 <ProjectCard project={project} />
               </motion.div>
             ))}
           </motion.div>
        </section>

        <BookCall />
      </div>
    </Layout>
  );
};

export default ProjectsPage;
