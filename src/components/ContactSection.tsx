"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { ComponentType } from "react";

const NOSTR_NPUB = "npub168h60e5jj0t89kx08fd7x2nee4s2kr0zqqecdrfsdmka9htqn22qepwz7s";

type Channel = {
  icon?: ComponentType<{ className?: string }>;
  imgSrc?: string;
  label: string;
  value: string;
  href: string;
  description: string;
};

const contactChannels: Channel[] = [
  {
    imgSrc: "https://raw.githubusercontent.com/mbarulli/nostr-logo/refs/heads/main/PNG/nostr-icon-purple-transparent-256x256.png",
    label: "Nostr",
    value: NOSTR_NPUB.slice(0, 20) + "…",
    href: `https://primal.net/p/${NOSTR_NPUB}`,
    description: "Find us on Nostr — decentralized and censorship-resistant",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission — wire up to your email service (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question, want to propose a talk, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: contact channels */}
          <div className="space-y-4">
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
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {ch.imgSrc ? (
                      <Image src={ch.imgSrc} alt={ch.label} width={28} height={28} className="object-contain" />
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
                Ideas for a technical workshop or presentation?
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We welcome presentations on any Bitcoin or freedom tech related
                topic. Send us an email with your topic idea or mention it at a
                meetup!
              </p>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-8">
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
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Satoshi Nakamoto"
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
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
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="satoshi@bitcoin.org"
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
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
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="I'd love to give a talk on Lightning..."
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    />
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
