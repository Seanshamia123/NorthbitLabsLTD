import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    // Fetch Space Grotesk Bold from Google Fonts CDN
    const cssRes = await fetch(
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const css = await cssRes.text();
    const match = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/);
    if (!match) return null;
    return fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0F14",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Green left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: "linear-gradient(180deg, #3A5C1A 0%, #4D7724 50%, #3A5C1A 100%)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(circle, #3A5C1A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top: NorthBit monogram + brand name */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Monogram: dark rounded square, white N, green bit-square superscript */}
          <div
            style={{
              width: 44,
              height: 44,
              background: "#1C1C1C",
              borderRadius: 9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* Green bit indicator — top-right corner */}
            <div
              style={{
                position: "absolute",
                top: 7,
                right: 7,
                width: 9,
                height: 9,
                background: "#3A5C1A",
              }}
            />
            {/* N letter */}
            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              N
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8A919C",
            }}
          >
            NORTHBIT LABS
          </span>
        </div>

        {/* Main headline */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#F5F2EC",
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              maxWidth: 900,
            }}
          >
            Software built
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#F5F2EC",
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
            }}
          >
            around the way
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#4D7724",
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              marginBottom: 32,
            }}
          >
            your business works.
          </div>

          {/* Service tags */}
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            {["Custom Software", "AI Operations", "Consulting"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #232931",
                  fontSize: 13,
                  color: "#8A919C",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #232931",
            paddingTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 16,
              color: "#3A5C1A",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            northbitlabs.tech
          </span>
          <span style={{ fontSize: 14, color: "#4a5260", letterSpacing: "0.08em" }}>
            NAIROBI, KENYA
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? { fonts: [{ name: "Space Grotesk", data: fontData, weight: 700, style: "normal" }] }
        : {}),
    }
  );
}
