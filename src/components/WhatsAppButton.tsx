"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

// Hide on standalone template demos (keep those clean), like the cursor/switcher.
const TEMPLATE_DEMO = /^\/templates\/(?!library$)[^/]+/;
const NUDGE_KEY = "tw-wa-nudge-seen";
const WA_GREEN = "#25D366";

/**
 * Floating WhatsApp enquiry button — the lowest-friction inbound channel.
 *
 * Psychology built in:
 *  - Kept WhatsApp-green (not theme-tinted) for instant brand recognition/trust.
 *  - A one-time, dismissible proactive nudge (initiates the conversation →
 *    reciprocity) with an explicit response-time promise (removes "will they
 *    even reply?" anxiety).
 *  - Prefilled open-loop message (Zeigarnik) so there's nothing to write from
 *    scratch — one tap to a live chat.
 */
export function WhatsAppButton() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [nudge, setNudge] = useState(false);

  const hidden = pathname != null && TEMPLATE_DEMO.test(pathname);

  useEffect(() => {
    if (hidden) return;
    try {
      if (sessionStorage.getItem(NUDGE_KEY)) return;
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => setNudge(true), 6000);
    return () => window.clearTimeout(t);
  }, [hidden]);

  const dismissNudge = () => {
    setNudge(false);
    try {
      sessionStorage.setItem(NUDGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (hidden) return null;

  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col items-end gap-3">
      {/* Proactive nudge bubble */}
      <AnimatePresence>
        {nudge && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            className="relative mr-1 max-w-[16rem] rounded-2xl border border-white/10 bg-[#0b0b0e]/95 p-4 pr-8 text-sm text-white/85 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={dismissNudge}
              aria-label="Dismiss"
              className="tw-focus absolute right-2 top-2 rounded-full p-1 text-white/40 transition-colors hover:text-white/80"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="font-medium text-white">👋 Got a project in mind?</p>
            <p className="mt-1 leading-snug text-white/60">
              Chat with a real engineer on WhatsApp — we usually reply within minutes.
            </p>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                track.whatsapp("nudge");
                dismissNudge();
              }}
              className="tw-focus mt-3 inline-flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: WA_GREEN }}
            >
              Start the chat →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <a
        href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track.whatsapp("fab")}
        aria-label="Chat with The Tech Wolves on WhatsApp"
        className="tw-focus group relative flex items-center"
      >
        {/* attention pulse */}
        {!reduced && (
          <span
            aria-hidden
            className="absolute inset-0 -z-10 animate-ping rounded-full opacity-60"
            style={{ background: WA_GREEN, animationDuration: "2.4s" }}
          />
        )}

        {/* hover label */}
        <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:max-w-[10rem] group-hover:opacity-100">
          Chat with us
        </span>

        <span
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-200 group-hover:scale-105"
          style={{ background: WA_GREEN }}
        >
          <WhatsAppGlyph />
        </span>
      </a>
    </div>
  );
}

export function WhatsAppGlyph({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.593 4.463 1.72 6.404L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.234 1.588h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053A12.71 12.71 0 0 0 16.004 3.2Zm0 23.36h-.004a10.57 10.57 0 0 1-5.386-1.475l-.386-.23-3.9 1.022 1.04-3.802-.251-.39a10.55 10.55 0 0 1-1.617-5.616c0-5.86 4.77-10.63 10.634-10.63 2.84 0 5.508 1.107 7.515 3.116a10.56 10.56 0 0 1 3.112 7.52c0 5.862-4.77 10.632-10.63 10.632Zm5.83-7.964c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.592-1.894-1.779-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.36.527 1.824.674.767.244 1.464.21 2.016.127.615-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
    </svg>
  );
}
