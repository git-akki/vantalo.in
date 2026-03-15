import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Vantalo Agency.",
  alternates: { canonical: "https://vantalo.in/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-24">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last updated: March 2026</p>
        <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
        <p>By accessing and using vantalo.in, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
        <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
        <p>Vantalo provides AI-powered social media management, web development, and AI automation services. Specific deliverables, timelines, and pricing are defined in individual project agreements.</p>
        <h2 className="text-xl font-semibold text-foreground">3. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and software, is the property of Vantalo Agency and is protected by intellectual property laws. Client work ownership is transferred upon full payment as defined in project agreements.</p>
        <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
        <p>Vantalo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>
        <h2 className="text-xl font-semibold text-foreground">5. Contact</h2>
        <p>For questions about these terms, contact us at <a href="/contact" className="text-primary hover:underline">vantalo.in/contact</a>.</p>
      </div>
    </div>
  );
}
