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
- **Search**: [Fuse.js](https://fusejs.io) (fuzzy site-wide search)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + [Google Analytics 4](https://analytics.google.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Event Data**: [Luma API](https://lu.ma) (with static fallback)
- **Contact Form**: [Formspree](https://formspree.io)

---

## Features

- Live Bitcoin price ticker in the navbar — proxied through an internal API route to avoid CORS issues with CoinGecko
- Matrix rain hero animation on the home page
- Event details pulled from Luma API, refreshed hourly; JSON-LD Event schema + social share buttons on event page
- Lightning Network donation via Alby (QR code + copyable address)
- BIP47 reusable payment code for on-chain donations
- **Circular economy section** on home page — local Bitcoin-accepting merchants map (BTCMap) with Lightning POS onboarding CTA
- **Find Your Community section** on home page — links to Carolinas regional directories and the presentations archive
- Bitcoin meetup finder map for locating nearby communities
- Carolinas regional Bitcoin community directory
- Curated education resources (books, podcasts, articles, tools)
- **Start Here guided learning path** — five focused steps from first principles to self-custody (~90 minutes)
- Bitcoin Glossary — 36 defined terms with newcomer intro
- Bitcoin data and charts page (bitbo.io) — live TradingView price chart + curated charts for price history, purchasing power, and long-term appreciation
- Self-custody guide — exchange failure case studies, hot vs. cold storage comparison, hardware wallet recommendations (Coldcard, Passport, Trezor, Jade), and step-by-step setup
- Dollar cost averaging (DCA) guide — investment psychology, DCA vs. market timing data, real Bitcoin return examples, and recommended services (Swan, River, Strike, Cash App)
- Bitcoin privacy and web privacy resources
- Bitcoin mining and node-running resource guides
- Business Bitcoin onboarding resources
- Lightning Network resources page
- **Philosophy section** — nine topic pages covering the intellectual foundations of Bitcoin: Bitcoin Whitepaper (Satoshi's 7 breakthrough discoveries), Decentralization (Hayek, Ostrom, Taleb, Bitcoin, and Nostr as champions of distributed systems), Hard Money (Austrian economics, 21M cap), Freedom Tech (cypherpunk lineage, Erik Cason), Circular Economy (closing the fiat loop), Bitcoin Fixes This (Cantillon effect, Parker Lewis, Allen Farrington), The Sovereign Individual (Davidson & Rees-Mogg, Knut Svanholm), Cryptosovereignty (Erik Cason, Nick Szabo), and Game Theory (Nash equilibria, Schelling points, mining incentives)
- **Presentations as a dedicated resource group** — Bitcoin 101, Lightning Network, Sparrow Wallet, BlueWallet; accessible from nav dropdown and breadcrumb
- Community vibes playlist (YouTube IFrame player with thumbnail carousel)
- Contact form wired to Formspree (Nostr, Signal, Club Orange, Twitter/X, and email channels also listed)
- Site-wide fuzzy search (Fuse.js) accessible via Cmd/Ctrl+K or the search button
- Full GA4 + Vercel Analytics event tracking (CTA clicks, nav interactions, search, donations)
- **Fixed breadcrumb navigation** on all resource and presentation pages — tabs + active-group pills attached flush to the navbar with no gap; single source of truth in `lib/resources.ts`
- Scroll-reveal animations throughout
- Live block height in footer linking to the timechain page
- Bitcoin-themed custom 404, error, and global error pages
- Security headers: CSP, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- Web app manifest for PWA install support
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
│   ├── manifest.ts                        # Web app manifest
│   ├── opengraph-image.png                # OG image (1024×1024)
│   ├── sitemap.ts                         # /sitemap.xml
│   ├── robots.ts                          # /robots.txt
│   ├── error.tsx                          # Error boundary page
│   ├── global-error.tsx                   # Global error boundary
│   ├── not-found.tsx                      # Custom 404 page
│   ├── about/page.tsx                     # About sub-page
│   ├── contact/page.tsx                   # Contact sub-page
│   ├── donate/page.tsx                    # Donate sub-page
│   ├── event/page.tsx                     # Event sub-page with share buttons and JSON-LD
│   ├── presentations/
│   │   ├── page.tsx                       # Presentations hub (resource group)
│   │   ├── bitcoin-101/page.tsx           # Bitcoin 101 slide deck
│   │   ├── lightning-network/page.tsx     # Lightning Network slide deck
│   │   ├── sparrow-wallet/page.tsx        # Sparrow Wallet slide deck
│   │   └── blue-wallet/page.tsx           # BlueWallet slide deck
│   ├── resources/
│   │   ├── page.tsx                       # Resources hub (groups: Learn / Data & Tools / Presentations / Community / Philosophy)
│   │   ├── start-here/page.tsx            # Guided learning path — 5 steps from first principles to self-custody
│   │   ├── bitbo/page.tsx                 # Bitcoin data & charts — live price chart + bitbo.io curated charts
│   │   ├── business/page.tsx              # Business Bitcoin onboarding
│   │   ├── dca/page.tsx                   # Dollar cost averaging guide — psychology, data, services
│   │   ├── debt-clock/page.tsx            # US debt clock embed
│   │   ├── education/page.tsx             # Curated Bitcoin education links
│   │   ├── glossary/page.tsx              # Bitcoin glossary — 36 defined terms
│   │   ├── lightning/page.tsx             # Lightning Network resources
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
│   │       ├── cryptosovereignty/page.tsx # Erik Cason's cryptosovereignty framework, Nick Szabo
│   │       └── game-theory/page.tsx       # Nash equilibria, Schelling points, mining incentives
│   └── api/
│       ├── bitcoin-price/route.ts         # Proxy for CoinGecko Bitcoin price (avoids browser CORS)
│       ├── btcmap/route.ts                # Proxy for BTCMap API (Bitcoin-accepting businesses)
│       └── meetup-map/route.ts            # Proxy for meetup finder map data
├── components/
│   ├── Navbar.tsx                         # Nav with BTC price ticker, 4-column resources dropdown, and Merchants link
│   ├── Hero.tsx                           # Hero section with Matrix rain background
│   ├── MatrixRain.tsx                     # Canvas-based Matrix rain animation
│   ├── EventSection.tsx                   # Next meetup details + what to expect
│   ├── AboutSection.tsx                   # Mission, values, and origin story
│   ├── CommunityPathSection.tsx           # Find Your Community section linking to Carolinas directory and presentations
│   ├── CircularEconomySection.tsx         # Merchants section — BTCMap + Lightning POS onboarding CTA
│   ├── MerchantDirectory.tsx              # Local Bitcoin-accepting merchant directory component
│   ├── HomeResourcesSection.tsx           # Resource group cards + Start Here and Presentations featured banners
│   ├── ResourcesSection.tsx               # Full resources list
│   ├── ResourcesBreadcrumb.tsx            # Fixed breadcrumb bar (tabs + pills) for all resource and presentation pages
│   ├── RelatedPages.tsx                   # Related page links
│   ├── RevealOnScroll.tsx                 # Intersection Observer scroll-reveal wrapper
│   ├── SearchModal.tsx                    # Cmd/Ctrl+K fuzzy search modal (Fuse.js)
│   ├── AnalyticsProvider.tsx              # GA4 + Vercel Analytics event tracking context
│   ├── PageTransition.tsx                 # Page transition animation wrapper
│   ├── BitcoinMap.tsx                     # BTCMap interactive map (business locations)
│   ├── MeetupMap.tsx                      # Bitcoin meetup finder interactive map
│   ├── VibesCarousel.tsx                  # YouTube IFrame player with thumbnail strip
│   ├── GlossaryContent.tsx                # Searchable glossary term list
│   ├── PrivacySection.tsx                 # Bitcoin & web privacy resource cards
│   ├── ContactSection.tsx                 # Nostr, Signal, Club Orange, Twitter/X, Email + Formspree form
│   ├── DonateSection.tsx                  # Lightning QR, address copy, BIP47 code
│   └── Footer.tsx                         # Footer with nav links, live block height, and back to top
├── lib/
│   ├── resources.ts                       # Single source of truth for resource group data (shared by Navbar and ResourcesBreadcrumb)
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
