import { motion, Variants } from "framer-motion";
import { 
  Atom, 
  Layers, 
  FileCode, 
  Wind, 
  Server, 
  Terminal, 
  Database, 
  Flame, 
  Bot, 
  Workflow, 
  Link, 
  GitBranch, 
  Container, 
  PenTool
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

import { Badge } from "./ui/badge";

const skills = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    items: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Layers },
      { name: "TypeScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    category: "Backend",
    description: "Robust server-side logic and database management.",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Terminal },
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Flame },
    ],
  },
  {
    category: "AI & Automation",
    description: "Leveraging AI for intelligent workflows and agents.",
    items: [
      { name: "OpenAI API", icon: Bot },
      { name: "n8n", icon: Workflow },
      { name: "LangChain", icon: Link },
    ],
  },
  {
    category: "Tools",
    description: "Essential tools for development and design.",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Figma", icon: PenTool },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer as unknown as Variants}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp as unknown as Variants} className="mb-4">
            <Badge variant="soft" className="px-4 py-1.5 text-sm">
              Our Expertise
            </Badge>
          </motion.div>
          <motion.h2 
            variants={fadeInUp as unknown as Variants} 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Our <span className="text-primary">Tech Stack</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp as unknown as Variants} 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We use the latest technologies to build scalable, high-performance applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerContainer as unknown as Variants}
              custom={index}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div variants={fadeInUp as unknown as Variants} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{skillGroup.category}</h3>
                <p className="text-sm text-muted-foreground">{skillGroup.description}</p>
              </motion.div>

              <div className="space-y-4">
                {skillGroup.items.map((item) => (
                  <motion.div 
                    key={item.name}
                    variants={fadeInUp as unknown as Variants}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
