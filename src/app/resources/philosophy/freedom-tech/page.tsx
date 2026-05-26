import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Freedom Tech — Bitcoin Philosophy",
  description:
    "From the Cypherpunk Manifesto to Bitcoin — the philosophical case for censorship-resistant money and why privacy is a human right, not a privilege.",
  alternates: { canonical: "/resources/philosophy/freedom-tech" },
  twitter: {
    card: "summary_large_image",
    title: "Freedom Tech | Columbia, SC Bitcoin",
    description: "The cypherpunk roots of Bitcoin — privacy as a right, censorship resistance, and technology as liberation.",
  },
  openGraph: {
    title: "Freedom Tech | Columbia, SC Bitcoin",
    description:
      "From the Cypherpunk Manifesto to Bitcoin — the philosophical case for censorship-resistant money and why privacy is a human right, not a privilege.",
    url: "/resources/philosophy/freedom-tech",
    images: [{ url: `/api/og?title=${encodeURIComponent("Freedom Tech | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Freedom Tech | Columbia, SC Bitcoin" }],
  },
};

const lineage = [
  {
    year: "1991",
    name: "PGP (Pretty Good Privacy)",
    creator: "Phil Zimmermann",
    description: "The first widely available strong encryption for ordinary people. Zimmermann was investigated by the US government for publishing it. PGP proved that math could protect privacy against the state.",
  },
  {
    year: "1992",
    name: "The Cypherpunk Mailing List",
    creator: "Eric Hughes, Timothy May, John Gilmore",
    description: "Founded by cryptographers and activists who believed cryptography was a tool for social change. At its peak, 700+ developers, journalists, and academics participated. Satoshi Nakamoto announced Bitcoin here in 2008.",
  },
  {
    year: "1993",
    name: "A Cypherpunk's Manifesto",
    creator: "Eric Hughes",
    description: "The founding document of the movement. \"Privacy is necessary for an open society in the electronic age... We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence. We must defend our own privacy.\"",
  },
  {
    year: "2002",
    name: "Tor (The Onion Router)",
    creator: "Roger Dingledine, Nick Mathewson",
    description: "Anonymizing network that routes traffic through multiple encrypted relays. Made anonymous internet access practical. A direct application of cypherpunk principles to communications.",
  },
  {
    year: "2008",
    name: "Bitcoin",
    creator: "Satoshi Nakamoto",
    description: "The cypherpunk holy grail — a peer-to-peer electronic cash system requiring no trusted third party. Announced on the cypherpunk mailing list. Bitcoin is the first successful implementation of censorship-resistant digital money.",
  },
];

const freedomProperties = [
  {
    label: "Permissionless",
    description: "Anyone with a wallet can send and receive Bitcoin. No bank account, no ID, no credit check. A refugee, a protestor, a journalist — anyone can transact without asking permission.",
  },
  {
    label: "Censorship-Resistant",
    description: "No single entity can block a valid Bitcoin transaction. No government can freeze an address. No platform can deplatform a Bitcoin wallet. The protocol treats all valid transactions equally.",
  },
  {
    label: "Borderless",
    description: "Bitcoin follows the same rules in every country. No capital controls, no currency exchange, no correspondent banking required. A payment from Columbia to Lagos settles in minutes for the same fee as a payment across the street.",
  },
  {
    label: "Seizure-Resistant",
    description: "Bitcoin held in self-custody — your keys, on your hardware — cannot be confiscated without your cooperation. A government can demand you hand over cash or gold; they cannot compel you to reveal a seed phrase encoded only in your memory.",
  },
];

const resources = [
  {
    label: "A Cypherpunk's Manifesto",
    author: "Eric Hughes (1993)",
    href: "https://www.activism.net/cypherpunk/manifesto.html",
    description: "The founding document. Read in full — it is short, prescient, and written before the internet was mainstream. Every sentence applies to Bitcoin.",
  },
  {
    label: "Bitcoin is the Most Important Freedom Technology",
    author: "Erik Cason",
    href: "https://bitcoinmagazine.com/culture/bitcoin-is-the-most-important-freedom-technology",
    description: "Cason argues Bitcoin is more than money — it separates economic power from state power as fundamentally as the separation of church and state.",
  },
  {
    label: "Why Privacy Matters",
    author: "Glenn Greenwald",
    href: "https://www.ted.com/talks/glenn_greenwald_why_privacy_matters",
    description: "A TED talk on why \"I have nothing to hide\" is a dangerously wrong argument. Privacy is about power, not secrecy.",
  },
  {
    label: "The Humanitarian Case for Bitcoin",
    author: "Alex Gladstein",
    href: "https://bitcoinmagazine.com/culture/bitcoin-is-a-trojan-horse-for-freedom",
    description: "Chief Strategy Officer of the Human Rights Foundation on why Bitcoin is indispensable for those living under authoritarian financial systems.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

export default function FreedomTechPage() {
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
              Freedom Tech
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Bitcoin did not appear from nowhere. It emerged from a decades-long project to build tools that protect individual freedom against institutional power. Understanding that lineage explains why Bitcoin works the way it does.
            </p>
          </div>

          {/* The Cypherpunk Vision */}
          <div>
            <SectionLabel>The Manifesto</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Is a Right, Not a Privilege</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In 1993, mathematician Eric Hughes published &quot;A Cypherpunk&apos;s Manifesto.&quot; Its opening line: <em>&quot;Privacy is necessary for an open society in the electronic age.&quot;</em>
              </p>
              <p>
                The cypherpunks believed that privacy could only be defended technically — not by asking governments for protection, but by deploying cryptography that makes surveillance computationally impossible. Their insight: in the information age, whoever controls the tools of encryption controls power.
              </p>
              <p>
                They were right. And Bitcoin is their most successful creation.
              </p>
            </div>
            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-sm font-medium text-foreground leading-relaxed">
                &quot;We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence. We must defend our own privacy if we expect to have any. We must come together and create systems which allow anonymous transactions to take place.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Eric Hughes, A Cypherpunk&apos;s Manifesto (1993)</p>
            </div>
          </div>

          {/* Lineage */}
          <div>
            <SectionLabel>Lineage</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">From PGP to Bitcoin</h2>
            <div className="space-y-3">
              {lineage.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < lineage.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-foreground">{item.name}</span>
                      <span className="text-xs text-primary font-semibold">{item.year}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{item.creator}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bitcoin as Freedom Tech */}
          <div>
            <SectionLabel>Bitcoin&apos;s Properties</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Bitcoin Is Freedom Technology</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {freedomProperties.map((p) => (
                <div key={p.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="font-semibold text-foreground mb-2">{p.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Erik Cason */}
          <div>
            <SectionLabel>Erik Cason</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Separating Money from State</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Erik Cason is among the most philosophically rigorous voices in Bitcoin. His central argument: Bitcoin is doing to money what the Reformation did to religion — removing the state&apos;s monopoly on a domain it was never qualified to control.
              </p>
              <p>
                The separation of church and state was one of the great liberating achievements of Western civilization. It ended the ability of a single institution to enforce spiritual obedience backed by economic violence. Cason argues Bitcoin initiates an equivalent transition — the separation of money and state.
              </p>
              <p>
                As adoption grows, the state&apos;s ability to sanction, freeze, and control through the financial system shrinks. Every wallet, every node, every sat held in self-custody is a brick in the wall between money and state power.
              </p>
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

      <RelatedPages current="/resources/philosophy/freedom-tech" />
      <Footer />
    </main>
  );
}
