import { CONTACT } from "@/lib/data";

const BASE_URL = "https://northbitlabs.tech";

const SOCIAL = {
  instagram: "https://www.instagram.com/northbitlabs/",
  linkedinFounder: "https://www.linkedin.com/in/sean-paul-shamia-48a327333/",
};

/**
 * Site-wide structured data (JSON-LD), rendered once in the root layout <head>.
 * A @graph ties the Organization and WebSite together so search engines can
 * build a single rich knowledge-panel entry and surface the local business.
 */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${BASE_URL}/#organization`,
        name: "NorthBit Labs",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/icon-512.png`,
          contentUrl: `${BASE_URL}/icon-512.png`,
          width: 512,
          height: 512,
          caption: "NorthBit Labs",
        },
        image: { "@id": `${BASE_URL}/#logo` },
        description:
          "A technology firm that builds custom software designed around your business, applies AI to streamline your operations, and delivers measurable results. Based in Kenya.",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        sameAs: [SOCIAL.instagram],
        founder: {
          "@type": "Person",
          name: CONTACT.founder,
          jobTitle: CONTACT.founderTitle,
          sameAs: [SOCIAL.linkedinFounder],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.address,
          addressLocality: CONTACT.district,
          postalCode: CONTACT.postal,
          addressCountry: "KE",
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "Place", name: "East Africa" },
        ],
        knowsAbout: [
          "Custom Software Development",
          "AI Operations & Automation",
          "Technology Consulting",
          "Fintech & Payments",
          "Mpesa Integration",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "NorthBit Labs",
        description:
          "Custom software, AI operations and technology consulting for businesses in Kenya and East Africa.",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-KE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
