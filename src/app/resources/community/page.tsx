import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";
import { Network, Music, ArrowUpRight, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Community",
  description:
    "Connect with Bitcoiners across the Carolinas — regional meetup directories for South Carolina and North Carolina, plus the Columbia Bitcoin community playlist.",
  alternates: { canonical: "/resources/community" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Community | Columbia, SC Bitcoin",
    description: "Carolinas regional meetup directories and the Columbia Bitcoin community playlist.",
  },
  openGraph: {
    title: "Bitcoin Community | Columbia, SC Bitcoin",
    description:
      "Connect with Bitcoiners across the Carolinas — regional meetup directories and the Columbia Bitcoin community playlist.",
    url: "/resources/community",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Community | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Community | Columbia, SC Bitcoin" }],
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
    href: "/resources/regional",
    icon: Network,
    label: "Carolinas Communities",
    description: "Bitcoin meetup groups across South Carolina and North Carolina — Charlotte, Charleston, Greenville, Raleigh, Asheville, and more.",
    tag: "Regional",
    tagColor: "bg-amber-500/10 text-amber-600",
  },
  {
    href: "/resources/vibes",
    icon: Music,
    label: "Vibes",
    description: "Music handpicked by the Columbia, SC Bitcoin community. You've done the research — now sit back and enjoy.",
    tag: "Community",
    tagColor: "bg-purple-500/10 text-purple-500",
  },
];

export default function CommunityPage() {
  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
              Community
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Community
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find your people. Connect with Bitcoiners across the Carolinas and enjoy culture curated by the community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-amber-500/30 transition-all duration-200"
                >
                  <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="font-semibold text-foreground mb-2 group-hover:text-amber-600 transition-colors duration-150 pr-16">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-amber-600">
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      <RelatedPages current="/resources/community" />
      <Footer />
    </main>
  );
}
