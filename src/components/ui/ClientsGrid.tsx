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
  /* Wordmark-style logos get a wider tile so they stay legible. */
  wide?: boolean;
};

/* Subtle vertical drift kept from the original — amplitude pulled in so it
   reads as life, not noise, while the track scrolls horizontally. */
const BOB = [0, -8, 0, -5, 0];

function LogoTile({
  client,
  index,
  reduced,
}: {
  client: Client;
  index: number;
  reduced: boolean;
}) {
  const external = client.url.startsWith("http");
  return (
    <motion.a
      href={client.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="ci-tile"
      aria-label={`${client.name} — ${client.category}`}
      animate={reduced ? {} : { y: BOB }}
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 3.4 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.9,
              times: [0, 0.35, 0.6, 0.8, 1],
            }
      }
      whileHover={
        reduced
          ? {}
          : { y: 0, scale: 1.06, transition: { duration: 0.32, ease: [0.2, 0.7, 0.2, 1] } }
      }
    >
      <span className={client.wide ? "ci-logo ci-logo--wide" : "ci-logo"}>
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="ci-name" aria-hidden="true">
        <span className="ci-name-co">{client.name}</span>
        <span className="ci-name-cat">{client.category}</span>
      </span>
    </motion.a>
  );
}

export default function ClientsGrid({ clients }: { clients: Client[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const visible = reduced || isInView;

  // Duplicate the set so translateX(-50%) loops seamlessly. Reduced motion
  // gets a single, centered, static row instead.
  const track = reduced ? clients : [...clients, ...clients];

  return (
    <div ref={ref} className="ci-root">
      <motion.p
        className="ci-eyebrow"
        initial={reduced ? {} : { opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Working with operators in Kenya
      </motion.p>

      <motion.div
        className="ci-marquee"
        data-reduced={reduced ? "true" : "false"}
        initial={reduced ? {} : { opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="ci-track">
          {track.map((c, i) => (
            <LogoTile
              key={`${c.id}-${i}`}
              client={c}
              index={i % clients.length}
              reduced={!!reduced}
            />
          ))}
        </div>
      </motion.div>

      <style>{`
        .ci-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9098A4;
          padding: clamp(28px, 3.5vw, 44px) 0 0;
          margin: 0;
        }

        .ci-marquee {
          position: relative;
          margin-top: 18px;
          padding: 26px 0 56px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
        }

        .ci-track {
          display: flex;
          align-items: center;
          gap: clamp(40px, 6vw, 88px);
          width: max-content;
          will-change: transform;
          animation: ci-scroll 32s linear infinite;
        }
        .ci-marquee:hover .ci-track { animation-play-state: paused; }

        @keyframes ci-scroll {
          to { transform: translateX(-50%); }
        }

        .ci-tile {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
          will-change: transform;
        }

        .ci-logo {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(11, 15, 20, 0.035);
          transition: background 0.3s cubic-bezier(0.2, 0.7, 0.2, 1),
                      box-shadow 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ci-tile:hover .ci-logo {
          background: rgba(11, 15, 20, 0.06);
          box-shadow: 0 0 0 3px rgba(58, 92, 26, 0.12);
        }

        .ci-logo--wide { width: 148px; padding: 0 14px; }

        .ci-logo img {
          width: 78%;
          height: 78%;
          object-fit: contain;
          display: block;
          /* Logos sit calm at rest, snap to full presence on hover. */
          filter: grayscale(0.35);
          opacity: 0.78;
          transition: filter 0.32s cubic-bezier(0.2, 0.7, 0.2, 1),
                      opacity 0.32s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ci-tile:hover .ci-logo img { filter: grayscale(0); opacity: 1; }

        /* Name is absolutely placed so revealing it never shifts the track. */
        .ci-name {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translate(-50%, 6px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.2, 0.7, 0.2, 1),
                      transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .ci-tile:hover .ci-name { opacity: 1; transform: translate(-50%, 0); }

        .ci-name-co {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #0B0F14;
          line-height: 1;
        }
        .ci-name-cat {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9098A4;
          line-height: 1;
        }

        /* Reduced motion: no scroll, no drift — a calm, centered, full-color row. */
        .ci-marquee[data-reduced="true"] {
          -webkit-mask-image: none;
                  mask-image: none;
        }
        .ci-marquee[data-reduced="true"] .ci-track {
          width: 100%;
          animation: none;
          justify-content: center;
          flex-wrap: wrap;
          gap: clamp(28px, 4vw, 56px);
        }
        .ci-marquee[data-reduced="true"] .ci-logo img { filter: none; opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          .ci-track { animation: none; }
          .ci-name { transition: opacity 0.3s ease; transform: translate(-50%, 0); }
        }

        @media (max-width: 600px) {
          .ci-track { gap: clamp(28px, 9vw, 44px); }
          .ci-logo { width: 52px; height: 52px; }
          .ci-logo--wide { width: 120px; padding: 0 10px; }
        }
      `}</style>
    </div>
  );
}
