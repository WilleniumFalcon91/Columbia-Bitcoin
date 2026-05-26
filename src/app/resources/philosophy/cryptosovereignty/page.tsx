import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cryptosovereignty — Bitcoin Philosophy",
  description:
    "Erik Cason's framework for sovereignty through cryptography — why holding your own Bitcoin keys is a political act and a new form of property rights enforcement.",
  alternates: { canonical: "/resources/philosophy/cryptosovereignty" },
  twitter: {
    card: "summary_large_image",
    title: "Cryptosovereignty | Columbia, SC Bitcoin",
    description: "Erik Cason's framework — keys as sovereignty, cryptographic truth, and the new political archetype.",
  },
  openGraph: {
    title: "Cryptosovereignty | Columbia, SC Bitcoin",
    description:
      "Erik Cason's framework for sovereignty through cryptography — why holding your own Bitcoin keys is a political act and a new form of property rights enforcement.",
    url: "/resources/philosophy/cryptosovereignty",
    images: [{ url: `/api/og?title=${encodeURIComponent("Cryptosovereignty | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Cryptosovereignty | Columbia, SC Bitcoin" }],
  },
};

const trustComparison = [
  {
    system: "Traditional Finance",
    trustRequired: "Banks, governments, courts, law enforcement",
    failure: "Account freezes, capital controls, asset seizure, hyperinflation, bank runs",
    example: "Canada 2022: Banks froze accounts of Canadian truckers at government request with no court order.",
  },
  {
    system: "Bitcoin (Exchange Custody)",
    trustRequired: "Exchange operators, their security practices, their regulatory compliance",
    failure: "Exchange hacks (Mt. Gox), fraud (FTX), regulatory shutdown, withdrawal freezes",
    example: "FTX 2022: $9B+ in customer funds commingled and lost. Withdrawal suspensions preceded the collapse.",
  },
  {
    system: "Bitcoin (Self-Custody)",
    trustRequired: "The mathematical properties of elliptic curve cryptography",
    failure: "Only possible through user error (lost seed phrase, physical compromise)",
    example: "Math has never been hacked. Cryptographic proof of ownership requires zero institutional cooperation.",
  },
];

const casonPrinciples = [
  {
    principle: "Keys Are Sovereignty",
    description: "A private key is not just a password — it is proof of ownership that no third party can revoke, freeze, or override. When you hold your own keys, your property rights are enforced by mathematics, not by institutions. This is sovereignty in the most literal sense: the power to control your own domain without needing permission.",
  },
  {
    principle: "Cryptographic Truth vs. Institutional Trust",
    description: "All traditional systems of property rights ultimately rest on institutional enforcement — courts, police, governments. These can be corrupted, captured, or coerced. Cryptographic truth is different: it doesn&apos;t depend on anyone choosing to enforce it. A valid signature is valid whether a government recognizes it or not. The protocol doesn&apos;t care about jurisdiction.",
  },
  {
    principle: "The Cryptosovereign as Political Archetype",
    description: "Cason coins the term &quot;cryptosovereign&quot; to describe a new kind of political actor — one whose property rights are enforced not by the state&apos;s monopoly on violence, but by cryptographic proof. This is not anarchy; it is a parallel sovereignty. The cryptosovereign opts into a different system of property rights, one that cannot be revoked by political decree.",
  },
  {
    principle: "Bitcoin as New Social Contract",
    description: "Traditional social contracts trade individual freedom for state protection. The implicit deal: the state protects your property; in exchange, you accept the state&apos;s authority over your money. Bitcoin breaks this trade. You can protect your own property — through cryptography — without ceding monetary sovereignty to any institution.",
  },
];

const nickSzaboConnection = [
  {
    label: "Shelling Out: The Origins of Money",
    description: "Nick Szabo traces the evolutionary history of money from collectibles to gold to digital assets. He argues that the key property of money is not government backing but unforgeable costliness — the property Bitcoin achieves through proof of work.",
  },
  {
    label: "Smart Contracts",
    description: "Szabo coined the term &quot;smart contract&quot; in 1994 — contracts enforced by code rather than courts. Bitcoin is the first fully deployed smart contract: the protocol enforces ownership rules without courts, lawyers, or judges. Every Bitcoin transaction is a smart contract executing.",
  },
  {
    label: "Bit Gold",
    description: "Szabo&apos;s 1998 proposal for a decentralized digital currency based on proof of work. Bit Gold was never implemented, but it directly influenced Bitcoin&apos;s design. Szabo is widely considered a predecessor to Satoshi.",
  },
];

const resources = [
  {
    label: "Cryptosovereigns",
    author: "Erik Cason — Citadel21",
    href: "https://www.citadel21.com/cryptosovereigns",
    description: "Cason&apos;s defining essay on the cryptosovereign archetype. Dense and philosophical — read it slowly. The central argument: holding keys is a political act with civilizational stakes.",
  },
  {
    label: "Bitcoin is the Most Important Freedom Technology",
    author: "Erik Cason — Bitcoin Magazine",
    href: "https://bitcoinmagazine.com/culture/bitcoin-is-the-most-important-freedom-technology",
    description: "A more accessible entry point to Cason&apos;s thinking — why Bitcoin is not just money but a mechanism for separating economic power from state power.",
  },
  {
    label: "Shelling Out: The Origins of Money",
    author: "Nick Szabo",
    href: "https://nakamotoinstitute.org/library/shelling-out/",
    description: "The foundational essay on the evolutionary origins of money. Szabo&apos;s &quot;unforgeable costliness&quot; concept is the philosophical predecessor to Bitcoin&apos;s proof of work.",
  },
  {
    label: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    href: "https://saifedean.com/thebitcoinstandard/",
    description: "The economic foundation for cryptosovereignty — why hard money is the prerequisite for individual sovereignty, and why Bitcoin is the hardest money ever created.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

export default function CryptosovereigntyPage() {
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
              Cryptosovereignty
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              &quot;Not your keys, not your coins&quot; is usually taught as a security lesson. Erik Cason argues it is something deeper — a statement about how sovereignty is established and enforced in the information age.
            </p>
          </div>

          {/* Keys = Sovereignty */}
          <div>
            <SectionLabel>Foundation</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Keys Are Sovereignty</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Throughout history, property rights have been enforced by physical power — the sovereign&apos;s army, the court&apos;s bailiff, the bank&apos;s ability to freeze your account. Property was yours because an institution with a monopoly on violence agreed it was yours. That agreement could be revoked.
              </p>
              <p>
                A Bitcoin private key changes this. When you hold a private key, you hold the ability to authorize transactions from that address. This authorization requires no institutional permission — it is a mathematical proof. No government can revoke it. No bank can freeze it. No court can override it. Your ownership is enforced by the same mathematical principles that make 2+2=4.
              </p>
              <p>
                This is what makes self-custody a political act, not just a security practice. You are opting into a system where your property rights are backed by cryptography rather than by institutional goodwill.
              </p>
            </div>
          </div>

          {/* Trust Comparison */}
          <div>
            <SectionLabel>Trust Hierarchy</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">Comparing Systems of Property Rights</h2>
            <div className="space-y-4">
              {trustComparison.map((item) => (
                <div key={item.system} className={`bg-card border rounded-xl p-5 shadow-card ${
                  item.system === "Bitcoin (Self-Custody)" ? "border-primary/20 bg-primary/5" : "border-border"
                }`}>
                  <p className="font-semibold text-foreground mb-2">{item.system}</p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Trust Required</p>
                      <p className="text-muted-foreground">{item.trustRequired}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Failure Mode</p>
                      <p className="text-muted-foreground">{item.failure}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border italic">{item.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Erik Cason's Framework */}
          <div>
            <SectionLabel>Erik Cason</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-6">The Cryptosovereign Framework</h2>
            <div className="space-y-4">
              {casonPrinciples.map((p) => (
                <div key={p.principle} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="font-semibold text-foreground mb-2">{p.principle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nick Szabo */}
          <div>
            <SectionLabel>Intellectual Predecessor</SectionLabel>
            <h2 className="text-2xl font-bold text-foreground mb-4">Nick Szabo&apos;s Foundations</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Nick Szabo is a cryptographer, legal theorist, and computer scientist whose work in the 1990s laid the philosophical groundwork for what Cason would later articulate as cryptosovereignty. Szabo&apos;s core insight: contracts and property rights don&apos;t need human enforcement if the code enforces them.
              </p>
            </div>
            <div className="space-y-3">
              {nickSzaboConnection.map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="font-semibold text-foreground mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
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

      <RelatedPages current="/resources/philosophy/cryptosovereignty" />
      <Footer />
    </main>
  );
}
