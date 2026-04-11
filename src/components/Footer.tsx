"use client";

import { Bitcoin, Zap } from "lucide-react";

const footerLinks = [
  { label: "Event", href: "#event" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
  { label: "Donate", href: "#donate" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-foreground">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bitcoin className="w-5 h-5 text-white" />
            </div>
            <span>Columbia, SC Bitcoin</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-1">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Columbia, SC Bitcoin. All rights
            reserved.
          </p>
          <p className="font-mono flex items-center gap-1">
            Est. 857221 <Zap className="w-3 h-3 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
