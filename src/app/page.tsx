import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DonateSection from "@/components/DonateSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
import { fetchLumaEvent } from "@/lib/luma";

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
    startDate: event.date,
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
      <AboutSection />
      <ResourcesSection />
      <ContactSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
