import Link from "next/link";
import { ArrowUpRight, Store } from "lucide-react";
import MerchantDirectory from "@/components/MerchantDirectory";

export default function CircularEconomySection() {
  return (
    <section id="merchants" className="py-12 sm:py-16 lg:py-24 bg-card section-offscreen section-hairline">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="kicker mb-4">
            Circular Economy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Spend Your Sats Locally
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Columbia, SC has Bitcoin-accepting businesses ready for your sats. Discover merchants on the map below, grab a Lightning wallet, and start participating in the circular economy.
          </p>
        </div>

        {/* Merchant directory */}
        <div className="mb-12 sm:mb-16">
          <MerchantDirectory />
        </div>

        {/* Merchant onboarding banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Store className="w-4 h-4 text-primary" />
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">For Local Businesses</p>
            </div>
            <p className="font-bold text-foreground text-lg leading-snug mb-1">
              Start accepting Bitcoin — it&apos;s easier than you think.
            </p>
            <p className="text-sm text-muted-foreground">
              Lightning POS requires no bank account, no chargebacks, and near-zero fees. We&apos;ll help you get set up.
            </p>
          </div>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 flex-shrink-0">
            <Link
              href="/resources/business"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-orange text-sm font-semibold"
            >
              Get started
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://btcmap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Add your business to the map →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
