import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Run a Bitcoin Node | Resources | Columbia, SC Bitcoin",
  description:
    "Why you should run a Bitcoin full node — cypherpunk philosophy, sovereignty, privacy benefits, software options (Bitcoin Core, Umbrel, Start9), hardware requirements, and a getting-started guide.",
  alternates: { canonical: "/resources/node" },
  openGraph: {
    title: "Run a Bitcoin Node | Columbia, SC Bitcoin",
    description: "Don't trust, verify. Everything you need to run your own Bitcoin full node.",
    url: "/resources/node",
    images: [{ url: `/api/og?title=${encodeURIComponent("Run a Bitcoin Node | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Run a Bitcoin Node | Columbia, SC Bitcoin" }],
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const whyReasons = [
  {
    icon: "✅",
    label: "Don't Trust, Verify",
    desc: "When you use someone else's node, you're trusting them to tell you the truth about your balance and the state of the network. Your own node validates every transaction and every block independently — no trust required.",
  },
  {
    icon: "🔒",
    label: "Financial Sovereignty",
    desc: "Your node is your own gateway to the Bitcoin network. No bank, exchange, or third party can freeze your ability to broadcast or validate transactions. You become your own financial institution.",
  },
  {
    icon: "🕵️",
    label: "Enhanced Privacy",
    desc: "Light wallets query third-party servers that can log your IP address and wallet addresses together. Your own node keeps that data on your hardware — your transaction history is yours alone.",
  },
  {
    icon: "🗳️",
    label: "Enforce the Rules",
    desc: "Nodes are the enforcers of Bitcoin's consensus rules. By running a node, you personally reject any block that violates the rules — inflation attempts, invalid transactions, protocol changes you didn't approve.",
  },
  {
    icon: "🌐",
    label: "Support Decentralization",
    desc: "Bitcoin's security comes from many independent nodes around the world. Every node you add makes the network more resilient, more censorship-resistant, and harder for any single actor to attack or capture.",
  },
  {
    icon: "⚡",
    label: "Better Lightning Experience",
    desc: "Connecting your Lightning wallet (Zeus, Breez, etc.) to your own node gives you full control over your payment channels, routing, and liquidity — with maximum privacy.",
  },
];

const softwareOptions = [
  {
    name: "Bitcoin Core",
    type: "Pure node — CLI/GUI",
    typeColor: "bg-primary/10 text-primary",
    desc: "The reference implementation of Bitcoin. Runs the network. No extra apps — just raw Bitcoin. Excellent if you're comfortable with the command line. The gold standard for sovereignty.",
    link: "https://bitcoin.org/en/download",
    effort: "Medium",
  },
  {
    name: "Umbrel",
    type: "Node OS — beginner-friendly",
    typeColor: "bg-emerald-500/10 text-emerald-600",
    desc: "A beautiful web dashboard for your node. Runs Bitcoin Core plus optional apps (Lightning, Electrs, Mempool, Nostr relay, etc.). One-click app installs on a Raspberry Pi 4 or PC.",
    link: "https://umbrel.com",
    effort: "Easy",
  },
  {
    name: "Start9 (Embassy OS)",
    type: "Node OS — self-hosting focus",
    typeColor: "bg-violet-500/10 text-violet-600",
    desc: "Privacy-first operating system for self-hosting Bitcoin and other services. Strong emphasis on sovereignty and reproducible builds. Slightly more technical but highly configurable.",
    link: "https://start9.com",
    effort: "Easy–Medium",
  },
  {
    name: "RaspiBlitz",
    type: "DIY — Lightning focus",
    typeColor: "bg-cyan-500/10 text-cyan-600",
    desc: "Open-source node/Lightning node software designed for Raspberry Pi. Highly customizable, well-documented. Best for those who want to learn by building.",
    link: "https://raspiblitz.org",
    effort: "Medium",
  },
  {
    name: "MyNode",
    type: "Node OS — balanced",
    typeColor: "bg-amber-500/10 text-amber-600",
    desc: "Runs Bitcoin Core and Lightning with a clean interface. Free community edition and a paid premium tier with additional apps. Good middle ground between ease and customization.",
    link: "https://mynodebtc.com",
    effort: "Easy",
  },
];

const hardwareOptions = [
  {
    name: "Raspberry Pi 4 (4GB+)",
    cost: "~$60–$100",
    icon: "🍓",
    pros: ["Low power draw (~5W)", "Quiet — completely silent", "Compact and portable"],
    cons: ["Slower IBD (initial block download)", "Requires external SSD (~$60–80 more)"],
    best: "Most home node runners",
  },
  {
    name: "Old Laptop / Desktop PC",
    cost: "$0 (repurposed)",
    icon: "💻",
    pros: ["Free if you have one", "More CPU/RAM — faster IBD", "Easier to configure"],
    cons: ["Higher power draw", "Louder if desktop"],
    best: "Getting started quickly",
  },
  {
    name: "Umbrel Home / Start9 Server",
    cost: "$300–$500",
    icon: "📦",
    pros: ["Plug-and-play — pre-built hardware", "Optimized software stack", "Best experience out of the box"],
    cons: ["Higher upfront cost"],
    best: "Non-technical users who want it to just work",
  },
  {
    name: "Custom Mini-PC (Intel NUC, etc.)",
    cost: "$150–$400",
    icon: "🖥️",
    pros: ["Silent, compact, efficient", "More powerful than Raspberry Pi", "Great long-term reliability"],
    cons: ["Requires manual setup"],
    best: "Power users who want performance and quiet operation",
  },
];

const requirements = [
  { label: "Storage", value: "≥ 700 GB SSD", note: "The blockchain is ~630 GB and growing ~50–60 GB/year. Use a fast SSD — not an HDD." },
  { label: "RAM", value: "4–8 GB", note: "4 GB minimum; 8 GB recommended for running Lightning alongside Bitcoin Core." },
  { label: "CPU", value: "Any modern CPU", note: "Initial block download is CPU-intensive. After IBD, load is minimal." },
  { label: "Bandwidth", value: "~20–40 GB/month upload", note: "Serving blocks to peers uses upload bandwidth. Check your ISP's data cap." },
  { label: "Uptime", value: "As much as possible", note: "Your node is most useful when online continuously. A node that's always on peers better and keeps Lightning channels active." },
  { label: "Internet", value: "Broadband", note: "Faster download speeds mean a quicker initial block download — which can take days on a slow connection." },
];

const gettingStartedSteps = [
  { title: "Choose your hardware", desc: "Most people start with a Raspberry Pi 4 (8GB) or repurpose an old laptop. Either works." },
  { title: "Choose your software", desc: "Umbrel is the easiest starting point. Download the OS image, flash to an SD card, plug in your SSD, and follow the on-screen setup." },
  { title: "Initial Block Download (IBD)", desc: "Your node downloads and validates the entire Bitcoin blockchain from 2009 to today. This takes 1–7 days depending on your hardware and internet speed. Let it run." },
  { title: "Connect your wallet", desc: "Point Sparrow Wallet at your node's Electrum server, or connect your Lightning wallet to your node for a fully sovereign setup." },
  { title: "Keep it running", desc: "A node is most useful when it's online. Plug it into your router and leave it running. Check on it occasionally — most setups are maintenance-free." },
];

const philosophyQuotes = [
  { quote: "We must defend our own privacy if we expect to have any. We must come together and create systems which allow anonymous transactions to take place.", author: "Eric Hughes, A Cypherpunk's Manifesto (1993)" },
  { quote: "The root problem with conventional currency is all the trust that's required to make it work… With e-currency based on cryptographic proof, without the need to trust a third party middleman, money can be secure and transactions effortless.", author: "Satoshi Nakamoto (2009)" },
];

const resources = [
  { label: "Bitcoin Core", href: "https://bitcoin.org/en/download", desc: "The reference Bitcoin node implementation." },
  { label: "Umbrel", href: "https://umbrel.com", desc: "Beginner-friendly node OS with a beautiful dashboard." },
  { label: "Start9", href: "https://start9.com", desc: "Privacy-first self-hosting OS (Embassy OS)." },
  { label: "RaspiBlitz", href: "https://raspiblitz.org", desc: "DIY Lightning + Bitcoin node for Raspberry Pi." },
  { label: "Sparrow Wallet (Node Connection Guide)", href: "https://sparrowwallet.com/docs/connect-node.html", desc: "How to connect Sparrow Wallet to your own node." },
  { label: "node.guide", href: "https://node.guide", desc: "Comprehensive comparison guide for all node options." },
  { label: "Bitcoin Core Docs", href: "https://bitcoin.org/en/full-node", desc: "Official documentation for running Bitcoin Core." },
];

export default function NodePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Run a Bitcoin Node — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <Link
              href="/resources/learn"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              All Learn Topics
            </Link>

            <div className="mb-14">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 mb-4">
                Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Run a Bitcoin Node
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Running a full node is the most sovereign thing a Bitcoiner can do. You become your own bank, your own auditor, and a guardian of the rules that make Bitcoin what it is.
              </p>
            </div>

            <div className="space-y-16">

              {/* Philosophy */}
              <section>
                <SectionLabel>Cypherpunk Philosophy</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Don&apos;t Trust, Verify</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  The cypherpunk movement of the 1980s and 90s held that privacy and freedom in the digital age could only be guaranteed through cryptography and decentralization — not through trust in institutions. Bitcoin is the most successful expression of these ideas ever built.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  But Bitcoin&apos;s trust-minimized design only benefits you personally if <em>you</em> participate in enforcing it. Every user who delegates verification to a third party weakens the network&apos;s decentralization — and their own sovereignty. Running a node is the act of participation that makes Bitcoin real for you.
                </p>
                <div className="space-y-4">
                  {philosophyQuotes.map((q) => (
                    <div key={q.author} className="bg-card border border-border rounded-2xl p-6 shadow-card">
                      <p className="text-muted-foreground leading-relaxed mb-3 italic">&ldquo;{q.quote}&rdquo;</p>
                      <p className="text-xs text-muted-foreground font-medium">— {q.author}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* What Is a Node */}
              <section>
                <SectionLabel>What Is It?</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">What Is a Bitcoin Full Node?</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  A <strong className="text-foreground">full node</strong> is software that downloads and independently validates every single block and transaction in Bitcoin&apos;s history — from the genesis block in January 2009 to the most recent block added seconds ago. It enforces every consensus rule in the Bitcoin protocol with no exceptions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "📥", label: "Full Node", desc: "Downloads and validates the entire blockchain. Enforces all consensus rules. The gold standard of sovereignty. ~700 GB of storage required." },
                    { icon: "📡", label: "Light Node (SPV)", desc: "Downloads only block headers — not full transaction data. Trusts miners to follow the rules. Used by most mobile wallets for convenience." },
                  ].map((item) => (
                    <div key={item.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Run One */}
              <section>
                <SectionLabel>Benefits</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-6">Why You Should Run a Node</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whyReasons.map((r) => (
                    <div key={r.label} className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl leading-none">{r.icon}</span>
                        <h4 className="font-semibold text-foreground text-sm">{r.label}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Software Options */}
              <section>
                <SectionLabel>Software</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Node Software Options</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  All of these run Bitcoin Core (or a compatible implementation) under the hood. The difference is the interface and bundled apps on top.
                </p>
                <div className="space-y-4">
                  {softwareOptions.map((opt) => (
                    <div key={opt.name} className="bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{opt.name}</h4>
                          <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${opt.typeColor}`}>{opt.type}</span>
                        </div>
                        <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-1 flex-shrink-0">
                          Effort: {opt.effort}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{opt.desc}</p>
                      <a href={opt.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                        {opt.link.replace("https://", "")} <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hardware Options */}
              <section>
                <SectionLabel>Hardware</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Hardware Options</h3>
                <div className="space-y-4">
                  {hardwareOptions.map((hw) => (
                    <div key={hw.name} className="bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{hw.icon}</span>
                          <h4 className="font-semibold text-foreground text-sm">{hw.name}</h4>
                        </div>
                        <span className="font-mono text-xs text-primary flex-shrink-0">{hw.cost}</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Pros</p>
                          <ul className="text-xs text-muted-foreground space-y-0.5">
                            {hw.pros.map((p) => <li key={p} className="flex gap-1.5"><span className="text-emerald-500">✓</span>{p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Cons</p>
                          <ul className="text-xs text-muted-foreground space-y-0.5">
                            {hw.cons.map((c) => <li key={c} className="flex gap-1.5"><span className="text-muted-foreground">–</span>{c}</li>)}
                          </ul>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Best for:</span> {hw.best}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Requirements */}
              <section>
                <SectionLabel>Requirements</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Technical Requirements</h3>
                <div className="space-y-2">
                  {requirements.map((r) => (
                    <div key={r.label} className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-4 shadow-card">
                      <div className="w-28 flex-shrink-0">
                        <p className="font-semibold text-foreground text-sm">{r.label}</p>
                        <p className="font-mono text-xs text-primary mt-0.5">{r.value}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Getting Started */}
              <section>
                <SectionLabel>Getting Started</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">How to Get Started</h3>
                <div className="space-y-3">
                  {gettingStartedSteps.map((s, i) => (
                    <div key={s.title} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-accent/30 border border-accent rounded-xl p-5">
                  <p className="font-semibold text-foreground mb-2 text-sm">Come to the meetup</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Node setup is a common topic at our monthly meetup. If you&apos;re stuck on IBD, channel setup, or connecting your wallet, bring your questions — someone there has been through it.
                  </p>
                  <Link href="/event" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium mt-3 transition-colors">
                    See next meetup details →
                  </Link>
                </div>
              </section>

              {/* Resources */}
              <section>
                <SectionLabel>Go Deeper</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Node Resources</h3>
                <div className="space-y-3">
                  {resources.map((r) => (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-200 group"
                    >
                      <div>
                        <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
