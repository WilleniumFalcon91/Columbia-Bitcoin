import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Self-Custody Guide",
  description:
    "Not your keys, not your coins. Learn why self-custody matters, the difference between hot and cold storage, and how to protect your Bitcoin with a hardware wallet.",
  alternates: { canonical: "/resources/self-custody" },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Self-Custody | Columbia, SC Bitcoin",
    description:
      "Not your keys, not your coins. Learn how to take full ownership of your Bitcoin with a hardware wallet.",
  },
  openGraph: {
    title: "Bitcoin Self-Custody | Columbia, SC Bitcoin",
    description:
      "Not your keys, not your coins. Learn why self-custody matters, the difference between hot and cold storage, and how to protect your Bitcoin with a hardware wallet.",
    url: "/resources/self-custody",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1024,
        height: 1024,
        alt: "Columbia, SC Bitcoin Meetup",
      },
    ],
  },
};

const exchangeFailures = [
  {
    name: "Mt. Gox",
    year: "2014",
    lost: "650,000 BTC",
    detail:
      "The world's largest Bitcoin exchange at the time was hacked over several years. Customers waited a decade for partial repayment — at prices far below what Bitcoin later reached.",
  },
  {
    name: "Celsius",
    year: "2022",
    lost: "~$4.7B in assets",
    detail:
      "Celsius froze all withdrawals overnight in June 2022 and filed for bankruptcy two months later. Customers had no access to their funds for over a year.",
  },
  {
    name: "BlockFi",
    year: "2022",
    lost: "~$1.2B in claims",
    detail:
      "Filed for bankruptcy in November 2022 following the FTX collapse. Customers who held Bitcoin on BlockFi lost access and faced severe haircuts in recovery.",
  },
  {
    name: "FTX",
    year: "2022",
    lost: "$9B+ deficit",
    detail:
      "FTX, once the second-largest exchange in the world, collapsed in days. Sam Bankman-Fried was convicted of fraud. Creditors received repayments at petition-date prices — roughly $18k — long after Bitcoin recovered to six figures.",
  },
];

const wallets = [
  {
    name: "Coldcard",
    models: "Mk5 / Q",
    emoji: "🟠",
    level: "Advanced",
    levelColor: "bg-rose-500/10 text-rose-500",
    btcOnly: true,
    openSource: true,
    airGapped: true,
    price: "~$157 – $239",
    href: "https://coldcard.com",
    description:
      "The gold standard for Bitcoin security. Completely air-gapped, Bitcoin-only, with open-source and reproducible firmware. The Mk5 is compact; the Q adds a QWERTY keyboard and QR scanner. Preferred by advanced users and long-term holders.",
  },
  {
    name: "Foundation Passport",
    models: "Passport Prime",
    emoji: "🛡️",
    level: "Intermediate",
    levelColor: "bg-amber-500/10 text-amber-600",
    btcOnly: true,
    openSource: true,
    airGapped: true,
    price: "~$349",
    href: "https://foundationdevices.com",
    description:
      "A premium, open-source, Bitcoin-focused hardware wallet built in the USA. The Passport Prime runs KeyOS (a Rust-based microkernel), supports offline operation, and is designed to be fully auditable. Beautiful hardware and outstanding documentation.",
  },
  {
    name: "Trezor Safe 3",
    models: "Safe 3 / Safe 5",
    emoji: "🔒",
    level: "Beginner",
    levelColor: "bg-emerald-500/10 text-emerald-600",
    btcOnly: false,
    openSource: true,
    airGapped: false,
    price: "~$79 – $169",
    href: "https://trezor.io",
    description:
      "The most beginner-friendly hardware wallet with the longest track record. Fully open-source and widely supported. Available in Bitcoin-only firmware. Connects via USB — not air-gapped, but an excellent starting point for most people.",
  },
  {
    name: "Blockstream Jade",
    models: "Jade Core / Jade Plus",
    emoji: "💎",
    level: "Beginner",
    levelColor: "bg-emerald-500/10 text-emerald-600",
    btcOnly: true,
    openSource: true,
    airGapped: true,
    price: "~$99 – $170",
    href: "https://store.blockstream.com",
    description:
      "An open-source, Bitcoin-focused wallet at an accessible price point. The Jade Plus is air-gapped with a camera for QR signing. Uses a 'virtual secure element' via blind oracle encryption. A great value for those who want Bitcoin-only security without the premium price.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose a hardware wallet",
    body: "Pick one of the recommended wallets below based on your experience level and budget. Beginners: start with Trezor Safe 3 or Jade. Intermediate: Passport. Advanced: Coldcard.",
  },
  {
    n: "02",
    title: "Order directly from the manufacturer",
    body: "Only buy from the official manufacturer website. Never buy a used hardware wallet or from a third-party marketplace like eBay — a tampered device could steal your Bitcoin.",
  },
  {
    n: "03",
    title: "Verify the packaging is intact",
    body: "When your device arrives, check the tamper-evident seals and holographic stickers before opening. If anything looks tampered with, contact the manufacturer immediately.",
  },
  {
    n: "04",
    title: "Initialize your device",
    body: "Follow the manufacturer's setup guide. The device will generate a seed phrase — 12 or 24 random words that are the master key to your Bitcoin. Do not rush this step.",
  },
  {
    n: "05",
    title: "Write down your seed phrase — offline only",
    body: "Write your seed phrase on paper (or metal — see best practices below). Never type it into a computer, take a photo, or store it in any cloud service. Your seed phrase is your Bitcoin.",
  },
  {
    n: "06",
    title: "Verify your backup",
    body: "Most devices will ask you to confirm your seed phrase on the device during setup. Take this seriously. A wrong word in your backup means lost Bitcoin if you ever need to recover.",
  },
  {
    n: "07",
    title: "Transfer your Bitcoin off the exchange",
    body: "In your wallet software, generate a receiving address. Send a small test amount first. Verify it arrives. Then move the rest. Once confirmed, you — and only you — control your Bitcoin.",
  },
];

const bestPractices = [
  {
    icon: "📝",
    title: "Never store your seed phrase digitally",
    body: "No photos. No screenshots. No notes apps. No Google Drive. No password manager. The only safe storage is physical — paper or metal.",
  },
  {
    icon: "🔥",
    title: "Use metal backup for long-term storage",
    body: "Paper burns and floods. Metal doesn't. Products like Cryptosteel, Blockplate, or SeedSigner plate backups protect against fire, water, and physical damage. Worth it for any meaningful amount.",
  },
  {
    icon: "📍",
    title: "Store copies in separate locations",
    body: "Keep at least two copies of your seed phrase in different physical locations — your home and a trusted safe deposit box, for example. One fire shouldn't mean total loss.",
  },
  {
    icon: "🔐",
    title: "Consider a passphrase (25th word)",
    body: "Most hardware wallets support an optional passphrase — sometimes called the '25th word' — that adds a second layer of protection. Even if someone finds your seed phrase, they can't access your funds without the passphrase too.",
  },
  {
    icon: "🤫",
    title: "Practice Bitcoin OPSEC",
    body: "Don't tell people how much Bitcoin you own, that you use a hardware wallet, or where your seed phrase is stored. The weakest link in security is often what you share.",
  },
  {
    icon: "🧪",
    title: "Test your recovery before loading funds",
    body: "Before transferring significant funds, do a full recovery test using your seed phrase on a fresh device or via your wallet's recovery flow. Confirm it works before you depend on it.",
  },
];

export default function SelfCustodyPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Self-Custody Guide — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* Header */}
            <div className="text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Sovereignty
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Self-Custody
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                <span className="text-foreground font-semibold">&ldquo;Not your keys, not your coins.&rdquo;</span>
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-3">
                If your Bitcoin sits on an exchange, you don&apos;t actually own Bitcoin — you own an IOU from a company that could freeze, lose, or steal your funds tomorrow. Self-custody means holding your own private keys, making you the sole owner and controller of your Bitcoin.
              </p>
            </div>

            {/* Why it matters — exchange failures */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Why this matters</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Exchanges are not banks. They are not insured by the FDIC. They are not required to hold your Bitcoin in reserve. History has proven, repeatedly, that trusting a third party with your Bitcoin is a bet you will eventually lose.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {exchangeFailures.map((f) => (
                  <div
                    key={f.name}
                    className="bg-card border border-border rounded-2xl p-5 shadow-card"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-foreground">{f.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                          {f.lost}
                        </span>
                        <span className="text-xs text-muted-foreground">{f.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                These are not edge cases. Since Bitcoin was created, hundreds of exchanges and custodians have failed, been hacked, or committed outright fraud.
              </p>
            </div>

            {/* Hot vs Cold */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Hot wallet vs. cold storage</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Once you decide to self-custody, the next question is where to store your keys. There are two categories: hot wallets and cold storage.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Hot */}
                <div className="bg-card border border-orange-500/30 rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-xl">
                      🔥
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Hot Wallet</p>
                      <p className="text-xs text-muted-foreground">Connected to the internet</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>Convenient for frequent transactions</li>
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>Free — software only (e.g. Sparrow, BlueWallet)</li>
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>Good for spending money you need access to</li>
                    <li className="flex gap-2"><span className="text-rose-500 flex-shrink-0">✗</span>Keys exist on an internet-connected device</li>
                    <li className="flex gap-2"><span className="text-rose-500 flex-shrink-0">✗</span>Vulnerable to malware, phishing, remote attacks</li>
                    <li className="flex gap-2"><span className="text-rose-500 flex-shrink-0">✗</span>Not recommended for significant long-term savings</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    Best for: small amounts, day-to-day spending, Lightning Network
                  </p>
                </div>

                {/* Cold */}
                <div className="bg-card border border-blue-500/30 rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
                      ❄️
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Cold Storage</p>
                      <p className="text-xs text-muted-foreground">Offline hardware wallet</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>Private keys never touch the internet</li>
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>Immune to remote hacks and malware</li>
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>Signing happens on a dedicated secure device</li>
                    <li className="flex gap-2"><span className="text-emerald-500 flex-shrink-0">✓</span>The standard for long-term Bitcoin storage</li>
                    <li className="flex gap-2"><span className="text-rose-500 flex-shrink-0">✗</span>Costs $79–$350 for hardware</li>
                    <li className="flex gap-2"><span className="text-rose-500 flex-shrink-0">✗</span>Slightly more friction for sending</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    Best for: anything you&apos;re holding long-term — your savings stack
                  </p>
                </div>
              </div>
            </div>

            {/* Hardware wallet recommendations */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Recommended hardware wallets</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Only buy from the manufacturer&apos;s official website. All four wallets below are open-source and have strong track records in the Bitcoin community.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {wallets.map((w) => (
                  <a
                    key={w.name}
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
                  >
                    <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${w.levelColor}`}>
                      {w.level}
                    </span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-colors">
                        {w.emoji}
                      </div>
                      <div>
                        <p className="font-bold text-foreground group-hover:text-primary transition-colors">{w.name}</p>
                        <p className="text-xs text-muted-foreground">{w.models}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {w.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {w.btcOnly && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          Bitcoin-only
                        </span>
                      )}
                      {w.openSource && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium">
                          Open source
                        </span>
                      )}
                      {w.airGapped && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-medium">
                          Air-gapped
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground">{w.price}</p>
                      <svg
                        className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Step-by-step guide */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">How to set up self-custody</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Follow these steps in order. Take your time — especially on the seed phrase backup. There are no password resets in Bitcoin.
              </p>
              <div className="space-y-4">
                {steps.map((s) => (
                  <div
                    key={s.n}
                    className="flex gap-4 bg-card border border-border rounded-2xl p-5 shadow-card"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary font-mono">{s.n}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best practices */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Best practices</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Getting the hardware is the easy part. How you protect your seed phrase determines whether your Bitcoin stays yours.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {bestPractices.map((p) => (
                  <div
                    key={p.title}
                    className="bg-card border border-border rounded-2xl p-5 shadow-card"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{p.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing CTA */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 text-center shadow-card">
              <p className="text-2xl mb-3">🔑</p>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Your keys. Your Bitcoin. Your responsibility.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6 text-sm">
                Self-custody is not complicated — but it does require care. Take it seriously once and you never have to worry about an exchange blowing up with your Bitcoin inside it. That peace of mind is worth every step of the setup.
              </p>
              <p className="text-xs text-muted-foreground">
                Questions? Bring them to the next{" "}
                <a href="/event" className="text-primary hover:underline">
                  Columbia Bitcoin meetup
                </a>
                . Our community is happy to walk you through it.
              </p>
            </div>

          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
