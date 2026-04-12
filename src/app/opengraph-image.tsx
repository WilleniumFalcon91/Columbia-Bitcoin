import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(247,147,26,0.12)",
            border: "1px solid rgba(247,147,26,0.3)",
            borderRadius: 999,
            padding: "10px 24px",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#f7931a",
              display: "flex",
            }}
          />
          <span style={{ color: "#f7931a", fontSize: 22, fontWeight: 600 }}>
            Monthly Bitcoin Meetup · Columbia, SC
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>Columbia, SC</span>
          <span style={{ color: "#f7931a" }}>Bitcoin</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 30,
            color: "#777777",
          }}
        >
          Savage Craft Ale Works · West Columbia, South Carolina
        </div>
      </div>
    ),
    { ...size }
  );
}
