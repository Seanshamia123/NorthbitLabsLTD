import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NorthBit Labs",
    short_name: "NorthBit Labs",
    description:
      "Custom software, AI operations and technology consulting for businesses in Kenya and East Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F14",
    theme_color: "#0B0F14",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
