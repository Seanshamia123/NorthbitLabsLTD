import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "Careers — NorthBit Labs",
  description: "Join a small, senior team building real systems for real businesses in Kenya. No junior work, no inflated teams.",
  openGraph: {
    title: "Careers — NorthBit Labs",
    description: "Join a small, senior team building real systems for real businesses in Kenya. No junior work, no inflated teams.",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Careers — NorthBit Labs" },
};

const talentProfiles = [
  {
    num: "01",
    title: "Senior Full-Stack Engineer",
    description:
      "You have shipped production systems, not just side projects. You are comfortable across the stack, can hold a client conversation without a PM in the room, and you care about how the software actually gets used.",
    traits: [
      "5+ years across frontend and backend in production",
      "TypeScript, React, Node.js — or an equivalent stack you can defend",
      "Mpesa / payment integration experience is a strong plus",
      "Can translate a business problem into a technical decision",
    ],
  },
  {
    num: "02",
    title: "AI & Automation Engineer",
    description:
      "You build things with LLMs and automation tools that solve real operational problems — not demos. You can scope an automation roadmap from a business workflow and see it through to deployment.",
    traits: [
      "Production experience with LLM pipelines, agents or workflow automation",
      "LangChain, LlamaIndex, or similar — and honest about their limits",
      "WhatsApp Business API, web hooks, or inter-system integrations",
      "Comfortable explaining trade-offs to non-technical clients",
    ],
  },
  {
    num: "03",
    title: "Technology Consultant",
    description:
      "You have been on enough projects to know what goes wrong before it does. You help businesses make sound technology decisions — build vs. buy, right-sizing scope, picking the right battle first.",
    traits: [
      "Background in software delivery, engineering leadership, or architecture",
      "Can run a technology audit and produce something a business owner can act on",
      "Kenya / East Africa market knowledge is a strong advantage",
      "Writes clearly enough that clients quote you back to their board",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "22ch" }}
              lines={[
                "Senior work.",
                <em key="sub" style={{ fontStyle: "italic", fontWeight: 400 }}>Real clients.</em>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              We are small by design. When we hire, we hire senior practitioners who want to own their work, talk
              directly to clients and ship things that matter. No layers, no inflated teams, no junior grunt work.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--frost">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="phil-grid">
              <div>
                <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
                  We hire for ownership, not output.
                </h2>
                <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75, marginBottom: 18 }}>
                  Everyone at NorthBit Labs touches the client. You will be on calls, on site when needed, and
                  accountable for the quality of what ships. We do not separate &ldquo;developers&rdquo; from
                  &ldquo;client-facing&rdquo; roles.
                </p>
                <p style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75 }}>
                  Engagements are project-based or retainer-based. We build long-term relationships with our engineers
                  because the clients we keep require people who know their system deeply.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { title: "Direct client access", body: "You work with the client, not just a ticket backlog." },
                  { title: "Senior-only environment", body: "Everyone around you has done this before." },
                  { title: "Kenya-based, locally rooted", body: "We are registered here and proud of it." },
                  { title: "Outcome-driven work", body: "We measure success by business impact, not story points." },
                ].map((v) => (
                  <div key={v.title} style={{ display: "flex", gap: 16, padding: "20px 20px", background: "#F5F2EC", border: "1px solid #D9E1E8", borderRadius: 6 }}>
                    <span style={{ width: 8, height: 8, background: "#3A5C1A", flexShrink: 0, marginTop: 6, borderRadius: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{v.title}</div>
                      <div style={{ fontSize: 14, color: "#5C6470" }}>{v.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 760px) { .phil-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
      </section>

      {/* TALENT BENCH */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 64, alignItems: "end", paddingBottom: 56 }} className="bench-head">
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.22em", color: "#9098A4", textTransform: "uppercase", marginBottom: 16 }}>
                  Who we want to hear from
                </p>
                <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  No open roles right now.
                </h2>
              </div>
              <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "#5C6470", lineHeight: 1.7, maxWidth: "58ch" }}>
                We do not post roles until we have a specific client need. But we are always building our bench — a small
                group of trusted practitioners we can bring in when the right project arrives. If you fit one of the
                profiles below, send us a message.
              </p>
            </div>
          </Reveal>

          <div style={{ borderTop: "1px solid #D9E1E8" }}>
            {talentProfiles.map((profile, i) => (
              <Reveal key={profile.num} delay={i * 90}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1.3fr 1fr",
                    gap: "0 48px",
                    padding: "44px 0",
                    borderBottom: "1px solid #D9E1E8",
                    alignItems: "start",
                  }}
                  className="bench-row"
                >
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: "#D9E1E8", paddingTop: 4 }}>
                    {profile.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "clamp(20px,2.2vw,30px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 16 }}>
                      {profile.title}
                    </h3>
                    <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.7, maxWidth: "50ch" }}>
                      {profile.description}
                    </p>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.2em", color: "#9098A4", textTransform: "uppercase", marginBottom: 14 }}>
                      What fits
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                      {profile.traits.map((t) => (
                        <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "#0B0F14", lineHeight: 1.55 }}>
                          <span style={{ width: 6, height: 6, background: "#3A5C1A", display: "inline-block", flexShrink: 0, marginTop: 5, borderRadius: 1 }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <MagneticBtn>
                      <a
                        href={`mailto:${CONTACT.email}?subject=Talent Bench: ${profile.title}`}
                        className="btn btn-primary"
                        style={{ fontSize: 14 }}
                      >
                        Reach out →
                      </a>
                    </MagneticBtn>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .bench-row { grid-template-columns: 48px 1fr !important; gap: 0 24px !important; } }
          @media (max-width: 760px) { .bench-head { grid-template-columns: 1fr !important; gap: 20px !important; padding-bottom: 36px !important; } }
          @media (max-width: 680px) { .bench-row { grid-template-columns: 1fr !important; gap: 20px !important; } }
        `}</style>
      </section>

      {/* OPEN APPLICATION */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="open-app-grid">
              <div>
                <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, color: "#F5F2EC", marginBottom: 20 }}>
                  Don&apos;t fit a profile exactly?
                </h2>
                <p style={{ fontSize: 17, color: "#8A919C", lineHeight: 1.7 }}>
                  If you are exceptional at something we have not described, tell us what that is. We are more interested
                  in what you can do than in whether your title matches ours.
                </p>
              </div>
              <div>
                <a
                  href={`mailto:${CONTACT.email}?subject=Open Application — NorthBit Labs`}
                  className="btn btn-signal"
                  style={{ fontSize: 16 }}
                >
                  Send an open application →
                </a>
                <p style={{ fontSize: 14, color: "#9098A4", marginTop: 16, maxWidth: "36ch", lineHeight: 1.6 }}>
                  We read every message personally. If there is a fit — now or in the future — we will get back to you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 760px) { .open-app-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>
    </>
  );
}
