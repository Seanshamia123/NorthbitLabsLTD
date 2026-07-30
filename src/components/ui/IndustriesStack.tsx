"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Industry {
  num: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  featured?: boolean;
}

const AUTOPLAY_MS = 5000;
const EASE = [0.2, 0.7, 0.2, 1] as const;

function TextPanel({ ind, reduceMotion }: { ind: Industry; reduceMotion: boolean | null }) {
  return (
    <motion.div
      key={ind.slug}
      initial={reduceMotion ? {} : { opacity: 0, x: -48 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={reduceMotion ? {} : { opacity: 0, scale: 0.94, transition: { duration: 0.35, ease: EASE } }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <span
        style={{
          fontFamily: "var(--font-satoshi), system-ui, sans-serif",
          fontSize: 13,
          color: "#9098A4",
          letterSpacing: "0.08em",
        }}
      >
        {ind.num}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-clash-grotesk), sans-serif",
          fontSize: "clamp(26px,2.6vw,38px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.12,
          marginTop: 10,
          marginBottom: 18,
        }}
      >
        {ind.title}
        {ind.featured && (
          <span
            style={{
              marginLeft: 12,
              fontFamily: "var(--font-satoshi), system-ui, sans-serif",
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "#3A5C1A",
              background: "rgba(58,92,26,0.1)",
              padding: "3px 9px",
              borderRadius: 999,
              verticalAlign: "middle",
              fontWeight: 500,
            }}
          >
            ACTIVE
          </span>
        )}
      </h3>
      <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.65, maxWidth: "38ch", marginBottom: 24 }}>
        {ind.description}
      </p>
      <Link href={`/industries#${ind.slug}`} className="link-arrow" style={{ fontSize: 14 }}>
        Learn more →
      </Link>
    </motion.div>
  );
}

function ImageCard({
  ind,
  index,
  activeIndex,
  justReset,
}: {
  ind: Industry;
  index: number;
  activeIndex: number;
  justReset: boolean;
}) {
  const revealed = index <= activeIndex;
  const isTop = index === activeIndex;
  const tilt = ((index % 5) - 2) * 1.4;

  return (
    <motion.div
      style={{ position: "absolute", inset: 0, zIndex: index, willChange: "transform, opacity" }}
      animate={{
        opacity: revealed ? 1 : 0,
        scale: isTop ? 1 : revealed ? 1 : 0.88,
        y: revealed ? 0 : 48,
        rotate: tilt,
      }}
      transition={justReset ? { duration: 0 } : { duration: 0.6, ease: EASE }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid #D9E1E8",
          background: "#0B0F14",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ind.image}
          alt={ind.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            left: 16,
            bottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(11,15,20,0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span style={{ width: 6, height: 6, background: "#3A5C1A", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-satoshi), system-ui, sans-serif",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "#F5F2EC",
              textTransform: "uppercase",
            }}
          >
            {ind.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesStack({ industries }: { industries: Industry[] }) {
  const shouldReduceMotion = useReducedMotion();
  const count = industries.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);

  let justReset = false;
  if (activeIndex !== prevIndex) {
    justReset = activeIndex < prevIndex;
    setPrevIndex(activeIndex);
  }

  const goTo = useCallback((i: number) => setActiveIndex(((i % count) + count) % count), [count]);
  const advance = useCallback(() => setActiveIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (shouldReduceMotion || paused) return;
    const id = setTimeout(advance, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [activeIndex, paused, shouldReduceMotion, advance]);

  const active = industries[activeIndex];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="ind-stack-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 72, alignItems: "center" }}>
        <div>
          <div style={{ position: "relative", minHeight: 220 }}>
            <AnimatePresence mode="wait" initial={false}>
              <TextPanel key={active.slug} ind={active} reduceMotion={shouldReduceMotion} />
            </AnimatePresence>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 32 }}>
            <div style={{ display: "flex", gap: 4, flex: 1, maxWidth: 220 }}>
              {industries.map((ind, i) => (
                <button
                  key={ind.slug}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${ind.title}`}
                  style={{
                    position: "relative",
                    height: 3,
                    flex: 1,
                    background: "#D9E1E8",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {i < activeIndex && (
                    <span style={{ position: "absolute", inset: 0, background: "#3A5C1A" }} />
                  )}
                  {i === activeIndex && !shouldReduceMotion && (
                    <span
                      key={`fill-${activeIndex}`}
                      className="ind-fill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "#3A5C1A",
                        transformOrigin: "left",
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                  {i === activeIndex && shouldReduceMotion && (
                    <span style={{ position: "absolute", inset: 0, background: "#3A5C1A" }} />
                  )}
                </button>
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-satoshi), system-ui, sans-serif",
                fontSize: 12,
                letterSpacing: "0.06em",
                color: "#5C6470",
                flexShrink: 0,
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <button
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next industry"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid #D9E1E8",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                fontSize: 15,
                transition: "background-color 0.2s cubic-bezier(0.2,0.7,0.2,1), color 0.2s cubic-bezier(0.2,0.7,0.2,1), border-color 0.2s cubic-bezier(0.2,0.7,0.2,1)",
              }}
              className="ind-next-btn"
            >
              →
            </button>
          </div>
        </div>

        <div className="ind-stack-photo" style={{ position: "relative", width: "100%", maxWidth: 440, aspectRatio: "4/5", marginLeft: "auto", overflow: "hidden" }}>
          {industries.map((ind, i) => (
            <ImageCard key={ind.slug} ind={ind} index={i} activeIndex={activeIndex} justReset={justReset} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ind-fill-anim { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .ind-fill { animation: ind-fill-anim ${AUTOPLAY_MS}ms linear forwards; }
        .ind-next-btn:hover { background: #0B0F14; color: #F5F2EC; border-color: #0B0F14; }
        @media (max-width: 860px) {
          .ind-stack-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ind-stack-photo { margin-left: auto !important; margin-right: auto !important; }
        }
      `}</style>
    </div>
  );
}
