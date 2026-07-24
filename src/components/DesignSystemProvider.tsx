"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_DESIGN, type DesignId } from "@/lib/design-systems";

const STORAGE_KEY = "tw-design-system";
// Individual template demos keep their own look — never apply a design there.
const TEMPLATE_DEMO = /^\/templates\/(?!library$)[^/]+/;

// The design fonts (14 families) are loaded lazily — only once a non-default
// design is first selected — so default visitors never fetch them.
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Varela+Round&family=Nunito+Sans:wght@300;400;600;700&family=Figtree:wght@400;500;600;700;800&family=Noto+Sans:wght@400;500;700&family=Baloo+2:wght@400;600;700;800&family=Bebas+Neue&family=Source+Sans+3:wght@300;400;600&family=Anton&family=Epilogue:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Montserrat:wght@300;400;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@400;600;700&family=Libre+Baskerville:wght@400;700&display=swap";

function ensureDesignFonts() {
  if (typeof document === "undefined") return;
  if (document.getElementById("tw-design-fonts")) return;
  const link = document.createElement("link");
  link.id = "tw-design-fonts";
  link.rel = "stylesheet";
  link.href = FONTS_HREF;
  document.head.appendChild(link);
}

type Ctx = {
  design: DesignId;
  setDesign: (d: DesignId) => void;
  /** false on template demo routes, where the switcher is hidden */
  enabled: boolean;
  /** the active accent hex (from --ds-accent) — for canvas/WebGL that can't read CSS vars */
  accent: string;
};

const DEFAULT_ACCENT = "#34d399";

const DesignContext = createContext<Ctx | null>(null);

export function useDesignSystem(): Ctx {
  const ctx = useContext(DesignContext);
  if (!ctx)
    throw new Error("useDesignSystem must be used within DesignSystemProvider");
  return ctx;
}

export function DesignSystemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const enabled = !(pathname && TEMPLATE_DEMO.test(pathname));
  const [design, setDesignState] = useState<DesignId>(DEFAULT_DESIGN);
  const [accent, setAccent] = useState<string>(DEFAULT_ACCENT);

  // Restore persisted choice on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as DesignId | null;
      if (saved) setDesignState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  // Apply (or clear) the attribute on <html>.
  useEffect(() => {
    const root = document.documentElement;
    if (enabled && design !== "default") {
      ensureDesignFonts();
      root.setAttribute("data-design", design);
    } else {
      root.removeAttribute("data-design");
    }
    // Resolve the active accent from the CSS var so canvas/WebGL (globe) can use it.
    const resolved = getComputedStyle(root).getPropertyValue("--ds-accent").trim();
    setAccent(resolved || DEFAULT_ACCENT);
    return () => root.removeAttribute("data-design");
  }, [design, enabled]);

  const setDesign = useCallback((d: DesignId) => {
    setDesignState(d);
    try {
      localStorage.setItem(STORAGE_KEY, d);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <DesignContext.Provider value={{ design, setDesign, enabled, accent }}>
      {children}
    </DesignContext.Provider>
  );
}
