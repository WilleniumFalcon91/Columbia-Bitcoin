"use client";

import { useState } from "react";
import { Calendar, CalendarPlus, Clock, MapPin, Users, Beer, MessageSquare, Bot, ArrowUpRight, Share2, CheckCheck, BookOpen, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
import type { LumaEvent } from "@/lib/luma";
import RevealOnScroll from "./RevealOnScroll";
import { trackCtaClick, trackOutboundLink } from "@/lib/analytics";

function buildGCalUrl(event: LumaEvent): string {
  const start = new Date(event.startDateISO);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return (
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(event.title)}` +
    `&dates=${fmt(start)}/${fmt(end)}` +
    `&location=${encodeURIComponent(`${event.locationName}, ${event.address}`)}` +
    `&details=${encodeURIComponent("Columbia, SC Bitcoin monthly meetup. Free to attend.")}`
  );
}

const prepLinks = [
  {
    icon: BookOpen,
    label: "Bitcoin Glossary",
    href: "/resources/glossary",
    description: "20 min — learn the vocabulary you'll hear at the meetup.",
  },
  {
    icon: Users,
    label: "Bitcoin 101",
    href: "/presentations/bitcoin-101",
    description: "15 min — why Bitcoin matters and how it works.",
  },
  {
    icon: Zap,
    label: "Lightning Network",
    href: "/resources/lightning",
    description: "10 min — the instant-payment layer you'll see demoed.",
  },
];

const faqs = [
  {
    q: "Do I need to own Bitcoin to attend?",
    a: "Not at all. Many regulars are still deciding. Come curious — leave informed. We won't pressure you to buy anything.",
  },
  {
    q: "Is this only for technical people?",
    a: "No. Every level is welcome. Most conversations are accessible to newcomers, and there's always someone willing to start from the basics.",
  },
  {
    q: "Is it really free?",
    a: "Yes. No ticket, no donation required, no upsell. Buy a drink if you like — we meet at Savage Craft Ale Works — but attendance is completely free.",
  },
  {
    q: "How do I RSVP?",
    a: "Hit the RSVP button above. It takes 30 seconds on Luma. You'll get a reminder email — that's it.",
  },
  {
    q: "How do I join the Signal group?",
    a: "Ask anyone at the meetup for the invite link, or reach out through the Contact page. We'll add you.",
  },
];

const agenda = [
  {
    title: "Hang Out & Network",
    icon: Beer,
    description:
      "Grab a drink, meet new faces, and catch up with regulars. Discuss current events in the Bitcoin space and make peer-to-peer trades.",
  },
  {
    title: "Q&A and Intro to Bitcoin",
    icon: Users,
    description:
      "Newcomers can get set up with their first wallet, receive their first Bitcoin transaction, and ask any questions they may have — no question is too basic.",
  },
  {
    title: "Discuss Bitcoin",
    icon: MessageSquare,
    description:
      "Open conversation on Bitcoin as a store of value, medium of exchange, and the separation of money and state.",
  },
  {
    title: "Technical Discussion",
    icon: Bot,
    description:
      "Share and discuss tools and projects that you are interested in and find useful in the Bitcoin and freedom tech space.",
  },
];

function buildXShareUrl(event: LumaEvent): string {
  const text = `Join us at Columbia Bitcoin — free monthly Bitcoin meetup in West Columbia, SC! 🟠`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(event.url)}`;
}

export default function EventSection({ event }: { event: LumaEvent }) {
  const [copiedNostr, setCopiedNostr] = useState(false);
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${event.locationName}, ${event.address}`
  )}`;
  const gcalUrl = buildGCalUrl(event);
  const xShareUrl = buildXShareUrl(event);

  const handleNostrCopy = () => {
    const text = `Join us at Columbia Bitcoin — free monthly Bitcoin meetup in West Columbia, SC! 🟠 ${event.url}`;
    navigator.clipboard.writeText(text).then(() => {
      trackCtaClick({ label: "Copy for Nostr", section: "event_section", url: event.url });
      setCopiedNostr(true);
      setTimeout(() => setCopiedNostr(false), 2000);
    });
  };

  return (
    <section id="event" className="py-12 sm:py-16 lg:py-24 bg-muted section-offscreen section-hairline">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealOnScroll className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="kicker mb-4">
            Upcoming Event
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Next Meetup Details
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-xl mx-auto">
            A casual monthly gathering for Bitcoiners in the Midlands. Come as
            you are — whether you&apos;ve never heard of Bitcoin or you&apos;re running a
            full node.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: event info card */}
          <RevealOnScroll delay={100}>
          <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-br from-[#f9a234] via-primary to-[#df7b0e] px-6 py-5">
              <h3 className="text-primary-foreground font-bold text-xl">
                {event.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Monthly community gathering
              </p>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    Date
                  </p>
                  <p className="text-foreground font-semibold">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    Time
                  </p>
                  <p className="text-foreground font-semibold">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-foreground font-semibold">
                    {event.locationName}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {event.address}
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOutboundLink({ url: mapUrl, label: "Open in Maps", section: "event_section" })}
                    className="inline-block mt-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Open in Maps <ArrowUpRight className="w-3.5 h-3.5 inline-block ml-0.5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Free to attend.
                  </span>{" "}
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCtaClick({ label: "RSVP on Luma", section: "event_section", url: event.url })}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-orange text-sm font-semibold"
                  >
                    RSVP on Luma <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={gcalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCtaClick({ label: "Add to Calendar", section: "event_section", url: gcalUrl })}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-secondary text-sm font-medium"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    Add to Calendar
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5" /> Share:
                  </span>
                  <a
                    href={xShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCtaClick({ label: "Share on X", section: "event_section", url: xShareUrl })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                    </svg>
                    Share on X
                  </a>
                  <button
                    onClick={handleNostrCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  >
                    {copiedNostr ? (
                      <CheckCheck className="w-3 h-3 text-primary icon-pop" />
                    ) : (
                      <span className="text-violet-400 font-bold text-xs leading-none">N</span>
                    )}
                    {copiedNostr ? "Copied!" : "Copy for Nostr"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          </RevealOnScroll>

          {/* Right: agenda */}
          <div className="space-y-4">
            <RevealOnScroll>
              <h3 className="text-lg font-bold text-foreground mb-6">
                What to Expect
              </h3>
            </RevealOnScroll>
            {agenda.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/20 hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-foreground text-sm">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* New to Bitcoin? Prep for the meetup */}
        <RevealOnScroll delay={500}>
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">New to Bitcoin?</p>
          <h3 className="font-bold text-foreground text-lg mb-2">Start here before you come</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl">
            You don&apos;t need to know anything to attend — but these three short reads will make every conversation at the meetup more rewarding.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {prepLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-2 bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-150"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
        </RevealOnScroll>

        {/* FAQ */}
        <RevealOnScroll delay={600}>
        <div className="mt-10">
          <h3 className="font-bold text-foreground text-lg mb-4">Common questions</h3>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-card border border-border rounded-xl shadow-card overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-muted/50 transition-colors">
                  <p className="font-semibold text-foreground text-sm">{faq.q}</p>
                  <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
