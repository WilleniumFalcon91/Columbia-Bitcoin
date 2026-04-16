"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "leaflet/dist/leaflet.css";

const CENTER: [number, number] = [34.0007, -81.0348];
const ZOOM = 11;
const FETCH_TIMEOUT_MS = 25_000;

async function fetchMerchants(): Promise<{ elements: OverpassElement[] }> {
  const res = await fetch("/api/btcmap", {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// ── Helpers ─────────────────────────────────────────────────────
function escHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitizeUrl(url: string): string | null {
  try {
    const u = new URL(url.startsWith("http") ? url : "https://" + url);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null;
  } catch {
    return null;
  }
}

function buildAddress(tags: Record<string, string>): string | null {
  const parts: string[] = [];
  if (tags["addr:housenumber"] && tags["addr:street"]) {
    parts.push(`${tags["addr:housenumber"]} ${tags["addr:street"]}`);
  } else if (tags["addr:street"]) {
    parts.push(tags["addr:street"]);
  }
  if (tags["addr:city"]) parts.push(tags["addr:city"]);
  if (tags["addr:state"]) parts.push(tags["addr:state"]);
  return parts.join(", ") || null;
}

const CATEGORY_MAP: [string, string, string][] = [
  ["amenity", "restaurant",     "Restaurant"],
  ["amenity", "cafe",           "Café"],
  ["amenity", "bar",            "Bar"],
  ["amenity", "fast_food",      "Fast Food"],
  ["amenity", "pub",            "Pub"],
  ["shop",    "convenience",    "Shop"],
  ["shop",    "supermarket",    "Grocery"],
  ["shop",    "clothes",        "Clothing"],
  ["shop",    "books",          "Books"],
  ["shop",    "electronics",    "Electronics"],
  ["shop",    "jewelry",        "Jewelry"],
  ["shop",    "art",            "Art"],
  ["shop",    "gift",           "Gift Shop"],
  ["shop",    "yes",            "Shop"],
  ["tourism", "hotel",          "Hotel"],
  ["tourism", "hostel",         "Hostel"],
  ["leisure", "fitness_centre", "Gym"],
];

function getCategory(tags: Record<string, string>): string {
  for (const [k, v, label] of CATEGORY_MAP) {
    if (tags[k] === v) return label;
  }
  const fallback = tags["amenity"] ?? tags["shop"] ?? tags["tourism"] ?? tags["leisure"];
  return fallback ? fallback.replace(/_/g, " ") : "Merchant";
}

function buildPopup(name: string, tags: Record<string, string>): string {
  const address  = buildAddress(tags);
  const category = getCategory(tags);
  const website  = tags["website"] ?? tags["contact:website"] ?? tags["url"] ?? null;
  const phone    = tags["phone"]   ?? tags["contact:phone"]   ?? null;
  const safeUrl  = website ? sanitizeUrl(website) : null;

  return `
    <div class="btcmap-popup">
      <div class="btcmap-popup-name">${escHtml(name)}</div>
      <span class="btcmap-popup-category">${escHtml(category)}</span>
      ${address ? `<div class="btcmap-popup-detail">📍 ${escHtml(address)}</div>` : ""}
      ${phone   ? `<div class="btcmap-popup-detail">📞 ${escHtml(phone)}</div>`   : ""}
      ${safeUrl ? `<a class="btcmap-popup-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">Visit website →</a>` : ""}
    </div>`;
}

// ── Custom Bitcoin-orange drop-pin marker ───────────────────────
function makeBtcIcon(L: typeof import("leaflet")) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 26 16 26S32 26.5 32 16C32 7.163 24.837 0 16 0z"
        fill="#F7931A" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
      <text x="16" y="21" text-anchor="middle" dominant-baseline="middle"
        font-size="14" font-weight="bold" fill="#000" font-family="Arial,sans-serif">₿</text>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize:    [32, 42],
    iconAnchor:  [16, 42],
    popupAnchor: [0, -46],
  });
}

// ── Overpass element type ───────────────────────────────────────
type OverpassElement = {
  type: "node" | "way" | "relation";
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
};

// ── Component ───────────────────────────────────────────────────
export default function BitcoinMap() {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef    = useRef<import("leaflet").Map | null>(null);
  const [status,  setStatus]  = useState<"loading" | "ready" | "error">("loading");
  const [count,   setCount]   = useState<number | null>(null);
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setStatus("loading");
    setAttempt((a) => a + 1);
  }, []);

  useEffect(() => {
    if (!mapDivRef.current) return;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapDivRef.current) return;

      // Init map — scrollWheelZoom disabled to avoid hijacking page scroll;
      // users can pinch-zoom on mobile or use the +/- controls on desktop.
      const map = L.map(mapDivRef.current, {
        center: CENTER,
        zoom: ZOOM,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      // OSM tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      fetchMerchants()
        .then(({ elements }) => {
          if (cancelled) return;
          const group = L.layerGroup();
          const icon  = makeBtcIcon(L);
          let plotted = 0;

          for (const el of elements ?? []) {
            const lat = el.type === "node" ? el.lat : el.center?.lat;
            const lon = el.type === "node" ? el.lon : el.center?.lon;
            if (lat == null || lon == null) continue;

            const tags = el.tags ?? {};
            const name = tags["name"] ?? tags["brand"] ?? "Unnamed Merchant";

            L.marker([lat, lon], { icon })
              .bindPopup(buildPopup(name, tags), { maxWidth: 280, minWidth: 180 })
              .addTo(group);
            plotted++;
          }

          group.addTo(map);
          setCount(plotted);
          setStatus("ready");
        })
        .catch(() => {
          if (!cancelled) setStatus("error");
        });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  return (
    <div className="space-y-3">
      {/* Map stage */}
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
        <div
          ref={mapDivRef}
          className="w-full h-[420px] sm:h-[560px] lg:h-[640px] bg-muted"
          role="application"
          aria-label="Map of Bitcoin-accepting merchants near Columbia, SC"
        />

        {/* Loading / error overlay */}
        {status !== "ready" && (
          <div
            role="status"
            aria-live="polite"
            className="absolute inset-0 z-[1000] flex flex-col items-center justify-center gap-4 bg-card/90 backdrop-blur-sm"
          >
            {status === "loading" ? (
              <>
                <div className="w-10 h-10 rounded-full border-[3px] border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-muted-foreground">Loading merchants…</p>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full border-[3px] border-red-500 flex items-center justify-center text-red-500 font-bold text-lg">
                  !
                </div>
                <p className="text-sm text-red-500 text-center px-6 max-w-xs">
                  Could not load merchant data.
                </p>
                <button
                  onClick={retry}
                  className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Try again
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Meta row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3 text-xs text-muted-foreground/70 px-1">
        <div aria-live="polite">
          {status === "ready" && count !== null && (
            count === 0 ? (
              <p>
                No Bitcoin merchants found yet.{" "}
                <a
                  href="https://btcmap.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Add one on BTCMap →
                </a>
              </p>
            ) : (
              <p>
                Showing{" "}
                <strong className="text-primary font-semibold">{count}</strong>{" "}
                Bitcoin-accepting merchant{count !== 1 ? "s" : ""} near Columbia, SC
              </p>
            )
          )}
        </div>
        <p className="sm:ml-auto shrink-0">
          Data from{" "}
          <a href="https://btcmap.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            BTCMap.org
          </a>
          {" "}· Tiles ©{" "}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            OpenStreetMap
          </a>
        </p>
      </div>
    </div>
  );
}
