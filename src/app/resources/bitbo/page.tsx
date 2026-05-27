import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Price Charts & Data — bitbo.io",
  description:
    "Live Bitcoin price history, purchasing power, and long-term appreciation charts. Curated from bitbo.io — the most comprehensive Bitcoin data dashboard.",
  alternates: { canonical: "/resources/bitbo" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Charts | Columbia, SC Bitcoin",
    description:
      "Live price history, purchasing power, and long-term appreciation — curated from bitbo.io.",
  },
  openGraph: {
    title: "Bitcoin Price Charts | Columbia, SC Bitcoin",
    description:
      "Live Bitcoin price history, purchasing power, and long-term appreciation charts curated from bitbo.io.",
    url: "/resources/bitbo",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Data & Charts | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Data & Charts | Columbia, SC Bitcoin" }],
  },
};

type ChartTag = "Appreciation" | "Price History" | "Purchasing Power" | "Scarcity";

const TAG_COLOR: Record<ChartTag, string> = {
  Appreciation:     "bg-emerald-500/10 text-emerald-600",
  "Price History":  "bg-cyan-400/10 text-cyan-400",
  "Purchasing Power": "bg-amber-500/10 text-amber-600",
  Scarcity:         "bg-purple-500/10 text-purple-500",
};

const charts: {
  href: string;
  icon: string;
  label: string;
  description: string;
  tag: ChartTag;
}[] = [
  {
    href: "https://charts.bitbo.io/long-term-power-law/",
    icon: "📈",
    label: "Long-Term Power Law",
    description:
      "Bitcoin's appreciation modeled as a power law across its entire history. Shows floor, projected, and ceiling price bands — and where we stand today.",
    tag: "Appreciation",
  },
  {
    href: "https://charts.bitbo.io/price-drawdown-from-all-time-high/",
    icon: "📉",
    label: "Price Drawdown from ATH",
    description:
      "Every bear market in Bitcoin's history on one chart. Context for how deep current drawdowns are relative to past cycles — and how Bitcoin recovered each time.",
    tag: "Price History",
  },
  {
    href: "https://charts.bitbo.io/stock-to-flow/",
    icon: "🔒",
    label: "Stock-to-Flow Model",
    description:
      "A scarcity-based valuation model tracking the relationship between Bitcoin's circulating supply and its shrinking new issuance across each halving cycle.",
    tag: "Scarcity",
  },
  {
    href: "https://charts.bitbo.io/btc-gold/",
    icon: "🥇",
    label: "Bitcoin vs. Gold",
    description:
      "Bitcoin's price expressed in gold ounces — how much gold one bitcoin buys over time. A direct, hard-money-to-hard-money purchasing power comparison.",
    tag: "Purchasing Power",
  },
  {
    href: "https://charts.bitbo.io/inflation/",
    icon: "💹",
    label: "Bitcoin Inflation Rate",
    description:
      "Bitcoin's programmatically declining issuance rate, now under 1% annually. Contrasts sharply with fiat's uncapped and accelerating money supply.",
    tag: "Scarcity",
  },
  {
    href: "https://charts.bitbo.io/mayermultiple/",
    icon: "📊",
    label: "Mayer Multiple",
    description:
      "Current price divided by the 200-day moving average. A historically reliable gauge of where Bitcoin is in its market cycle — cheap, fair, or extended.",
    tag: "Price History",
  },
];

export default function BitboPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Price Charts & Data — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Live Data
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Bitcoin Data &amp; Charts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Price history, purchasing power, and long-term appreciation — all
                in one place. Curated from{" "}
                <a
                  href="https://bitbo.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  bitbo.io
                </a>
                , the most comprehensive Bitcoin data dashboard.
              </p>
            </div>

            {/* Live price chart */}
            <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden mb-12">
              <iframe
                src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_btc&symbol=BITSTAMP%3ABTCUSD&interval=W&hidesidetoolbar=0&saveimage=0&toolbarbg=131722&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&locale=en"
                title="Bitcoin live price chart — TradingView"
                className="w-full h-[420px] sm:h-[520px]"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>

            {/* Chart cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {charts.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
                >
                  {/* Tag */}
                  <span
                    className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_COLOR[c.tag]}`}
                  >
                    {c.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <span className="text-lg leading-none">{c.icon}</span>
                  </div>

                  {/* Text */}
                  <p className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-150 pr-20">
                    {c.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {c.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground/60 font-mono truncate">
                      charts.bitbo.io
                    </p>
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA block */}
            <div className="bg-card border border-border rounded-2xl shadow-card p-8 sm:p-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl">₿</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Explore the Full Dashboard
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                bitbo.io tracks over 40 Bitcoin metrics in real time — network
                health, mining data, on-chain analysis, ETF holdings, and more.
                Open-source and free.
              </p>
              <a
                href="https://bitbo.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-150 shadow-card"
              >
                Open bitbo.io
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-4">
              Data sourced from{" "}
              <a
                href="https://bitbo.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                bitbo.io
              </a>{" "}
              — open source, updated in real time
            </p>
          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
