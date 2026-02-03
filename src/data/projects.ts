export interface Project {
  slug: string;
  title: string;
  description: string;
  type: "social" | "website" | "automation";
  tags: string[];
  link: string;
  category: string;
  image?: string;
  stats?: { label: string; value: string; trend?: string }[];
  graphData?: { month: string; value: number }[];
  featured: boolean;
  problem?: string;
  solution?: string;
  benefits?: string[];
  result?: string;
}

export const projects: Project[] = [
  {
    slug: "hair-mastery",
    title: "Hair Mastery",
    description: "WordPress + Elementor learning platform with role-based instructor economy and Vimeo streaming.",
    type: "website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["WordPress", "Elementor", "LearnDash", "Vimeo", "Role-based"],
    link: "https://hair-mastery.com",
    featured: true,
    problem: "Hair Mastery needed a robust, roles-based education platform on WordPress. Off‑the‑shelf plugins couldn’t accurately track subscription user views or automate instructor earnings. The stack had to unify Elementor for design control, LearnDash for course delivery, Vimeo for secure streaming, and strict role‑based access for instructors and students.",
    solution: "We engineered a custom WordPress solution around LearnDash and Vimeo with granular role management. We built a proprietary plugin that tracks per‑subscriber views, normalizes watch metrics, and calculates instructor earnings automatically. Admins get transparent dashboards and exportable reports. The frontend is crafted with Elementor for fast iteration while preserving performance and security.",
    benefits: [
      "Accurate, auditable instructor earnings",
      "Granular role-based access control",
      "Secure Vimeo streaming with privacy controls",
      "Elementor-driven UI for rapid content iteration"
    ],
    result: "Our most advanced WordPress build to date: a scalable instructor economy with automated earnings, secure content delivery, and a clean editorial experience for the team."
  },
  {
    slug: "timeline-by-harsh",
    title: "Timeline by Harsh",
    description: "Viral short-form strategy that launched a personal brand.",
    type: "social",
    category: "Social Growth",
    tags: ["Viral Strategy", "Short-form"],
    link: "https://instagram.com/timelinebyharsh",
    stats: [
      { label: "Views", value: "5M+", trend: "3 Mos" },
      { label: "Growth", value: "Viral", trend: "Fast" }
    ],
    graphData: [
        { month: "M1", value: 100000 },
        { month: "M2", value: 1200000 },
        { month: "M3", value: 5000000 },
        { month: "M4", value: 5500000 },
        { month: "M5", value: 6200000 },
        { month: "M6", value: 7500000 },
    ],
    featured: true,
    problem: "In the saturated world of social media, standing out is harder than ever. Harsh wanted to build a personal brand but struggled to break through the algorithmic noise.\n\nThe challenge was not just about creating content, but creating *resonant* content that would trigger viral growth without compromising authenticity. He needed a strategy that would turn casual viewers into a loyal community.",
    solution: "We deconstructed the viral mechanics of short-form content. Our strategy focused on high-engagement storytelling—hooking the audience in the first 3 seconds and delivering value that compelled sharing.\n\nWe implemented a rigorous content calendar and used data-driven insights to refine the format week over week. By analyzing retention graphs, we optimized the editing style to maintain viewer attention throughout the video.",
    benefits: [
      "Millions of organic views",
      "Rapid follower growth",
      "High audience engagement",
      "Brand authority establishment"
    ],
    result: "Achieved over 5 million views in just 3 months, launching a successful personal brand."
  },
  {
    slug: "modom-grooming",
    title: "Modom Grooming",
    description: "New startup brought online end‑to‑end: WordPress + WooCommerce on Hostinger with customer and wholesale role‑based pricing.",
    type: "website",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["WordPress", "WooCommerce", "Hostinger", "Wholesale Roles"],
    link: "https://modomgrooming.com",
    featured: true,
    problem: "As a new startup, Modom Grooming needed to get online quickly with a store that supports both retail customers and wholesale buyers. They required role‑based pricing, simple operations on a budget host, and a clean buying experience that scales.",
    solution: "We launched a WordPress + WooCommerce store on Hostinger, configured customer and wholesale roles with tailored price lists, and streamlined catalog navigation. Payment, tax, and shipping rules were implemented end‑to‑end. The stack is optimized for Hostinger limits, ensuring fast page loads and reliable uptime without overspend.",
    benefits: [
      "Role-based pricing for customer and wholesale",
      "Clean product catalog and checkout",
      "Cost-efficient Hostinger optimization",
      "Operational simplicity with scalable workflows"
    ],
    result: "Rapid go‑live with a conversion‑ready store. Wholesale workflows unlocked new revenue channels while keeping retail UX simple and fast."
  },
  {
    slug: "hair-mastery-social",
    title: "Hair Mastery Social",
    description: "Organic growth strategy that built the brand. Zero to market leader.",
    type: "social",
    category: "Social Growth",
    tags: ["Organic", "Community"],
    link: "https://instagram.com/hair__mastery",
    stats: [
        { label: "Followers", value: "48k+", trend: "+2300%" },
        { label: "Reach", value: "1.2M", trend: "/mo" }
    ],
    graphData: [
        { month: "Jan", value: 2000 },
        { month: "Feb", value: 5500 },
        { month: "Mar", value: 12000 },
        { month: "Apr", value: 24000 },
        { month: "May", value: 38000 },
        { month: "Jun", value: 48000 },
    ],
    featured: true,
    problem: "Building a loyal community and brand authority on social media without relying on paid ads.",
    solution: "We executed an organic growth strategy centered around community engagement and consistent, high-value content.",
    benefits: [
      "Explosive organic follower growth",
      "High monthly reach",
      "Active and engaged community",
      "Established market leadership"
    ],
    result: " grew from zero to over 48k followers and 1.2M monthly reach, becoming a market leader purely through organic growth."
  },
  {
    slug: "salon-appointment-system",
    title: "Salon Appointment System",
    description: "Smart, automated booking system that saves time for barbers and clients.",
    type: "automation",
    category: "Business Automation",
    tags: ["Automation", "Booking", "SaaS"],
    link: "#",
    featured: false,
    problem: "Customers had to call or message to check availability, confirm pricing, and then wait — wasting time for both the customer and the salon.",
    solution: "We built a smart, automated appointment booking system that lets customers book instantly while giving salon owners full control.",
    benefits: [
      "24/7 online booking (no calls, no back-and-forth)",
      "Real-time availability for multiple barbers",
      "Automated confirmations & reminders",
      "Clear pricing before booking"
    ],
    result: "A smoother customer experience, fewer interruptions for barbers, and a calmer, more organized salon workflow."
  },
  {
    slug: "order-fulfillment-system",
    title: "Order Fulfillment System",
    description: "End-to-end automation connecting orders, inventory, and customer updates.",
    type: "automation",
    category: "E-Commerce Automation",
    tags: ["Automation", "Operations", "Scale"],
    link: "#",
    featured: false,
    problem: "Manual order handling, delayed updates, and missed follow-ups were slowing down operations and increasing errors.",
    solution: "We implemented an end-to-end order fulfillment automation that connects orders, inventory, and customer communication.",
    benefits: [
      "Automatic order processing after purchase",
      "Real-time order status updates for customers",
      "Reduced manual work and human error",
      "Scalable system that grows with order volume"
    ],
    result: "Faster fulfillment, happier customers, and a backend that runs reliably without constant manual effort."
  },
  {
    slug: "ai-subtitle-translator",
    title: "AI Subtitle Translator",
    description: "Batch translation tool converting course subtitles into 9 languages with context awareness.",
    type: "automation",
    category: "AI Tools",
    tags: ["AI", "Translation", "Education"],
    link: "#",
    featured: false,
    problem: "Translating course content manually is slow, expensive, and often lacks context.",
    solution: "Automation tool to translate course subtitles into 9 different languages in batch using context-aware AI.",
    benefits: [
      "Batch processing of entire course libraries",
      "Context-aware translation for technical accuracy",
      "Support for 9 major languages",
      "Drastic reduction in localization costs"
    ],
    result: "Global reach for course creators with minimal effort and high linguistic precision."
  }
];
