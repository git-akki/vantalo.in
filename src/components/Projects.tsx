import { motion, Variants } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projects } from "../data/projects";
import { ProjectVisual } from "./ProjectVisual";

import { cn } from "@/lib/utils";

const fadeInNoSlide: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const ProjectCard = ({ project, className }: { project: typeof projects[0], className?: string }) => {
  return (
    <Link to={`/project/${project.slug}`} className={cn("block h-full", className)}>
      <motion.div
        variants={fadeInNoSlide}
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

  const Projects = ({ showAll = false }: { showAll?: boolean }) => {
  // Layout sorting:
  // We want Social cards on the Left (Wide) and Web cards on the Right (Narrow).
  // Grid logic: Index 0 (Left), Index 1 (Right), Index 2 (Left), Index 3 (Right).
  // Target Order:
  // 1. Timeline by Harsh (Social) -> Left Top
  // 2. Hair Mastery (Web) -> Right Top
  // 3. Hair Mastery Social (Social) -> Left Bottom
  // 4. Modom Grooming (Web) -> Right Bottom

  const social1 = projects.find(p => p.slug === "timeline-by-harsh");
  const web1 = projects.find(p => p.slug === "hair-mastery");
  const social2 = projects.find(p => p.slug === "hair-mastery-social");
  const web2 = projects.find(p => p.slug === "modom-grooming");

  // Fallback for other projects if specific ones aren't found or for "View All" page
  const otherProjects = projects.filter(p => 
    !["timeline-by-harsh", "hair-mastery", "hair-mastery-social", "modom-grooming"].includes(p.slug)
  );

  const displayProjects = showAll 
    ? projects 
    : [social1, web1, social2, web2].filter(Boolean) as typeof projects;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
               <TrendingUp className="w-3 h-3" />
               Case Studies
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Results That <span className="text-primary">Scale.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real work, real numbers. From viral campaigns to high-performance websites.
            </p>
          </div>
          
          <div className="flex gap-2">
            {!showAll && (
               <Button asChild variant="outline" className="rounded-full">
                 <Link to="/projects">View All Projects</Link>
               </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:auto-rows-[400px]"
        >
          {displayProjects.map((project, index) => {
            // Layout logic:
            // Two rows, two columns.
            // Left column is wider (col-span-2), Right column is narrower (col-span-1).
            // Index 0, 2 -> Left (Wide)
            // Index 1, 3 -> Right (Narrow)
            
            const isLeftColumn = index % 2 === 0;
            const className = isLeftColumn 
              ? "md:col-span-2 lg:col-span-2" 
              : "md:col-span-1 lg:col-span-1";
            
            return (
              <ProjectCard 
                key={index} 
                project={project} 
                className={className}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
