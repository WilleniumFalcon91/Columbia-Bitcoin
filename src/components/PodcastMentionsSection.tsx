"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Mic, Play, Pause, Music2, Zap, Rss, ExternalLink } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

type PodcastMentionLinks = {
  spotify?: string;
  fountain?: string;
  rss?: string;
  other?: { label: string; url: string };
};

type PodcastMention = {
  id: string;
  podcastName: string;
  episodeTitle: string;
  description: string;
  clipFile: string;
  clipDuration: number;
  publishDate: string;
  links: PodcastMentionLinks;
  artwork?: string;
};

// Add podcast mentions here as you collect them.
// Drop MP3 clip files into public/audio/podcast-clips/ and reference by filename.
const PODCAST_MENTIONS: PodcastMention[] = [
  {
    id: "rabbit-hole-recap-411",
    podcastName: "Rabbit Hole Recap",
    episodeTitle: "#411: Audit Fort Knox",
    description:
      "Columbia Bitcoin sends in a 21,000 sat boost and gives a live shoutout to the new website — Odell reads it out on air.",
    clipFile: "rabbit-hole-recap-411.mp3",
    clipDuration: 33,
    publishDate: "2026-05-29",
    links: {
      spotify: "https://open.spotify.com/episode/3Yxhv4vesW9GQ9xIMuFxRk?t=2377",
      fountain: "https://www.fountain.fm/episode/aelYU8CUjGDIItw7Ec20?t=2377",
    },
    artwork: "https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1fa4d8da2448877c26883166c7",
  },
  {
    id: "local-bitcoiners-015",
    podcastName: "Local Bitcoiners",
    episodeTitle: "Privacy is Sovereignty w/Btcwrestle: Columbia, SC | Ep. 015",
    description:
      "\"Your website dude — that's a ridiculously nice website, there's all kinds of stuff on there.\" Btcwrestle and the hosts discuss columbiabitcoin.com on air.",
    clipFile: "local-bitcoiners-015.mp3",
    clipDuration: 20,
    publishDate: "2026-06-10",
    links: {
      fountain: "https://www.fountain.fm/episode/aelYU8CUjGDIItw7Ec20?t=641",
    },
    artwork: "https://feeds.fountain.fm/uv4pyDVtNAiiCCx5emOU/files/COVER_ART---DEFAULT---24cefc88-4b95-4c28-af76-8477a47fac56.jpg",
  },
];

function formatTime(seconds: number): string {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// Decorative waveform in the section header — always animating slowly
function HeaderWaveform() {
  const bars = [
    { h: 45, dur: 1.5, delay: 0.00 },
    { h: 80, dur: 1.2, delay: 0.20 },
    { h: 100, dur: 1.7, delay: 0.08 },
    { h: 60, dur: 1.4, delay: 0.30 },
    { h: 90, dur: 1.1, delay: 0.14 },
    { h: 55, dur: 1.6, delay: 0.24 },
    { h: 40, dur: 1.3, delay: 0.05 },
  ];
  return (
    <div className="flex items-end justify-center gap-1 h-8 mb-5" aria-hidden="true">
      {bars.map(({ h, dur, delay }, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-primary/55 waveform-bar"
          style={
            {
              height: `${h}%`,
              "--bar-dur": `${dur}s`,
              "--bar-delay": `${delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// Mini waveform bars inside the audio player
function WaveformBars({ isPlaying }: { isPlaying: boolean }) {
  const bars = [
    { h: 55, dur: 0.65, delay: 0.00 },
    { h: 95, dur: 0.80, delay: 0.12 },
    { h: 70, dur: 0.70, delay: 0.20 },
    { h: 85, dur: 0.90, delay: 0.06 },
    { h: 60, dur: 0.75, delay: 0.16 },
  ];
  return (
    <div className="flex items-end gap-[2px] h-3.5" aria-hidden="true">
      {bars.map(({ h, dur, delay }, i) => (
        <div
          key={i}
          className={`w-[3px] rounded-full transition-opacity duration-300 ${
            isPlaying ? "bg-primary waveform-bar" : "bg-primary/30"
          }`}
          style={
            {
              height: `${h}%`,
              "--bar-dur": `${dur}s`,
              "--bar-delay": `${delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

type MiniPlayerProps = {
  clipSrc: string;
  clipDuration: number;
  activeId: string | null;
  selfId: string;
  podcastName: string;
  onPlay: (id: string) => void;
  onPause: (id: string) => void;
};

function MiniPlayer({
  clipSrc,
  clipDuration,
  activeId,
  selfId,
  podcastName,
  onPlay,
  onPause, // receives selfId so parent can ignore stale pauses from non-active cards
}: MiniPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(clipDuration);
  const [hasError, setHasError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const cancelRAF = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const dur = audio.duration || clipDuration;
    const curr = audio.currentTime;
    setElapsed(curr);
    setProgress((curr / dur) * 100);
    animFrameRef.current = requestAnimationFrame(tick);
  }, [clipDuration]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audio.src = clipSrc;
    audioRef.current = audio;

    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setElapsed(0);
      cancelRAF();
      onPause(selfId);
    };
    const onError = () => setHasError(true);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      cancelRAF();
      audioRef.current = null;
    };
  }, [clipSrc, selfId, cancelRAF, onPause]);

  // Pause when another card starts playing
  useEffect(() => {
    if (activeId !== selfId && isPlaying) {
      audioRef.current?.pause();
      cancelRAF();
      setIsPlaying(false);
      onPause(selfId);
    }
  }, [activeId, selfId, isPlaying, cancelRAF, onPause]);

  // Restart rAF after tab regains focus
  useEffect(() => {
    const onVisibilityChange = () => {
      if (!document.hidden && isPlaying && audioRef.current && !audioRef.current.paused) {
        cancelRAF();
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [isPlaying, tick, cancelRAF]);

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasError) return;
    if (isPlaying) {
      audio.pause();
      cancelRAF();
      setIsPlaying(false);
      onPause(selfId);
    } else {
      onPlay(selfId);
      const playPromise = audio.play();
      playPromise?.catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setHasError(true);
      });
      animFrameRef.current = requestAnimationFrame(tick);
      setIsPlaying(true);
    }
  }, [isPlaying, hasError, selfId, onPlay, onPause, tick, cancelRAF]);

  const seek = useCallback((clientX: number) => {
    const bar = progressBarRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !audio.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
    setElapsed(ratio * audio.duration);
  }, []);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => seek(e.clientX),
    [seek]
  );
  const handleProgressTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => seek(e.touches[0].clientX),
    [seek]
  );
  const handleProgressTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      seek(e.touches[0].clientX);
    },
    [seek]
  );
  const handleProgressKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !audio.duration) return;
      if (e.key === "ArrowRight") {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      } else if (e.key === "ArrowLeft") {
        audio.currentTime = Math.max(0, audio.currentTime - 5);
      } else if (e.key === "Home") {
        audio.currentTime = 0;
      } else if (e.key === "End") {
        audio.currentTime = audio.duration;
      } else {
        return;
      }
      setElapsed(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    },
    []
  );

  if (hasError) {
    return <p className="text-xs text-muted-foreground/60 italic py-2">Clip unavailable</p>;
  }

  return (
    <div className="flex items-center gap-3">
      {/* Play/pause button with animated pulse ring */}
      <div className="relative flex-shrink-0">
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full bg-primary/20 podcast-ring"
            aria-hidden="true"
          />
        )}
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? `Pause ${podcastName} clip` : `Play ${podcastName} clip`}
          className="relative z-10 w-11 h-11 rounded-full btn-orange flex items-center justify-center active:scale-95 transition-transform"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
      </div>

      {/* Progress bar + waveform + time */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Outer wrapper extends touch target to ~44px without changing visual height */}
        <div
          ref={progressBarRef}
          role="slider"
          aria-label={`Playback position for ${podcastName}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-valuetext={`${formatTime(elapsed)} of ${formatTime(duration)}`}
          tabIndex={0}
          onClick={handleProgressClick}
          onTouchStart={handleProgressTouchStart}
          onTouchMove={handleProgressTouchMove}
          onKeyDown={handleProgressKeyDown}
          className="relative py-4 -my-4 cursor-pointer group"
        >
          <div className="relative h-2 bg-border/70 rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-none"
              style={{
                width: `${progress}%`,
                boxShadow: isPlaying ? "0 0 8px rgba(247,147,26,0.55)" : "none",
              }}
            />
            {/* Scrubber thumb — visible on hover/focus */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ left: `calc(${progress}% - 7px)` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <WaveformBars isPlaying={isPlaying} />
          <span
            role="timer"
            aria-live="off"
            className="font-mono text-xs text-muted-foreground tabular-nums"
          >
            {formatTime(elapsed)}/{formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}

type PodcastCardProps = {
  mention: PodcastMention;
  activeId: string | null;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  onPause: (id: string) => void;
};

function PodcastCard({ mention, activeId, isPlaying, onPlay, onPause }: PodcastCardProps) {
  const dateDisplay = new Date(mention.publishDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  const hasLinks =
    mention.links.spotify || mention.links.fountain || mention.links.rss || mention.links.other;

  return (
    <div
      className={`relative bg-card border rounded-2xl p-4 sm:p-6 flex flex-col gap-4 transition-all duration-300
        ${
          isPlaying
            ? "border-primary/45 shadow-[0_0_0_1px_rgba(247,147,26,0.12),0_8px_40px_rgba(247,147,26,0.14)] -translate-y-0.5"
            : "border-border shadow-card hover:shadow-card-hover hover:border-primary/25 hover:-translate-y-0.5"
        }`}
    >
      {/* Header: artwork + show name + live badge */}
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300
            ${isPlaying
              ? "border-primary/35 shadow-[0_0_18px_rgba(247,147,26,0.28)]"
              : "border-border"
            }`}
        >
          {mention.artwork ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mention.artwork}
              alt=""
              width={72}
              height={72}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
              <Mic className="w-8 h-8 text-primary/50" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary leading-none">
              {mention.podcastName}
            </span>
            {isPlaying && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary tracking-widest uppercase shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                Live
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{dateDisplay}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed italic">
        {mention.description}
      </p>

      {/* Episode title */}
      <p className="text-[11px] font-medium text-muted-foreground/55 leading-snug -mt-1 line-clamp-2">
        {mention.episodeTitle}
      </p>

      {/* Audio player */}
      <div
        className={`border-t pt-4 transition-colors duration-300 ${
          isPlaying ? "border-primary/20" : "border-border/70"
        }`}
      >
        <MiniPlayer
          clipSrc={`/audio/podcast-clips/${mention.clipFile}`}
          clipDuration={mention.clipDuration}
          activeId={activeId}
          selfId={mention.id}
          podcastName={mention.podcastName}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>

      {/* Platform links */}
      {hasLinks && (
        <div
          className={`flex flex-wrap gap-2 border-t pt-4 -mt-1 transition-colors duration-300 ${
            isPlaying ? "border-primary/15" : "border-border/50"
          }`}
        >
          {mention.links.spotify && (
            <a
              href={mention.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 sm:py-1.5 rounded-lg min-h-[44px] sm:min-h-0"
            >
              <Music2 className="w-3 h-3" />
              Spotify
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          )}
          {mention.links.fountain && (
            <a
              href={mention.links.fountain}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 sm:py-1.5 rounded-lg min-h-[44px] sm:min-h-0"
            >
              <Zap className="w-3 h-3" />
              Fountain
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          )}
          {mention.links.rss && (
            <a
              href={mention.links.rss}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 sm:py-1.5 rounded-lg min-h-[44px] sm:min-h-0"
            >
              <Rss className="w-3 h-3" />
              RSS
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          )}
          {mention.links.other && (
            <a
              href={mention.links.other.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 sm:py-1.5 rounded-lg min-h-[44px] sm:min-h-0"
            >
              {mention.links.other.label}
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function PodcastMentionsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = useCallback((id: string) => {
    setActiveId(id);
    setPlayingId(id);
  }, []);

  const handlePause = useCallback((id: string) => {
    // Only clear playingId if the pausing card is still the active one.
    // Guards against card-1 auto-pause wiping out card-2's just-started playingId.
    setPlayingId(prev => (prev === id ? null : prev));
  }, []);

  if (PODCAST_MENTIONS.length === 0) return null;

  return (
    <section
      id="podcast-mentions"
      className="relative py-12 sm:py-16 lg:py-24 bg-card section-offscreen overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Ambient top glow */}
      <div
        className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealOnScroll className="text-center mb-8 sm:mb-12 lg:mb-16">
          <HeaderWaveform />
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            As Heard On
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary">
            Community Spotlight
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Columbia Bitcoin featured in the wild — real conversations about Bitcoin,
            community, and freedom tech.
          </p>
          {/* Feature count badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-sm font-semibold text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {PODCAST_MENTIONS.length} feature{PODCAST_MENTIONS.length !== 1 ? "s" : ""} and counting
          </div>
        </RevealOnScroll>

        {/* Cards grid */}
        <div
          className={`grid gap-6 ${
            PODCAST_MENTIONS.length === 1
              ? "max-w-sm mx-auto"
              : PODCAST_MENTIONS.length === 2
              ? "sm:grid-cols-2 max-w-3xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {PODCAST_MENTIONS.map((mention, i) => (
            <RevealOnScroll key={mention.id} delay={i * 150}>
              <PodcastCard
                mention={mention}
                activeId={activeId}
                isPlaying={playingId === mention.id}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
