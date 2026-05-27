"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

const ease = [0.23, 1, 0.32, 1] as const;

export default function FadeUp({ children, delay = 0, style, className }: FadeUpProps) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.55, delay, ease }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
