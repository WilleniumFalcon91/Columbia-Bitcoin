import Link from "next/link";
import { Calendar, Users, BookOpen, Mail, Zap } from "lucide-react";

const sections = [
  {
    label: "Next Meetup",
    href: "/event",
    description: "See when and where we're meeting next, plus what to expect at the meetup.",
    icon: Calendar,
  },
  {
    label: "About Us",
    href: "/about",
    description: "Learn about our values, mission, and the story behind the meetup.",
    icon: Users,
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Curated Bitcoin education — books, podcasts, articles, and more.",
    icon: BookOpen,
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch, propose a talk, or join our Signal community.",
    icon: Mail,
  },
  {
    label: "Donate",
    href: "/donate",
    description: "Support the meetup with a Lightning payment — any amount helps.",
    icon: Zap,
  },
];

export default function RelatedPages({ current }: { current: string }) {
  const related = sections.filter((s) => s.href !== current).slice(0, 3);

  return (
    <section className="py-16 bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-8 text-center">
          Explore More
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group flex flex-col bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {section.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
