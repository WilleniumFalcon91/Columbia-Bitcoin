"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SUBNAV_GROUPS = [
  {
    label: "Learn",
    items: [
      { label: "Glossary",     href: "/resources/glossary"     },
      { label: "Education",    href: "/resources/education"    },
      { label: "Self-Custody", href: "/resources/self-custody" },
      { label: "DCA",          href: "/resources/dca"          },
      { label: "Mining",       href: "/resources/mining"       },
      { label: "Run a Node", href: "/resources/node"      },
      { label: "Privacy",    href: "/resources/privacy"   },
      { label: "Businesses", href: "/resources/business"  },
    ],
  },
  {
    label: "Data & Tools",
    items: [
      { label: "Debt Clock",    href: "/resources/debt-clock"   },
      { label: "Timechain",     href: "/resources/timechain"    },
      { label: "Mempool",       href: "/resources/mempool"      },
      { label: "BTC Charts",    href: "/resources/bitbo"        },
      { label: "BTC Map",       href: "/resources/map"          },
      { label: "Meetup Finder", href: "/resources/meetupfinder" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Carolinas", href: "/resources/regional" },
      { label: "Vibes",     href: "/resources/vibes"    },
    ],
  },
  {
    label: "Philosophy",
    items: [
      { label: "Hard Money",           href: "/resources/philosophy/hard-money"          },
      { label: "Freedom Tech",         href: "/resources/philosophy/freedom-tech"        },
      { label: "Circular Economy",     href: "/resources/philosophy/circular-economy"    },
      { label: "Bitcoin Fixes This",   href: "/resources/philosophy/bitcoin-fixes-this"  },
      { label: "The Sovereign Individual", href: "/resources/philosophy/sovereign-individual" },
      { label: "Cryptosovereignty",    href: "/resources/philosophy/cryptosovereignty"   },
    ],
  },
];

const ALL_ITEMS = SUBNAV_GROUPS.flatMap((g) => g.items);

function getGroupForPath(pathname: string) {
  const byExact = SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname))?.label;
  if (byExact) return byExact;
  if (pathname === "/resources/philosophy" || pathname.startsWith("/resources/philosophy/")) return "Philosophy";
  return SUBNAV_GROUPS[0].label;
}

export default function ResourcesBreadcrumb() {
  const pathname = usePathname();
  const current = ALL_ITEMS.find((s) => s.href === pathname);
  const [activeTab, setActiveTab] = useState(() => getGroupForPath(pathname));
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const activePillRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const group = SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname));
    if (group) {
      setActiveTab(group.label);
    } else if (pathname === "/resources/philosophy" || pathname.startsWith("/resources/philosophy/")) {
      setActiveTab("Philosophy");
    }
  }, [pathname]);

  // Scroll active tab and pill into view when navigating on mobile
  useEffect(() => {
    activeTabRef.current?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    activePillRef.current?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [pathname, activeTab]);

  const activeGroup = SUBNAV_GROUPS.find((g) => g.label === activeTab) ?? SUBNAV_GROUPS[0];

  return (
    <div className="mt-16 sticky top-16 z-40 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb trail */}
        <div className="flex items-center gap-1.5 pt-2.5 pb-2 text-xs text-muted-foreground min-w-0">
          <Link href="/resources" className="hover:text-primary transition-colors flex-shrink-0">
            Resources
          </Link>
          {(current || pathname === "/resources/philosophy") && (
            <>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-foreground font-medium truncate">
                {current ? current.label : "Philosophy"}
              </span>
            </>
          )}
        </div>

        {/* Group tabs — single scrollable row on mobile */}
        <div className="flex items-center gap-1 pb-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {SUBNAV_GROUPS.map((group) => (
            <button
              key={group.label}
              ref={activeTab === group.label ? activeTabRef : undefined}
              onClick={() => setActiveTab(group.label)}
              className={`flex-shrink-0 px-3 py-1 rounded-md text-xs font-semibold transition-all duration-150 ${
                activeTab === group.label
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Active group pills — single scrollable row on mobile */}
        <div className="flex gap-1 pb-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {activeGroup.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              ref={pathname === item.href ? activePillRef : undefined}
              className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 ${
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
