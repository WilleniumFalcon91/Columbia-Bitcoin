export type ResourceItem = { label: string; href: string };
export type ResourceGroup = { label: string; href: string; items: ResourceItem[] };

export const RESOURCES_GROUPS: ResourceGroup[] = [
  {
    label: "Learn",
    href: "/resources/learn",
    items: [
      { label: "Glossary",     href: "/resources/glossary"     },
      { label: "Education",    href: "/resources/education"    },
      { label: "Self-Custody", href: "/resources/self-custody" },
      { label: "DCA",          href: "/resources/dca"          },
      { label: "Mining",       href: "/resources/mining"       },
      { label: "Run a Node",   href: "/resources/node"         },
      { label: "Privacy",      href: "/resources/privacy"      },
      { label: "Businesses",   href: "/resources/business"     },
    ],
  },
  {
    label: "Data & Tools",
    href: "/resources/data-tools",
    items: [
      { label: "Debt Clock",    href: "/resources/debt-clock"   },
      { label: "Timechain",     href: "/resources/timechain"    },
      { label: "Mempool",       href: "/resources/mempool"      },
      { label: "BTC Charts",    href: "/resources/bitbo"        },
      { label: "BTC Map",       href: "/resources/map"          },
      { label: "Meetup Finder", href: "/resources/meetupfinder" },
    ],
  },
  {
    label: "Presentations",
    href: "/presentations",
    items: [
      { label: "Bitcoin 101",       href: "/presentations/bitcoin-101"       },
      { label: "Lightning Network", href: "/presentations/lightning-network" },
      { label: "Sparrow Wallet",    href: "/presentations/sparrow-wallet"    },
      { label: "BlueWallet",        href: "/presentations/blue-wallet"       },
    ],
  },
  {
    label: "Community",
    href: "/resources/community",
    items: [
      { label: "Carolinas", href: "/resources/regional" },
      { label: "Vibes",     href: "/resources/vibes"    },
    ],
  },
  {
    label: "Philosophy",
    href: "/resources/philosophy",
    items: [
      { label: "Bitcoin Whitepaper",       href: "/resources/philosophy/bitcoin-whitepaper"    },
      { label: "Decentralization",         href: "/resources/philosophy/decentralization"      },
      { label: "Hard Money",               href: "/resources/philosophy/hard-money"            },
      { label: "Freedom Tech",             href: "/resources/philosophy/freedom-tech"          },
      { label: "Circular Economy",         href: "/resources/philosophy/circular-economy"      },
      { label: "Bitcoin Fixes This",       href: "/resources/philosophy/bitcoin-fixes-this"    },
      { label: "The Sovereign Individual", href: "/resources/philosophy/sovereign-individual"  },
      { label: "Cryptosovereignty",        href: "/resources/philosophy/cryptosovereignty"     },
      { label: "Game Theory",              href: "/resources/philosophy/game-theory"           },
    ],
  },
];
