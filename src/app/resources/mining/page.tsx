import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Mining | Resources | Columbia, SC Bitcoin",
  description:
    "A deep dive into Bitcoin mining — proof of work, hashrate, difficulty adjustment, block rewards, halvings, solo vs pool mining, home mining hardware, and economics.",
  alternates: { canonical: "/resources/mining" },
  openGraph: {
    title: "Bitcoin Mining | Columbia, SC Bitcoin",
    description: "Everything you need to know about Bitcoin mining — how it works, hardware options, and economics.",
    url: "/resources/mining",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin" }],
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}

const hardwareEras = [
  { era: "CPUs (2009–2010)", icon: "💻", desc: "Satoshi and early cypherpunks mined on ordinary laptop and desktop CPUs. Profitable until more participants joined the network." },
  { era: "GPUs (2010–2012)", icon: "🖥️", desc: "Graphics cards proved far faster at the SHA-256 hashing needed for mining. GPU farms made CPU mining obsolete overnight." },
  { era: "FPGAs (2011–2012)", icon: "⚡", desc: "Field-programmable gate arrays offered better efficiency than GPUs. A short-lived transitional era quickly overtaken by ASICs." },
  { era: "ASICs (2013–present)", icon: "🏭", desc: "Application-Specific Integrated Circuits built solely to mine Bitcoin. Billions of times more efficient than CPUs. Today's standard." },
];

const poolVsSolo = [
  { label: "Reward frequency", solo: "Rare — only when you find a block", pool: "Regular — proportional to your hashrate contribution" },
  { label: "Reward size", solo: "Full block reward (3.125 BTC + fees)", pool: "Small, consistent payouts" },
  { label: "Variance", solo: "Extremely high — could be years between rewards", pool: "Low — predictable income stream" },
  { label: "Privacy", solo: "Higher — no pool operator sees your data", pool: "Lower — pool knows your hashrate and payouts" },
  { label: "Setup complexity", solo: "Low to medium", pool: "Low — point your miner at pool URL" },
  { label: "Best for", solo: "Large hashrate operators or philosophical reasons", pool: "Most home miners" },
];

const homeMiningOptions = [
  {
    icon: "🔩",
    label: "Bitaxe",
    tier: "Entry",
    tierColor: "bg-emerald-500/10 text-emerald-600",
    hashrate: "~500 GH/s – 4 TH/s",
    power: "5–15W",
    desc: "Open-source, single-chip ASIC miner. Quiet, efficient, desktop-friendly. Great for learning and supporting the network with minimal electricity cost. Not profitable at scale but excellent educational hardware.",
    link: "https://bitaxe.org",
  },
  {
    icon: "⚙️",
    label: "Antminer S19 / S21 series",
    tier: "Home Pro",
    tierColor: "bg-primary/10 text-primary",
    hashrate: "90–200+ TH/s",
    power: "3,000–3,500W",
    desc: "Industrial-grade ASICs from Bitmain. Significant heat and noise — requires a dedicated space, proper ventilation, and a 240V circuit. Profitability depends entirely on electricity cost.",
    link: "https://shop.bitmain.com",
  },
  {
    icon: "🏠",
    label: "Immersion / DIY builds",
    tier: "Advanced",
    tierColor: "bg-indigo-500/10 text-indigo-500",
    hashrate: "Varies",
    power: "Varies",
    desc: "Overclocked ASICs submerged in dielectric fluid for cooling. Maximizes efficiency and reduces noise significantly. Complex setup — popular among dedicated home miners.",
    link: "https://www.luxor.tech/immersion",
  },
];

const halvingSchedule = [
  { block: "Genesis – 209,999", reward: "50 BTC", date: "2009–2012" },
  { block: "210,000 – 419,999", reward: "25 BTC", date: "2012–2016" },
  { block: "420,000 – 629,999", reward: "12.5 BTC", date: "2016–2020" },
  { block: "630,000 – 839,999", reward: "6.25 BTC", date: "2020–2024" },
  { block: "840,000 – 1,049,999", reward: "3.125 BTC", date: "2024–~2028", current: true },
  { block: "1,050,000+", reward: "1.5625 BTC", date: "~2028–2032", future: true },
];

const resources = [
  { label: "Mining Calculator (NiceHash)", href: "https://www.nicehash.com/profitability-calculator", desc: "Estimate profitability based on your hardware and electricity cost." },
  { label: "Braiins Pool", href: "https://braiins.com/pool", desc: "Transparent, open-source-friendly pool. Operators of Stratum V2." },
  { label: "Ocean Pool", href: "https://ocean.xyz", desc: "Decentralized mining pool co-founded by Luke Dashjr. TIDES payout system." },
  { label: "Mempool Mining Dashboard", href: "https://mempool.space/mining", desc: "Live hashrate, pool distribution, and fee revenue data." },
  { label: "Bitaxe Open Source Miner", href: "https://bitaxe.org", desc: "Open-source single-chip home miner project." },
  { label: "mining.bitcoin.com Calculator", href: "https://mining.bitcoin.com/calculator", desc: "Another profitability estimator with current network data." },
];

export default function MiningPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Mining — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-14">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 mb-4">
                Mining
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Bitcoin Mining
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mining is the process that secures Bitcoin, creates new blocks, and issues new coins. Understanding it is essential to understanding why Bitcoin works.
              </p>
            </div>

            <div className="space-y-16">

              {/* What Is Mining */}
              <section>
                <SectionLabel>Fundamentals</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">What Is Bitcoin Mining?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bitcoin mining is the process by which transactions are bundled into blocks and permanently added to the blockchain. Miners compete to solve a computationally intensive puzzle — the first to solve it earns the right to add the next block and collect the block reward plus transaction fees.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mining serves two critical functions: it <strong className="text-foreground">secures the network</strong> by making it prohibitively expensive to rewrite history, and it <strong className="text-foreground">issues new bitcoin</strong> in a provably fair, decentralized way with no central authority deciding who gets paid.
                </p>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                  <p className="text-xl font-mono text-primary text-center py-2">
                    &ldquo;One CPU, one vote.&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-2">— Satoshi Nakamoto, Bitcoin Whitepaper (2008)</p>
                </div>
              </section>

              {/* Proof of Work */}
              <section>
                <SectionLabel>Consensus Mechanism</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Proof of Work & SHA-256</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Bitcoin uses a consensus mechanism called <strong className="text-foreground">Proof of Work (PoW)</strong>. Miners repeatedly hash block data using the SHA-256 algorithm, tweaking a value called the <em>nonce</em> until the resulting hash falls below the current difficulty target. This is computationally expensive to do but trivially easy for anyone to verify — a key asymmetry that makes Bitcoin work.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: "🎲", label: "The Nonce", desc: "A 32-bit number miners increment with each guess. Combined with block data to produce a unique hash." },
                    { icon: "🎯", label: "Difficulty Target", desc: "A threshold the hash must fall below. Lower target = harder puzzle. Adjusts automatically every ~2 weeks." },
                    { icon: "🔐", label: "SHA-256", desc: "A one-way cryptographic hash function. Even a single character change in the input produces a completely different output." },
                  ].map((item) => (
                    <div key={item.label} className="bg-card border border-border rounded-xl p-5 shadow-card text-center">
                      <span className="text-2xl block mb-2">{item.icon}</span>
                      <h4 className="font-semibold text-foreground text-sm mb-2">{item.label}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hashrate & Difficulty */}
              <section>
                <SectionLabel>Network Health</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Hashrate & Difficulty Adjustment</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  <strong className="text-foreground">Hashrate</strong> is the total computational power pointed at the Bitcoin network — measured in exahashes per second (EH/s). As more miners join and hardware improves, hashrate grows. Bitcoin automatically adjusts mining difficulty every <strong className="text-foreground">2,016 blocks</strong> (approximately every two weeks) to keep the average block time near 10 minutes regardless of how much hashrate is on the network.
                </p>
                <div className="space-y-3">
                  {[
                    { q: "What if blocks are coming too fast?", a: "Difficulty increases — the puzzle gets harder, slowing miners down back toward the 10-minute target." },
                    { q: "What if miners leave and blocks slow down?", a: "Difficulty decreases — the puzzle gets easier, so remaining miners can still find blocks every ~10 minutes." },
                    { q: "Why does this matter?", a: "It means Bitcoin's issuance schedule is predictable and immune to sudden changes in mining participation. The network is self-regulating." },
                  ].map((item) => (
                    <div key={item.q} className="bg-card border border-border rounded-xl p-5 shadow-card">
                      <p className="font-semibold text-foreground text-sm mb-1">{item.q}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <a href="https://mempool.space/graphs/mining/hashrate-difficulty" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                    View live hashrate & difficulty on Mempool.space <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </section>

              {/* Block Rewards & Halving */}
              <section>
                <SectionLabel>Issuance</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Block Rewards & The Halving</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  When a miner successfully adds a block, they earn a <strong className="text-foreground">block reward</strong> — newly created bitcoin — plus all transaction fees from the transactions in that block. The block reward started at 50 BTC in 2009 and <strong className="text-foreground">halves every 210,000 blocks</strong> (~4 years). This halving continues until the last bitcoin is mined around the year 2140, after which miners earn only transaction fees.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Block Range</th>
                        <th className="text-left py-2 pr-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Reward</th>
                        <th className="text-left py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Approximate Dates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {halvingSchedule.map((row) => (
                        <tr key={row.block} className={`border-b border-border/50 ${row.current ? "bg-primary/5" : ""}`}>
                          <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{row.block}</td>
                          <td className={`py-3 pr-4 font-semibold ${row.current ? "text-primary" : row.future ? "text-muted-foreground" : "text-foreground"}`}>
                            {row.reward}
                            {row.current && <span className="ml-2 text-xs font-normal bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">Current</span>}
                          </td>
                          <td className={`py-3 text-sm ${row.future ? "text-muted-foreground italic" : "text-foreground"}`}>{row.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Hardware Evolution */}
              <section>
                <SectionLabel>Hardware</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-6">Mining Hardware Evolution</h3>
                <div className="space-y-3">
                  {hardwareEras.map((era, i) => (
                    <div key={era.era} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span>{era.icon}</span>
                          <h4 className="font-semibold text-foreground text-sm">{era.era}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{era.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Solo vs Pool */}
              <section>
                <SectionLabel>Strategy</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Solo Mining vs Pool Mining</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  Pool mining combines hashrate from many miners to find blocks more consistently and share the reward proportionally. Solo mining means competing alone for the full block reward.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border shadow-card">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Factor</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Solo Mining</th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Pool Mining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {poolVsSolo.map((row, i) => (
                        <tr key={row.label} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
                          <td className="py-3 px-4 font-medium text-foreground text-xs">{row.label}</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">{row.solo}</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">{row.pool}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-accent/30 border border-accent rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Note on solo pools:</span> Services like <a href="https://solo.ckpool.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">CKPool Solo</a> let you mine solo while still connecting through a pool — you keep the full reward if you find a block, with no pool fee, but still face the same high variance.
                  </p>
                </div>
              </section>

              {/* Home Mining */}
              <section>
                <SectionLabel>Home Mining</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Home Mining Options</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  Home mining ranges from hobby-scale open-source hardware to near-industrial ASICs in your garage. Profitability depends heavily on your electricity rate — anything above ~$0.07–0.10/kWh makes it very difficult to profit with current network difficulty.
                </p>
                <div className="space-y-4">
                  {homeMiningOptions.map((opt) => (
                    <div key={opt.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{opt.icon}</span>
                          <h4 className="font-semibold text-foreground">{opt.label}</h4>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${opt.tierColor}`}>{opt.tier}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Hashrate</p>
                          <p className="text-sm font-mono text-foreground">{opt.hashrate}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Power Draw</p>
                          <p className="text-sm font-mono text-foreground">{opt.power}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{opt.desc}</p>
                      <a href={opt.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                        Learn more <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-accent/30 border border-accent rounded-xl p-5">
                  <p className="font-semibold text-foreground mb-2 text-sm">Home Mining Considerations</p>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span> Electricity cost is the dominant factor — know your rate in $/kWh</li>
                    <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span> Industrial ASICs produce significant heat and 70–80 dB of noise</li>
                    <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span> Many home miners repurpose ASIC heat for space or water heating</li>
                    <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span> Mining for philosophical reasons (supporting decentralization) is valid even if not profitable</li>
                  </ul>
                </div>
              </section>

              {/* Economics */}
              <section>
                <SectionLabel>Profitability</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mining Economics</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Mining profitability is a function of four variables: <strong className="text-foreground">hashrate</strong> (your machine&apos;s speed), <strong className="text-foreground">power consumption</strong> (your machine&apos;s energy draw), <strong className="text-foreground">electricity cost</strong> (your rate in $/kWh), and <strong className="text-foreground">network difficulty</strong> (competition from other miners). Bitcoin price matters but is outside your control.
                </p>
                <div className="bg-card border border-border rounded-xl p-5 shadow-card mb-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Break-even electricity rate</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Use a profitability calculator (linked below) with your exact hardware specs and current network difficulty. At current difficulty levels, most home miners need electricity below <strong className="text-foreground">$0.07/kWh</strong> to break even. Industrial miners in low-cost regions (hydro, flare gas, stranded energy) operate at $0.02–0.04/kWh.
                  </p>
                </div>
                <div className="bg-accent/30 border border-accent rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Long-term view:</span> Many serious home miners view it as a form of dollar-cost-averaging into Bitcoin with the bonus of earning transaction fees and supporting the network&apos;s decentralization — not purely as a profit play.
                  </p>
                </div>
              </section>

              {/* Resources */}
              <section>
                <SectionLabel>Go Deeper</SectionLabel>
                <h3 className="text-2xl font-bold text-foreground mb-5">Mining Resources</h3>
                <div className="space-y-3">
                  {resources.map((r) => (
                    <a
                      key={r.label}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-200 group"
                    >
                      <div>
                        <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
