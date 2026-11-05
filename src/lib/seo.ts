import type { Metadata } from "next";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Northbit Labs: software built around the way your business works.",
};

/**
 * Per-page metadata. Next.js merges metadata shallowly, so a page that sets
 * `openGraph` or `twitter` replaces the root layout's values entirely, including
 * the share image and site name. Every page goes through here to keep them.
 */
export function pageMetadata({
  title,
  description,
  path,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  /** Marks the page as an article (ISO 8601 date). */
  publishedTime?: string;
}): Metadata {
  const shared = {
    title,
    description,
    url: path,
    siteName: "Northbit Labs",
    locale: "en_KE",
    images: [OG_IMAGE],
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: publishedTime
      ? { ...shared, type: "article", publishedTime }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
