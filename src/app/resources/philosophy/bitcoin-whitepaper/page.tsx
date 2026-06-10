import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bitcoin Whitepaper — Bitcoin Philosophy",
  description:
    "Satoshi Nakamoto's 9-page paper that solved the double-spend problem and launched Bitcoin. A breakdown of every breakthrough: peer-to-peer cash, proof-of-work, the blockchain, and Nakamoto consensus.",
  alternates: { canonical: "/resources/philosophy/bitcoin-whitepaper" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Whitepaper | Columbia, SC Bitcoin",
    description: "The 9-page paper that changed money forever — a breakdown of every breakthrough discovery in Satoshi's Bitcoin whitepaper.",
  },
  openGraph: {
    title: "Bitcoin Whitepaper | Columbia, SC Bitcoin",
    description:
      "Satoshi Nakamoto's 9-page paper that solved the double-spend problem and launched Bitcoin. A breakdown of every breakthrough: peer-to-peer cash, proof-of-work, the blockchain, and Nakamoto consensus.",
    url: "/resources/philosophy/bitcoin-whitepaper",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Whitepaper | Columbia, SC Bitcoin")}&section=philosophy`, width: 1200, height: 630, alt: "Bitcoin Whitepaper | Columbia, SC Bitcoin" }],
  },
};

const breakthroughs = [
  {
    number: "01",
    title: "Electronic Peer-to-Peer Cash",
    summary: "Value transferred directly between parties — no bank, no PayPal, no trusted intermediary required.",
    detail:
      "Before Bitcoin, sending money online meant trusting a third party to process, hold, and reverse payments. Satoshi's opening line frames the entire project: a purely peer-to-peer version of electronic cash would allow payments to be sent directly without going through a financial institution. This is the mission statement. Everything else in the paper is the engineering that makes it possible.",
  },
  {
    number: "02",
    title: "Solving the Double-Spend Problem",
    summary: "The fundamental unsolved challenge of digital cash: a digital file can be copied and spent twice.",
    detail:
      "Every prior attempt at digital cash — DigiCash, e-gold, b-money — ultimately required a central server to prevent double-spending. Without one, what stops someone from broadcasting the same coin to two recipients simultaneously? Satoshi solved this by replacing the trusted server with a public distributed ledger. All transactions are announced to the network, and nodes vote on their ordering with computational work. Once a transaction is buried deep enough in the chain, reversing it becomes computationally infeasible.",
  },
  {
    number: "03",
    title: "Proof-of-Work",
    summary: "Computational effort as an unforgeable signal of truth — rewriting history requires redoing all subsequent work.",
    detail:
      "Proof-of-work is the engine of Bitcoin's security. To add a block, a miner must find a hash that meets the network's difficulty target — a brute-force search requiring real energy expenditure. This work is immediately verifiable but expensive to produce. To alter a past transaction, an attacker must redo the proof-of-work for that block and every block after it, faster than the honest network keeps adding new blocks. The longer the chain, the more embedded each transaction becomes. Energy isn't wasted — it's the cost of making the ledger tamper-resistant.",
  },
  {
    number: "04",
    title: "The Blockchain",
    summary: "Cryptographically chained blocks: altering any past record invalidates every block that follows it.",
    detail:
      "Each block contains the cryptographic hash of the block before it. This hash is a fingerprint — change any single byte in a block's data and its hash changes entirely, breaking the link to the next block and every block after. The chain of hashes creates a tamper-evident history. The further back a transaction is buried, the more work would be required to rewrite it. Satoshi called this a \"timestamp server\" — each block publicly announces the existence of its transactions and the entire prior chain.",
  },
  {
    number: "05",
    title: "Nakamoto Consensus",
    summary: "Longest-chain rule: honest nodes always accept the chain with the most accumulated proof-of-work.",
    detail:
      "No central coordinator decides which version of the ledger is valid. Instead, all nodes follow a single rule: the chain with the most accumulated proof-of-work is the truth. When two nodes produce valid blocks simultaneously, the network temporarily forks — but whichever branch gets extended first becomes the consensus chain, and honest nodes switch to it. As long as more than half the network's hashpower is controlled by honest participants, the honest chain always grows faster than any attacker's chain. Coordination emerges from incentives, not authority.",
  },
  {
    number: "06",
    title: "Incentive Design",
    summary: "Mining rewards and fees make honest participation economically dominant over attacking the network.",
    detail:
      "Satoshi designed the incentives so that honesty is always the most profitable strategy. A miner who successfully adds a block earns newly created coins plus transaction fees. To attack the network, that same miner would need to acquire more hashpower than all honest miners combined — an investment that would only pay off if the attack succeeded. But a successful attack would destroy confidence in Bitcoin, making the attacker's rewards worthless. As Satoshi wrote: he ought to find it more profitable to play by the rules than to undermine the system.",
  },
  {
    number: "07",
    title: "Pseudonymous Privacy",
    summary: "A new privacy model: public keys replace identities. Anyone can verify transactions without knowing who's behind them.",
    detail:
      "Traditional banking achieves privacy by restricting access — only the parties involved and the bank see a transaction. Bitcoin inverts this. The entire ledger is public, but the parties are identified only by public keys, not names or accounts. The whitepaper describes this as a new privacy model: by keeping public keys anonymous, the flow of information is public but ownership remains concealed. You can verify any transaction in history without knowing whose coins they are.",
  },
];

const resources = [
  {
    label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    author: "Satoshi Nakamoto",
    href: "https://bitcoin.org/bitcoin.pdf",
    description: "The original whitepaper — 9 pages that launched Bitcoin. Required reading. Dense but accessible; understanding even half of it changes how you think about money and trust.",
  },
  {
    label: "Satoshi Nakamoto Institute",
    author: "The Nakamoto Institute",
    href: "https://nakamotoinstitute.org/bitcoin/",
    description: "The annotated whitepaper with Satoshi's original forum posts, emails, and writings. Essential context for understanding the ideas behind the paper and how Satoshi explained them.",
  },
  {
    label: "21 Lessons",
    author: "Gigi (Dergigi)",
    href: "https://21lessons.com/",
    description: "What I've Learned from Falling Down the Bitcoin Rabbit Hole — 21 essays covering the philosophy, economics, and technology that the whitepaper set in motion. A modern complement to the original paper.",
  },
  {
    label: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    href: "https://saifedean.com/thebitcoinstandard/",
    description: "Places the whitepaper in the full context of monetary history. Ammous traces the journey from commodity money to gold to fiat to Bitcoin, showing why Satoshi's invention was inevitable.",
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

export default function BitcoinWhitepaperPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Philosophy", item: `${siteUrl}/resources/philosophy` },
          { "@type": "ListItem", position: 4, name: "Bitcoin Whitepaper", item: `${siteUrl}/resources/philosophy/bitcoin-whitepaper` },
        ],
      },
      {
        "@type": "Article",
        headline: "Bitcoin Whitepaper — Bitcoin Philosophy",
        description: "Satoshi Nakamoto's 9-page paper that solved the double-spend problem and launched Bitcoin. A breakdown of every breakthrough: peer-to-peer cash, proof-of-work, the blockchain, and Nakamoto consensus.",
        url: `${siteUrl}/resources/philosophy/bitcoin-whitepaper`,
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
              The Bitcoin Whitepaper
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              On October 31, 2008, an anonymous programmer named Satoshi Nakamoto published a 9-page paper to a cryptography mailing list. It described a system for electronic cash that required no banks, no governments, and no trust — only math and incentives. Everything in Bitcoin flows from those 9 pages.
            </p>
          </div>

          {/* The Problem It Solved */}
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Digital Cash Had Always Failed</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For decades, cryptographers had tried to build digital cash. DigiCash (1989), e-gold (1996), b-money (1998), Bit Gold (1998) — each attempted to create money that could be sent over the internet without a bank. Each failed for the same reason: they couldn&apos;t solve the <strong className="text-foreground">double-spend problem</strong>.
              </p>
              <p>
                Unlike physical cash, a digital token is just data — and data can be copied. Without a central authority checking that you haven&apos;t already spent your coin, nothing stops you from broadcasting the same payment to ten different recipients simultaneously. Every prior solution required trusting someone to keep the authoritative record. That someone became a target, a single point of failure, and ultimately a chokepoint that governments could shut down.
              </p>
              <p>
                Satoshi&apos;s insight was that you don&apos;t need a trusted record-keeper if you can make the record-keeping itself trustless. Replace the central server with a network of peers, and replace trust with proof-of-work.
              </p>
            </div>
          </div>

          {/* Satoshi Quote */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <p className="text-base font-medium text-foreground leading-relaxed">
              &quot;A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.&quot;
            </p>
            <p className="text-xs text-muted-foreground mt-3">— Satoshi Nakamoto, Bitcoin Whitepaper Abstract (2008)</p>
          </div>

          {/* Breakthrough Discoveries */}
          <div>
            <SectionLabel>Breakthrough Discoveries</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">What Made the Whitepaper Revolutionary</h2>
            <div className="space-y-4">
              {breakthroughs.map((item) => (
                <div key={item.number} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xs font-bold text-primary tabular-nums">{item.number}</span>
                    <span className="font-bold text-foreground">{item.title}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground/70 mb-3 leading-snug">{item.summary}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 9 Pages That Changed Everything */}
          <div>
            <SectionLabel>The Document</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">9 Pages That Changed Everything</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What is remarkable about the whitepaper is not just what it solved, but how efficiently it solved it. The entire paper — including abstract, diagrams, and references — fits in 9 pages. It uses no academic jargon beyond what&apos;s necessary. It presents a complete, working design: the problem statement, the proposed solution, the security analysis, and the incentive model, all in sequence.
              </p>
              <p>
                Satoshi published the paper, ran the software for roughly two years, then disappeared. No patents, no company, no attempt to control or profit from the invention. Bitcoin was released as open-source software and left to stand on its own merits. Fifteen years later, the network runs as described — not because Satoshi is watching over it, but because the design doesn&apos;t require anyone to.
              </p>
              <p>
                Reading the whitepaper is the fastest way to understand what Bitcoin actually is, as opposed to what people say it is. It takes under an hour. It will change how you think about money, trust, and institutions.
              </p>
            </div>
          </div>

          {/* Read the Whitepaper */}
          <div>
            <SectionLabel>Read the Whitepaper</SectionLabel>
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

      <RelatedPages current="/resources/philosophy/bitcoin-whitepaper" />
      <Footer />
    </main>
  );
}
