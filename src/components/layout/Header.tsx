"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import NorthBitLogo from "@/components/ui/NorthBitLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll(); // run once on mount in case page is pre-scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Colours derived from scroll state
  const linkColor   = scrolled ? "#0B0F14" : "#F5F2EC";
  const activeColor = scrolled ? "#3A5C1A" : "#4D7724";
  const burgerColor = scrolled ? "#0B0F14" : "#F5F2EC";
  const burgerBorder = scrolled ? "#0B0F14" : "rgba(255,255,255,0.22)";

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(245,242,236,0.95)"
            : "#0B0F14",
          backdropFilter: scrolled ? "saturate(160%) blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(160%) blur(18px)" : "none",
          borderBottom: `1px solid ${scrolled ? "#D9E1E8" : "#1C2129"}`,
          transition: "background 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px clamp(20px,4vw,56px)",
            gap: "32px",
          }}
        >
          {/* Logo — swaps variant based on scroll state */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <NorthBitLogo variant={scrolled ? "light" : "dark"} size="md" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", gap: 28, alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: pathname === link.href ? activeColor : linkColor,
                  paddingBottom: 2,
                  borderBottom: pathname === link.href
                    ? `2px solid ${activeColor}`
                    : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link
              href="/contact"
              className={`btn desktop-cta ${scrolled ? "btn-primary" : "btn-ghost btn-ghost--light"}`}
              style={{ fontSize: 14, padding: "10px 20px" }}
            >
              Start a project <span style={{ marginLeft: 2 }}>→</span>
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              style={{
                display: "none",
                padding: "10px 14px",
                border: `1px solid ${burgerBorder}`,
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 500,
                gap: 8,
                alignItems: "center",
                color: burgerColor,
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <span style={{ display: "inline-flex", flexDirection: "column", gap: 3 }}>
                <span style={{ width: 14, height: 1.5, background: burgerColor, display: "block", transition: "background 0.2s" }} />
                <span style={{ width: 14, height: 1.5, background: burgerColor, display: "block", transition: "background 0.2s" }} />
                <span style={{ width: 10, height: 1.5, background: burgerColor, display: "block", transition: "background 0.2s" }} />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#0B0F14",
          color: "#F5F2EC",
          zIndex: 200,
          padding: "28px clamp(20px,4vw,56px)",
          display: drawerOpen ? "flex" : "none",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <NorthBitLogo variant="dark" size="md" />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            style={{ fontSize: 28, color: "#F5F2EC", lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 36,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                padding: "16px 0",
                borderBottom: "1px solid #232931",
                color: pathname === link.href ? "#4D7724" : "#F5F2EC",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-signal" style={{ alignSelf: "flex-start", fontSize: 16 }}>
          Start a project →
        </Link>

        <div style={{ marginTop: "auto", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.2em", color: "#9098A4" }}>
          SOFTWARE · ENGINEERED · NORTH
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .menu-toggle { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
