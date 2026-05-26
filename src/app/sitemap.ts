import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org").trim();

// Static content last updated date — bump when a page's content meaningfully changes
const LAST_UPDATED = new Date("2026-05-26");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Dynamic pages — ISR from Luma API, always fresh
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/event`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Core pages
    {
      url: `${siteUrl}/about`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/donate`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // Presentations
    {
      url: `${siteUrl}/presentations`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/presentations/bitcoin-101`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/presentations/lightning-network`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/presentations/sparrow-wallet`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/presentations/blue-wallet`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // Resources hub + learn group
    {
      url: `${siteUrl}/resources/start-here`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources/glossary`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources/education`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/self-custody`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/dca`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/mining`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/node`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/privacy`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/business`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // Data & tools group
    {
      url: `${siteUrl}/resources/debt-clock`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/resources/timechain`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/resources/mempool`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/resources/bitbo`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/resources/map`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/meetupfinder`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Community group
    {
      url: `${siteUrl}/resources/regional`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/resources/vibes`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
