/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // 'unsafe-inline' required for Next.js hydration + theme blocking script
              // 'unsafe-eval' required in dev only — webpack wraps every module in eval() for source maps
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.youtube.com`,
              "style-src 'self' 'unsafe-inline'",
              // fonts are self-hosted via next/font/google — no external font-src needed
              "font-src 'self'",
              // specific domains only — no wildcard https:
              "img-src 'self' https://img.youtube.com https://raw.githubusercontent.com https://*.tile.openstreetmap.org https://image-cdn-ak.spotifycdn.com https://feeds.fountain.fm data: blob:",
              "media-src 'self'",
              "frame-src https://timechaincalendar.com https://www.us-debt-clock.com https://www.youtube.com https://www.youtube-nocookie.com https://www.tradingview.com https://s.tradingview.com",
              "connect-src 'self' https://api.coingecko.com https://formspree.io https://mempool.space https://www.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
          { key: "X-Content-Type-Options",        value: "nosniff" },
          { key: "X-Frame-Options",               value: "DENY" },
          { key: "X-XSS-Protection",              value: "1; mode=block" },
          { key: "Referrer-Policy",               value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",            value: "camera=(), microphone=(), geolocation=()" },
          // HSTS: 2-year max-age with subdomains (no preload until confirmed HTTPS-only on all subdomains)
          { key: "Strict-Transport-Security",     value: "max-age=63072000; includeSubDomains" },
          { key: "X-DNS-Prefetch-Control",        value: "off" },
          { key: "Cross-Origin-Opener-Policy",    value: "same-origin" },
          // same-site (not same-origin) to cover Vercel preview deployments on different subdomains
          { key: "Cross-Origin-Resource-Policy",  value: "same-site" },
        ],
      },
    ];
  },
};

export default nextConfig;
