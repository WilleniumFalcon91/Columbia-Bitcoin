import Link from "next/link";
import { MapPin, Users, Globe, ArrowUpRight, type LucideIcon } from "lucide-react";

type PathCard = {
  icon: LucideIcon;
  iconClass: string;
  borderHover: string;
  ctaClass: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

const PATH_CARDS: PathCard[] = [
  {
    icon: MapPin,
    iconClass: "bg-primary/10 text-primary group-hover:bg-primary/20",
    borderHover: "hover:border-primary/30",
    ctaClass: "text-primary",
    title: "Join Our Meetup",
    description: "We meet monthly in West Columbia — free, open to all, and genuinely fun. Come stack sats with your neighbors.",
    cta: "See the next event",
    href: "/#event",
  },
  {
    icon: Users,
    iconClass: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20",
    borderHover: "hover:border-emerald-500/30",
    ctaClass: "text-emerald-500",
    title: "Carolinas Communities",
    description: "Bitcoin groups across NC and SC — from Charlotte to Charleston, Greenville to the Triangle. Find your closest crew.",
    cta: "Browse Carolinas groups",
    href: "/resources/regional",
  },
  {
    icon: Globe,
    iconClass: "bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20",
    borderHover: "hover:border-cyan-400/30",
    ctaClass: "text-cyan-400",
    title: "Find a Meetup Near You",
    description: "Not in the Carolinas? Browse Bitcoin communities across the US and around the world on the interactive meetup map.",
    cta: "Open the meetup finder",
    href: "/resources/meetupfinder",
  },
];

export default function CommunityPathSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted section-offscreen">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Find Your Community
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bitcoin Is Everywhere
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;d love for you to join or meetup but we&apos;re here to help connect you to Bitcoiners no matter where you live. Whether you&apos;re down the street or across the country, there&apos;s a Bitcoin community for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PATH_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`group flex flex-col bg-card border border-border rounded-2xl p-7 shadow-card hover:shadow-card-hover ${card.borderHover} hover-lift`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${card.iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                <div className={`flex items-center gap-1.5 text-sm font-semibold ${card.ctaClass}`}>
                  {card.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
