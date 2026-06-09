const BASE_URL = "https://northbitlabs.tech";

/**
 * BreadcrumbList structured data for an inner page (one level below Home).
 * Lets Google render a "northbitlabs.tech › Services" trail in the result.
 */
export default function BreadcrumbJsonLd({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name, item: `${BASE_URL}${path}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
