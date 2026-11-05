import { AGPO, CONTACT, SAMFCORE, SERVICES, SOCIAL } from "@/lib/data";

const BASE_URL = "https://northbitlabs.tech";

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
        name: "Northbit Labs",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/icon-512.png`,
          contentUrl: `${BASE_URL}/icon-512.png`,
          width: 512,
          height: 512,
          caption: "Northbit Labs",
        },
        image: { "@id": `${BASE_URL}/#logo` },
        description:
          "A technology firm that builds custom software designed around your business, applies AI to streamline your operations, and delivers measurable results. Based in Kenya and AGPO certified for government procurement.",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        sameAs: [SOCIAL.instagram, SOCIAL.x],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT.email,
          telephone: CONTACT.phone,
          url: `${BASE_URL}/contact`,
          availableLanguage: "English",
        },
        founder: {
          "@type": "Person",
          "@id": `${BASE_URL}/about#founder`,
          name: CONTACT.founder,
          jobTitle: CONTACT.founderTitle,
          url: `${BASE_URL}/about`,
          sameAs: [SOCIAL.linkedinFounder],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.streetAddress,
          addressLocality: CONTACT.locality,
          addressRegion: CONTACT.region,
          addressCountry: "KE",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Northbit Labs services",
          url: `${BASE_URL}/services`,
          itemListElement: [
            ...SERVICES.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                url: `${BASE_URL}/services#${service.id}`,
              },
            })),
            {
              "@type": "Offer",
              businessFunction: "http://purl.org/goodrelations/v1#Sell",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: SAMFCORE.name,
                applicationCategory: "FinanceApplication",
                url: SAMFCORE.url,
                author: { "@type": "Organization", name: SAMFCORE.owner },
              },
            },
          ],
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "Place", name: "East Africa" },
          { "@type": "Place", name: "Africa" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "Worldwide" },
        ],
        knowsAbout: [
          "Custom Software Development",
          "AI Operations & Automation",
          "Technology Consulting",
          "Fintech & Payments",
          "Mpesa Integration",
          "Government Procurement (AGPO)",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: `AGPO Certificate of Registration (${AGPO.category})`,
          description:
            "Access to Government Procurement Opportunities registration under the Public Procurement and Asset Disposal Act 2015.",
          credentialCategory: "Government procurement certification",
          identifier: AGPO.certificateNo,
          dateCreated: AGPO.issued,
          expires: AGPO.validUntil,
          url: AGPO.verifyUrl,
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "The National Treasury, Republic of Kenya",
            url: AGPO.verifyUrl,
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Northbit Labs",
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
