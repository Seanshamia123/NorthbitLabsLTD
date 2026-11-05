"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import MagneticBtn from "@/components/ui/MagneticBtn";
import { CONTACT } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const labelStyle: CSSProperties = {
  fontFamily: "var(--font-satoshi), system-ui, sans-serif",
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#5C6470",
};

const fieldStyle: CSSProperties = {
  font: "inherit",
  fontSize: 16,
  padding: "14px 16px",
  border: "1px solid #D9E1E8",
  borderRadius: 4,
  color: "#0B0F14",
  background: "#F5F2EC",
  outline: "none",
  width: "100%",
};

const groupStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };

/** Enquiry form. Submissions go to /api/contact, which emails CONTACT_TO_EMAIL. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const loading = status === "loading";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          company: fd.get("company"),
          email: fd.get("email"),
          message: fd.get("message"),
          website: fd.get("website"), // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" style={{ background: "#F5F2EC", border: "1px solid #D9E1E8", borderRadius: 8, padding: "40px 36px", color: "#0B0F14" }}>
        <div style={{ width: 44, height: 44, background: "rgba(58,92,26,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10l4 4 8-8" stroke="#3A5C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 12 }}>Message sent.</h3>
        <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.65, marginBottom: 24 }}>
          We will get back to you within 24 hours. If your matter is urgent, call us directly at{" "}
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} style={{ color: "#3A5C1A", fontWeight: 500 }}>{CONTACT.phone}</a>.
        </p>
        <button onClick={() => setStatus("idle")} className="btn btn-ghost" style={{ fontSize: 14 }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24, color: "#0B0F14" }}>
      {/* Honeypot - visually hidden, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, overflow: "hidden", opacity: 0 }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
        <div style={groupStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input id="name" type="text" name="name" placeholder="Your name" autoComplete="name" required maxLength={120} disabled={loading} className="field-input" style={fieldStyle} />
        </div>
        <div style={groupStyle}>
          <label htmlFor="company" style={labelStyle}>Company</label>
          <input id="company" type="text" name="company" placeholder="Company name" autoComplete="organization" maxLength={120} disabled={loading} className="field-input" style={fieldStyle} />
        </div>
      </div>

      <div style={groupStyle}>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input id="email" type="email" name="email" placeholder="your@email.com" autoComplete="email" required maxLength={254} disabled={loading} className="field-input" style={fieldStyle} />
      </div>

      <div style={groupStyle}>
        <label htmlFor="message" style={labelStyle}>What are you trying to build?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={3000}
          placeholder="Describe the problem or the system you have in mind. The more specific, the better."
          disabled={loading}
          className="field-input"
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>

      {status === "error" && (
        <div role="alert" style={{ background: "rgba(200,40,40,0.07)", border: "1px solid rgba(200,40,40,0.2)", borderRadius: 4, padding: "12px 16px", fontSize: 14, color: "#b33" }}>
          {errorMsg || "Something went wrong. Please try again."} You can also email us at{" "}
          <a href={`mailto:${CONTACT.email}`} style={{ color: "inherit", textDecoration: "underline" }}>{CONTACT.email}</a>.
        </div>
      )}

      <MagneticBtn>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary contact-submit"
          style={{ alignSelf: "flex-start", fontSize: 15, opacity: loading ? 0.6 : 1 }}
        >
          {loading ? "Sending…" : "Send message →"}
        </button>
      </MagneticBtn>

      <style>{`
        @media (max-width: 480px) { .form-row { grid-template-columns: 1fr !important; } }
        @media (max-width: 400px) { .contact-submit { align-self: stretch !important; justify-content: center; } }
      `}</style>
    </form>
  );
}
