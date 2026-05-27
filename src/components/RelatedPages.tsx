"use client";

import Link from "next/link";
import { Calendar, Users, BookOpen, Mail, Zap } from "lucide-react";
import { trackNavLinkClick } from "@/lib/analytics";

const mainSections = [
  {
    label: "Next Meetup",
    href: "/event",
    description: "See when and where we're meeting next, plus what to expect at the meetup.",
    icon: Calendar,
  },
  {
    label: "About Us",
    href: "/about",
    description: "Learn about our values, mission, and the story behind the meetup.",
    icon: Users,
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Curated Bitcoin education — books, podcasts, articles, and more.",
    icon: BookOpen,
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch, propose a talk, or join our Signal community.",
    icon: Mail,
  },
  {
    label: "Donate",
    href: "/donate",
    description: "Support the meetup with a Lightning payment — any amount helps.",
    icon: Zap,
  },
];

type ResourceLink = { label: string; href: string; description: string };

const resourceRelated: Record<string, ResourceLink[]> = {
  "/resources/glossary": [
    { label: "Bitcoin 101", href: "/presentations/bitcoin-101", description: "A visual intro to Bitcoin's core properties and how it works." },
    { label: "Education", href: "/resources/education", description: "Books, podcasts, articles, and courses for every level." },
    { label: "Start Here", href: "/resources/start-here", description: "Follow the guided path from first principles to self-custody." },
  ],
  "/resources/education": [
    { label: "Glossary", href: "/resources/glossary", description: "36 key Bitcoin terms explained in plain language." },
    { label: "Bitcoin 101", href: "/presentations/bitcoin-101", description: "A visual intro to Bitcoin's core properties and how it works." },
    { label: "Self-Custody", href: "/resources/self-custody", description: "How to hold your own keys and remove counterparty risk." },
  ],
  "/resources/self-custody": [
    { label: "Run a Node", href: "/resources/node", description: "Verify your own transactions and support the network." },
    { label: "Privacy", href: "/resources/privacy", description: "Bitcoin and web privacy tools recommended by the community." },
    { label: "Dollar Cost Average", href: "/resources/dca", description: "The low-stress strategy for building a Bitcoin position over time." },
  ],
  "/resources/dca": [
    { label: "Self-Custody", href: "/resources/self-custody", description: "How to hold your own keys and remove counterparty risk." },
    { label: "Glossary", href: "/resources/glossary", description: "36 key Bitcoin terms explained in plain language." },
    { label: "Education", href: "/resources/education", description: "Books, podcasts, and courses for every level." },
  ],
  "/resources/mining": [
    { label: "Run a Node", href: "/resources/node", description: "Verify your own transactions and support the network." },
    { label: "Bitcoin Data & Charts", href: "/resources/bitbo", description: "Hashrate, difficulty, price history, and scarcity charts." },
    { label: "Timechain Calendar", href: "/resources/timechain", description: "Every Bitcoin block, visualized as a calendar." },
  ],
  "/resources/node": [
    { label: "Self-Custody", href: "/resources/self-custody", description: "How to hold your own keys and remove counterparty risk." },
    { label: "Privacy", href: "/resources/privacy", description: "Bitcoin and web privacy tools recommended by the community." },
    { label: "Mining", href: "/resources/mining", description: "How Bitcoin mining works, from CPUs to ASICs." },
  ],
  "/resources/privacy": [
    { label: "Run a Node", href: "/resources/node", description: "Verify your own transactions and support the network." },
    { label: "Self-Custody", href: "/resources/self-custody", description: "How to hold your own keys and remove counterparty risk." },
    { label: "Sparrow Wallet", href: "/presentations/sparrow-wallet", description: "Deep dive into Sparrow Wallet's coin control and privacy features." },
  ],
  "/resources/business": [
    { label: "Bitcoin Map", href: "/resources/map", description: "Find Bitcoin-accepting businesses in Columbia and the Midlands." },
    { label: "Lightning Network", href: "/presentations/lightning-network", description: "How Lightning payments work and how to use them." },
    { label: "Carolinas Communities", href: "/resources/regional", description: "Bitcoin meetup groups across South Carolina and North Carolina." },
  ],
  "/resources/map": [
    { label: "Bitcoin for Businesses", href: "/resources/business", description: "How to help local businesses start accepting Bitcoin." },
    { label: "Meetup Finder", href: "/resources/meetupfinder", description: "Find Bitcoin communities worldwide." },
    { label: "Carolinas Communities", href: "/resources/regional", description: "Bitcoin meetup groups across South Carolina and North Carolina." },
  ],
  "/resources/meetupfinder": [
    { label: "Bitcoin Map", href: "/resources/map", description: "Find Bitcoin-accepting businesses near you." },
    { label: "Carolinas Communities", href: "/resources/regional", description: "Bitcoin meetup groups across South Carolina and North Carolina." },
    { label: "Next Meetup", href: "/event", description: "See when and where we're meeting next in Columbia." },
  ],
  "/resources/regional": [
    { label: "Meetup Finder", href: "/resources/meetupfinder", description: "Find Bitcoin communities worldwide." },
    { label: "Bitcoin Map", href: "/resources/map", description: "Find Bitcoin-accepting businesses near you." },
    { label: "Next Meetup", href: "/event", description: "See when and where we're meeting next in Columbia." },
  ],
  "/resources/debt-clock": [
    { label: "Bitcoin Data & Charts", href: "/resources/bitbo", description: "Hashrate, scarcity, price history, and more." },
    { label: "Timechain Calendar", href: "/resources/timechain", description: "Every Bitcoin block, visualized as a calendar." },
    { label: "Glossary", href: "/resources/glossary", description: "36 key Bitcoin terms explained in plain language." },
  ],
  "/resources/timechain": [
    { label: "Bitcoin Data & Charts", href: "/resources/bitbo", description: "Hashrate, scarcity, price history, and more." },
    { label: "U.S. Debt Clock", href: "/resources/debt-clock", description: "Watch the national debt tick up in real time." },
    { label: "Mempool Explorer", href: "/resources/mempool", description: "Track Bitcoin transactions and fee rates." },
  ],
  "/resources/mempool": [
    { label: "Timechain Calendar", href: "/resources/timechain", description: "Every Bitcoin block, visualized as a calendar." },
    { label: "Bitcoin Data & Charts", href: "/resources/bitbo", description: "Hashrate, difficulty, and scarcity charts." },
    { label: "Run a Node", href: "/resources/node", description: "Verify your own transactions and support the network." },
  ],
  "/resources/bitbo": [
    { label: "Timechain Calendar", href: "/resources/timechain", description: "Every Bitcoin block, visualized as a calendar." },
    { label: "U.S. Debt Clock", href: "/resources/debt-clock", description: "Watch the national debt tick up in real time." },
    { label: "Mempool Explorer", href: "/resources/mempool", description: "Track Bitcoin transactions and fee rates." },
  ],
  "/resources/vibes": [
    { label: "Next Meetup", href: "/event", description: "Come hang out with us at the next monthly gathering." },
    { label: "Carolinas Communities", href: "/resources/regional", description: "Bitcoin meetup groups across the Carolinas." },
    { label: "About Us", href: "/about", description: "Learn about the Columbia Bitcoin community." },
  ],
  "/resources/start-here": [
    { label: "Glossary", href: "/resources/glossary", description: "36 key Bitcoin terms explained in plain language." },
    { label: "Self-Custody", href: "/resources/self-custody", description: "How to hold your own keys and remove counterparty risk." },
    { label: "Next Meetup", href: "/event", description: "Come meet the community in person." },
  ],
  "/resources/learn": [
    { label: "Data & Tools", href: "/resources/data-tools", description: "Live block explorers, charts, Bitcoin maps, and meetup finders." },
    { label: "Philosophy", href: "/resources/philosophy", description: "The intellectual foundations of Bitcoin — hard money, freedom tech, and sovereignty." },
    { label: "Start Here", href: "/resources/start-here", description: "Follow the guided path from first principles to self-custody." },
  ],
  "/resources/data-tools": [
    { label: "Learn", href: "/resources/learn", description: "Bitcoin fundamentals, security, privacy, and how the network works." },
    { label: "Community", href: "/resources/community", description: "Carolinas meetup directories and the Columbia Bitcoin community playlist." },
    { label: "Philosophy", href: "/resources/philosophy", description: "The intellectual foundations of Bitcoin — hard money, freedom tech, and sovereignty." },
  ],
  "/resources/community": [
    { label: "Next Meetup", href: "/event", description: "See when and where we're meeting next in Columbia." },
    { label: "Learn", href: "/resources/learn", description: "Bitcoin fundamentals, security, and self-custody guides." },
    { label: "Data & Tools", href: "/resources/data-tools", description: "Bitcoin maps, meetup finders, and live network data." },
  ],
  "/resources/philosophy": [
    { label: "Hard Money", href: "/resources/philosophy/hard-money", description: "The 21M cap, Austrian economics, and why Bitcoin is the hardest money ever created." },
    { label: "Freedom Tech", href: "/resources/philosophy/freedom-tech", description: "From the Cypherpunk Manifesto to Bitcoin — privacy as a right, not a privilege." },
    { label: "Bitcoin Fixes This", href: "/resources/philosophy/bitcoin-fixes-this", description: "The Cantillon effect, debt monetization, and why Bitcoin is the fix." },
  ],
  "/resources/philosophy/hard-money": [
    { label: "Bitcoin Fixes This", href: "/resources/philosophy/bitcoin-fixes-this", description: "The problems hard money solves — inflation, debt, and the Cantillon effect." },
    { label: "The Sovereign Individual", href: "/resources/philosophy/sovereign-individual", description: "How sound money enables individual sovereignty in the information age." },
    { label: "Self-Custody", href: "/resources/self-custody", description: "Hard money in your own hands — why self-custody is the final step." },
  ],
  "/resources/philosophy/freedom-tech": [
    { label: "Cryptosovereignty", href: "/resources/philosophy/cryptosovereignty", description: "Erik Cason's framework for sovereignty through cryptographic keys." },
    { label: "Privacy", href: "/resources/privacy", description: "Bitcoin and web privacy tools recommended by the community." },
    { label: "Run a Node", href: "/resources/node", description: "Verify your own transactions — the cypherpunk ideal in practice." },
  ],
  "/resources/philosophy/circular-economy": [
    { label: "Bitcoin for Businesses", href: "/resources/business", description: "Help local businesses join the Bitcoin circular economy." },
    { label: "Bitcoin Fixes This", href: "/resources/philosophy/bitcoin-fixes-this", description: "Why exiting the fiat system matters — the case for circular Bitcoin commerce." },
    { label: "Bitcoin Map", href: "/resources/map", description: "Find businesses near Columbia, SC where you can spend Bitcoin today." },
  ],
  "/resources/philosophy/bitcoin-fixes-this": [
    { label: "Hard Money", href: "/resources/philosophy/hard-money", description: "The monetary theory behind why Bitcoin is the fix — sound money and the 21M cap." },
    { label: "Circular Economy", href: "/resources/philosophy/circular-economy", description: "Put the thesis into practice — live and transact in a Bitcoin circular economy." },
    { label: "Bitcoin Data & Charts", href: "/resources/bitbo", description: "Long-run Bitcoin performance data that illustrates the hyperbitcoinization arc." },
  ],
  "/resources/philosophy/sovereign-individual": [
    { label: "Cryptosovereignty", href: "/resources/philosophy/cryptosovereignty", description: "Sovereignty through cryptographic keys — the practical expression of the sovereign individual thesis." },
    { label: "Self-Custody", href: "/resources/self-custody", description: "Take custody of your keys — the first step to becoming a sovereign individual." },
    { label: "Hard Money", href: "/resources/philosophy/hard-money", description: "Why hard money is the monetary foundation of individual sovereignty." },
  ],
  "/resources/philosophy/cryptosovereignty": [
    { label: "Freedom Tech", href: "/resources/philosophy/freedom-tech", description: "The cypherpunk lineage from which cryptosovereignty emerges." },
    { label: "The Sovereign Individual", href: "/resources/philosophy/sovereign-individual", description: "The political philosophy that predicted the cryptosovereign archetype." },
    { label: "Self-Custody", href: "/resources/self-custody", description: "Holding your own keys is cryptosovereignty in practice." },
  ],
};

export default function RelatedPages({ current }: { current: string }) {
  const resourceLinks = resourceRelated[current];

  if (resourceLinks) {
    return (
      <section className="py-16 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 text-center">
            Explore More
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {resourceLinks.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => trackNavLinkClick({ label: page.label, href: page.href, section: "related_pages" })}
                className="group flex flex-col bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150"
              >
                <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {page.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const related = mainSections.filter((s) => s.href !== current).slice(0, 3);

  return (
    <section className="py-16 bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 text-center">
          Explore More
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                onClick={() => trackNavLinkClick({ label: section.label, href: section.href, section: "related_pages" })}
                className="group flex flex-col bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {section.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
