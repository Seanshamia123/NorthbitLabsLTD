import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CtaPhotoSection from "@/components/ui/CtaPhotoSection";
import { POSTS } from "@/lib/posts";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Insights — Northbit Labs",
  description:
    "Notes on AI operations, custom software and fintech engineering in Kenya and East Africa, from the team building it.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights — Northbit Labs",
    description:
      "Notes on AI operations, custom software and fintech engineering in Kenya and East Africa, from the team building it.",
    url: "/insights",
    type: "website",
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Insights — Northbit Labs" },
};

export default function InsightsPage() {
  const posts = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <BreadcrumbJsonLd name="Insights" path="/insights" />
      {/* HERO */}
      <section className="section--ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(80px,11vw,160px) 0 clamp(64px,7vw,104px)", overflow: "hidden", position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ marginBottom: 32 }}>
            <HeroReveal
              delay={0.08}
              h1Style={{ fontSize: "clamp(52px,7vw,104px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, maxWidth: "18ch" }}
              lines={[
                "Notes from",
                <span key="sub" style={{ fontWeight: 300, color: "#8A919C" }}>the work itself.</span>,
              ]}
            />
          </div>
          <FadeUp delay={0.42}>
            <p style={{ fontSize: "clamp(16px,1.4vw,20px)", color: "#8A919C", maxWidth: "54ch", lineHeight: 1.65 }}>
              What we're learning building AI operations, custom software and fintech systems for businesses across Kenya and East Africa.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* POST LIST */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #D9E1E8" }}>
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/insights/${post.slug}`}
                  style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, padding: "40px 0", borderBottom: "1px solid #D9E1E8", textDecoration: "none", color: "inherit" }}
                  className="post-row"
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "#3A5C1A", textTransform: "uppercase" }}>
                        {post.category}
                      </span>
                      <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#D9E1E8" }} />
                      <span style={{ fontSize: 13, color: "#8A919C" }}>
                        {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                    </div>
                    <h2 style={{ fontSize: "clamp(22px,2.6vw,34px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 14 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: 16, color: "#5C6470", lineHeight: 1.65, maxWidth: "64ch" }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", fontSize: 13, color: "#8A919C", whiteSpace: "nowrap" }}>
                    {post.readTime}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .post-row { transition: opacity 0.2s; }
          .post-row:hover { opacity: 0.7; }
          @media (max-width: 640px) { .post-row { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA */}
      <CtaPhotoSection>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,60px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20, color: "#F5F2EC", textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Have a problem worth solving?
            </h2>
            <p style={{ fontSize: 18, color: "#AAB2BC", lineHeight: 1.65, marginBottom: 36, textShadow: "0 1px 10px rgba(11,15,20,0.7)" }}>
              Book a 30-minute discovery call. We will listen to what you are trying to build and tell you honestly how we can help.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <MagneticBtn>
                <Link href="/contact" className="btn btn-signal">Book a discovery call →</Link>
              </MagneticBtn>
              <Link href="/work" className="btn btn-ghost btn-ghost--light">See our work</Link>
            </div>
          </Reveal>
        </div>
      </CtaPhotoSection>
    </>
  );
}
