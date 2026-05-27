import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";
import {
  TrendingDown, CalendarDays, Activity, TrendingUp, MapPin, Users, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Data & Tools",
  description:
    "Live Bitcoin network data, block explorers, fee estimators, price charts, merchant maps, and meetup finders — everything you need to monitor Bitcoin and find it in the wild.",
  alternates: { canonical: "/resources/data-tools" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Data & Tools | Columbia, SC Bitcoin",
    description: "Live block explorers, fee estimators, price charts, Bitcoin maps, and global meetup finders.",
  },
  openGraph: {
    title: "Bitcoin Data & Tools | Columbia, SC Bitcoin",
    description:
      "Live Bitcoin network data, block explorers, fee estimators, price charts, merchant maps, and meetup finders — everything you need to monitor Bitcoin and find it in the wild.",
    url: "/resources/data-tools",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Data & Tools | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Data & Tools | Columbia, SC Bitcoin" }],
  },
};

type Item = {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
  tag: string;
  tagColor: string;
};

const items: Item[] = [
  {
    href: "/resources/debt-clock",
    icon: TrendingDown,
    label: "U.S. Debt Clock",
    description: "Live federal debt and deficit data ticking upward in real time — a ledger of a monetary system with no hard cap.",
    tag: "Live",
    tagColor: "bg-cyan-400/10 text-cyan-400",
  },
  {
    href: "/resources/timechain",
    icon: CalendarDays,
    label: "Timechain",
    description: "Every Bitcoin block ever mined, laid out as a calendar. A living record of the unbroken chain from genesis to today.",
    tag: "Live",
    tagColor: "bg-cyan-400/10 text-cyan-400",
  },
  {
    href: "/resources/mempool",
    icon: Activity,
    label: "Mempool Explorer",
    description: "Real-time visibility into Bitcoin's transaction backlog. Track fee rates, block activity, and network congestion.",
    tag: "Live",
    tagColor: "bg-cyan-400/10 text-cyan-400",
  },
  {
    href: "/resources/bitbo",
    icon: TrendingUp,
    label: "Bitcoin Data & Charts",
    description: "Price history, purchasing power, and long-term appreciation — curated charts from bitbo.io covering power law, drawdown cycles, and more.",
    tag: "Live",
    tagColor: "bg-cyan-400/10 text-cyan-400",
  },
  {
    href: "/resources/map",
    icon: MapPin,
    label: "Bitcoin Map",
    description: "Find local businesses near Columbia, SC that accept Bitcoin — community-sourced merchant data from BTCMap.org.",
    tag: "Local",
    tagColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    href: "/resources/meetupfinder",
    icon: Users,
    label: "Meetup Finder",
    description: "Discover Bitcoin meetup communities around the world. Find your people — 600+ communities mapped from BTCMap.org.",
    tag: "Global",
    tagColor: "bg-indigo-500/10 text-indigo-500",
  },
];

export default function DataToolsPage() {
  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              Data &amp; Tools
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Bitcoin Data &amp; Tools
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Live network data, block explorers, price charts, and interactive maps. Monitor Bitcoin&apos;s heartbeat and find it in the real world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-cyan-400/30 transition-all duration-200"
                >
                  <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors duration-150 pr-16">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-cyan-400">
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      <RelatedPages current="/resources/data-tools" />
      <Footer />
    </main>
  );
}
