/**
 * Single source of truth for the WhatsApp enquiry channel.
 * Used by the floating button, the contact section, the Organization schema,
 * and llms.txt so the number never drifts.
 */

export const WHATSAPP_NUMBER = "919892800726"; // +91 98928 00726
export const WHATSAPP_DISPLAY = "+91 98928 00726";

/**
 * Default prefilled message. Deliberately an *open loop* — it greets and states
 * intent but trails off, so the visitor completes the thought (Zeigarnik effect)
 * instead of facing a blank compose box. Lowest possible friction to start.
 */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Tech Wolves 👋 I'd like to talk about a project —";

/** Build a wa.me deep link with an optional prefilled message. */
export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
