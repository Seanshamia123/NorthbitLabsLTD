import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import FadeUp from "@/components/ui/FadeUp";
import HeroReveal from "@/components/ui/HeroReveal";
import MagneticBtn from "@/components/ui/MagneticBtn";
import CtaPhotoSection from "@/components/ui/CtaPhotoSection";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import { POSTS, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Northbit Labs`,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      type: "article",
      locale: "en_KE",
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title },
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd
        name={post.title}
        path={`/insights/${post.slug}`}
        parent={{ name: "Insights", path: "/insights" }}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        datePublished={post.date}
        author={post.author}
      />

      {/* HERO */}
      <section className="section--ink" style={{ background: "#0B0F14", color: "#F5F2EC", padding: "clamp(72px,10vw,132px) 0 clamp(56px,6vw,88px)", overflow: "hidden", position: "relative" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(58,92,26,0.10) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative", maxWidth: 800 }}>
          <FadeUp>
            <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8A919C", marginBottom: 32, textDecoration: "none" }}>
              ← All insights
            </Link>
          </FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span className="bit-dot" />
            <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", color: "#7BA84F", textTransform: "uppercase" }}>
              {post.category}
            </span>
          </div>
          <HeroReveal
            delay={0.06}
            h1Style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}
            lines={[post.title]}
          />
          <FadeUp delay={0.32}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#8A919C" }}>
              <span>{post.author}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#4a5260" }} />
              <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#4a5260" }} />
              <span>{post.readTime}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BODY */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <Reveal>
            <article>
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      style={{ fontSize: "clamp(21px,2.5vw,30px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#0B0F14", margin: "48px 0 20px" }}
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                      {block.items.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 16, color: "#0B0F14", lineHeight: 1.65 }}>
                          <span className="bit-dot" style={{ marginTop: 7, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} style={{ fontSize: 17, color: "#5C6470", lineHeight: 1.75, marginBottom: 24, maxWidth: "70ch" }}>
                    {block.text}
                  </p>
                );
              })}
            </article>
          </Reveal>
        </div>
      </section>

      {/* MORE INSIGHTS */}
      {more.length > 0 && (
        <section className="section section--frost">
          <div className="wrap">
            <Reveal>
              <div style={{ paddingBottom: 40 }}>
                <h2 style={{ fontSize: "clamp(22px,2.8vw,36px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  More from the team.
                </h2>
              </div>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #D9E1E8" }}>
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/insights/${p.slug}`}
                    style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, padding: "32px 0", borderBottom: "1px solid #D9E1E8", textDecoration: "none", color: "inherit" }}
                    className="post-row"
                  >
                    <div>
                      <span style={{ fontFamily: "var(--font-satoshi), system-ui, sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "#3A5C1A", textTransform: "uppercase" }}>
                        {p.category}
                      </span>
                      <h3 style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.25, margin: "10px 0 0" }}>
                        {p.title}
                      </h3>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", fontSize: 13, color: "#8A919C", whiteSpace: "nowrap" }}>
                      {p.readTime}
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
      )}

      {/* CTA */}
      <CtaPhotoSection>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 20, color: "#F5F2EC", textShadow: "0 2px 18px rgba(11,15,20,0.6)" }}>
              Have a problem like this one?
            </h2>
            <p style={{ fontSize: 17, color: "#AAB2BC", lineHeight: 1.65, marginBottom: 32, textShadow: "0 1px 10px rgba(11,15,20,0.7)" }}>
              Book a 30-minute discovery call and we will tell you honestly what it would take to fix it.
            </p>
            <MagneticBtn>
              <Link href="/contact" className="btn btn-signal">Book a discovery call →</Link>
            </MagneticBtn>
          </Reveal>
        </div>
      </CtaPhotoSection>
    </>
  );
}
