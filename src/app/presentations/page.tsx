import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meetup Presentations | Columbia, SC Bitcoin",
  description:
    "Educational presentations from Columbia Bitcoin meetups — Bitcoin fundamentals, privacy, Lightning Network, and more.",
  alternates: { canonical: "/presentations" },
  openGraph: {
    title: "Meetup Presentations | Columbia, SC Bitcoin",
    description:
      "Educational presentations from Columbia Bitcoin meetups.",
    url: "/presentations",
    images: [{ url: `/api/og?title=${encodeURIComponent("Meetup Presentations | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Meetup Presentations | Columbia, SC Bitcoin" }],
  },
};

type Presentation = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  topicColor: string;
  description: string;
  sections: string[];
};

const presentations: Presentation[] = [
  {
    slug: "bitcoin-101",
    title: "Bitcoin 101",
    date: "Monthly Meetup",
    topic: "Fundamentals",
    topicColor: "bg-primary/10 text-primary",
    description:
      "A foundational introduction to Bitcoin: what it is, why it matters, its key properties, and how transactions work under the hood. Perfect for newcomers.",
    sections: ["What is Bitcoin?", "Properties of Bitcoin", "Why Bitcoin?", "How Transactions Work", "Bitcoin Wallets"],
  },
  {
    slug: "lightning-network",
    title: "Lightning Network Workshop",
    date: "Monthly Meetup",
    topic: "Lightning",
    topicColor: "bg-yellow-500/10 text-yellow-600",
    description:
      "A hands-on workshop covering how the Lightning Network works, wallet options for every experience level, channel management, liquidity, and privacy tradeoffs.",
    sections: ["Why Lightning?", "Wallet Options", "Channels & Nodes", "Liquidity", "Privacy", "Real-World Uses"],
  },
  {
    slug: "sparrow-wallet",
    title: "Sparrow Wallet",
    date: "Monthly Meetup",
    topic: "Wallets",
    topicColor: "bg-emerald-500/10 text-emerald-600",
    description:
      "A deep dive into Sparrow Wallet — hardware wallet setup, node connection, UTXO coin control, watch-only wallets, and advanced Bitcoin self-custody features.",
    sections: ["Why Sparrow?", "Core Features", "Hardware Setup", "Node Connection", "Coin Control", "Security"],
  },
  {
    slug: "blue-wallet",
    title: "BlueWallet",
    date: "Monthly Meetup",
    topic: "Wallets",
    topicColor: "bg-blue-500/10 text-blue-500",
    description:
      "A beginner-friendly guide to BlueWallet for iPhone and Android — creating your first wallet, securing your seed phrase, sending and receiving bitcoin, and advanced features.",
    sections: ["Create Wallet", "Seed Backup", "Send & Receive", "Security", "Advanced Features"],
  },
];

type PastTopic = {
  date: string;
  title: string;
  description: string;
  tags: string[];
};

const pastTopics: PastTopic[] = [
  {
    date: "April 2025",
    title: "Bitcoin Privacy Deep Dive",
    description: "Coin control, CoinJoin, Tor, no-KYC purchasing, and tools for financial privacy on Bitcoin.",
    tags: ["Privacy", "Sparrow", "CoinJoin"],
  },
  {
    date: "March 2025",
    title: "Running Your Own Bitcoin Node",
    description: "Why full node sovereignty matters, hardware options, Umbrel vs. Start9, and a live demo.",
    tags: ["Node", "Umbrel", "Sovereignty"],
  },
  {
    date: "February 2025",
    title: "Bitcoin Mining: How It Works",
    description: "Proof of work, hashrate, difficulty adjustment, halvings, and the economics of home mining.",
    tags: ["Mining", "PoW", "Halvings"],
  },
  {
    date: "January 2025",
    title: "Nostr: Decentralized Social Media",
    description: "What Nostr is, why it matters for censorship resistance, and how to get started.",
    tags: ["Nostr", "Freedom Tech", "Social"],
  },
  {
    date: "November 2024",
    title: "Dollar Cost Averaging Strategy",
    description: "The psychology and data behind DCA, a comparison of auto-buy services, and tax-efficient stacking.",
    tags: ["DCA", "Investing", "Swan"],
  },
  {
    date: "October 2024",
    title: "Bitcoin for Businesses",
    description: "Payment processors, Lightning integration, staff training, and a walkthrough of a BTCPay demo.",
    tags: ["Business", "BTCPay", "Lightning"],
  },
];

export default function PresentationsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Learn
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meetup Presentations
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Educational content from our monthly meetups. Each presentation covers a core Bitcoin
                topic in an accessible, discussion-friendly format.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {presentations.map((p) => (
                <Link
                  key={p.slug}
                  href={`/presentations/${p.slug}`}
                  className="group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.topicColor}`}>
                      {p.topic}
                    </span>
                  </div>
                  <h2 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.sections.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {p.date}
                    </span>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Past Topics Archive */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <h2 className="text-xl font-bold text-foreground">Past Meetup Topics</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Topics covered at recent Columbia Bitcoin meetups. Every session is open to questions — no slides required.
              </p>
              <div className="space-y-3">
                {pastTopics.map((t) => (
                  <div key={t.title} className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card">
                    <div className="flex-shrink-0 w-24 text-right">
                      <p className="text-xs font-mono text-muted-foreground leading-tight">{t.date}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm mb-1">{t.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{t.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {t.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Want to give a presentation?</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
                We welcome talks on any Bitcoin or freedom tech topic. Beginner or advanced — all levels welcome at our monthly meetups.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-orange text-sm font-semibold"
              >
                Propose a Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
