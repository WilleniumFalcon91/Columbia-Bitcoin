"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowUpRight } from "lucide-react";
import Fuse from "fuse.js";
import { SEARCH_INDEX, type SearchEntry } from "@/lib/searchIndex";

const fuse = new Fuse(SEARCH_INDEX, {
  keys: [
    { name: "title",       weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "keywords",    weight: 0.2 },
  ],
  threshold: 0.4,
  includeScore: true,
});

const CATEGORY_COLORS: Record<string, string> = {
  "Learn":        "bg-primary/10 text-primary",
  "Data & Tools": "bg-blue-500/10 text-blue-500",
  "Community":    "bg-amber-500/10 text-amber-600",
  "Philosophy":   "bg-violet-500/10 text-violet-500",
  "Presentations":"bg-emerald-500/10 text-emerald-600",
  "Event":        "bg-violet-500/10 text-violet-500",
  "About":        "bg-slate-500/10 text-slate-400",
  "Contact":      "bg-slate-500/10 text-slate-400",
  "Donate":       "bg-primary/10 text-primary",
};

const SUGGESTED = ["Self-Custody", "Next Meetup", "Hard Money", "DCA", "Lightning Network"];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: SearchEntry[] = query.trim().length > 0
    ? fuse.search(query).slice(0, 8).map((r) => r.item)
    : [];

  const handleClose = useCallback(() => {
    setQuery("");
    setSelectedIndex(-1);
    onClose();
  }, [onClose]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => results.length > 0 ? Math.min(i + 1, results.length - 1) : i);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0 && results[selectedIndex]) {
      e.preventDefault();
      router.push(results[selectedIndex].href);
      handleClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-card-hover overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
          <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search…"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-sm outline-none"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={handleClose}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">Start typing to search all resources and pages.</p>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            <ul className="py-2">
              {results.map((entry, idx) => (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    onClick={handleClose}
                    className={`flex items-start gap-3 px-4 py-3 transition-colors group ${
                      idx === selectedIndex ? "bg-secondary" : "hover:bg-secondary"
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {entry.title}
                        </p>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${CATEGORY_COLORS[entry.category] ?? "bg-muted text-muted-foreground"}`}>
                          {entry.category}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
                        {entry.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2.5 border-t border-border bg-muted/30 flex items-center gap-3">
          <p className="text-xs text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono text-xs">Esc</kbd> to close
          </p>
          {results.length > 0 && (
            <p className="text-xs text-muted-foreground">
              <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono text-xs">↑↓</kbd> navigate
              {" · "}
              <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono text-xs">↵</kbd> open
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
