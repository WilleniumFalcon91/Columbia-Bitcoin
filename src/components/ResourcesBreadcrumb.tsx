"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { RESOURCES_GROUPS } from "@/lib/resources";

const SUBNAV_GROUPS = RESOURCES_GROUPS;

const ALL_ITEMS = SUBNAV_GROUPS.flatMap((g) => g.items);

const GROUP_INDEX_LABELS: Record<string, string> = Object.fromEntries(
  RESOURCES_GROUPS.map((g) => [g.href, g.label])
);

const GROUP_LABEL_TO_HREF: Record<string, string> = Object.fromEntries(
  RESOURCES_GROUPS.map((g) => [g.label, g.href])
);

function getGroupForPath(pathname: string) {
  const byExact = SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname))?.label;
  if (byExact) return byExact;
  if (pathname in GROUP_INDEX_LABELS) return GROUP_INDEX_LABELS[pathname];
  if (pathname.startsWith("/presentations")) return "Presentations";
  if (pathname.startsWith("/resources/philosophy/")) return "Philosophy";
  return SUBNAV_GROUPS[0].label;
}

export default function ResourcesBreadcrumb() {
  const pathname = usePathname();
  const current = ALL_ITEMS.find((s) => s.href === pathname);
  const currentGroup = SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname));
  const [activeTab, setActiveTab] = useState(() => getGroupForPath(pathname));
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const activePillRef = useRef<HTMLAnchorElement>(null);
  const fixedRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (fixedRef.current) setSpacerHeight(fixedRef.current.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const group = SUBNAV_GROUPS.find((g) => g.items.some((item) => item.href === pathname));
    if (group) {
      setActiveTab(group.label);
    } else if (pathname in GROUP_INDEX_LABELS) {
      setActiveTab(GROUP_INDEX_LABELS[pathname]);
    } else if (pathname.startsWith("/resources/philosophy/")) {
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
    <>
    <div style={{ height: 64 + spacerHeight }} aria-hidden="true" />
    <div ref={fixedRef} className="fixed top-16 left-0 right-0 z-40 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb trail — 3 levels on topic pages, 2 on group index */}
        <div className="flex items-center gap-1.5 pt-2.5 pb-2 text-xs text-muted-foreground min-w-0">
          <Link href="/resources" className="hover:text-primary transition-colors flex-shrink-0">
            Resources
          </Link>
          {current && currentGroup ? (
            <>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <Link
                href={GROUP_LABEL_TO_HREF[currentGroup.label] ?? "/resources"}
                className="hover:text-primary transition-colors flex-shrink-0"
              >
                {currentGroup.label}
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-foreground font-medium truncate">{current.label}</span>
            </>
          ) : current ? (
            <>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-foreground font-medium truncate">{current.label}</span>
            </>
          ) : pathname in GROUP_INDEX_LABELS ? (
            <>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-foreground font-medium truncate">{GROUP_INDEX_LABELS[pathname]}</span>
            </>
          ) : null}
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

        {/* Active group pills — scrollable row with fade hint on mobile */}
        <div className="relative">
          <div className="flex gap-1 pb-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {activeGroup.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                ref={pathname === item.href ? activePillRef : undefined}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Right-edge fade hint — indicates scrollable content on mobile */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-card/90 to-transparent sm:hidden" />
        </div>

      </div>
    </div>
    </>
  );
}
