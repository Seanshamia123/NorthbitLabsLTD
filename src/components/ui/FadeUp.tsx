import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

// Entrance fade-up as a pure-CSS animation (see globals.css .nb-fadeup).
// No framer-motion and no "use client": it runs on the compositor from first
// paint. `delay` is in seconds, matching the previous API.
export default function FadeUp({ children, delay = 0, style, className }: FadeUpProps) {
  return (
    <div
      className={`nb-fadeup${className ? " " + className : ""}`}
      style={{ ...style, ["--fadeup-delay" as string]: `${delay}s` }}
    >
      {children}
    </div>
  );
}
