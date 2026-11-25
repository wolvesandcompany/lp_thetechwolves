"use client";

import { usePathname } from "next/navigation";
import { CustomCursor } from "./CustomCursor";

/**
 * The custom emerald cursor is Tech Wolves brand chrome — great on the main
 * site, but it clashes with the standalone template demos (each has its own
 * theme, often light). Disable it on individual template preview routes
 * (`/templates/<slug>`) so those show the clean native cursor. It stays on the
 * gallery (`/templates/library`) and the `/templates` listing, which are
 * Tech Wolves-branded.
 */
const TEMPLATE_DEMO = /^\/templates\/(?!library$)[^/]+/;

export function CursorGate() {
  const pathname = usePathname();
  if (pathname && TEMPLATE_DEMO.test(pathname)) return null;
  return <CustomCursor />;
}
