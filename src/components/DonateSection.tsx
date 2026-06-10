"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { Zap, Copy, CheckCheck, ExternalLink, Heart } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { trackDonationAction } from "@/lib/analytics";

const LIGHTNING_ADDRESS = "Blissfulinspiration519440@getalby.com";
const LIGHTNING_URI = `lightning:${LIGHTNING_ADDRESS}`;
const BIP47_CODE = "PM8TJhQi6gQs9xxqhs4LqrVH2StMX9M2sjck8Z5kndoKuocbncWstWn3xdGLega3W6EaW44sVXS5HxTuA4knepbKtbc2K1Uz1LBmDkUScjjpf7SNMVyX";

const donationAmounts = [
  { sats: 1000,  label: "1,000 sats",  desc: "Buy us a coffee ☕",    usd: "≈ $1"  },
  { sats: 5000,  label: "5,000 sats",  desc: "Support a meetup 🎙",   usd: "≈ $5"  },
  { sats: 21000, label: "21,000 sats", desc: "21 million reasons 🧡", usd: "≈ $21" },
  { sats: null,  label: "Custom",      desc: "Any amount helps",       usd: null    },
];


export default function DonateSection() {
  const [copied, setCopied] = useState(false);
  const [copiedBip47, setCopiedBip47] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(LIGHTNING_ADDRESS).then(() => {
      trackDonationAction({ action: "copy_address" });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyBip47 = () => {
    navigator.clipboard.writeText(BIP47_CODE).then(() => {
      trackDonationAction({ action: "copy_bip47" });
      setCopiedBip47(true);
      setTimeout(() => setCopiedBip47(false), 2000);
    });
  };

  return (
    <section id="donate" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Support Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Donate via Lightning ⚡
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-xl mx-auto">
            Columbia, SC Bitcoin is community-funded. Your sats keep the meetups
            running, the coffee flowing, and the conversations going.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: QR + address */}
          <div className="flex flex-col items-center">
            <div className="bg-card border border-border rounded-2xl shadow-card p-8 w-full max-w-sm mx-auto text-center">
              {/* QR Code */}
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white rounded-xl shadow-inner border border-border">
                  <QRCodeSVG
                    value={LIGHTNING_URI}
                    size={220}
                    level="M"
                    includeMargin={false}
                    fgColor="#f7931a"
                    bgColor="#ffffff"
                    imageSettings={{
                      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f7931a'%3E%3Cpath d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'/%3E%3C/svg%3E",
                      height: 48,
                      width: 48,
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
                    <CheckCheck className="w-4 h-4 text-primary icon-pop" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-green-400 font-medium mb-4">
                  Copied to clipboard!
                </p>
              )}

              <p className="text-xs text-muted-foreground mb-3 text-center leading-relaxed">
                Your sats keep the venue booked, the lights on, and the meetups free.
              </p>

              {/* Open in wallet button */}
              <a
                href={LIGHTNING_URI}
                onClick={() => trackDonationAction({ action: "open_wallet" })}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-card"
              >
                <Zap className="w-4 h-4" />
                Open in Wallet
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <p className="text-xs text-muted-foreground mt-3 font-medium">
                Payment is instant — no confirmation needed.
              </p>

              <p className="text-xs text-muted-foreground mt-2">
                Works with any Lightning wallet — Wallet of Satoshi, Phoenix,
                Muun, Alby, and more.
              </p>
            </div>

            {/* Donation amounts */}
            <div className="w-full max-w-sm mx-auto mt-6 grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
              {donationAmounts.map((a, i) => (
                <a
                  key={i}
                  href={
                    a.sats
                      ? `lightning:${LIGHTNING_ADDRESS}?amount=${a.sats}`
                      : LIGHTNING_URI
                  }
                  onClick={() => trackDonationAction({ action: "amount_select", value: a.sats ?? undefined, label: a.label })}
                  className="flex flex-col bg-card border border-border rounded-xl p-4 shadow-card hover:border-primary/40 hover:shadow-card-hover transition-all text-center group"
                >
                  <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                    {a.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {a.desc}
                  </span>
                  {a.usd && (
                    <span className="text-xs text-primary/60 font-medium mt-1">{a.usd}</span>
                  )}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3 w-full max-w-sm mx-auto">
              Opens your Lightning wallet app on mobile.
            </p>
          </div>

          {/* Right: why donate */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  Why Your Support Matters
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your donations cover event space, supplies, and keep the coffee flowing.
              </p>
            </div>

            <div className="bg-accent/30 border border-accent rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">
                Prefer on-chain?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We accept on-chain Bitcoin too. Email us at{" "}
                <a
                  href="mailto:btcwrestle2001@protonmail.com"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  btcwrestle2001@protonmail.com
                </a>{" "}
                and we&apos;ll send you a fresh address. Lightning is preferred for
                small amounts due to fees.
              </p>
              <div className="mt-4 pt-4 border-t border-accent">
                <p className="text-foreground font-semibold mb-2 text-sm">
                  BIP47 Reusable Payment Code
                </p>
                <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-foreground truncate">
                    {BIP47_CODE.slice(0, 24)}…
                  </span>
                  <button
                    onClick={handleCopyBip47}
                    className="flex-shrink-0 p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Copy BIP47 payment code"
                  >
                    {copiedBip47 ? (
                      <CheckCheck className="w-4 h-4 text-primary icon-pop" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedBip47 && (
                  <p className="text-xs text-green-400 font-medium mt-2">
                    Copied to clipboard!
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground italic">
                Columbia, SC Bitcoin is not a registered nonprofit. Donations are
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
