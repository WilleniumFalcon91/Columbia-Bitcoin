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
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + [Google Analytics 4](https://analytics.google.com) (G-QMS4S6LNFL)
- **Deployment**: [Vercel](https://vercel.com)
- **Event Data**: [Luma API](https://lu.ma) (with static fallback)

---

## Features

- Live Bitcoin price ticker in the navbar (CoinGecko API)
- Event details pulled from Luma API, refreshed hourly
- Lightning Network donation via Alby (QR code + copyable address)
- BIP47 reusable payment code for on-chain donations
- Dark/light mode toggle
- Education resources and past meetup slide archive
- SEO: JSON-LD Event schema, sitemap, robots.txt, Open Graph image
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
│   ├── layout.tsx          # Root layout, metadata, GA4, Vercel Analytics
│   ├── page.tsx            # Home page, JSON-LD structured data
│   ├── opengraph-image.tsx # Auto-generated OG image (1200×630)
│   ├── sitemap.ts          # /sitemap.xml
│   └── robots.ts           # /robots.txt
├── components/
│   ├── Navbar.tsx          # Nav with BTC price ticker and theme toggle
│   ├── Hero.tsx            # Hero section with SC flag background
│   ├── EventSection.tsx    # Next meetup details + what to expect
│   ├── AboutSection.tsx    # Mission, values, and origin story
│   ├── ResourcesSection.tsx# Bitcoin education links + past meetup slides
│   ├── ContactSection.tsx  # Nostr, Signal, Email contact cards
│   ├── DonateSection.tsx   # Lightning QR, address copy, BIP47 code
│   └── Footer.tsx
└── lib/
    └── luma.ts             # Luma API fetch with fallback event data
```

---

## Deployment

The site is deployed on Vercel and aliased to `columbiabitcoin.com`. To deploy:

```bash
vercel --prod
```
