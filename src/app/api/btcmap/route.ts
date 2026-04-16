import { NextResponse } from "next/server";

// Cache this route for 1 hour — Overpass data changes slowly and
// server-to-server fetches are far less likely to be rate-limited.
export const revalidate = 3600;

const BOUNDS = {
  minLat: 33.82,
  maxLat: 34.25,
  minLon: -81.45,
  maxLon: -80.70,
};

const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://lz4.overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];

function buildQuery(): string {
  const bbox = `${BOUNDS.minLat},${BOUNDS.minLon},${BOUNDS.maxLat},${BOUNDS.maxLon}`;
  return (
    `[out:json][timeout:25];` +
    `(` +
    `node["payment:bitcoin"="yes"](${bbox});` +
    `way["payment:bitcoin"="yes"](${bbox});` +
    `node["currency:XBT"="yes"](${bbox});` +
    `way["currency:XBT"="yes"](${bbox});` +
    `);out center;`
  );
}

export async function GET() {
  const encoded = encodeURIComponent(buildQuery());

  // Try all endpoints in parallel — first success wins
  const requests = OVERPASS_ENDPOINTS.map((endpoint) =>
    fetch(`${endpoint}?data=${encoded}`, {
      signal: AbortSignal.timeout(25_000),
      next: { revalidate: 3600 },
    }).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }),
  );

  try {
    const data = await Promise.any(requests);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch merchant data from all Overpass mirrors" },
      { status: 503 },
    );
  }
}
