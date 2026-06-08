import { ImageResponse } from "next/og";
import { siteMeta } from "@/data/content";

export const alt = `${siteMeta.displayName} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#0b0b0d",
          color: "#e8e8e4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212,160,60,0.08), transparent 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 14,
              fontFamily: "monospace",
              color: "#d4a03c",
              letterSpacing: "0.14em",
            }}
          >
            01
          </span>
          <span style={{ width: 48, height: 1, background: "#2a2a2e" }} />
          <span
            style={{
              fontSize: 12,
              fontFamily: "monospace",
              color: "#6b6b68",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 56,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            <span>{siteMeta.givenName}</span>
            <span>{siteMeta.surnames}</span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#9a9a96",
              maxWidth: 700,
            }}
          >
            {siteMeta.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            fontFamily: "monospace",
            color: "#6b6b68",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>{siteMeta.location}</span>
          <span>Index 013</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
