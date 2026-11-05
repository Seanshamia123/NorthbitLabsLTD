const BASE_URL = "https://northbitlabs.tech";

export default function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author,
  authorUrl,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  /** Defaults to datePublished - pass this explicitly once a post is actually edited post-publish. */
  dateModified?: string;
  author: string;
  /** A named author (Person) with a bio URL earns more trust than an Organization byline. */
  authorUrl?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${BASE_URL}/insights/${slug}`,
    image: `${BASE_URL}/opengraph-image`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: authorUrl
      ? { "@type": "Person", name: author, url: authorUrl }
      : { "@type": "Organization", name: author, url: BASE_URL },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/insights/${slug}` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
