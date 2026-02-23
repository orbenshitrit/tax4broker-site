import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Tax4Broker — דוח מס אוטומטי ללקוחות Interactive Brokers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(145deg, #1D1D1F 0%, #0F172A 50%, #1E1B4B 100%)",
          padding: "60px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(79,70,229,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79,70,229,0.06) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Top-left accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #4F46E5 0%, #818CF8 50%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "18px",
            background: "#4F46E5",
            marginBottom: "32px",
            boxShadow: "0 8px 30px rgba(79, 70, 229, 0.35)",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.032em",
            lineHeight: 1.1,
            marginBottom: "16px",
            display: "flex",
          }}
        >
          Tax4Broker
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#A5B4FC",
            letterSpacing: "-0.01em",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "700px",
            display: "flex",
          }}
        >
          דוח מס אוטומטי ללקוחות Interactive Brokers
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "17px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.45)",
            marginTop: "12px",
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          מיועד לרואי חשבון ויועצי מס בישראל
        </div>

        {/* Bottom-right domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "48px",
            fontSize: "15px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.06em",
            display: "flex",
          }}
        >
          tax4broker.com
        </div>
      </div>
    ),
    { ...size }
  );
}
