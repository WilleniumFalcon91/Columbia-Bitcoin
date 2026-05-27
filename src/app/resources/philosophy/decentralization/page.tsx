import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Decentralization — Bitcoin Philosophy",
  description:
    "The philosophical, political, economic, and systems-level case for decentralization — why distributed systems outperform central control, and how Bitcoin and Nostr embody these principles.",
  alternates: { canonical: "/resources/philosophy/decentralization" },
  twitter: {
    card: "summary_large_image",
    title: "Decentralization | Columbia, SC Bitcoin",
    description: "Why distributed systems outperform central control — and how Bitcoin and Nostr are its most important modern implementations.",
  },
  openGraph: {
    title: "Decentralization | Columbia, SC Bitcoin",
    description:
      "The philosophical, political, economic, and systems-level case for decentralization — why distributed systems outperform central control, and how Bitcoin and Nostr embody these principles.",
    url: "/resources/philosophy/decentralization",
    images: [{ url: `/api/og?title=${encodeURIComponent("Decentralization | Columbia, SC Bitcoin")}&section=philosophy`, width: 1200, height: 630, alt: "Decentralization | Columbia, SC Bitcoin" }],
  },
};

const centralizationFailures = [
  {
    name: "The Federal Reserve Dollar",
    year: "1913–present",
    type: "Monetary debasement",
    typeColor: "bg-rose-500/10 text-rose-500",
    detail:
      "The U.S. dollar has lost approximately 97% of its purchasing power since the Federal Reserve was established. What cost $1.00 in 1913 requires more than $33 today. Granting one institution unconstrained authority over money supply is precisely what Satoshi set out to eliminate: \"The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.\"",
  },
  {
    name: "Weimar Hyperinflation",
    year: "1921–1923",
    type: "Currency collapse",
    typeColor: "bg-rose-500/10 text-rose-500",
    detail:
      "The German Reichsmark collapsed from 60 marks per U.S. dollar at World War I's end to 4.2 trillion marks per dollar by November 1923. A loaf of bread that cost 200 marks in 1922 cost 200 billion marks a year later. Peak month-on-month inflation reached 79.6 billion percent. The cause was a sovereign government with unchecked authority over the printing press — the German middle class, those who had saved, was wiped out in the resulting chaos.",
  },
  {
    name: "Cyprus Bail-In",
    year: "March 2013",
    type: "Deposit confiscation",
    typeColor: "bg-amber-500/10 text-amber-600",
    detail:
      "As part of a eurozone bailout, Cyprus seized approximately 48% of bank deposits above €100,000 — roughly €8 billion in total. A single government decree turned savings into a bank recapitalization levy, with no due process. This event made explicit what banking law had always contained: deposits are unsecured loans to the bank, not property. They exist at the government's discretion. Bitcoin's supply is not on any government's balance sheet.",
  },
  {
    name: "Canadian Trucker Convoy Freezes",
    year: "February 2022",
    type: "Financial censorship",
    typeColor: "bg-amber-500/10 text-amber-600",
    detail:
      "Prime Minister Trudeau invoked the Emergencies Act — its first use since 1988 — to freeze over 200 bank accounts linked to Freedom Convoy protesters, totaling approximately C$7.8 million. No court order was required. Accounts were frozen and later unfrozen after the protests ended. A January 2024 federal court found the invocation \"unreasonable and ultra vires\" — but the freezes had already occurred. In a liberal democracy, financial accounts were weaponized against political dissidents.",
  },
  {
    name: "e-gold Seizure",
    year: "2007",
    type: "Platform shutdown",
    typeColor: "bg-violet-500/10 text-violet-500",
    detail:
      "At its peak, e-gold processed over $2 billion annually across 5 million accounts — a functioning digital gold standard. In April 2007, the U.S. DOJ indicted its operators, seized the physical gold backing the system, and shut it down. It had a CEO, a corporate registration, and a physical vault: three attack surfaces Bitcoin deliberately eliminates. One indictment ended a global financial network serving millions of users.",
  },
];

const previousAttempts = [
  {
    name: "DigiCash",
    years: "1989–1998",
    founder: "David Chaum",
    weakness: "Central corporate structure",
    detail:
      "David Chaum invented the cryptographic blind signature — a direct precursor to Bitcoin — in 1982, and built DigiCash around it in 1989. The cryptography was elegant. But DigiCash was a company with a CEO and a server. When it failed to achieve critical merchant adoption and ran low on capital, it filed for bankruptcy in 1998. The technology was brilliant; the centralized structure was the fatal vulnerability.",
  },
  {
    name: "e-gold",
    years: "1996–2007",
    founder: "Douglas Jackson & Barry Downey",
    weakness: "Identifiable operators and physical vault",
    detail:
      "e-gold processed $2 billion+ annually and had millions of users — a genuine, functioning digital gold standard. But it had a company name, corporate registration, and identifiable founders. The DOJ needed one indictment. Satoshi studied these failures directly: he designed Bitcoin so that no one person, company, or server could be the point of failure.",
  },
  {
    name: "Liberty Reserve",
    years: "2006–2013",
    founder: "Arthur Budovsky",
    weakness: "Central servers and identifiable operator",
    detail:
      "Liberty Reserve incorporated in Costa Rica specifically to evade U.S. law and processed approximately $6 billion over seven years. In May 2013, the DOJ charged Budovsky; the domain was seized within days. One million users lost access instantly. The lesson: any service with central servers and an identifiable operator can be killed with a single coordinated legal action, regardless of jurisdiction.",
  },
];

const thinkers = [
  {
    thinker: "F.A. Hayek",
    work: "The Use of Knowledge in Society (1945)",
    principle:
      "Knowledge about prices, preferences, and scarcity is distributed across millions of individuals — it cannot be aggregated by any central planner. The price system is civilization's most efficient mechanism for transmitting this dispersed information. Any institution that replaces it with central control degrades the economy's ability to respond to reality. Hayek called this the knowledge problem — the deepest argument for why decentralized systems outperform centralized ones.",
  },
  {
    thinker: "Alexis de Tocqueville",
    work: "Democracy in America, Vol. II (1840)",
    principle:
      "Tocqueville predicted \"soft despotism\" — a centralized state extending a network of small rules over citizens, relieving them of thought and the cares of living, keeping them in perpetual childhood. The structural protection he observed was Americans' habit of voluntary association: people solving problems together outside the state. Bitcoin and Nostr are software instantiations of that protective impulse — decentralized infrastructure built by individuals, not granted by governments.",
  },
  {
    thinker: "Elinor Ostrom",
    work: "Governing the Commons (1990) — Nobel Prize 2009",
    principle:
      "In 50 years of fieldwork, Ostrom proved that communities can sustainably self-govern shared resources without either state control or market privatization. She called this polycentric governance — multiple overlapping decision centers, each operating independently. Her 2009 Nobel lecture argued these distributed structures are more adaptive and resilient than top-down control. Bitcoin's governance by thousands of independent nodes is polycentric governance in protocol form.",
  },
  {
    thinker: "Nassim Taleb",
    work: "Antifragile (2012)",
    principle:
      "Centralized systems are fragile: a single point of failure can bring down the whole structure. Decentralized systems are antifragile — stressors, attacks, and failures make the remaining network stronger by proving it. Bitcoin is antifragile by design. Every government ban, every exchange hack, every fork that failed to take has only increased the network's credibility, demonstrating that no single actor controls it.",
  },
  {
    thinker: "Eric Hughes",
    work: "A Cypherpunk's Manifesto (1993)",
    principle:
      "\"We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence.\" Hughes wrote this 15 years before Bitcoin. His prescription: build the tools. \"Cypherpunks write code.\" The cypherpunk program was always about replacing institutional trust with cryptographic proof — building decentralized systems that cannot be turned off by any single decision-maker.",
  },
];

const resources = [
  {
    label: "The Use of Knowledge in Society",
    author: "F.A. Hayek (1945)",
    href: "https://www.econlib.org/library/Essays/hykKnw.html",
    description:
      "The foundational academic statement of why no central planner can replicate the distributed information encoded in market prices. Essential reading for understanding decentralization from first principles.",
  },
  {
    label: "A Cypherpunk's Manifesto",
    author: "Eric Hughes (1993)",
    href: "https://www.activism.net/cypherpunk/manifesto.html",
    description:
      "The 1993 document that launched the movement which produced Bitcoin. Hughes argued that privacy and financial freedom require cryptographic tools built by individuals — not promises from institutions. Published 15 years before Satoshi.",
  },
  {
    label: "Beyond Markets and States — Nobel Lecture",
    author: "Elinor Ostrom (2009)",
    href: "https://www.nobelprize.org/uploads/2018/06/ostrom_lecture.pdf",
    description:
      "Ostrom's Nobel Prize lecture on polycentric governance — the empirical case that distributed, overlapping decision systems are more adaptive and resilient than central authority. Directly maps onto Bitcoin node governance.",
  },
  {
    label: "Nostr Protocol",
    author: "fiatjaf (2020)",
    href: "https://github.com/nostr-protocol/nostr",
    description:
      "The original Nostr repository with fiatjaf's design rationale. A decentralized social protocol built on keypairs and relays — no platform, no account to revoke, no central server to seize.",
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

export default function DecentralizationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Philosophy", item: `${siteUrl}/resources/philosophy` },
          { "@type": "ListItem", position: 4, name: "Decentralization", item: `${siteUrl}/resources/philosophy/decentralization` },
        ],
      },
      {
        "@type": "Article",
        headline: "Decentralization — Bitcoin Philosophy",
        description: "The philosophical, political, economic, and systems-level case for decentralization — why distributed systems outperform central control, and how Bitcoin and Nostr embody these principles.",
        url: `${siteUrl}/resources/philosophy/decentralization`,
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Decentralization
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Centralization is seductive. It promises efficiency, coordination, and control. But every centralized system carries an invisible cost: a single point of failure, a single throat to choke, a single institution that must be trusted not to abuse its power. History shows that trust is always eventually broken. The question is not whether centralized systems fail — it is when, and how catastrophically.
            </p>
          </div>

          {/* The Problem with Concentrated Power */}
          <div>
            <SectionLabel>The Knowledge Problem</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Why No One Can Know Enough to Plan for Everyone</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In 1945, F.A. Hayek published what remains the deepest argument for decentralization: <em className="text-foreground">The Use of Knowledge in Society</em>. His core claim was not political but epistemological. Knowledge about prices, preferences, and local conditions is dispersed across millions of individuals in forms that cannot be extracted, aggregated, or transmitted to any central authority. &ldquo;The knowledge of the circumstances of which we must make use,&rdquo; he wrote, &ldquo;never exists in concentrated form but solely as the dispersed bits of incomplete and frequently contradictory knowledge which all the separate individuals possess.&rdquo;
              </p>
              <p>
                The price system solves this not by gathering information centrally, but by encoding it into signals. When copper becomes scarce, its rising price tells manufacturers worldwide to conserve or substitute — without any of them needing to know why. No planner could replicate this. Any attempt creates the central planning problem the Soviet Union encountered: too much data, no prices, no way to perform the billions of micro-calculations that a market executes automatically.
              </p>
              <p>
                Tocqueville identified the political version of the same problem in 1840. He predicted that democratic governments would tend toward what he called <strong className="text-foreground">soft despotism</strong> — not tyranny by violence, but by administration. A network of small, complicated rules that &ldquo;covers the surface of society with a network of small complicated rules, minute and uniform, through which the most original minds and the most energetic characters cannot penetrate.&rdquo; Citizens become, in his phrase, &ldquo;a flock of timid and industrious animals, of which the government is the shepherd.&rdquo; The corrective he observed in America was voluntary association — individuals building their own infrastructure, outside the state, because they could.
              </p>
            </div>
          </div>

          {/* Satoshi Quote */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <p className="text-base font-medium text-foreground leading-relaxed">
              &ldquo;The root problem with conventional currency is all the trust that&rsquo;s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-3">— Satoshi Nakamoto, P2P Foundation post, February 11, 2009</p>
          </div>

          {/* When Centralization Fails */}
          <div>
            <SectionLabel>Historical Record</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">When Central Control Fails</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These are not hypothetical risks. The same failure mode — concentrated power, misused — has played out repeatedly across modern history. The mechanism varies: debasement, confiscation, seizure, political targeting. The structure is always the same.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {centralizationFailures.map((item) => (
                <div key={item.name} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-bold text-foreground">{item.name}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto">{item.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Systems Theory */}
          <div>
            <SectionLabel>Systems Theory</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Resilience vs. Efficiency</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Centralized systems optimize for <strong className="text-foreground">efficiency</strong>: lower coordination overhead, faster decisions, consistent execution. Decentralized systems optimize for <strong className="text-foreground">resilience</strong>: no single point of failure, no choke point for censorship or attack, no decision-maker whose capture brings down the whole network.
              </p>
              <p>
                The original ARPANET was designed explicitly to survive nuclear attack. Its packet-routing architecture assumed nodes would fail and built in redundancy so the network could route around damage. Modern centralized internet services — AWS, Cloudflare, major social platforms — have reintroduced the single-point-of-failure problem at the infrastructure layer. Bitcoin and Nostr are, in this sense, a return to the internet&apos;s founding architectural principle.
              </p>
              <p>
                Nassim Taleb formalized this in <em className="text-foreground">Antifragile</em> (2012). Fragile systems break under stress. Robust systems resist it. Antifragile systems gain from it — every attack, every failure, every stress test that a decentralized network survives strengthens it. Elinor Ostrom&apos;s Nobel Prize work arrived at the same conclusion from empirical fieldwork: communities that self-govern through distributed, overlapping decision centers — what she called polycentric governance — prove more adaptive and durable than top-down managed ones. The Lindy Effect reinforces this: Bitcoin has survived 16 years of government bans, exchange collapses, rival protocols, and fork wars. Each year of survival adds to its expected remaining lifespan.
              </p>
            </div>
          </div>

          {/* Why Digital Cash Required Decentralization */}
          <div>
            <SectionLabel>Bitcoin</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Every Digital Cash Before Bitcoin Failed</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cryptographers had tried to build digital cash for 20 years before Bitcoin. Each attempt was technically sophisticated. Each failed for the same structural reason: centralization. Satoshi studied these failures directly and designed Bitcoin to eliminate every attack surface they shared.
            </p>
            <div className="space-y-4 mb-8">
              {previousAttempts.map((item) => (
                <div key={item.name} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-bold text-foreground text-lg">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.years}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500 ml-auto">{item.weakness}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bitcoin eliminated all three attack surfaces simultaneously. There is no CEO to arrest, no server to seize, no corporate registration to revoke, no physical vault to raid. The rules of the protocol are enforced by approximately 10,000+ full nodes, each independently validating every transaction and block. No miner, no company, and no government can override those rules without the consent of the node network. Any change to Bitcoin&apos;s rules requires convincing the majority of participants — not petitioning a single authority.
              </p>
              <p>
                This makes Bitcoin transactions censorship-resistant: any node can broadcast a transaction; any miner can include it in a block. Blacklisting a specific address or transaction requires coordinating every miner simultaneously — economically irrational, technically difficult, and historically unsuccessful. It makes Bitcoin seizure-resistant: if you control your private keys, no court order compels you to surrender them without your cooperation. &ldquo;Not your keys, not your coins&rdquo; is not just a slogan — it is a description of how the cryptography distributes control.
              </p>
            </div>
          </div>

          {/* Nostr */}
          <div>
            <SectionLabel>Nostr</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Decentralizing Speech</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If Bitcoin solves the money layer — censorship-resistant, seizure-resistant value transfer — Nostr addresses the communication layer. Nostr (Notes and Other Stuff Transmitted by Relays) is an open protocol, not a platform, created in 2020 by a pseudonymous Brazilian developer known as fiatjaf. Its motivation was explicit: Twitter had demonstrated that centralized social platforms are structurally unable to resist capture by political pressure, advertiser influence, and government demands.
              </p>
              <p>
                The key architectural difference: <strong className="text-foreground">identity is a keypair, not an account</strong>. You generate a public key (npub) and a private key (nsec). Your identity — your posts, your followers, your reputation — is cryptographically tied to that keypair, not to any server&apos;s database. Notes are signed and broadcast to &ldquo;relays&rdquo; (simple WebSocket servers). Anyone can run a relay. If a relay bans you, you switch relays. Your identity, content history, and followers travel with you because they belong to your keys, not to the platform.
              </p>
              <p>
                This distinguishes Nostr from federated systems like Mastodon, where your identity is tied to an instance (username@server.social). If your instance shuts down or bans you, you lose your account and must rebuild. Instance administrators can defederate from each other, creating information silos. Federation distributes institutional control; Nostr eliminates it. Jack Dorsey, co-founder of Twitter, recognized the distinction — he donated approximately $250,000 in Bitcoin to Nostr developers in 2023 and $10 million to a Nostr development fund in 2025.
              </p>
              <p>
                Bitcoin and Nostr together constitute an attempt to rebuild two critical layers of civilization — money and speech — outside the control of states and corporations. Both use the same mechanism: cryptographic keys as identity, making control by any single party technically impossible rather than merely contractually prohibited.
              </p>
            </div>
          </div>

          {/* The Intellectual Tradition */}
          <div>
            <SectionLabel>Intellectual Roots</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">The Thinkers Behind the Idea</h2>
            <div className="space-y-4">
              {thinkers.map((item) => (
                <div key={item.thinker} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="font-bold text-foreground">{item.thinker}</span>
                    <span className="text-xs text-muted-foreground">{item.work}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.principle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Reading */}
          <div>
            <SectionLabel>Go Deeper</SectionLabel>
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

      <RelatedPages current="/resources/philosophy/decentralization" />
      <Footer />
    </main>
  );
}
