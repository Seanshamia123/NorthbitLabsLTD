import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CtaPhotoSection from "@/components/ui/CtaPhotoSection";
import { INDUSTRIES } from "@/lib/data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Industries — Northbit Labs",
  description: "Fintech, wellness, beauty, retail, brand building and more. Domains we know well enough to push back in.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — Northbit Labs",
    description: "Fintech, wellness, beauty, retail, brand building and more. Domains we know well enough to push back in.",
    url: "/industries",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Industries — Northbit Labs" },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Industries" path="/industries" />
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)", overflow: "hidden" }}>
        <div aria-hidden="true" className="hero-photo-zoom" style={{ position: "absolute", inset: 0, backgroundImage: "url('/people/industries-hero.webp')", backgroundSize: "cover", backgroundPosition: "center right", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(11,15,20,0.94) 0%, rgba(11,15,20,0.82) 42%, rgba(11,15,20,0.55) 100%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <style>{`
          .hero-photo-zoom { animation: hero-ken-burns 22s ease-in-out infinite alternate; }
          @keyframes hero-ken-burns { from { transform: scale(1); } to { transform: scale(1.07); } }
          @media (prefers-reduced-motion: reduce) { .hero-photo-zoom { animation: none; } }
        `}</style>
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

      {/* PROOF — active clients, editorial treatment */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom: "clamp(48px,6vw,72px)", maxWidth: "38ch" }}>
              <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <span className="bit-dot" />
                Proof, not promises
              </p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Where we&apos;ve already built it.
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,7vw,104px)" }}>
            {INDUSTRIES.filter((ind) => ind.featured).map((ind, i) => {
              const flip = i % 2 === 1;
              const photo = (
                <Link
                  href={`/industries#${ind.slug}`}
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ display: "block", position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", border: "1px solid #D9E1E8" }}
                  className="ind-proof-photo-link"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="ind-proof-photo"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", left: 18, bottom: 18, display: "flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(11,15,20,0.6)", backdropFilter: "blur(4px)" }}>
                    <span style={{ width: 6, height: 6, background: "#3A5C1A", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: "#F5F2EC", textTransform: "uppercase" }}>
                      Active client
                    </span>
                  </div>
                </Link>
              );
              const text = (
                <div id={ind.slug}>
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 13, color: "#9098A4", letterSpacing: "0.06em", marginBottom: 14 }}>{ind.num}</div>
                  <h3 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.12, marginBottom: 18 }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75, maxWidth: "48ch" }}>{ind.description}</p>
                </div>
              );
              return (
                <Reveal key={ind.slug} delay={i * 70}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: flip ? "0.9fr 1.1fr" : "1.1fr 0.9fr", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}
                    className="ind-proof-row"
                  >
                    {flip ? (
                      <>
                        <div className="ind-proof-photo-col">{photo}</div>
                        <div>{text}</div>
                      </>
                    ) : (
                      <>
                        <div>{text}</div>
                        <div className="ind-proof-photo-col">{photo}</div>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <style>{`
          .ind-proof-photo { transition: transform 0.5s cubic-bezier(0.2,0.7,0.2,1); }
          .ind-proof-photo-link:hover .ind-proof-photo { transform: scale(1.04); }
          @media (max-width: 760px) {
            .ind-proof-row { display: flex !important; flex-direction: column !important; gap: 24px !important; }
            .ind-proof-photo-col { order: -1; max-width: 320px; }
          }
        `}</style>
      </section>

      {/* CAPABILITIES — domains we can extend into next, compact reference list */}
      <section className="section section--frost">
        <div className="wrap">
          <Reveal>
            <div style={{ marginBottom: 48, maxWidth: "38ch" }}>
              <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#9098A4", textTransform: "uppercase", marginBottom: 16 }}>
                Also in range
              </p>
              <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Domains we can go deep in next.
              </h2>
            </div>
          </Reveal>
          <div style={{ borderTop: "1px solid #D9E1E8" }}>
            {INDUSTRIES.filter((ind) => !ind.featured).map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 55}>
                <div
                  id={ind.slug}
                  style={{ display: "grid", gridTemplateColumns: "64px 1fr 1.5fr 96px", gap: 32, padding: "32px 0", borderBottom: "1px solid #D9E1E8", alignItems: "center" }}
                  className="ind-compact-row"
                >
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 13, color: "#9098A4" }}>{ind.num}</div>
                  <h3 style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{ind.title}</h3>
                  <p style={{ fontSize: 15, color: "#5C6470", lineHeight: 1.65, maxWidth: "50ch" }} className="ind-compact-desc">{ind.description}</p>
                  <Link
                    href={`/industries#${ind.slug}`}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ display: "block", width: "100%", aspectRatio: "4/5", borderRadius: 6, overflow: "hidden", border: "1px solid #D9E1E8" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="ind-compact-photo"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .ind-compact-photo { filter: grayscale(0.55) brightness(0.96); transition: filter 0.4s cubic-bezier(0.2,0.7,0.2,1), transform 0.4s cubic-bezier(0.2,0.7,0.2,1); }
          .ind-compact-row:hover .ind-compact-photo { filter: grayscale(0) brightness(1); transform: scale(1.05); }
          @media (max-width: 900px) {
            .ind-compact-row { grid-template-columns: 48px 1fr 88px !important; gap: 20px !important; }
            .ind-compact-desc { display: none; }
          }
          @media (max-width: 560px) {
            .ind-compact-row { grid-template-columns: 1fr auto !important; }
            .ind-compact-row > div:first-child { display: none; }
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
      <CtaPhotoSection>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20, color: "#F5F2EC", textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Not seeing your industry?
            </h2>
            <p style={{ fontSize: 18, color: "#AAB2BC", lineHeight: 1.65, marginBottom: 36, textShadow: "0 1px 10px rgba(11,15,20,0.7)" }}>
              We have worked across many verticals. If your industry is not listed, tell us what you are building. We will
              tell you honestly whether we have the domain depth to help.
            </p>
            <MagneticBtn>
              <Link href="/contact" className="btn btn-signal">Start a conversation →</Link>
            </MagneticBtn>
          </Reveal>
        </div>
      </CtaPhotoSection>
    </>
  );
}
