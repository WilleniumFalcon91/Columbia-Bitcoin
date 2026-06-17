import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Presentations", item: `${siteUrl}/presentations` },
  ],
};

type Presentation = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  topicColor: string;
  accentBorder: string;
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
    accentBorder: "border-l-primary/50",
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
    accentBorder: "border-l-yellow-500/50",
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
    accentBorder: "border-l-emerald-500/50",
    description:
      "A deep dive into Sparrow Wallet — hardware wallet setup, node connection, UTXO coin control, watch-only wallets, and advanced Bitcoin self-custody features.",
    sections: ["Why Sparrow?", "Core Features", "Hardware Setup", "Node Connection", "Coin Control", "Security"],
  },
  {
    slug: "blue-wallet",
    title: "BlueWallet",
    date: "Monthly Meetup",
    topic: "Wallets",
    topicColor: "bg-cyan-400/10 text-cyan-400",
    accentBorder: "border-l-cyan-400/50",
    description:
      "A beginner-friendly guide to BlueWallet for iPhone and Android — creating your first wallet, securing your seed phrase, sending and receiving bitcoin, and advanced features.",
    sections: ["Create Wallet", "Seed Backup", "Send & Receive", "Security", "Advanced Features"],
  },
];


export default function PresentationsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <ResourcesBreadcrumb />
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-background">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <RevealOnScroll className="text-center mb-8 sm:mb-12 lg:mb-16">
              <p className="kicker mb-4">
                Learn
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Meetup Presentations
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Educational content from our monthly meetups. Each presentation covers a core Bitcoin
                topic in an accessible, discussion-friendly format.
              </p>
            </RevealOnScroll>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {presentations.map((p, idx) => (
                <RevealOnScroll key={p.slug} delay={idx * 100}>
                <Link
                  href={`/presentations/${p.slug}`}
                  className={`group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 hover-lift border-l-[3px] ${p.accentBorder}`}
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
                </RevealOnScroll>
              ))}
            </div>

            {/* CTA */}
            <RevealOnScroll delay={300}>
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
            </RevealOnScroll>

          </div>
        </section>
      <Footer />
    </main>
  );
}
