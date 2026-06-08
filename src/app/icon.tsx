import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0d",
          border: "1px solid #2a2a2e",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "monospace",
            color: "#d4a03c",
            letterSpacing: "0.05em",
          }}
        >
          THP
        </span>
      </div>
    ),
    { ...size }
  );
}
