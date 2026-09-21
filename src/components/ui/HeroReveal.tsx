import { ReactNode } from "react";

// CSS-driven reveal (no framer-motion). The heading is the page's largest
// contentful paint, so it must render in the server HTML and animate without
// waiting for JavaScript to hydrate - otherwise mobile LCP stalls for seconds.
// The animation runs on the compositor from first paint; reduced-motion users
// see the text immediately. Visual params match the previous JS version:
// 0.82s duration, cubic-bezier(0.16,1,0.3,1) easing, 0.13s per-line stagger.
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function HeroReveal({
  lines,
  h1Style,
  delay = 0,
}: {
  lines: ReactNode[];
  h1Style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <h1 style={h1Style}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}
        >
          <span
            className="hr-line-inner"
            style={{ display: "block", ["--hr-delay" as string]: `${delay + i * 0.13}s` }}
          >
            {line}
          </span>
        </span>
      ))}
      <style>{`
        .hr-line-inner {
          animation: hr-rise 0.82s ${EASE} both;
          animation-delay: var(--hr-delay, 0s);
          will-change: transform;
        }
        @keyframes hr-rise {
          from { transform: translateY(105%); }
          to { transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hr-line-inner { animation: none; transform: none; }
        }
      `}</style>
    </h1>
  );
}
