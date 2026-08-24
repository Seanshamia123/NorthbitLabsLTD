import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";

const clashGrotesk = localFont({
  src: [
    { path: "../fonts/ClashGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashGrotesk-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://northbitlabs.tech"),
  title: "Northbit Labs — Custom Software · AI Operations · Consulting",
  description:
    "A technology firm that builds custom software designed around your business, applies AI to streamline your operations, and delivers measurable results. Based in Kenya, serving clients across Africa, Europe and worldwide.",
  keywords: [
    // Brand
    "Northbit Labs",
    // Custom software — geo variants
    "custom software Kenya",
    "custom software development Africa",
    "custom software development East Africa",
    "custom software company Nairobi",
    "software development company Kenya",
    "bespoke software development Europe",
    "custom software development company",
    // AI operations / automation — geo variants
    "AI automation Kenya",
    "AI automation Africa",
    "AI-powered operations East Africa",
    "business process automation Kenya",
    "AI consulting company",
    // Technology consulting — geo variants
    "technology consulting Kenya",
    "technology consulting Africa",
    "IT consulting East Africa",
    "technology audit Nairobi",
    "AI readiness assessment",
    // Fintech / payments
    "fintech software CBK",
    "fintech software development Africa",
    "Mpesa integration",
    "payment integration Kenya",
    // Web, mobile, cloud
    "web development Kenya",
    "mobile app development Kenya",
    "mobile app development Africa",
    "cloud and DevOps consulting Kenya",
    // Broader reach
    "software development company East Africa",
    "software outsourcing Kenya",
    "technology partner for startups Africa",
    "IT staff augmentation Kenya",
  ],
  authors: [{ name: "Northbit Labs" }],
  creator: "Northbit Labs",
  publisher: "Northbit Labs",
  alternates: {
    canonical: "/",
  },
  // Icons are resolved from the app-directory file conventions:
  // app/favicon.ico, app/icon.svg, app/apple-icon.png — no manual links needed.
  // Google Search Console verification. Set GOOGLE_SITE_VERIFICATION in the
  // deployment env; the meta tag is omitted entirely when it's not set.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: "Northbit Labs — Software Engineered North",
    description:
      "Custom software, AI operations and technology consulting for businesses in Kenya, East Africa, and clients across Africa, Europe and the world.",
    url: "/",
    type: "website",
    locale: "en_KE",
    siteName: "Northbit Labs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Northbit Labs — Software built around the way your business works.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbit Labs — Software Engineered North",
    description:
      "Custom software, AI operations and technology consulting for businesses in Kenya, East Africa, and clients across Africa, Europe and the world.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-KE"
      className={`${clashGrotesk.variable} ${satoshi.variable}`}
    >
      <head>
        {/* Kill React DevTools in production — prevents component-tree inspection */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var h=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(h){h.isDisabled=true;h.inject=function(){};h.supportsFiber=false;}else{window.__REACT_DEVTOOLS_GLOBAL_HOOK__={isDisabled:true,inject:function(){},supportsFiber:false,renderers:new Map()};}})();`,
            }}
          />
        )}
        <JsonLd />
      </head>
      <body style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif" }}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-16N31NC7BL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-16N31NC7BL');`}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "y7jd0es8om");`}
        </Script>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
