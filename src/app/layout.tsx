import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northbitlabs.tech"),
  title: "NorthBit Labs — Custom Software · AI Operations · Consulting",
  description:
    "A technology firm that builds custom software designed around your business, applies AI to streamline your operations, and delivers measurable results. Based in Kenya.",
  keywords: [
    "custom software Kenya",
    "software development Nairobi",
    "AI automation Kenya",
    "technology consulting Kenya",
    "fintech software CBK",
    "Mpesa integration",
    "NorthBit Labs",
  ],
  authors: [{ name: "NorthBit Labs" }],
  creator: "NorthBit Labs",
  publisher: "NorthBit Labs",
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
    title: "NorthBit Labs — Software Engineered North",
    description:
      "Custom software, AI operations and technology consulting for businesses in Kenya and East Africa.",
    url: "/",
    type: "website",
    locale: "en_KE",
    siteName: "NorthBit Labs",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NorthBit Labs — Software built around the way your business works.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthBit Labs — Software Engineered North",
    description:
      "Custom software, AI operations and technology consulting for businesses in Kenya and East Africa.",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
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
      <body style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
