import { NextResponse } from "next/server";

export const revalidate = 21600; // 6-hour cache — meetup data changes slowly

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.com";

const API_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
  "Access-Control-Allow-Origin": SITE_ORIGIN,
  "Access-Control-Allow-Methods": "GET",
  "Cross-Origin-Resource-Policy": "same-origin",
} as const;

export type MeetupGroup = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  website: string | null;
  btcmapUrl: string;
};

const FALLBACK_GROUPS: MeetupGroup[] = [
  { id: "columbia-bitcoin",    name: "Columbia Bitcoin",     lat: 34.0007,  lng: -81.0348,   website: "https://columbiabitcoin.com",          btcmapUrl: "https://btcmap.org/community/columbia-bitcoin"    },
  { id: "bitcoin-nyc",        name: "Bitcoin NYC",          lat: 40.7128,  lng: -74.0060,   website: "https://bitdevs.org",                   btcmapUrl: "https://btcmap.org/community/bitcoin-nyc"         },
  { id: "bitcoin-austin",     name: "Bitcoin Austin",       lat: 30.2672,  lng: -97.7431,   website: null,                                    btcmapUrl: "https://btcmap.org/community/bitcoin-austin"      },
  { id: "bitcoin-miami",      name: "Bitcoin Miami",        lat: 25.7617,  lng: -80.1918,   website: null,                                    btcmapUrl: "https://btcmap.org/community/bitcoin-miami"       },
  { id: "bitcoin-los-angeles", name: "Bitcoin Los Angeles", lat: 34.0522,  lng: -118.2437,  website: null,                                    btcmapUrl: "https://btcmap.org/community/bitcoin-los-angeles" },
  { id: "bitcoin-london",     name: "Bitcoin London",       lat: 51.5074,  lng: -0.1278,    website: null,                                    btcmapUrl: "https://btcmap.org/community/bitcoin-london"      },
  { id: "bitcoin-berlin",     name: "Bitcoin Berlin",       lat: 52.5200,  lng: 13.4050,    website: null,                                    btcmapUrl: "https://btcmap.org/community/bitcoin-berlin"      },
  { id: "bitcoin-amsterdam",  name: "Bitcoin Amsterdam",    lat: 52.3676,  lng: 4.9041,     website: null,                                    btcmapUrl: "https://btcmap.org/community/bitcoin-amsterdam"   },
];

type GeoJsonGeometry =
  | { type: "Polygon";      coordinates: number[][][] }
  | { type: "MultiPolygon"; coordinates: number[][][][] };

type GeoJsonValue =
  | GeoJsonGeometry
  | { type: "FeatureCollection"; features: { geometry?: GeoJsonGeometry }[] }
  | null
  | undefined;

function extractCoords(geo: GeoJsonValue): number[][] {
  if (!geo) return [];
  if (geo.type === "FeatureCollection") {
    const geom = geo.features[0]?.geometry;
    return geom ? extractCoords(geom) : [];
  }
  if (geo.type === "Polygon")      return geo.coordinates.flat();
  if (geo.type === "MultiPolygon") return geo.coordinates.flat(2);
  return [];
}

function centroid(geo: GeoJsonValue): { lat: number; lng: number } | null {
  try {
    const coords = extractCoords(geo);
    if (coords.length === 0) return null;
    const lngs = coords.map((c) => c[0]);
    const lats  = coords.map((c) => c[1]);
    return {
      lat: (Math.min(...lats)  + Math.max(...lats))  / 2,
      lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
    };
  } catch { return null; }
}

type BtcMapAreaTags = {
  name?:             string;
  type?:             string;
  geo_json?:         GeoJsonValue;
  "contact:website"?: string;
  website?:          string;
  [key: string]:     unknown;
};

type BtcMapArea = {
  id:          string;
  tags:        BtcMapAreaTags;
  deleted_at?: string | null;
};

export async function GET() {
  try {
    const res = await fetch("https://api.btcmap.org/v2/areas", {
      signal: AbortSignal.timeout(25_000),
      next:   { revalidate: 21600 },
    });

    if (!res.ok) {
      console.warn(`[meetup-map] BTCMap API returned ${res.status} — using fallback`);
      return NextResponse.json({ groups: FALLBACK_GROUPS }, { headers: API_HEADERS });
    }

    const areas = await res.json() as BtcMapArea[];
    const groups: MeetupGroup[] = [];

    for (const area of areas) {
      // Skip deleted and non-community areas
      if (area.deleted_at) continue;
      if (area.tags.type !== "community") continue;

      const name = area.tags.name;
      if (!name) continue;

      const center = centroid(area.tags.geo_json ?? null);
      if (!center) continue;

      groups.push({
        id:         area.id,
        name,
        lat:        center.lat,
        lng:        center.lng,
        website:    area.tags["contact:website"] ?? area.tags.website ?? null,
        btcmapUrl:  `https://btcmap.org/community/${area.id}`,
      });
    }

    if (groups.length === 0) {
      return NextResponse.json({ groups: FALLBACK_GROUPS }, { headers: API_HEADERS });
    }

    return NextResponse.json({ groups }, {
      headers: {
        ...API_HEADERS,
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.warn("[meetup-map] fetch failed — using fallback:", err);
    return NextResponse.json({ groups: FALLBACK_GROUPS }, { headers: API_HEADERS });
  }
}
