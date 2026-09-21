"use client";
import { useEffect, useRef } from "react";

// Magnetic hover: the child eases toward the cursor and springs back on leave.
// Implemented with a requestAnimationFrame spring (no framer-motion) so pages
// whose only interactive flourish is this button ship no animation library.
// Spring matches the previous useSpring config: stiffness 240, damping 18,
// mass 0.6 (damping ratio ~0.75, a light momentum overshoot). Fine-pointer and
// motion-OK only; touch and reduced-motion get a static button.
export default function MagneticBtn({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const STIFF = 240;
    const DAMP = 18;
    const MASS = 0.6;

    let px = 0, py = 0; // presentation (current) value
    let vx = 0, vy = 0; // velocity
    let tx = 0, ty = 0; // target
    let raf = 0;
    let running = false;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      // Independent X and Y springs (decomposed 2D motion).
      vx += ((-STIFF * (px - tx) - DAMP * vx) / MASS) * dt;
      vy += ((-STIFF * (py - ty) - DAMP * vy) / MASS) * dt;
      px += vx * dt;
      py += vy * dt;

      const settled =
        Math.abs(px - tx) < 0.1 && Math.abs(py - ty) < 0.1 &&
        Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1;
      if (settled) {
        px = tx; py = ty;
        inner.style.transform = `translate(${px}px, ${py}px)`;
        running = false;
        return;
      }
      inner.style.transform = `translate(${px.toFixed(2)}px, ${py.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };

    const ensure = () => {
      if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * 0.38;
      ty = (e.clientY - (r.top + r.height / 2)) * 0.38;
      ensure();
    };
    const onLeave = () => {
      tx = 0; ty = 0;
      ensure();
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ display: "inline-block" }}>
      <div ref={innerRef} style={{ display: "inline-block", willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
