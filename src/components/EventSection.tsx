import { Calendar, Clock, MapPin, Users, Beer, MessageSquare, Bot } from "lucide-react";
import type { LumaEvent } from "@/lib/luma";
import RevealOnScroll from "./RevealOnScroll";

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

export default function EventSection({ event }: { event: LumaEvent }) {
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${event.locationName}, ${event.address}`
  )}`;

  return (
    <section id="event" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <RevealOnScroll className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Upcoming Event
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Next Meetup Details
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A casual monthly gathering for Bitcoiners in the Midlands. Come as
            you are — whether you&apos;ve never heard of Bitcoin or you&apos;re running a
            full node.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: event info card */}
          <RevealOnScroll delay={100}>
          <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
            <div className="bg-primary px-6 py-5">
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
                    className="inline-block mt-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Open in Maps →
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
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-orange text-sm font-semibold"
                >
                  RSVP on Luma →
                </a>
              </div>
            </div>
          </div>
          </RevealOnScroll>

          {/* Right: agenda */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mb-6">
              What to Expect
            </h3>
            {agenda.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-200">
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
      </div>
    </section>
  );
}
