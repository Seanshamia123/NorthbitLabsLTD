import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import { CONTACT } from "@/lib/data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const LAST_UPDATED = "2 September 2026";

export const metadata = {
  title: "Privacy Policy - Northbit Labs",
  description: "How Northbit Labs collects, uses and protects information from visitors to northbitlabs.tech.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy - Northbit Labs",
    description: "How Northbit Labs collects, uses and protects information from visitors to northbitlabs.tech.",
    url: "/privacy",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Privacy Policy - Northbit Labs" },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "clamp(20px,2.3vw,26px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#0B0F14", margin: "44px 0 16px" }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.75, marginBottom: 18, maxWidth: "70ch" }}>
      {children}
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Privacy Policy" path="/privacy" />

      {/* HERO */}
      <section className="section--ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(72px,10vw,132px) 0 clamp(56px,6vw,88px)", overflow: "hidden", position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative", maxWidth: 800 }}>
          <div style={{ marginBottom: 20 }}>
            <HeroReveal
              delay={0.06}
              h1Style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05 }}
              lines={["Privacy Policy"]}
            />
          </div>
          <FadeUp delay={0.3}>
            <p style={{ fontSize: 14, color: "#8A919C" }}>Last updated {LAST_UPDATED}</p>
          </FadeUp>
        </div>
      </section>

      {/* BODY */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <Reveal>
            <article>
              <P>
                Northbit Labs (&ldquo;Northbit Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates northbitlabs.tech. This policy explains what
                information we collect from visitors to this website, why we collect it, and the choices you have. It
                covers the website itself, not any separate, signed engagement or contract you enter into with us for
                software, AI or consulting services.
              </P>

              <H2>Information you provide directly</H2>
              <P>
                When you use the Contact or Free Consultation forms, we collect the fields you fill in: your name, email
                address, and message, plus company and phone number where those fields are offered. This is sent to us by
                email through our transactional email provider, Resend, so we can respond to your enquiry. If you email us
                directly or message us on WhatsApp, we receive whatever you choose to send us there instead.
              </P>

              <H2>Information collected automatically</H2>
              <P>
                If you accept analytics cookies through the banner on this site, we use Google Analytics 4 and Microsoft
                Clarity to understand how visitors use northbitlabs.tech: pages viewed, approximate location derived from
                your IP address, device and browser type, referring site, and session recordings or click/scroll behaviour
                (Clarity). Neither tool loads, and no analytics cookie is set, unless you accept. You can change your
                choice at any time using &ldquo;Cookie Preferences&rdquo; in the footer, or by clearing your browser&apos;s stored
                site data. See{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="inline-link">
                  Google&apos;s Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="inline-link">
                  Microsoft&apos;s Privacy Statement
                </a>{" "}
                for how each of them handles data.
              </P>

              <H2>How we use this information</H2>
              <P>
                We use what you send us to respond to your enquiry, evaluate whether we&apos;re a fit for your project, and
                deliver the free consultation or discovery call you requested. Accepted analytics data is used only to
                understand and improve the site. We do not sell personal information, and we do not use it for automated
                decision-making that produces legal or similarly significant effects on you.
              </P>

              <H2>How we share information</H2>
              <P>
                We share information only with service providers who help us run this website and respond to you: Resend
                (email delivery), Google (Analytics, if accepted) and Microsoft (Clarity, if accepted), and our hosting and
                infrastructure providers. Each processes data only as needed to provide their service to us. We may also
                disclose information if required by law. We do not sell personal information to anyone.
              </P>

              <H2>Data retention</H2>
              <P>
                Enquiries sent through our forms are kept as long as needed to respond to you and for our own business
                records, then deleted or anonymised once no longer needed. Analytics data, where accepted, is retained
                according to each provider&apos;s standard settings, described in the policies linked above.
              </P>

              <H2>Your rights</H2>
              <P>
                Under Kenya&apos;s Data Protection Act, 2019, and, where applicable, the EU General Data Protection Regulation
                (GDPR), you may have the right to access the personal data we hold about you, request correction or
                deletion, object to or restrict certain processing, request a copy of your data, and withdraw cookie
                consent at any time. To exercise any of these, contact us at{" "}
                <a href={`mailto:${CONTACT.email}`} className="inline-link">{CONTACT.email}</a>. Kenyan residents may also
                lodge a complaint with the Office of the Data Protection Commissioner (ODPC); EU residents may contact
                their local supervisory authority.
              </P>

              <H2>Children&apos;s privacy</H2>
              <P>
                This site is not directed at children under 16, and we do not knowingly collect information from them.
              </P>

              <H2>International transfers</H2>
              <P>
                Northbit Labs is based in Kenya. Using this site, and the third-party tools embedded in it, may involve
                your information being processed in other countries by those providers, each of whom maintains its own
                safeguards for international data transfers.
              </P>

              <H2>Security</H2>
              <P>
                We use reasonable technical and organisational measures to protect the information we hold, but no method
                of storage or transmission over the internet is completely secure.
              </P>

              <H2>Changes to this policy</H2>
              <P>
                We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most
                recent revision.
              </P>

              <H2>Contact us</H2>
              <P>
                For questions about this policy or to exercise your rights, contact us at{" "}
                <a href={`mailto:${CONTACT.email}`} className="inline-link">{CONTACT.email}</a> or {CONTACT.phone}. Our
                registered address is {CONTACT.address}, {CONTACT.district}.
              </P>

              <P>
                See also our <Link href="/terms" className="inline-link">Terms of Service</Link>.
              </P>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
