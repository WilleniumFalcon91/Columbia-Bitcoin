import Link from "next/link";
import { BookOpen, TrendingDown, CalendarDays, Activity, MapPin, Music, ArrowUpRight } from "lucide-react";

const sections = [
  {
    href: "/resources/education",
    icon: BookOpen,
    label: "Bitcoin Education",
    description:
      "Curated books, podcasts, articles, videos, and tools for every level.",
    tag: "Learn",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    href: "/resources/debt-clock",
    icon: TrendingDown,
    label: "U.S. Debt Clock",
    description:
      "Live federal debt ticking upward — a ledger of a monetary system with no hard cap.",
    tag: "Live Data",
    tagColor: "bg-blue-500/10 text-blue-500",
  },
  {
    href: "/resources/timechain",
    icon: CalendarDays,
    label: "Timechain",
    description:
      "Every Bitcoin block ever mined, laid out as a calendar from genesis to today.",
    tag: "Live Data",
    tagColor: "bg-blue-500/10 text-blue-500",
  },
  {
    href: "/resources/mempool",
    icon: Activity,
    label: "Mempool Explorer",
    description:
      "Real-time fee rates, block activity, and network congestion via mempool.space.",
    tag: "Live Data",
    tagColor: "bg-blue-500/10 text-blue-500",
  },
  {
    href: "/resources/map",
    icon: MapPin,
    label: "Bitcoin Map",
    description:
      "Find local businesses near Columbia, SC that accept Bitcoin — community-sourced merchant data.",
    tag: "Local",
    tagColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    href: "/resources/vibes",
    icon: Music,
    label: "Vibes",
    description:
      "Music handpicked by the Columbia, SC Bitcoin community. Sit back and enjoy.",
    tag: "Community",
    tagColor: "bg-purple-500/10 text-purple-500",
  },
];

export default function HomeResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Level Up
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated Bitcoin education, live network data, and community picks — all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
              >
                <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.tagColor}`}>
                  {s.tag}
                </span>

                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <p className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-150">
                  {s.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.description}
                </p>

                <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-primary">
                  Explore
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
