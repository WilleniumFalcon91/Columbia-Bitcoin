import { Shield, Globe, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Education First",
    description:
      "We believe the best Bitcoin advocates are well-informed ones. Every meetup includes a focused educational segment, from Bitcoin basics to advanced technical topics.",
  },
  {
    icon: Users,
    title: "Open Community",
    description:
      "No shilling, no tribalism, no gatekeeping. Whether you bought your first sat yesterday or have been running a node for years, you belong here.",
  },
  {
    icon: Shield,
    title: "Self-Sovereignty",
    description:
      "We champion financial autonomy — not your keys, not your coins. We teach self-custody, privacy best practices, and responsible use of the protocol.",
  },
  {
    icon: Globe,
    title: "Local Roots",
    description:
      "Columbia, SC has a growing community of builders, thinkers, and entrepreneurs. We're bringing the Bitcoin conversation home, one meetup at a time.",
  },
];

const stats = [
  { value: "2+", label: "Years Running" },
  { value: "200+", label: "Members" },
  { value: "Monthly", label: "Gatherings" },
  { value: "Free", label: "Always" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bitcoin in the Midlands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Columbia Bitcoin is a grassroots meetup group for anyone curious
            about the world&apos;s first decentralized, censorship-resistant money.
            We gather monthly to learn, debate, and build relationships around
            Bitcoin&apos;s technology, economics, and philosophy.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-5 text-center shadow-card"
            >
              <p className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Origin story */}
        <div className="bg-accent/30 border border-accent rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Columbia Bitcoin started in 2023 as a small gathering of friends
              who wanted to talk about more than just price charts. We were tired
              of mainstream financial media&apos;s surface-level coverage and wanted
              to dig into what makes Bitcoin uniquely powerful: its
              decentralization, its fixed supply, and its role as a tool for
              individual sovereignty.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What began as six people at a coffee shop has grown into a vibrant
              monthly gathering. We&apos;ve hosted developers, economists, retirees,
              students, and small business owners — united by curiosity and a
              belief that sound money matters. Come see what we&apos;re building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
