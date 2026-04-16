# Columbia, SC Bitcoin

The official website for the **Columbia, SC Bitcoin Meetup** — a free monthly gathering for Bitcoiners and anyone curious about Bitcoin in Columbia, South Carolina.

Live at: [columbiabitcoin.com](https://www.columbiabitcoin.com)

---

## About

Columbia Bitcoin is a grassroots community meetup held monthly at Savage Craft Ale Works in West Columbia, SC. The site serves as the public-facing landing page for the meetup — covering event details, community info, resources, and donations.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **QR Codes**: [qrcode.react](https://github.com/zpao/qrcode.react)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + [Google Analytics 4](https://analytics.google.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Event Data**: [Luma API](https://lu.ma) (with static fallback)

---

## Features

- Live Bitcoin price ticker in the navbar (CoinGecko API)
- Matrix rain hero animation on the home page
- Event details pulled from Luma API, refreshed hourly
- Lightning Network donation via Alby (QR code + copyable address)
- BIP47 reusable payment code for on-chain donations
- Bitcoin-accepting businesses map powered by BTCMap
- Education resources and past meetup slide archive
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

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout, metadata, GA4, Vercel Analytics
│   ├── page.tsx                      # Home page, JSON-LD structured data
│   ├── opengraph-image.png           # OG image (1200×630)
│   ├── sitemap.ts                    # /sitemap.xml
│   ├── robots.ts                     # /robots.txt
│   ├── about/page.tsx                # About sub-page
│   ├── contact/page.tsx              # Contact sub-page
│   ├── donate/page.tsx               # Donate sub-page
│   ├── event/page.tsx                # Event sub-page
│   ├── resources/
│   │   ├── page.tsx                  # Resources hub
│   │   ├── debt-clock/page.tsx       # US debt clock embed
│   │   ├── education/page.tsx        # Bitcoin education links
│   │   ├── map/page.tsx              # BTCMap — Bitcoin-accepting businesses
│   │   ├── mempool/page.tsx          # Mempool explorer embed
│   │   ├── timechain/page.tsx        # Block explorer embed
│   │   └── vibes/page.tsx            # Community vibes carousel
│   └── api/
│       └── btcmap/route.ts           # Proxy for BTCMap API
├── components/
│   ├── Navbar.tsx                    # Nav with BTC price ticker
│   ├── Hero.tsx                      # Hero section with Matrix rain background
│   ├── MatrixRain.tsx                # Canvas-based Matrix rain animation
│   ├── EventSection.tsx              # Next meetup details + what to expect
│   ├── AboutSection.tsx              # Mission, values, and origin story
│   ├── HomeResourcesSection.tsx      # Resources preview cards on home page
│   ├── ResourcesSection.tsx          # Full resources list
│   ├── ResourcesBreadcrumb.tsx       # Breadcrumb nav for resources sub-pages
│   ├── RelatedPages.tsx              # Related page links component
│   ├── BitcoinMap.tsx                # BTCMap interactive map component
│   ├── VibesCarousel.tsx             # Community vibes image carousel
│   ├── ContactSection.tsx            # Nostr, Signal, Email contact cards
│   ├── DonateSection.tsx             # Lightning QR, address copy, BIP47 code
│   └── Footer.tsx                    # Footer with nav links and back to top
└── lib/
    └── luma.ts                       # Luma API fetch with fallback event data
```

---

## Deployment

The site is deployed on Vercel and aliased to `columbiabitcoin.com`. To deploy:

```bash
vercel --prod
```
