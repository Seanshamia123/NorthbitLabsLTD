"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Client = {
  id: string;
  name: string;
  category: string;
  url: string;
  logo: string;
  brandColor: string;
};

export default function ClientsGrid({ clients }: { clients: Client[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const visible = reduced || isInView;

  return (
    <div ref={ref}>
      <motion.p
        initial={reduced ? {} : { opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase" as const,
          color: "#9098A4",
          padding: "clamp(28px,3.5vw,44px) 0 0",
          margin: 0,
        }}
      >
        Working with operators in Kenya
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginTop: 20,
          paddingTop: "clamp(28px,3.5vw,44px)",
          paddingBottom: "clamp(36px,4.5vw,60px)",
        }}
        className="clients-grid"
      >
        {clients.map((c, i) => (
          /* Outer: fade-in entry — handles opacity reveal with stagger */
          <motion.div
            key={c.id}
            initial={reduced ? {} : { opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            style={{
              padding: `0 ${i < clients.length - 1 ? "clamp(16px,2.5vw,36px)" : "0"} 0 ${i > 0 ? "clamp(16px,2.5vw,36px)" : "0"}`,
            }}
          >
            {/* Inner: perpetual float — animates y only, stops on hover */}
            <motion.a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="client-logo"
              animate={reduced ? {} : { y: [0, -22, 4, -14, 0] }}
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: 3.2 + i * 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 1.1,
                      times: [0, 0.35, 0.6, 0.8, 1],
                    }
              }
              whileHover={
                reduced
                  ? {}
                  : {
                      y: 0,
                      scale: 1.04,
                      transition: {
                        duration: 0.32,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }
              }
              style={
                {
                  "--client-brand": c.brandColor,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  textDecoration: "none",
                  width: "100%",
                  cursor: "pointer",
                } as React.CSSProperties
              }
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: 6,
                  background: "rgba(0,0,0,0.04)",
                }}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "clamp(15px,1.4vw,18px)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "#9098A4",
                    marginTop: 5,
                    textTransform: "uppercase",
                  }}
                >
                  {c.category}
                </div>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
