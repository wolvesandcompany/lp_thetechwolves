/**
 * Thin, safe wrapper over the GA4 gtag that's loaded in layout.tsx.
 * Every money-moment on the site funnels through `track.*` so we can see —
 * in GA4 — which pages and CTAs actually produce inquiries.
 *
 * `generate_lead` is a GA4 recommended event, so it shows up as a conversion
 * candidate automatically. Mark it as a Key Event in the GA UI once live.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: EventParams) => void;
  }
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export const track = {
  /** WhatsApp click — the primary, lowest-friction conversion. */
  whatsapp: (location: string) =>
    trackEvent("generate_lead", { method: "whatsapp", location }),
  /** Calendly "Book a call" click. */
  bookCall: (location: string) =>
    trackEvent("book_call_click", { location }),
  /** Contact form successfully submitted. */
  contactSubmit: () =>
    trackEvent("generate_lead", { method: "contact_form" }),
  /** Cost-calculator lead (with the estimate they saw). */
  calculatorLead: (estimate: string) =>
    trackEvent("generate_lead", { method: "cost_calculator", estimate }),
  /** A template demo was opened. */
  templateView: (slug: string) =>
    trackEvent("template_view", { template: slug }),
  /** Scroll-depth milestone on the current page. */
  scrollDepth: (percent: number) =>
    trackEvent("scroll_depth", { percent }),
};
