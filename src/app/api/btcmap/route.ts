import { NextResponse } from "next/server";

// Cache this route for 1 hour — Overpass data changes slowly and
// server-to-server fetches are far less likely to be rate-limited.
export const revalidate = 3600;

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.com";

const API_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
  "Access-Control-Allow-Origin": SITE_ORIGIN,
  "Access-Control-Allow-Methods": "GET",
  "Cross-Origin-Resource-Policy": "same-origin",
} as const;

const BOUNDS = {
  minLat: 33.82,
  maxLat: 34.25,
  minLon: -81.45,
  maxLon: -80.70,
};

const OVERPASS_ENDPOINTS = [
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass-api.de/api/interpreter",
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
  const query = buildQuery();

  // POST is more reliable than GET for Overpass — avoids URL length limits
  // and is less likely to be rate-limited
  const requests = OVERPASS_ENDPOINTS.map((endpoint) =>
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "ColumbiaBitcoin/1.0 (https://columbiabitcoin.com)",
      },
      body: `data=${encodeURIComponent(query)}`,
      signal: AbortSignal.timeout(30_000),
      cache: "no-store",
    }).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }),
  );

  try {
    const data = await Promise.any(requests);
    return NextResponse.json(data, {
      headers: {
        ...API_HEADERS,
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    console.warn("[btcmap] all mirrors failed");
    return NextResponse.json(
      { error: "Failed to fetch merchant data from all Overpass mirrors" },
      { status: 503, headers: API_HEADERS },
    );
  }
}
