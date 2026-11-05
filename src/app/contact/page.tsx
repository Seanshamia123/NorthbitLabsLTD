"use client";

import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import ContactForm from "@/components/ui/ContactForm";
import { CONTACT } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)", overflow: "hidden" }}>
        {/* office/desk photo - slow Ken Burns drift */}
        <div aria-hidden="true" className="hero-photo-zoom" style={{ position: "absolute", inset: 0, backgroundImage: "url('/people/contact-hero.webp')", backgroundSize: "cover", backgroundPosition: "center right", pointerEvents: "none" }} />
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
                  href: "#enquiry",
                },
                {
                  num: "02",
                  title: "Physical Meeting",
                  sub: "Nairobi · Scheduled in advance",
                  desc: "Prefer to meet in person? We are based locally and happy to meet at your office or ours. We bring a notepad, not a presentation.",
                  cta: "Schedule a meeting",
                  href: "#enquiry",
                },
              ].map((item) => (
                <div key={item.num} style={{ background: "#F5F2EC", border: "1px solid #D9E1E8", borderRadius: 8, padding: "40px 36px" }}>
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", color: "#D9E1E8", marginBottom: 20 }}>{item.num}</div>
                  <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.14em", color: "#3A5C1A", marginBottom: 20 }}>{item.sub}</p>
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
      <section className="section" id="enquiry" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-layout">
            {/* Form */}
            <Reveal>
              <div>
                <h2 style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
                  Send a message.
                </h2>
                <ContactForm />
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
                      <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "#9098A4", textTransform: "uppercase", marginBottom: 6 }}>
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
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", marginBottom: 12 }}>
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
        `}</style>
      </section>
    </>
  );
}
