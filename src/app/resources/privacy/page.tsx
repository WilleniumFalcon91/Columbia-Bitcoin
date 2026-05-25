import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacySection from "@/components/PrivacySection";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
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
    images: [
      {
        url: "/opengraph-image.png",
        width: 1024,
        height: 1024,
        alt: "Columbia, SC Bitcoin Meetup",
      },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin & Web Privacy Resources — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />
        <PrivacySection />
      </div>
      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
