import { motion, Variants } from "framer-motion";
import { Globe, Zap, Share2, ArrowRight, Bot, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Badge } from "./ui/badge";
import { SocialVisual, WebsiteVisual, AiVisual } from "./ServiceVisuals";
import { Link } from "react-router-dom";

const fadeInNoSlide: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const services = [
  {
    id: "social",
    icon: Share2,
    title: "Social Media",
    description: "Turn your presence into a media asset. Strategic narrative, high-velocity content, and community architecture.",
    visual: SocialVisual,
    link: "/services#social"
  },
  {
    id: "web",
    icon: Globe,
    title: "Website & Solution",
    description: "Conversion-first web systems. Immersive 3D experiences and funnel architecture that drives revenue.",
    visual: WebsiteVisual,
    link: "/services#web"
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Agent",
    description: "Scale without headcount. Intelligent agents for 24/7 lead qualification and workflow automation.",
    visual: AiVisual,
    link: "/services#ai"
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <motion.div
      variants={fadeInNoSlide}
      className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-primary/20 h-full"
    >
      {/* Visual Section - Top Half */}
      <div className="h-[280px] w-full bg-secondary/5 border-b border-border/50 relative overflow-hidden group-hover:bg-secondary/10 transition-colors">
        <service.visual />
        
        {/* Hover Reveal Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content Section - Bottom Half */}
      <div className="p-8 flex flex-col flex-1 relative">
        <div className="flex justify-between items-start mb-6">
           <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <service.icon className="w-6 h-6" />
           </div>
           
           <Link to={service.link} className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
           </Link>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed flex-1">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <Badge variant="outline" className="py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary rounded-full mb-6">
             <Zap className="w-3.5 h-3.5 mr-2 fill-primary/20" />
             Capabilities
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What We Help <span className="text-primary">You Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don’t treat social media and websites as separate things. 
            We design them as one connected growth engine.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer as unknown as Variants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.2 }}
           variants={fadeInUp as unknown as Variants}
           className="mt-16 text-center"
        >
           <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium group">
              View Full System Breakdown <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
