import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/lib/schemas";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Vantalo - AI-Powered Digital Growth Agency",
  description: "Meet the team behind Vantalo. Founded by Akash Yadav, we engineer unified growth systems for coaches and educators combining AI social media, web development, and automation.",
  alternates: { canonical: "https://vantalo.in/about" },
};

export default function AboutPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "About", url: "https://vantalo.in/about" },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AboutPageContent />
    </>
  );
}
