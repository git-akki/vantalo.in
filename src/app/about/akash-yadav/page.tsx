import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/lib/schemas";
import FounderProfile from "./FounderProfile";

export const metadata: Metadata = {
  title: "Akash Yadav - Founder & Lead Architect",
  description: "Akash Yadav is the founder of Vantalo, an AI-powered agency building growth systems for coaches and educators. Learn about his background, philosophy, and approach.",
  alternates: { canonical: "https://vantalo.in/about/akash-yadav" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Akash Yadav",
    jobTitle: "Founder & Lead Architect",
    worksFor: { "@type": "Organization", name: "Vantalo", url: "https://vantalo.in" },
    knowsAbout: ["AI Social Media Management", "Web Development", "AI Automation", "Growth Systems for Coaches"],
    sameAs: [
      "https://www.linkedin.com/in/akashyadav",
      "https://x.com/akashyadav",
      "https://www.instagram.com/akashyadav",
    ],
  },
};

export default function FounderPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "About", url: "https://vantalo.in/about" },
    { name: "Akash Yadav", url: "https://vantalo.in/about/akash-yadav" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <FounderProfile />
    </>
  );
}
