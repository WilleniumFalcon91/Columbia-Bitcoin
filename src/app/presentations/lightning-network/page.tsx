import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lightning Network Workshop | Presentations | Columbia, SC Bitcoin",
  description:
    "A hands-on Lightning Network workshop covering how it works, wallet options, channel management, liquidity, privacy tradeoffs, and real-world use cases.",
  alternates: { canonical: "/presentations/lightning-network" },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const walletOptions = [
  {
    level: "Easy Mode",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    wallets: ["Wallet of Satoshi", "Muun"],
    description:
      "Easiest onboarding. Wallet of Satoshi uses Spark; Muun is an on-chain wallet that does Lightning swaps in the background.",
    tradeoffs: "WOS: Spark protocol + privacy concerns. Muun: high fees when on-chain fees are elevated.",
    best: "Complete beginners",
  },
  {
    level: "Hybrid",
    color: "bg-primary/10 border-primary/20 text-primary",
    wallets: ["Phoenix", "Breez"],
    description:
      "Self-custody with automated channel management — the best of both worlds for most users.",
    tradeoffs: "Higher fees than custodial wallets; some privacy tradeoffs.",
    best: "Most Bitcoiners",
  },
  {
    level: "Advanced",
    color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
    wallets: ["Zeus"],
    description:
      "Full control. Connect to your own node or use Zeus's embedded node for maximum sovereignty and channel management.",
    tradeoffs: "Significant complexity; requires understanding of liquidity management.",
    best: "Node runners",
  },
];

const keyParts = [
  {
    icon: "⚡",
    label: "Channels",
    description:
      "A two-party payment channel funded on-chain. Funds move back and forth off-chain, and can process as many payments as you want as long as the channel stays open. Your channels connect you to the rest of the network through your peers' channels.",
  },
  {
    icon: "🖥️",
    label: "Nodes",
    description:
      "Each participant runs a node. Nodes route payments through connected channels. If you're not using your own node, you're using someone else's. Nodes must stay online for connectivity.",
  },
  {
    icon: "🧾",
    label: "Invoices",
    description:
      "Payment requests encoded as a string of text. They specify amount, destination, and expiry — scan or copy-paste to pay.",
  },
];

const paymentSteps = [
  {
    title: "Generate an Invoice",
    description: "The receiver creates an invoice with the requested amount.",
  },
  {
    title: "Peer Scans or Pastes",
    description: "The sender scans the invoice QR or copies the text, confirms the amount, and sends.",
  },
  {
    title: "Node Routes Payment",
    description:
      "The connected node uses its channels with other nodes on the network to route the payment to the recipient through the cheapest path.",
  },
  {
    title: "Settlement",
    description: "Payment confirmed and settled in seconds. No block confirmation needed.",
  },
];

const realWorldUses = [
  {
    icon: "🎙️",
    label: "Micropayments & Content",
    description:
      "Tip podcasters via Podcasting 2.0, or stream sats per minute with apps like Fountain.",
  },
  {
    icon: "🏪",
    label: "Merchant Payments",
    description:
      "Brick-and-mortar and e-commerce stores accept Lightning globally with BTCPay Server or Square. Steak 'n Shake accepts Lightning payments.",
  },
  {
    icon: "🤝",
    label: "RoboSats P2P Trading",
    description:
      "RoboSats requires Lightning payments to lock up escrow in peer-to-peer trades.",
  },
];

export default function LightningNetworkPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          <Link
            href="/presentations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Presentations
          </Link>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 mb-4">
              Lightning
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Lightning Network Workshop
            </h1>
            <p className="text-muted-foreground">
              A hands-on workshop — download a wallet, send and receive sats P2P.
            </p>
          </div>

          <div className="space-y-16">

            {/* Goals */}
            <section>
              <SectionLabel>Workshop Goals</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">What We&apos;re Doing Today</h2>
              <ul className="space-y-3">
                {[
                  "Download a self-custody Lightning wallet and send/receive sats peer-to-peer",
                  "Understand the trade-offs for each Lightning wallet option",
                  "Learn how Lightning works on a basic level (nodes, channels, invoices)",
                  "Explore liquidity: inbound vs. outbound capacity",
                  "Understand privacy pros and cons of Lightning",
                ].map((goal) => (
                  <li key={goal} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 flex-shrink-0">⚡</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </section>

            {/* Why Lightning */}
            <section>
              <SectionLabel>Scalability</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Lightning?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <h3 className="font-semibold text-foreground mb-3">The Problem</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-red-400">✕</span> Bitcoin processes ~7 transactions per second on-chain</li>
                    <li className="flex gap-2"><span className="text-red-400">✕</span> High fees during congestion make micropayments impractical</li>
                    <li className="flex gap-2"><span className="text-red-400">✕</span> 10-minute block times slow confirmation</li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5 shadow-card">
                  <h3 className="font-semibold text-primary mb-3">The Lightning Solution</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Off-chain payment channels settled nearly instantly</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Fees measured in fractions of a cent</li>
                    <li className="flex gap-2"><span className="text-emerald-400">✓</span> Millions of transactions per second — theoretically unlimited</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <SectionLabel>Important</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">Disclaimers</h2>
              <div className="space-y-3">
                <div className="bg-accent/30 border border-accent rounded-xl p-5">
                  <p className="text-sm text-foreground font-semibold mb-1">On-chain is often fine right now.</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    On-chain fees are currently cheap. Lightning&apos;s main practical advantage is for merchants — Square terminals and similar POS systems only accept Lightning.
                  </p>
                </div>
                <div className="bg-accent/30 border border-accent rounded-xl p-5">
                  <p className="text-sm text-foreground font-semibold mb-1">Lightning is NOT for your savings.</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A Lightning wallet is always &quot;hot&quot; — keys are always online. Don&apos;t keep more sats in a Lightning channel than you&apos;d carry as cash in your physical wallet.
                  </p>
                </div>
                <div className="bg-accent/30 border border-accent rounded-xl p-5">
                  <p className="text-sm text-foreground font-semibold mb-1">Privacy depends on your node.</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you&apos;re not using your own node, assume the node you&apos;re connected to can see all your payments.
                  </p>
                </div>
              </div>
            </section>

            {/* Wallet Options */}
            <section>
              <SectionLabel>Wallets</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-2">Lightning Wallet Options</h2>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Try one or two of these. Beginners: start on the easy side and graduate toward Phoenix or Breez. Node runners: Zeus is ideal.
              </p>
              <div className="space-y-4">
                {walletOptions.map((opt) => (
                  <div key={opt.level} className={`bg-card border rounded-xl p-5 shadow-card`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${opt.color}`}>
                        {opt.level}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {opt.wallets.join(", ")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{opt.description}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Trade-offs:</span> {opt.tradeoffs}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="font-medium text-foreground">Best for:</span> {opt.best}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Channels, Nodes, Invoices */}
            <section>
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Channels, Nodes & Invoices</h2>
              <div className="space-y-4">
                {keyParts.map((p) => (
                  <div key={p.label} className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card">
                    <span className="text-2xl leading-none flex-shrink-0">{p.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{p.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Liquidity */}
            <section>
              <SectionLabel>Technical</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">Inbound & Outbound Liquidity</h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Understanding how funds move within Lightning channels is crucial for efficient payments.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Inbound Liquidity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Capacity to <strong className="text-foreground">receive</strong> payments. Others have funds on your side of the channel, enabling them to send to you. Without it, incoming payments can&apos;t route.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Outbound Liquidity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Capacity to <strong className="text-foreground">send</strong> payments. You have funds on your side of the channel — this is your spendable balance.
                  </p>
                </div>
              </div>
              <div className="bg-accent/30 border border-accent rounded-xl p-5">
                <p className="text-sm text-foreground font-semibold mb-1">Quick inbound liquidity hack</p>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Open a larger channel than you need (e.g. 1M sats)</li>
                  <li>Create an invoice on Muun for 500K sats and send to yourself</li>
                  <li>Send from Muun back to your on-chain wallet — now you have 500K inbound</li>
                </ol>
              </div>
            </section>

            {/* Running a node */}
            <section>
              <SectionLabel>Self-Sovereignty</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">Running a Lightning Node</h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                Setting up your own node gives you full sovereignty over your Lightning payments.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Software", value: "LND, CLN (Core Lightning), Eclair" },
                  { label: "Plug-and-play", value: "Umbrel and Start9 for beginners" },
                  { label: "Build your own", value: "RaspiBlitz and MyNode" },
                  { label: "Opening channels", value: "Fund with on-chain BTC and connect to peers" },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-xl p-4 shadow-card">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a href="https://amboss.space" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                  Explore on Amboss <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://mempool.space/lightning" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                  Explore on Mempool.space <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <SectionLabel>Privacy</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">Lightning Privacy</h2>
              <div className="space-y-4 mb-5">
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="text-sm text-foreground font-semibold mb-2">Sending privacy — good, if you run your own node</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The recipient cannot see the UTXO that funded your channel. Nodes along the route can only see the node that sent them the payment and the next node in line — one hop forward and one hop back.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="text-sm text-foreground font-semibold mb-2">Receiving privacy — not good</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The sender can see the entire payment path and knows the destination. Most people use Lightning Service Providers (LSPs) which degrade privacy further since the LSP sees all your payments.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <h3 className="font-semibold text-foreground mb-3 text-sm">Maximize Privacy</h3>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Run a Tor node</li>
                    <li>• Use unannounced channels</li>
                    <li>• Wrap your invoices</li>
                    <li>• Open channels only to trusted peers with good liquidity</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <h3 className="font-semibold text-foreground mb-3 text-sm">Maximize UX / Be a Routing Node</h3>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Run a clearnet node</li>
                    <li>• Announce channels publicly</li>
                    <li>• Open channels to large hubs (ACINQ, Olympus, Kraken, WoS)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Making & Receiving Payments */}
            <section>
              <SectionLabel>Hands-On</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Making & Receiving Payments</h2>
              <div className="space-y-3">
                {paymentSteps.map((s, i) => (
                  <div key={s.title} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Real-World Use Cases */}
            <section>
              <SectionLabel>Today</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Real-World Use Cases</h2>
              <div className="space-y-4">
                {realWorldUses.map((u) => (
                  <div key={u.label} className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card">
                    <span className="text-2xl leading-none flex-shrink-0">{u.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{u.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{u.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://lightning.network/lightning-network-summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Lightning Network Summary (PDF) <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>

          </div>

          <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <Link href="/presentations" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Presentations
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-orange text-sm font-semibold">
              Propose a Topic
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
