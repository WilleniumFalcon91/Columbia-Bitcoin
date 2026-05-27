import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Hard Money — Bitcoin Philosophy",
  description:
    "Why Bitcoin's 21 million cap is the most important property in monetary history. Austrian economics, stock-to-flow, and the case for sound money.",
  alternates: { canonical: "/resources/philosophy/hard-money" },
  twitter: {
    card: "summary_large_image",
    title: "Hard Money | Columbia, SC Bitcoin",
    description: "The case for sound money — Austrian economics, Bitcoin's 21M cap, and why hardness matters.",
  },
  openGraph: {
    title: "Hard Money | Columbia, SC Bitcoin",
    description:
      "Why Bitcoin's 21 million cap is the most important property in monetary history. Austrian economics, stock-to-flow, and the case for sound money.",
    url: "/resources/philosophy/hard-money",
    images: [{ url: `/api/og?title=${encodeURIComponent("Hard Money | Columbia, SC Bitcoin")}&section=philosophy`, width: 1200, height: 630, alt: "Hard Money | Columbia, SC Bitcoin" }],
  },
};

const hardnessComparison = [
  {
    money: "Gold",
    hardness: "High",
    supply: "~1.7% annual growth",
    limit: "No hard cap",
    detail: "Gold's supply grows slowly because mining is expensive and time-consuming. Its hardness comes from physics — you can't print gold. But supply does grow as new deposits are found and mining technology improves.",
  },
  {
    money: "Fiat (USD)",
    hardness: "Very Low",
    supply: "Unlimited",
    limit: "None",
    detail: "Central banks can expand the money supply at will. The US Federal Reserve doubled the M2 money supply between 2020 and 2022. Purchasing power erodes over time — the dollar has lost over 96% of its value since 1913.",
  },
  {
    money: "Bitcoin",
    hardness: "Absolute",
    supply: "~0.8% → 0% by ~2140",
    limit: "21 million — hardcoded",
    detail: "Bitcoin's supply schedule is written into the protocol and enforced by every node. No government, company, or miner can change it. Supply growth halves every four years and reaches zero around 2140.",
  },
];

const austrianPrinciples = [
  {
    thinker: "Ludwig von Mises",
    work: "Human Action (1949)",
    principle: "Money emerges spontaneously from voluntary exchange — it is not invented by governments. The best money is whatever the market converges on. Any artificial manipulation of money supply distorts economic calculation.",
  },
  {
    thinker: "F.A. Hayek",
    work: "The Denationalisation of Money (1976)",
    principle: "Governments should not hold a monopoly on currency. Competition between currencies would force monetary discipline. Hayek argued for privately issued competing currencies — Bitcoin is the most radical realization of this vision.",
  },
  {
    thinker: "Saifedean Ammous",
    work: "The Bitcoin Standard (2018)",
    principle: "Hard money creates low time preference — the disposition to delay gratification, save, and invest in the future. Societies on hard money build great civilizations. Societies on soft money consume their future.",
  },
];

const resources = [
  {
    label: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    href: "https://saifedean.com/thebitcoinstandard/",
    description: "The definitive economic case for Bitcoin as the hardest money ever created. Traces monetary history from commodity money to gold to Bitcoin.",
  },
  {
    label: "Gradually, Then Suddenly",
    author: "Parker Lewis",
    href: "https://unchained.com/gradually-then-suddenly/",
    description: "A series of essays making the case for Bitcoin's inevitable adoption. \"Bitcoin is Not Backed by Nothing\" is the essential primer on hard money.",
  },
  {
    label: "Broken Money",
    author: "Lyn Alden",
    href: "https://www.lynalden.com/broken-money/",
    description: "A comprehensive history of monetary systems — what breaks money, how we got here, and why Bitcoin is the most significant monetary innovation in centuries.",
  },
  {
    label: "What is Money? — Michael Saylor",
    author: "Robert Breedlove & Michael Saylor",
    href: "https://www.youtube.com/watch?v=UkAYcXRTABo",
    description: "A multi-hour conversation on the nature of money, energy, time, and why Bitcoin is the hardest monetary asset in history.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org";

export default function HardMoneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Philosophy", item: `${siteUrl}/resources/philosophy` },
          { "@type": "ListItem", position: 4, name: "Hard Money", item: `${siteUrl}/resources/philosophy/hard-money` },
        ],
      },
      {
        "@type": "Article",
        headline: "Hard Money — Bitcoin Philosophy",
        description: "Why Bitcoin's 21 million cap is the most important property in monetary history. Austrian economics, stock-to-flow, and the case for sound money.",
        url: `${siteUrl}/resources/philosophy/hard-money`,
        publisher: { "@type": "Organization", name: "Columbia, SC Bitcoin", url: siteUrl },
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <ResourcesBreadcrumb />

      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <Link
            href="/resources/philosophy"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            All Philosophy Topics
          </Link>

          {/* Hero */}
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Hard Money
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              For most of human history, the best money won because it was the hardest to produce. Bitcoin takes hardness to its logical conclusion — a supply cap enforced by mathematics, not institutions.
            </p>
          </div>

          {/* What is Hard Money */}
          <div>
            <SectionLabel>Foundation</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">What Makes Money &quot;Hard&quot;?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Money serves two core functions: a medium of exchange (you use it to buy things) and a store of value (you save it and it holds purchasing power over time). &quot;Hard money&quot; excels at the second function — it resists supply inflation.
              </p>
              <p>
                The key metric is <strong className="text-foreground">stock-to-flow ratio</strong>: the existing supply divided by annual new supply. Gold has a stock-to-flow of around 60 (meaning it would take 60 years of current mining to double the supply). Bitcoin&apos;s stock-to-flow already exceeds gold&apos;s, and will approach infinity as the mining reward approaches zero.
              </p>
              <p>
                Whoever controls money supply controls purchasing power. When governments can print money freely, they effectively tax savers without a vote — this is the hidden cost of soft money.
              </p>
            </div>
          </div>

          {/* Hardness comparison */}
          <div>
            <SectionLabel>Comparison</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Gold vs. Fiat vs. Bitcoin</h2>
            <div className="grid gap-4">
              {hardnessComparison.map((item) => (
                <div key={item.money} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-bold text-foreground text-lg">{item.money}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      item.money === "Bitcoin" ? "bg-primary/10 text-primary" :
                      item.money === "Gold" ? "bg-amber-500/10 text-amber-600" :
                      "bg-rose-500/10 text-rose-500"
                    }`}>
                      {item.hardness}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto">{item.supply}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bitcoin's 21M Cap */}
          <div>
            <SectionLabel>Bitcoin&apos;s Supply</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Why 21 Million Can&apos;t Be Changed</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bitcoin&apos;s 21 million supply cap is not a setting — it is a consensus rule enforced by every node on the network. Any miner who produces a block with an invalid reward (more than the protocol allows) will have that block rejected by every honest node. The economic incentive to cheat doesn&apos;t exist because the cheater&apos;s coins would be worthless to everyone else.
              </p>
              <p>
                The supply schedule halves approximately every four years — the <strong className="text-foreground">halving</strong>. At launch in 2009, miners received 50 BTC per block. Today the reward is 3.125 BTC. Around 2028 it will be 1.5625 BTC. This continues until the reward reaches zero around the year 2140, after which miners earn only from transaction fees.
              </p>
            </div>
            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-sm font-medium text-foreground">
                &quot;The root problem with conventional currency is all the trust that&apos;s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Satoshi Nakamoto, 2009</p>
            </div>
          </div>

          {/* Austrian Economics */}
          <div>
            <SectionLabel>Intellectual Roots</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Austrian Economics & Hard Money</h2>
            <div className="space-y-4">
              {austrianPrinciples.map((item) => (
                <div key={item.thinker} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="font-bold text-foreground">{item.thinker}</span>
                    <span className="text-xs text-muted-foreground">{item.work}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.principle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Go Deeper */}
          <div>
            <SectionLabel>Go Deeper</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Essential Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{r.label}</p>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-xs text-primary mb-2">{r.author}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      <RelatedPages current="/resources/philosophy/hard-money" />
      <Footer />
    </main>
  );
}
