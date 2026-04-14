import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ResourcesSection from "@/components/ResourcesSection";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";
import VibesCarousel from "@/components/VibesCarousel";

export const metadata: Metadata = {
  title: "Bitcoin Resources",
  description:
    "Curated Bitcoin education resources for every level — books, podcasts, articles, and tools. Includes a live U.S. Debt Clock, Bitcoin Timechain calendar, Mempool explorer, and a community music playlist. Recommended by the Columbia, SC Bitcoin community.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Bitcoin Resources | Columbia, SC Bitcoin",
    description:
      "Curated Bitcoin education resources for every level — books, podcasts, articles, videos, and tools recommended by the Columbia, SC Bitcoin community.",
    url: "/resources",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Resources — Columbia, SC Bitcoin</h1>
        <ResourcesSection />

        {/* U.S. National Debt — only on the /resources route */}
        <section className="py-24 bg-muted">
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

        {/* Timechain — only on the /resources route */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                The Timechain
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Timechain
              </h2>
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
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
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

        {/* Mempool — only on the /resources route */}
        <section className="py-24 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Live Network Data
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Mempool
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real-time visibility into Bitcoin&apos;s transaction backlog. Track
                fee rates, block activity, and network congestion as it happens.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
              {/* mempool.space sets frame-ancestors 'self' and cannot be iframed.
                  This card links out to the full experience instead. */}
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="max-w-2xl mx-auto text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⛓️</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    mempool.space
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    The open-source Bitcoin mempool and blockchain explorer. Monitor
                    unconfirmed transactions, track fee rates in real time, visualise
                    upcoming blocks, and verify any transaction or address on the network.
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                    {[
                      {
                        label: "Fee Estimator",
                        desc: "Low, medium, and high priority fee recommendations updated every block.",
                      },
                      {
                        label: "Mempool Visualiser",
                        desc: "See pending transactions grouped by fee rate as they wait to be mined.",
                      },
                      {
                        label: "Block Explorer",
                        desc: "Inspect every block, transaction, and address on the Bitcoin timechain.",
                      },
                    ].map((f) => (
                      <div
                        key={f.label}
                        className="bg-background border border-border rounded-xl p-4"
                      >
                        <p className="font-semibold text-foreground text-sm mb-1">
                          {f.label}
                        </p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://mempool.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-150 shadow-card"
                  >
                    Open Mempool Explorer
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-4">
              Powered by{" "}
              <a
                href="https://mempool.space"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                mempool.space
              </a>{" "}
              — open source, self-hostable
            </p>
          </div>
        </section>
      </div>
        {/* Vibes — only on the /resources route */}
        <section className="py-24 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-4 vibes-title">
                {"Vibes".split("").map((char, i) => (
                  <span key={i} className="vibes-letter">
                    {char}
                  </span>
                ))}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                If you&apos;ve made it this far, it&apos;s time to vibe. You&apos;ve
                done the research, you understand sound money — now sit back and
                enjoy some music handpicked by the Columbia, SC Bitcoin community.
              </p>
            </div>

            <VibesCarousel />
          </div>
        </section>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
