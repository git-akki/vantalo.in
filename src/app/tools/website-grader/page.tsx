import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/lib/schemas";
import WebsiteGrader from "@/components/WebsiteGrader";

export const metadata: Metadata = {
  title: "Free Educator Website Grader — Score Your Site in 2 Minutes",
  description:
    "Is your educator website losing you students? Grade your coaching or course website across offer clarity, trust, conversion power, social proof, and technical health. Free instant audit with actionable recommendations.",
  alternates: { canonical: "https://vantalo.in/tools/website-grader" },
  keywords: [
    "educator website audit",
    "coaching website grader",
    "online course website checker",
    "free website audit tool",
    "course website optimization",
  ],
};

const websiteGraderSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Educator Website Grader",
  description:
    "Grade your educator or coaching website across 5 critical categories. Get a score, actionable recommendations, and know exactly what to fix to convert more students.",
  url: "https://vantalo.in/tools/website-grader",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "Vantalo",
    url: "https://vantalo.in",
  },
};

export default function WebsiteGraderPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Tools", url: "https://vantalo.in/tools/website-grader" },
    { name: "Website Grader", url: "https://vantalo.in/tools/website-grader" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteGraderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <WebsiteGrader />
    </>
  );
}
