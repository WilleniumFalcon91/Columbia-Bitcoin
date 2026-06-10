import Link from "next/link";
import { BookOpen, Activity, Users, Lightbulb, GraduationCap, ArrowUpRight, type LucideIcon } from "lucide-react";

type GroupCard = {
  label: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  chipClass: string;
  borderHover: string;
  ctaClass: string;
  topics: string[];
  moreCount?: number;
  href: string;
};

const GROUP_CARDS: GroupCard[] = [
  {
    label: "Learn",
    description: "From first principles to self-custody — guides on Bitcoin fundamentals, security, privacy, mining, and how the network works.",
    icon: BookOpen,
    iconClass: "bg-orange-400/10 text-orange-400 group-hover:bg-orange-400/20",
    chipClass: "bg-orange-400/10 text-orange-400",
    borderHover: "hover:border-orange-400/30",
    ctaClass: "text-orange-400",
    topics: ["Glossary", "Self-Custody", "DCA"],
    moreCount: 5,
    href: "/resources/learn",
  },
  {
    label: "Data & Tools",
    description: "Live block explorers, fee estimators, Bitcoin price charts, merchant maps, and global meetup finders.",
    icon: Activity,
    iconClass: "bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20",
    chipClass: "bg-cyan-400/10 text-cyan-400",
    borderHover: "hover:border-cyan-400/30",
    ctaClass: "text-cyan-400",
    topics: ["Debt Clock", "Mempool", "BTC Charts"],
    moreCount: 3,
    href: "/resources/data-tools",
  },
  {
    label: "Community",
    description: "Connect with Bitcoiners near you — Carolinas regional meetup directories and the Columbia Bitcoin community playlist.",
    icon: Users,
    iconClass: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20",
    chipClass: "bg-emerald-500/10 text-emerald-500",
    borderHover: "hover:border-emerald-500/30",
    ctaClass: "text-emerald-500",
    topics: ["Carolinas Communities", "Vibes"],
    href: "/resources/community",
  },
  {
    label: "Philosophy",
    description: "The intellectual foundations of Bitcoin — hard money theory, the cypherpunk lineage, and the ideas that explain why it matters beyond the price.",
    icon: Lightbulb,
    iconClass: "bg-violet-500/10 text-violet-500 group-hover:bg-violet-500/20",
    chipClass: "bg-violet-500/10 text-violet-500",
    borderHover: "hover:border-violet-500/30",
    ctaClass: "text-violet-500",
    topics: ["Hard Money", "Freedom Tech", "Bitcoin Fixes This"],
    moreCount: 6,
    href: "/resources/philosophy",
  },
];

export default function HomeResourcesSection() {
  return (
    <section id="resources" className="py-12 sm:py-16 lg:py-24 bg-background section-offscreen">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Level Up
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resources
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Curated Bitcoin education, live network data, community picks, and philosophical deep dives — organized by what you&apos;re looking for.
          </p>
        </div>

        {/* Start Here banner */}
        <div className="mb-12">
          <Link
            href="/resources/start-here"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-primary/5 border border-primary/20 hover:border-primary/40 rounded-2xl px-6 py-5 hover-lift hover-glow"
          >
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">New to Bitcoin?</p>
              <p className="font-bold text-foreground text-lg leading-snug">Follow the guided learning path →</p>
              <p className="text-sm text-muted-foreground mt-1">
                Five focused steps from first principles to self-custody. ~90 minutes total.
              </p>
            </div>
            <div className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-orange text-sm font-semibold">
              Start Here
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Presentations learning-path banner */}
        <div className="mb-12">
          <Link
            href="/presentations"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-indigo-500/5 border border-indigo-500/20 hover:border-indigo-500/40 rounded-2xl px-6 py-5 hover-lift hover-glow"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-1">Meetup Presentations</p>
                <p className="font-bold text-foreground text-lg leading-snug">Past meetup presentations — watch, read, and learn</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Bitcoin 101, Lightning Network, Sparrow Wallet, BlueWallet, and more from our monthly meetups.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold group-hover:bg-indigo-500/20 transition-colors">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* 2×2 group cards — expands to 4-column on xl */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {GROUP_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.label}
                href={card.href}
                className={`group flex flex-col bg-card border border-border rounded-2xl p-7 shadow-card hover:shadow-card-hover ${card.borderHover} hover-lift`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${card.iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.label}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {card.topics.map((t) => (
                    <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-full ${card.chipClass}`}>
                      {t}
                    </span>
                  ))}
                  {card.moreCount && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      +{card.moreCount} more
                    </span>
                  )}
                </div>

                <div className={`flex items-center gap-1.5 text-sm font-semibold ${card.ctaClass}`}>
                  Explore {card.label}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
