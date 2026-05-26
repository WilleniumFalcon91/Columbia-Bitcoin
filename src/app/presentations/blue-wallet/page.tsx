import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BlueWallet Guide | Presentations | Columbia, SC Bitcoin",
  description:
    "A beginner-friendly guide to BlueWallet for iPhone and Android — creating your first wallet, securing your seed phrase, sending and receiving bitcoin.",
  alternates: { canonical: "/presentations/blue-wallet" },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const sendSteps = [
  { title: "Click Send", description: "Navigate to the send function in your wallet." },
  { title: "Enter Address", description: "Paste the recipient's Bitcoin address or scan their QR code." },
  { title: "Enter Amount", description: "Specify how much bitcoin to send." },
  { title: "Select Fee", description: "Choose your transaction fee level (higher = faster confirmation)." },
  { title: "Confirm & Send", description: 'Click "Next" then "Send now" to broadcast the transaction.' },
];

const securityPractices = [
  {
    icon: "📝",
    label: "Backup Your Seed",
    description:
      "Always write down and securely store your 12-word seed phrase. Consider a metal backup for fire and water resistance.",
  },
  {
    icon: "🔍",
    label: "Verify Addresses",
    description:
      "Double-check receiving and sending addresses before confirming transactions. Always verify the first and last few characters.",
  },
  {
    icon: "🐣",
    label: "Start Small",
    description:
      "Test with small amounts first to familiarize yourself with the wallet before moving larger amounts.",
  },
  {
    icon: "🤫",
    label: "Keep Private",
    description:
      "Never share your seed words or private keys with anyone, ever — including support staff, friends, or websites.",
  },
];

const advancedFeatures = [
  {
    label: "Custom Node Connection",
    description: "Connect to your own Bitcoin node or Electrum server for enhanced privacy.",
  },
  {
    label: "Coin Control",
    description: "Manage individual UTXOs for advanced transaction control and privacy.",
  },
  {
    label: "Multi-sig Vault",
    description: "Require multiple signatures to authorize transactions for maximum security.",
  },
  {
    label: "Watch-Only Wallets",
    description: "Monitor addresses without spending capability — useful for secure tracking.",
  },
  {
    label: "PSBT Support",
    description: "Partially Signed Bitcoin Transactions for collaborative signing workflows.",
  },
  {
    label: "BIP47 Paynym",
    description: "Reusable payment codes for enhanced privacy without address reuse.",
  },
];

export default function BlueWalletPage() {
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
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 mb-4">
              Wallets
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              BlueWallet
            </h1>
            <p className="text-muted-foreground">
              Radically simple and powerful Bitcoin wallet for beginners. Available on iPhone and Android.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://apps.apple.com/app/bluewallet-bitcoin-wallet/id1376878040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Download iOS <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Download Android <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="space-y-16">

            {/* Create Wallet */}
            <section>
              <SectionLabel>Getting Started</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 1 — Create Your Wallet</h2>
              <div className="space-y-3">
                {[
                  { n: "01", title: "Add Wallet", desc: 'Tap "Add now" on the home screen to begin creating your first Bitcoin wallet.' },
                  { n: "02", title: "Select Bitcoin", desc: 'Choose "Bitcoin" for a simple and powerful self-custody wallet.' },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Backup Seed */}
            <section>
              <SectionLabel>Critical Step</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-4">Step 2 — Backup Your Seed Words</h2>
              <div className="bg-accent/30 border border-accent rounded-xl p-5 mb-5">
                <p className="text-foreground font-semibold mb-1">These 12 words ARE your wallet.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Anyone who has access to your 12-word seed phrase has access to all your funds — permanently. Store them offline, physically, and privately.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "✏️", tip: "Write words on paper as a temporary backup — immediately." },
                  { icon: "⚒️", tip: "Consider stamping in steel for fire and water resistance for long-term storage." },
                  { icon: "🚫", tip: "Never store your seed phrase digitally — no photos, no notes apps, no cloud." },
                  { icon: "🌡️", tip: "Mobile wallets are hot wallets — don't keep large amounts here." },
                ].map((item) => (
                  <div key={item.tip} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card text-sm text-muted-foreground">
                    <span className="text-base leading-none flex-shrink-0">{item.icon}</span>
                    {item.tip}
                  </div>
                ))}
              </div>
            </section>

            {/* Send */}
            <section>
              <SectionLabel>Transactions</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 3 — Send Bitcoin</h2>
              <div className="space-y-3">
                {sendSteps.map((s, i) => (
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

            {/* Receive */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Step 4 — Receive Bitcoin</h2>
              <div className="space-y-3">
                {[
                  { n: "01", title: 'Tap "Receive"', desc: "Open your wallet and tap the Receive button to generate your address." },
                  { n: "02", title: "Share Your Address", desc: "Copy the address and send it to whoever is paying you, or have them scan your QR code directly." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Security Best Practices */}
            <section>
              <SectionLabel>Security</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Security Best Practices</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {securityPractices.map((p) => (
                  <div key={p.label} className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl leading-none">{p.icon}</span>
                      <h3 className="font-semibold text-foreground text-sm">{p.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Advanced Features */}
            <section>
              <SectionLabel>Power User</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">Advanced Features</h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Once you&apos;re comfortable with the basics, BlueWallet has powerful features for more advanced self-custody.
              </p>
              <div className="space-y-2">
                {advancedFeatures.map((f) => (
                  <div key={f.label} className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-4 shadow-card">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    <div>
                      <span className="font-semibold text-foreground text-sm">{f.label}</span>
                      <span className="text-muted-foreground text-sm"> — {f.description}</span>
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
