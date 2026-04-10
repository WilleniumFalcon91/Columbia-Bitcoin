import { Calendar, Clock, MapPin, Users, Coffee, MessageSquare, Zap } from "lucide-react";
import type { LumaEvent } from "@/lib/luma";

const agenda = [
  {
    time: "3:00 PM",
    title: "Doors Open & Networking",
    icon: Coffee,
    description: "Grab a drink, head to the rooftop, meet new faces, and catch up with regulars.",
  },
  {
    time: "3:30 PM",
    title: "Bitcoin Discussion",
    icon: MessageSquare,
    description:
      "Open conversation on Bitcoin as a store of value, medium of exchange, and the separation of money and state.",
  },
  {
    time: "4:00 PM",
    title: "Open Forum",
    icon: Users,
    description:
      "Q&A, debate, and peer-to-peer trades. All experience levels welcome — no question is too basic.",
  },
  {
    time: "4:30 PM",
    title: "Lightning Round",
    icon: Zap,
    description:
      "Quick demos, project showcases, and community announcements. Stack sats, build a circular economy.",
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
        <div className="text-center mb-16">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: event info card */}
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  RSVP on Luma →
                </a>
              </div>
            </div>
          </div>

          {/* Right: agenda */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mb-6">
              What to Expect
            </h3>
            {agenda.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-primary font-semibold">
                        {item.time}
                      </span>
                      <h4 className="font-semibold text-foreground text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
