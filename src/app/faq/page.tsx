import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CtaPhotoSection from "@/components/ui/CtaPhotoSection";
import { GENERAL_FAQS, SERVICES_FAQS, INDUSTRIES_FAQS } from "@/lib/data";
import { POSTS } from "@/lib/posts";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "FAQ - Northbit Labs",
  description:
    "Every question we're asked about Northbit Labs, in one place: company, services, pricing, industries and the projects we write about.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ - Northbit Labs",
    description:
      "Every question we're asked about Northbit Labs, in one place: company, services, pricing, industries and the projects we write about.",
    url: "/faq",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "FAQ - Northbit Labs" },
};

const postFaqs = POSTS.filter((p) => p.faq && p.faq.length > 0) as (typeof POSTS[number] & {
  faq: { question: string; answer: string }[];
})[];

const allFaqs = [
  ...GENERAL_FAQS,
  ...SERVICES_FAQS,
  ...INDUSTRIES_FAQS,
  ...postFaqs.flatMap((p) => p.faq),
];

function FaqGroup({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div style={{ borderTop: "1px solid #D9E1E8" }}>
      {faqs.map((f, i) => (
        <Reveal key={f.question} delay={i * 50}>
          <div style={{ padding: "26px 0", borderBottom: "1px solid #D9E1E8" }}>
            <h3 style={{ fontSize: "clamp(16px,1.8vw,19px)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: 10 }}>
              {f.question}
            </h3>
            <p style={{ fontSize: 15, color: "#5C6470", lineHeight: 1.7, maxWidth: "62ch" }}>{f.answer}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd name="FAQ" path="/faq" />
      <FaqJsonLd faqs={allFaqs} />

      {/* HERO */}
      <section className="section--ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)", overflow: "hidden", position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "16ch" }}
              lines={[
                "Answers, not",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>a sales call.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              Every question we&apos;re commonly asked about the company, our services, pricing and the industries we work in, collected in one place.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* GENERAL */}
      <section className="section" id="general">
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom: 40, maxWidth: "38ch" }}>
              <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 16 }}>
                Company
              </p>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                General.
              </h2>
            </div>
          </Reveal>
          <FaqGroup faqs={GENERAL_FAQS} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--frost" id="services">
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom: 40, maxWidth: "38ch" }}>
              <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 16 }}>
                Services &amp; pricing
              </p>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                What we build, and what it costs.
              </h2>
            </div>
          </Reveal>
          <FaqGroup faqs={SERVICES_FAQS} />
          <Reveal delay={SERVICES_FAQS.length * 50}>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#3A5C1A", textDecoration: "none", marginTop: 28 }}>
              See the full Services page →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" id="industries">
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom: 40, maxWidth: "38ch" }}>
              <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 16 }}>
                Industries
              </p>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Who we build for.
              </h2>
            </div>
          </Reveal>
          <FaqGroup faqs={INDUSTRIES_FAQS} />
          <Reveal delay={INDUSTRIES_FAQS.length * 50}>
            <Link href="/industries" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#3A5C1A", textDecoration: "none", marginTop: 28 }}>
              See the full Industries page →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FROM OUR ARTICLES */}
      {postFaqs.length > 0 && (
        <section className="section section--frost" id="insights">
          <div className="wrap">
            <Reveal>
              <div style={{ marginBottom: 40, maxWidth: "42ch" }}>
                <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 16 }}>
                  From our articles
                </p>
                <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  Questions answered in more depth on Insights.
                </h2>
              </div>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {postFaqs.map((post) => (
                <Reveal key={post.slug}>
                  <div>
                    <Link
                      href={`/insights/${post.slug}`}
                      style={{ fontSize: 14, fontWeight: 600, color: "#0B0F14", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}
                    >
                      {post.title} →
                    </Link>
                    <FaqGroup faqs={post.faq} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaPhotoSection>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20, color: "#F5F2EC", textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Still have a question?
            </h2>
            <p style={{ fontSize: 18, color: "#AAB2BC", lineHeight: 1.65, marginBottom: 36, textShadow: "0 1px 10px rgba(11,15,20,0.7)" }}>
              Book a 30-minute discovery call and ask us directly. No obligation.
            </p>
            <MagneticBtn>
              <Link href="/contact" className="btn btn-signal">Book a discovery call →</Link>
            </MagneticBtn>
          </Reveal>
        </div>
      </CtaPhotoSection>
    </>
  );
}
