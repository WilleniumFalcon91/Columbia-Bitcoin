"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bitcoin, Sun, Moon, TrendingUp, TrendingDown } from "lucide-react";

function useBitcoinPrice() {
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
        );
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
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Event", href: "#event" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Donate", href: "#donate" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { price, change24h } = useBitcoinPrice();
  const isPositive = change24h !== null && change24h >= 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Bitcoin className="w-5 h-5 text-white" />
          </div>
          <span className="font-sans tracking-tight">Columbia Bitcoin</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {price !== null && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold mr-2">
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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => handleNav("#donate")}
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-150 shadow-card"
          >
            Donate ⚡
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {price !== null && (
            <span className="text-xs font-semibold text-primary">
              ${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </span>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#donate")}
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-left"
            >
              Donate ⚡
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
