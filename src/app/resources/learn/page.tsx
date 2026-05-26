import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ResourcesBreadcrumb from "@/components/ResourcesBreadcrumb";
import RelatedPages from "@/components/RelatedPages";
import Footer from "@/components/Footer";
import {
  BookMarked, BookOpen, ShieldCheck, TrendingUp, Cpu, Server, Store, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Bitcoin",
  description:
    "Your guide from first principles to self-custody — glossary, education, self-custody, dollar cost averaging, mining, running a node, privacy, and Bitcoin for businesses.",
  alternates: { canonical: "/resources/learn" },
  twitter: {
    card: "summary_large_image",
    title: "Learn Bitcoin | Columbia, SC Bitcoin",
    description: "Curated guides covering Bitcoin fundamentals, security, privacy, mining, and how the network works.",
  },
  openGraph: {
    title: "Learn Bitcoin | Columbia, SC Bitcoin",
    description:
      "Your guide from first principles to self-custody — glossary, education, self-custody, DCA, mining, running a node, privacy, and Bitcoin for businesses.",
    url: "/resources/learn",
    images: [{ url: `/api/og?title=${encodeURIComponent("Learn Bitcoin | Columbia, SC Bitcoin")}`, width: 1200, height: 630, alt: "Learn Bitcoin | Columbia, SC Bitcoin" }],
  },
};

type Item = {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
  tag: string;
  tagColor: string;
};

const items: Item[] = [
  {
    href: "/resources/glossary",
    icon: BookMarked,
    label: "Bitcoin Glossary",
    description: "New to Bitcoin? Start here. What Bitcoin is, why it matters, and every term you'll hear defined in plain English.",
    tag: "Start Here",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    href: "/resources/education",
    icon: BookOpen,
    label: "Bitcoin Education",
    description: "Curated books, podcasts, articles, videos, and tools for every level — from first-timer to seasoned bitcoiner.",
    tag: "Curated",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    href: "/resources/self-custody",
    icon: ShieldCheck,
    label: "Self-Custody",
    description: "Not your keys, not your coins. Learn why self-custody matters, hot vs. cold storage, and how to protect your Bitcoin with a hardware wallet.",
    tag: "Sovereignty",
    tagColor: "bg-cyan-500/10 text-cyan-600",
  },
  {
    href: "/resources/dca",
    icon: TrendingUp,
    label: "Dollar Cost Averaging",
    description: "The psychology and proof behind DCA — why it beats timing the market, real Bitcoin return examples, and the best services to stack sats automatically.",
    tag: "Strategy",
    tagColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    href: "/resources/mining",
    icon: Cpu,
    label: "Bitcoin Mining",
    description: "Proof of work, hashrate, difficulty adjustment, halvings, solo vs pool mining, home mining hardware options, and economics.",
    tag: "Technical",
    tagColor: "bg-amber-500/10 text-amber-600",
  },
  {
    href: "/resources/node",
    icon: Server,
    label: "Run a Node",
    description: "The cypherpunk case for running your own node, software options (Umbrel, Start9, Bitcoin Core), hardware, and a getting-started guide.",
    tag: "Sovereignty",
    tagColor: "bg-cyan-500/10 text-cyan-600",
  },
  {
    href: "/resources/privacy",
    icon: ShieldCheck,
    label: "Privacy",
    description: "Bitcoin and web privacy tools and guides — wallets with coin control, no-KYC exchanges, VPNs, encrypted messaging, and more.",
    tag: "Security",
    tagColor: "bg-rose-500/10 text-rose-500",
  },
  {
    href: "/resources/business",
    icon: Store,
    label: "Bitcoin for Businesses",
    description: "Help local businesses accept Bitcoin — payment processors, implementation steps, staff training, success stories, and tax notes.",
    tag: "Commerce",
    tagColor: "bg-violet-500/10 text-violet-600",
  },
];

export default function LearnPage() {
  return (
    <main>
      <Navbar />
      <ResourcesBreadcrumb />
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Learn
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Learn Bitcoin
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your guide from first principles to self-custody. Everything you need to understand Bitcoin, protect your holdings, and build financial sovereignty.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-200"
                >
                  <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-150 pr-16">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-primary">
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      <RelatedPages current="/resources/learn" />
      <Footer />
    </main>
  );
}
