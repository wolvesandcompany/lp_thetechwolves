/**
 * Data shape for the doctor-profile template, editable via the wizard.
 * DEFAULT_DOCTOR_PROFILE is the original "Calder Dermatology" demo copy —
 * used as the fallback so /templates/doctor-profile keeps rendering
 * unchanged when no profile is passed in.
 */

export type DoctorMetric = { value: number; suffix: string; label: string };
export type DoctorTreatment = { title: string; body: string };
export type DoctorTestimonial = { quote: string; name: string; city: string };
export type DoctorHours = { day: string; time: string };

export type DoctorBusinessProfile = {
  practiceName: string;
  doctorName: string;
  credentials: string;
  specialtyBadge: string;
  heroHeadline: string;
  heroSubcopy: string;
  phone: string;
  /** digits-only, no +, e.g. "15035550117" — used to build the wa.me booking link */
  whatsappNumber: string;
  address: string;
  credentialsList: string[];
  treatments: DoctorTreatment[];
  metrics: DoctorMetric[];
  testimonials: DoctorTestimonial[];
  hours: DoctorHours[];
};

export const DEFAULT_DOCTOR_PROFILE: DoctorBusinessProfile = {
  practiceName: "Calder Dermatology",
  doctorName: "Dr. Amara Calder",
  credentials: "MD, FAAD — Founder",
  specialtyBadge: "Board Certified Dermatologist, MD FAAD",
  heroHeadline: "Skin care from a doctor\nwho $still sees you$ herself.",
  heroSubcopy:
    "Dr. Amara Calder runs a solo private practice in the Pearl District — no associates, no revolving door of residents. Just one physician, seventeen years of experience, and your full attention every visit.",
  phone: "+1 (503) 555-0117",
  whatsappNumber: "15035550117",
  address: "118 Everett Street, Suite 4B, Pearl District",
  credentialsList: [
    "Board Certified, American Board of Dermatology",
    "Fellow, American Society for Dermatologic Surgery",
    "17 years in private practice",
    "4.9/5 across 600+ patient reviews",
  ],
  treatments: [
    { title: "Acne & Acne Scarring", body: "Personalized regimens for cystic acne, hormonal breakouts, and the scarring left behind." },
    { title: "Eczema & Psoriasis", body: "Long-term management plans that go beyond steroid creams." },
    { title: "Skin Cancer Screening", body: "Full-body mole mapping and biopsy, same-visit when needed." },
    { title: "Botox & Dermal Fillers", body: "Natural-looking results, administered personally, never rushed." },
    { title: "Laser Resurfacing", body: "Scar, sun-damage, and pigmentation treatment using in-house laser technology." },
  ],
  metrics: [
    { value: 12000, suffix: "+", label: "Patients treated" },
    { value: 17, suffix: "", label: "Years in practice" },
    { value: 30000, suffix: "+", label: "Procedures performed" },
    { value: 98, suffix: "%", label: "Patient satisfaction" },
  ],
  testimonials: [
    { quote: "Dr. Calder spent forty-five minutes with me on my first visit. No other dermatologist has ever done that.", name: "Priya N.", city: "Portland, US" },
    { quote: "She caught a melanoma at a routine screening that two other doctors had dismissed as nothing. I owe her a great deal.", name: "Harold B.", city: "Vancouver, CA" },
    { quote: "The laser resurfacing results were better than I imagined, and she talked me through every step beforehand.", name: "Freya L.", city: "Bristol, UK" },
  ],
  hours: [
    { day: "Mon – Thu", time: "8:00 – 17:00" },
    { day: "Friday", time: "8:00 – 13:00" },
    { day: "Weekends", time: "Closed" },
  ],
};

/** "Dr. Amara Calder" -> "AC" (skips honorifics like Dr./Prof.) */
export function initialsFromName(name: string): string {
  const words = name.replace(/^(Dr\.?|Prof\.?)\s+/i, "").trim().split(/\s+/);
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** hero headline uses $..$ to mark the italic/accent span, e.g. "who $still sees you$ herself." */
export function parseHeadline(headline: string): { before: string; accent: string; after: string } {
  const match = headline.match(/^([\s\S]*)\$([\s\S]*)\$([\s\S]*)$/);
  if (!match) return { before: headline, accent: "", after: "" };
  return { before: match[1], accent: match[2], after: match[3] };
}
