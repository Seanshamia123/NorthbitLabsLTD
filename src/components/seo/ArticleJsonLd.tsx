const BASE_URL = "https://northbitlabs.tech";

export default function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${BASE_URL}/insights/${slug}`,
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Organization", name: author, url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Northbit Labs",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-512.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/insights/${slug}` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
