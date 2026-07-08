import Link from "next/link";
import BitMotif from "@/components/ui/BitMotif";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import ClientsGrid from "@/components/ui/ClientsGrid";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { STATS, SERVICES, INDUSTRIES, CLIENTS, ACTIVE_BUILD, HOW_WE_WORK, DIFFERENTIATORS, CONTACT } from "@/lib/data";

export default function HomePage() {
  const pillars = SERVICES.filter((s) => s.pillar);
  const [pillar1, pillar2, pillar3] = pillars;

  const logoBand = [
    ...CLIENTS,
    {
      id: ACTIVE_BUILD.id,
      name: ACTIVE_BUILD.client,
      category: ACTIVE_BUILD.category,
      url: `/work#${ACTIVE_BUILD.id}`,
      logo: ACTIVE_BUILD.logoColor,
      brandColor: "#2E6FBF",
      wide: true,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(72px,9vw,140px)", position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
            <div>
              <div style={{ marginBottom: 32 }}>
                <HeroReveal
                  delay={0.08}
                  h1Style={{ fontSize: "clamp(44px,5.5vw,80px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, color: "#F5F2EC" }}
                  lines={[
                    "Software built",
                    "around the way",
                    <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>your business works.</span>,
                  ]}
                />
              </div>
              <FadeUp delay={0.52} style={{ marginBottom: 40 }}>
                <p style={{ fontSize: "clamp(15px,1.1vw,17px)", color: "#8A919C", maxWidth: "52ch", lineHeight: 1.65 }}>
                  We are a technology firm for operators and founders. We map the workflow your business already runs on, then build the software that makes it faster, cheaper and harder to break.
                </p>
              </FadeUp>
              <FadeUp delay={0.64}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <MagneticBtn>
                    <Link href="/contact" className="btn btn-signal">Book a discovery call →</Link>
                  </MagneticBtn>
                  <Link href="/work" className="btn btn-ghost btn-ghost--light">See our work</Link>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={0.44} className="hero-visual" style={{ display: "flex", justifyContent: "flex-end" }}>
              <BitMotif size={400} />
            </FadeUp>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .hero-visual { justify-content: center !important; }
            .hero-visual svg { max-width: 300px !important; }
          }
          @media (max-width: 480px) { .hero-visual { display: none !important; } }
        `}</style>
      </section>

      {/* CLIENTS */}
      <section style={{ borderBottom: "1px solid #D9E1E8", background: "#F5F2EC" }}>
        <div className="wrap">
          <ClientsGrid clients={logoBand} />
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ position: "relative", background: "#0B0F14", padding: "clamp(72px,9vw,120px) 0", overflow: "hidden" }}>
        {/* background photo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/textures/studio-engineers-dark.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center 50%",
          }}
        />
        {/* dark overlay keeps the numerals + labels readable while the photo stays visible */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(11,15,20,0.66) 0%, rgba(11,15,20,0.46) 50%, rgba(11,15,20,0.72) 100%)",
          }}
        />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderTop: "1px solid #2A333D", borderBottom: "1px solid #2A333D" }} className="stats-grid">
              {STATS.map((s, i) => (
                <div key={i} style={{ padding: "48px 28px", borderRight: i < STATS.length - 1 ? "1px solid #2A333D" : "none" }} className="stat-cell">
                  <div style={{ fontSize: "clamp(40px,5vw,76px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, color: "#F5F2EC", marginBottom: 14, textShadow: "0 2px 16px rgba(11,15,20,0.7)" }}>
                    {s.num}
                  </div>
                  <p style={{ fontSize: 13, color: "#AAB2BC", maxWidth: "22ch", lineHeight: 1.55, textShadow: "0 1px 10px rgba(11,15,20,0.85)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .stats-grid { grid-template-columns: 1fr 1fr !important; }
            .stat-cell { border-right: none !important; border-bottom: 1px solid #2A333D !important; }
            .stat-cell:last-child { border-bottom: none !important; grid-column: 1 / -1 !important; }
          }
          @media (max-width: 420px) {
            .stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", paddingBottom: 48 }} className="services-head">
              <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: "22ch" }}>Three pillars. One philosophy.</h2>
              <Link href="/services" className="link-arrow" style={{ fontSize: 15 }}>All services →</Link>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "#D9E1E8", border: "1px solid #D9E1E8", marginBottom: 56 }} className="pillar-split">
              <Link href={`/services#${pillar1.id}`} className="pillar-card"
                style={{ background: "#F5F2EC", padding: "48px 44px", display: "flex", flexDirection: "column", minHeight: 360, textDecoration: "none", color: "inherit", position: "relative", overflow: "hidden" }}>
                <div aria-hidden="true" style={{ position: "absolute", top: 24, right: 32, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 96, fontWeight: 700, letterSpacing: "-0.05em", color: "#EAE6DE", lineHeight: 1, userSelect: "none" }}>01</div>
                <h3 style={{ fontSize: "clamp(22px,2.2vw,32px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16, marginTop: "auto", position: "relative" }}>{pillar1.pillarLabel}</h3>
                <p style={{ fontSize: 15, color: "#5C6470", lineHeight: 1.65, maxWidth: "52ch", position: "relative", marginBottom: 24 }}>{pillar1.description}</p>
                <span style={{ fontSize: 14, fontWeight: 500, display: "inline-flex", gap: 6, alignItems: "center", position: "relative" }}>Explore →</span>
              </Link>
              <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "1px" }}>
                <Link href={`/services#${pillar2.id}`} className="pillar-card"
                  style={{ background: "#F5F2EC", padding: "32px 32px", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", position: "relative", overflow: "hidden" }}>
                  <div aria-hidden="true" style={{ position: "absolute", top: 16, right: 20, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 56, fontWeight: 700, letterSpacing: "-0.05em", color: "#EAE6DE", lineHeight: 1, userSelect: "none" }}>02</div>
                  <h3 style={{ fontSize: "clamp(18px,1.8vw,22px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 12, marginTop: "auto" }}>{pillar2.pillarLabel}</h3>
                  <span style={{ fontSize: 13, fontWeight: 500, display: "inline-flex", gap: 6, alignItems: "center" }}>Explore →</span>
                </Link>
                <Link href={`/services#${pillar3.id}`} className="pillar-card"
                  style={{ background: "#0B0F14", padding: "32px 32px", display: "flex", flexDirection: "column", textDecoration: "none", color: "#F5F2EC", position: "relative", overflow: "hidden" }}>
                  <div aria-hidden="true" style={{ position: "absolute", top: 16, right: 20, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 56, fontWeight: 700, letterSpacing: "-0.05em", color: "#1C2129", lineHeight: 1, userSelect: "none" }}>03</div>
                  <h3 style={{ fontSize: "clamp(18px,1.8vw,22px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 12, marginTop: "auto", color: "#F5F2EC" }}>{pillar3.pillarLabel}</h3>
                  <span style={{ fontSize: 13, fontWeight: 500, display: "inline-flex", gap: 6, alignItems: "center", color: "#4D7724" }}>Explore →</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span className="bit-dot" />
                <span style={{ fontSize: 13, color: "#9098A4", letterSpacing: "0.04em" }}>All capabilities</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid #D9E1E8" }} className="svc-list-grid">
                {SERVICES.map((s, i) => (
                  <Link key={s.id} href={`/services#${s.id}`} className="svc-item"
                    style={{ padding: "18px 20px", borderBottom: "1px solid #D9E1E8", borderRight: (i + 1) % 4 !== 0 ? "1px solid #D9E1E8" : "none", display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "#9098A4", letterSpacing: "0.1em", flexShrink: 0 }}>{s.num}</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .services-head { grid-template-columns: 1fr !important; }
            .pillar-split { grid-template-columns: 1fr !important; }
            .svc-list-grid { grid-template-columns: repeat(2,1fr) !important; }
            .svc-list-grid a { border-right: none !important; }
            .svc-list-grid a:nth-child(odd) { border-right: 1px solid #D9E1E8 !important; }
          }
          @media (max-width: 480px) {
            .svc-list-grid { grid-template-columns: 1fr !important; }
            .svc-list-grid a { border-right: none !important; }
          }
        `}</style>
      </section>

      {/* INDUSTRIES */}
      <section className="section section--frost" id="industries">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", paddingBottom: 56 }} className="ind-head">
              <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: "28ch" }}>Domains we know well enough to push back in.</h2>
              <Link href="/industries" className="link-arrow" style={{ fontSize: 15 }}>All industries →</Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ borderTop: "1px solid #D9E1E8" }}>
              {INDUSTRIES.map((ind) => (
                <Link key={ind.slug} href={`/industries#${ind.slug}`} className="ind-row"
                  style={{ display: "grid", gridTemplateColumns: "72px 1.4fr 2fr auto", gap: 28, padding: "26px 0", borderBottom: "1px solid #D9E1E8", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "#9098A4" }}>{ind.num}</span>
                  <h3 style={{ fontSize: "clamp(16px,1.8vw,24px)", fontWeight: 600, letterSpacing: "-0.015em" }}>
                    {ind.title}
                    {ind.featured && (
                      <span style={{ marginLeft: 10, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.18em", color: "#3A5C1A", background: "rgba(58,92,26,0.1)", padding: "2px 8px", borderRadius: 999, verticalAlign: "middle", fontWeight: 500 }}>ACTIVE</span>
                    )}
                  </h3>
                  <p style={{ fontSize: 14, color: "#5C6470", lineHeight: 1.55 }} className="ind-desc">{ind.description}</p>
                  <span style={{ fontSize: 18 }} className="ind-arrow">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) { .ind-head { grid-template-columns: 1fr !important; } }
          @media (max-width: 760px) {
            .ind-row { grid-template-columns: 52px 1fr !important; gap: 12px !important; }
            .ind-desc, .ind-arrow { display: none !important; }
          }
        `}</style>
      </section>

      {/* SELECTED WORK */}
      <section className="section section--ink" id="work">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", paddingBottom: 48 }} className="work-head">
              <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, color: "#F5F2EC", maxWidth: "24ch" }}>Live products with real users.</h2>
              <Link href="/work" className="link-arrow" style={{ fontSize: 15, color: "#F5F2EC" }}>All work →</Link>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="work-grid">
            {CLIENTS.map((client, i) => (
              <Reveal key={client.id} delay={i * 80}>
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="work-card"
                  style={{ background: "#14181F", borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column", border: "1px solid #232931", textDecoration: "none", color: "inherit", height: "100%" }}>
                  <div style={{ aspectRatio: "16/9", background: "#1C2129", position: "relative", overflow: "hidden" }}>
                    <img
                      src={client.image}
                      alt={`${client.name} — live site`}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                    />
                    {/* tonal overlay keeps the label readable over any screenshot */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,15,20,0.88) 0%, rgba(11,15,20,0.12) 46%, transparent 70%)" }} />
                    <div style={{ position: "absolute", left: 16, top: 14, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 9, letterSpacing: "0.28em", color: "#A9C77E", background: "rgba(11,15,20,0.55)", backdropFilter: "blur(4px)", padding: "3px 10px", borderRadius: 999, zIndex: 1 }}>{client.tags[0]}</div>
                    <div style={{ position: "absolute", left: 16, bottom: 14, fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#F5F2EC", lineHeight: 1, zIndex: 1 }}>{client.name}</div>
                  </div>
                  <div style={{ padding: "24px 26px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: "#9098A4", letterSpacing: "0.12em", textTransform: "uppercase" }}>{client.category}</div>
                    <h3 style={{ fontSize: "clamp(15px,1.6vw,19px)", fontWeight: 600, color: "#F5F2EC", letterSpacing: "-0.01em", lineHeight: 1.25 }}>{client.headline}</h3>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#4D7724", display: "inline-flex", gap: 6, alignItems: "center", marginTop: "auto", paddingTop: 8 }}>View live site →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={CLIENTS.length * 80}>
            <Link
              href="/work#count-technologies"
              className="link-arrow"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginTop: 44, textDecoration: "none" }}
            >
              <span className="bit-dot" />
              <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", color: "#A9C77E" }}>
                CURRENTLY BUILDING 5 SYSTEMS FOR COUNT TECHNOLOGIES →
              </span>
            </Link>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) { .work-grid { grid-template-columns: 1fr 1fr !important; } .work-head { grid-template-columns: 1fr !important; } }
          @media (max-width: 560px) { .work-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* HOW WE WORK */}
      <section className="section section--ink" id="how-we-work" style={{ position: "relative", overflow: "hidden" }}>
        {/* collaboration photo background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/people/how-we-work.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* strong overlay keeps the step copy readable over the photo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(11,15,20,0.88) 0%, rgba(11,15,20,0.80) 42%, rgba(11,15,20,0.92) 100%)",
          }}
        />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, color: "#F5F2EC", maxWidth: "32ch", paddingBottom: 56, textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Transparent delivery. Clients see every step.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid #2A333D" }} className="steps-grid">
              {HOW_WE_WORK.map((step, i) => (
                <div key={step.num} style={{ padding: "32px 24px 28px", borderRight: i < HOW_WE_WORK.length - 1 ? "1px solid #2A333D" : "none", minHeight: 220 }} className="step-cell">
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.12em", color: "#7BA84F", marginBottom: 20 }}>{step.num}</div>
                  <h4 style={{ fontSize: "clamp(17px,1.6vw,22px)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 10, color: "#F5F2EC", textShadow: "0 1px 12px rgba(11,15,20,0.7)" }}>{step.title}</h4>
                  <p style={{ fontSize: 14, color: "#AAB2BC", lineHeight: 1.65, textShadow: "0 1px 10px rgba(11,15,20,0.85)" }}>{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .steps-grid { grid-template-columns: 1fr 1fr !important; }
            .step-cell { border-right: none !important; border-bottom: 1px solid #2A333D !important; }
            .step-cell:nth-last-child(-n+2) { border-bottom: none !important; }
          }
          @media (max-width: 480px) {
            .steps-grid { grid-template-columns: 1fr !important; }
            .step-cell { border-bottom: 1px solid #2A333D !important; }
            .step-cell:last-child { border-bottom: none !important; }
          }
        `}</style>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section section--ink" id="why-northbit">
        <div className="wrap">
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, color: "#F5F2EC", maxWidth: "24ch", paddingBottom: 48 }}>
              Why operators choose NorthBit.
            </h2>
          </Reveal>
          <div style={{ borderTop: "1px solid #232931" }}>
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ display: "grid", gridTemplateColumns: "52px 1fr 2.2fr", gap: "0 40px", padding: "36px 0", borderBottom: "1px solid #232931", alignItems: "start" }} className="diff-row">
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.2em", color: "#4a5260", paddingTop: 3 }}>0{i + 1}</div>
                  <h4 style={{ fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600, color: "#F5F2EC", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{d.title}</h4>
                  <p style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.7 }} className="diff-desc">{d.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .diff-row { grid-template-columns: 40px 1fr !important; gap: 0 16px !important; }
            .diff-desc { display: none !important; }
          }
          @media (max-width: 480px) {
            .diff-row { grid-template-columns: 1fr !important; gap: 8px 0 !important; padding: 28px 0 !important; }
          }
        `}</style>
      </section>

      {/* LEADERSHIP */}
      <section className="section section--frost" id="leadership">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", paddingBottom: 48 }} className="lead-head">
              <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: "30ch" }}>The person responsible for every engagement.</h2>
              <Link href="/about" className="link-arrow" style={{ fontSize: 15 }}>About us →</Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 0, border: "1px solid #D9E1E8", borderRadius: 8, overflow: "hidden" }} className="founder-grid">
              <div style={{ background: "#0B0F14", display: "grid", placeItems: "center", minHeight: 260, padding: 40, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.18) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div style={{ width: 112, height: 112, borderRadius: "50%", background: "linear-gradient(135deg, #3A5C1A, #1C2129)", display: "grid", placeItems: "center", position: "relative", zIndex: 1, border: "2px solid #232931" }}>
                  <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 32, fontWeight: 700, color: "#F5F2EC", letterSpacing: "-0.02em" }}>SP</span>
                </div>
              </div>
              <div style={{ padding: "40px 44px", background: "#F5F2EC" }} className="founder-bio">
                <h3 style={{ fontSize: "clamp(24px,2.8vw,40px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 6 }}>{CONTACT.founder}</h3>
                <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 20 }}>{CONTACT.founderTitle}</p>
                <p style={{ fontSize: 15, color: "#5C6470", lineHeight: 1.7, maxWidth: "56ch", marginBottom: 14 }}>
                  Sean leads NorthBit Labs and oversees every client engagement. He works hands-on across software architecture, AI implementation and business strategy.
                </p>
                <p style={{ fontSize: 15, color: "#5C6470", lineHeight: 1.7, maxWidth: "56ch" }}>
                  Clients work with Sean from the first conversation through delivery. Every engagement letter, scope and project decision passes through his desk.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .founder-grid { grid-template-columns: 1fr !important; }
            .founder-bio { padding: 32px 28px !important; }
            .lead-head { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section section--ink" id="start" style={{ position: "relative", overflow: "hidden" }}>
        {/* warm photo background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/people/cta-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        {/* overlay: darkest on the left so the text stays readable, warm glow on the right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(11,15,20,0.94) 0%, rgba(11,15,20,0.82) 42%, rgba(11,15,20,0.5) 100%)",
          }}
        />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ maxWidth: 720 }}>
              <h2 style={{ fontSize: "clamp(40px,5.5vw,80px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.97, color: "#F5F2EC", marginBottom: 28 }}>
                Bring us the problem.<br />
                <span style={{ color: "#3A5C1A" }}>We will bring the map.</span>
              </h2>
              <p style={{ fontSize: "clamp(15px,1.4vw,19px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65, marginBottom: 40 }}>
                A 30-minute call or a physical meeting in Nairobi. No pitch deck, no fluff. We listen, ask sharper questions, and you leave with a clearer picture of what to build first.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <MagneticBtn>
                  <Link href="/contact" className="btn btn-signal">Book a discovery call →</Link>
                </MagneticBtn>
                <Link href="/work" className="btn btn-ghost btn-ghost--light">See how we have done it</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
