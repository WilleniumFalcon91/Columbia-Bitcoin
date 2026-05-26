export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  // Learn
  {
    title: "Start Here — New to Bitcoin?",
    description: "Five focused steps from first principles to self-custody. The recommended learning path for newcomers.",
    href: "/resources/start-here",
    category: "Learn",
    keywords: "beginner newcomer intro introduction guide path roadmap",
  },
  {
    title: "Bitcoin Glossary",
    description: "36 key Bitcoin terms explained in plain language — blocks, wallets, Lightning, seed phrases, and more.",
    href: "/resources/glossary",
    category: "Learn",
    keywords: "terms definitions vocabulary dictionary words explain",
  },
  {
    title: "Bitcoin Education",
    description: "Curated books, podcasts, articles, videos, and tools for every level — from first-timer to seasoned bitcoiner.",
    href: "/resources/education",
    category: "Learn",
    keywords: "books podcasts articles videos courses learning resources",
  },
  {
    title: "Self-Custody Guide",
    description: "Not your keys, not your coins. Hardware wallets, seed phrases, exchange failures, and best practices.",
    href: "/resources/self-custody",
    category: "Learn",
    keywords: "hardware wallet seed phrase coldcard trezor keys custody sovereign",
  },
  {
    title: "Dollar Cost Averaging (DCA)",
    description: "Why DCA beats timing the market — the psychology, data, and best services to stack sats automatically.",
    href: "/resources/dca",
    category: "Learn",
    keywords: "buy investing strategy swan river strike recurring purchase",
  },
  {
    title: "Bitcoin Mining",
    description: "Proof of work, hashrate, difficulty adjustment, halvings, solo vs pool mining, and home mining hardware.",
    href: "/resources/mining",
    category: "Learn",
    keywords: "asic miner hashrate proof of work SHA256 pool halving",
  },
  {
    title: "Run a Bitcoin Node",
    description: "The cypherpunk case for running your own node — software options, hardware, and getting started.",
    href: "/resources/node",
    category: "Learn",
    keywords: "umbrel start9 raspberry pi bitcoin core full node sovereignty",
  },
  {
    title: "Privacy Resources",
    description: "Bitcoin and web privacy tools — coin control wallets, no-KYC exchanges, VPNs, encrypted messaging.",
    href: "/resources/privacy",
    category: "Learn",
    keywords: "sparrow wasabi coinjoin tor vpn signal mullvad no kyc bisq",
  },
  {
    title: "Bitcoin for Businesses",
    description: "Payment processors, implementation steps, staff training, and success stories for merchants.",
    href: "/resources/business",
    category: "Learn",
    keywords: "merchant accept payment BTCPay Strike OpenNode Lightning POS",
  },

  // Data & Tools
  {
    title: "U.S. Debt Clock",
    description: "Live federal debt ticking upward — a ledger of a monetary system with no hard cap.",
    href: "/resources/debt-clock",
    category: "Data & Tools",
    keywords: "national debt deficit dollar inflation federal reserve",
  },
  {
    title: "Bitcoin Timechain Calendar",
    description: "Every Bitcoin block ever mined, visualized as a calendar from genesis to today.",
    href: "/resources/timechain",
    category: "Data & Tools",
    keywords: "blocks calendar history chain genesis halving",
  },
  {
    title: "Mempool Explorer",
    description: "Real-time Bitcoin transaction backlog — fee rates, block activity, and network congestion.",
    href: "/resources/mempool",
    category: "Data & Tools",
    keywords: "mempool fees transactions unconfirmed congestion sat/vbyte",
  },
  {
    title: "Bitcoin Data & Charts",
    description: "Price history, purchasing power, long-term appreciation — curated charts from bitbo.io.",
    href: "/resources/bitbo",
    category: "Data & Tools",
    keywords: "charts price history power law stock to flow drawdown performance",
  },
  {
    title: "Bitcoin Map — Columbia, SC",
    description: "Find local businesses near Columbia, SC that accept Bitcoin — community-sourced merchant data.",
    href: "/resources/map",
    category: "Data & Tools",
    keywords: "merchant map local Columbia South Carolina businesses accept",
  },
  {
    title: "Meetup Finder",
    description: "Discover Bitcoin meetup communities worldwide — 600+ groups mapped from BTCMap.org.",
    href: "/resources/meetupfinder",
    category: "Data & Tools",
    keywords: "meetup groups community worldwide BTCMap global find",
  },

  // Philosophy
  {
    title: "Hard Money",
    description: "Bitcoin's 21M cap and Austrian economics — why sound money matters and how Bitcoin became the hardest money in history.",
    href: "/resources/philosophy/hard-money",
    category: "Philosophy",
    keywords: "sound money Austrian economics Mises Hayek Saifedean Ammous Bitcoin Standard inflation stock to flow 21 million",
  },
  {
    title: "Freedom Tech",
    description: "From the Cypherpunk Manifesto to Bitcoin — censorship resistance, privacy as a right, and technology as liberation.",
    href: "/resources/philosophy/freedom-tech",
    category: "Philosophy",
    keywords: "cypherpunk manifesto Eric Hughes privacy censorship resistant Erik Cason freedom technology PGP Tor permissionless",
  },
  {
    title: "Circular Economy",
    description: "How to earn, spend, and save in Bitcoin — closing the fiat loop and building a self-sustaining Bitcoin economy.",
    href: "/resources/philosophy/circular-economy",
    category: "Philosophy",
    keywords: "circular economy earn spend bitcoin lightning fiat loop merchants Lyn Alden Alex Gladstein Bitcoin Ekasi",
  },
  {
    title: "Bitcoin Fixes This",
    description: "The Cantillon effect, debt monetization, and surveillance capitalism — what's broken and why Bitcoin is the fix.",
    href: "/resources/philosophy/bitcoin-fixes-this",
    category: "Philosophy",
    keywords: "Cantillon effect inflation debt Parker Lewis gradually then suddenly Allen Farrington Bitcoin is Venice hyperbitcoinization Jeff Booth",
  },
  {
    title: "The Sovereign Individual",
    description: "Davidson & Rees-Mogg's 1997 prophecy about digital cash and individual sovereignty — and how Bitcoin fulfills it.",
    href: "/resources/philosophy/sovereign-individual",
    category: "Philosophy",
    keywords: "sovereign individual Davidson Rees-Mogg Knut Svanholm sovereignty mathematics digital cash nation state 1997",
  },
  {
    title: "Cryptosovereignty",
    description: "Erik Cason's framework — why holding your own Bitcoin keys is a political act and a new form of sovereignty.",
    href: "/resources/philosophy/cryptosovereignty",
    category: "Philosophy",
    keywords: "cryptosovereignty Erik Cason keys sovereignty cryptographic truth Nick Szabo self custody political philosophy",
  },

  // Community
  {
    title: "Carolinas Bitcoin Communities",
    description: "Bitcoin meetup groups across South Carolina and North Carolina — Charlotte, Charleston, Greenville, Raleigh, Asheville.",
    href: "/resources/regional",
    category: "Community",
    keywords: "Charlotte Charleston Greenville Raleigh Asheville Myrtle Beach SC NC",
  },
  {
    title: "Vibes",
    description: "Music handpicked by the Columbia, SC Bitcoin community. Sit back and enjoy.",
    href: "/resources/vibes",
    category: "Community",
    keywords: "music playlist community culture",
  },

  // Presentations
  {
    title: "Bitcoin 101",
    description: "A foundational introduction to Bitcoin — what it is, why it matters, its key properties, and how transactions work.",
    href: "/presentations/bitcoin-101",
    category: "Presentations",
    keywords: "intro fundamentals basics properties transactions what is bitcoin",
  },
  {
    title: "Lightning Network Workshop",
    description: "How Lightning works, wallet options, channel management, liquidity, privacy tradeoffs, and real-world uses.",
    href: "/presentations/lightning-network",
    category: "Presentations",
    keywords: "lightning channels nodes invoices wallet Phoenix Breez fast payments",
  },
  {
    title: "Sparrow Wallet Deep Dive",
    description: "Hardware wallet setup, node connection, UTXO coin control, watch-only wallets, and advanced self-custody.",
    href: "/presentations/sparrow-wallet",
    category: "Presentations",
    keywords: "sparrow UTXO coin control coinjoin hardware wallet privacy",
  },
  {
    title: "BlueWallet Guide",
    description: "Beginner-friendly guide to BlueWallet for iPhone and Android — wallet creation, seed backup, sending, and receiving.",
    href: "/presentations/blue-wallet",
    category: "Presentations",
    keywords: "bluewallet mobile iOS Android beginner lightning",
  },

  // Core pages
  {
    title: "Next Meetup",
    description: "See when and where we're meeting next, plus what to expect at a Columbia Bitcoin meetup.",
    href: "/event",
    category: "Event",
    keywords: "meetup date time location West Columbia Savage Craft RSVP agenda",
  },
  {
    title: "About Columbia Bitcoin",
    description: "Our values, mission, and the story behind the monthly Bitcoin meetup in Columbia, SC.",
    href: "/about",
    category: "About",
    keywords: "community values mission education open free South Carolina",
  },
  {
    title: "Contact Us",
    description: "Get in touch, propose a presentation, or join the community on Nostr or Signal.",
    href: "/contact",
    category: "Contact",
    keywords: "contact email nostr signal propose talk message",
  },
  {
    title: "Donate — Support the Meetup",
    description: "Support Columbia Bitcoin with a Lightning payment — any amount helps keep the meetup free.",
    href: "/donate",
    category: "Donate",
    keywords: "donate lightning sats support contribute fund",
  },
];
