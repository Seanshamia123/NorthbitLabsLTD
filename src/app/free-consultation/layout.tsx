import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Free Consultation - Northbit Labs",
  description:
    "Book a free technology consultation with Northbit Labs. Get a clear, honest technology direction before you invest, for businesses in Kenya, East Africa, Africa, Europe and worldwide.",
  keywords: [
    "free consultation",
    "free technology consultation Kenya",
    "free IT consultation Africa",
    "technology audit Kenya",
    "AI readiness assessment",
    "book a consultation Northbit Labs",
  ],
  alternates: { canonical: "/free-consultation" },
  openGraph: {
    title: "Free Consultation - Northbit Labs",
    description:
      "Book a free technology consultation. A clear technology direction before you invest, for clients in Kenya, Africa, Europe and worldwide.",
    url: "/free-consultation",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Free Consultation - Northbit Labs" },
};

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd name="Free Consultation" path="/free-consultation" />
      {children}
    </>
  );
}
