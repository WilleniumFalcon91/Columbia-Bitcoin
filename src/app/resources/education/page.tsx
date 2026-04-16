import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Education Resources",
  description:
    "Curated Bitcoin education for every level — books, podcasts, articles, videos, and tools recommended by the Columbia, SC Bitcoin community.",
  alternates: { canonical: "/resources/education" },
  twitter: { card: "summary_large_image", title: "Bitcoin Education | Columbia, SC Bitcoin", description: "Curated books, podcasts, articles, videos, and tools for every level — from first-timer to seasoned bitcoiner." },
  openGraph: {
    title: "Bitcoin Education | Columbia, SC Bitcoin",
    description:
      "Curated books, podcasts, articles, videos, and tools for every level — from first-timer to seasoned bitcoiner.",
    url: "/resources/education",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function EducationPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Education Resources — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />
        <ResourcesSection />
      </div>
      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
