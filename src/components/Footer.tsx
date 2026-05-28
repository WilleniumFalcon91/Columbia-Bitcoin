"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bitcoin, Zap, ChevronUp, Mail } from "lucide-react";
import { trackOutboundLink } from "@/lib/analytics";

const MEMPOOL_TIP_URL = "https://mempool.space/api/blocks/tip/height";

function useBlockHeight() {
  const [height, setHeight] = useState<number | null>(null);
  useEffect(() => {
    const fetchHeight = async () => {
      try {
        const res = await fetch(MEMPOOL_TIP_URL);
        if (res.ok) setHeight(await res.json());
      } catch { /* silently fail */ }
    };
    fetchHeight();
    const interval = setInterval(fetchHeight, 60_000);
    return () => clearInterval(interval);
  }, []);
  return height;
}

const NOSTR_NPUB = "npub168h60e5jj0t89kx08fd7x2nee4s2kr0zqqecdrfsdmka9htqn22qepwz7s";
const NOSTR_LOGO = "https://raw.githubusercontent.com/mbarulli/nostr-logo/refs/heads/main/PNG/nostr-icon-purple-transparent-256x256.png";
const TWITTER_URL = "https://x.com/ColumbiaBitcoin";

const footerLinks: { label: string; href: string; sectionId?: string }[] = [
  { label: "Event",         href: "/event",         sectionId: "event"     },
  { label: "About",         href: "/about",         sectionId: "about"     },
  { label: "Presentations", href: "/presentations"                         },
  { label: "Resources",     href: "/resources",     sectionId: "resources" },
  { label: "Contact",       href: "/contact",       sectionId: "contact"   },
  { label: "Donate",        href: "/donate",        sectionId: "donate"    },
];

export default function Footer() {
  const blockHeight = useBlockHeight();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollTo = useCallback((sectionId: string) => {
    document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr_1fr] gap-8">

          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col gap-3">
            {isHome ? (
              <div className="flex items-center gap-2 font-bold text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bitcoin className="w-5 h-5 text-white" />
                </div>
                <span>Columbia, SC Bitcoin</span>
              </div>
            ) : (
              <Link href="/" className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bitcoin className="w-5 h-5 text-white" />
                </div>
                <span>Columbia, SC Bitcoin</span>
              </Link>
            )}
            <p className="text-sm text-muted-foreground">
              Columbia, SC&apos;s local Bitcoin community — meeting monthly to learn, connect, and stack sats.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="sm:flex sm:flex-col sm:items-center">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-16 gap-y-1">
              {footerLinks.map((link) =>
                isHome && link.sectionId ? (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.sectionId!)}
                    className="text-left py-1 text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-1 text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="sm:flex sm:flex-col sm:items-end">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={`https://primal.net/p/${NOSTR_NPUB}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Nostr"
                onClick={() => trackOutboundLink({ url: `https://primal.net/p/${NOSTR_NPUB}`, label: "Nostr", section: "footer" })}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Image src={NOSTR_LOGO} alt="" width={16} height={16} className="opacity-70" />
                <span>Nostr</span>
              </a>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X (Twitter)"
                onClick={() => trackOutboundLink({ url: TWITTER_URL, label: "Twitter", section: "footer" })}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
                <span>Twitter / X</span>
              </a>
              <a
                href="mailto:btcwrestle2001@protonmail.com"
                aria-label="Email us"
                onClick={() => trackOutboundLink({ url: "mailto:btcwrestle2001@protonmail.com", label: "Email", section: "footer" })}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Columbia, SC Bitcoin</p>
          <p className="font-mono flex items-center gap-1.5">
            Est. 857,221 <Zap className="w-3 h-3 text-primary fill-primary" />
            {blockHeight !== null && (
              <>
                <span className="opacity-30 select-none">·</span>
                <Link href="/resources/timechain" className="hover:text-foreground transition-colors">
                  Current Block {blockHeight.toLocaleString()}
                </Link>
                <Zap className="w-3 h-3 text-primary fill-primary" />
              </>
            )}
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <ChevronUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
