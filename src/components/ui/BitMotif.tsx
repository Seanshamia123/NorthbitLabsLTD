"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface BitMotifProps {
  className?: string;
  size?: number;
}

export default function BitMotif({ className = "", size = 480 }: BitMotifProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 80,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [7, -7]), {
    stiffness: 80,
    damping: 18,
  });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        ref={wrapRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <svg
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          aria-hidden="true"
          style={{ width: "100%", height: "auto", maxWidth: size, display: "block" }}
        >
          <defs>
            <pattern id="bit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D9E1E8" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Background grid */}
          <rect width="480" height="480" fill="url(#bit-grid)" />

          {/* Top-left bit row — fading right */}
          <g transform="translate(30, 50)">
            <rect width="32" height="32" fill="#0B0F14" rx="3" />
            <rect x="40" width="32" height="32" fill="#0B0F14" opacity="0.7" rx="3" />
            <rect x="80" width="32" height="32" fill="#0B0F14" opacity="0.45" rx="3" />
            <rect x="120" width="32" height="32" fill="#0B0F14" opacity="0.25" rx="3" />
            <rect x="160" width="32" height="32" fill="#0B0F14" opacity="0.12" rx="3" />
          </g>

          {/* Left column — vertical fade */}
          <g transform="translate(30, 110)">
            <rect width="32" height="32" fill="#0B0F14" opacity="0.6" rx="3" />
            <rect y="40" width="32" height="32" fill="#0B0F14" opacity="0.35" rx="3" />
            <rect y="80" width="32" height="32" fill="#0B0F14" opacity="0.18" rx="3" />
          </g>

          {/* Center main block */}
          <g transform="translate(140, 140)">
            <rect width="200" height="200" fill="#0B0F14" rx="8" />

            {/* Text lines simulation */}
            <rect x="24" y="24" width="140" height="7" fill="#F5F2EC" opacity="0.55" rx="2" />
            <rect x="24" y="40" width="100" height="7" fill="#F5F2EC" opacity="0.35" rx="2" />
            <rect x="24" y="56" width="120" height="7" fill="#F5F2EC" opacity="0.25" rx="2" />

            {/* Pixel row — bit array visual */}
            <g transform="translate(24, 88)">
              <rect width="22" height="22" fill="#F5F2EC" rx="2" />
              <rect x="30" width="22" height="22" fill="#F5F2EC" opacity="0.55" rx="2" />
              <rect x="60" width="22" height="22" fill="#F5F2EC" opacity="0.35" rx="2" />
              <rect x="90" width="22" height="22" fill="#3A5C1A" rx="2"
                style={{ animation: "bit-pulse 2.8s ease-in-out infinite" }} />
              <rect x="120" width="22" height="22" fill="#F5F2EC" opacity="0.22" rx="2" />
              <rect x="150" width="22" height="22" fill="#F5F2EC" opacity="0.12" rx="2" />
            </g>

            {/* Data lines */}
            <g transform="translate(24, 128)">
              <rect width="152" height="3" fill="#F5F2EC" opacity="0.25" rx="1" />
              <rect y="12" width="100" height="3" fill="#F5F2EC" opacity="0.45" rx="1" />
              <rect y="24" width="130" height="3" fill="#3A5C1A" opacity="0.6" rx="1"
                style={{ animation: "bit-pulse-slow 4s ease-in-out infinite 0.6s" }} />
              <rect y="36" width="80" height="3" fill="#F5F2EC" opacity="0.2" rx="1" />
            </g>

            {/* Corner accent */}
            <rect x="154" y="154" width="22" height="22" fill="#3A5C1A" rx="3"
              style={{ animation: "bit-pulse 3.6s ease-in-out infinite 1.2s" }} />
          </g>

          {/* Right column blocks */}
          <g transform="translate(372, 120)">
            <rect width="72" height="72" fill="#0B0F14" rx="5" />
            <rect x="16" y="16" width="40" height="40" fill="#3A5C1A" rx="3"
              style={{ animation: "bit-pulse 5s ease-in-out infinite 0.4s" }} />
          </g>
          <g transform="translate(372, 210)">
            <rect width="72" height="72" fill="#0B0F14" opacity="0.18" rx="5" />
          </g>
          <g transform="translate(372, 300)">
            <rect width="72" height="72" fill="#0B0F14" opacity="0.45" rx="5" />
          </g>

          {/* Scattered accent cells — live system feel */}
          <rect x="90" y="200" width="14" height="14" fill="#3A5C1A" rx="2" opacity="0.5"
            style={{ animation: "bit-pulse 6.2s ease-in-out infinite 1.8s" }} />
          <rect x="90" y="260" width="14" height="14" fill="#3A5C1A" rx="2" opacity="0.3"
            style={{ animation: "bit-pulse-slow 7s ease-in-out infinite 3.1s" }} />
          <rect x="90" y="320" width="14" height="14" fill="#3A5C1A" rx="2" opacity="0.4"
            style={{ animation: "bit-pulse 5.4s ease-in-out infinite 0.9s" }} />
          <rect x="372" y="390" width="14" height="14" fill="#3A5C1A" rx="2" opacity="0.35"
            style={{ animation: "bit-pulse-slow 8s ease-in-out infinite 2.4s" }} />
          <rect x="200" y="376" width="14" height="14" fill="#3A5C1A" rx="2" opacity="0.4"
            style={{ animation: "bit-pulse 4.8s ease-in-out infinite 1.5s" }} />

          {/* Bottom-right scatter */}
          <g transform="translate(260, 376)">
            <rect width="18" height="18" fill="#3A5C1A" rx="2" />
            <rect x="28" width="18" height="18" fill="#0B0F14" opacity="0.3" rx="2" />
            <rect x="56" width="18" height="18" fill="#0B0F14" opacity="0.15" rx="2" />
          </g>

          {/* Bottom label */}
          <g transform="translate(30, 424)">
            <rect width="10" height="10" fill="#3A5C1A" />
            <text
              x="22"
              y="9"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="9"
              fill="#5C6470"
              letterSpacing="2"
            >
              NB.LABS — SEQ.01 / NORTH
            </text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
