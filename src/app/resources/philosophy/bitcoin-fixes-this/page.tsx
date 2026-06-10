import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Fixes This — Bitcoin Philosophy",
  description:
    "The Cantillon effect, debt monetization, and surveillance capitalism — what's broken about the current monetary system and how Bitcoin addresses each problem.",
  alternates: { canonical: "/resources/philosophy/bitcoin-fixes-this" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Fixes This | Columbia, SC Bitcoin",
    description: "The Cantillon effect, debt, surveillance finance — what's broken and why Bitcoin is the fix.",
  },
  openGraph: {
    title: "Bitcoin Fixes This | Columbia, SC Bitcoin",
    description:
      "The Cantillon effect, debt monetization, and surveillance capitalism — what's broken about the current monetary system and how Bitcoin addresses each problem.",
    url: "/resources/philosophy/bitcoin-fixes-this",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Fixes This | Columbia, SC Bitcoin")}&section=philosophy`, width: 1200, height: 630, alt: "Bitcoin Fixes This | Columbia, SC Bitcoin" }],
  },
};

const problems = [
  {
    label: "The Cantillon Effect",
    description: "When new money is created, the first recipients spend it before prices rise — they get a real purchasing power gain at everyone else's expense. Banks, governments, and large corporations sit closest to the money printer. Workers and savers sit furthest away. Bitcoin has no money printer. New supply is distributed to miners on a fixed, declining schedule — open to anyone with hardware.",
  },
  {
    label: "Debt Monetization",
    description: "Governments fund deficits by issuing bonds, which central banks purchase by creating new money. This is debt monetization — spending without earning, funded by diluting the savings of everyone who holds the currency. The US national debt has never been repaid in real terms; it has only been inflated away. Bitcoin's fixed supply makes this impossible within the Bitcoin economy.",
  },
  {
    label: "Inflation as Taxation",
    description: "Persistent inflation isn't a neutral economic force — it's a transfer of wealth from savers to debtors. Those with assets (real estate, stocks, businesses) see their nominal value rise. Those on fixed incomes or with cash savings fall behind. Bitcoin, which has never experienced sustained debasement, is the first asset that cannot be inflated by decree.",
  },
  {
    label: "Surveillance Finance",
    description: "Every bank transaction is logged, monitored, and available to governments. Bank accounts are frozen for political protests (Canada 2022), for selling legal goods (Operation Choke Point), for having the wrong associations. Financial surveillance is now total. Bitcoin transactions are pseudonymous and can be made private. Self-custody means no institution can freeze what they don't control.",
  },
];

const parkerLewisEssays = [
  { title: "Bitcoin Can't Be Copied", summary: "Why no altcoin can replicate Bitcoin's monetary properties." },
  { title: "Bitcoin Is Not Too Volatile", summary: "Why short-term volatility is irrelevant to Bitcoin's long-term role as a store of value." },
  { title: "Bitcoin Is Not Backed by Nothing", summary: "The case that Bitcoin is backed by the credible scarcity of its 21 million supply — the most valuable backing possible." },
  { title: "Bitcoin Is Not a Pyramid Scheme", summary: "Why network effects in monetary systems are fundamentally different from fraudulent schemes." },
];

const resources = [
  {
    label: "Gradually, Then Suddenly",
    author: "Parker Lewis",
    href: "https://unchained.com/gradually-then-suddenly/",
    description: "The essential series. Fourteen essays systematically dismantling every common Bitcoin objection and making the case for inevitable adoption.",
  },
  {
    label: "Bitcoin is Venice",
    author: "Allen Farrington & Sacha Meyers",
    href: "https://allenfarrington.medium.com/bitcoin-is-venice-8414dda42070",
    description: "A sweeping essay comparing Bitcoin to the rise of Renaissance Venice — arguing that sound capital is the foundation of civilization and Bitcoin is its restoration.",
  },
  {
    label: "The Price of Tomorrow",
    author: "Jeff Booth",
    href: "https://www.jeffbooth.ca/book",
    description: "Technology is inherently deflationary, but central banks fight deflation by printing money. This contradiction destroys wealth. Booth argues Bitcoin is the resolution.",
  },
  {
    label: "Check Your Financial Privilege",
    author: "Alex Gladstein",
    href: "https://bitcoinmagazine.com/culture/check-your-financial-privilege",
    description: "Why Bitcoin Fixes This hits differently for the 4 billion people living under high inflation, capital controls, or currency collapse.",
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

export default function BitcoinFixesThisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Philosophy", item: `${siteUrl}/resources/philosophy` },
          { "@type": "ListItem", position: 4, name: "Bitcoin Fixes This", item: `${siteUrl}/resources/philosophy/bitcoin-fixes-this` },
        ],
      },
      {
        "@type": "Article",
        headline: "Bitcoin Fixes This — Bitcoin Philosophy",
        description: "The Cantillon effect, debt monetization, and surveillance capitalism — what's broken about the current monetary system and how Bitcoin addresses each problem.",
        url: `${siteUrl}/resources/philosophy/bitcoin-fixes-this`,
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

          {/* Hero */}
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Bitcoin Fixes This
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              &quot;Bitcoin Fixes This&quot; began as a meme but became an analytical framework. For every structural failure of the fiat monetary system, Bitcoin offers a specific architectural solution — not by reforming the old system, but by making it optional.
            </p>
          </div>

          {/* The Problems */}
          <div>
            <SectionLabel>The Problems</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What Bitcoin Fixes</h2>
            <div className="space-y-4">
              {problems.map((p) => (
                <div key={p.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="font-semibold text-foreground mb-2">{p.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Parker Lewis */}
          <div>
            <SectionLabel>Parker Lewis</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Gradually, Then Suddenly</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Parker Lewis, head of business development at Unchained, wrote the most rigorous essay series in Bitcoin arguing the case for Bitcoin&apos;s inevitability. The title &quot;Gradually, Then Suddenly&quot; — borrowed from Hemingway&apos;s description of how one goes bankrupt — captures his thesis: Bitcoin adoption is not a linear ramp. It proceeds slowly, then all at once.
              </p>
              <p>
                His key insight: most Bitcoin critics attack the wrong target. They debate price volatility, energy use, or regulatory risk. Lewis argues that Bitcoin&apos;s credible scarcity — the verifiable guarantee that there will never be more than 21 million — is a monetary property unprecedented in human history. Everything else follows from that.
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {parkerLewisEssays.map((e) => (
                <div key={e.title} className="bg-card border border-border rounded-xl p-4 shadow-card">
                  <p className="font-semibold text-foreground text-sm mb-1">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Allen Farrington */}
          <div>
            <SectionLabel>Allen Farrington</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Bitcoin Is Venice</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Allen Farrington&apos;s essay &quot;Bitcoin Is Venice&quot; makes an argument that goes beyond economics into civilizational philosophy. His thesis: the flourishing of Renaissance Venice — its art, architecture, trade, and culture — was only possible because Venice had sound capital. Merchants and investors had confidence that their returns would not be inflated away, so they made long-horizon bets.
              </p>
              <p>
                Farrington argues that fiat money is fundamentally corrupted capital — it distorts every investment calculation because the unit of account is itself unreliable. Bitcoin restores the possibility of sound capital, and with it, the conditions for civilizational renewal. &quot;Bitcoin Is Venice&quot; is not a prediction about price; it&apos;s a vision of what sound money makes possible over generations.
              </p>
            </div>
            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-sm font-medium text-foreground leading-relaxed">
                &quot;Venice was not rich because it was a financial center. It was a financial center because it was rich — and it was rich because its merchants could make long-term, high-value-added investments without fear of debasement.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Allen Farrington, Bitcoin Is Venice</p>
            </div>
          </div>

          {/* Hyperbitcoinization */}
          <div>
            <SectionLabel>The Endgame</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Hyperbitcoinization</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                &quot;Hyperbitcoinization&quot; describes the terminal state — a world where Bitcoin has become the dominant monetary base layer. Not because governments adopted it, but because rational actors, one by one, chose Bitcoin over an asset that loses purchasing power by design.
              </p>
              <p>
                The argument is Gresham&apos;s Law inverted: when people are free to choose, they eventually choose the hardest money. The process is self-reinforcing — as more people hold Bitcoin, the cost of staying in fiat systems increases, which drives more adoption, which drives more infrastructure, which makes it easier to live on Bitcoin.
              </p>
              <p>
                &quot;Gradually, then suddenly&quot; is the mechanism. &quot;Bitcoin Fixes This&quot; is the reason.
              </p>
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

      <RelatedPages current="/resources/philosophy/bitcoin-fixes-this" />
      <Footer />
    </main>
  );
}
