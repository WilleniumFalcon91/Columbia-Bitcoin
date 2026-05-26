import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sparrow Wallet | Presentations | Columbia, SC Bitcoin",
  description:
    "A deep dive into Sparrow Wallet — hardware wallet setup, node connection, UTXO coin control, watch-only wallets, and advanced Bitcoin self-custody features.",
  alternates: { canonical: "/presentations/sparrow-wallet" },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const coreFeatures = [
  {
    icon: "🔥",
    label: "Hot Wallet Creation",
    description: "Create new software wallets directly in Sparrow for everyday transactions.",
  },
  {
    icon: "🔒",
    label: "Private Server Connection",
    description: "Connect to your own Electrum server or Bitcoin Core node for maximum privacy.",
  },
  {
    icon: "🪙",
    label: "UTXO Management",
    description: "Full control over individual UTXOs for optimal fee management and privacy.",
  },
  {
    icon: "🔑",
    label: "Hardware Integration",
    description: "Connect hardware wallets via QR codes or USB for enhanced security.",
  },
  {
    icon: "👁️",
    label: "Watch-Only Wallets",
    description: "Monitor wallet activity without exposing private keys to online threats.",
  },
  {
    icon: "📤",
    label: "Transaction Control",
    description: "Sign and broadcast transactions with customizable fees and detailed controls.",
  },
];

const hwSetupSteps = [
  {
    title: "Import Wallet",
    description: 'Click "Import Wallet" to begin the hardware wallet connection process.',
  },
  {
    title: "Choose Connection Method",
    description: "Select QR-based air-gapped option or USB connection for your device type.",
  },
  {
    title: "Scan for Devices",
    description: 'Use "Scan QR" for air-gapped wallets or "Scan for Connected Devices" for USB.',
  },
  {
    title: "Complete Setup",
    description: "Select your hardware wallet and enter your seed on the device to establish the connection.",
  },
];

const advancedFeatures = [
  {
    icon: "💬",
    label: "BIP47 Paynms",
    description:
      "Reusable payment codes with a static QR that generates a fresh address each time, eliminating address reuse. Requires an initial on-chain notification transaction.",
  },
  {
    icon: "✍️",
    label: "Sign / Verify Messages",
    description:
      "Cryptographically prove ownership of your keys by signing messages that others can verify — useful for proving wallet ownership.",
  },
  {
    icon: "📋",
    label: "Send to Many",
    description:
      "Efficiently send Bitcoin to multiple addresses in a single transaction, saving on fees.",
  },
  {
    icon: "🧹",
    label: "Sweep Private Key",
    description:
      "Consolidate all UTXOs from a private key in one transaction to a new wallet address.",
  },
];

const navItems = [
  { label: "Transactions", desc: "View complete history and mempool status" },
  { label: "Send", desc: "Pay with QR scan, labels, and fee control" },
  { label: "Receive", desc: "Generate addresses with QR codes" },
  { label: "Addresses", desc: "View all addresses and balances" },
  { label: "UTXOs", desc: "Manage individual unspent outputs" },
];

export default function SparrowWalletPage() {
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
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 mb-4">
              Wallets
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Sparrow Wallet
            </h1>
            <p className="text-muted-foreground">
              A feature-rich Bitcoin wallet offering granular control and an interface that teaches you how Bitcoin works.
            </p>
          </div>

          <div className="space-y-16">

            {/* Why Sparrow */}
            <section>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Sparrow?</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "🛠️", label: "Feature Rich", desc: "Comprehensive toolkit for managing Bitcoin transactions with precision and control." },
                  { icon: "📚", label: "Educational", desc: "Learn Bitcoin fundamentals through hands-on experience with an intuitive design." },
                  { icon: "🎛️", label: "Granular Control", desc: "Manage individual UTXOs and customize every aspect of your transactions." },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-xl p-5 shadow-card text-center">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">{item.label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://sparrowwallet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Download from sparrowwallet.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>

            {/* Core Features */}
            <section>
              <SectionLabel>Features</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Core Features</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {coreFeatures.map((f) => (
                  <div key={f.label} className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl leading-none">{f.icon}</span>
                      <h3 className="font-semibold text-foreground text-sm">{f.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hardware Wallet Setup */}
            <section>
              <SectionLabel>Setup Guide</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Connecting Your Hardware Wallet</h2>
              <div className="space-y-3">
                {hwSetupSteps.map((s, i) => (
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

            {/* Node Connection */}
            <section>
              <SectionLabel>Privacy</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-4">Connect to Your Own Node</h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Navigate to <span className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded text-xs">File → Settings → Server</span> to configure your connection.
              </p>
              <div className="space-y-3">
                {[
                  "Connect to a public server, private Electrum, or Bitcoin Core",
                  "Node packages like Start9 or Umbrel include built-in Electrum servers",
                  "Copy/paste the .onion address and port from your node dashboard",
                  "Add username and password if required by your setup",
                ].map((step) => (
                  <div key={step} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card text-sm text-muted-foreground">
                    <span className="text-primary flex-shrink-0 mt-0.5">→</span>
                    {step}
                  </div>
                ))}
              </div>
            </section>

            {/* Watch-Only Wallets */}
            <section>
              <SectionLabel>Security</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Watch-Only Wallets</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: "What It Is", desc: "A wallet with your extended public key (xpub) but without private keys." },
                  { label: "What You Can Do", desc: "View all incoming/outgoing transactions and wallet balance without signing capability." },
                  { label: "Security Benefit", desc: "Monitor wallet activity while keeping your keys completely offline and secure." },
                ].map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                    <h3 className="font-semibold text-foreground text-sm mb-2">{item.label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-accent/30 border border-accent rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Setup:</span>{" "}
                  New wallet → Choose name → xpub/watch-only wallet → Copy/paste xpub or scan QR
                </p>
              </div>
            </section>

            {/* Main Screen Navigation */}
            <section>
              <SectionLabel>Interface</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Main Screen Navigation</h2>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-3.5 shadow-card">
                    <span className="font-semibold text-foreground text-sm w-28 flex-shrink-0">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* UTXO / Coin Control */}
            <section>
              <SectionLabel>Privacy & Fees</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-4">UTXO Management & Coin Control</h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                The UTXOs tab displays each unspent transaction output and its balance. Coin control prevents linking transactions on-chain, protecting your privacy and optimizing future fees.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Select specific UTXOs for each transaction",
                  "Prevent address clustering and chain analysis",
                  "Maintain usable UTXO sizes for lower fees",
                  "Strategically consolidate UTXOs when fees are low",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card text-sm text-muted-foreground">
                    <span className="text-primary flex-shrink-0">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </section>

            {/* Advanced Features */}
            <section>
              <SectionLabel>Advanced</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Advanced Features Worth Knowing</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {advancedFeatures.map((f) => (
                  <div key={f.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl leading-none">{f.icon}</span>
                      <h3 className="font-semibold text-foreground text-sm">{f.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Security Notes */}
            <section>
              <SectionLabel>Important</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">Security Notes</h2>
              <div className="space-y-3">
                {[
                  { n: "1", title: "Desktop Only", desc: "Sparrow is exclusively a desktop application — there is no mobile version." },
                  { n: "2", title: "Official Source Only", desc: "Download only from sparrowwallet.com to avoid malicious fake versions." },
                  { n: "3", title: "Beware of Scams", desc: "Many fake wallets exist on mobile app stores. Never download Sparrow from an app store." },
                  { n: "4", title: "Verify Downloads", desc: "Always verify your download using the built-in verification tool. Developer: Craig Raw." },
                ].map((note) => (
                  <div key={note.n} className="flex gap-4 items-start bg-accent/30 border border-accent rounded-xl p-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                      {note.n}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">{note.title}</p>
                      <p className="text-sm text-muted-foreground">{note.desc}</p>
                    </div>
                  </div>
                ))}
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
