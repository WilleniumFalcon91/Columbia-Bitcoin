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

export default function VibesCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const lastNavRef = useRef<number>(0);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const stripRef = useRef<HTMLDivElement>(null);

  // Core navigation — fades out, swaps video, fades in
  const navigate = useCallback((next: number) => {
    lastNavRef.current = Date.now();
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    setVisible(false);
    fadeTimerRef.current = setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  }, []);

  const goPrev = useCallback(() => {
    navigate((index - 1 + VIDEOS.length) % VIDEOS.length);
  }, [index, navigate]);

  const goNext = useCallback(() => {
    navigate((index + 1) % VIDEOS.length);
  }, [index, navigate]);

  // Auto-advance every AUTO_MS; pauses for PAUSE_AFTER_NAV_MS after any manual nav
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastNavRef.current < PAUSE_AFTER_NAV_MS) return;
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      setVisible(false);
      fadeTimerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % VIDEOS.length);
        setVisible(true);
      }, FADE_MS);
    }, AUTO_MS);

    return () => {
      clearInterval(timer);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  // Scroll active thumbnail to the center of the strip — operates only on the
  // strip's own scrollLeft, never touches page scroll position.
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
          <iframe
            key={index}
            src={`https://www.youtube.com/embed/${VIDEOS[index]}?rel=0&modestbranding=1`}
            title={`Vibes — video ${index + 1} of ${VIDEOS.length}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
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

      {/* Thumbnail strip — relative wrapper enables the right-edge scroll hint */}
      <div className="relative">
        {/* Right-edge fade signals more content on mobile */}
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
              {/* Playing indicator overlay on active thumbnail */}
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
