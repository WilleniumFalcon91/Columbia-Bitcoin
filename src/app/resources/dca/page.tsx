import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Dollar Cost Averaging (DCA)",
  description:
    "The investment philosophy behind dollar cost averaging — why it beats timing the market, how it removes emotional decision-making, and the best trusted services to DCA your Bitcoin.",
  alternates: { canonical: "/resources/dca" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin DCA Guide | Columbia, SC Bitcoin",
    description:
      "Why dollar cost averaging beats timing the market — the psychology, the data, and the best services to stack sats automatically.",
  },
  openGraph: {
    title: "Bitcoin DCA Guide | Columbia, SC Bitcoin",
    description:
      "The investment philosophy behind dollar cost averaging, why it beats timing the market, and the best trusted services to DCA your Bitcoin.",
    url: "/resources/dca",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Dollar Cost Averaging (DCA) | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Dollar Cost Averaging (DCA) | Columbia, SC Bitcoin" }],
  },
};

const dcaExamples = [
  {
    label: "$10 / week",
    period: "5 years",
    invested: "$2,600",
    result: "202% average return",
    note: "Historically outperformed the S&P 500 over the same period in most 5-year windows.",
    color: "border-emerald-500/30",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "$25 / week",
    period: "4 years",
    invested: "$5,200",
    result: "Avg. 3–5× growth",
    note: "Across any 4-year Bitcoin DCA window, the average return has been strongly positive due to Bitcoin's long-term appreciation.",
    color: "border-cyan-400/30",
    accent: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    label: "$100 / month",
    period: "10 years (2014–2024)",
    invested: "$12,000",
    result: "~$994,000+ portfolio",
    note: "A patient $100/month investor from January 2014 accumulated a position worth roughly $994k by early 2024 — a 6,700%+ return.",
    color: "border-primary/30",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
];

const psychologyPoints = [
  {
    icon: "🧠",
    title: "Loss aversion is your worst enemy",
    body: "Behavioral research shows the pain of a financial loss is felt roughly twice as intensely as the pleasure of an equivalent gain. This asymmetry causes investors to panic-sell during drawdowns — locking in losses at exactly the wrong moment. DCA removes the decision to act.",
  },
  {
    icon: "⏰",
    title: "Nobody times the market consistently",
    body: "Even professional fund managers fail to beat simple index strategies over time. Over any 10-year period, fewer than 14% of active market timers outperform a disciplined, passive approach. Bitcoin is no different — the majority of traders underperform someone who simply buys on a schedule.",
  },
  {
    icon: "😱",
    title: "FOMO and panic are priced in",
    body: "When Bitcoin crashes 50%, it feels like the end. When it makes new all-time highs, it feels like you missed it. Both feelings drive bad decisions. DCA turns those emotional extremes into mechanical purchases — you buy more when it's cheap and less when it's expensive, automatically.",
  },
  {
    icon: "🔄",
    title: "Consistency compounds",
    body: "The power of DCA isn't any single purchase — it's the habit. A monthly Bitcoin buyer who stayed consistent through the 2018 crash, the 2020 COVID dip, and the 2022 bear market acquired more sats at generational prices precisely because they didn't try to be clever.",
  },
];

const timingVsDCA = [
  {
    scenario: "Perfect market timer",
    detail: "Buys every local bottom, sells every top",
    reality: "Statistically impossible to maintain. Even the best traders have losing years.",
    outcome: "Theoretical best case — unachievable in practice",
    color: "bg-muted/50",
  },
  {
    scenario: "Lump-sum investor",
    detail: "Invests everything at once",
    reality: "Outperforms DCA ~66% of the time in traditional markets — but requires perfect timing and emotional discipline most people don't have.",
    outcome: "Better in hindsight, painful in real time",
    color: "bg-muted/50",
  },
  {
    scenario: "DCA investor",
    detail: "Buys a fixed amount on a fixed schedule, regardless of price",
    reality: "Eliminates timing risk entirely. Smooths out volatility. Lower average cost in bear markets. Removes emotion from the equation.",
    outcome: "Consistent, proven, and repeatable",
    color: "bg-primary/5 border-primary/20",
  },
  {
    scenario: "Market timer (average)",
    detail: "Tries to buy dips and sell peaks",
    reality: "Studies show even the worst random Bitcoin buyer — who bought at every single local top from 2017–2024 — still beat 68% of active traders.",
    outcome: "Most end up underperforming simple DCA",
    color: "bg-muted/50",
  },
];

const services = [
  {
    name: "Swan Bitcoin",
    emoji: "🦢",
    badge: "Community Favorite",
    badgeColor: "bg-primary/10 text-primary",
    btcOnly: true,
    fees: "~0.99% – 2.29%",
    href: "https://swanbitcoin.com",
    highlights: [
      "Bitcoin-only — no altcoins, no distractions",
      "Automatic withdrawal to your own wallet (cold storage)",
      "Bitcoin IRA for tax-advantaged stacking",
      "Swan Vault for institutional-grade custody",
      "SOC 2 Type 2 certified security",
      "World-class Bitcoin education (Bitcoin Canon, Swan Signal)",
    ],
    description:
      "Swan is the platform most trusted by serious Bitcoiners. Their core mission aligns with Bitcoin — no trading, no altcoins, no yield traps. The auto-withdrawal feature means your Bitcoin moves to cold storage automatically, so you're not tempted to leave it on the platform.",
  },
  {
    name: "River Financial",
    emoji: "🏞️",
    badge: "Zero-Fee Recurring",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
    btcOnly: true,
    fees: "0% on recurring buys",
    href: "https://river.com",
    highlights: [
      "Zero fees on all recurring purchases — the best DCA rate available",
      "FDIC-insured USD deposits up to $250,000",
      "Full-reserve Bitcoin custody with proof of reserves",
      "3.30% interest on cash deposits, paid in Bitcoin",
      "U.S.-based customer support",
      "Bitcoin-focused with clean, simple interface",
    ],
    description:
      "River's zero-fee recurring purchase model makes it the most cost-efficient DCA platform available. If you're stacking on a tight budget, the fee savings compound meaningfully over years. They also earn you interest on uninvested cash — paid in Bitcoin.",
  },
  {
    name: "Strike",
    emoji: "⚡",
    badge: "Lightning-Native",
    badgeColor: "bg-yellow-500/10 text-yellow-600",
    btcOnly: true,
    fees: "~0% – 1.5%",
    href: "https://strike.me",
    highlights: [
      "Lightning-native — instant, near-zero-fee Bitcoin transactions",
      "Recurring buys and auto-stack features",
      "Direct paycheck-to-Bitcoin conversion",
      "Send Bitcoin globally via Lightning for fractions of a cent",
      "No altcoins — Bitcoin only",
      "Clean mobile-first interface",
    ],
    description:
      "Strike is built on the Lightning Network, making it one of the most powerful Bitcoin tools for everyday use. You can set up recurring purchases, have your paycheck converted to Bitcoin automatically, and send sats globally with essentially zero fees. Great for people who want to stack and spend Bitcoin daily.",
  },
  {
    name: "Cash App",
    emoji: "💚",
    badge: "Most Accessible",
    badgeColor: "bg-indigo-500/10 text-indigo-500",
    btcOnly: true,
    fees: "~1.75% instant / lower recurring",
    href: "https://cash.app/bitcoin",
    highlights: [
      "Bitcoin-only among major consumer finance apps",
      "Recurring Bitcoin purchases (daily, weekly, bi-weekly)",
      "Withdraw to your own wallet — self-custody friendly",
      "100M+ users — easy to onboard friends and family",
      "Integrated with everyday payments",
      "No altcoins available on the platform",
    ],
    description:
      "Cash App is the easiest on-ramp for most Americans. It's already on tens of millions of phones, supports Bitcoin-only, and allows free withdrawals to a personal wallet. Not as Bitcoin-native as Swan or River, but ideal for getting someone started or introducing family members to stacking sats.",
  },
];

const steps = [
  {
    n: "01",
    title: "Decide on your amount",
    body: "Pick a fixed dollar amount you can commit to every week or month — something you won't miss. $10, $25, $50, $100. The amount matters less than the consistency.",
  },
  {
    n: "02",
    title: "Choose a frequency",
    body: "Weekly tends to beat monthly for smoothing out volatility — more purchase points means a lower average cost during price swings. Daily is even smoother, but weekly is the sweet spot for most people.",
  },
  {
    n: "03",
    title: "Select a platform",
    body: "For lowest fees: River (zero-fee recurring). For Bitcoin-first philosophy and auto-withdrawal: Swan. For Lightning + everyday use: Strike. For simplest onboarding: Cash App.",
  },
  {
    n: "04",
    title: "Automate it completely",
    body: "Set up the recurring buy and forget it. The whole point of DCA is to remove decision-making. If you're checking the price and debating whether to skip a week, you're doing it wrong.",
  },
  {
    n: "05",
    title: "Withdraw to cold storage",
    body: "Once your Bitcoin accumulates to an amount worth protecting (most people set a threshold like 0.01 BTC), withdraw to a hardware wallet. Don't leave savings on a platform indefinitely.",
  },
  {
    n: "06",
    title: "Don't check the price obsessively",
    body: "DCA works over years, not weeks. The best thing you can do after setting it up is ignore the short-term noise. Every dip is a cheaper purchase. Every crash is an opportunity you're already taking advantage of automatically.",
  },
];

export default function DCAPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Dollar Cost Averaging Guide — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            <Link
              href="/resources/learn"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              All Learn Topics
            </Link>

            {/* Header */}
            <div className="text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Investment Strategy
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Dollar Cost Averaging
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The simplest, most effective strategy for accumulating Bitcoin — and the one most backed by data and human psychology. Buy a fixed amount, on a fixed schedule, no matter what the price is doing.
              </p>
            </div>

            {/* What is DCA */}
            <div className="bg-card border border-border rounded-2xl p-7 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-3">What is dollar cost averaging?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dollar cost averaging (DCA) is the practice of investing a fixed dollar amount into an asset at regular intervals — weekly, bi-weekly, or monthly — regardless of the current price. Instead of trying to buy at the &ldquo;perfect&rdquo; moment, you buy consistently over time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When the price is high, your fixed dollar amount buys fewer sats. When the price is low, it buys more. Over time, this smooths out your average cost basis and eliminates the pressure of market timing entirely.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Applied to Bitcoin — an asset with a fixed supply of 21 million coins that has appreciated significantly in every 4-year window of its existence — DCA is the foundation of how most serious long-term holders build their position.
              </p>
            </div>

            {/* Investment psychology */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">The investment psychology</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DCA isn&apos;t just a numbers strategy — it&apos;s a psychological one. Most investors fail not because they picked the wrong asset, but because they made emotional decisions at the wrong moments. DCA is specifically designed to remove those moments.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {psychologyPoints.map((p) => (
                  <div key={p.title} className="bg-card border border-border rounded-2xl p-5 shadow-card">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{p.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DCA vs timing the market */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">DCA vs. timing the market</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lump-sum investing statistically outperforms DCA in traditional markets roughly 66% of the time — when the asset only goes up. But that advantage assumes you have a large sum ready to deploy at the right moment, the emotional discipline to hold through a 50%+ drawdown, and perfect knowledge of when &ldquo;the right moment&rdquo; is. Almost nobody has all three. DCA removes the need for any of them.
              </p>
              <div className="space-y-3">
                {timingVsDCA.map((row) => (
                  <div
                    key={row.scenario}
                    className={`border border-border rounded-2xl p-5 ${row.color}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="sm:w-48 flex-shrink-0">
                        <p className="font-semibold text-foreground text-sm">{row.scenario}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{row.detail}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">{row.reality}</p>
                      </div>
                      <div className="sm:w-48 flex-shrink-0">
                        <p className="text-xs font-semibold text-primary">{row.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">The bottom line:</span> Studies show that even the worst-timed random Bitcoin buyer — who bought at every single local top from 2017 to 2024 — still outperformed 68% of active traders. If bad timing still beats most traders, consistent DCA beats nearly all of them.
                </p>
              </div>
            </div>

            {/* Real Bitcoin DCA examples */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Real Bitcoin DCA results</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are historical examples based on actual Bitcoin price data. Past performance doesn&apos;t guarantee future results — but Bitcoin has been the best-performing asset in every 4-year window of its history. Use{" "}
                <a
                  href="https://dcabtc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  dcabtc.com
                </a>{" "}
                or{" "}
                <a
                  href="https://www.bitcoindollarcostaverage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  bitcoindollarcostaverage.com
                </a>{" "}
                to run your own scenarios.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {dcaExamples.map((ex) => (
                  <div
                    key={ex.label}
                    className={`bg-card border ${ex.color} rounded-2xl p-5 shadow-card`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${ex.bg} flex items-center justify-center mb-4 text-lg`}>
                      📈
                    </div>
                    <p className={`text-xl font-bold ${ex.accent} mb-0.5`}>{ex.label}</p>
                    <p className="text-xs text-muted-foreground mb-3">{ex.period} · {ex.invested} invested</p>
                    <p className="font-semibold text-foreground text-sm mb-2">{ex.result}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ex.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Historical data via{" "}
                <a href="https://dcabtc.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">dcabtc.com</a>
                {" "}and{" "}
                <a href="https://www.bitcoindollarcostaverage.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">bitcoindollarcostaverage.com</a>.
                {" "}Not financial advice.
              </p>
            </div>

            {/* DCA calculators */}
            <div className="bg-card border border-border rounded-2xl p-7 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-3">Run your own numbers</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                These free tools let you backtest any DCA strategy across Bitcoin&apos;s full price history — choose your start date, weekly or monthly amount, and see what the actual results would have been.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    name: "dcabtc.com",
                    desc: "Simple, fast backtester — pick a weekly amount and date range, get instant results.",
                    href: "https://dcabtc.com",
                  },
                  {
                    name: "bitcoindollarcostaverage.com",
                    desc: "Full-featured calculator with tax breakdown, capital gains, and detailed ROI metrics.",
                    href: "https://www.bitcoindollarcostaverage.com",
                  },
                ].map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col bg-background border border-border rounded-xl p-4 hover:border-primary/40 transition-all duration-200"
                  >
                    <p className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                      {tool.name}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Recommended services */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Trusted DCA services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All four platforms below are Bitcoin-only, support recurring purchases, and allow you to withdraw to your own wallet. Avoid any platform that doesn&apos;t let you withdraw — that&apos;s a red flag.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
                  >
                    <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-colors">
                        {s.emoji}
                      </div>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</p>
                        <p className="text-xs text-muted-foreground">Fees: {s.fees}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {s.description}
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        Bitcoin-only
                      </span>
                      <svg
                        className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* How to get started */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">How to get started</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The best DCA strategy is the one you actually stick to. Start small, automate everything, and let time do the work.
              </p>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4 bg-card border border-border rounded-2xl p-5 shadow-card">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary font-mono">{s.n}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 text-center shadow-card">
              <p className="text-2xl mb-3">⚡</p>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Stack sats. Stay consistent. Ignore the noise.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6 text-sm">
                The most successful Bitcoin investors aren&apos;t traders. They&apos;re people who bought regularly, held through the volatility, and moved their Bitcoin to cold storage. DCA is the first half. Self-custody is the second.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/resources/self-custody"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-150 shadow-card"
                >
                  Learn self-custody →
                </a>
                <a
                  href="https://dcabtc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:border-primary/40 transition-all duration-150"
                >
                  Run the calculator ↗
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>

      <RelatedPages current="/resources/dca" />
      <Footer />
    </main>
  );
}
