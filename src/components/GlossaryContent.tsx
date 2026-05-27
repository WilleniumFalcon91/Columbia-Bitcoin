"use client";

import { useState } from "react";
import { TERMS } from "@/lib/glossaryTerms";
import type { GlossaryCategory } from "@/lib/glossaryTerms";

type Category = "All" | GlossaryCategory;

const CATEGORY_COLORS: Record<string, string> = {
  Network:          "bg-cyan-400/10 text-cyan-400",
  Economics:        "bg-amber-500/10 text-amber-600",
  "Keys & Wallets": "bg-emerald-500/10 text-emerald-600",
  Lightning:        "bg-violet-500/10 text-violet-500",
  Culture:          "bg-primary/10 text-primary",
};

const CATEGORIES: Category[] = ["All", "Network", "Economics", "Keys & Wallets", "Lightning", "Culture"];

export default function GlossaryContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? TERMS
    : TERMS.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Start Here</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Bitcoin Glossary</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            New to Bitcoin? Start with the explainer below, then use the glossary to look up any term you hear.
          </p>
        </div>

        {/* What is Bitcoin */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">₿</div>
            <h3 className="text-xl font-bold text-foreground">What is Bitcoin?</h3>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bitcoin is the world&apos;s first form of digital money that no government, bank, or company controls.
              It was created in 2009 by an anonymous person (or group) under the name Satoshi Nakamoto, and it
              runs on a network of thousands of computers spread across the globe — no headquarters, no CEO, no off switch.
            </p>
            <p>
              Here is the core problem it solves:{" "}
              <span className="text-foreground font-medium">every form of money before Bitcoin required you to trust someone else.</span>{" "}
              You trust the bank to hold your dollars. You trust the government not to print too many.
              You trust the payment processor to let the transaction through. Bitcoin replaces all of that trust with math and code that anyone in the world can verify.
            </p>
            <p>
              Unlike dollars or euros, which governments can create in unlimited quantities, Bitcoin has a hard cap of{" "}
              <span className="text-foreground font-medium">21 million coins — ever.</span>{" "}
              No exceptions. No loopholes. New bitcoin enters circulation only through mining, at a rate that is cut in half every four years, until around 2140 when the last satoshi is mined.
            </p>
            <p>
              It is not a company. It is not a stock. It is a protocol — like the internet — that anyone can use and no one can shut down. You can send bitcoin to anyone on Earth in minutes, without asking a bank for permission, without needing an account, and without it being blocked or reversed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
            {[
              { label: "Fixed Supply", value: "21,000,000 BTC", sub: "Hard cap. No exceptions." },
              { label: "Block Time",   value: "~10 minutes",    sub: "Self-adjusting, always." },
              { label: "Live Since",   value: "Jan 3, 2009",    sub: "15+ years and counting." },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Glossary */}
        <div>
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <h3 className="text-xl font-bold text-foreground">
              Glossary{" "}
              <span className="text-base font-normal text-muted-foreground">
                ({filtered.length} term{filtered.length !== 1 ? "s" : ""})
              </span>
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {TERMS.length} terms defined. Filter by category or scroll the full list.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {filtered.map((item) => (
              <div key={item.term} className="bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-bold text-foreground">{item.term}</p>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ${CATEGORY_COLORS[item.category]}`}>
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 sm:p-10 text-center shadow-card">
          <p className="text-2xl mb-3">🤝</p>
          <h3 className="text-xl font-bold text-foreground mb-3">Still have questions?</h3>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6 text-sm">
            No question is too basic. Everyone in this community was a beginner once. Bring your
            questions — about any term on this page or anything else — to the next meetup.
          </p>
          <a href="/event" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
            See the next event
          </a>
        </div>

      </div>
    </section>
  );
}
