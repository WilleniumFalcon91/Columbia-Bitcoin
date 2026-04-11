import { Shield, Globe, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Education First",
    description:
      "We are passionate about teaching people about what Bitcoin is and how it works.",
  },
  {
    icon: Users,
    title: "Open Community",
    description:
      "Whether you've just heard about Bitcoin and want to learn more or you have been around since before the Blocksize Wars, you belong here.",
  },
  {
    icon: Shield,
    title: "Self-Sovereignty",
    description:
      "We believe Bitcoin is a peer-to-peer digital cash that does not rely on trusting a third party. Bitcoin is not an investment or a get-rich-quick scheme. Bitcoin is MONEY that is permissionless, censorship-resistant, and seizure-resistant. We believe strongly in the phrase \"not your keys, not your coins\". We teach self-custody, privacy and security best practices, and using Bitcoin as money.",
  },
  {
    icon: Globe,
    title: "Local Roots",
    description:
      "This meetup was started in 2024 out of a passion for Bitcoin and a desire to meet other Bitcoiners in person. We hope to continue building relationships with like-minded individuals and growing the Columbia, SC Bitcoin community.",
  },
];

const stats = [
  { value: "Aug 2024", label: "Est." },
  { value: "All", label: "Are Welcome" },
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
            Bitcoin in Columbia, SC
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Columbia, SC Bitcoin Meetup is a grassroots meetup group for anyone
            interested in Bitcoin as a tool for individual freedom and protection
            against monetary debasement.
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
              Columbia, SC Bitcoin Meetup was started in 2024 out of a desire to
              discuss Bitcoin and freedom tech with people in person. Although
              there are ample communities and platforms online to discuss
              Bitcoin, there was not an active in-person Bitcoin meetup within
              2 hours of Columbia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We feel strongly about the importance of meeting like-minded
              individuals in person and learning more about a technology that
              takes some power back from the state and returns it to the
              individual: Bitcoin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
