import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CtaPhotoSection from "@/components/ui/CtaPhotoSection";
import { CONTACT, DIFFERENTIATORS } from "@/lib/data";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "About — NorthBit Labs",
  description: "NorthBit Labs is a technology firm founded to solve a recurring problem: ambitious businesses held back by manual processes and software built for someone else.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — NorthBit Labs",
    description: "NorthBit Labs is a technology firm founded to solve a recurring problem: ambitious businesses held back by manual processes and software built for someone else.",
    url: "/about",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "About — NorthBit Labs" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd name="About" path="/about" />
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "22ch" }}
              lines={[
                "Founded to fix",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>a recurring problem.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.18}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "58ch", lineHeight: 1.65 }}>
              NorthBit Labs is a technology firm founded to solve a recurring problem: ambitious businesses held back by manual processes, mismatched off-the-shelf tools and software built for someone else.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="story-grid">
              <div>
                <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
                  Small by design.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75 }}>
                    Our work is to design systems around how clients actually operate, automate the operational work that consumes time without creating value, and advise leaders on the technology decisions that determine whether their next phase of growth is profitable or painful.
                  </p>
                  <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75 }}>
                    We are small by design. Every engagement is handled directly by senior practitioners. There are no junior handoffs and no inflated teams. When you work with NorthBit Labs, you work with the people writing the code, designing the workflows and answering your questions.
                  </p>
                </div>
              </div>
              <div>
                <div style={{ background: "#0B0F14", borderRadius: 8, padding: "36px 40px" }}>
                  <p style={{ fontSize: 20, color: "#F5F2EC", lineHeight: 1.6, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 24 }}>
                    &ldquo;We deliver systems that work in your business on day one — not theoretical playbooks.&rdquo;
                  </p>
                  <p style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.65 }}>
                    Every solution we ship is measured against one question: did it save the client time, money or both? If the answer is not clearly yes, it does not ship.
                  </p>
                  <div style={{ marginTop: 28, paddingTop: 28, borderTop: "1px solid #232931", display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {[
                      { label: "Time returned", val: "Every build" },
                      { label: "References", val: "On request" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "#9098A4", letterSpacing: "0.12em", marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 16, fontWeight: 600, color: "#F5F2EC" }}>{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 760px) { .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
      </section>

      {/* WHO WE SERVE */}
      <section className="section section--frost">
        <div className="wrap">
          <Reveal>
            <div style={{ paddingBottom: 48 }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "24ch" }}>
                Two kinds of organisations, equally well.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="serve-grid">
              {[
                {
                  type: "Growing SMEs",
                  desc: "Owner-led businesses that need real systems to scale without scaling headcount or cost. We understand the constraints of a growing operation and build accordingly.",
                  points: ["No unnecessary complexity", "Systems that work from day one", "Built for your budget and stage"],
                },
                {
                  type: "Established Companies",
                  desc: "Teams that need specialist software or AI capability built around an existing operation, without committing to a long enterprise procurement cycle.",
                  points: ["No long vendor lock-in", "Specialist capability, fast", "Integrates with your existing stack"],
                },
              ].map((s) => (
                <div key={s.type} style={{ background: "#F5F2EC", border: "1px solid #D9E1E8", borderRadius: 8, padding: "36px 36px" }}>
                  <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 16 }}>{s.type}</h3>
                  <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.65, marginBottom: 24 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15 }}>
                        <span className="bit-dot" style={{ marginTop: 6 }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 680px) { .serve-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* LEADERSHIP */}
      <section className="section" id="leadership">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", paddingBottom: 48 }} className="lead-head-about">
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "24ch" }}>
                The person you will work with.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "clamp(200px,28%,280px) 1fr", gap: 0, border: "1px solid #D9E1E8", borderRadius: 8, overflow: "hidden" }} className="founder-card">
              <div style={{ background: "#0B0F14", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 48, position: "relative", gap: 20 }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.18) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div style={{ width: 128, height: 128, borderRadius: "50%", background: "linear-gradient(135deg, #3A5C1A, #1C2129)", display: "grid", placeItems: "center", border: "2px solid #232931", position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 40, fontWeight: 700, color: "#F5F2EC", letterSpacing: "-0.02em" }}>SP</span>
                </div>
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.22em", color: "#3A5C1A", textTransform: "uppercase" }}>
                    {CONTACT.founderTitle}
                  </div>
                </div>
              </div>
              <div style={{ padding: "48px 56px" }} className="founder-bio">
                <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24 }}>
                  {CONTACT.founder}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75 }}>
                    Sean leads NorthBit Labs and oversees every client engagement. He works hands-on across software architecture, AI implementation and business strategy. His approach is direct: understand the business first, then choose the tools — never the other way around.
                  </p>
                  <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75 }}>
                    Clients work with Sean from the first conversation through delivery. Every engagement letter, scope and project decision passes through his desk. There are no account managers or project coordinators between you and the person solving your problem.
                  </p>
                </div>
                <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <MagneticBtn>
                    <a href={`mailto:${CONTACT.email}`} className="btn btn-primary" style={{ fontSize: 14 }}>
                      Write to Sean →
                    </a>
                  </MagneticBtn>
                  <Link href="/contact" className="btn btn-ghost" style={{ fontSize: 14 }}>
                    Book a call
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .founder-card { grid-template-columns: 1fr !important; }
            .founder-bio { padding: 36px 28px !important; }
            .lead-head-about { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div style={{ paddingBottom: 56 }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, color: "#F5F2EC", maxWidth: "26ch" }}>
                What makes working with us different.
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #232931" }}>
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 40, padding: "28px 0", borderBottom: "1px solid #232931", alignItems: "start" }} className="diff-row-about">
                  <h3 style={{ fontSize: "clamp(18px,2vw,26px)", fontWeight: 600, color: "#F5F2EC", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{d.title}</h3>
                  <p style={{ fontSize: 16, color: "#8A919C", lineHeight: 1.7 }}>{d.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 680px) { .diff-row-about { grid-template-columns: 1fr !important; gap: 12px !important; } }`}</style>
      </section>

      {/* CTA */}
      <CtaPhotoSection>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20, color: "#F5F2EC", textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Ready to talk?
            </h2>
            <p style={{ fontSize: 18, color: "#AAB2BC", lineHeight: 1.65, marginBottom: 36, textShadow: "0 1px 10px rgba(11,15,20,0.7)" }}>
              A 30-minute call or a physical meeting at our Nairobi location. No pitch deck. Just a direct conversation about what you are trying to build.
            </p>
            <MagneticBtn>
              <Link href="/contact" className="btn btn-signal" style={{ fontSize: 16 }}>Book a discovery call →</Link>
            </MagneticBtn>
          </Reveal>
        </div>
      </CtaPhotoSection>
    </>
  );
}
