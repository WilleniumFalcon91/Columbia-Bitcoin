import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import GlossaryContent from "@/components/GlossaryContent";
import { TERMS } from "@/lib/glossaryTerms";

export const metadata: Metadata = {
  title: "Bitcoin Glossary — 36 Terms Explained",
  description:
    "36 key Bitcoin terms explained in plain language — blocks, wallets, Lightning, seed phrases, and more. A beginner's reference for the Columbia Bitcoin community.",
  alternates: { canonical: "/resources/glossary" },
  openGraph: {
    title: "Bitcoin Glossary | Columbia, SC Bitcoin",
    description:
      "36 key Bitcoin terms explained in plain language — blocks, wallets, Lightning, seed phrases, and more.",
    url: "/resources/glossary",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("Bitcoin Glossary | Columbia, SC Bitcoin")}`,
        width: 1200,
        height: 630,
        alt: "Bitcoin Glossary | Columbia, SC Bitcoin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Glossary | Columbia, SC Bitcoin",
    description: "36 key Bitcoin terms explained in plain language.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TERMS.map((t) => ({
    "@type": "Question",
    name: t.term,
    acceptedAnswer: {
      "@type": "Answer",
      text: t.definition,
    },
  })),
};

export default function GlossaryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Bitcoin Glossary — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />
        <GlossaryContent />
      </div>
      <RelatedPages current="/resources/glossary" />
      <Footer />
    </main>
  );
}
