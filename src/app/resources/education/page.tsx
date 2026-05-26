import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ResourcesSection from "@/components/ResourcesSection";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import { ChevronLeft } from "lucide-react";
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
    images: [{ url: `/api/og?title=${encodeURIComponent("Bitcoin Education | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Bitcoin Education | Columbia, SC Bitcoin" }],
  },
};

export default function EducationPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Education Resources — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
          <Link
            href="/resources/learn"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            All Learn Topics
          </Link>
        </div>
        <ResourcesSection />
      </div>
      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
