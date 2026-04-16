"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const SUBNAV = [
  { label: "Education",  href: "/resources/education"  },
  { label: "Debt Clock", href: "/resources/debt-clock" },
  { label: "Timechain",  href: "/resources/timechain"  },
  { label: "Mempool",    href: "/resources/mempool"    },
  { label: "Map",        href: "/resources/map"        },
  { label: "Vibes",      href: "/resources/vibes"      },
];

export default function ResourcesBreadcrumb() {
  const pathname = usePathname();
  const current = SUBNAV.find((s) => s.href === pathname);

  return (
    <div className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 pt-3 pb-2 text-xs text-muted-foreground">
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

        {/* Tab sub-nav — fade hint indicates horizontal scroll on small screens */}
        <div className="relative">
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-card/80 to-transparent z-10" />
          <div className="flex overflow-x-auto scrollbar-hide">
          {SUBNAV.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`px-3 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-all duration-150 ${
                pathname === s.href
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {s.label}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
