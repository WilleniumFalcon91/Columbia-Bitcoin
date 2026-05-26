import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DonateSection from "@/components/DonateSection";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Columbia, SC Bitcoin with a Lightning payment. Your sats keep the meetups running, the coffee flowing, and the conversations going. On-chain and BIP47 also accepted.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate | Columbia, SC Bitcoin",
    description:
      "Support Columbia, SC Bitcoin with a Lightning payment. Your sats keep the meetups running. On-chain and BIP47 also accepted.",
    url: "/donate",
    images: [{ url: `/api/og?title=${encodeURIComponent("Donate | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Donate | Columbia, SC Bitcoin" }],
  },
};

export default function DonatePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Donate — Columbia, SC Bitcoin</h1>
        <DonateSection />
      </div>
      <RelatedPages current="/donate" />
      <Footer />
    </main>
  );
}
