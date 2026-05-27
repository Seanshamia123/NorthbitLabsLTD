"use client";

import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { CONTACT } from "@/lib/data";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const name    = (fd.get("name")    as string) || "";
  const company = (fd.get("company") as string) || "";
  const email   = (fd.get("email")   as string) || "";
  const message = (fd.get("message") as string) || "";

  const subject = `Enquiry from ${name}${company ? ` — ${company}` : ""}`;
  const body    = `Name: ${name}\nCompany: ${company || "—"}\nReply-to: ${email}\n\n${message}`;

  window.open(
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  );
}

export default function ContactPage() {
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
                "Start with",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>a conversation.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              Every engagement begins with a free 30-minute discovery call or a scheduled physical meeting. We use that
              time to understand your business and tell you honestly whether we can help. If we can, we send a written
              proposal within five working days.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="section section--frost">
        <div className="wrap">
          <Reveal>
            <div style={{ paddingBottom: 48 }}>
              <h2 style={{ fontSize: "clamp(24px,3vw,44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: "22ch" }}>
                Two ways to begin.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="start-grid">
              {[
                {
                  num: "01",
                  title: "Discovery Call",
                  sub: "30 minutes · Free · No obligation",
                  desc: "A focused conversation about what you are trying to build. We listen, ask sharp questions and tell you honestly whether we have the capability and bandwidth to help.",
                  cta: "Book a call",
                  href: `mailto:${CONTACT.email}?subject=Discovery Call Request`,
                },
                {
                  num: "02",
                  title: "Physical Meeting",
                  sub: "Nairobi · Scheduled in advance",
                  desc: "Prefer to meet in person? We are based locally and happy to meet at your office or ours. We bring a notepad, not a presentation.",
                  cta: "Schedule a meeting",
                  href: `mailto:${CONTACT.email}?subject=Physical Meeting Request`,
                },
              ].map((item) => (
                <div key={item.num} style={{ background: "#F5F2EC", border: "1px solid #D9E1E8", borderRadius: 8, padding: "40px 36px" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: "#D9E1E8", marginBottom: 20 }}>{item.num}</div>
                  <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.14em", color: "#3A5C1A", marginBottom: 20 }}>{item.sub}</p>
                  <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.7, marginBottom: 28 }}>{item.desc}</p>
                  <MagneticBtn>
                    <a href={item.href} className="btn btn-primary" style={{ fontSize: 15 }}>{item.cta} →</a>
                  </MagneticBtn>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 680px) { .start-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-layout">
            {/* Form */}
            <Reveal>
              <div>
                <h2 style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
                  Send a message.
                </h2>
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label htmlFor="name" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        className="field-input"
                        style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label htmlFor="company" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        placeholder="Company name"
                        autoComplete="organization"
                        className="field-input"
                        style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label htmlFor="email" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      required
                      className="field-input"
                      style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label htmlFor="message" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                      What are you trying to build?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe the problem or the system you have in mind. The more specific, the better."
                      className="field-input"
                      style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", resize: "vertical", width: "100%" }}
                    />
                  </div>

                  <MagneticBtn>
                    <button type="submit" className="btn btn-primary contact-submit" style={{ alignSelf: "flex-start", fontSize: 15 }}>
                      Send message →
                    </button>
                  </MagneticBtn>
                </form>
                <style>{`@media (max-width: 480px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
              </div>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={100}>
              <div>
                <h2 style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
                  Reach us directly.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #D9E1E8" }}>
                  {[
                    { label: "Email", val: CONTACT.email, href: `mailto:${CONTACT.email}` },
                    { label: "Phone", val: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
                    { label: "Registered Address", val: `${CONTACT.address}\n${CONTACT.district}`, href: null },
                    { label: "Postal", val: CONTACT.postal, href: null },
                    { label: "Founder", val: CONTACT.founder, href: null },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "22px 0", borderBottom: "1px solid #D9E1E8" }}>
                      <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", color: "#9098A4", textTransform: "uppercase", marginBottom: 6 }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: 17, fontWeight: 500, color: "#0B0F14", transition: "color 0.15s" }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#3A5C1A")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#0B0F14")}>
                          {item.val}
                        </a>
                      ) : (
                        <p style={{ fontSize: 16, color: "#0B0F14", whiteSpace: "pre-line", lineHeight: 1.6 }}>{item.val}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 32, background: "#0B0F14", borderRadius: 8, padding: "28px 28px" }}>
                  <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", marginBottom: 12 }}>
                    WHAT HAPPENS NEXT
                  </div>
                  <p style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.65 }}>
                    We respond to every enquiry within 24 hours. If we believe we can help, we will propose a 30-minute
                    call or a physical meeting. A written proposal follows within 5 working days after that conversation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) { .contact-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
          @media (max-width: 400px) { .contact-submit { align-self: stretch !important; justify-content: center; } }
        `}</style>
      </section>
    </>
  );
}
