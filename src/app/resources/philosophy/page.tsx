import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import Footer from "@/components/Footer";
import RelatedPages from "@/components/RelatedPages";
import {
  Coins, Lock, RefreshCw, Wrench, Crown, KeyRound, ArrowUpRight, ScrollText, Network, Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Philosophy",
  description:
    "The intellectual and ideological foundations of Bitcoin — hard money, freedom tech, circular economy, the sovereign individual, and cryptosovereignty.",
  alternates: { canonical: "/resources/philosophy" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Philosophy | Columbia, SC Bitcoin",
    description: "The ideas behind Bitcoin — hard money, cypherpunk roots, sovereignty, and the philosophy of sound money.",
  },
  openGraph: {
    title: "Bitcoin Philosophy | Columbia, SC Bitcoin",
    description:
      "The intellectual and ideological foundations of Bitcoin — hard money, freedom tech, circular economy, the sovereign individual, and cryptosovereignty.",
    url: "/resources/philosophy",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Philosophy | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Philosophy | Columbia, SC Bitcoin" }],
  },
};

const topics = [
  {
    href: "/resources/philosophy/bitcoin-whitepaper",
    icon: ScrollText,
    label: "Bitcoin Whitepaper",
    description: "Satoshi Nakamoto's 9-page paper that solved the double-spend problem — no banks, no trust, no permission required. The founding document of Bitcoin.",
    tag: "Whitepaper",
    tagColor: "bg-orange-500/10 text-orange-600",
  },
  {
    href: "/resources/philosophy/decentralization",
    icon: Network,
    label: "Decentralization",
    description: "The philosophical, political, and systems-level case for distributed systems over central control — and why Bitcoin and Nostr are its most important modern implementations.",
    tag: "Systems",
    tagColor: "bg-sky-500/10 text-sky-600",
  },
  {
    href: "/resources/philosophy/hard-money",
    icon: Coins,
    label: "Hard Money",
    description: "Why Bitcoin's 21 million cap is the most important property in monetary history — Austrian economics, stock-to-flow, and the case for sound money.",
    tag: "Economics",
    tagColor: "bg-amber-500/10 text-amber-600",
  },
  {
    href: "/resources/philosophy/freedom-tech",
    icon: Lock,
    label: "Freedom Tech",
    description: "From the Cypherpunk Manifesto to Bitcoin — the philosophical case for censorship-resistant money and why privacy is a human right, not a privilege.",
    tag: "Cypherpunk",
    tagColor: "bg-cyan-500/10 text-cyan-600",
  },
  {
    href: "/resources/philosophy/circular-economy",
    icon: RefreshCw,
    label: "Circular Economy",
    description: "How to close the fiat loop — earning, spending, and saving in Bitcoin to build a self-sustaining Bitcoin-native economy.",
    tag: "Commerce",
    tagColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    href: "/resources/philosophy/bitcoin-fixes-this",
    icon: Wrench,
    label: "Bitcoin Fixes This",
    description: "The Cantillon effect, debt monetization, and surveillance finance — what's broken about the current system and how Bitcoin addresses each problem.",
    tag: "Thesis",
    tagColor: "bg-rose-500/10 text-rose-500",
  },
  {
    href: "/resources/philosophy/sovereign-individual",
    icon: Crown,
    label: "The Sovereign Individual",
    description: "Davidson & Rees-Mogg's 1997 prophecy — digital cash, the decline of nation-states, and how Bitcoin fulfills the sovereign individual thesis.",
    tag: "Political",
    tagColor: "bg-violet-500/10 text-violet-600",
  },
  {
    href: "/resources/philosophy/cryptosovereignty",
    icon: KeyRound,
    label: "Cryptosovereignty",
    description: "Erik Cason's framework for sovereignty through cryptography — why holding your own keys is a political act, not just a security practice.",
    tag: "Philosophy",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    href: "/resources/philosophy/game-theory",
    icon: Scale,
    label: "Game Theory",
    description: "How Bitcoin uses game theory to make honest behavior the dominant strategy — mining incentives, Nash equilibria, Schelling points, and why it's still early no matter the price.",
    tag: "Strategy",
    tagColor: "bg-indigo-500/10 text-indigo-600",
  },
];

export default function PhilosophyIndexPage() {
  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />
      <div className="pt-8 pb-10 bg-background">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Philosophy
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Ideas Behind Bitcoin
          </h1>
          <p className="text-muted-foreground lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Bitcoin is more than a technology — it&apos;s a set of ideas. These pages explore the philosophical pillars: hard money, cypherpunk freedom, circular commerce, and individual sovereignty.
          </p>
        </div>
      </div>
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
                  >
                    <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${topic.tagColor}`}>
                      {topic.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-150 pr-16">
                      {topic.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {topic.description}
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

      <RelatedPages current="/resources/philosophy" />
      <Footer />
    </main>
  );
}
