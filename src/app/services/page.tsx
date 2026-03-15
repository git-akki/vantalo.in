import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/lib/schemas";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "AI Social Media, Web Development & Automation Services",
  description: "Explore Vantalo's unified growth services for coaches and educators: AI-powered social media management, conversion-first web development, and intelligent AI automation agents.",
  alternates: { canonical: "https://vantalo.in/services" },
  openGraph: {
    title: "AI Social Media, Web Development & Automation Services | Vantalo",
    description: "Unified growth services for coaches and educators: AI social media, web development, and automation.",
    url: "https://vantalo.in/services",
  },
};

export default function ServicesPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Services", url: "https://vantalo.in/services" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicesPageContent />
    </>
  );
}
