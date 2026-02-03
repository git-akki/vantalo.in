import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Twitter, ArrowRight, Check, MessageSquare } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  company?: string;
}

/* Disposable / temp email domains */
const DISPOSABLE_EMAIL_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "trashmail.com",
  "getnada.com",
  "fakeinbox.com",
  "throwawaymail.com",
  "temp-mail.org",
  "maildrop.cc",
];

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@vantalo.in",
      href: "mailto:contact@vantalo.in",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Vantalo Agency",
      href: "https://www.linkedin.com/company/vantalo",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@vantalo_agency",
      href: "https://twitter.com/vantalo_agency",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const [isSent, setIsSent] = useState(false);

  /* Reset success state after 5 seconds */
  useEffect(() => {
    if (!isSent) return;
    const timer = setTimeout(() => setIsSent(false), 5000);
    return () => clearTimeout(timer);
  }, [isSent]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const emailDomain = data.email.split("@")[1]?.toLowerCase();

    /* Block disposable emails ONLY */
    if (emailDomain && DISPOSABLE_EMAIL_DOMAINS.includes(emailDomain)) {
      setError("email", {
        type: "manual",
        message: "Temporary email addresses are not allowed.",
      });
      return;
    }

    // Mock submission for demonstration
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'portfolio-form',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSent(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer as unknown as Variants}
          viewport={{ once: false, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Contact Info - Left Column */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp as unknown as Variants}>
              <Badge variant="outline" className="w-fit py-1.5 px-4 text-sm border-primary/20 bg-primary/5 text-primary mb-6">
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                Get in Touch
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                Let's architect your <br/><span className="text-primary">growth engine.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Whether you need a full system overhaul or a specific module implementation, we're ready to engineer your solution.
              </p>
            </motion.div>

              <div className="flex flex-col gap-6 pt-4">
                {contactLinks.map((link) => (
                  <motion.a
                    variants={fadeInUp as unknown as Variants}
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors duration-300">
                      <link.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{link.label}</p>
                      <p className="font-medium text-foreground text-sm flex items-center gap-2 group-hover:text-primary transition-colors">
                        {link.value}
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
          </div>

          {/* Contact Form - Right Column */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 p-8 shadow-2xl shadow-primary/5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                      Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">Name is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground/80">
                      Company <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="Company Ltd."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email.message || "Valid email is required"}</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell us about your project requirements..."
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">Message is required</span>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSent ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Message Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
