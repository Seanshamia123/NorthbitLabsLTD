import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CaseImagePane from "@/components/ui/CaseImagePane";
import { CLIENTS } from "@/lib/data";

export const metadata = {
  title: "Work — NorthBit Labs",
  description: "Three active client partnerships, each one personally earned. Magena Pilates, Premier Beauty Clinic, S.Socials.",
  openGraph: {
    title: "Work — NorthBit Labs",
    description: "Three active client partnerships, each one personally earned. Magena Pilates, Premier Beauty Clinic, S.Socials.",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Work — NorthBit Labs" },
};

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "20ch" }}
              lines={[
                "Every client is a",
                <em key="sub" style={{ fontStyle: "italic", fontWeight: 400 }}>reference we earned.</em>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              We are deliberate about who we take on. We would rather have three clients we serve exceptionally than thirty we serve adequately. References available on request.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #D9E1E8" }}>
            {CLIENTS.map((client, i) => (
              <Reveal key={client.id} delay={i * 120}>
                <div
                  id={client.id}
                  style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 0, borderBottom: "1px solid #D9E1E8", minHeight: 480 }}
                  className="case-row"
                >
                  <CaseImagePane
                    name={client.name}
                    category={client.category}
                    tags={client.tags}
                    logo={client.logo}
                    brandColor={client.brandColor}
                    dark={i % 2 === 0}
                  />

                  <div style={{ padding: "56px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }} className="case-content">
                    <h2 style={{ fontSize: "clamp(22px,2.5vw,36px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20 }}>
                      {client.headline}
                    </h2>
                    <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.7, marginBottom: 28, maxWidth: "52ch" }}>
                      {client.description}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                      {client.outcomes.map((o) => (
                        <li key={o} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#0B0F14" }}>
                          <span className="bit-dot" style={{ marginTop: 6 }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                      <MagneticBtn>
                        <a href={client.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 15 }}>
                          Visit live site →
                        </a>
                      </MagneticBtn>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.2em", color: "#3A5C1A", background: "rgba(58,92,26,0.1)", padding: "4px 10px", borderRadius: 999 }}>
                        {client.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .case-row { grid-template-columns: 1fr !important; }
            .case-content { padding: 36px 28px !important; }
          }
        `}</style>
      </section>

      {/* WHAT TIES THEM TOGETHER */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div style={{ paddingBottom: 56 }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, color: "#F5F2EC", maxWidth: "28ch" }}>
                Our value comes from three things, repeatedly.
              </h2>
            </div>
          </Reveal>
          <div style={{ borderTop: "1px solid #232931" }}>
            {[
              { title: "Time returned", body: "Automating the repetitive operational work that consumes hours every week." },
              { title: "Systems that grow", body: "Custom platforms that adapt as the client adds services, locations or staff." },
              { title: "Honest delivery", body: "Weekly demos, transparent pricing and a senior practitioner on the line every time." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div style={{ display: "grid", gridTemplateColumns: "48px 1fr 2.2fr", gap: "0 40px", padding: "32px 0", borderBottom: "1px solid #232931", alignItems: "start" }} className="value-row">
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.2em", color: "#4a5260", paddingTop: 3 }}>0{i + 1}</div>
                  <h3 style={{ fontSize: "clamp(17px,1.8vw,22px)", fontWeight: 600, color: "#F5F2EC", letterSpacing: "-0.015em", lineHeight: 1.2 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.7 }} className="value-body">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 680px) {
            .value-row { grid-template-columns: 40px 1fr !important; gap: 0 16px !important; }
            .value-body { display: none !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "end" }} className="cta-split">
              <h2 style={{ fontSize: "clamp(32px,4.5vw,72px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.0, maxWidth: "18ch" }}>
                References available on request.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <MagneticBtn>
                  <Link href="/contact" className="btn btn-primary" style={{ fontSize: 15 }}>Start a conversation →</Link>
                </MagneticBtn>
                <p style={{ fontSize: 13, color: "#9098A4", maxWidth: "28ch", lineHeight: 1.5 }}>
                  We will connect you directly with any current client we work with.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 760px) { .cta-split { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}
