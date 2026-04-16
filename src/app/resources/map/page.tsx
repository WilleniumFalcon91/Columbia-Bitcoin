import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

// Leaflet requires window — skip SSR entirely for the map component
const BitcoinMap = dynamic(() => import("@/components/BitcoinMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] sm:h-[560px] lg:h-[640px] rounded-2xl border border-border bg-muted flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-[3px] border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground">Loading map…</p>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Bitcoin Map — Columbia, SC",
  description:
    "Find local businesses in Columbia, SC that accept Bitcoin. Community-sourced merchant data powered by BTCMap.org and OpenStreetMap.",
  alternates: { canonical: "/resources/map" },
  twitter: { card: "summary_large_image", title: "Bitcoin Map — Columbia, SC | Columbia, SC Bitcoin", description: "Find local businesses in Columbia, SC that accept Bitcoin — community-sourced merchant data." },
  openGraph: {
    title: "Bitcoin Map | Columbia, SC Bitcoin",
    description:
      "Find local businesses in Columbia, SC that accept Bitcoin — community-sourced merchant data.",
    url: "/resources/map",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function MapPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Map — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Spend Bitcoin Locally
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Bitcoin Map
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Find businesses near Columbia, SC that accept Bitcoin. Data
                sourced from{" "}
                <a
                  href="https://btcmap.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  BTCMap.org
                </a>{" "}
                — a community-maintained directory of Bitcoin-accepting merchants
                worldwide.
              </p>
            </div>

            <BitcoinMap />
          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
