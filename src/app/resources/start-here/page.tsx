import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Start Here — New to Bitcoin? | Columbia, SC Bitcoin",
  description:
    "New to Bitcoin? Follow this guided path — from first principles to holding your own keys. Five focused steps, curated by the Columbia, SC Bitcoin community.",
  alternates: { canonical: "/resources/start-here" },
  twitter: {
    card: "summary_large_image",
    title: "New to Bitcoin? Start Here | Columbia, SC Bitcoin",
    description: "A guided 5-step path from Bitcoin basics to self-custody — curated by the Columbia, SC Bitcoin community.",
  },
  openGraph: {
    title: "New to Bitcoin? Start Here | Columbia, SC Bitcoin",
    description:
      "Five focused steps from first principles to self-custody. The recommended learning path from the Columbia, SC Bitcoin community.",
    url: "/resources/start-here",
    images: [{ url: "/opengraph-image.png", width: 1024, height: 1024, alt: "Columbia, SC Bitcoin Meetup" }],
  },
};

const steps = [
  {
    number: "01",
    title: "Learn the language",
    destination: "Bitcoin Glossary",
    href: "/resources/glossary",
    description:
      "Bitcoin has its own vocabulary. Spend an hour with the Glossary and you'll understand every conversation at the meetup — blocks, UTXOs, Lightning, seed phrases, and 30 more terms defined in plain English.",
    readTime: "20 min",
    tag: "Start Here",
    tagColor: "bg-primary/10 text-primary",
    accent: "border-primary/30",
  },
  {
    number: "02",
    title: "Understand why Bitcoin matters",
    destination: "Bitcoin 101 Presentation",
    href: "/presentations/bitcoin-101",
    description:
      "Bitcoin isn't just digital money. It's a fixed-supply, censorship-resistant, self-sovereign monetary network. This presentation covers the core properties, why people hold it, and how transactions actually work.",
    readTime: "15 min",
    tag: "Foundations",
    tagColor: "bg-blue-500/10 text-blue-500",
    accent: "border-blue-500/30",
  },
  {
    number: "03",
    title: "Start stacking",
    destination: "Dollar Cost Averaging Guide",
    href: "/resources/dca",
    description:
      "Nobody times the market perfectly — not even the experts. Dollar cost averaging removes the stress: buy a fixed amount on a regular schedule and stop worrying about the price. Learn the data, the psychology, and the best services to automate it.",
    readTime: "15 min",
    tag: "Strategy",
    tagColor: "bg-emerald-500/10 text-emerald-600",
    accent: "border-emerald-500/30",
  },
  {
    number: "04",
    title: "Take custody of your Bitcoin",
    destination: "Self-Custody Guide",
    href: "/resources/self-custody",
    description:
      "\"Not your keys, not your coins.\" Keeping Bitcoin on an exchange means trusting someone else not to get hacked, freeze your account, or go bankrupt. This guide walks you through hardware wallets, seed phrases, and best practices for protecting what you've earned.",
    readTime: "25 min",
    tag: "Sovereignty",
    tagColor: "bg-cyan-500/10 text-cyan-600",
    accent: "border-cyan-500/30",
  },
  {
    number: "05",
    title: "Come meet us",
    destination: "Next Meetup",
    href: "/event",
    description:
      "The best way to learn Bitcoin is in community. Come to the next monthly meetup in Columbia, SC — ask questions, meet people at every level, and learn from those who've been on this path longer. It's free, open to everyone, and there's no pressure.",
    readTime: "Free",
    tag: "Community",
    tagColor: "bg-purple-500/10 text-purple-500",
    accent: "border-purple-500/30",
  },
];

const faqs = [
  {
    q: "Do I need to buy Bitcoin before coming to the meetup?",
    a: "Not at all. Many of our best conversations happen with people who are still deciding. Come curious — leave informed.",
  },
  {
    q: "How long does this learning path take?",
    a: "At a relaxed pace, about 90 minutes of reading across all five steps. You can take them over days or weeks — there's no rush.",
  },
  {
    q: "What if I have questions along the way?",
    a: "Bring them to the meetup. Alternatively, reach out through the contact page — we're happy to answer questions directly.",
  },
  {
    q: "I'm technical. Is there a faster track?",
    a: "Skip steps 1–2 if you're already fluent. Head straight to Self-Custody or Run a Node, then explore the Privacy and Mining pages.",
  },
];

export default function StartHerePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Start Here — New to Bitcoin? | Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mb-14">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                New to Bitcoin
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Start Here
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                You found us — now here&apos;s the fastest path from &ldquo;what is Bitcoin?&rdquo; to holding your own keys.
                Five steps, curated by the Columbia Bitcoin community.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-16">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative">
                  {/* Connector line between steps */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-[1.375rem] top-full w-px h-4 bg-border z-10" />
                  )}
                  <div className={`bg-card border ${step.accent} rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200`}>
                    <div className="flex items-start gap-5">
                      {/* Step number */}
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm font-mono">
                        {step.number}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{step.title}</h3>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${step.tagColor}`}>
                            {step.tag}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 font-medium">{step.destination}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {step.readTime}
                          </div>
                          <Link
                            href={step.href}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            {idx === steps.length - 1 ? "See details" : "Read now"}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What's next callout */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7 mb-16">
              <p className="text-lg font-bold text-foreground mb-2">After these five steps</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                You&apos;ll have the fundamentals, a strategy, and your first real Bitcoin in self-custody. From there,
                explore what interests you most — running a node, Bitcoin privacy, mining economics, or helping a
                local business start accepting Bitcoin.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Browse all resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* FAQs */}
            <section>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Questions</p>
              <h3 className="text-2xl font-bold text-foreground mb-6">Common questions from newcomers</h3>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-card border border-border rounded-xl p-5 shadow-card">
                    <p className="font-semibold text-foreground text-sm mb-1.5">{faq.q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </section>
      </div>

      <RelatedPages current="/resources/start-here" />
      <Footer />
    </main>
  );
}
