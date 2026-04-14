import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";
import { fetchLumaEvent } from "@/lib/luma";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Next Meetup",
  description:
    "Details for the next Columbia, SC Bitcoin meetup — date, time, location at Savage Craft Ale Works, and what to expect. Free to attend, all are welcome.",
  alternates: { canonical: "/event" },
  openGraph: {
    title: "Next Meetup | Columbia, SC Bitcoin",
    description:
      "Details for the next Columbia, SC Bitcoin meetup — date, time, location, and what to expect. Free to attend, all are welcome.",
    url: "/event",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

export default async function EventPage() {
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
      <div className="pt-16">
        <h1 className="sr-only">Next Meetup — Columbia, SC Bitcoin</h1>
        <EventSection event={event} />
      </div>
      <RelatedPages current="/event" />
      <Footer />
    </main>
  );
}
