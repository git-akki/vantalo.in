import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vantalo.in"),
  title: {
    default: "Vantalo | AI-Powered Marketing for Coaches & Educators",
    template: "%s | Vantalo",
  },
  description:
    "Vantalo is an AI-powered agency that builds unified growth systems for coaches and educators: social media management, conversion-focused web development, and AI automation agents.",
  keywords: [
    "AI social media agency for coaches",
    "web development for coaches",
    "AI automation agents",
    "social media management for educators",
    "marketing agency for coaches USA",
    "digital growth agency",
  ],
  authors: [{ name: "Akash Yadav" }],
  creator: "Vantalo",
  publisher: "Vantalo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vantalo.in",
    siteName: "Vantalo",
    title: "Vantalo | AI-Powered Marketing for Coaches & Educators",
    description:
      "We build unified growth systems: AI social media management, conversion-focused web development, and intelligent automation agents for coaches and educators.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vantalo_agency",
    title: "Vantalo | AI-Powered Marketing for Coaches & Educators",
    description:
      "AI-powered social media management, web development, and automation agents for coaches and educators.",
  },
  alternates: {
    canonical: "https://vantalo.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager - deferred to not block rendering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('load',function(){setTimeout(function(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV92DZMG');},100)});`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${jakarta.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV92DZMG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="pt-16">{children}</main>
          <StickyMobileCTA />
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
