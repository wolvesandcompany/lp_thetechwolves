/** Demo reception number for the Havenwell Clinic template. */
export const CLINIC_WHATSAPP_NUMBER = "18005550142";

export function clinicWaLink(message: string): string {
  return `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
