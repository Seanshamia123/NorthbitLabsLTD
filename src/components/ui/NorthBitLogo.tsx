/**
 * NorthBit Labs logo — geometry taken directly from northbit-monogram.svg
 * (100×100 reference). All values scaled by s = icon/100.
 *
 * Monogram: #1C1C1C rounded square, white N letterform (two bars + diagonal),
 *   Signal Green bit square sitting flush at the top-right corner of the N
 *   (2px gap right of the right bar, 1px above the N top — like a superscript).
 *
 * Wordmark: "northbit" lowercase, weight 700, -0.04em, + trailing green square.
 *
 * Props:
 *   variant  — "light" | "dark"
 *   size     — "sm" | "md" | "lg"
 *   iconOnly — render monogram only
 */

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

const SIZES = {
  sm: { icon: 26, font: 16, gap: 8,  bit: 7  },
  md: { icon: 32, font: 20, gap: 10, bit: 8  },
  lg: { icon: 44, font: 28, gap: 14, bit: 11 },
};

export default function NorthBitLogo({
  variant = "light",
  size = "md",
  iconOnly = false,
}: LogoProps) {
  const { icon, font, gap, bit } = SIZES[size];

  /* Scale factor from the 100×100 reference monogram */
  const s  = icon / 100;
  const rx = Math.round(20 * s);

  /* N letterform — reference: bars at x=14/x=58, y=20, w=13, h=58 */
  const bx1 = 14 * s;
  const bx2 = 58 * s;
  const by  = 20 * s;
  const bw  = 13 * s;
  const bh  = 58 * s;

  /* Diagonal — reference: (14,20)(27,20)(71,78)(58,78) */
  const dPts = [
    `${14 * s},${20 * s}`,
    `${27 * s},${20 * s}`,
    `${71 * s},${78 * s}`,
    `${58 * s},${78 * s}`,
  ].join(" ");

  /* Green bit — anchored to the right-bar edge so the gap never collapses
     at small sizes. The 2px offset in the 100px reference (73−71) becomes
     sub-pixel at 32px (0.64px), so we compute from the actual edge instead. */
  const gSize       = Math.round(13 * s);
  const rightBarEdge = bx2 + bw;               // exact fractional edge of right bar
  const gx           = Math.ceil(rightBarEdge) + 2; // always ≥2px gap, pixel-snapped
  const gy           = Math.round(19 * s);     // 1px above N top in reference

  /* clipPath ensures the bit is cleanly clipped to the rounded-square
     silhouette at all sizes — no bleed past the icon boundary        */
  const clipId = `nb-clip-${size}`;

  const iconFill  = variant === "light" ? "#1C1C1C" : "#F5F2EC";
  const nFill     = variant === "light" ? "#FFFFFF"  : "#0B0F14";
  const textColor = variant === "light" ? "#0B0F14"  : "#F5F2EC";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        lineHeight: 1,
        textDecoration: "none",
      }}
    >
      {/* ---- Monogram icon ---- */}
      <svg
        viewBox={`0 0 ${icon} ${icon}`}
        width={icon}
        height={icon}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: "block", flexShrink: 0 }}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={0} y={0} width={icon} height={icon} rx={rx} />
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          {/* Background */}
          <rect x={0} y={0} width={icon} height={icon} fill={iconFill} />

          {/* Left vertical bar */}
          <rect x={bx1} y={by} width={bw} height={bh} fill={nFill} />

          {/* Right vertical bar */}
          <rect x={bx2} y={by} width={bw} height={bh} fill={nFill} />

          {/* Diagonal crossbar */}
          <polygon points={dPts} fill={nFill} />

          {/* Signal Green bit — top-right corner of the N */}
          <rect x={gx} y={gy} width={gSize} height={gSize} fill="#3A5C1A" />
        </g>
      </svg>

      {/* ---- Wordmark + trailing bit ---- */}
      {!iconOnly && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontFamily: "var(--font-space-grotesk), 'Trebuchet MS', Arial, sans-serif",
            fontSize: font,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: textColor,
            gap: 3,
          }}
        >
          northbit
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: bit,
              height: bit,
              background: "#3A5C1A",
              flexShrink: 0,
              marginLeft: 1,
              verticalAlign: "middle",
            }}
          />
        </span>
      )}
    </span>
  );
}
