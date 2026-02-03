import { motion } from "framer-motion";

const brands = [
  { name: "Hair Mastery", logo: <HairMasteryLogo /> },
  { name: "Timeline", logo: <TimelineLogo /> },
  { name: "Modom", logo: <ModomLogo /> },
  { name: "Timeline Media", logo: <TimelineMediaLogo /> },
  { name: "Modom Swiss", logo: <ModomSwissLogo /> },
];

function HairMasteryLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-8 w-auto fill-current">
      <path d="M20 10 L20 50 M20 30 L50 30 M50 10 L50 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <text x="65" y="40" fontSize="24" fontFamily="serif" fontWeight="bold">HAIR MASTERY</text>
    </svg>
  );
}

function TimelineLogo() {
  return (
    <svg viewBox="0 0 180 60" className="h-8 w-auto fill-current">
      <circle cx="20" cy="30" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M20 23 L20 30 L25 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="45" y="38" fontSize="22" fontFamily="sans-serif" fontWeight="600" letterSpacing="-1">timeline</text>
    </svg>
  );
}

function ModomLogo() {
  return (
    <svg viewBox="0 0 160 60" className="h-8 w-auto fill-current">
      <path d="M10 45 L10 15 L25 35 L40 15 L40 45" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <text x="55" y="38" fontSize="26" fontFamily="sans-serif" fontWeight="900" letterSpacing="2">MODOM</text>
    </svg>
  );
}

function TimelineMediaLogo() {
  return (
    <svg viewBox="0 0 220 60" className="h-8 w-auto fill-current">
       <rect x="10" y="15" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
       <path d="M22 23 L32 30 L22 37 Z" fill="currentColor" />
       <text x="55" y="38" fontSize="20" fontFamily="sans-serif" fontWeight="600">Timeline Media</text>
    </svg>
  );
}

function ModomSwissLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-8 w-auto fill-current">
      <text x="10" y="38" fontSize="24" fontFamily="sans-serif" fontWeight="800">MODOM</text>
      <path d="M110 20 L110 40 M100 30 L120 30" stroke="currentColor" strokeWidth="4" />
      <text x="130" y="38" fontSize="20" fontFamily="sans-serif" fontWeight="300">SWISS</text>
    </svg>
  );
}

const Brands = () => {
  return (
    <section className="py-10 border-y border-border/40 bg-card/30 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:max-w-xs shrink-0">
            <p className="text-sm font-semibold text-foreground mb-1">
              Trusted by industry leaders
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              From local creators to global grooming brands.
            </p>
          </div>
          
          <div className="relative flex-1 overflow-hidden w-full mask-gradient-x">
            <motion.div
              className="flex items-center gap-16 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
              style={{ width: "max-content" }}
            >
              {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="text-muted-foreground/40 hover:text-primary transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
                  title={brand.name}
                >
                  {brand.logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      <style>{`
        .mask-gradient-x {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Brands;
