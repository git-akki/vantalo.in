import { motion, Variants, AnimatePresence } from "framer-motion";
import { Sparkles, X, Quote, Verified, Play, Heart, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { smoothTransition, fadeInUp } from "../utils/animations";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    role: "Founder, Hair Mastery",
    name: "Pablo Kuemin",
    image: "/img/Pablo-KueminXvantalo.jpeg",
    content: "Vantalo transformed our digital presence. From a custom e-learning platform to a social strategy that drove 48k+ organic followers, they built the entire ecosystem.",
    likes: "2.4k",
    comments: "142"
  },
  {
    role: "Founder, Modom Grooming",
    name: "Marco Netali",
    image: "/img/Marco netali x vantalo.jpg",
    content: "Our booking automation and website overhaul didn't just look good—it doubled our conversion rate in 30 days. They truly understand the business of grooming.",
    likes: "856",
    comments: "45"
  },
  {
    role: "Co-Founder, Hair Mastery",
    name: "Oliver Rust",
    image: "/img/oliver-rustxvantalo.jpg",
    content: "The technical execution of our education platform was flawless. They took our complex requirements and built a seamless, premium experience for our students.",
    likes: "1.2k",
    comments: "89"
  },
  {
    role: "Creator, Timeline",
    name: "Harsh",
    image: "/img/indian-boy-24.jpg",
    content: "I didn't just get a website, I got a brand. The viral strategy actually works. 5M views in 3 months.",
    likes: "12k",
    comments: "890"
  }
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-white/90 text-sm leading-relaxed font-medium font-mono">
      {displayedText}
      <span className="inline-block w-1.5 h-4 ml-1 bg-primary animate-pulse align-middle" />
    </p>
  );
};

const TestimonialCard = ({ data, index }: { data: typeof testimonials[0], index: number }) => {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...(fadeInUp.visible.transition as any),
            delay: index * 0.1
          }
        }
      }}
      className="relative min-w-[320px] h-[480px] bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl shrink-0 snap-center group select-none"
    >
      {/* Background Image */}
      <div className={`absolute inset-0 transition-all duration-500 ease-out ${showTranscript ? 'opacity-20 blur-md scale-105' : 'opacity-80 group-hover:scale-105'}`}>
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 transition-opacity duration-500 ${showTranscript ? 'opacity-90 bg-black/60' : 'opacity-100'}`} />

      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
        <div className="flex-1" />

        <button 
            onClick={() => setShowTranscript(!showTranscript)}
            className={`w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 ${
                showTranscript 
                ? 'bg-white/10 border-white/20 hover:bg-white/20' 
                : 'bg-black/40 border-white/10 hover:bg-black/60'
            }`}
        >
            {showTranscript ? (
                <X className="w-4 h-4 text-white" />
            ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary">
                    <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="18" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
            )}
        </button>
      </div>

      {/* Play Button Visual (Hinting it's a video/story) */}
      {!showTranscript && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
             <Play className="w-6 h-6 text-white fill-white ml-1" />
           </div>
        </div>
      )}

      {/* Content Area */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <AnimatePresence mode="wait">
            {showTranscript ? (
                <motion.div 
                    key="transcript"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="h-full flex flex-col justify-center"
                >
                    <TypewriterText text={data.content} />
                    <div className="mt-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                            {data.name[0]}
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-white text-sm font-bold">{data.name}</p>
                                <Verified className="w-3 h-3 text-primary" />
                            </div>
                            <p className="text-white/50 text-xs">{data.role}</p>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div 
                    key="info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                >
                   <div className="flex items-center gap-2">
                     <h3 className="text-2xl font-bold text-white leading-tight">{data.name}</h3>
                     <Verified className="w-4 h-4 text-primary" />
                   </div>
                   <p className="text-white/70 text-sm font-medium">{data.role}</p>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mb-12">
        <div className="flex items-end justify-between">
          <div className="max-w-xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
               <Heart className="w-3 h-3" />
               Wall of Love
             </div>
             <h2 className="text-4xl font-bold mb-4">
               Don't just take our <br/>
               <span className="text-muted-foreground">word for it.</span>
             </h2>
          </div>
          <div className="hidden md:flex gap-2">
            {/* Navigation buttons could go here */}
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 pb-12 px-6 md:px-[max(24px,calc((100vw-1280px)/2+24px))] snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} data={t} index={i} />
        ))}
        {/* Placeholder for "You Next?" */}
        <div 
          onClick={() => document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" })}
          className="relative min-w-[320px] h-[480px] rounded-3xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center gap-4 shrink-0 snap-center bg-primary/5 hover:bg-primary/10 transition-all duration-500 cursor-pointer group overflow-hidden"
        >
           <div className="flex flex-col items-center gap-4 group-hover:scale-95 transition-transform duration-500 delay-100">
             <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
               <span className="text-4xl">🚀</span>
             </div>
             <p className="text-2xl font-bold text-foreground">You're Next?</p>
             <p className="text-sm text-muted-foreground text-center max-w-[200px] leading-relaxed">Join the brands dominating their niche.</p>
           </div>

           {/* Hover CTA Overlay */}
           <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <button className="px-6 py-2.5 text-sm bg-primary text-primary-foreground font-bold rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                  Schedule Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
