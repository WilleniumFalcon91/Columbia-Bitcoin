"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 90] as const;
type Milestone = (typeof MILESTONES)[number];

export function useScrollDepth(): void {
  const pathname = usePathname();
  const firedRef = useRef<Set<Milestone>>(new Set());

  // Reset milestones on route change
  useEffect(() => {
    firedRef.current = new Set();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (window.scrollY / docHeight) * 100;
      for (const m of MILESTONES) {
        if (!firedRef.current.has(m) && pct >= m) {
          firedRef.current.add(m);
          trackScrollDepth({ milestone: m, page_path: pathname });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
}
