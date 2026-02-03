import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section (approx 500px)
            const show = window.scrollY > 500;
            setIsVisible(show);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const footer = document.getElementById("site-footer");
        if (footer) {
            observer.observe(footer);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (footer) observer.unobserve(footer);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                isFooterVisible ? (
                    <motion.button
                        key="dial-cta"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/contact")}
                        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25"
                    >
                        <Calendar className="w-6 h-6" />
                    </motion.button>
                ) : (
                    <motion.div
                        key="bar-cta"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
                    >
                        <div className="flex items-center justify-between p-2 pl-5 bg-card/90 backdrop-blur-lg border border-primary/20 rounded-full shadow-xl shadow-primary/10">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-foreground">
                                    Let's build this.
                                </span>
                            </div>
                            <Button
                                onClick={() => navigate("/contact")}
                                className="rounded-full px-5 font-bold shadow-lg gap-2"
                            >
                                <Calendar className="w-4 h-4" />
                                Book Call
                            </Button>
                        </div>
                    </motion.div>
                )
            )}
        </AnimatePresence>
    );
};

export default StickyMobileCTA;
