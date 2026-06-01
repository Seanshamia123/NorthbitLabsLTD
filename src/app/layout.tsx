import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "NorthBit Labs — Software Engineered North",
    description:
      "Custom software, AI operations and technology consulting for businesses in Kenya and East Africa.",
    type: "website",
    locale: "en_KE",
    siteName: "NorthBit Labs",
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
      </head>
      <body style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <Script
        id="apollo-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6a06d2f8a53cf7000df498a1"})},document.head.appendChild(o)}initApollo();`,
        }}
      />
    </html>
  );
}
