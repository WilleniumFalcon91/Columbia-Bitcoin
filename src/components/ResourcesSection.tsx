"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "Learn" | "News" | "Tools" | "Social";

const CATEGORY_PILL: Record<Exclude<Category, "All">, string> = {
  Learn:  "bg-primary/10 text-primary",
  News:   "bg-blue-500/10 text-blue-500",
  Tools:  "bg-emerald-500/10 text-emerald-600",
  Social: "bg-purple-500/10 text-purple-500",
};

const ICON_BG: Record<Exclude<Category, "All">, string> = {
  Learn:  "bg-primary/10",
  News:   "bg-blue-500/10",
  Tools:  "bg-emerald-500/10",
  Social: "bg-purple-500/10",
};

type Resource = {
  icon?: string;
  imgSrc?: string;
  label: string;
  description: string;
  category: Exclude<Category, "All">;
  site: string;
  href: string;
};

const educationResources: Resource[] = [
  {
    icon: "❓",
    label: "Bitcoin FAQs",
    description: "Answers to the most common questions — from 'What is Bitcoin?' to how the network actually works.",
    category: "Learn",
    site: "bitcoin-resources.com",
    href: "https://bitcoin-resources.com/faq/",
  },
  {
    icon: "📚",
    label: "Bitcoin Books",
    description: "The definitive reading list — from beginner primers to deep technical deep-dives.",
    category: "Learn",
    site: "bitcoin-resources.com",
    href: "https://bitcoin-resources.com/books/",
  },
  {
    icon: "📄",
    label: "Bitcoin Articles",
    description: "Long-form essays and opinion pieces from Bitcoin writers, economists, and thinkers.",
    category: "Learn",
    site: "bitcoin-resources.com",
    href: "https://bitcoin-resources.com/articles/",
  },
  {
    icon: "🎙️",
    label: "Bitcoin Podcasts",
    description: "Interviews, debates, and commentary from some of the sharpest voices in Bitcoin.",
    category: "Learn",
    site: "bitcoin-resources.com",
    href: "https://bitcoin-resources.com/podcasts/",
  },
  {
    icon: "🎬",
    label: "Bitcoin Videos",
    description: "Visual explainers, conference talks, and documentaries worth your time.",
    category: "Learn",
    site: "bitcoin-resources.com",
    href: "https://bitcoin-resources.com/videos/",
  },
  {
    icon: "📰",
    label: "Bitcoin News",
    description: "No-hype, no-altcoin Bitcoin news. Pure signal — none of the noise.",
    category: "News",
    site: "nobsbitcoin.com",
    href: "https://www.nobsbitcoin.com/",
  },
  {
    icon: "🔗",
    label: "Bitcoin Resources",
    description: "The full directory — wallets, exchanges, tools, and more, all Bitcoin-focused.",
    category: "Tools",
    site: "bitcoin-resources.com",
    href: "https://bitcoin-resources.com/",
  },
  {
    icon: "₿",
    label: "Bitcoin Only",
    description: "A curated index of Bitcoin-only products, services, and applications.",
    category: "Tools",
    site: "bitcoin-only.com",
    href: "https://bitcoin-only.com/",
  },
  {
    imgSrc: "https://raw.githubusercontent.com/mbarulli/nostr-logo/refs/heads/main/PNG/nostr-icon-purple-transparent-256x256.png",
    label: "nostr",
    description: "The censorship-resistant social protocol where bitcoiners gather and connect.",
    category: "Social",
    site: "nostr.com",
    href: "https://nostr.com/",
  },
];

const FILTERS: Category[] = ["All", "Learn", "News", "Tools", "Social"];

const FILTER_COUNTS: Record<Category, number> = {
  All:    educationResources.length,
  Learn:  educationResources.filter((r) => r.category === "Learn").length,
  News:   educationResources.filter((r) => r.category === "News").length,
  Tools:  educationResources.filter((r) => r.category === "Tools").length,
  Social: educationResources.filter((r) => r.category === "Social").length,
};

export default function ResourcesSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? educationResources
      : educationResources.filter((r) => r.category === active);

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Level Up
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bitcoin Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated resources for every level — from newcomers to seasoned
            bitcoiners. Filter by category to find what you need.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-mono leading-none ${
                  active === f
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {FILTER_COUNTS[f]}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex sm:flex-col gap-3 sm:gap-0 bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
            >
              {/* Icon — visible in both layouts */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 self-start sm:mb-4 ${ICON_BG[r.category]}`}
              >
                {r.imgSrc ? (
                  <Image
                    src={r.imgSrc}
                    alt={r.label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-base sm:text-lg leading-none">{r.icon}</span>
                )}
              </div>

              {/* Category badge — desktop only, pinned top-right */}
              <span
                className={`hidden sm:inline-flex absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_PILL[r.category]}`}
              >
                {r.category}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col">
                <p className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-1.5 group-hover:text-primary transition-colors duration-150">
                  {r.label}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {r.description}
                </p>
              </div>

              {/* Mobile arrow */}
              <ArrowUpRight className="sm:hidden w-4 h-4 flex-shrink-0 self-center text-muted-foreground/40 group-hover:text-primary transition-all duration-150" />

              {/* Desktop footer: site URL + arrow */}
              <div className="hidden sm:flex items-center justify-between mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground/60 truncate font-mono">
                  {r.site}
                </p>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
