import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Columbia, SC Bitcoin. Reach us on Nostr, email, or Signal. Want to propose a talk or workshop? We'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Columbia, SC Bitcoin",
    description:
      "Get in touch with Columbia, SC Bitcoin. Reach us on Nostr, email, or Signal. Propose a talk, ask a question, or just say hello.",
    url: "/contact",
    images: [{ url: `/api/og?title=${encodeURIComponent("Contact | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Contact | Columbia, SC Bitcoin" }],
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Contact — Columbia, SC Bitcoin</h1>
        <ContactSection />
      </div>
      <RelatedPages current="/contact" />
      <Footer />
    </main>
  );
}
