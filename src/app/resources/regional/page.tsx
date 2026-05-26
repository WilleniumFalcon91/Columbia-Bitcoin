import type { Metadata } from "next";
import { MapPin, ArrowUpRight, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Carolinas Bitcoin Communities",
  description:
    "Bitcoin meetup groups across South Carolina and North Carolina — find your nearest community in Charlotte, Charleston, Greenville, Raleigh, and Asheville.",
  alternates: { canonical: "/resources/regional" },
  twitter: {
    card: "summary_large_image",
    title: "Carolinas Bitcoin Communities | Columbia, SC Bitcoin",
    description:
      "Find Bitcoin meetup communities across South Carolina and North Carolina.",
  },
  openGraph: {
    title: "Carolinas Bitcoin Communities | Columbia, SC Bitcoin",
    description:
      "Bitcoin meetup groups across South Carolina and North Carolina — Charlotte, Charleston, Greenville, Raleigh, and Asheville.",
    url: "/resources/regional",
    images: [{ url: `/api/og?title=${encodeURIComponent("Carolinas Bitcoin Communities | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Carolinas Bitcoin Communities | Columbia, SC Bitcoin" }],
  },
};

type Link = { label: string; href: string };

type Group = {
  name: string;
  city: string;
  state: "SC" | "NC";
  status: "Active" | "Very Active" | "New";
  description: string;
  links: Link[];
};

const groups: Group[] = [
  {
    name: "Bitcoin Charlotte",
    city: "Charlotte",
    state: "NC",
    status: "Very Active",
    description:
      "One of the Southeast's largest Bitcoin communities with 2,500+ members. Runs monthly Saturday Sats Socials, Socratic Seminars, virtual Bitcoin Hangouts (1st Monday each month), and periodic Block Markets. Actively helps local businesses accept Bitcoin.",
    links: [
      { label: "Website", href: "https://bitcoincharlotte.org" },
      { label: "Meetup", href: "https://www.meetup.com/bitcoincharlotte/" },
      { label: "X", href: "https://x.com/bitcoin_clt" },
      { label: "Nostr", href: "https://primal.net/bitcoincharlotte" },
      { label: "Telegram", href: "https://t.me/+6SiWGEy7afpkYzg5" },
    ],
  },
  {
    name: "Bitcoin Charleston",
    city: "Charleston",
    state: "SC",
    status: "Active",
    description:
      "Monthly gatherings in two formats: a Saturday Social at Frothy Beard Brewing (West Ashley) and the Mt. Pleasant Bitcoin Collective at New Realm Brewing. Distributes free copies of The Little Bitcoin Book to newcomers. Run by the Bitcoin Outreach and Education Group.",
    links: [
      { label: "Website", href: "https://bitcoincharleston.org" },
      { label: "Meetup", href: "https://www.meetup.com/charleston-bitcoin-meetup/" },
      { label: "X", href: "https://twitter.com/bitcoin_chs" },
      { label: "Telegram", href: "https://t.me/chsbitcoin" },
    ],
  },
  {
    name: "GVL Bitcoin",
    city: "Greenville",
    state: "SC",
    status: "Active",
    description:
      "Bitcoin-only meetup community for education, conversation, and networking. We generally meet once a month at Steak n Shake where you can spend bitcoin on your meal!",
    links: [
      { label: "Meetup", href: "https://www.meetup.com/gvl-bitcoin-meetup/" },
      { label: "X", href: "https://x.com/GVLBitcoin" },
    ],
  },
  {
    name: "Myrtle Beach Bitcoin",
    city: "Myrtle Beach",
    state: "SC",
    status: "New",
    description:
      "A new Bitcoin community forming on the Grand Strand. Follow them on Nostr to stay updated on upcoming meetups and events in the Myrtle Beach area.",
    links: [
      { label: "Nostr", href: "https://primal.net/p/nprofile1qqsrcd5nhktsu0xmhluuke58zmdqp52crclkcem3cuclvd67a86q8jgccfgsk" },
    ],
  },
  {
    name: "Triangle BitDevs",
    city: "Raleigh / Durham",
    state: "NC",
    status: "Active",
    description:
      "Technical Bitcoin developer meetup for the Research Triangle. Hosts monthly Socratic Seminars (2nd Wednesday) at Fidelity Investments in RTP — drawing topics from Bitcoin GitHub PRs, research papers, and protocol discussion. 53+ seminars since December 2021.",
    links: [
      { label: "Website", href: "https://trianglebitdevs.org" },
      { label: "Luma", href: "https://lu.ma/trianglebitdevs" },
      { label: "X", href: "https://x.com/TriangleBitDevs" },
    ],
  },
  {
    name: "Raleigh Bitcoin Meetup",
    city: "Raleigh",
    state: "NC",
    status: "Active",
    description:
      "Casual weekly Bitcoin gathering at Crafty Beer, Wine & Spirits every Tuesday at 6:30 PM. No RSVP required, no agenda — just Bitcoiners talking Bitcoin. Consistently draws 10–20 attendees each week. Organized by Steve Jeffress, creator of UTXO Oracle.",
    links: [
      { label: "Meetup", href: "https://www.meetup.com/the-raleigh-bitcoin-meetup/" },
    ],
  },
  {
    name: "Asheville Bitcoin",
    city: "Asheville",
    state: "NC",
    status: "New",
    description:
      "A new Bitcoin-only community just getting started in Asheville. Explicitly focused on Bitcoin as money — no altcoins, no price speculation. First meetup held April 2025 at Ginger's Revenge. A good time to get in on the ground floor.",
    links: [
      { label: "Meetup", href: "https://www.meetup.com/asheville-bitcoin-is-money-meetup/" },
    ],
  },
];

const statusStyles: Record<Group["status"], string> = {
  "Very Active": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Active: "bg-primary/10 text-primary",
  New: "bg-indigo-500/10 text-indigo-500",
};

const stateStyles: Record<Group["state"], string> = {
  SC: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  NC: "bg-blue-500/10 text-blue-500",
};

export default function RegionalPage() {
  const scGroups = groups.filter((g) => g.state === "SC");
  const ncGroups = groups.filter((g) => g.state === "NC");

  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <h1 className="sr-only">Carolinas Bitcoin Communities — Columbia, SC Bitcoin</h1>
        <ResourcesBreadcrumb />

        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Your Neighbors
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Carolinas Bitcoin Communities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Bitcoin is growing across South Carolina and North Carolina.
                Whether you&apos;re traveling or looking for a second community,
                these are the groups nearest to Columbia.
              </p>
            </div>

            {/* SC Groups */}
            <GroupSection
              state="South Carolina"
              stateCode="SC"
              groups={scGroups}
            />

            {/* NC Groups */}
            <GroupSection
              state="North Carolina"
              stateCode="NC"
              groups={ncGroups}
            />

            {/* Footer note */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-6 text-center shadow-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <p className="font-semibold text-foreground text-sm">
                  Know a group we&apos;re missing?
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                If there&apos;s an active Bitcoin community in the Carolinas that
                isn&apos;t listed here,{" "}
                <a
                  href="/contact"
                  className="text-primary hover:underline font-medium"
                >
                  let us know
                </a>{" "}
                and we&apos;ll add them.
              </p>
            </div>

          </div>
        </section>
      </div>

      <RelatedPages current="/resources" />
      <Footer />
    </main>
  );
}

function GroupSection({
  state,
  stateCode,
  groups,
}: {
  state: string;
  stateCode: "SC" | "NC";
  groups: Group[];
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stateStyles[stateCode]}`}>
          {stateCode}
        </span>
        <h3 className="text-lg font-bold text-foreground">{state}</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <GroupCard key={group.name} group={group} />
        ))}
      </div>
    </div>
  );
}

function GroupCard({ group }: { group: Group }) {
  const primaryLink = group.links.find((l) => l.label === "Website") ?? group.links[0];

  return (
    <div className="flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-200">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm leading-snug">
              {group.name}
            </p>
            <p className="text-xs text-muted-foreground">{group.city}, {group.state}</p>
          </div>
        </div>
        <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[group.status]}`}>
          {group.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
        {group.description}
      </p>

      {/* Links */}
      <div className="flex flex-wrap gap-2">
        {group.links.map((link) => {
          const isPrimary = link === primaryLink;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-150 ${
                isPrimary
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary border border-border"
              }`}
            >
              {link.label}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
