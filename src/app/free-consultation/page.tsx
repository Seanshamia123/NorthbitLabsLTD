"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { CONTACT } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const INCLUDED = [
  "A focused conversation about the problem you are trying to solve",
  "An honest read on whether you need new software, a better process, or nothing at all",
  "A short list of next steps you can act on, with or without us",
];

export default function FreeConsultationPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/free-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    fd.get("name")    as string,
          company: fd.get("company") as string,
          email:   fd.get("email")   as string,
          phone:   fd.get("phone")   as string,
          message: fd.get("message") as string,
          website: fd.get("website") as string, // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="hero-ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)", overflow: "hidden" }}>
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
              h1Style={{ fontSize: "clamp(44px,6vw,88px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.03, maxWidth: "20ch" }}
              lines={[
                "Free technology",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>consultation.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "56ch", lineHeight: 1.65 }}>
              A no-obligation 30-minute call with a senior practitioner, not a salesperson. We work with operators
              and founders in Kenya, East Africa, across Africa, Europe and worldwide. Tell us what you are trying
              to build; we will tell you honestly what it takes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FORM + WHAT'S INCLUDED */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="consult-layout">
            {/* Form */}
            <Reveal>
              <div>
                <h2 style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
                  Request your free consultation.
                </h2>

                {status === "success" ? (
                  <div style={{ background: "#F5F2EC", border: "1px solid #D9E1E8", borderRadius: 8, padding: "40px 36px" }}>
                    <div style={{ width: 44, height: 44, background: "rgba(58,92,26,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#3A5C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 12 }}>Request received.</h3>
                    <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.65, marginBottom: 24 }}>
                      We will get back to you within 24 hours to schedule your free consultation. If your matter is
                      urgent, call us directly at{" "}
                      <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} style={{ color: "#3A5C1A", fontWeight: 500 }}>{CONTACT.phone}</a>.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn btn-ghost"
                      style={{ fontSize: 14 }}
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {/* Honeypot — visually hidden, bots fill it */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", height: 0, width: 0, overflow: "hidden", opacity: 0 }}
                    />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label htmlFor="name" style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                          disabled={status === "loading"}
                          className="field-input"
                          style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label htmlFor="company" style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          placeholder="Company name"
                          autoComplete="organization"
                          disabled={status === "loading"}
                          className="field-input"
                          style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label htmlFor="email" style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          autoComplete="email"
                          required
                          disabled={status === "loading"}
                          className="field-input"
                          style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label htmlFor="phone" style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="+254 7XX XXX XXX"
                          autoComplete="tel"
                          disabled={status === "loading"}
                          className="field-input"
                          style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", width: "100%" }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <label htmlFor="message" style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C6470" }}>
                        What are you trying to solve?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="A short description of the problem, system or decision you need help with."
                        disabled={status === "loading"}
                        className="field-input"
                        style={{ font: "inherit", fontSize: 16, padding: "14px 16px", border: "1px solid #D9E1E8", borderRadius: 4, color: "#0B0F14", background: "#F5F2EC", outline: "none", resize: "vertical", width: "100%" }}
                      />
                    </div>

                    {status === "error" && (
                      <div style={{ background: "rgba(200,40,40,0.07)", border: "1px solid rgba(200,40,40,0.2)", borderRadius: 4, padding: "12px 16px", fontSize: 14, color: "#b33" }}>
                        {errorMsg || "Something went wrong. Please try again."}
                      </div>
                    )}

                    <MagneticBtn>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn btn-primary contact-submit"
                        style={{ alignSelf: "flex-start", fontSize: 15, opacity: status === "loading" ? 0.6 : 1 }}
                      >
                        {status === "loading" ? "Sending…" : "Book my free consultation →"}
                      </button>
                    </MagneticBtn>
                  </form>
                )}

                <style>{`@media (max-width: 480px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
              </div>
            </Reveal>

            {/* What's included */}
            <Reveal delay={100}>
              <div>
                <h2 style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 32 }}>
                  What&apos;s included.
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 16 }}>
                  {INCLUDED.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 16, color: "#0B0F14", lineHeight: 1.6 }}>
                      <span className="bit-dot" style={{ marginTop: 8, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ background: "#0B0F14", borderRadius: 8, padding: "28px 28px" }}>
                  <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#3A5C1A", marginBottom: 12 }}>
                    WHO THIS IS FOR
                  </div>
                  <p style={{ fontSize: 15, color: "#8A919C", lineHeight: 1.65 }}>
                    Founders and operators anywhere (Kenya, East Africa, across the wider African continent, Europe
                    or elsewhere) who need a clear technology direction before committing budget to a build. No
                    pitch deck, no pressure to sign anything.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) { .consult-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
          @media (max-width: 400px) { .contact-submit { align-self: stretch !important; justify-content: center; } }
        `}</style>
      </section>
    </>
  );
}
