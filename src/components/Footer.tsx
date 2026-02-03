import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../utils/animations";

const Footer = () => {
  return (
    <footer id="site-footer" className="pt-8 pb-8 border-t border-border overflow-hidden relative">
      <div className="container relative z-10">
        <motion.div
          variants={fadeIn as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row items-center justify-end gap-4"
        >
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Free Strategy Call</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </motion.div>
      </div>

      {/* Large Typography */}
      <div className="w-full flex justify-center mt-12 select-none pointer-events-none opacity-30 relative">
        <span 
          className="text-[23vw] sm:text-[15vw] font-bold leading-[0.8] tracking-tighter text-transparent w-full text-center"
          style={{ 
            WebkitTextStroke: "1px hsl(var(--primary))",
          }}
        >
          Vantalo<span className="text-primary">.in</span>
        </span>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none" />

      {/* Bottom Links Row */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-6 border-t border-border/10">
        <div className="container">
          <div className="flex flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-muted-foreground/50 tracking-wide uppercase font-medium">
             <span>© {new Date().getFullYear()} Vantalo Agency</span>
             <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
