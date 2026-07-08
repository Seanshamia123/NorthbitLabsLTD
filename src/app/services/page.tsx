import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CtaPhotoSection from "@/components/ui/CtaPhotoSection";
import { SERVICES, ENGAGEMENT_MODELS } from "@/lib/data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Services — NorthBit Labs",
  description: "Custom software, AI-powered automation and technology consulting. Three pillars, 13 capabilities, one senior-practitioner team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — NorthBit Labs",
    description: "Custom software, AI-powered automation and technology consulting. Three pillars, 13 capabilities, one senior-practitioner team.",
    url: "/services",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Services — NorthBit Labs" },
};

export default function ServicesPage() {
  const pillars = SERVICES.filter((s) => s.pillar);

  return (
    <>
      <BreadcrumbJsonLd name="Services" path="/services" />
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)", overflow: "hidden" }}>
        {/* engineers-at-work photo */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url('/textures/studio-engineers-dark.webp')", backgroundSize: "cover", backgroundPosition: "center right", pointerEvents: "none" }} />
        {/* left-dark overlay keeps the headline readable, photo glows on the right */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(11,15,20,0.94) 0%, rgba(11,15,20,0.82) 42%, rgba(11,15,20,0.55) 100%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "18ch" }}
              lines={[
                "Three pillars.",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>One philosophy.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              We work across three closely connected service lines. Most clients start with one and grow into the others as we get to know their business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #D9E1E8" }}>
            {pillars.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <div
                  id={s.id}
                  style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 40, padding: "56px 0", borderBottom: "1px solid #D9E1E8" }}
                  className="pillar-row"
                >
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: "#D9E1E8" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div>
                    <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20 }}>
                      {s.title}
                    </h2>
                    <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "#5C6470", lineHeight: 1.7, maxWidth: "64ch", marginBottom: 28 }}>
                      {s.description}
                    </p>
                    {s.bullets && (
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                        {s.bullets.map((b) => (
                          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#0B0F14" }}>
                            <span className="bit-dot" style={{ marginTop: 6 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 680px) { .pillar-row { grid-template-columns: 1fr !important; gap: 16px !important; } }`}</style>
      </section>

      {/* ALL 13 CAPABILITIES */}
      <section className="section section--frost">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", paddingBottom: 48 }} className="caps-head">
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "24ch" }}>
                The full stack of what we do.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid #D9E1E8", borderLeft: "1px solid #D9E1E8" }}
              className="caps-grid"
            >
              {SERVICES.map((s) => (
                <div
                  key={s.id}
                  id={s.pillar ? undefined : s.id}
                  className="cap-card"
                  style={{
                    padding: "32px 36px",
                    borderRight: "1px solid #D9E1E8",
                    borderBottom: "1px solid #D9E1E8",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    background: s.pillar ? "rgba(58,92,26,0.04)" : "transparent",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "#9098A4", letterSpacing: "0.1em" }}>
                      {s.num}
                    </span>
                    {s.pillar && (
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#3A5C1A", background: "rgba(58,92,26,0.1)", padding: "2px 8px", borderRadius: 999 }}>
                        PILLAR
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#5C6470", lineHeight: 1.6 }}>{s.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 680px) { .caps-grid { grid-template-columns: 1fr !important; } .caps-head { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div style={{ paddingBottom: 56 }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, color: "#F5F2EC", maxWidth: "22ch" }}>
                Three ways to work together.
              </h2>
            </div>
            <div style={{ borderTop: "1px solid #232931", width: "100%" }}>
              <div className="eng-header" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", padding: "16px 0", borderBottom: "1px solid #232931", gap: 32 }}>
                {["Model", "Best For", "How It Works"].map((h) => (
                  <div key={h} style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", color: "#9098A4", textTransform: "uppercase" }}>{h}</div>
                ))}
              </div>
              {ENGAGEMENT_MODELS.map((m, i) => (
                <div
                  key={m.model}
                  style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", padding: "28px 0", borderBottom: "1px solid #232931", gap: 32, alignItems: "start" }}
                  className="eng-row"
                >
                  <div style={{ fontWeight: 600, fontSize: 18, color: "#F5F2EC" }}>{m.model}</div>
                  <div>
                    <div className="eng-label" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.18em", color: "#9098A4", textTransform: "uppercase", marginBottom: 6 }}>Best For</div>
                    <div style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.6 }}>{m.bestFor}</div>
                  </div>
                  <div>
                    <div className="eng-label" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.18em", color: "#9098A4", textTransform: "uppercase", marginBottom: 6 }}>How It Works</div>
                    <div style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.6 }}>{m.howItWorks}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          .eng-label { display: none; }
          @media (max-width: 680px) {
            .eng-header { display: none !important; }
            .eng-row { grid-template-columns: 1fr !important; gap: 16px !important; }
            .eng-label { display: block !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <CtaPhotoSection>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,60px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20, color: "#F5F2EC", textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Not sure which service you need?
            </h2>
            <p style={{ fontSize: 18, color: "#AAB2BC", lineHeight: 1.65, marginBottom: 36, textShadow: "0 1px 10px rgba(11,15,20,0.7)" }}>
              Book a 30-minute discovery call. We will listen to what you are trying to build and tell you honestly which of our service lines fits — or if a different approach would serve you better.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <MagneticBtn>
                <Link href="/contact" className="btn btn-signal">Book a discovery call →</Link>
              </MagneticBtn>
              <Link href="/work" className="btn btn-ghost btn-ghost--light">See our work</Link>
            </div>
          </Reveal>
        </div>
      </CtaPhotoSection>
    </>
  );
}
