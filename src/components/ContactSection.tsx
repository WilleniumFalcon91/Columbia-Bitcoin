"use client";

import { useState, useRef } from "react";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { ComponentType } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { trackFormStart, trackFormSubmit, trackFormSuccess, trackFormError, trackOutboundLink } from "@/lib/analytics";
import { NOSTR_NPUB, TWITTER_URL, CLUB_ORANGE_EMAIL } from "@/lib/social";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const FORMSPREE_ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : null;


type Channel = {
  icon?: ComponentType<{ className?: string }>;
  imgSrc?: string;
  svgIcon?: React.ReactNode;
  label: string;
  value: string;
  href: string;
  description: string;
};

const contactChannels: Channel[] = [
  {
    imgSrc: "https://raw.githubusercontent.com/mbarulli/nostr-logo/refs/heads/main/PNG/nostr-icon-purple-transparent-256x256.png",
    label: "Nostr",
    value: "View on Primal",
    href: `https://primal.net/p/${NOSTR_NPUB}`,
    description: "Find us on Nostr — decentralized and censorship-resistant",
  },
  {
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
    label: "Twitter / X",
    value: "@ColumbiaBitcoin",
    href: TWITTER_URL,
    description: "Follow us on X for meetup announcements and Bitcoin content",
  },
  {
    icon: Mail,
    label: "Club Orange",
    value: CLUB_ORANGE_EMAIL,
    href: `mailto:${CLUB_ORANGE_EMAIL}`,
    description: "Find us on Club Orange — a Bitcoin-native social network",
  },
  {
    icon: Mail,
    label: "Email",
    value: "btcwrestle2001@protonmail.com",
    href: "mailto:btcwrestle2001@protonmail.com",
    description: "For press inquiries, partnerships, or speaking proposals",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStartedRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setError("Contact form is not configured yet. Please email us directly.");
      return;
    }
    trackFormSubmit({ form_id: "contact" });
    setSending(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        trackFormSuccess({ form_id: "contact" });
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({})) as { error?: string };
        trackFormError({ form_id: "contact", error_message: data.error ?? "submission_failed" });
        setError(data.error ?? "Submission failed. Please try again or email us directly.");
      }
    } catch {
      trackFormError({ form_id: "contact", error_message: "network_error" });
      setError("Something went wrong. Please try again or reach out directly via email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-muted section-offscreen">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-muted-foreground lg:text-lg max-w-xl mx-auto">
            Have a question, want to propose a talk, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: contact channels */}
          <RevealOnScroll delay={100} className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Find Us Online
            </h3>
            {contactChannels.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <a
                  key={i}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink({ url: ch.href, label: ch.label, section: "contact_channels" })}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/30 hover-lift group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {ch.imgSrc ? (
                      <Image src={ch.imgSrc} alt={ch.label} width={28} height={28} className="object-contain" />
                    ) : ch.svgIcon ? (
                      ch.svgIcon
                    ) : Icon ? (
                      <Icon className="w-5 h-5 text-primary" />
                    ) : null}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {ch.label}
                    </p>
                    <p
                      className={`text-sm font-mono ${ch.imgSrc ? "" : "text-primary"}`}
                      style={ch.imgSrc ? { color: "#8b5cf6" } : undefined}
                    >
                      {ch.value}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {ch.description}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Signal</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Attend our meetup in person to join our community Signal chat!
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h4 className="font-semibold text-foreground mb-2">
                Propose a topic for a future meetup.
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We welcome presentations on any Bitcoin or freedom tech related
                topic. Send us an email with your topic idea or mention it at a
                meetup!
              </p>
            </div>
          </RevealOnScroll>

          {/* Right: contact form */}
          <RevealOnScroll delay={200} className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    formStartedRef.current = false;
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      disabled={sending}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      onFocus={() => {
                        if (!formStartedRef.current) {
                          formStartedRef.current = true;
                          trackFormStart({ form_id: "contact" });
                        }
                      }}
                      placeholder="Satoshi Nakamoto"
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      disabled={sending}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="satoshi@bitcoin.org"
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      disabled={sending}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="I'd love to give a talk on Lightning..."
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none disabled:opacity-60"
                    />
                  </div>
                  {error && (
                    <p role="alert" className="text-sm text-red-500 rounded-lg bg-red-950/30 border border-red-800 px-4 py-2">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-150 shadow-card disabled:opacity-70"
                  >
                    {sending ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
