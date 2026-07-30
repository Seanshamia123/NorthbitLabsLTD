"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";

interface Service {
  id: string;
  image: string;
  num: string;
  title: string;
  pillar: boolean;
  pillarLabel?: string;
  description: string;
  bullets?: string[];
}

const PILLAR_W = 400;
const STD_W = 300;
const GAP = 24;
const DRIFT_PX_PER_SEC = 22;
const EASE = [0.2, 0.7, 0.2, 1] as const;

function cardWidth(s: Service) {
  return s.pillar ? PILLAR_W : STD_W;
}

export default function ServicesCarousel({ services }: { services: Service[] }) {
  const shouldReduceMotion = useReducedMotion();
  const count = services.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportW, setViewportW] = useState(1200);
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const snappingRef = useRef(false);
  const directionRef = useRef<1 | -1>(1);
  const maxDragRef = useRef(0);
  const lastIndexRef = useRef(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setViewportW(el.clientWidth));
    ro.observe(el);
    setViewportW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // cumulative left-edge offset for each card, plus total track width
  const { offsets, trackWidth } = useMemo(() => {
    const offs: number[] = [];
    let acc = 0;
    for (const s of services) {
      offs.push(acc);
      acc += cardWidth(s) + GAP;
    }
    return { offsets: offs, trackWidth: acc - GAP };
  }, [services]);

  const maxDrag = Math.max(0, trackWidth - viewportW + 48);
  useEffect(() => {
    maxDragRef.current = maxDrag;
  }, [maxDrag]);

  const nearestIndex = useCallback(
    (pos: number) => {
      let nearest = 0;
      let best = Infinity;
      offsets.forEach((off, i) => {
        const target = -Math.min(off, maxDragRef.current);
        const d = Math.abs(target - pos);
        if (d < best) {
          best = d;
          nearest = i;
        }
      });
      return nearest;
    },
    [offsets]
  );

  const syncActiveIndex = useCallback(
    (pos: number) => {
      const idx = nearestIndex(pos);
      if (idx !== lastIndexRef.current) {
        lastIndexRef.current = idx;
        setActiveIndex(idx);
      }
    },
    [nearestIndex]
  );

  const snapTo = useCallback(
    (i: number) => {
      const clamped = ((i % count) + count) % count;
      const target = -Math.min(offsets[clamped], maxDragRef.current);
      snappingRef.current = true;
      animate(x, target, {
        type: "spring",
        stiffness: 260,
        damping: 34,
        onComplete: () => {
          snappingRef.current = false;
        },
      });
      lastIndexRef.current = clamped;
      setActiveIndex(clamped);
    },
    [count, offsets, x]
  );

  // continuous slow horizontal drift — pauses on hover/drag/snap, reverses at each end
  useEffect(() => {
    if (shouldReduceMotion) return;
    let raf: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && !draggingRef.current && !snappingRef.current) {
        let next = x.get() - directionRef.current * DRIFT_PX_PER_SEC * dt;
        const min = -maxDragRef.current;
        if (next <= min) {
          next = min;
          directionRef.current = -1;
        } else if (next >= 0) {
          next = 0;
          directionRef.current = 1;
        }
        x.set(next);
        syncActiveIndex(next);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shouldReduceMotion, x, syncActiveIndex]);

  return (
    <div
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div ref={viewportRef} style={{ overflow: "hidden", cursor: "grab" }}>
        <motion.div
          style={{ display: "flex", alignItems: "flex-start", gap: GAP, x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => {
            draggingRef.current = true;
          }}
          onDragEnd={() => {
            draggingRef.current = false;
            snapTo(nearestIndex(x.get()));
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {services.map((s) => (
            <div
              key={s.id}
              id={s.pillar ? undefined : s.id}
              style={{
                flexShrink: 0,
                width: cardWidth(s),
                border: "1px solid #D9E1E8",
                borderRadius: 8,
                overflow: "hidden",
                background: "#F5F2EC",
                userSelect: "none",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: s.pillar ? "4/3.4" : "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                />
                <div style={{ position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, color: "#F5F2EC", background: "rgba(11,15,20,0.55)", backdropFilter: "blur(4px)", padding: "4px 10px", borderRadius: 999, letterSpacing: "0.08em" }}>
                    {s.num}
                  </span>
                  {s.pillar && (
                    <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "#0B0F14", background: "#A9C77E", padding: "4px 10px", borderRadius: 999 }}>
                      PILLAR
                    </span>
                  )}
                </div>
              </div>
              <div style={{ padding: s.pillar ? "24px 26px 28px" : "20px 22px 24px" }}>
                <h3 style={{ fontSize: s.pillar ? 22 : 18, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: s.pillar ? 15 : 14, color: "#5C6470", lineHeight: 1.6 }}>
                  {s.description}
                </p>
                {s.pillar && s.bullets && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#0B0F14", lineHeight: 1.5 }}>
                        <span className="bit-dot" style={{ marginTop: 5 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 32 }}>
        <button
          onClick={() => snapTo(activeIndex - 1)}
          aria-label="Previous service"
          className="svc-nav-btn"
          style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #D9E1E8", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, fontSize: 15 }}
        >
          ←
        </button>
        <button
          onClick={() => snapTo(activeIndex + 1)}
          aria-label="Next service"
          className="svc-nav-btn"
          style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #D9E1E8", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, fontSize: 15 }}
        >
          →
        </button>
        <div style={{ position: "relative", height: 2, flex: 1, background: "#D9E1E8", maxWidth: 220 }}>
          <motion.div
            style={{ position: "absolute", inset: 0, background: "#3A5C1A", transformOrigin: "left" }}
            animate={{ scaleX: (activeIndex + 1) / count }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        </div>
        <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 12, letterSpacing: "0.06em", color: "#5C6470", flexShrink: 0 }}>
          {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      </div>

      <style>{`
        .svc-nav-btn:hover { background: #0B0F14; color: #F5F2EC; border-color: #0B0F14; }
      `}</style>
    </div>
  );
}
