"use client";

import { Calendar, Clock, MapPin, ArrowDown } from "lucide-react";
import type { LumaEvent } from "@/lib/luma";

export default function Hero({ event }: { event: LumaEvent }) {
  const scrollToEvent = () => {
    document.querySelector("#event")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      </div>

      {/* SC flag background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("https://www.wbtw.com/wp-content/uploads/sites/22/2020/06/sc-flag.jpg?strip=1")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Bitcoin hex grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f7931a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Monthly Bitcoin meetup · Columbia, SC
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-none">
          Columbia, SC{" "}
          <span className="text-primary relative">
            Bitcoin
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C50 3 150 1 298 9"
                stroke="#f7931a"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          A casual monthly meetup for Bitcoiners and anyone interested in
          learning about Bitcoin as a hedge against monetary debasement and tool
          for individual freedom.
        </p>

        {/* Event card */}
        <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl shadow-card p-6 mb-10 text-left">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            Next Meetup
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <span>{event.time}</span>
            </div>
            <div className="flex items-start gap-3 text-foreground">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{event.locationName}</p>
                <p className="text-sm text-muted-foreground">{event.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-150 shadow-card"
          >
            RSVP on Luma →
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-150 shadow-card"
          >
            Learn More
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToEvent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
