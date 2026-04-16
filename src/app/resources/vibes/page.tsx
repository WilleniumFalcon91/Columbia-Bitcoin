import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import VibesCarousel from "@/components/VibesCarousel";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Bitcoin Vibes — Community Playlist",
  description:
    "Music handpicked by the Columbia, SC Bitcoin community. You've done the research and understand sound money — now sit back and enjoy.",
  alternates: { canonical: "/resources/vibes" },
  twitter: { card: "summary_large_image", title: "Bitcoin Vibes | Columbia, SC Bitcoin", description: "Music handpicked by the Columbia, SC Bitcoin community. Sit back and enjoy." },
  openGraph: {
    title: "Bitcoin Vibes | Columbia, SC Bitcoin",
    description:
      "Music handpicked by the Columbia, SC Bitcoin community. Sit back and enjoy.",
    url: "/resources/vibes",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default function VibesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Vibes — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
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
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}
