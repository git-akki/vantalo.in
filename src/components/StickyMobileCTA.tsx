"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const router = useRouter();

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

        window.addEventListener("scroll", handleScroll, { passive: true });
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
                        aria-label="Book a call"
                        onClick={() => router.push("/contact")}
                        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_12px_24px_-10px_hsl(var(--primary)/0.55)]"
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
                        <div className="flex items-center justify-between p-2 pl-5 bg-card/95 backdrop-blur-lg border border-border rounded-full shadow-[0_16px_40px_-16px_hsl(45_14%_7%/0.35)]">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-foreground">
                                    Let's build this.
                                </span>
                            </div>
                            <Button
                                onClick={() => router.push("/contact")}
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
