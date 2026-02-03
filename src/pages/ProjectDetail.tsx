import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { projects } from "../data/projects";
import { fadeInUp, staggerContainer } from "../utils/animations";
import BookCall from "../components/BookCall";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container px-6 pt-24 pb-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/projects")}
            className="group text-muted-foreground hover:text-foreground pl-0 hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Button>
        </div>

        {/* Title Strip */}
        <div className="border-b border-border/50 bg-background">
          <div className="container px-6 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {project.title}
                  </h1>
                  {project.link && project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shrink-0"
                      title="View Live Project"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
                  <span className="font-medium text-primary">{project.category}</span>
                  <span>•</span>
                  <span>{project.tags.slice(0, 3).join(", ")}</span>
                </div>
                {project.benefits && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.benefits.slice(0, 3).map((b, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-xs">
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <Button asChild size="sm" className="rounded-full px-6">
                   <a href="#book-call">
                     Start Project <ArrowRight className="w-4 h-4 ml-2" />
                   </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <section className="container px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Context & Challenge */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl text-muted-foreground leading-relaxed font-light border-l-2 border-primary/20 pl-6"
              >
                {project.description}
              </motion.div>

              {/* Problem Statement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  The Challenge
                </h3>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                  {project.problem ? (
                    project.problem.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <p>Information about the specific challenges faced in this project is being updated.</p>
                  )}
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  The Solution
                </h3>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed mb-6">
                  {project.solution ? (
                    project.solution.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <p>Details about the implemented solution and technical approach.</p>
                  )}
                </div>

                {project.benefits && (
                  <div className="mt-6 bg-secondary/30 rounded-2xl p-6 border border-border/50">
                    <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary">Key Features & Benefits</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>

            </div>

            {/* Right Column: Stats & Results */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Result Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-2 border-primary/20"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground">
                  The Outcome
                </h3>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {project.result || "Awaiting final impact analysis."}
                </p>
              </motion.div>

              {/* Stats Grid */}
              {project.stats && (
                <div className="grid grid-cols-2 gap-x-8 gap-y-8 py-8 border-y border-border/30">
                  {project.stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</span>
                        {stat.trend && (
                          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full uppercase">
                            {stat.trend}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm text-foreground/80 bg-secondary/30 px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <Button asChild variant="outline" className="w-full rounded-full h-12 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all group">
                   <a href="#book-call">
                     Start a Project Like This 
                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                   </a>
                </Button>
              </div>

            </div>
          </div>
        </section>

        <BookCall />
      </div>
    </Layout>
  );
};

export default ProjectDetail;
