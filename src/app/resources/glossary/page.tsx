"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

type Category = "All" | "Network" | "Economics" | "Keys & Wallets" | "Lightning" | "Culture";

const CATEGORY_COLORS: Record<string, string> = {
  Network:         "bg-blue-500/10 text-blue-500",
  Economics:       "bg-amber-500/10 text-amber-600",
  "Keys & Wallets": "bg-emerald-500/10 text-emerald-600",
  Lightning:       "bg-violet-500/10 text-violet-500",
  Culture:         "bg-primary/10 text-primary",
};

const TERMS: { term: string; category: Exclude<Category, "All">; definition: string }[] = [
  {
    term: "21 Million",
    category: "Economics",
    definition:
      "The hard cap on the total number of bitcoin that will ever exist. This number is written permanently into Bitcoin's code. No central bank, government, or developer can change it — it is Bitcoin's most important property.",
  },
  {
    term: "Address",
    category: "Keys & Wallets",
    definition:
      "A string of letters and numbers you share with someone to receive bitcoin — like an email address for money. Every address is derived from your public key, and you can generate as many as you want.",
  },
  {
    term: "Block",
    category: "Network",
    definition:
      "A batch of confirmed Bitcoin transactions bundled together and permanently added to the blockchain approximately every 10 minutes. Each block is chained to the one before it, creating an unbroken history.",
  },
  {
    term: "Block Reward",
    category: "Economics",
    definition:
      "The newly created bitcoin paid to the miner who successfully adds a block. Currently 3.125 BTC per block. This reward cuts in half every four years in an event called the Halving, and will eventually reach zero — at which point miners earn only transaction fees.",
  },
  {
    term: "Blockchain",
    category: "Network",
    definition:
      "The public ledger that records every Bitcoin transaction ever made, all the way back to the first block in 2009. It is shared across thousands of computers worldwide and cannot be altered without redoing an enormous amount of work.",
  },
  {
    term: "Cold Storage",
    category: "Keys & Wallets",
    definition:
      "Keeping your private keys on a device that is never connected to the internet — typically a hardware wallet. Cold storage is immune to remote hacks and is the standard approach for protecting significant long-term savings.",
  },
  {
    term: "Confirmation",
    category: "Network",
    definition:
      "When a transaction is included in a block, it receives one confirmation. Each new block mined on top of it adds another. More confirmations make the transaction increasingly permanent and harder to reverse.",
  },
  {
    term: "Custodial",
    category: "Keys & Wallets",
    definition:
      "When a third party — an exchange, broker, or app — holds your private keys on your behalf. You trust them to give you your bitcoin when you ask. If they are hacked, go bankrupt, or freeze withdrawals, you may lose everything. See: Non-Custodial.",
  },
  {
    term: "DCA (Dollar Cost Averaging)",
    category: "Economics",
    definition:
      "The strategy of buying a fixed dollar amount of bitcoin at regular intervals — weekly, bi-weekly, monthly — regardless of price. It removes the pressure of timing the market and has historically been one of the most effective ways to accumulate bitcoin.",
  },
  {
    term: "Difficulty Adjustment",
    category: "Network",
    definition:
      "Every 2,016 blocks (roughly two weeks), Bitcoin automatically recalibrates how hard it is to mine a block, targeting an average time of 10 minutes. If more miners join, it gets harder. If miners leave, it gets easier. No one controls this — it's self-correcting math.",
  },
  {
    term: "Fiat Currency",
    category: "Economics",
    definition:
      "Government-issued money — US dollars, euros, pounds — that exists because a government declares it legal tender. Unlike Bitcoin, there is no hard supply cap: central banks can and do print more at will, diluting the purchasing power of everyone who holds it.",
  },
  {
    term: "Genesis Block",
    category: "Network",
    definition:
      'The very first block ever mined, created by Satoshi Nakamoto on January 3, 2009. It contained a message embedded in the data: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" — the newspaper headline that day.',
  },
  {
    term: "Halving",
    category: "Economics",
    definition:
      "Every 210,000 blocks (~4 years), the reward miners receive for adding a block is cut in half. This event is hard-coded into Bitcoin and reduces the rate at which new bitcoin enters circulation. Halvings continue until all 21 million bitcoin have been mined, estimated around the year 2140.",
  },
  {
    term: "Hard Cap",
    category: "Economics",
    definition:
      "Bitcoin's absolute maximum supply: 21 million coins. No more can ever be created. This scarcity is enforced by every node on the network running the same rules — not by any government or company.",
  },
  {
    term: "Hardware Wallet",
    category: "Keys & Wallets",
    definition:
      "A physical device — roughly the size of a USB drive — that stores your private keys offline and signs transactions internally without ever exposing your keys to an internet-connected computer. The most secure and practical way for most people to self-custody bitcoin.",
  },
  {
    term: "Hash Rate",
    category: "Network",
    definition:
      "The total computing power being used to mine Bitcoin across the entire network. A higher hash rate means more work is required to attack the network, making Bitcoin more secure. Bitcoin's hash rate has grown from near-zero in 2009 to hundreds of exahashes per second today.",
  },
  {
    term: "HODL",
    category: "Culture",
    definition:
      'Born from a 2013 forum post where a user drunkenly typed "I AM HODLING" instead of "holding," HODL has become Bitcoin shorthand for holding bitcoin long-term rather than selling during price swings. Sometimes expanded as "Hold On for Dear Life."',
  },
  {
    term: "Hot Wallet",
    category: "Keys & Wallets",
    definition:
      "A Bitcoin wallet on a device connected to the internet — a phone app or desktop software. Convenient for small amounts and frequent spending, but more vulnerable than cold storage. Best used like a physical wallet: only carry what you need for near-term use.",
  },
  {
    term: "Lightning Network",
    category: "Lightning",
    definition:
      'A payment network built on top of Bitcoin that enables near-instant, near-zero-fee transactions. Two parties open a payment channel by locking bitcoin on-chain, transact freely off-chain, and settle the final balance back to the blockchain. Think of it as "cash on top of gold" — Bitcoin for everyday spending.',
  },
  {
    term: "Mempool",
    category: "Network",
    definition:
      'Short for "memory pool." The waiting room where unconfirmed transactions sit after being broadcast but before a miner includes them in a block. During busy periods, the mempool grows and fees rise as users compete for limited block space.',
  },
  {
    term: "Mining",
    category: "Network",
    definition:
      "The competitive process of using computing power to solve a mathematical puzzle, validate transactions, and add new blocks to the blockchain. The winning miner earns the block reward. Mining is how new bitcoin enters circulation and how the network secures itself — it requires real-world energy, making fraud extremely expensive.",
  },
  {
    term: "Multisig (Multi-signature)",
    category: "Keys & Wallets",
    definition:
      "A security arrangement that requires multiple private keys to authorize a transaction — for example, 2 of 3 keys must sign. Useful for shared accounts, corporate treasuries, or adding a layer of protection so that one stolen key cannot drain your funds.",
  },
  {
    term: "Node",
    category: "Network",
    definition:
      "A computer running the Bitcoin software that independently downloads and validates every transaction and block according to Bitcoin's rules. Nodes are the backbone of the network. Anyone can run one — a Raspberry Pi is enough. Running your own node is the most sovereign way to use Bitcoin.",
  },
  {
    term: "Non-Custodial",
    category: "Keys & Wallets",
    definition:
      "When you hold your own private keys with no third party involved. You are the sole controller of your bitcoin. Non-custodial wallets require more personal responsibility, but they eliminate the risk of exchange failures, freezes, or fraud. See: Custodial.",
  },
  {
    term: "Peer-to-Peer (P2P)",
    category: "Network",
    definition:
      "A direct connection between two parties without a bank, payment processor, or intermediary in the middle. Bitcoin transactions go directly from one address to another over a global network of nodes — no institution can block, reverse, or censor them.",
  },
  {
    term: "Private Key",
    category: "Keys & Wallets",
    definition:
      "A secret cryptographic number that proves ownership of bitcoin at a specific address and authorizes transactions. Anyone who possesses your private key can spend your bitcoin. It should never leave your hardware wallet or be stored digitally. Your seed phrase is the human-readable form of this key.",
  },
  {
    term: "Proof of Work (PoW)",
    category: "Network",
    definition:
      "Bitcoin's consensus mechanism. To add a block, miners must expend real computing energy to solve a cryptographic puzzle. This makes history expensive to rewrite — an attacker would have to redo all that work. Proof of Work anchors Bitcoin to physical reality in a way no alternative has replicated.",
  },
  {
    term: "Public Key",
    category: "Keys & Wallets",
    definition:
      "A cryptographic key derived from your private key. It is used to generate Bitcoin addresses and can be shared freely — sharing it does not expose your private key. Think of it like a padlock you can hand to anyone so they can lock (send to) your address.",
  },
  {
    term: "Satoshi (sat)",
    category: "Economics",
    definition:
      "The smallest unit of bitcoin: one bitcoin equals 100,000,000 satoshis. Named after Bitcoin's creator. As bitcoin's value grows, pricing things in sats rather than whole coins becomes more practical. 'Stacking sats' means accumulating bitcoin in small increments.",
  },
  {
    term: "Satoshi Nakamoto",
    category: "Culture",
    definition:
      "The pseudonymous person or group who created Bitcoin and published its whitepaper in October 2008. Satoshi mined the genesis block in January 2009 and gradually handed off development to the community before disappearing in 2010. Their true identity has never been confirmed.",
  },
  {
    term: "Seed Phrase",
    category: "Keys & Wallets",
    definition:
      'Also called a recovery phrase or mnemonic: a list of 12 or 24 random words generated when you set up a wallet. This phrase can restore your wallet on any compatible device if yours is lost, stolen, or broken. It is the master key to everything you own in Bitcoin. Never store it digitally. Never share it.',
  },
  {
    term: "Self-Custody",
    category: "Keys & Wallets",
    definition:
      'Taking personal control of your own private keys rather than leaving bitcoin on an exchange or with a custodian. The guiding principle: "Not your keys, not your coins." If you don\'t hold the keys, you don\'t own the bitcoin — you own a promise.',
  },
  {
    term: "Stack Sats",
    category: "Culture",
    definition:
      "Bitcoin slang for regularly accumulating small amounts of bitcoin (satoshis), typically through DCA or earning bitcoin directly. The long-term mindset of building a position incrementally rather than making single large bets.",
  },
  {
    term: "Transaction Fee",
    category: "Network",
    definition:
      "A small amount of bitcoin paid to miners to incentivize them to include your transaction in a block. Fees are determined by supply and demand for block space — they rise when the network is congested and fall when it is quiet. Eventually, fees will be the sole income for miners once all bitcoin is mined.",
  },
  {
    term: "UTXO (Unspent Transaction Output)",
    category: "Network",
    definition:
      "Bitcoin doesn't track balances the way a bank does. Instead, it tracks individual 'coins' — UTXOs — assigned to addresses. Your wallet balance is the sum of all UTXOs you control. When you spend bitcoin, you consume existing UTXOs and create new ones.",
  },
  {
    term: "Wallet",
    category: "Keys & Wallets",
    definition:
      "Software or hardware that manages your private keys and lets you send and receive bitcoin. A common misconception: a wallet doesn't store your bitcoin — your bitcoin lives on the blockchain. The wallet stores the keys that prove you own it. Lose the keys, lose the bitcoin.",
  },
];

const CATEGORIES: Category[] = ["All", "Network", "Economics", "Keys & Wallets", "Lightning", "Culture"];

export default function GlossaryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? TERMS
    : TERMS.filter((t) => t.category === activeCategory);

  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Glossary — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* Header */}
            <div className="text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Start Here
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Bitcoin Glossary
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                New to Bitcoin? Start with the explainer below, then use the glossary to look up any term you hear.
              </p>
            </div>

            {/* What is Bitcoin */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                  ₿
                </div>
                <h3 className="text-xl font-bold text-foreground">What is Bitcoin?</h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bitcoin is the world&apos;s first form of digital money that no government, bank, or company controls.
                  It was created in 2009 by an anonymous person (or group) under the name Satoshi Nakamoto, and it
                  runs on a network of thousands of computers spread across the globe — no headquarters, no CEO,
                  no off switch.
                </p>
                <p>
                  Here is the core problem it solves:{" "}
                  <span className="text-foreground font-medium">
                    every form of money before Bitcoin required you to trust someone else.
                  </span>{" "}
                  You trust the bank to hold your dollars. You trust the government not to print too many.
                  You trust the payment processor to let the transaction through. Bitcoin replaces all of that
                  trust with math and code that anyone in the world can verify.
                </p>
                <p>
                  Unlike dollars or euros, which governments can create in unlimited quantities, Bitcoin has a
                  hard cap of{" "}
                  <span className="text-foreground font-medium">21 million coins — ever.</span>{" "}
                  No exceptions. No loopholes. New bitcoin enters circulation only through mining,
                  at a rate that is cut in half every four years, until around 2140 when the last satoshi is mined.
                </p>
                <p>
                  It is not a company. It is not a stock. It is a protocol — like the internet — that anyone
                  can use and no one can shut down. You can send bitcoin to anyone on Earth in minutes,
                  without asking a bank for permission, without needing an account, and without it being blocked or reversed.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                {[
                  { label: "Fixed Supply", value: "21,000,000 BTC", sub: "Hard cap. No exceptions." },
                  { label: "Block Time",   value: "~10 minutes",    sub: "Self-adjusting, always." },
                  { label: "Live Since",   value: "Jan 3, 2009",    sub: "15+ years and counting." },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="text-lg font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Glossary */}
            <div>
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  Glossary{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    ({filtered.length} term{filtered.length !== 1 ? "s" : ""})
                  </span>
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {TERMS.length} terms defined. Filter by category or scroll the full list.
              </p>

              {/* Category filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                      activeCategory === cat
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Term list */}
              <div className="space-y-3">
                {filtered.map((item) => (
                  <div
                    key={item.term}
                    className="bg-card border border-border rounded-2xl p-5 shadow-card"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="font-bold text-foreground">{item.term}</p>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ${CATEGORY_COLORS[item.category]}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing CTA */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 text-center shadow-card">
              <p className="text-2xl mb-3">🤝</p>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6 text-sm">
                No question is too basic. Everyone in this community was a beginner once. Bring your
                questions — about any term on this page or anything else — to the next meetup.
              </p>
              <a
                href="/event"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                See the next event
              </a>
            </div>

          </div>
        </section>
      </div>

      <RelatedPages current="/resources/glossary" />
      <Footer />
    </main>
  );
}
