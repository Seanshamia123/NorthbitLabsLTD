import Link from "next/link";
import { CONTACT } from "@/lib/data";
import NorthBitLogo from "@/components/ui/NorthBitLogo";

const footerLinks = {
  Services: [
    { label: "Custom Software", href: "/services#custom-software" },
    { label: "AI Operations", href: "/services#ai-operations" },
    { label: "Technology Consulting", href: "/services#consulting" },
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "Fintech & Payments", href: "/services#fintech" },
  ],
  Industries: [
    { label: "Fintech & Banking", href: "/industries#fintech" },
    { label: "Wellness & Fitness", href: "/industries#wellness" },
    { label: "Beauty & Care", href: "/industries#beauty" },
    { label: "Retail & E-commerce", href: "/industries#retail" },
    { label: "Brand & Media", href: "/industries#media" },
    { label: "Healthcare", href: "/industries#healthcare" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0B0F14", color: "#F5F2EC" }}>
      <div className="wrap" style={{ padding: "80px clamp(20px,4vw,56px) 32px" }}>
        <div className="foot-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, paddingBottom: 64, borderBottom: "1px solid #232931" }}>
          {/* Brand col */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: 20, textDecoration: "none" }}>
              <NorthBitLogo variant="dark" size="md" />
            </Link>
            <p style={{ fontSize: 14, color: "#9098A4", maxWidth: "32ch", lineHeight: 1.65, marginBottom: 24 }}>
              A technology firm building custom software, AI operations and consulting services for operators in Kenya.
            </p>
            <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.22em", color: "#4a5260", textTransform: "uppercase" }}>
              SOFTWARE · ENGINEERED · NORTH
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.22em", color: "#9098A4", textTransform: "uppercase", fontWeight: 500, marginBottom: 20 }}>
                {title}
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="foot-link" style={{ fontSize: 15, color: "#F5F2EC", textDecoration: "none" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 0", borderBottom: "1px solid #232931", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <a href={`mailto:${CONTACT.email}`} className="contact-link" style={{ fontSize: 14, textDecoration: "none" }}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="contact-link" style={{ fontSize: 14, textDecoration: "none" }}>{CONTACT.phone}</a>
          </div>
          <p style={{ fontSize: 13, color: "#4a5260" }}>{CONTACT.address}, {CONTACT.district}</p>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "#4a5260", letterSpacing: "0.06em", flexWrap: "wrap", gap: 16 }}>
          <span>© {year} NORTHBIT LABS · ALL RIGHTS RESERVED</span>
          <span>REGISTERED IN KENYA · NBI</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 40px 24px !important; } }
        @media (max-width: 540px) { .foot-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
