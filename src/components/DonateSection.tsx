"use client";

import { useState } from "react";
import { Zap, Copy, CheckCheck, ExternalLink, Heart } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

// Replace with your actual Lightning Address or LNURL
const LIGHTNING_ADDRESS = "columbiabitcoin@getalby.com";
const LIGHTNING_URI = `lightning:${LIGHTNING_ADDRESS}`;

const donationAmounts = [
  { sats: 1000, label: "1,000 sats", desc: "Buy us a coffee ☕" },
  { sats: 5000, label: "5,000 sats", desc: "Support a meetup 🎙" },
  { sats: 21000, label: "21,000 sats", desc: "21 million reasons 🧡" },
  { sats: null, label: "Custom", desc: "Any amount helps" },
];

const uses = [
  "Venue rental and logistics",
  "Educational materials and printing",
  "Speaker travel and honorariums",
  "Recording and livestreaming equipment",
  "Community outreach and marketing",
];

export default function DonateSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(LIGHTNING_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="donate" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Support Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Donate via Lightning ⚡
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Columbia Bitcoin is community-funded. Your sats keep the meetups
            running, the coffee flowing, and the conversations going.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: QR + address */}
          <div className="flex flex-col items-center">
            <div className="bg-card border border-border rounded-2xl shadow-card p-8 w-full max-w-sm mx-auto text-center">
              {/* QR Code */}
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white rounded-xl shadow-inner border border-border">
                  <QRCodeSVG
                    value={LIGHTNING_URI}
                    size={200}
                    level="M"
                    includeMargin={false}
                    fgColor="#f7931a"
                    bgColor="#ffffff"
                    imageSettings={{
                      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f7931a'%3E%3Cpath d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'/%3E%3C/svg%3E",
                      height: 36,
                      width: 36,
                      excavate: true,
                    }}
                  />
                </div>
              </div>

              {/* Lightning badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Lightning Address
                </span>
              </div>

              {/* Address display */}
              <div className="bg-input border border-border rounded-xl px-4 py-3 flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-sm text-foreground truncate">
                  {LIGHTNING_ADDRESS}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Copy Lightning address"
                >
                  {copied ? (
                    <CheckCheck className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-primary font-medium mb-4 animate-pulse">
                  Copied to clipboard!
                </p>
              )}

              {/* Open in wallet button */}
              <a
                href={LIGHTNING_URI}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-card"
              >
                <Zap className="w-4 h-4" />
                Open in Wallet
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <p className="text-xs text-muted-foreground mt-4">
                Works with any Lightning wallet — Wallet of Satoshi, Phoenix,
                Muun, Alby, and more.
              </p>
            </div>

            {/* Donation amounts */}
            <div className="w-full max-w-sm mx-auto mt-6 grid grid-cols-2 gap-3">
              {donationAmounts.map((a, i) => (
                <a
                  key={i}
                  href={
                    a.sats
                      ? `lightning:${LIGHTNING_ADDRESS}?amount=${a.sats}`
                      : LIGHTNING_URI
                  }
                  className="flex flex-col bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/40 hover:shadow-card-hover transition-all text-center group"
                >
                  <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                    {a.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {a.desc}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: why donate */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Why Your Support Matters
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Columbia Bitcoin is 100% volunteer-run and community-funded. We
                never charge admission, never sell sponsorships to companies we
                don&apos;t believe in, and never compromise our educational mission.
                Your donations directly fund every meetup.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h4 className="font-semibold text-foreground mb-4">
                Your sats go toward:
              </h4>
              <ul className="space-y-3">
                {uses.map((use, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/30 border border-accent rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">
                Prefer on-chain?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We accept on-chain Bitcoin too. Email us at{" "}
                <a
                  href="mailto:hello@columbiabitcoin.org"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  hello@columbiabitcoin.org
                </a>{" "}
                and we&apos;ll send you a fresh address. Lightning is preferred for
                small amounts due to fees.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground italic">
                Columbia Bitcoin is not a registered nonprofit. Donations are
                not tax-deductible. All contributions go directly to event costs
                and community activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
