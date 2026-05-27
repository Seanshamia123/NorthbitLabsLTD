"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

const ease = [0.23, 1, 0.32, 1] as const;

export default function Reveal({ children, delay = 0, style, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -48px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      animate={(shouldReduce || isInView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.55, delay: delay / 1000, ease }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
