// Exponential ease-out: fast start, long soft landing.
export const smoothTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
};

// Short travel and no filter blur: blur on whole sections is expensive to
// paint and made long pages stutter while scrolling.
export const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: smoothTransition,
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};
