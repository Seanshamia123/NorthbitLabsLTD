"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroReveal({
  lines,
  h1Style,
  delay = 0,
}: {
  lines: ReactNode[];
  h1Style?: React.CSSProperties;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <h1 style={h1Style}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}
        >
          <motion.span
            style={{ display: "block" }}
            initial={reduced ? {} : { y: "105%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.82,
              delay: delay + i * 0.13,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
