/** @type {import('next').NextConfig} */
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
        hostname: "user-images.githubusercontent.com",
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
              // 'unsafe-inline' required for Next.js hydration scripts and theme blocking script
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.youtube.com",
              "style-src 'self' 'unsafe-inline'",
              // fonts are self-hosted via next/font/google — no external font-src needed
              "font-src 'self'",
              "img-src 'self' https: data: blob:",
              "frame-src https://timechaincalendar.com https://www.us-debt-clock.com https://www.youtube.com https://www.youtube-nocookie.com https://www.tradingview.com https://s.tradingview.com",
              "connect-src 'self' https://api.coingecko.com https://formspree.io https://www.google-analytics.com https://region1.google-analytics.com https://vitals.vercel-insights.com",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
