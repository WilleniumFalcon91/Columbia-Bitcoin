import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Mempool Explorer",
  description:
    "Real-time visibility into Bitcoin's transaction backlog. Track fee rates, block activity, and network congestion as it happens via mempool.space.",
  alternates: { canonical: "/resources/mempool" },
  twitter: { card: "summary_large_image", title: "Bitcoin Mempool | Columbia, SC Bitcoin", description: "Real-time visibility into Bitcoin's transaction backlog. Track fee rates, block activity, and network congestion." },
  openGraph: {
    title: "Bitcoin Mempool | Columbia, SC Bitcoin",
    description:
      "Real-time visibility into Bitcoin's transaction backlog. Track fee rates, block activity, and network congestion.",
    url: "/resources/mempool",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function MempoolPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Mempool Explorer — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
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

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
