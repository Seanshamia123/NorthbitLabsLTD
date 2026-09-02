import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import MagneticBtn from "@/components/ui/MagneticBtn";

export const metadata = {
  title: "Page Not Found - Northbit Labs",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
];

export default function NotFound() {
  return (
    <section
      className="hero-ink"
      style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(100px,14vw,200px) 0", overflow: "hidden", minHeight: "70vh", display: "flex", alignItems: "center" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <FadeUp>
          <p style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 13, letterSpacing: "0.2em", color: "#7BA84F", marginBottom: 24 }}>
            404
          </p>
        </FadeUp>
        <Reveal>
          <h1 style={{ fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 24, maxWidth: "16ch" }}>
            This page doesn&apos;t exist.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p style={{ fontSize: "clamp(15px,1.3vw,18px)", color: "#8A919C", maxWidth: "48ch", lineHeight: 1.65, marginBottom: 44 }}>
            The link might be broken, or the page has moved. Here&apos;s where to go instead.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <MagneticBtn>
              <Link href="/" className="btn btn-signal">Back to home →</Link>
            </MagneticBtn>
            <Link href="/contact" className="btn btn-ghost btn-ghost--light">Contact us</Link>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", borderTop: "1px solid #232931", paddingTop: 28 }}>
            {QUICK_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="inline-link" style={{ fontSize: 14, color: "#AAB2BC" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
