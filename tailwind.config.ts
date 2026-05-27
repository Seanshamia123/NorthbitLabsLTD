import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F14",
          2: "#14181F",
          3: "#1C2129",
        },
        polar: {
          DEFAULT: "#F5F2EC",
          2: "#EFEBE3",
          3: "#E8E4DC",
        },
        signal: {
          DEFAULT: "#3A5C1A",
          hi: "#4D7724",
          dim: "#2A4212",
        },
        steel: {
          DEFAULT: "#5C6470",
          2: "#8A919C",
          3: "#9098A4",
        },
        frost: {
          DEFAULT: "#D9E1E8",
          2: "#E7EBEF",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(52px,8vw,120px)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        h1: ["clamp(40px,5.6vw,88px)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        h2: ["clamp(32px,4vw,64px)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        h3: ["clamp(22px,2.2vw,32px)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        lead: ["clamp(17px,1.4vw,22px)", { lineHeight: "1.55" }],
        eyebrow: ["11px", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      maxWidth: {
        site: "1400px",
      },
      spacing: {
        section: "clamp(64px,9vw,140px)",
        "section-sm": "clamp(48px,6vw,96px)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      backgroundImage: {
        "bit-grid":
          "radial-gradient(circle, #3A5C1A22 1px, transparent 1px)",
      },
      backgroundSize: {
        "bit-grid": "24px 24px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.2,0.7,0.2,1) both",
        "fade-in": "fadeIn 0.5s cubic-bezier(0.2,0.7,0.2,1) both",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
