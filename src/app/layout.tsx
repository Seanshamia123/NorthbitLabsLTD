import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/ui/CookieConsent";
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
  title: "Northbit Labs · Custom Software · AI Operations · Consulting",
  description:
    "A technology firm that builds custom software designed around your business, applies AI to streamline your operations, and delivers measurable results. Based in Kenya, serving clients across Africa, Europe and worldwide.",
  // The meta keywords tag has had no effect on Google ranking since 2009 and
  // carries no weight with AI answer engines either — they read page content,
  // not this list. Kept short for the few crawlers that still glance at it;
  // real targeting now lives in on-page copy, FAQ schema and /insights.
  keywords: [
    "Northbit Labs",
    "custom software development Kenya",
    "AI automation Kenya",
    "technology consulting Kenya",
    "fintech software CBK",
    "Mpesa integration",
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
    title: "Northbit Labs - Software Engineered North",
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
        alt: "Northbit Labs: software built around the way your business works.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbit Labs - Software Engineered North",
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
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SmoothScroll />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* GA4 + Microsoft Clarity only load after the visitor accepts the cookie banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
