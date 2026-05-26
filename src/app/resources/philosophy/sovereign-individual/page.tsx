import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "The Sovereign Individual — Bitcoin Philosophy",
  description:
    "Davidson & Rees-Mogg's 1997 prophecy about digital cash and individual sovereignty — and how Bitcoin fulfills it. With Knut Svanholm on sovereignty through mathematics.",
  alternates: { canonical: "/resources/philosophy/sovereign-individual" },
  twitter: {
    card: "summary_large_image",
    title: "The Sovereign Individual | Columbia, SC Bitcoin",
    description: "The 1997 book that predicted Bitcoin — and why Knut Svanholm argues sovereignty is now enforced by mathematics.",
  },
  openGraph: {
    title: "The Sovereign Individual | Columbia, SC Bitcoin",
    description:
      "Davidson & Rees-Mogg's 1997 prophecy about digital cash and individual sovereignty — and how Bitcoin fulfills it.",
    url: "/resources/philosophy/sovereign-individual",
    images: [{ url: `/api/og?title=${encodeURIComponent("The Sovereign Individual | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "The Sovereign Individual | Columbia, SC Bitcoin" }],
  },
};

const bookPredictions = [
  {
    prediction: "Digital cash will emerge that allows individuals to transact privately across borders without government intermediation.",
    outcome: "Fulfilled. Bitcoin launched in 2009 — 11 years after the book. It enables value transfer across any border, instantly, without banks or governments.",
  },
  {
    prediction: "Governments will lose their ability to tax highly mobile, high-skill individuals at punishing rates.",
    outcome: "Underway. Digital nomads, Bitcoin-denominated businesses, and jurisdictional arbitrage are growing. Self-custodied Bitcoin cannot be taxed before it is spent.",
  },
  {
    prediction: "The nation-state's monopoly on violence is only useful for controlling physical assets. Intangible wealth will escape.",
    outcome: "Fulfilled in principle. A properly held Bitcoin seed phrase is pure information — immune to physical confiscation, transportable in a human mind, crossing any border.",
  },
  {
    prediction: "Protection will become a market good rather than a state monopoly. Individuals will pay directly for security rather than through coercive taxation.",
    outcome: "Nascent. Decentralized security services, multi-signature custody, and cryptographic self-enforcement are early examples.",
  },
];

const svanholmWorks = [
  {
    title: "Bitcoin: Sovereignty through Mathematics",
    year: "2019",
    description: "Svanholm's first book. A short, poetic argument that Bitcoin's mathematical guarantees are more reliable than any human institution. The 21 million cap is not a policy — it is a fact of the universe, like pi.",
    href: "https://www.amazon.com/Bitcoin-Sovereignty-mathematics-Knut-Svanholm/dp/1090109911",
  },
  {
    title: "Bitcoin: Everything Divided by 21 Million",
    year: "2020",
    description: "Every unit of economic value on Earth, denominated in a fixed pool of 21 million bitcoin. Svanholm argues that Bitcoin is not priced in dollars — dollars are priced in Bitcoin. A shift in perspective that reframes scarcity itself.",
    href: "https://www.amazon.com/Bitcoin-Everything-Divided-Knut-Svanholm/dp/B08TB8GR69",
  },
  {
    title: "Independent Libre",
    year: "2021",
    description: "Svanholm's most philosophical work — exploring what true independence looks like in the information age, and why Bitcoin is the monetary foundation of freedom.",
    href: "https://www.amazon.com/Independent-Libre-Knut-Svanholm/dp/B09B97HRHM",
  },
];

const resources = [
  {
    label: "The Sovereign Individual",
    author: "James Dale Davidson & William Rees-Mogg (1997)",
    href: "https://www.amazon.com/Sovereign-Individual-Mastering-Transition-Information/dp/0684832720",
    description: "The book itself. Read it slowly — it is dense with predictions, many of which have already come true. The chapters on digital cash and the decline of the nation-state are essential.",
  },
  {
    label: "Bitcoin: Sovereignty through Mathematics",
    author: "Knut Svanholm (2019)",
    href: "https://www.amazon.com/Bitcoin-Sovereignty-mathematics-Knut-Svanholm/dp/1090109911",
    description: "A short, accessible companion to the Sovereign Individual thesis — how Bitcoin makes sovereignty mathematical rather than political.",
  },
  {
    label: "Bitcoin: Everything Divided by 21 Million",
    author: "Knut Svanholm (2020)",
    href: "https://www.amazon.com/Bitcoin-Everything-Divided-Knut-Svanholm/dp/B08TB8GR69",
    description: "Reframes your understanding of scarcity and value — why 21 million is not an arbitrary number but the denominator of all economic value.",
  },
  {
    label: "The Price of Tomorrow",
    author: "Jeff Booth (2020)",
    href: "https://www.jeffbooth.ca/book",
    description: "The economic conditions that make the sovereign individual thesis inevitable — why technology-driven deflation and fiat inflation cannot coexist indefinitely.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

export default function SovereignIndividualPage() {
  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <Link
            href="/resources/philosophy"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            All Philosophy Topics
          </Link>

          {/* Hero */}
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Sovereign Individual
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              In 1997 — eleven years before Bitcoin — two political theorists predicted a world where digital cash would make individual economic sovereignty possible. They were right. Bitcoin is the fulfillment of their prophecy.
            </p>
          </div>

          {/* The Book */}
          <div>
            <SectionLabel>The 1997 Prophecy</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Davidson & Rees-Mogg&apos;s Vision</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                James Dale Davidson and William Rees-Mogg published <em>The Sovereign Individual</em> in 1997. Their argument: the transition from the Industrial Age to the Information Age would undermine the nation-state&apos;s monopoly on violence — because for the first time, the most valuable economic activity (intellectual work) would be untethered from physical geography.
              </p>
              <p>
                The nation-state&apos;s power to tax and coerce depended on its ability to control territory where wealth was created. Factories don&apos;t move. Farms don&apos;t move. Mines don&apos;t move. But code moves. Ideas move. And — Davidson and Rees-Mogg predicted — digital money would move.
              </p>
              <p>
                They predicted that &quot;crypto money&quot; would emerge — a form of currency based on cryptographic proof, beyond the reach of governments, enabling sovereign individuals to transact privately across borders. This was written before Napster, before widespread internet adoption, before anyone named Satoshi had proposed anything.
              </p>
            </div>
          </div>

          {/* What It Got Right */}
          <div>
            <SectionLabel>The Score</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">What the Book Got Right</h2>
            <div className="space-y-4">
              {bookPredictions.map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="text-sm font-semibold text-foreground mb-2">Prediction:</p>
                  <p className="text-sm text-muted-foreground italic mb-3 leading-relaxed">&quot;{item.prediction}&quot;</p>
                  <p className="text-sm font-semibold text-primary mb-1">Outcome:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Knut Svanholm */}
          <div>
            <SectionLabel>Knut Svanholm</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Sovereignty Through Mathematics</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Knut Svanholm is a Swedish author who has written more clearly about Bitcoin&apos;s philosophical implications than almost anyone. His central insight: sovereignty, historically, depended on political power or physical force. Bitcoin offers a third option — sovereignty enforced by mathematics.
              </p>
              <p>
                The 21 million cap is not a corporate policy that a board can vote to change. It is not a law that a legislature can repeal. It is a mathematical property of the system, enforced by every node on the network. When you hold your own keys, your property rights are backed not by a court, not by a government, not by a bank — but by cryptographic proof that is as reliable as gravity.
              </p>
            </div>
            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-sm font-medium text-foreground leading-relaxed">
                &quot;Bitcoin is the most perfect savings technology ever devised by man. It cannot be inflated. It cannot be confiscated. It cannot be censored. It is the first form of money in human history that is truly sovereign.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Knut Svanholm</p>
            </div>
            <div className="mt-6 grid gap-4">
              {svanholmWorks.map((w) => (
                <a
                  key={w.title}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{w.title}</p>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-xs text-primary mb-2">{w.year}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Go Deeper */}
          <div>
            <SectionLabel>Go Deeper</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">Essential Reading</h2>
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

      <RelatedPages current="/resources/philosophy/sovereign-individual" />
      <Footer />
    </main>
  );
}
