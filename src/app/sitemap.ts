import type { MetadataRoute } from "next";

const BASE_URL = "https://northbitlabs.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
    { path: "/work", changeFrequency: "weekly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
