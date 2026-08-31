const BASE_URL = "https://northbitlabs.tech";

/**
 * BreadcrumbList structured data for an inner page (one level below Home).
 * Lets Google render a "northbitlabs.tech › Services" trail in the result.
 */
export default function BreadcrumbJsonLd({
  name,
  path,
  parent,
}: {
  name: string;
  path: string;
  parent?: { name: string; path: string };
}) {
  const trail = [
    { name: "Home", path: "" },
    ...(parent ? [parent] : []),
    { name, path },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
