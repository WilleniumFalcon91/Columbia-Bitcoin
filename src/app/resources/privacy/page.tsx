import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PrivacySection from "@/components/PrivacySection";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import { ChevronLeft } from "lucide-react";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin & Web Privacy Resources",
  description:
    "Curated Bitcoin and web privacy tools, guides, and educational resources — wallets with coin control, no-KYC exchanges, VPNs, encrypted messaging, and more. Recommended by the Columbia, SC Bitcoin community.",
  alternates: { canonical: "/resources/privacy" },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Resources | Columbia, SC Bitcoin",
    description:
      "Bitcoin and web privacy tools and guides — curated by the Columbia, SC Bitcoin community.",
  },
  openGraph: {
    title: "Bitcoin & Web Privacy Resources | Columbia, SC Bitcoin",
    description:
      "Curated Bitcoin and web privacy tools, guides, and educational resources recommended by the Columbia, SC Bitcoin community.",
    url: "/resources/privacy",
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin & Web Privacy | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin & Web Privacy | Columbia, SC Bitcoin" }],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
    { "@type": "ListItem", position: 3, name: "Learn", item: `${siteUrl}/resources/learn` },
    { "@type": "ListItem", position: 4, name: "Privacy", item: `${siteUrl}/resources/privacy` },
  ],
};

export default function PrivacyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="pt-16">
        <ResourcesBreadcrumb />
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
          <Link
            href="/resources/learn"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            All Learn Topics
          </Link>
        </div>
        <PrivacySection />
      </div>
      <RelatedPages current="/resources/privacy" />
      <Footer />
    </main>
  );
}
