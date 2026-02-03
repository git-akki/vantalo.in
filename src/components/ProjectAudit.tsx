import { useState } from "react";
import { CheckCircle2, ArrowRight, Target, MonitorSmartphone, Cpu, Sparkles, Activity, AlertCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type ServiceType = "social" | "web" | "ai";

const services = [
    { id: "social" as ServiceType, label: "Social Media", icon: Target },
    { id: "web" as ServiceType, label: "Website & Solution", icon: MonitorSmartphone },
    { id: "ai" as ServiceType, label: "AI Automation", icon: Cpu },
];

const checklists: Record<ServiceType, string[]> = {
    social: [
        "I have a validated Ideal Customer Profile (ICP).",
        "I have dedicated capital for content velocity & acquisition.",
        "I am prepared for high-frequency, consistent market signaling.",
        "I possess a cohesive brand identity and visual system.",
        "I aim to cultivate a loyal ecosystem, not just vanity metrics."
    ],
    web: [
        "I have a strategic information architecture map.",
        "I have premium assets and copy aligned with my value prop.",
        "I have defined specific conversion events and KPIs.",
        "I require a cross-device, performance-optimized UX.",
        "I need full-spectrum telemetry and behavioral analytics."
    ],
    ai: [
        "I have identified bottlenecks in my operational topology.",
        "I have proprietary data ready for context-aware training.",
        "I have mapped out deterministic logic for the workflow.",
        "I aim for zero-latency responses and autonomous execution.",
        "I am ready to iterate on the agent's feedback loop."
    ]
};

const ProjectAudit = () => {
    const [selectedService, setSelectedService] = useState<ServiceType>("social");
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

    const currentChecklist = checklists[selectedService];
    
    // Derived state
    const score = Object.values(checkedItems).filter(Boolean).length;
    const maxScore = currentChecklist.length;
    const percentage = Math.round((score / maxScore) * 100);
    
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const toggleItem = (index: number) => {
        setCheckedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleServiceChange = (serviceId: ServiceType) => {
        if (selectedService === serviceId) return;
        setSelectedService(serviceId);
        setCheckedItems({});
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Micro-elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeInUp as unknown as Variants}
                    className="text-center mb-12 space-y-4">
                    <Badge variant="outline" className="mb-4 py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary">
                        <Activity className="w-3 h-3 mr-2" />
                        System Diagnostics
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Pre-Flight <span className="text-primary">Check</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Configure your project parameters below to run a compatibility diagnostic.
                    </p>
                </motion.div>

                {/* Custom Tabs */}
                <motion.div 
                    variants={fadeInUp as unknown as Variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="flex justify-center mb-16"
                >
                    <div className="inline-flex p-1 bg-secondary/30 backdrop-blur-sm rounded-full border border-border/50">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => handleServiceChange(service.id)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                                    selectedService === service.id 
                                        ? "text-primary-foreground" 
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {selectedService === service.id && (
                                    <motion.div
                                        layoutId="auditActiveTab"
                                        className="absolute inset-0 bg-primary rounded-full shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <service.icon className="w-4 h-4 relative z-10" />
                                <span className="relative z-10">{service.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
                    {/* Column 1: Input Parameters (Checklist) */}
                    <div className="order-2 lg:order-1">
                        <div className="mb-6 flex items-center justify-between">
                             <h3 className="text-xl font-semibold flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-xs font-mono text-muted-foreground">1</span>
                                Input Parameters
                             </h3>
                             <span className="text-xs font-mono text-muted-foreground">SELECT MATCHES</span>
                        </div>
                        
                        <motion.div
                            key={`checklist-${selectedService}`}
                            variants={staggerContainer as unknown as Variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {currentChecklist.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp as unknown as Variants}
                                    className="w-full"
                                >
                                    <button
                                        type="button"
                                        role="checkbox"
                                        aria-checked={!!checkedItems[index]}
                                        onClick={() => toggleItem(index)}
                                        className={`w-full text-left flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-[background-color,border-color,box-shadow,transform] duration-200 group relative overflow-hidden ${checkedItems[index]
                                            ? "bg-primary/5 border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.1)] translate-x-2"
                                            : "bg-card border-border hover:border-primary/30 hover:bg-secondary/20 hover:translate-x-1"
                                            }`}
                                    >
                                        {checkedItems[index] && (
                                            <motion.div 
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: 1 }}
                                                className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-bottom"
                                            />
                                        )}
                                        <div className={`shrink-0 w-5 h-5 mt-0.5 rounded border flex items-center justify-center transition-colors duration-200 ${checkedItems[index] 
                                            ? "bg-primary border-primary" 
                                            : "border-muted-foreground/50 group-hover:border-primary/50"
                                            }`}>
                                            {checkedItems[index] && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                                                </motion.div>
                                            )}
                                        </div>
                                        <span className={`text-base leading-tight transition-colors duration-200 ${checkedItems[index] ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground/80"}`}>
                                            {item}
                                        </span>
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Column 2: Diagnostic Output (Score) */}
                    <div className="order-1 lg:order-2 lg:sticky lg:top-24">
                         <div className="mb-6 flex items-center justify-between">
                             <h3 className="text-xl font-semibold flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-xs font-mono text-muted-foreground">2</span>
                                Diagnostic Output
                             </h3>
                             <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${score >= 3 ? 'bg-green-400' : 'bg-yellow-400'}`}></span>
                                  <span className={`relative inline-flex rounded-full h-2 w-2 ${score >= 3 ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                </span>
                                <span className="text-xs font-mono text-muted-foreground uppercase">{score >= 3 ? 'ONLINE' : 'STANDBY'}</span>
                             </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedService}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="relative flex flex-col items-center justify-center p-8 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
                            >
                                {/* Tech Lines Background */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                                </div>

                                <div className="relative w-56 h-56 flex items-center justify-center mb-8">
                                    {/* Outer Ring */}
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border border-secondary/20 border-dashed" 
                                    />
                                    
                                    {/* Glow */}
                                    <div className={`absolute inset-0 bg-primary/10 blur-3xl rounded-full transition-opacity duration-500 ${percentage > 0 ? 'opacity-100' : 'opacity-0'}`} />
                                    
                                    <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 240 240">
                                        <circle
                                            cx="120"
                                            cy="120"
                                            r={radius}
                                            fill="transparent"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            className="text-secondary/30"
                                        />
                                        <motion.circle
                                            cx="120"
                                            cy="120"
                                            r={radius}
                                            fill="transparent"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            strokeLinecap="round"
                                            className={score >= 3 ? "text-primary" : "text-primary/50"}
                                            strokeDasharray={circumference}
                                            initial={{ strokeDashoffset: circumference }}
                                            animate={{ strokeDashoffset }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />
                                    </svg>
                                    
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                        <motion.div 
                                            key={percentage}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex flex-col items-center justify-center pt-2"
                                        >
                                            <span className="text-5xl font-bold tracking-tighter text-foreground leading-none">
                                                {percentage}%
                                            </span>
                                            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-1">
                                                Compatibility
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="text-center w-full relative z-10">
                                    <div className="min-h-[80px] mb-6">
                                        <motion.div
                                            key={`status-${score >= 3}`}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-2"
                                        >
                                            <h4 className={`text-lg font-bold flex items-center justify-center gap-2 ${score >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                                                {score >= 3 ? (
                                                    <>
                                                        <ShieldCheck className="w-5 h-5" />
                                                        System Ready
                                                    </>
                                                ) : (
                                                    <>
                                                        <AlertCircle className="w-5 h-5" />
                                                        Awaiting Input
                                                    </>
                                                )}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {score >= 3
                                                    ? "Parameters verified. Infrastructure alignment confirmed. Ready for protocol initiation."
                                                    : "Please select matching criteria to verify system compatibility."}
                                            </p>
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {score >= 3 ? (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="w-full"
                                            >
                                                <Button
                                                    size="lg"
                                                    onClick={scrollToContact}
                                                    className="w-full py-6 rounded-xl font-bold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group relative overflow-hidden"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                                        Initialize Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="h-14 flex items-center justify-center text-xs font-mono text-muted-foreground/50 bg-secondary/20 rounded-xl border border-dashed border-border/50"
                                            >
                                                [ WAITING FOR USER INPUT ]
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectAudit;
