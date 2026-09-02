import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import { CONTACT } from "@/lib/data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const LAST_UPDATED = "2 September 2026";

export const metadata = {
  title: "Terms of Service - Northbit Labs",
  description: "The terms that govern your use of northbitlabs.tech.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service - Northbit Labs",
    description: "The terms that govern your use of northbitlabs.tech.",
    url: "/terms",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Terms of Service - Northbit Labs" },
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

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Terms of Service" path="/terms" />

      {/* HERO */}
      <section className="section--ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(72px,10vw,132px) 0 clamp(56px,6vw,88px)", overflow: "hidden", position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative", maxWidth: 800 }}>
          <div style={{ marginBottom: 20 }}>
            <HeroReveal
              delay={0.06}
              h1Style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05 }}
              lines={["Terms of Service"]}
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
                These terms govern your use of northbitlabs.tech. By browsing this site or submitting a form on it, you
                agree to them. They apply to the website only. Any actual software, AI or consulting engagement with
                Northbit Labs is governed by a separate, signed agreement or statement of work, not by these terms.
              </P>

              <H2>About this website</H2>
              <P>
                northbitlabs.tech is an informational and marketing site describing Northbit Labs, a technology firm
                based in Kiserian, Kenya. Nothing on this site delivers software, AI systems or consulting work by
                itself; those are provided only under a separate, signed engagement.
              </P>

              <H2>Acceptable use</H2>
              <P>
                You agree not to misuse this site: no attempting to breach its security, no automated scraping beyond
                what our robots.txt and llms.txt permit, and no submitting false, malicious or spam content through our
                contact channels.
              </P>

              <H2>Intellectual property</H2>
              <P>
                The text, design, layout and case-study descriptions on this site belong to Northbit Labs, or are used
                under licence, and may not be reproduced without permission beyond normal browsing, sharing a link, or
                fair-use citation. Client names, logos and site links shown on the Work page belong to their respective
                owners and appear here with permission, as case studies of work we have delivered.
              </P>

              <H2>No warranty</H2>
              <P>
                Content on this site is provided for general information. We try to keep it accurate and current, but we
                make no guarantee that it is complete or error-free. Nothing on this site constitutes a binding quote,
                a guarantee of any outcome, or professional advice, until confirmed in a signed engagement letter or
                statement of work.
              </P>

              <H2>Limitation of liability</H2>
              <P>
                To the extent permitted by Kenyan law, Northbit Labs is not liable for indirect, incidental or
                consequential damages arising from your use of this website. Nothing in these terms limits any liability
                that cannot lawfully be limited or excluded.
              </P>

              <H2>Third-party links</H2>
              <P>
                This site links to third-party destinations, including WhatsApp and the live sites of clients featured
                on our Work page. Those destinations are outside our control and governed by their own terms and privacy
                policies, not ours.
              </P>

              <H2>Changes to these terms</H2>
              <P>
                We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most
                recent revision. Continuing to use the site after a change means you accept the updated terms.
              </P>

              <H2>Governing law</H2>
              <P>
                These terms are governed by the laws of Kenya, and any dispute arising from them is subject to the
                jurisdiction of the courts of Kenya.
              </P>

              <H2>Contact us</H2>
              <P>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${CONTACT.email}`} className="inline-link">{CONTACT.email}</a> or {CONTACT.phone}. Our
                registered address is {CONTACT.address}, {CONTACT.district}.
              </P>

              <P>
                See also our <Link href="/privacy" className="inline-link">Privacy Policy</Link>.
              </P>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
