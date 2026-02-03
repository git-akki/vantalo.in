import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { DollarSign, Clock, Users, ArrowRight, Calculator, TrendingDown, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";

const RoiCalculator = () => {
    const [teamSize, setTeamSize] = useState([3]);
    const [hoursPerWeek, setHoursPerWeek] = useState([10]);
    const [hourlyRate, setHourlyRate] = useState([35]);
    
    // Logic: Calculate cost of manual work vs automation
    const weeklyCost = teamSize[0] * hoursPerWeek[0] * hourlyRate[0];
    const yearlyCost = weeklyCost * 52;
    const projectedCost = yearlyCost * 0.2; // Assuming 80% efficiency gain
    const potentialSavings = yearlyCost - projectedCost;

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Left Column: Input Panel */}
                    <div className="space-y-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp as unknown as Variants}
                            viewport={{ once: false }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Calculator className="w-4 h-4" />
                                <span>ROI Analysis</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                                The Cost of Inefficiency
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                                Quantify the financial impact of manual workflows and discover your potential savings with autonomous systems.
                            </p>
                        </motion.div>

                        <motion.div
                             variants={staggerContainer as unknown as Variants}
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: false }}
                             className="space-y-8"
                        >
                            {/* Team Size */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 font-medium text-foreground">
                                        <Users className="w-4 h-4 text-primary" /> Team Size
                                    </label>
                                    <span className="font-mono text-lg font-bold bg-secondary/50 px-4 py-1.5 rounded-lg border border-border/50">
                                        {teamSize[0]} <span className="text-muted-foreground text-sm font-normal">members</span>
                                    </span>
                                </div>
                                <Slider
                                    value={teamSize}
                                    onValueChange={setTeamSize}
                                    max={20}
                                    min={1}
                                    step={1}
                                    className="py-2"
                                />
                            </div>

                            {/* Hours */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 font-medium text-foreground">
                                        <Clock className="w-4 h-4 text-primary" /> Hours / Week
                                    </label>
                                    <span className="font-mono text-lg font-bold bg-secondary/50 px-4 py-1.5 rounded-lg border border-border/50">
                                        {hoursPerWeek[0]} <span className="text-muted-foreground text-sm font-normal">hours</span>
                                    </span>
                                </div>
                                <Slider
                                    value={hoursPerWeek}
                                    onValueChange={setHoursPerWeek}
                                    max={40}
                                    min={1}
                                    step={1}
                                    className="py-2"
                                />
                                <p className="text-xs text-muted-foreground ml-1">Time spent on repetitive, manual tasks per person.</p>
                            </div>
                            
                            {/* Hourly Rate */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 font-medium text-foreground">
                                        <DollarSign className="w-4 h-4 text-primary" /> Hourly Cost
                                    </label>
                                    <span className="font-mono text-lg font-bold bg-secondary/50 px-4 py-1.5 rounded-lg border border-border/50">
                                        ${hourlyRate[0]} <span className="text-muted-foreground text-sm font-normal">/hr</span>
                                    </span>
                                </div>
                                <Slider
                                    value={hourlyRate}
                                    onValueChange={setHourlyRate}
                                    max={150}
                                    min={15}
                                    step={5}
                                    className="py-2"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visualizer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="lg:pl-8"
                    >
                        <Card className="border-border shadow-sm bg-card rounded-3xl overflow-hidden relative">
                            <CardHeader className="pb-2 pt-8 px-8">
                                <CardTitle className="text-xl font-medium text-muted-foreground">Projected Annual Savings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-10 px-8 pb-8">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
                                            {formatCurrency(potentialSavings)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                        <TrendingDown className="w-4 h-4" />
                                        80% Efficiency Gain
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {/* Manual Cost Bar */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-muted-foreground">Current Manual Cost</span>
                                            <span className="font-mono font-medium">{formatCurrency(yearlyCost)}/yr</span>
                                        </div>
                                        <div className="h-3 bg-secondary rounded-full overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-foreground/20 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>

                                    {/* System Cost Bar */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-muted-foreground flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-primary" /> Vantalo System Cost
                                            </span>
                                            <span className="font-mono font-medium">{formatCurrency(projectedCost)}/yr</span>
                                        </div>
                                        <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
                                            <motion.div 
                                                className="h-full bg-primary rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "20%" }} // 20% of the manual cost
                                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                            />
                                            {/* Comparison Line */}
                                            <div className="absolute top-0 bottom-0 left-[20%] w-px bg-foreground/20 border-l border-dashed border-foreground/50 h-full" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-0 pt-4 border-t border-border flex items-start gap-3">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        By replacing manual admin work with autonomous agents, you could recover <span className="text-foreground font-semibold">{formatCurrency(potentialSavings)}</span> annually to reinvest in growth.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 pt-0">
                                <Button
                                    size="lg"
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    className="w-full transition-all group"
                                >
                                    Start Your Transformation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RoiCalculator;
