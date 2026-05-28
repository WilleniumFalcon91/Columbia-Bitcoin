import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Game Theory — Bitcoin Philosophy",
  description:
    "How Bitcoin uses game theory to make honest behavior the dominant strategy — Nash equilibria, mining incentives, Schelling points, credible commitment, and why global adoption is still in its earliest innings.",
  alternates: { canonical: "/resources/philosophy/game-theory" },
  twitter: {
    card: "summary_large_image",
    title: "Game Theory | Columbia, SC Bitcoin",
    description: "Bitcoin is the most elegant real-world application of game theory ever constructed — why honesty is the dominant strategy, and why adoption is still early.",
  },
  openGraph: {
    title: "Game Theory | Columbia, SC Bitcoin",
    description:
      "How Bitcoin uses game theory to make honest behavior the dominant strategy — Nash equilibria, mining incentives, Schelling points, credible commitment, and why global adoption is still in its earliest innings.",
    url: "/resources/philosophy/game-theory",
    images: [{ url: `/api/og?title=${encodeURIComponent("Game Theory | Columbia, SC Bitcoin")}&section=philosophy`, width: 1200, height: 630, alt: "Game Theory | Columbia, SC Bitcoin" }],
  },
};

const miningPayoffs = [
  {
    scenario: "Honest Mining",
    outcome: "Positive",
    outcomeColor: "bg-emerald-500/10 text-emerald-600",
    detail:
      "A miner with 10% of global hashrate earns roughly 10% of block rewards — approximately 90 new bitcoin per day at current issuance. This revenue is predictable, repeatable, and compounds over time. The miner&rsquo;s hardware investment retains value only as long as the network functions. Honest mining is the rational equilibrium.",
  },
  {
    scenario: "51% Attack",
    outcome: "Self-Defeating",
    outcomeColor: "bg-rose-500/10 text-rose-500",
    detail:
      "Acquiring 51% of global hashrate would cost tens of billions of dollars in ASICs and energy. A successful double-spend attack would crash Bitcoin&rsquo;s price — destroying the value of the attacker&rsquo;s own hardware investment, which is only useful for mining Bitcoin. The expected value of attacking is negative when you account for what you would destroy in the process.",
  },
  {
    scenario: "Selfish Mining",
    outcome: "Marginally Profitable",
    outcomeColor: "bg-amber-500/10 text-amber-600",
    detail:
      "A miner with >33% hashrate can theoretically withhold discovered blocks to gain a statistical edge. In practice, this requires precise coordination, risks detection, and depends on other miners not adapting. Empirical studies show selfish mining yields marginal gains that disappear under realistic network conditions. The game-theoretic equilibrium is honest mining.",
  },
  {
    scenario: "ASIC Alignment",
    outcome: "Structural",
    outcomeColor: "bg-sky-500/10 text-sky-600",
    detail:
      "Application-Specific Integrated Circuits (ASICs) are expensive hardware that can only mine Bitcoin. A miner who destroys the network destroys the only thing their equipment can do. This is not merely an economic argument — it is a structural alignment of physical capital with the health of the protocol. Satoshi called this &ldquo;putting [the attacker&rsquo;s] money where his mouth is.&rdquo;",
  },
];

const adoptionStats = [
  {
    stat: "~4%",
    label: "Global population owns Bitcoin",
    detail: "Approximately 300–400 million people worldwide hold some Bitcoin — roughly the same percentage of the global population that had internet access in 1998.",
  },
  {
    stat: "~0.2%",
    label: "Of global store-of-value assets",
    detail: "Global stores of value — real estate, bonds, equities, gold, art — total approximately $900 trillion. Bitcoin's ~$2 trillion market cap represents roughly 0.2% penetration of the addressable market.",
  },
  {
    stat: "8.2B",
    label: "People without Bitcoin",
    detail: "Of 8.2 billion people on earth, over 7.8 billion have not yet adopted Bitcoin. Most will encounter it for the first time not as a speculation, but as the hardest money available in a deteriorating fiat environment.",
  },
  {
    stat: "n²",
    label: "Metcalfe&rsquo;s Law — network value scales as n squared",
    detail: "Each new Bitcoin user makes the network more valuable for every existing user. As adoption doubles, network utility approximately quadruples. This is the same dynamic that drove email, the internet, and mobile phones from niche to universal infrastructure.",
  },
];

const thinkers = [
  {
    thinker: "John von Neumann & Oskar Morgenstern",
    work: "Theory of Games and Economic Behavior (1944)",
    principle:
      "Von Neumann and Morgenstern founded game theory as a mathematical discipline, establishing that strategic interactions between rational actors could be modeled with the same rigor as physics. Their key insight: the payoff structure of a game — not the morality of the players — determines outcomes. Bitcoin&rsquo;s designers understood this deeply: the protocol&rsquo;s security doesn&rsquo;t require honest actors, only rational ones.",
  },
  {
    thinker: "John Nash",
    work: "Non-Cooperative Games (1950) — Nobel Prize 1994",
    principle:
      "Nash proved that in any finite game, there exists at least one equilibrium — a state where no player benefits from changing their strategy unilaterally. Bitcoin&rsquo;s Nash equilibrium is honest mining: given that all other miners are honest, defecting is unprofitable. The protocol was engineered to make this the stable, self-reinforcing outcome.",
  },
  {
    thinker: "Thomas Schelling",
    work: "The Strategy of Conflict (1960) — Nobel Prize 2005",
    principle:
      "Schelling introduced the concept of focal points — solutions that rational actors converge on without communication simply because they are salient. Among all global stores of value, Bitcoin is uniquely positioned as a focal point: fixed supply, self-custodied, globally transferable, and mathematically verifiable. In a world where trust in institutions is eroding, these properties make Bitcoin the natural convergence point for value storage.",
  },
  {
    thinker: "Robert Axelrod",
    work: "The Evolution of Cooperation (1984)",
    principle:
      "Axelrod ran tournaments pitting game theory strategies against each other in repeated prisoners&rsquo; dilemmas. The consistent winner was \"Tit for Tat\": cooperate first, then mirror your opponent. His finding: in repeated games — unlike one-shot interactions — cooperation emerges spontaneously as the dominant strategy. Bitcoin&rsquo;s mining game is a repeated game. Miners interact with the protocol indefinitely. This makes sustained honest behavior the rational equilibrium, not despite self-interest but because of it.",
  },
];

const resources = [
  {
    label: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    author: "Satoshi Nakamoto (2008)",
    href: "https://bitcoin.org/bitcoin.pdf",
    description:
      "Sections 6–11 of the whitepaper contain the full game-theoretic argument for Bitcoin&rsquo;s security model: why honest mining dominates, why the 51% attack is self-defeating, and how proof of work makes defection more expensive than cooperation.",
  },
  {
    label: "Nash Equilibrium",
    author: "Investopedia",
    href: "https://www.investopedia.com/terms/n/nash-equilibrium.asp",
    description:
      "A clear primer on Nash equilibrium — the foundational concept behind Bitcoin&rsquo;s incentive design. Understanding Nash equilibrium is the prerequisite for understanding why Bitcoin&rsquo;s rules are self-enforcing.",
  },
  {
    label: "The Evolution of Cooperation",
    author: "Robert Axelrod (1984)",
    href: "https://www.basicbooks.com/titles/robert-axelrod/the-evolution-of-cooperation/9780465005642/",
    description:
      "Axelrod&rsquo;s landmark work on how cooperation emerges from self-interest in repeated games. The iterated prisoners&rsquo; dilemma analysis maps directly onto Bitcoin mining: long-run relationships between rational actors produce honest equilibria.",
  },
  {
    label: "Bitcoin: Addressing the Ponzi Scheme Allegation",
    author: "Lyn Alden",
    href: "https://www.lynalden.com/bitcoin-ponzi-scheme/",
    description:
      "Lyn Alden&rsquo;s detailed analysis of Bitcoin&rsquo;s game-theoretic properties — network effects, adoption curves, and why the protocol&rsquo;s incentives make it structurally different from speculative bubbles. Essential reading for the adoption thesis.",
  },
  {
    label: "Bitcoin Adoption",
    author: "River Financial",
    href: "https://river.com/learn/bitcoin-adoption/",
    description:
      "River Financial&rsquo;s research on global Bitcoin adoption rates, user demographics, and the S-curve adoption model. The data behind the claim that ~4% of the global population owns Bitcoin.",
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

export default function GameTheoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Philosophy", item: `${siteUrl}/resources/philosophy` },
          { "@type": "ListItem", position: 4, name: "Game Theory", item: `${siteUrl}/resources/philosophy/game-theory` },
        ],
      },
      {
        "@type": "Article",
        headline: "Game Theory — Bitcoin Philosophy",
        description: "How Bitcoin uses game theory to make honest behavior the dominant strategy — Nash equilibria, mining incentives, Schelling points, credible commitment, and why global adoption is still in its earliest innings.",
        url: `${siteUrl}/resources/philosophy/game-theory`,
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
              Game Theory
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Game theory is the mathematics of strategic interaction — the study of how rational actors make decisions when their outcomes depend on what others do. Bitcoin is not just a technology built with cryptography and code. It is a game-theoretic system engineered so that the individually rational choice and the collectively beneficial outcome are the same thing: honesty. Understanding this is understanding why Bitcoin works.
            </p>
          </div>

          {/* What Is Game Theory */}
          <div>
            <SectionLabel>Foundations</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">The Science of Strategic Decision-Making</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Game theory was formalized by John von Neumann and Oskar Morgenstern in their 1944 book <em className="text-foreground">Theory of Games and Economic Behavior</em>. Their central insight was that the outcome of a rational actor&apos;s decision depends not just on their own choices but on the choices of every other player in the game. This makes strategic analysis fundamentally different from ordinary optimization.
              </p>
              <p>
                The most famous example is the <strong className="text-foreground">prisoners&apos; dilemma</strong>: two suspects are held separately and each is offered a deal to betray the other. If both stay silent, both receive a light sentence. If one betrays and the other stays silent, the betrayer goes free and the silent prisoner gets a heavy sentence. If both betray, both get moderate sentences. The Nash equilibrium — the outcome where no player benefits from changing strategy unilaterally — is mutual betrayal, even though mutual silence would leave both better off. This is the key failure mode game theory reveals: rational individual behavior can produce collectively irrational outcomes when the incentive structure is wrong.
              </p>
              <p>
                Satoshi Nakamoto understood this problem deeply. Every digital cash system before Bitcoin failed not because the cryptography was broken, but because the <strong className="text-foreground">incentive structure created a prisoners&apos; dilemma</strong>: participants had individual reasons to defect (double-spend, censor, shut down) that overrode collective reasons to cooperate. Bitcoin&apos;s breakthrough was redesigning the payoff matrix so that honest behavior is the dominant strategy — the rational choice regardless of what anyone else does.
              </p>
            </div>
          </div>

          {/* Satoshi Quote */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <p className="text-base font-medium text-foreground leading-relaxed">
              &ldquo;The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes. If a greedy attacker is able to assemble more CPU power than all the honest nodes, he would have to choose between using it to defraud people by stealing back his payments, or using it to generate new coins. He ought to find it more profitable to play by the rules, such rules that favour him with more new coins than everyone else combined, than to undermine the system and the validity of his own wealth.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-3">— Satoshi Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System (2008)</p>
          </div>

          {/* The Byzantine Generals Problem */}
          <div>
            <SectionLabel>The Problem Satoshi Solved</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">The Byzantine Generals Problem</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In 1982, computer scientists Leslie Lamport, Robert Shostak, and Marshall Pease published a paper describing what they called the Byzantine Generals Problem. Imagine several divisions of the Byzantine army surrounding an enemy city, each commanded by a general. The generals can only communicate by messenger. They must agree on a common plan — attack or retreat — but some generals may be traitors who will send contradictory messages to cause a failed coordination. The problem: how can the loyal generals reach a reliable agreement when they cannot trust every participant?
              </p>
              <p>
                For 26 years, computer scientists proved this was unsolvable in a fully trustless, asynchronous network. Every proposed solution required some degree of trusted authority — a central coordinator, a known list of validators, or an assumption about how many traitors existed. Any such assumption recreates centralization, and centralization creates attack surfaces. This is why every digital cash system before Bitcoin eventually failed.
              </p>
              <p>
                Satoshi&apos;s solution was proof of work. Instead of trusting participants, the protocol makes participation <strong className="text-foreground">costly</strong>. To cast a &ldquo;vote&rdquo; on which transaction history is valid, a miner must expend real computational energy. This energy expenditure is the game-theoretic key: you can&apos;t fake it, you can&apos;t copy it, and you can&apos;t steal it from someone else. The longest chain — the one with the most accumulated work — is accepted as valid not because anyone trusts the miner, but because producing it required more resources than any plausible attacker could profitably commit. The Byzantine Generals Problem is solved not by identifying traitors but by making betrayal economically irrational.
              </p>
            </div>
          </div>

          {/* Mining Incentives */}
          <div>
            <SectionLabel>Incentive Design</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Honesty Is the Dominant Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bitcoin&apos;s security does not rest on miners being honest. It rests on the fact that honest mining is more profitable than any alternative. The payoff matrix was engineered to make this true under every realistic scenario.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {miningPayoffs.map((item) => (
                <div key={item.scenario} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-bold text-foreground">{item.scenario}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-auto ${item.outcomeColor}`}>
                      {item.outcome}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              ))}
            </div>
          </div>

          {/* Credible Commitment */}
          <div>
            <SectionLabel>Credible Commitment</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">The 21 Million as a Binding Promise</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Game theory has a concept called <strong className="text-foreground">credible commitment</strong> — a promise that is binding not because of goodwill or legal obligation, but because defecting from it is irrational for the party making it. The classic example is Hernán Cortés burning his ships upon arriving in Mexico: retreat became literally impossible, so his soldiers fought harder. The commitment was credible because it was irreversible.
              </p>
              <p>
                Bitcoin&apos;s 21 million supply cap is a credible commitment in this sense. The cap is not enforced by Satoshi, by any company, or by any government. It is enforced by approximately 15,000+ full nodes worldwide, each independently running software that rejects any block that violates the supply schedule. There is no override key. There is no emergency committee. Any miner who tries to claim more than the allotted block subsidy will have their block rejected by the entire validating network — it will simply not propagate.
              </p>
              <p>
                This distinguishes Bitcoin fundamentally from central bank promises. When the Federal Reserve commits to an inflation target, the commitment is non-binding: a vote of the FOMC can change policy at any meeting. The commitment is only as credible as the institution making it — and the history of central banking is a history of broken commitments. Bitcoin&apos;s 21 million cap requires no trust. It is enforced by the same mechanism that prevents any other rule change: consensus among thousands of independent node operators, each of whom would have to individually choose to adopt modified software. The game theory makes this converge on no change: no node operator benefits from inflating the supply, and many hold bitcoin and have strong incentives not to.
              </p>
            </div>
          </div>

          {/* Schelling Point */}
          <div>
            <SectionLabel>Coordination</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Bitcoin as a Global Focal Point</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In 1960, economist Thomas Schelling introduced the concept of a <strong className="text-foreground">focal point</strong> — a solution that rational actors converge on without coordination, simply because it is salient. His famous experiment: ask two strangers, separately, to meet somewhere in New York City at noon, without any prior communication. Most choose Grand Central Terminal. No rule compelled them. It is simply the most obvious answer.
              </p>
              <p>
                In the game of global sound money, Bitcoin is the Schelling point. Humanity has always needed a store of value outside political control. Historically, gold served this function — but gold has severe limitations for the modern world: it cannot be self-custodied digitally, cannot be transferred globally in seconds, cannot be programmed, and cannot be verified without physical analysis. Silver, art, and real estate have similar or worse limitations.
              </p>
              <p>
                Bitcoin uniquely combines the properties that make a global store of value viable in the digital age: a hard cap verified by mathematics, not institutions; self-custody through cryptographic keys; settlement anywhere on earth in minutes; programmability for complex financial contracts; and open verification — anyone running a node can confirm the full supply and every transaction ever made. Among all existing stores of value, no competitor offers this combination. Rational actors seeking hard money, surveying the available options, converge on Bitcoin not because anyone told them to, but because it is the most obvious answer. This is a Schelling point.
              </p>
            </div>
          </div>

          {/* Why It's Still Early */}
          <div>
            <SectionLabel>Adoption Curve</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">The Game Isn&apos;t Over — It&apos;s Barely Started</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                The question &ldquo;is it too late to buy Bitcoin?&rdquo; is a game-theory question, not a price question. Price is a symptom of adoption. Adoption is the variable that matters, and adoption is a coordination game that follows a predictable S-curve: slow initial uptake among early adopters, then an inflection point as network effects kick in, then rapid spread as the dominant strategy becomes obvious to more players.
              </p>
              <p>
                We are near the beginning of that S-curve. The internet reached 4% global penetration around 1995 — almost exactly where Bitcoin is today. It took until roughly 2005 for the internet to reach 15% penetration, and until 2019 to reach 50%. Bitcoin is following a similar trajectory, with similar dynamics: network effects that compound with adoption, infrastructure that improves over time, and an underlying utility (sound money outside political control) that does not diminish.
              </p>
              <p>
                The game-theoretic argument for early adoption is straightforward: once a significant majority of rational actors have adopted the dominant strategy, latecomers pay a higher price to acquire the same position. The window to accumulate hard money at today&apos;s prices exists precisely because most of the world&apos;s 8.2 billion people have not yet discovered that Bitcoin is the dominant strategy. Price at any given moment reflects current adoption, not eventual adoption.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {adoptionStats.map((item) => (
                <div key={item.stat} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <p className="text-3xl font-bold text-primary mb-1" dangerouslySetInnerHTML={{ __html: item.stat }} />
                  <p className="text-sm font-semibold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: item.label }} />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Thinkers */}
          <div>
            <SectionLabel>Intellectual Roots</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">The Thinkers Behind the Framework</h2>
            <div className="space-y-4">
              {thinkers.map((item) => (
                <div key={item.thinker} className="bg-card border border-border rounded-xl p-5 shadow-card">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <span className="font-bold text-foreground">{item.thinker}</span>
                    <span className="text-xs text-muted-foreground">{item.work}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.principle }} />
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
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: r.label }} />
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-xs text-primary mb-2">{r.author}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: r.description }} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      <RelatedPages current="/resources/philosophy/game-theory" />
      <Footer />
    </main>
  );
}
