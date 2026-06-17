"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "Bitcoin" | "Web" | "Learn";

const CATEGORY_PILL: Record<Exclude<Category, "All">, string> = {
  Bitcoin: "bg-primary/10 text-primary",
  Web:     "bg-indigo-500/10 text-indigo-500",
  Learn:   "bg-emerald-500/10 text-emerald-600",
};

const ICON_BG: Record<Exclude<Category, "All">, string> = {
  Bitcoin: "bg-primary/10",
  Web:     "bg-indigo-500/10",
  Learn:   "bg-emerald-500/10",
};

type Resource = {
  icon: string;
  label: string;
  description: string;
  category: Exclude<Category, "All">;
  site: string;
  href: string;
};

const privacyResources: Resource[] = [
  // Bitcoin Privacy Tools
  {
    icon: "🪶",
    label: "Sparrow Wallet",
    description: "The best Bitcoin wallet for privacy. Full coin control, UTXO labeling, built-in CoinJoin (Whirlpool), and native Tor support. The top recommendation for privacy-conscious self-custody.",
    category: "Bitcoin",
    site: "sparrowwallet.com",
    href: "https://sparrowwallet.com",
  },
  {
    icon: "🫧",
    label: "Wasabi Wallet",
    description: "Desktop wallet with WabiSabi CoinJoin — a trustless protocol that breaks transaction graph linkability. All traffic routes through Tor by default. Open-source, self-custodial.",
    category: "Bitcoin",
    site: "wasabiwallet.io",
    href: "https://wasabiwallet.io",
  },
  {
    icon: "🔀",
    label: "JoinMarket",
    description: "The most decentralized CoinJoin option — no central coordinator. A market of makers and takers that earns fees for providing liquidity. Ideal for advanced users.",
    category: "Bitcoin",
    site: "github.com",
    href: "https://github.com/JoinMarket-Org/joinmarket-clientserver",
  },
  {
    icon: "🔇",
    label: "Silent Payments",
    description: "BIP 352 — a static address format that generates a unique on-chain address per sender. Eliminates address reuse without coordination. Growing wallet support in 2025.",
    category: "Bitcoin",
    site: "silentpayments.xyz",
    href: "https://silentpayments.xyz",
  },
  {
    icon: "🔄",
    label: "Bisq",
    description: "Fully decentralized P2P Bitcoin exchange. No sign-up, no KYC, Tor-native. The gold standard for acquiring Bitcoin without identity disclosure.",
    category: "Bitcoin",
    site: "bisq.network",
    href: "https://bisq.network",
  },
  {
    icon: "🤖",
    label: "RoboSats",
    description: "Lightning-native P2P trading. No account — each trade uses a disposable robot avatar. Tor-accessible and fully non-custodial.",
    category: "Bitcoin",
    site: "learn.robosats.com",
    href: "https://learn.robosats.com",
  },
  {
    icon: "🍑",
    label: "Peach Bitcoin",
    description: "Mobile-first P2P Bitcoin trading with no mandatory KYC. Face-to-face and online trades. Good for beginners taking their first no-KYC steps.",
    category: "Bitcoin",
    site: "peachbitcoin.com",
    href: "https://peachbitcoin.com",
  },
  {
    icon: "⚔️",
    label: "Ashigaru",
    description: "Open-source, self-custodial Bitcoin wallet focused on privacy. Runs Whirlpool CoinJoin, routes all traffic through Tor, and offers encrypted key recovery. A community-maintained successor to Samourai's privacy features.",
    category: "Bitcoin",
    site: "ashigaru.rs",
    href: "https://ashigaru.rs",
  },
  {
    icon: "🔬",
    label: "Am I Exposed?",
    description: "Check whether your Bitcoin addresses appear in chain analysis databases. A quick first step to understanding your on-chain privacy posture.",
    category: "Bitcoin",
    site: "am-i.exposed",
    href: "https://am-i.exposed",
  },
  {
    icon: "🗂️",
    label: "Lopp Privacy Resources",
    description: "Jameson Lopp's comprehensive curated list of Bitcoin privacy tools, guides, and research. The most thorough single reference on the subject.",
    category: "Bitcoin",
    site: "lopp.net",
    href: "https://lopp.net/bitcoin-information/privacy.html",
  },
  {
    icon: "⚙️",
    label: "Bitcoin Optech — Privacy Topics",
    description: "Technical deep-dives on CoinJoin, Silent Payments, PayJoin, onion routing, and more. Essential reading for understanding the protocol-level privacy landscape.",
    category: "Bitcoin",
    site: "bitcoinops.org",
    href: "https://bitcoinops.org/en/topics/coinjoin/",
  },

  // Web Privacy Tools
  {
    icon: "🗺️",
    label: "Privacy Guides",
    description: "The community-maintained gold standard for privacy tool recommendations — browsers, VPNs, email, messaging, password managers, and more. Rigorously vetted.",
    category: "Web",
    site: "privacyguides.org",
    href: "https://www.privacyguides.org/en/tools/",
  },
  {
    icon: "🦁",
    label: "Brave Browser",
    description: "Privacy-respecting browser with built-in ad and tracker blocking, fingerprint protection, and a Tor private window mode. No configuration required.",
    category: "Web",
    site: "brave.com",
    href: "https://brave.com",
  },
  {
    icon: "🔍",
    label: "Brave Search",
    description: "Independent search engine with its own index — no Google or Bing under the hood. No tracking, no filter bubble, no search history sold.",
    category: "Web",
    site: "search.brave.com",
    href: "https://search.brave.com",
  },
  {
    icon: "🔐",
    label: "Mullvad VPN",
    description: "The most privacy-respecting VPN. Accepts cash and Bitcoin (including Lightning), no email required to sign up, no usage logs. Based in Sweden.",
    category: "Web",
    site: "mullvad.net",
    href: "https://mullvad.net",
  },
  {
    icon: "🛡️",
    label: "Proton",
    description: "Swiss-based encrypted email, VPN, calendar, drive, and password manager. End-to-end encrypted by default. The easiest upgrade from a Google account.",
    category: "Web",
    site: "proton.me",
    href: "https://proton.me",
  },
  {
    icon: "💬",
    label: "Signal",
    description: "The standard for encrypted messaging. End-to-end encrypted by default, minimal metadata collection, open-source. Recommended by security experts worldwide.",
    category: "Web",
    site: "signal.org",
    href: "https://signal.org",
  },
  {
    icon: "🔑",
    label: "Bitwarden",
    description: "Open-source password manager. Self-host or use their cloud. Strong encryption, cross-platform, free tier covers most needs. Stop reusing passwords.",
    category: "Web",
    site: "bitwarden.com",
    href: "https://bitwarden.com",
  },
  {
    icon: "📱",
    label: "GrapheneOS",
    description: "The most hardened Android privacy OS. Dramatically reduces attack surface and data leakage compared to stock Android. Runs on Google Pixel hardware.",
    category: "Web",
    site: "grapheneos.org",
    href: "https://grapheneos.org",
  },

  // Educational Resources
  {
    icon: "📖",
    label: "BitcoinPrivacy.Wiki",
    description: "The best single-site Bitcoin privacy reference. Covers threat modeling, CoinJoin, UTXO management, Lightning privacy, Silent Payments, and advanced techniques.",
    category: "Learn",
    site: "bitcoinprivacy.wiki",
    href: "https://bitcoinprivacy.wiki",
  },
  {
    icon: "✍️",
    label: "Seth For Privacy",
    description: "Practical, accessible guides on Bitcoin and web privacy from a privacy-first perspective. Great starting point — read 'Privacy First Steps' before anything else.",
    category: "Learn",
    site: "sethforprivacy.com",
    href: "https://sethforprivacy.com",
  },
  {
    icon: "🧭",
    label: "Bitcoiner.guide — Privacy",
    description: "Step-by-step walkthroughs for improving Bitcoin privacy: CoinJoin, running a node, no-KYC acquisition, and more. Beginner-friendly format.",
    category: "Learn",
    site: "bitcoiner.guide",
    href: "https://bitcoiner.guide/privacy/",
  },
  {
    icon: "🏛️",
    label: "EFF Surveillance Self-Defense",
    description: "The EFF's practical guide to defending against surveillance. Covers threat modeling, device security, Tor, Signal, and scenario-specific guides for activists and journalists.",
    category: "Learn",
    site: "ssd.eff.org",
    href: "https://ssd.eff.org",
  },
  {
    icon: "🎙️",
    label: "Opt Out Podcast",
    description: "Seth For Privacy's podcast on privacy tools, data sovereignty, and living free from surveillance capitalism. Interviews with privacy researchers and developers.",
    category: "Learn",
    site: "optoutpod.com",
    href: "https://optoutpod.com",
  },
  {
    icon: "📜",
    label: "Bitcoin Wiki — Privacy",
    description: "Technical reference on Bitcoin privacy mechanics: address reuse, common-input heuristics, change detection, CoinJoin variants, PayJoin, and network-level privacy.",
    category: "Learn",
    site: "en.bitcoin.it",
    href: "https://en.bitcoin.it/wiki/Privacy",
  },
];

const FILTERS: Category[] = ["All", "Bitcoin", "Web", "Learn"];

const FILTER_COUNTS: Record<Category, number> = {
  All:     privacyResources.length,
  Bitcoin: privacyResources.filter((r) => r.category === "Bitcoin").length,
  Web:     privacyResources.filter((r) => r.category === "Web").length,
  Learn:   privacyResources.filter((r) => r.category === "Learn").length,
};

export default function PrivacySection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? privacyResources
      : privacyResources.filter((r) => r.category === active);

  return (
    <section id="privacy" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="kicker mb-4">
            Take Back Control
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Privacy Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bitcoin and financial privacy go hand in hand. These are the tools
            and guides recommended by the Columbia Bitcoin community — for
            protecting your on-chain activity and your digital life.
          </p>
        </div>

        {/* Threat model callout */}
        <div className="mb-10 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-lg">
            🎯
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Start with your threat model</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The right tools depend on what you&apos;re protecting against. Before
              installing everything, spend 10 minutes with the{" "}
              <a
                href="https://ssd.eff.org/module/your-security-plan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                EFF&apos;s threat modeling guide
              </a>{" "}
              — it will make every other decision here more effective.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-mono leading-none ${
                  active === f
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {FILTER_COUNTS[f]}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex sm:flex-col gap-3 sm:gap-0 bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
            >
              {/* Icon */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 self-start sm:mb-4 ${ICON_BG[r.category]}`}
              >
                <span className="text-base sm:text-lg leading-none">{r.icon}</span>
              </div>

              {/* Category badge — desktop only */}
              <span
                className={`hidden sm:inline-flex absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_PILL[r.category]}`}
              >
                {r.category}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col">
                <p className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-1.5 group-hover:text-primary transition-colors duration-150">
                  {r.label}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {r.description}
                </p>
              </div>

              {/* Mobile arrow */}
              <ArrowUpRight className="sm:hidden w-4 h-4 flex-shrink-0 self-center text-muted-foreground/40 group-hover:text-primary transition-all duration-150" />

              {/* Desktop footer */}
              <div className="hidden sm:flex items-center justify-between mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground/60 truncate font-mono">
                  {r.site}
                </p>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
