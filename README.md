# Columbia, SC Bitcoin

The official website for the **Columbia, SC Bitcoin Meetup** — a free monthly gathering for Bitcoiners and anyone curious about Bitcoin in Columbia, South Carolina.

Live at: [columbiabitcoin.com](https://www.columbiabitcoin.com)

---

## About

Columbia Bitcoin is a grassroots community meetup held monthly at Savage Craft Ale Works in West Columbia, SC. The site serves as the public-facing landing page for the meetup — covering event details, community info, resources, presentations, and donations.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **QR Codes**: [qrcode.react](https://github.com/zpao/qrcode.react)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + [Google Analytics 4](https://analytics.google.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Event Data**: [Luma API](https://lu.ma) (with static fallback)
- **Contact Form**: [Formspree](https://formspree.io)

---

## Features

- Live Bitcoin price ticker in the navbar (CoinGecko API)
- Matrix rain hero animation on the home page
- Event details pulled from Luma API, refreshed hourly
- Lightning Network donation via Alby (QR code + copyable address)
- BIP47 reusable payment code for on-chain donations
- Bitcoin-accepting businesses map powered by BTCMap
- Bitcoin meetup finder map for locating nearby communities
- Carolinas regional Bitcoin community directory
- Curated education resources (books, podcasts, articles, tools)
- Bitcoin data and charts page (bitbo.io) — live TradingView price chart + curated charts for price history, purchasing power, and long-term appreciation
- Self-custody guide — exchange failure case studies, hot vs. cold storage comparison, hardware wallet recommendations (Coldcard, Passport, Trezor, Jade), and step-by-step setup
- Dollar cost averaging (DCA) guide — investment psychology, DCA vs. market timing data, real Bitcoin return examples, and recommended services (Swan, River, Strike, Cash App)
- Bitcoin privacy and web privacy resources
- Bitcoin mining and node-running resource guides
- Business Bitcoin onboarding resources
- **Philosophy section** — eight topic pages covering the intellectual foundations of Bitcoin: Bitcoin Whitepaper (Satoshi's 7 breakthrough discoveries), Decentralization (Hayek, Ostrom, Taleb, Bitcoin, and Nostr as champions of distributed systems), Hard Money (Austrian economics, 21M cap), Freedom Tech (cypherpunk lineage, Erik Cason), Circular Economy (closing the fiat loop), Bitcoin Fixes This (Cantillon effect, Parker Lewis, Allen Farrington), The Sovereign Individual (Davidson & Rees-Mogg, Knut Svanholm), and Cryptosovereignty (Erik Cason, Nick Szabo)
- Meetup presentations archive (Bitcoin 101, Lightning Network, Sparrow Wallet, BlueWallet)
- Community vibes playlist (YouTube IFrame player with thumbnail carousel)
- Contact form wired to Formspree (Nostr, Signal, and email channels also listed)
- Scroll-reveal animations throughout
- Bitcoin-themed custom 404, error, and global error pages
- Security headers: CSP, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- Dark mode only
- SEO: JSON-LD Event schema, sitemap, robots.txt, Open Graph image
- Back to top button in footer
- Fully responsive

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://www.columbiabitcoin.com`) — used for sitemap, robots.txt, and canonical URLs |
| `LUMA_API_KEY` | Luma API key for fetching live event data. Falls back to hardcoded event details if not set. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for the contact form. Contact form is hidden if not set. |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                         # Root layout, metadata, GA4, Vercel Analytics
│   ├── page.tsx                           # Home page, JSON-LD structured data
│   ├── opengraph-image.png                # OG image (1024×1024)
│   ├── sitemap.ts                         # /sitemap.xml
│   ├── robots.ts                          # /robots.txt
│   ├── error.tsx                          # Error boundary page
│   ├── global-error.tsx                   # Global error boundary
│   ├── not-found.tsx                      # Custom 404 page
│   ├── about/page.tsx                     # About sub-page
│   ├── contact/page.tsx                   # Contact sub-page
│   ├── donate/page.tsx                    # Donate sub-page
│   ├── event/page.tsx                     # Event sub-page
│   ├── presentations/
│   │   ├── page.tsx                       # Presentations hub
│   │   ├── bitcoin-101/page.tsx           # Bitcoin 101 slide deck
│   │   ├── lightning-network/page.tsx     # Lightning Network slide deck
│   │   ├── sparrow-wallet/page.tsx        # Sparrow Wallet slide deck
│   │   └── blue-wallet/page.tsx           # BlueWallet slide deck
│   ├── resources/
│   │   ├── page.tsx                       # Resources hub (grouped: Learn / Data & Tools / Community / Philosophy)
│   │   ├── bitbo/page.tsx                 # Bitcoin data & charts — live price chart + bitbo.io curated charts
│   │   ├── business/page.tsx              # Business Bitcoin onboarding
│   │   ├── dca/page.tsx                   # Dollar cost averaging guide — psychology, data, services
│   │   ├── debt-clock/page.tsx            # US debt clock embed
│   │   ├── education/page.tsx             # Curated Bitcoin education links
│   │   ├── map/page.tsx                   # BTCMap — Bitcoin-accepting businesses
│   │   ├── meetupfinder/page.tsx          # Bitcoin meetup finder map
│   │   ├── mempool/page.tsx               # Mempool explorer embed
│   │   ├── mining/page.tsx                # Bitcoin mining resources
│   │   ├── node/page.tsx                  # Run a node resources
│   │   ├── privacy/page.tsx               # Bitcoin & web privacy resources
│   │   ├── regional/page.tsx              # Carolinas Bitcoin community directory
│   │   ├── self-custody/page.tsx          # Self-custody guide — hardware wallets, hot vs. cold, best practices
│   │   ├── timechain/page.tsx             # Block explorer / timechain calendar embed
│   │   ├── vibes/page.tsx                 # Community YouTube playlist carousel
│   │   └── philosophy/
│   │       ├── page.tsx                   # Philosophy section index
│   │       ├── bitcoin-whitepaper/page.tsx # Satoshi's whitepaper — 7 breakthrough discoveries, proof-of-work, Nakamoto consensus
│   │       ├── decentralization/page.tsx  # Decentralization — Hayek, Ostrom, Taleb, Bitcoin nodes, Nostr protocol
│   │       ├── hard-money/page.tsx        # Hard money theory — Austrian economics, 21M cap, stock-to-flow
│   │       ├── freedom-tech/page.tsx      # Cypherpunk lineage — PGP → Tor → Bitcoin, Erik Cason
│   │       ├── circular-economy/page.tsx  # Bitcoin circular economy — closing the fiat loop
│   │       ├── bitcoin-fixes-this/page.tsx # Cantillon effect, Parker Lewis, Allen Farrington
│   │       ├── sovereign-individual/page.tsx # Davidson & Rees-Mogg prophecy, Knut Svanholm
│   │       └── cryptosovereignty/page.tsx # Erik Cason's cryptosovereignty framework, Nick Szabo
│   └── api/
│       ├── btcmap/route.ts                # Proxy for BTCMap API (Bitcoin-accepting businesses)
│       └── meetup-map/route.ts            # Proxy for meetup finder map data
├── components/
│   ├── Navbar.tsx                         # Nav with BTC price ticker and grouped resources dropdown
│   ├── Hero.tsx                           # Hero section with Matrix rain background
│   ├── MatrixRain.tsx                     # Canvas-based Matrix rain animation
│   ├── EventSection.tsx                   # Next meetup details + what to expect
│   ├── AboutSection.tsx                   # Mission, values, and origin story
│   ├── HomeResourcesSection.tsx           # Grouped resource preview cards on home page
│   ├── ResourcesSection.tsx               # Full resources list
│   ├── ResourcesBreadcrumb.tsx            # Grouped tab breadcrumb nav for resource sub-pages
│   ├── RelatedPages.tsx                   # Related page links
│   ├── RevealOnScroll.tsx                 # Intersection Observer scroll-reveal wrapper
│   ├── BitcoinMap.tsx                     # BTCMap interactive map (business locations)
│   ├── MeetupMap.tsx                      # Bitcoin meetup finder interactive map
│   ├── VibesCarousel.tsx                  # YouTube IFrame player with thumbnail strip
│   ├── PrivacySection.tsx                 # Bitcoin & web privacy resource cards
│   ├── ContactSection.tsx                 # Nostr, Signal, Email contact + Formspree form
│   ├── DonateSection.tsx                  # Lightning QR, address copy, BIP47 code
│   └── Footer.tsx                         # Footer with nav links and back to top
├── lib/
│   ├── luma.ts                            # Luma API fetch with fallback event data
│   └── searchIndex.ts                     # Site-wide search index (Fuse.js)
└── declarations.d.ts                      # Module type declarations
```

---

## Security Headers

Security headers are set globally in `next.config.mjs`:

| Header | Value |
|---|---|
| `Content-Security-Policy` | Allowlist for scripts, frames, images, and connections |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Camera, microphone, and geolocation disabled |

CSP frame allowlist includes `timechaincalendar.com`, `us-debt-clock.com`, `youtube.com`, `youtube-nocookie.com`, `tradingview.com`, and `s.tradingview.com`. Script allowlist includes `googletagmanager.com` and `youtube.com` (required by the YouTube IFrame API).

---

## Deployment

The site is deployed on Vercel and aliased to `columbiabitcoin.com`. To deploy:

```bash
vercel --prod
```
