"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "leaflet/dist/leaflet.css";
import type { MeetupGroup } from "@/app/api/meetup-map/route";

const CENTER: [number, number] = [39.5, -98.35];
const ZOOM = 4;
const FETCH_TIMEOUT_MS = 25_000;

async function fetchGroups(): Promise<{ groups: MeetupGroup[] }> {
  const res = await fetch("/api/meetup-map", {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

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

function buildPopup(group: MeetupGroup): string {
  const safeWebsite  = group.website ? sanitizeUrl(group.website) : null;
  const safeBtcmap   = sanitizeUrl(group.btcmapUrl);

  return `
    <div class="btcmap-popup">
      <div class="btcmap-popup-name">${escHtml(group.name)}</div>
      <span class="btcmap-popup-category">Bitcoin Community</span>
      ${safeWebsite ? `<a class="btcmap-popup-link" href="${safeWebsite}" target="_blank" rel="noopener noreferrer">Visit website →</a>` : ""}
      ${safeBtcmap  ? `<a class="btcmap-popup-link" href="${safeBtcmap}"  target="_blank" rel="noopener noreferrer">View on BTCMap →</a>` : ""}
    </div>`;
}

function makeMeetupIcon(L: typeof import("leaflet")) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 26 16 26S32 26.5 32 16C32 7.163 24.837 0 16 0z"
        fill="#F7931A" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
      <text x="16" y="21" text-anchor="middle" dominant-baseline="middle"
        font-size="14" font-weight="bold" fill="#000" font-family="Arial,sans-serif">⚡</text>
    </svg>`;
  return L.divIcon({
    html:        svg,
    className:   "",
    iconSize:    [32, 42],
    iconAnchor:  [16, 42],
    popupAnchor: [0, -46],
  });
}

export default function MeetupMap() {
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

      const map = L.map(mapDivRef.current, {
        center: CENTER,
        zoom: ZOOM,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      fetchGroups()
        .then(({ groups }) => {
          if (cancelled) return;
          const group = L.layerGroup();
          const icon  = makeMeetupIcon(L);

          for (const g of groups ?? []) {
            L.marker([g.lat, g.lng], { icon })
              .bindPopup(buildPopup(g), { maxWidth: 280, minWidth: 180 })
              .addTo(group);
          }

          group.addTo(map);
          setCount(groups.length);
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
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
        <div
          ref={mapDivRef}
          className="w-full h-[420px] sm:h-[560px] lg:h-[640px] bg-muted"
          role="application"
          aria-label="World map of Bitcoin meetup communities"
        />

        {status !== "ready" && (
          <div
            role="status"
            aria-live="polite"
            className="absolute inset-0 z-[1000] flex flex-col items-center justify-center gap-4 bg-card/90 backdrop-blur-sm"
          >
            {status === "loading" ? (
              <>
                <div className="w-10 h-10 rounded-full border-[3px] border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-muted-foreground">Loading meetup groups…</p>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full border-[3px] border-red-500 flex items-center justify-center text-red-500 font-bold text-lg">
                  !
                </div>
                <p className="text-sm text-red-500 text-center px-6 max-w-xs">
                  Could not load meetup data.
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3 text-xs text-muted-foreground/70 px-1">
        <div aria-live="polite">
          {status === "ready" && count !== null && (
            count === 0 ? (
              <p>
                No communities found.{" "}
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
                Bitcoin meetup communit{count !== 1 ? "ies" : "y"} worldwide
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
