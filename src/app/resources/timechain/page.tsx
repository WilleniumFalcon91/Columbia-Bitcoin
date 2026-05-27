import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Timechain Calendar",
  description:
    "Every Bitcoin block ever mined, laid out as a calendar. A living record of the unbroken chain from the genesis block to today.",
  alternates: { canonical: "/resources/timechain" },
  twitter: { card: "summary_large_image", title: "Bitcoin Timechain | Columbia, SC Bitcoin", description: "Every block ever mined, laid out as a calendar. A living record of Bitcoin's unbroken chain from the genesis block to today." },
  openGraph: {
    title: "Bitcoin Timechain | Columbia, SC Bitcoin",
    description:
      "Every block ever mined, laid out as a calendar. A living record of Bitcoin's unbroken chain from the genesis block to today.",
    url: "/resources/timechain",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Timechain | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Timechain | Columbia, SC Bitcoin" }],
  },
};

export default function TimechainPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <ResourcesBreadcrumb />

        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                The Timechain
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Timechain
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every block ever mined, laid out as a calendar. A living record
                of Bitcoin&apos;s unbroken chain from the genesis block to today.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
              <iframe
                src="https://timechaincalendar.com/en"
                title="Timechain Calendar — Bitcoin block history"
                className="w-full h-[500px] sm:h-[650px] lg:h-[760px]"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-4">
              Powered by{" "}
              <a
                href="https://timechaincalendar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                timechaincalendar.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <RelatedPages current="/resources/timechain" />
      <Footer />
    </main>
  );
}
