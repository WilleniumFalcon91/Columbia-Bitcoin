import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Circular Economy — Bitcoin Philosophy",
  description:
    "How to close the fiat loop — earning, spending, and saving in Bitcoin to build a self-sustaining Bitcoin-native economy.",
  alternates: { canonical: "/resources/philosophy/circular-economy" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Circular Economy | Columbia, SC Bitcoin",
    description: "How to close the fiat loop and build a Bitcoin-native economy — earn, spend, and save without converting.",
  },
  openGraph: {
    title: "Bitcoin Circular Economy | Columbia, SC Bitcoin",
    description:
      "How to close the fiat loop — earning, spending, and saving in Bitcoin to build a self-sustaining Bitcoin-native economy.",
    url: "/resources/philosophy/circular-economy",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Circular Economy | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Circular Economy | Columbia, SC Bitcoin" }],
  },
};

const fiatLeakPoints = [
  {
    scenario: "Buy Bitcoin, sell to pay bills",
    problem: "Every sale is a taxable event. You re-enter the fiat system you were trying to opt out of — and you pay a cut to the state each time.",
  },
  {
    scenario: "Earn salary in dollars, buy Bitcoin",
    problem: "You work inside the fiat system, earning a currency that loses purchasing power over time. Bitcoin fixes the savings side but not the income side.",
  },
  {
    scenario: "Bitcoin savings, fiat spending",
    problem: "You're constantly selling assets to fund expenses — forcing you to time the market and realize gains at inopportune moments.",
  },
];

const circularSteps = [
  {
    step: "01",
    label: "Earn in Bitcoin",
    description: "Accept payment for your labor or goods directly in Bitcoin. Whether you're a freelancer, business owner, or employee, earning in BTC eliminates the conversion step — and the tax event that comes with it in many jurisdictions.",
  },
  {
    step: "02",
    label: "Spend in Bitcoin",
    description: "Pay merchants who accept Bitcoin directly. Use the Lightning Network for everyday purchases — coffee, services, software. Every spend that stays in Bitcoin keeps value circulating within the ecosystem.",
  },
  {
    step: "03",
    label: "Save in Bitcoin",
    description: "Rather than converting surplus BTC back to dollars, hold it. Your savings account is Bitcoin. Over time, you minimize the fiat touchpoints in your life — and the trust you need to extend to banks and governments.",
  },
  {
    step: "04",
    label: "Reinvest in Bitcoin Businesses",
    description: "When you spend at Bitcoin-accepting merchants, you fund businesses that also operate in the circular economy. This grows the ecosystem — more merchants means more places to spend, which means the loop stays closed.",
  },
];

const realWorldExamples = [
  {
    name: "Bitcoin Ekasi",
    location: "Mossel Bay, South Africa",
    description: "A township community in South Africa where residents earn, spend, and save in Bitcoin. Local businesses accept Lightning payments. Children receive orange and lemon trees — planted for long-term abundance — in exchange for educational Bitcoin engagement.",
    href: "https://bitcoinekasi.com",
  },
  {
    name: "El Zonte, El Salvador",
    location: "El Salvador",
    description: "Known as \"Bitcoin Beach,\" this coastal community became the proof of concept for Bitcoin as everyday money before El Salvador adopted Bitcoin as legal tender. Merchants, surf shops, and restaurants all transact via Lightning.",
    href: "https://www.bitcoinbeach.com",
  },
  {
    name: "Bitcoin Jungle",
    location: "Costa Rica",
    description: "A growing circular economy in Costa Rica's Southern Zone. Over 100 businesses accept Bitcoin on Lightning. Monthly meetups, merchant onboarding support, and a community that transacts daily in BTC.",
    href: "https://bitcoinjungle.app",
  },
];

const resources = [
  {
    label: "Bitcoin: A Novel Economic Institution",
    author: "Lyn Alden",
    href: "https://www.lynalden.com/bitcoin/",
    description: "Lyn Alden's comprehensive analysis of Bitcoin's role as a monetary network — why circular economies emerge and how they create durable value.",
  },
  {
    label: "The Humanitarian Case for Bitcoin",
    author: "Alex Gladstein",
    href: "https://bitcoinmagazine.com/culture/bitcoin-is-a-trojan-horse-for-freedom",
    description: "Real-world examples of circular Bitcoin economies emerging in the Global South — where fiat banking is unreliable and Bitcoin fills the gap.",
  },
  {
    label: "Bitcoin Ekasi",
    author: "Hermann Vivier",
    href: "https://bitcoinekasi.com",
    description: "The story of a township circular economy built on Bitcoin and Lightning — the most compelling real-world proof of the concept.",
  },
  {
    label: "Strike Blog — Circular Economy",
    author: "Jack Mallers",
    href: "https://strike.me/blog/",
    description: "How Strike is building the infrastructure for the global Bitcoin circular economy, enabling direct payroll, payments, and remittances without fiat conversion.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

export default function CircularEconomyPage() {
  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Hero */}
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Circular Economy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Buying Bitcoin is step one. The deeper goal is to build an economy that runs on Bitcoin — where you earn, spend, and save without touching fiat. The circular economy closes the loop.
            </p>
          </div>

          {/* The Fiat Leak */}
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">The Fiat Leak</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most people think of Bitcoin as an investment: buy low, hold, sell high. But this model keeps you permanently tethered to the fiat system. Every conversion is a taxable event, a re-entry into the system you&apos;re trying to exit, and a signal that Bitcoin is a speculative asset rather than a monetary network.
              </p>
              <p>
                The &quot;fiat leak&quot; is every point where value exits the Bitcoin ecosystem and flows back into fiat. The goal of the circular economy is to minimize those leaks — until your economic life runs primarily on Bitcoin rails.
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              {fiatLeakPoints.map((item) => (
                <div key={item.scenario} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="font-semibold text-foreground mb-1">{item.scenario}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing the Loop */}
          <div>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">Closing the Loop</h2>
            <div className="space-y-4">
              {circularSteps.map((item) => (
                <div key={item.step} className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lightning */}
          <div>
            <SectionLabel>Infrastructure</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Lightning Enables This</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                On-chain Bitcoin transactions are too slow and expensive for daily commerce. The Lightning Network changes this — it enables near-instant, near-zero-fee payments that are final and Bitcoin-denominated. Paying for coffee with Lightning is as fast as tapping a card.
              </p>
              <p>
                Lightning also enables micropayments that fiat systems make impractical: tipping a content creator 100 sats ($0.06), streaming payments per second to a podcast, paying per API call. These use cases have no fiat equivalent — they only exist because Bitcoin can be transmitted instantly for fractions of a cent.
              </p>
            </div>
          </div>

          {/* Real World Examples */}
          <div>
            <SectionLabel>Real World</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">Circular Economies in Action</h2>
            <div className="grid gap-4">
              {realWorldExamples.map((ex) => (
                <a
                  key={ex.name}
                  href={ex.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{ex.name}</p>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-xs text-primary mb-2">{ex.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ex.description}</p>
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

      <RelatedPages current="/resources/philosophy/circular-economy" />
      <Footer />
    </main>
  );
}
