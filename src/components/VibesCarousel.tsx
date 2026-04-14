"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VIDEOS = [
  "k001JX-D-dA",
  "dJUrK1ghZic",
  "ZUsOvjH-lRU",
  "M3TzVgGyBFs",
  "Vz9iCgiSZrM",
  "_fymw1iOfiM",
  "MN9PAdVn7l0",
  "zBGofxUj9dc",
  "B5if2hthPCs",
  "109WLnpYkqE",
  "Hgqdss3DY5M",
  "nJeddv1QbeQ",
  "9sY2ALb4UWE",
  "PyVgxa--hiY",
  "92momPdnV3w",
  "6ZKzapbQPZA",
  "exK5yFEuBsk",
  "2YOKsEBDR3k",
  "LMZsaYLqAys",
];

const FADE_MS = 300;
const AUTO_MS = 8000;
const PAUSE_AFTER_NAV_MS = 12000;

// Minimal type shim — avoids installing @types/youtube
interface YTPlayer {
  cueVideoById(id: string): void;
  destroy(): void;
}

export default function VibesCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const lastNavRef = useRef<number>(0);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stripRef = useRef<HTMLDivElement>(null);
  // True while video is playing (1) or buffering (3) — blocks auto-advance
  const isPlayingRef = useRef(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const playerReadyRef = useRef(false);

  // Load the YouTube IFrame API once and create a player in the #vibes-player div.
  // The API fires onStateChange reliably — raw iframes with enablejsapi=1 do not.
  useEffect(() => {
    let cancelled = false;

    const createPlayer = () => {
      if (cancelled) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      playerRef.current = new (window as any).YT.Player("vibes-player", {
        videoId: VIDEOS[0],
        width: "100%",
        height: "100%",
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onReady: () => { playerReadyRef.current = true; },
          onStateChange: ({ data }: { data: number }) => {
            // 1 = playing, 3 = buffering — treat both as actively watching
            isPlayingRef.current = data === 1 || data === 3;
          },
        },
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).YT?.Player) {
      createPlayer();
    } else {
      if (!document.getElementById("yt-api-script")) {
        const s = document.createElement("script");
        s.id = "yt-api-script";
        s.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
      // Preserve any pre-existing callback before overwriting
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const prev = (window as any).onYouTubeIframeAPIReady as (() => void) | undefined;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).onYouTubeIframeAPIReady = () => {
        prev?.();
        createPlayer();
      };
    }

    return () => {
      cancelled = true;
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
      playerReadyRef.current = false;
    };
  }, []);

  // Core navigation — fades out, cues next video (no autoplay), fades in
  const navigate = useCallback((next: number) => {
    isPlayingRef.current = false; // new video hasn't started yet
    lastNavRef.current = Date.now();
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    setVisible(false);
    fadeTimerRef.current = setTimeout(() => {
      setIndex(next);
      if (playerReadyRef.current) playerRef.current?.cueVideoById(VIDEOS[next]);
      setVisible(true);
    }, FADE_MS);
  }, []);

  const goPrev = useCallback(() => {
    navigate((index - 1 + VIDEOS.length) % VIDEOS.length);
  }, [index, navigate]);

  const goNext = useCallback(() => {
    navigate((index + 1) % VIDEOS.length);
  }, [index, navigate]);

  // Auto-advance every AUTO_MS.
  // Skips entirely if a video is actively playing or buffering.
  // Also pauses for PAUSE_AFTER_NAV_MS after any manual navigation.
  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlayingRef.current) return;
      if (Date.now() - lastNavRef.current < PAUSE_AFTER_NAV_MS) return;
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      setVisible(false);
      fadeTimerRef.current = setTimeout(() => {
        setIndex((i) => {
          const next = (i + 1) % VIDEOS.length;
          if (playerReadyRef.current) playerRef.current?.cueVideoById(VIDEOS[next]);
          return next;
        });
        setVisible(true);
      }, FADE_MS);
    }, AUTO_MS);

    return () => {
      clearInterval(timer);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  // Scroll active thumbnail to center of strip — never touches page scroll
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbRefs.current[index];
    if (!strip || !thumb) return;
    const target = thumb.offsetLeft + thumb.offsetWidth / 2 - strip.clientWidth / 2;
    strip.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [index]);

  // Touch swipe — >40px horizontal delta triggers navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const delta = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) { if (delta > 0) { goNext(); } else { goPrev(); } }
    touchStartXRef.current = null;
  }, [goNext, goPrev]);

  return (
    <div className="space-y-3">
      {/* Video stage */}
      <div className="relative group">
        <div
          className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* YT IFrame API mounts its iframe here; sized via #vibes-player iframe in globals.css */}
          <div id="vibes-player" className="w-full h-full" />
        </div>

        {/* Counter badge */}
        <div
          aria-live="polite"
          aria-label={`Video ${index + 1} of ${VIDEOS.length}`}
          className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-xs font-mono text-muted-foreground pointer-events-none select-none"
        >
          {index + 1} / {VIDEOS.length}
        </div>

        {/* Prev */}
        <button
          onClick={goPrev}
          aria-label="Previous video"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-all duration-150 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next */}
        <button
          onClick={goNext}
          aria-label="Next video"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-all duration-150 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail strip — relative wrapper enables right-edge scroll hint */}
      <div className="relative">
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-muted to-transparent z-10 rounded-r-lg" />
        <div ref={stripRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-0.5 py-1">
          {VIDEOS.map((id, i) => (
            <button
              key={id}
              ref={(el) => { thumbRefs.current[i] = el; }}
              onClick={() => navigate(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`relative flex-shrink-0 w-28 sm:w-32 aspect-video rounded-lg overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                i === index
                  ? "border-2 border-primary scale-[1.04] opacity-100 shadow-card"
                  : "border-2 border-transparent opacity-50 hover:opacity-80 hover:border-border"
              }`}
            >
              <Image
                src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                alt=""
                fill
                sizes="128px"
                className="object-cover"
              />
              {i === index && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-primary/90 flex items-center justify-center shadow-card">
                    <svg
                      className="w-3.5 h-3.5 fill-white translate-x-px"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
