import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/lib/schemas";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Vantalo - Free Strategy Call",
  description:
    "Book a free strategy call with Vantalo. Let's discuss how AI-powered social media, web development, and automation can grow your coaching or education business.",
  alternates: { canonical: "https://vantalo.in/contact" },
};

export default function ContactPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://vantalo.in" },
    { name: "Contact", url: "https://vantalo.in/contact" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-8 sm:pt-20">
        <Contact />
      </div>
    </>
  );
}
