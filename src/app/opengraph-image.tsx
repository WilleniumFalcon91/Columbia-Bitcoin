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
          position: "relative",
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(247,147,26,0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(247,147,26,0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(247,147,26,0.1)",
            border: "1px solid rgba(247,147,26,0.25)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f7931a",
            }}
          />
          <span style={{ color: "#f7931a", fontSize: 20, fontWeight: 600 }}>
            Monthly Bitcoin Meetup · Columbia, SC
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          Columbia, SC{" "}
          <span style={{ color: "#f7931a" }}>Bitcoin</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#888888",
            textAlign: "center",
          }}
        >
          Savage Craft Ale Works · West Columbia, South Carolina
        </div>
      </div>
    ),
    { ...size }
  );
}
