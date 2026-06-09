import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { INDUSTRIES } from "@/lib/data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Industries — NorthBit Labs",
  description: "Fintech, wellness, beauty, retail, brand building and more. Domains we know well enough to push back in.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — NorthBit Labs",
    description: "Fintech, wellness, beauty, retail, brand building and more. Domains we know well enough to push back in.",
    url: "/industries",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Industries — NorthBit Labs" },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Industries" path="/industries" />
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "22ch" }}
              lines={[
                "Domains we know well",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>enough to push back in.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              Generic software forces your business to bend around the tool. Our domain knowledge means we can challenge
              your assumptions and propose solutions that fit your industry&apos;s actual constraints.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* INDUSTRY LIST */}
      <section className="section">
        <div className="wrap">
          <div style={{ borderTop: "1px solid #D9E1E8" }}>
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 55}>
                <div
                  id={ind.slug}
                  style={{ display: "grid", gridTemplateColumns: "80px 1fr 1.6fr", gap: 40, padding: "40px 0", borderBottom: "1px solid #D9E1E8", alignItems: "start" }}
                  className="ind-detail-row"
                >
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 13, color: "#9098A4", paddingTop: 6 }}>{ind.num}</div>
                  <div>
                    <h2 style={{ fontSize: "clamp(22px,2.5vw,36px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 8 }}>
                      {ind.title}
                    </h2>
                    {ind.featured && (
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.2em", color: "#3A5C1A", background: "rgba(58,92,26,0.1)", padding: "3px 10px", borderRadius: 999 }}>
                        ACTIVE CLIENT
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.7, maxWidth: "54ch" }}>{ind.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .ind-detail-row { grid-template-columns: 1fr !important; gap: 12px !important; padding: 28px 0 !important; }
          }
        `}</style>
      </section>

      {/* FINTECH CALLOUT */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="fintech-grid">
              <div>
                <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, color: "#F5F2EC", marginBottom: 24 }}>
                  CBK-compliant. AML-ready.<br />
                  <span style={{ fontWeight: 300, color: "#8A919C" }}>Built for Kenya.</span>
                </h2>
                <p style={{ fontSize: 16, color: "#8A919C", lineHeight: 1.7, maxWidth: "52ch", marginBottom: 28 }}>
                  We tailor financial systems for Fintechs and Banks to meet the standards of the Central Bank of Kenya,
                  implementing AI for live AML screening, Mpesa STK push, card collections and the compliance layer that
                  wraps every transaction.
                </p>
                <Link href="/contact" className="btn btn-signal" style={{ fontSize: 15 }}>
                  Discuss your fintech build →
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Central Bank of Kenya (CBK) compliance integrations",
                  "AML screening with AI-driven monitoring",
                  "Mpesa STK push and card payment integrations",
                  "KYC/AML onboarding workflows",
                  "Treasury and reconciliation systems",
                  "Regulatory reporting layers",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", background: "#14181F", border: "1px solid #232931", borderRadius: 6 }}>
                    <span style={{ width: 6, height: 6, background: "#3A5C1A", flexShrink: 0, borderRadius: 1 }} />
                    <span style={{ fontSize: 15, color: "#D9E1E8" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 760px) { .fintech-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* CTA */}
      <section className="section section--frost">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20 }}>
              Not seeing your industry?
            </h2>
            <p style={{ fontSize: 18, color: "#5C6470", lineHeight: 1.65, marginBottom: 36 }}>
              We have worked across many verticals. If your industry is not listed, tell us what you are building. We will
              tell you honestly whether we have the domain depth to help.
            </p>
            <MagneticBtn>
              <Link href="/contact" className="btn btn-primary">Start a conversation →</Link>
            </MagneticBtn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
