"use client";

import { usePathname } from "next/navigation";
import { useScrollDepth } from "@/hooks/useScrollDepth";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useScrollDepth();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
