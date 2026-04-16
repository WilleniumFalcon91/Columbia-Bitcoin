"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bitcoin, Zap, ChevronUp } from "lucide-react";

const footerLinks = [
  { label: "Event",     href: "/event",     sectionId: "event"     },
  { label: "About",     href: "/about",     sectionId: "about"     },
  { label: "Resources", href: "/resources", sectionId: "resources" },
  { label: "Contact",   href: "/contact",   sectionId: "contact"   },
  { label: "Donate",    href: "/donate",    sectionId: "donate"    },
];

export default function Footer() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          {isHome ? (
            <div className="flex items-center gap-2 font-bold text-foreground">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Bitcoin className="w-5 h-5 text-white" />
              </div>
              <span>Columbia, SC Bitcoin</span>
            </div>
          ) : (
            <Link href="/" className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Bitcoin className="w-5 h-5 text-white" />
              </div>
              <span>Columbia, SC Bitcoin</span>
            </Link>
          )}

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-1">
            {footerLinks.map((link) =>
              isHome ? (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.sectionId)}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
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
