import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/lib/schemas";
import WorkPageContent from "./WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work - AI Social Media, Web Development & Automation Projects",
  description: "Explore Vantalo's portfolio of AI-powered social media campaigns, conversion-focused websites, and business automation projects for coaches and educators.",
  alternates: { canonical: "https://vantalo.in/work" },
};

export default function WorkPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Our Work", url: "https://vantalo.in/work" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <WorkPageContent />
    </>
  );
}
