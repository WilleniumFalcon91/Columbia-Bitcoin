"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const SUBNAV_GROUPS = [
  {
    label: "Learn",
    items: [
      { label: "Education",  href: "/resources/education" },
      { label: "Mining",     href: "/resources/mining"    },
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

export default function ResourcesBreadcrumb() {
  const pathname = usePathname();
  const current = ALL_ITEMS.find((s) => s.href === pathname);

  return (
    <div className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb trail */}
        <div className="flex items-center gap-1.5 pt-3 pb-3 text-xs text-muted-foreground">
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

        {/* Grouped nav rows */}
        <div className="pb-3 space-y-1.5">
          {SUBNAV_GROUPS.map((group) => (
            <div key={group.label} className="flex items-start gap-3">
              <span className="w-24 flex-shrink-0 text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider pt-1.5 select-none">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1">
                {group.items.map((item) => (
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
          ))}
        </div>

      </div>
    </div>
  );
}
