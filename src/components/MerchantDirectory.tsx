"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  UtensilsCrossed, ShoppingBag, Building2, Dumbbell, Store,
  Zap, MapPin, Globe, ExternalLink, AlertCircle, RefreshCcw, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────
type OverpassElement = {
  type: "node" | "way" | "relation";
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
};

type CategoryGroup = "food" | "shop" | "stay" | "fitness" | "other";

type Merchant = {
  id: string;
  name: string;
  category: string;
  group: CategoryGroup;
  address: string | null;
  website: string | null;
  hasLightning: boolean;
};

// ── Category classification ────────────────────────────────────────
const FOOD_AMENITIES = new Set([
  "restaurant", "cafe", "bar", "fast_food", "pub",
  "food_court", "ice_cream", "bistro", "coffee",
]);

function classifyGroup(tags: Record<string, string>): CategoryGroup {
  if (tags.amenity && FOOD_AMENITIES.has(tags.amenity)) return "food";
  if (tags.shop) return "shop";
  if (tags.tourism === "hotel" || tags.tourism === "hostel" || tags.tourism === "guest_house") return "stay";
  if (tags.leisure === "fitness_centre" || tags.leisure === "sports_centre") return "fitness";
  return "other";
}

function getCategory(tags: Record<string, string>): string {
  const raw = tags.amenity ?? tags.shop ?? tags.tourism ?? tags.leisure ?? null;
  if (!raw || raw === "yes") return "Business";
  return raw.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function parseAddress(tags: Record<string, string>): string | null {
  const parts: string[] = [];
  if (tags["addr:housenumber"] && tags["addr:street"]) {
    parts.push(`${tags["addr:housenumber"]} ${tags["addr:street"]}`);
  } else if (tags["addr:street"]) {
    parts.push(tags["addr:street"]);
  }
  if (tags["addr:city"]) parts.push(tags["addr:city"]);
  return parts.join(", ") || null;
}

function parseSafeUrl(raw: string | undefined): string | null {
  if (!raw) return null;
  try {
    const u = new URL(raw.startsWith("http") ? raw : "https://" + raw);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null;
  } catch {
    return null;
  }
}

// Categories excluded from the featured preview (still counted in total)
const FEATURED_EXCLUDE_TAGS = new Set(["cannabis", "tattoo", "adult", "erotic", "tobacco"]);

function isFeaturable(tags: Record<string, string>): boolean {
  const shop = tags.shop ?? "";
  const amenity = tags.amenity ?? "";
  return !FEATURED_EXCLUDE_TAGS.has(shop) && !FEATURED_EXCLUDE_TAGS.has(amenity);
}

function toMerchant(el: OverpassElement, idx: number): Merchant | null {
  const tags = el.tags ?? {};
  const name = tags.name ?? tags.brand;
  if (!name) return null;
  return {
    id: String(idx),
    name,
    category: getCategory(tags),
    group: classifyGroup(tags),
    address: parseAddress(tags),
    website: parseSafeUrl(tags.website ?? tags["contact:website"] ?? tags.url),
    hasLightning:
      tags["payment:lightning"] === "yes" ||
      tags["payment:lightning_contactless"] === "yes",
  };
}

// Track which elements are featurable alongside the parsed merchant
function toMerchantWithMeta(el: OverpassElement, idx: number): (Merchant & { featurable: boolean }) | null {
  const m = toMerchant(el, idx);
  if (!m) return null;
  return { ...m, featurable: isFeaturable(el.tags ?? {}) };
}

// ── Group visual config ────────────────────────────────────────────
const GROUP_META: Record<CategoryGroup, { icon: LucideIcon; iconCls: string; badgeCls: string }> = {
  food:    { icon: UtensilsCrossed, iconCls: "bg-amber-500/10 text-amber-500",     badgeCls: "bg-amber-500/10 text-amber-500"     },
  shop:    { icon: ShoppingBag,     iconCls: "bg-cyan-400/10 text-cyan-400",       badgeCls: "bg-cyan-400/10 text-cyan-400"       },
  stay:    { icon: Building2,       iconCls: "bg-violet-500/10 text-violet-500",   badgeCls: "bg-violet-500/10 text-violet-500"   },
  fitness: { icon: Dumbbell,        iconCls: "bg-emerald-500/10 text-emerald-500", badgeCls: "bg-emerald-500/10 text-emerald-500" },
  other:   { icon: Store,           iconCls: "bg-primary/10 text-primary",         badgeCls: "bg-primary/10 text-primary"         },
};

const GROUP_LABEL: Record<CategoryGroup, string> = {
  food:    "Food & Drink",
  shop:    "Shopping",
  stay:    "Accommodation",
  fitness: "Fitness",
  other:   "Services",
};

// ── Featured merchant card ─────────────────────────────────────────
function MerchantCard({ m }: { m: Merchant }) {
  const { icon: Icon, iconCls, badgeCls } = GROUP_META[m.group];
  return (
    <div className="flex-none w-64 sm:w-auto flex flex-col bg-background border border-border rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/25 transition-all duration-200">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${iconCls}`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full truncate ${badgeCls}`}>
          {m.category}
        </span>
        {m.hasLightning && (
          <span className="ml-auto flex-shrink-0 flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400">
            <Zap className="w-3 h-3" />
          </span>
        )}
      </div>

      <h3 className="font-bold text-foreground text-sm leading-snug mb-1 line-clamp-2">
        {m.name}
      </h3>

      {m.address && (
        <p className="flex items-start gap-1 text-xs text-muted-foreground mt-0.5 flex-1">
          <MapPin className="w-3 h-3 mt-px flex-shrink-0 opacity-50" />
          <span className="line-clamp-2">{m.address}</span>
        </p>
      )}

      {m.website && (
        <a
          href={m.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <Globe className="w-3 h-3" />
          Visit website
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}

// ── Skeleton card ──────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="flex-none w-64 sm:w-auto bg-background border border-border rounded-2xl p-5 space-y-3 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-border" />
        <div className="h-4 w-20 rounded-full bg-border" />
      </div>
      <div className="h-5 w-3/4 rounded bg-border" />
      <div className="h-3.5 w-2/3 rounded bg-border" />
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────
export default function MerchantDirectory() {
  const [merchants, setMerchants] = useState<(Merchant & { featurable: boolean })[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setStatus("loading");
    setAttempt((a) => a + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetch("/api/btcmap", { signal: AbortSignal.timeout(25_000) })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ elements: OverpassElement[] }>;
      })
      .then(({ elements }) => {
        if (cancelled) return;
        const all = (elements ?? [])
          .map((el, i) => toMerchantWithMeta(el, i))
          .filter((m): m is Merchant & { featurable: boolean } => m !== null)
          .sort((a, b) => a.name.localeCompare(b.name));
        setMerchants(all);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  // Derive values from full merchant list
  const total = merchants.length;

  // Pinned businesses always appear first in the featured row (in this order)
  const PINNED: string[] = [
    "Tsunami Bar Sports",
    "Caffeine Cabin",
    "Groucho's Deli",
    "Harrison James Salon",
  ];
  const pinned = PINNED
    .map((name) => merchants.find((m) => m.name === name))
    .filter((m): m is Merchant & { featurable: boolean } => m !== undefined);
  const pinnedNames = new Set(pinned.map((m) => m.name));
  const rest = merchants.filter((m) => m.featurable && m.website && !pinnedNames.has(m.name));
  const featured = [...pinned, ...rest].slice(0, 4);
  const remaining = total - featured.length;

  // Category breakdown for pills
  const groupCounts = merchants.reduce<Partial<Record<CategoryGroup, number>>>((acc, m) => {
    acc[m.group] = (acc[m.group] ?? 0) + 1;
    return acc;
  }, {});
  const groupOrder: CategoryGroup[] = ["food", "shop", "fitness", "stay", "other"];
  const activePills = groupOrder.filter((g) => (groupCounts[g] ?? 0) > 0);

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 rounded-2xl border border-border bg-background">
        <AlertCircle className="w-7 h-7 text-red-500" />
        <p className="text-sm text-muted-foreground">Could not load merchant data.</p>
        <button
          onClick={retry}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <RefreshCcw className="w-4 h-4" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stat bar + category pills */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-shrink-0" aria-live="polite">
          {status === "loading" ? (
            <div className="h-8 w-56 rounded-lg bg-border animate-pulse" />
          ) : (
            <p className="text-2xl font-bold text-foreground">
              <span className="text-primary">{total}+</span> local businesses
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-0.5">accept Bitcoin in Columbia, SC</p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          {status === "loading"
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-20 rounded-full bg-border animate-pulse" />
              ))
            : activePills.map((g) => {
                const { icon: Icon, badgeCls } = GROUP_META[g];
                return (
                  <span key={g} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeCls}`}>
                    <Icon className="w-3 h-3" />
                    {GROUP_LABEL[g]}
                  </span>
                );
              })
          }
        </div>
      </div>

      {/* Featured merchant cards — horizontal scroll on mobile, grid on sm+ */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto sm:overflow-visible">
        <div className="flex sm:grid sm:grid-cols-4 gap-3 pb-2 sm:pb-0">
          {status === "loading"
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : featured.map((m) => <MerchantCard key={m.id} m={m} />)
          }
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-sm text-muted-foreground">
          {status === "ready" && remaining > 0 && (
            <><span className="font-semibold text-foreground">{remaining} more businesses</span> on the full map</>
          )}
        </p>
        <Link
          href="/resources/map"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-orange text-sm font-semibold"
        >
          Explore all {status === "ready" ? total : ""} businesses on the map
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
