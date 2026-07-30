"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type WorkClient = {
  id: string;
  name: string;
  category: string;
  url: string;
  image: string;
  tags: string[];
  headline: string;
};

const SCALE = [1, 0.82, 0.66];
const OPACITY = [1, 0.55, 0.28];
const OFFSET_PCT = [0, 60, 108];
const AUTOPLAY_MS = 3400;

export default function WorkCoverflow({ clients }: { clients: WorkClient[] }) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const reduced = useReducedMotion();
  const total = clients.length;

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduced, total]);

  return (
    <div
      className="wcf-root"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div className="wcf-stage">
        {clients.map((client, i) => {
          let diff = i - active;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;
          const abs = Math.min(Math.abs(diff), SCALE.length - 1);
          const sign = Math.sign(diff);
          const scale = SCALE[abs];
          const opacity = OPACITY[abs];
          const offset = sign * OFFSET_PCT[abs];
          const isCenter = diff === 0;

          const cardInner = (
            <div
              className="wcf-card"
              style={{ background: "#14181F", borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column", border: "1px solid #232931", height: "100%" }}
            >
              <div style={{ aspectRatio: "16/9", background: "#1C2129", position: "relative", overflow: "hidden" }}>
                <img
                  src={client.image}
                  alt={`${client.name} — live site`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,15,20,0.88) 0%, rgba(11,15,20,0.12) 46%, transparent 70%)" }} />
                <div style={{ position: "absolute", left: 16, top: 14, fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 9, letterSpacing: "0.28em", color: "#A9C77E", background: "rgba(11,15,20,0.55)", backdropFilter: "blur(4px)", padding: "3px 10px", borderRadius: 999, zIndex: 1 }}>{client.tags[0]}</div>
                <div style={{ position: "absolute", left: 16, bottom: 14, fontFamily: "var(--font-clash-grotesk), sans-serif", fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#F5F2EC", lineHeight: 1, zIndex: 1 }}>{client.name}</div>
              </div>
              <div style={{ padding: "24px 26px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 10, color: "#9098A4", letterSpacing: "0.12em", textTransform: "uppercase" }}>{client.category}</div>
                <h3 style={{ fontSize: "clamp(15px,1.6vw,19px)", fontWeight: 600, color: "#F5F2EC", letterSpacing: "-0.01em", lineHeight: 1.25 }}>{client.headline}</h3>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#4D7724", display: "inline-flex", gap: 6, alignItems: "center", marginTop: "auto", paddingTop: 8 }}>View live site →</span>
              </div>
            </div>
          );

          const commonStyle: React.CSSProperties = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translateX(${offset}%) scale(${scale})`,
            zIndex: 30 - abs * 10,
            opacity,
            filter: isCenter ? "none" : `blur(${abs}px) brightness(${1 - abs * 0.18})`,
            transition: reduced ? "none" : "transform 0.7s cubic-bezier(0.22,0.9,0.24,1), opacity 0.7s ease, filter 0.7s ease",
          };

          if (isCenter) {
            return (
              <a
                key={client.id}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wcf-slot"
                style={{ ...commonStyle, textDecoration: "none", color: "inherit" }}
              >
                {cardInner}
              </a>
            );
          }

          return (
            <button
              key={client.id}
              type="button"
              aria-label={`Show ${client.name}`}
              onClick={() => setActive(i)}
              className="wcf-slot"
              style={{ ...commonStyle, border: "none", padding: 0, background: "none", cursor: "pointer" }}
            >
              {cardInner}
            </button>
          );
        })}
      </div>

      <div className="wcf-dots">
        {clients.map((client, i) => (
          <button
            key={client.id}
            type="button"
            aria-label={`Show ${client.name}`}
            onClick={() => setActive(i)}
            className="wcf-dot"
            data-active={i === active}
          />
        ))}
      </div>

      <style>{`
        .wcf-root { position: relative; }
        .wcf-stage {
          position: relative;
          height: clamp(420px, 44vw, 540px);
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .wcf-slot {
          width: clamp(260px, 30vw, 380px);
          display: block;
        }
        .wcf-card { will-change: transform; }
        .wcf-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 28px;
        }
        .wcf-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          background: #2A3038;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s ease, width 0.3s ease;
        }
        .wcf-dot[data-active="true"] { background: #4D7724; width: 22px; }
        @media (max-width: 760px) {
          .wcf-stage { height: clamp(340px, 74vw, 420px); }
          .wcf-slot { width: clamp(220px, 66vw, 300px); }
        }
      `}</style>
    </div>
  );
}
