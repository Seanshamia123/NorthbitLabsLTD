import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact — NorthBit Labs",
  description:
    "Book a 30-minute discovery call or meet us in person in Kajiado North, Kenya. No pitch deck, no fluff — a clear technology direction for your business.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — NorthBit Labs",
    description:
      "Book a 30-minute discovery call or meet us in person in Kenya. No pitch deck, no fluff.",
    url: "/contact",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Contact — NorthBit Labs" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd name="Contact" path="/contact" />
      {children}
    </>
  );
}
