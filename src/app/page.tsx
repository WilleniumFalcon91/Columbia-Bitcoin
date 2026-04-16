import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DonateSection from "@/components/DonateSection";
import HomeResourcesSection from "@/components/HomeResourcesSection";
import Footer from "@/components/Footer";
import { fetchLumaEvent } from "@/lib/luma";

// Sits in the bottom-padding area of the preceding section so no extra whitespace is added.
// The negative top margin pulls it up into the section's own py-24 space.
function SectionPermalink({ href, bg, label }: { href: string; bg: string; label: string }) {
  return (
    <div className={`${bg} -mt-14`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex justify-end">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/50 hover:text-primary transition-colors"
        >
          {label}
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

// Revalidate this page at most every hour so event details stay fresh.
// Remove this line (or set to 0) to always fetch on every request.
export const revalidate = 3600;

export default async function Home() {
  const event = await fetchLumaEvent();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    url: event.url,
    startDate: event.startDateISO,
    location: {
      "@type": "Place",
      name: event.locationName,
      address: {
        "@type": "PostalAddress",
        streetAddress: "430 Center St",
        addressLocality: "West Columbia",
        addressRegion: "SC",
        postalCode: "29169",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Columbia, SC Bitcoin",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://columbiabitcoin.org",
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero event={event} />
      <EventSection event={event} />
      <SectionPermalink href="/event" bg="bg-muted" label="Go to event page" />
      <AboutSection />
      <SectionPermalink href="/about" bg="bg-background" label="Go to about page" />
      <HomeResourcesSection />
      <SectionPermalink href="/resources" bg="bg-background" label="Go to resources page" />
      <ContactSection />
      <SectionPermalink href="/contact" bg="bg-muted" label="Go to contact page" />
      <DonateSection />
      <SectionPermalink href="/donate" bg="bg-background" label="Go to donate page" />
      <Footer />
    </main>
  );
}
