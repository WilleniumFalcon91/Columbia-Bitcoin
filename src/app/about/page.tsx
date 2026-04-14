import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Columbia, SC Bitcoin — a grassroots meetup for anyone interested in Bitcoin as a tool for individual freedom and protection against monetary debasement. Founded in 2024.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Columbia, SC Bitcoin",
    description:
      "Learn about Columbia, SC Bitcoin — a grassroots meetup for anyone interested in Bitcoin as a tool for individual freedom. Founded 2024.",
    url: "/about",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">About — Columbia, SC Bitcoin</h1>
        <AboutSection />
      </div>
      <RelatedPages current="/about" />
      <Footer />
    </main>
  );
}
