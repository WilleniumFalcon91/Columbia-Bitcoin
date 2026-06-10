import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bitcoin 101 | Presentations | Columbia, SC Bitcoin",
  description:
    "A foundational introduction to Bitcoin: what it is, why it matters, its key properties, and how transactions work under the hood.",
  alternates: { canonical: "/presentations/bitcoin-101" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin 101 | Columbia, SC Bitcoin",
    description:
      "A foundational introduction to Bitcoin: what it is, why it matters, its key properties, and how transactions work under the hood.",
  },
  openGraph: {
    title: "Bitcoin 101 | Columbia, SC Bitcoin",
    description: "A foundational introduction to Bitcoin from our monthly meetup.",
    url: "/presentations/bitcoin-101",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin 101 | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin 101 | Columbia, SC Bitcoin" }],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Presentations", item: `${siteUrl}/presentations` },
    { "@type": "ListItem", position: 3, name: "Bitcoin 101", item: `${siteUrl}/presentations/bitcoin-101` },
  ],
};

const properties = [
  {
    icon: "🌐",
    label: "Decentralized",
    description:
      "No single entity controls Bitcoin. The network is maintained by thousands of independent participants worldwide.",
  },
  {
    icon: "🔒",
    label: "Fixed Supply",
    description:
      "Only 21 million bitcoins will ever exist. Scarcity is enforced in the code, not by any government or authority.",
  },
  {
    icon: "🛡️",
    label: "Censorship Resistant",
    description:
      "Transactions cannot be blocked or reversed by governments, banks, or any third party.",
  },
  {
    icon: "👤",
    label: "Pseudonymous",
    description:
      "Transactions are linked to wallet addresses rather than personal identities.",
  },
  {
    icon: "📖",
    label: "Open Source",
    description:
      "Bitcoin is open source software — anyone in the world can read, verify, and contribute to the code.",
  },
  {
    icon: "💪",
    label: "Seizure Resistant",
    description:
      "Due to Bitcoin's digital nature, it is much more difficult to seize than physical assets such as gold, cash, or property.",
  },
];

const reasons = [
  {
    icon: "📈",
    label: '"Number Go Up"',
    description:
      "In an inflationary environment where the government continues printing money out of thin air, scarce assets like Bitcoin are a hedge against the debasement of your local currency.",
  },
  {
    icon: "🕵️",
    label: "Privacy",
    description:
      "Although Bitcoin is a transparent ledger, there are ways to transact privately — especially compared to credit/debit cards in the traditional financial system. Physical cash remains the most private option for small amounts.",
  },
  {
    icon: "🗽",
    label: "Freedom",
    description:
      "Holding bitcoin in your own wallet and controlling the private keys is akin to storing cash under your mattress or keeping gold in a safe. You completely control your funds and do not need permission from a bank to move or send them.",
  },
];

const steps = [
  {
    title: "Transaction Creation",
    description:
      "A user initiates a transaction by signing it with their private key and broadcasting it to the network.",
    link: null,
  },
  {
    title: "Network Verification",
    description:
      "Nodes across the network validate the transaction, checking that the sender has sufficient funds and proper authorization.",
    link: null,
  },
  {
    title: "Mining & Block Addition",
    description:
      "Miners compete to mine new blocks, adding verified transactions to the blockchain.",
    link: { label: "See it live on mempool.space", href: "https://mempool.space" },
  },
  {
    title: "Confirmation",
    description:
      "Once added to a block, the transaction receives confirmations as more blocks are mined on top, making it increasingly secure and irreversible.",
    link: null,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

export default function Bitcoin101Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          {/* Back link */}
          <Link
            href="/presentations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Presentations
          </Link>

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
              Fundamentals
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Bitcoin 101
            </h1>
            <p className="text-muted-foreground">Columbia Bitcoin Monthly Meetup</p>
          </div>

          {/* Content */}
          <div className="space-y-16">

            {/* What is Bitcoin */}
            <section>
              <SectionLabel>Fundamentals</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-5">What is Bitcoin?</h2>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-card mb-6 text-center">
                <p className="text-xl sm:text-2xl font-mono text-primary py-2 leading-snug">
                  &ldquo;A peer-to-peer electronic cash system&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  — Satoshi Nakamoto, Bitcoin Whitepaper (2008)
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bitcoin is money. The network allows value to be transferred directly from person to person without needing to trust a third party such as a bank or financial institution.
              </p>
            </section>

            {/* Properties */}
            <section>
              <SectionLabel>Key Features</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Properties of Bitcoin</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {properties.map((p) => (
                  <div
                    key={p.label}
                    className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl leading-none">{p.icon}</span>
                      <h3 className="font-semibold text-foreground">{p.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Bitcoin */}
            <section>
              <SectionLabel>Why Bitcoin?</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Should I Care?</h2>
              <div className="space-y-4">
                {reasons.map((r) => (
                  <div
                    key={r.label}
                    className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card"
                  >
                    <span className="text-2xl leading-none flex-shrink-0 mt-0.5">{r.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{r.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section>
              <SectionLabel>Technical Deep Dive</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-6">How Bitcoin Works</h2>
              <div className="space-y-3">
                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                      {s.link && (
                        <a
                          href={s.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
                        >
                          {s.link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Wallets */}
            <section>
              <SectionLabel>Self-Custody</SectionLabel>
              <h2 className="text-2xl font-bold text-foreground mb-4">Bitcoin Wallets</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Bitcoin wallet is a digital tool that you use to store and spend your bitcoin. Wallets generate pairs of public and private keys — your public key (like an email address) receives bitcoin, while your private key (like a password) authorizes spending. The actual bitcoins never leave the blockchain; wallets simply prove ownership.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl leading-none">🔥</span>
                    <h3 className="font-semibold text-foreground">Hot Wallets</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Connected to the internet for convenient daily use.
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Examples
                  </p>
                  <p className="text-sm text-foreground">Mobile apps, web wallets, desktop software</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl leading-none">🧊</span>
                    <h3 className="font-semibold text-foreground">Cold Wallets</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Offline storage for maximum security and long-term holdings.
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Examples
                  </p>
                  <p className="text-sm text-foreground">Hardware wallets, paper wallets</p>
                </div>
              </div>
              <div className="bg-accent/30 border border-accent rounded-xl p-5">
                <p className="font-semibold text-foreground mb-1">
                  Not your keys, not your coins.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Keeping bitcoin on an exchange means someone else controls your private keys. Self-custody — holding your own keys in your own wallet — is the Bitcoin-native standard. Come to the meetup and we&apos;ll help you set up your first wallet.
                </p>
              </div>
            </section>

          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/presentations"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Presentations
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-orange text-sm font-semibold"
            >
              Propose a Topic
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
