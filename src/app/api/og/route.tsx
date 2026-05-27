import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const SECTION_COLORS: Record<string, string> = {
  learn: "#fb923c",
  philosophy: "#a78bfa",
  data: "#22d3ee",
  community: "#34d399",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawTitle = searchParams.get("title") ?? "Columbia, SC Bitcoin";
  const rawSection = searchParams.get("section") ?? "";

  // Validate section against the exact allowlist
  const validSections = Object.keys(SECTION_COLORS);
  const section = validSections.includes(rawSection) ? rawSection : "";

  // Reject explicitly invalid non-empty section values
  if (searchParams.has("section") && rawSection !== "" && section === "") {
    return new Response(JSON.stringify({ error: "Invalid section" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Strip control chars, cap length, then strip site name suffix
  const title = rawTitle
    .replace(/[\x00-\x1F\x7F]/g, "")
    .slice(0, 200)
    .replace(/ \| Columbia, SC Bitcoin$/, "");

  const accent = SECTION_COLORS[section] ?? "#f7931a";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "#0f1923",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Left accent bar — color varies by section */}
        <div
          style={{
            width: "8px",
            height: "100%",
            background: accent,
            flexShrink: 0,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            flex: 1,
          }}
        >
          {/* Top: site brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#f7931a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ₿
            </div>
            <span
              style={{
                fontSize: "18px",
                color: "#f7931a",
                fontWeight: "600",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Columbia, SC Bitcoin
            </span>
          </div>

          {/* Center: page title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "3px",
                background: accent,
                borderRadius: "2px",
              }}
            />
            <h1
              style={{
                fontSize: title.length > 40 ? "52px" : "64px",
                fontWeight: "800",
                color: "#ffffff",
                lineHeight: "1.1",
                margin: "0",
                maxWidth: "900px",
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom: tagline */}
          <p
            style={{
              fontSize: "20px",
              color: "#64748b",
              margin: "0",
              fontWeight: "400",
            }}
          >
            Free monthly Bitcoin meetup · Columbia, South Carolina
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
        "X-Content-Type-Options": "nosniff",
      },
    }
  );
}
