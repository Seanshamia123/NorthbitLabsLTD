import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free Technology Consultation in Kenya | Northbit Labs",
  description:
    "Book a free 30-minute technology consultation with Northbit Labs. Get an honest technology direction before you invest, in Kenya, Africa, Europe or worldwide.",
  path: "/free-consultation",
});

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
