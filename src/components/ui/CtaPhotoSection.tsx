import type { CSSProperties, ReactNode } from "react";

/**
 * Closing CTA section with the shared warm meeting photo as a full-bleed
 * background. The image path and overlay live here so every page's CTA stays
 * consistent and is tunable in one place.
 */
export default function CtaPhotoSection({
  children,
  id,
  style,
}: {
  children: ReactNode;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      className="section section--ink"
      id={id}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {/* warm meeting photo */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/people/cta-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      {/* overlay keeps the copy readable while the warm glow shows through */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,15,20,0.88) 0%, rgba(11,15,20,0.80) 50%, rgba(11,15,20,0.92) 100%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </section>
  );
}
