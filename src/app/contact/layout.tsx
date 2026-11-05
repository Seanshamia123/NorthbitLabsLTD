import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Northbit Labs | Book a Discovery Call in Kenya",
  description:
    "Send Northbit Labs an enquiry, book a free 30-minute discovery call or meet us in person in Kajiado North, Kenya. We respond within 24 hours.",
  path: "/contact",
});

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
