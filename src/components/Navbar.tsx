import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookCall = () => {
    const element = document.getElementById("book-call");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // Add a small timeout to allow navigation to complete before trying to scroll
      // Or rely on the user scrolling down on home page. 
      // Ideally we would pass a state or hash, but simple navigation is a good start.
      setTimeout(() => {
        const el = document.getElementById("book-call");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      variants={fadeInUp as unknown as Variants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            Vantalo<span className="text-primary">.in</span>
          </Link>

          {/* Desktop Nav */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.div
                variants={fadeInUp as unknown as Variants}
                key={link.href}
              >
                <Link
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={fadeInUp as unknown as Variants}>
                <Button onClick={handleBookCall}>
                  Free Strategy Call
                </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button onClick={handleBookCall} className="w-full justify-center">
                  Free Strategy Call
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
