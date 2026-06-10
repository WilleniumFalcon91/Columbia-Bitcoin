import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ShieldOff, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Lightning Network — Instant Bitcoin Payments",
  description:
    "How the Lightning Network works, the best wallets for every experience level, and why instant, near-free Bitcoin payments matter for everyday commerce.",
  alternates: { canonical: "/resources/lightning" },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Network | Columbia, SC Bitcoin",
    description:
      "How the Lightning Network works and the best wallets for every experience level.",
  },
  openGraph: {
    title: "Lightning Network | Columbia, SC Bitcoin",
    description:
      "How the Lightning Network works, the best wallets for every experience level, and why instant, near-free Bitcoin payments matter.",
    url: "/resources/lightning",
    images: [{ url: `/api/og?title=${encodeURIComponent("Lightning Network | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Lightning Network | Columbia, SC Bitcoin" }],
  },
};

type Wallet = {
  name: string;
  emoji: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  levelColor: string;
  custodial: boolean;
  platforms: string;
  href: string;
  description: string;
};

const wallets: Wallet[] = [
  {
    name: "Wallet of Satoshi",
    emoji: "🟠",
    level: "Beginner",
    levelColor: "bg-emerald-500/10 text-emerald-600",
    custodial: true,
    platforms: "iOS, Android",
    href: "https://walletofsatoshi.com",
    description:
      "The simplest Lightning wallet available. Zero setup, instant payments, and a beautiful interface. Custodial — the company holds your funds — but perfect for learning before you go self-custodial.",
  },
  {
    name: "Strike",
    emoji: "⚡",
    level: "Beginner",
    levelColor: "bg-emerald-500/10 text-emerald-600",
    custodial: true,
    platforms: "iOS, Android, Web",
    href: "https://strike.me",
    description:
      "Buy bitcoin and send Lightning payments with a bank-friendly interface. Great for onboarding friends and family. Also custodial — think of it as a Bitcoin-native Venmo for getting started.",
  },
  {
    name: "Phoenix",
    emoji: "🦅",
    level: "Intermediate",
    levelColor: "bg-amber-500/10 text-amber-600",
    custodial: false,
    platforms: "iOS, Android",
    href: "https://phoenix.acinq.co",
    description:
      "Self-custodial Lightning with automatic channel management. You control your keys and your Bitcoin. Phoenix handles the complex channel infrastructure behind the scenes — the best balance of sovereignty and ease of use.",
  },
  {
    name: "Breez",
    emoji: "🌬️",
    level: "Intermediate",
    levelColor: "bg-amber-500/10 text-amber-600",
    custodial: false,
    platforms: "iOS, Android",
    href: "https://breez.technology",
    description:
      "Self-custodial Lightning wallet with built-in podcast streaming and a point-of-sale mode. Good for merchants who want to accept Lightning payments without running their own node.",
  },
  {
    name: "Zeus",
    emoji: "⚡",
    level: "Advanced",
    levelColor: "bg-rose-500/10 text-rose-500",
    custodial: false,
    platforms: "iOS, Android",
    href: "https://zeusln.com",
    description:
      "A full-featured Lightning wallet that connects to your own node (LND, CLN, or Eclair) or uses the embedded node. Complete control over your channels, fees, and routing. The choice for Bitcoiners running their own node.",
  },
  {
    name: "Alby",
    emoji: "🐝",
    level: "Intermediate",
    levelColor: "bg-amber-500/10 text-amber-600",
    custodial: false,
    platforms: "Browser extension, Web",
    href: "https://albyhub.com",
    description:
      "A browser extension wallet optimized for web payments and zaps on Nostr. Connect your own node or use their hosted wallet. Great for web-native Lightning use cases and tipping content creators.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Open a channel",
    description:
      "Two parties lock Bitcoin in a shared on-chain transaction, creating a payment channel. This is your Lightning \"account\" with that peer.",
  },
  {
    step: "02",
    title: "Send payments off-chain",
    description:
      "Once the channel is open, both parties can send unlimited payments back and forth instantly. These transactions are NOT recorded on the blockchain — they only update the channel balance.",
  },
  {
    step: "03",
    title: "Payments route through the network",
    description:
      "You don't need a direct channel with every person you pay. Payments automatically route through a network of connected peers — like how the internet routes data through multiple hops.",
  },
  {
    step: "04",
    title: "Close and settle on-chain",
    description:
      "When you're done, closing the channel broadcasts the final balance to the Bitcoin blockchain. The base layer guarantees settlement — Lightning inherits Bitcoin's security.",
  },
];

const levelColors: Record<Wallet["level"], string> = {
  Beginner: "bg-emerald-500/10 text-emerald-600",
  Intermediate: "bg-amber-500/10 text-amber-600",
  Advanced: "bg-rose-500/10 text-rose-500",
};

export default function LightningPage() {
  const beginnerWallets   = wallets.filter((w) => w.level === "Beginner");
  const intermediateWallets = wallets.filter((w) => w.level === "Intermediate");
  const advancedWallets   = wallets.filter((w) => w.level === "Advanced");

  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />

        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-background">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <RevealOnScroll className="mb-14">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 mb-4">
                Payment Layer
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Lightning Network
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Bitcoin settles large transactions permanently and securely on-chain. The Lightning Network handles the everyday stuff — coffee, tips, streaming payments — instantly and for fractions of a cent.
              </p>
            </RevealOnScroll>

            <div className="space-y-16">

              {/* What is Lightning */}
              <RevealOnScroll>
              <section>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">The Basics</p>
                <h2 className="text-2xl font-bold text-foreground mb-5">What is the Lightning Network?</h2>
                <div className="bg-card border border-yellow-500/20 rounded-2xl p-6 shadow-card mb-6 text-center">
                  <p className="text-lg sm:text-xl font-mono text-yellow-600 py-2 leading-snug">
                    &ldquo;A second-layer protocol for instant, high-volume Bitcoin payments&rdquo;
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Bitcoin&apos;s base layer is intentionally slow and deliberate — every transaction is recorded permanently on thousands of nodes worldwide, confirmed roughly every 10 minutes. That&apos;s perfect for large settlements and final-value transfers, but impractical for buying a cup of coffee.
                  </p>
                  <p>
                    The Lightning Network solves this by allowing two parties to open a payment <em>channel</em> — a private ledger between them, secured by Bitcoin but settled off-chain. Payments through that channel are instant, nearly free, and don&apos;t need to be confirmed by the entire network. When the channel closes, only the final balance is recorded on the blockchain.
                  </p>
                  <p>
                    Channels connect to form a network, so you can pay anyone on Lightning without a direct channel — your payment routes automatically through intermediate peers.
                  </p>
                </div>
              </section>
              </RevealOnScroll>

              {/* Key benefits */}
              <RevealOnScroll>
              <section>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Why It Matters</p>
                <h2 className="text-2xl font-bold text-foreground mb-5">Bitcoin at the speed of life</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "⚡", label: "Instant", description: "Payments settle in milliseconds — faster than swiping a card." },
                    { icon: "💸", label: "Near-free", description: "Typical fees are 1–2 satoshis — fractions of a cent regardless of amount." },
                    { icon: "🔒", label: "Bitcoin-native", description: "No new token, no new trust model. Lightning is Bitcoin." },
                    { icon: "🕵️", label: "More private", description: "Lightning payments aren't recorded on the public blockchain." },
                  ].map((item) => (
                    <div key={item.label} className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl leading-none">{item.icon}</span>
                        <h3 className="font-semibold text-foreground">{item.label}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              </RevealOnScroll>

              {/* How it works */}
              <RevealOnScroll>
              <section>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Technical Deep Dive</p>
                <h2 className="text-2xl font-bold text-foreground mb-5">How Lightning works</h2>
                <div className="space-y-3">
                  {howItWorks.map((s) => (
                    <div key={s.step} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              </RevealOnScroll>

              {/* Wallets */}
              <RevealOnScroll>
              <section>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Get Started</p>
                <h2 className="text-2xl font-bold text-foreground mb-2">Choose your wallet</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Start simple. Most people begin with a custodial wallet, learn the ropes, then graduate to a self-custodial option when they&apos;re ready to fully own their keys.
                </p>

                {[
                  { label: "Beginner", wallets: beginnerWallets },
                  { label: "Intermediate", wallets: intermediateWallets },
                  { label: "Advanced", wallets: advancedWallets },
                ].map(({ label, wallets: wList }) => (
                  <div key={label} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${levelColors[label as Wallet["level"]]}`}>
                        {label}
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="space-y-3">
                      {wList.map((w) => (
                        <div key={w.name} className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl leading-none">{w.emoji}</span>
                              <div>
                                <h3 className="font-semibold text-foreground">{w.name}</h3>
                                <p className="text-xs text-muted-foreground">{w.platforms}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {w.custodial ? (
                                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500">
                                  <ShieldOff className="w-3 h-3" /> Custodial
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                                  <ShieldCheck className="w-3 h-3" /> Self-custodial
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{w.description}</p>
                          <a
                            href={w.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            Visit website <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
              </RevealOnScroll>

              {/* Custodial vs non-custodial */}
              <RevealOnScroll>
              <section>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Key Concept</p>
                <h2 className="text-2xl font-bold text-foreground mb-5">Custodial vs. non-custodial</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-card border border-rose-500/20 rounded-xl p-6 shadow-card">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldOff className="w-5 h-5 text-rose-500" />
                      <h3 className="font-semibold text-foreground">Custodial</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      The wallet provider holds your Bitcoin on your behalf. Easy to use — no channel management — but you&apos;re trusting a third party.
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Examples</p>
                    <p className="text-sm text-foreground">Wallet of Satoshi, Strike, Cash App</p>
                  </div>
                  <div className="bg-card border border-emerald-500/20 rounded-xl p-6 shadow-card">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-semibold text-foreground">Non-custodial</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      You control the keys. Your Bitcoin is yours — no third party can freeze or confiscate it. Slightly more setup required.
                    </p>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Examples</p>
                    <p className="text-sm text-foreground">Phoenix, Breez, Zeus, Alby Hub</p>
                  </div>
                </div>
                <div className="bg-accent/30 border border-accent rounded-xl p-5">
                  <p className="font-semibold text-foreground mb-1">Our recommendation</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Start with Wallet of Satoshi to learn Lightning without friction. Once you understand how payments work and you&apos;re holding meaningful amounts, switch to Phoenix for full self-custody. Come to the meetup — we&apos;ll walk you through the setup.
                  </p>
                </div>
              </section>
              </RevealOnScroll>

              {/* CTA: Lightning presentation */}
              <RevealOnScroll>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7">
                <p className="text-lg font-bold text-foreground mb-2">Want to go deeper?</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our Lightning Network Workshop covers channel management, liquidity, privacy tradeoffs, and running your own node — in a hands-on format built for our monthly meetup.
                </p>
                <Link
                  href="/presentations/lightning-network"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Read the full presentation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              </RevealOnScroll>

            </div>
          </div>
        </section>

      <RelatedPages current="/resources/lightning" />
      <Footer />
    </main>
  );
}
