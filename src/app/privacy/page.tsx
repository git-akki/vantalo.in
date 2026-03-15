import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vantalo Agency.",
  alternates: { canonical: "https://vantalo.in/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last updated: March 2026</p>
        <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, email, and message when you use our contact form or book a strategy call. We also collect anonymous usage data through Vercel Speed Insights.</p>
        <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
        <p>We use your information to respond to inquiries, provide our services, improve our website, and send relevant communications if you have opted in.</p>
        <h2 className="text-xl font-semibold text-foreground">3. Data Sharing</h2>
        <p>We do not sell your personal information. We may share data with service providers (hosting, email) who assist in operating our business, bound by confidentiality agreements.</p>
        <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
        <p>We use essential cookies for website functionality and analytics cookies to understand usage patterns. You can control cookies through your browser settings.</p>
        <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at <a href="/contact" className="text-primary hover:underline">vantalo.in/contact</a> to exercise these rights.</p>
        <h2 className="text-xl font-semibold text-foreground">6. Contact</h2>
        <p>For privacy-related questions, contact us at <a href="/contact" className="text-primary hover:underline">vantalo.in/contact</a>.</p>
      </div>
    </div>
  );
}
