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

  return (
    <main>
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
