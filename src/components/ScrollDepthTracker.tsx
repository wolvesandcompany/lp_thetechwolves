"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Fires a GA4 scroll_depth event at 25/50/75/90% once per page. Lets us see
 * whether visitors actually read service/blog pages or bounce — the signal for
 * which content to double down on. Resets on route change.
 */
export function ScrollDepthTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      const pct = (doc.scrollTop / scrollable) * 100;
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track.scrollDepth(m);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
