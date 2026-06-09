"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  name: string;
  category: string;
  tags: string[];
  logo: string;
  brandColor: string;
  dark: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CaseImagePane({ name, category, tags, logo, brandColor, dark }: Props) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: dark ? "#0B0F14" : "#14181F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: 320,
        padding: 48,
        gap: 20,
        cursor: "default",
      }}
    >
      {/* dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(58,92,26,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      {/* base text layer — fades out on hover */}
      <motion.div
        style={{ position: "relative", zIndex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}
        animate={reduced ? {} : { opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.28em",
            color: "#3A5C1A",
            background: "rgba(58,92,26,0.12)",
            padding: "4px 12px",
            borderRadius: 999,
          }}
        >
          {tags[0]}
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(28px,3.5vw,56px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#F5F2EC",
            lineHeight: 0.95,
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div style={{ width: 28, height: 1, background: "rgba(58,92,26,0.6)" }} />
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.22em",
            color: "#9098A4",
          }}
        >
          {category.toUpperCase()}
        </div>
      </motion.div>

      {/* logo reveal — slides up from below on hover */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          padding: 48,
          background: `linear-gradient(135deg, ${brandColor}22 0%, ${brandColor}11 100%)`,
          backdropFilter: "blur(2px)",
        }}
        initial={false}
        animate={reduced ? {} : { y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <img
            src={logo}
            alt={`${name} logo`}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 20,
            fontWeight: 600,
            color: "#F5F2EC",
            letterSpacing: "-0.02em",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "#9098A4",
          }}
        >
          {category.toUpperCase()}
        </div>
      </motion.div>
    </div>
  );
}
