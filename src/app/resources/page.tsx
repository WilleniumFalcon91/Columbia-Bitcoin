import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedPages from "@/components/RelatedPages";
import { BookOpen, TrendingDown, CalendarDays, Activity, MapPin, Music, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Resources",
  description:
    "Curated Bitcoin education resources for every level — books, podcasts, articles, and tools. Includes a live U.S. Debt Clock, Bitcoin Timechain calendar, Mempool explorer, and a community music playlist. Recommended by the Columbia, SC Bitcoin community.",
  alternates: { canonical: "/resources" },
  twitter: { card: "summary_large_image", title: "Bitcoin Resources | Columbia, SC Bitcoin", description: "Curated Bitcoin education, live network data, and community picks — all in one place." },
  openGraph: {
    title: "Bitcoin Resources | Columbia, SC Bitcoin",
    description:
      "Curated Bitcoin education resources for every level — books, podcasts, articles, videos, and tools recommended by the Columbia, SC Bitcoin community.",
    url: "/resources",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

const sections = [
  {
    href: "/resources/education",
    icon: BookOpen,
    label: "Bitcoin Education",
    description:
      "Curated books, podcasts, articles, videos, and tools for every level — from first-timer to seasoned bitcoiner.",
    tag: "Learn",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    href: "/resources/debt-clock",
    icon: TrendingDown,
    label: "U.S. Debt Clock",
    description:
      "Live federal debt and deficit data ticking upward in real time — a ledger of a monetary system with no hard cap.",
    tag: "Live Data",
    tagColor: "bg-blue-500/10 text-blue-500",
  },
  {
    href: "/resources/timechain",
    icon: CalendarDays,
    label: "Timechain",
    description:
      "Every Bitcoin block ever mined, laid out as a calendar. A living record of the unbroken chain from genesis to today.",
    tag: "Live Data",
    tagColor: "bg-blue-500/10 text-blue-500",
  },
  {
    href: "/resources/mempool",
    icon: Activity,
    label: "Mempool Explorer",
    description:
      "Real-time visibility into Bitcoin's transaction backlog. Track fee rates, block activity, and network congestion.",
    tag: "Live Data",
    tagColor: "bg-blue-500/10 text-blue-500",
  },
  {
    href: "/resources/map",
    icon: MapPin,
    label: "Bitcoin Map",
    description:
      "Find local businesses near Columbia, SC that accept Bitcoin — community-sourced merchant data from BTCMap.org.",
    tag: "Local",
    tagColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    href: "/resources/vibes",
    icon: Music,
    label: "Vibes",
    description:
      "Music handpicked by the Columbia, SC Bitcoin community. You've done the research — now sit back and enjoy.",
    tag: "Community",
    tagColor: "bg-purple-500/10 text-purple-500",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Resources — Columbia, SC Bitcoin</h1>

        <section className="py-24 bg-background">
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
                    {/* Tag */}
                    <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.tagColor}`}>
                      {s.tag}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Text */}
                    <p className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-150">
                      {s.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.description}
                    </p>

                    {/* CTA */}
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
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
