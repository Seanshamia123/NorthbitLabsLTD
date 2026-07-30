import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import ClientsGrid from "@/components/ui/ClientsGrid";
import IndustriesStack from "@/components/ui/IndustriesStack";
import WorkCoverflow from "@/components/ui/WorkCoverflow";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { STATS, SERVICES, INDUSTRIES, CLIENTS, ACTIVE_BUILD, HOW_WE_WORK, DIFFERENTIATORS, CONTACT } from "@/lib/data";

export default function HomePage() {
  const pillars = SERVICES.filter((s) => s.pillar);

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
      <section style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(72px,9vw,140px)", position: "relative", overflow: "hidden" }}>
        {/* atmospheric backdrop — a single slow light trail, dimmed to near-invisible so it never competes with the text */}
        <div aria-hidden="true" className="hero-photo-zoom" style={{ position: "absolute", inset: 0, backgroundImage: "url('/textures/north-line.webp')", backgroundSize: "cover", backgroundPosition: "center", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(11,15,20,0.8)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <style>{`
          .hero-photo-zoom { animation: hero-ken-burns 26s ease-in-out infinite alternate; }
          @keyframes hero-ken-burns { from { transform: scale(1); } to { transform: scale(1.06); } }
          @media (prefers-reduced-motion: reduce) { .hero-photo-zoom { animation: none; } }
        `}</style>
        <div className="wrap" style={{ position: "relative" }}>
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
        </div>
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }} className="stats-grid">
              {STATS.map((s, i) => (
                <div key={i} style={{ padding: "48px 28px" }} className="stat-cell">
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

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(64px,8vw,112px)", marginBottom: "clamp(64px,8vw,104px)" }}>
            {pillars.map((p, i) => {
              const flip = i % 2 === 1;
              const photo = (
                <Link
                  href={`/services#${p.id}`}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="svc-pillar-photo-link"
                  style={{ display: "block", position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", border: "1px solid #D9E1E8" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt=""
                    className="svc-pillar-photo"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", left: 18, bottom: 18, display: "flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(11,15,20,0.6)", backdropFilter: "blur(4px)" }}>
                    <span style={{ width: 6, height: 6, background: "#3A5C1A", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: "#F5F2EC", textTransform: "uppercase" }}>
                      Pillar {p.num}
                    </span>
                  </div>
                </Link>
              );
              const text = (
                <div>
                  <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                    <span className="bit-dot" />
                    {p.num} · Core pillar
                  </p>
                  <h3 style={{ fontSize: "clamp(24px,2.8vw,38px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.12, marginBottom: 16 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.7, maxWidth: "48ch", marginBottom: 24 }}>
                    {p.description}
                  </p>
                  {p.bullets && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                      {p.bullets.slice(0, 3).map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15 }}>
                          <span className="bit-dot" style={{ marginTop: 6 }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <MagneticBtn>
                    <Link href={`/services#${p.id}`} className="btn btn-primary" style={{ fontSize: 14 }}>
                      Explore {p.pillarLabel} →
                    </Link>
                  </MagneticBtn>
                </div>
              );
              return (
                <Reveal key={p.id} delay={i * 80}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: flip ? "1.1fr 0.9fr" : "0.9fr 1.1fr", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}
                    className="svc-pillar-row"
                  >
                    {flip ? (
                      <>
                        <div>{text}</div>
                        <div>{photo}</div>
                      </>
                    ) : (
                      <>
                        <div>{photo}</div>
                        <div>{text}</div>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

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
                    <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, color: "#9098A4", letterSpacing: "0.1em", flexShrink: 0 }}>{s.num}</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          .svc-pillar-photo { transition: transform 0.5s cubic-bezier(0.2,0.7,0.2,1); }
          .svc-pillar-photo-link:hover .svc-pillar-photo { transform: scale(1.04); }
          @media (max-width: 900px) {
            .services-head { grid-template-columns: 1fr !important; }
            .svc-pillar-row { grid-template-columns: 1fr !important; gap: 24px !important; }
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
          <IndustriesStack industries={INDUSTRIES} />
        </div>
        <style>{`
          @media (max-width: 900px) { .ind-head { grid-template-columns: 1fr !important; } }
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
          <Reveal>
            <WorkCoverflow clients={CLIENTS} />
          </Reveal>
          <Reveal delay={CLIENTS.length * 80}>
            <Link
              href="/work#count-technologies"
              className="link-arrow"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginTop: 44, textDecoration: "none" }}
            >
              <span className="bit-dot" />
              <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "#A9C77E" }}>
                CURRENTLY BUILDING 5 SYSTEMS FOR COUNT TECHNOLOGIES →
              </span>
            </Link>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) { .work-head { grid-template-columns: 1fr !important; } }
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="steps-grid">
              {HOW_WE_WORK.map((step) => (
                <div key={step.num} style={{ padding: "32px 24px 28px", minHeight: 220 }} className="step-cell">
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.12em", color: "#7BA84F", marginBottom: 20 }}>{step.num}</div>
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
          }
          @media (max-width: 480px) {
            .steps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section section--ink" id="why-northbit">
        <div className="wrap">
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, color: "#F5F2EC", maxWidth: "24ch", paddingBottom: 48 }}>
              Why operators choose Northbit.
            </h2>
          </Reveal>
          <div style={{ borderTop: "1px solid #232931" }}>
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ display: "grid", gridTemplateColumns: "52px 1fr 2.2fr", gap: "0 40px", padding: "36px 0", borderBottom: "1px solid #232931", alignItems: "start" }} className="diff-row">
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#4a5260", paddingTop: 3 }}>0{i + 1}</div>
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
                  <span style={{ fontFamily: "var(--font-clash-grotesk), sans-serif", fontSize: 32, fontWeight: 700, color: "#F5F2EC", letterSpacing: "-0.02em" }}>SP</span>
                </div>
              </div>
              <div style={{ padding: "40px 44px", background: "#F5F2EC" }} className="founder-bio">
                <h3 style={{ fontSize: "clamp(24px,2.8vw,40px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 6 }}>{CONTACT.founder}</h3>
                <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "#3A5C1A", textTransform: "uppercase", marginBottom: 20 }}>{CONTACT.founderTitle}</p>
                <p style={{ fontSize: 15, color: "#5C6470", lineHeight: 1.7, maxWidth: "56ch", marginBottom: 14 }}>
                  Sean leads Northbit Labs and oversees every client engagement. He works hands-on across software architecture, AI implementation and business strategy.
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
