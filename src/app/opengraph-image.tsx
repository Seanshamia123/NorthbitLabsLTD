import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontsDir = join(process.cwd(), "src/fonts-og");
  const [clashBold, clashRegular, satoshiBold] = await Promise.all([
    readFile(join(fontsDir, "ClashGrotesk-Bold.ttf")),
    readFile(join(fontsDir, "ClashGrotesk-Regular.ttf")),
    readFile(join(fontsDir, "Satoshi-Bold.ttf")),
  ]);

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
          fontFamily: "'Clash Grotesk'",
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

        {/* Top: Northbit Labs logomark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg
            width="40"
            height="30"
            viewBox="46.97 46.97 124.95 93.94"
            style={{ flexShrink: 0 }}
          >
            <path
              fill="#3A5C1A"
              d="M127.19,46.97h44.73v87.58c0,3.51-2.85,6.36-6.36,6.36h-38.37V46.97h0Z"
            />
            <polygon
              fill="#3A5C1A"
              points="149.56 140.91 89.13 140.91 46.97 94.47 46.97 62.5 82.14 62.5 149.56 140.91"
            />
            <polygon
              fill="#3A5C1A"
              points="68.53 140.91 46.97 140.91 46.97 119.35 68.53 140.91"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Clash Grotesk'",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8A919C",
            }}
          >
            Northbit Labs
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
              fontWeight: 400,
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
                  fontFamily: "'Satoshi'",
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
              fontFamily: "'Satoshi'",
              fontSize: 16,
              color: "#3A5C1A",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            northbitlabs.tech
          </span>
          <span style={{ fontFamily: "'Satoshi'", fontSize: 14, color: "#4a5260", letterSpacing: "0.08em" }}>
            NAIROBI, KENYA
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Clash Grotesk", data: clashBold, weight: 700, style: "normal" },
        { name: "Clash Grotesk", data: clashRegular, weight: 400, style: "normal" },
        { name: "Satoshi", data: satoshiBold, weight: 700, style: "normal" },
      ],
    }
  );
}
