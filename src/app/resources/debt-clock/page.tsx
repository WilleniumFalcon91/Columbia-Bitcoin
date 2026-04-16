import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "U.S. National Debt Clock",
  description:
    "Live U.S. federal debt and deficit data ticking upward in real time. A visual reminder of why Bitcoin's 21 million hard cap matters.",
  alternates: { canonical: "/resources/debt-clock" },
  twitter: { card: "summary_large_image", title: "U.S. Debt Clock | Columbia, SC Bitcoin", description: "Live federal debt and deficit data — a real-time ledger of a monetary system with no hard cap. Bitcoin has 21 million." },
  openGraph: {
    title: "U.S. Debt Clock | Columbia, SC Bitcoin",
    description:
      "Live federal debt and deficit data — a real-time ledger of a monetary system with no hard cap. Bitcoin has 21 million.",
    url: "/resources/debt-clock",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function DebtClockPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">U.S. National Debt Clock — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Live Data
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                U.S. National Debt
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The dollar is being debased in real time. Every figure you see
                below is ticking upward — a live ledger of a monetary system
                with no spending limit and no hard cap. Bitcoin has 21 million.
                This has no ceiling.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
              <iframe
                src="https://www.us-debt-clock.com/"
                title="U.S. National Debt Clock — live federal debt and deficit data"
                className="w-full h-[500px] sm:h-[650px] lg:h-[800px]"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-4">
              Powered by{" "}
              <a
                href="https://www.us-debt-clock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                us-debt-clock.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
