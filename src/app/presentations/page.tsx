import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meetup Presentations | Columbia, SC Bitcoin",
  description:
    "Educational presentations from Columbia Bitcoin meetups — Bitcoin fundamentals, privacy, Lightning Network, and more.",
  alternates: { canonical: "/presentations" },
  openGraph: {
    title: "Meetup Presentations | Columbia, SC Bitcoin",
    description:
      "Educational presentations from Columbia Bitcoin meetups.",
    url: "/presentations",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin" }],
  },
};

type Presentation = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  topicColor: string;
  description: string;
  sections: string[];
};

export const presentations: Presentation[] = [
  {
    slug: "bitcoin-101",
    title: "Bitcoin 101",
    date: "Monthly Meetup",
    topic: "Fundamentals",
    topicColor: "bg-primary/10 text-primary",
    description:
      "A foundational introduction to Bitcoin: what it is, why it matters, its key properties, and how transactions work under the hood. Perfect for newcomers.",
    sections: ["What is Bitcoin?", "Properties of Bitcoin", "Why Bitcoin?", "How Transactions Work", "Bitcoin Wallets"],
  },
];

export default function PresentationsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Learn
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meetup Presentations
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Educational content from our monthly meetups. Each presentation covers a core Bitcoin
                topic in an accessible, discussion-friendly format.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {presentations.map((p) => (
                <Link
                  key={p.slug}
                  href={`/presentations/${p.slug}`}
                  className="group flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.topicColor}`}>
                      {p.topic}
                    </span>
                  </div>
                  <h2 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.sections.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {p.date}
                    </span>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Want to give a presentation?</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
                We welcome talks on any Bitcoin or freedom tech topic. Beginner or advanced — all levels welcome at our monthly meetups.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-orange text-sm font-semibold"
              >
                Propose a Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
