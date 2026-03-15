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
    problem: "Hair Mastery had a premium education product but zero social media presence. In the competitive beauty education space, they needed to build brand authority from scratch without spending on paid ads.\n\nThe challenge was two-fold: first, create content that would resonate with both aspiring hairstylists and salon owners. Second, build a community that would become a self-sustaining referral engine for their courses.",
    solution: "We developed a comprehensive organic growth strategy built around three pillars: educational content that showcased instructor expertise, community engagement that turned followers into advocates, and data-driven posting optimization.\n\nWe analyzed competitor content, identified gaps in the education space, and created a content calendar that balanced educational value with entertainment. Each week we refined our approach based on engagement metrics, doubling down on formats that drove saves and shares.",
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
    problem: "The salon was losing customers to competitors with online booking. Clients had to call or message to check availability, confirm pricing, and then wait for a response. During peak hours, calls went unanswered. The salon owner estimated they were losing 15-20 potential bookings per week to this friction.\n\nBarbers were constantly interrupted mid-service to answer calls, reducing service quality and creating scheduling conflicts.",
    solution: "We built a smart, automated appointment booking system that lets customers book instantly while giving salon owners full control. The system shows real-time availability for each barber, displays service pricing upfront, and sends automated confirmation and reminder messages.\n\nWe integrated the booking system with the salon's existing workflow, adding a dashboard for barbers to manage their schedules and an admin panel for the owner to track revenue, peak hours, and no-show rates.",
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
    problem: "The e-commerce operation was growing faster than the team could handle manually. Order confirmations were delayed, inventory counts were often wrong, and customer follow-ups were inconsistent. During sales events, the bottleneck became critical — orders were missed, customers got frustrated, and the team worked overtime.\n\nThe owner needed a system that could scale with order volume without scaling headcount.",
    solution: "We implemented an end-to-end order fulfillment automation that connects the storefront, inventory management, shipping, and customer communication into a single automated pipeline.\n\nWhen a customer places an order, the system automatically confirms the purchase, updates inventory counts, generates shipping labels, and sends tracking updates. If stock runs low, it alerts the team. Post-delivery, it triggers a review request and a follow-up offer — all without manual intervention.",
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
    problem: "A course creator with 50+ hours of video content needed to reach international students but faced a massive localization bottleneck. Professional translation services quoted $15,000+ and 8 weeks for just 3 languages. Generic auto-translation tools produced inaccurate results, especially for technical terminology specific to the course material.\n\nThe creator needed a solution that was fast, affordable, and actually understood the context of their educational content.",
    solution: "We built a custom AI-powered batch translation tool that processes entire course libraries. Unlike generic translation APIs, our tool first analyzes the course content to build a domain-specific glossary, ensuring technical terms are translated consistently and accurately.\n\nThe system processes subtitle files in batch, supports 9 major languages (English, Spanish, French, German, Portuguese, Hindi, Arabic, Mandarin, Japanese), and includes a review interface where the creator can approve or edit translations before publishing.",
    benefits: [
      "Batch processing of entire course libraries",
      "Context-aware translation for technical accuracy",
      "Support for 9 major languages",
      "Drastic reduction in localization costs"
    ],
    result: "Global reach for course creators with minimal effort and high linguistic precision."
  }
];
