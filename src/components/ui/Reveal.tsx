"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

// Scroll-triggered fade-up via IntersectionObserver + CSS (see globals.css
// .nb-reveal). Framer-motion is not imported here, so pages that only use
// Reveal/FadeUp/HeroReveal ship no animation-library JavaScript at all.
export default function Reveal({ children, delay = 0, style, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`nb-reveal${inView ? " nb-reveal--in" : ""}${className ? " " + className : ""}`}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
