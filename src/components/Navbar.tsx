"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Bitcoin,
  TrendingUp, TrendingDown, ChevronDown,
} from "lucide-react";

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true";

function useBitcoinPrice() {
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(COINGECKO_URL);
        if (!res.ok) return;
        const data = await res.json();
        setPrice(data.bitcoin.usd);
        setChange24h(data.bitcoin.usd_24h_change);
      } catch {
        // silently fail
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60_000);
    return () => clearInterval(interval);
  }, []);

  return { price, change24h };
}

const navLinks = [
  { label: "Event",     href: "/event",     sectionId: "event"     },
  { label: "About",     href: "/about",     sectionId: "about"     },
  { label: "Resources", href: "/resources", sectionId: "resources" },
  { label: "Contact",   href: "/contact",   sectionId: "contact"   },
];

const RESOURCES_SUBNAV = [
  { label: "Overview",   href: "/resources"            },
  { label: "Education",  href: "/resources/education"  },
  { label: "Debt Clock", href: "/resources/debt-clock" },
  { label: "Timechain",  href: "/resources/timechain"  },
  { label: "Mempool",    href: "/resources/mempool"    },
  { label: "Map",        href: "/resources/map"        },
  { label: "Vibes",      href: "/resources/vibes"      },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesMobileOpen, setResourcesMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { price, change24h } = useBitcoinPrice();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPositive = change24h !== null && change24h >= 0;
  const isResourcesActive = pathname.startsWith("/resources");

  const onScroll = useCallback(() => setScrolled(window.scrollY > 20), []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setResourcesMobileOpen(false);
  }, [pathname]);

  const handleScroll = useCallback((sectionId: string) => {
    setMenuOpen(false);
    document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-primary/20 shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        {isHome ? (
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bitcoin className="w-5 h-5 text-white" />
            </div>
            <span className="font-sans tracking-tight">Columbia, SC Bitcoin</span>
          </button>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bitcoin className="w-5 h-5 text-white" />
            </div>
            <span className="font-sans tracking-tight">Columbia, SC Bitcoin</span>
          </Link>
        )}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {price !== null && (
            <div
              aria-live="polite"
              aria-label="Bitcoin price"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold mr-2"
            >
              <span className="text-primary">BTC</span>
              <span className="text-foreground">
                ${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
              {change24h !== null && (
                <span className={`flex items-center gap-0.5 ${isPositive ? "text-green-500" : "text-red-500"}`}>
                  {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {isPositive ? "+" : ""}{change24h.toFixed(2)}%
                </span>
              )}
            </div>
          )}

          {navLinks.map((link) => {
            const active = link.href === "/resources"
              ? isResourcesActive
              : pathname === link.href;

            if (isHome) {
              return (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.sectionId)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
                >
                  {link.label}
                </button>
              );
            }

            // Resources — dropdown on desktop
            if (link.href === "/resources") {
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href="/resources"
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      active
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    Resources
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown panel */}
                  <div className="absolute top-full -left-2 hidden group-hover:block z-50">
                    {/* transparent bridge eliminates the gap between trigger and panel */}
                    <div className="pt-2">
                      <div className="bg-card border border-border rounded-xl shadow-card-hover py-1.5 min-w-[180px]">
                        {RESOURCES_SUBNAV.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-4 py-2 text-sm transition-colors duration-100 ${
                              pathname === item.href
                                ? "text-primary bg-primary/5 font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {isHome ? (
            <button
              onClick={() => handleScroll("donate")}
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold btn-orange"
            >
              Donate ⚡
            </button>
          ) : (
            <Link
              href="/donate"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold btn-orange"
            >
              Donate ⚡
            </Link>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {price !== null && (
            <span className="text-xs font-semibold text-primary">
              ${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </span>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = link.href === "/resources"
                ? isResourcesActive
                : pathname === link.href;

              if (isHome) {
                return (
                  <button
                    key={link.href}
                    onClick={() => handleScroll(link.sectionId)}
                    className="text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  >
                    {link.label}
                  </button>
                );
              }

              // Resources — expandable sub-links on mobile
              if (link.href === "/resources") {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setResourcesMobileOpen(!resourcesMobileOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        active
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      Resources
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          resourcesMobileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {resourcesMobileOpen && (
                      <div className="ml-3 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                        {RESOURCES_SUBNAV.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-2 rounded-lg text-sm transition-all ${
                              pathname === item.href
                                ? "text-primary bg-primary/10 font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {isHome ? (
              <button
                onClick={() => handleScroll("donate")}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-left"
              >
                Donate ⚡
              </button>
            ) : (
              <Link
                href="/donate"
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Donate ⚡
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
