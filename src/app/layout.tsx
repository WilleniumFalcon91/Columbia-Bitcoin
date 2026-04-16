import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Source_Serif_4, Monoton } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-groovy",
  display: "swap",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org").trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Columbia, SC Bitcoin Meetup | Monthly Bitcoin Community",
    template: "%s | Columbia, SC Bitcoin",
  },
  description:
    "Free monthly Bitcoin meetup in Columbia, South Carolina. Join Bitcoiners in the Midlands to learn, discuss, and connect. Every month at Savage Craft Ale Works in West Columbia, SC.",
  keywords: [
    "Bitcoin meetup Columbia SC",
    "Bitcoin Columbia South Carolina",
    "Bitcoin Midlands SC",
    "West Columbia Bitcoin",
    "Bitcoin education South Carolina",
    "Bitcoin community Columbia",
    "free Bitcoin meetup",
    "South Carolina Bitcoin",
  ],
  openGraph: {
    title: "Columbia, SC Bitcoin Meetup",
    description:
      "Free monthly Bitcoin meetup in Columbia, South Carolina. Join Bitcoiners in the Midlands to learn, discuss, and connect.",
    type: "website",
    url: "/",
    siteName: "Columbia, SC Bitcoin",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Columbia, SC Bitcoin Meetup",
    description:
      "Free monthly Bitcoin meetup in Columbia, South Carolina. Join Bitcoiners in the Midlands to learn, discuss, and connect.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sourceSerif4.variable} ${monoton.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMS4S6LNFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMS4S6LNFL');
          `}
        </Script>
      </body>
    </html>
  );
}
