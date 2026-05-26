"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const SUBNAV_GROUPS = [
  {
    label: "Learn",
    items: [
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
];

const ALL_ITEMS = SUBNAV_GROUPS.flatMap((g) => g.items);

function getGroupForPath(pathname: string) {
  return SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname))?.label
    ?? SUBNAV_GROUPS[0].label;
}

export default function ResourcesBreadcrumb() {
  const pathname = usePathname();
  const current = ALL_ITEMS.find((s) => s.href === pathname);
  const [activeTab, setActiveTab] = useState(() => getGroupForPath(pathname));

  // Keep tab in sync when navigating between resource pages
  useEffect(() => {
    const group = SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname));
    if (group) setActiveTab(group.label);
  }, [pathname]);

  const activeGroup = SUBNAV_GROUPS.find((g) => g.label === activeTab) ?? SUBNAV_GROUPS[0];

  return (
    <div className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb trail */}
        <div className="flex items-center gap-1.5 pt-2.5 pb-2 text-xs text-muted-foreground">
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          {current && (
            <>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-foreground font-medium">{current.label}</span>
            </>
          )}
        </div>

        {/* Group tabs */}
        <div className="flex items-center gap-1 pb-2">
          {SUBNAV_GROUPS.map((group) => (
            <button
              key={group.label}
              onClick={() => setActiveTab(group.label)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all duration-150 ${
                activeTab === group.label
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Active group pills */}
        <div className="flex flex-wrap gap-1 pb-2.5">
          {activeGroup.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 ${
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
