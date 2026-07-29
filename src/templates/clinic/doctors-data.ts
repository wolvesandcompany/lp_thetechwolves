/**
 * Single source of truth for Havenwell Clinic's doctors — consumed by the
 * "Meet the Doctors" grid (doctor-profiles.tsx) and each doctor's individual
 * profile page (app/templates/clinic/doctors/[slug]/page.tsx).
 */

export type Doctor = {
  slug: string;
  name: string;
  initials: string;
  credentials: string;
  specialty: string;
  specialtyId: string;
  years: number;
  bio: string;
  longBio: string;
  education: string[];
  focusAreas: string[];
  testimonial: { quote: string; name: string };
};

export const SPECIALTY_LABELS: Record<string, string> = {
  cardiology: "Cardiology",
  pediatrics: "Pediatrics",
  orthopedics: "Orthopedics",
  neurology: "Neurology",
  general: "General Practice",
};

export const DOCTORS: Doctor[] = [
  {
    slug: "elena-marsh",
    name: "Dr. Elena Marsh",
    initials: "EM",
    credentials: "MD, FACC",
    specialty: "Cardiology",
    specialtyId: "cardiology",
    years: 18,
    bio: "Interventional cardiologist focused on preventive heart health and minimally invasive procedures.",
    longBio:
      "Dr. Marsh trained at Johns Hopkins and has spent nearly two decades helping patients catch heart disease before it becomes an emergency. She specializes in minimally invasive catheter procedures and believes the best cardiology is the kind that keeps you out of the cath lab in the first place.",
    education: [
      "MD, Johns Hopkins School of Medicine",
      "Residency, Massachusetts General Hospital",
      "Fellowship in Interventional Cardiology, Cleveland Clinic",
    ],
    focusAreas: ["Preventive cardiology", "Coronary interventions", "Cholesterol & lipid management", "Cardiac diagnostics"],
    testimonial: {
      quote: "From check-in to follow-up, everything felt unhurried and genuinely caring. Dr. Marsh caught something my old doctor missed for years.",
      name: "Robert K., Austin, US",
    },
  },
  {
    slug: "naomi-osei",
    name: "Dr. Naomi Osei",
    initials: "NO",
    credentials: "MD, FAAP",
    specialty: "Pediatrics",
    specialtyId: "pediatrics",
    years: 12,
    bio: "Board-certified pediatrician who treats every child like her own — gentle, thorough, unhurried.",
    longBio:
      "Dr. Osei believes a pediatric visit should never feel rushed — for the parent or the child. Over 12 years in practice, she's built a reputation for taking the extra five minutes to actually answer every question, and for making even the most anxious kids feel at ease.",
    education: [
      "MD, University of Toronto",
      "Residency in Pediatrics, SickKids Hospital",
      "Board Certified, American Board of Pediatrics",
    ],
    focusAreas: ["Well-child checkups", "Vaccinations", "Developmental screening", "Newborn care"],
    testimonial: {
      quote: "The pediatrics team is incredible with my daughter — she actually looks forward to her checkups now.",
      name: "Marta S., Calgary, CA",
    },
  },
  {
    slug: "marcus-reyes",
    name: "Dr. Marcus Reyes",
    initials: "MR",
    credentials: "MD, FAAOS",
    specialty: "Orthopedics",
    specialtyId: "orthopedics",
    years: 21,
    bio: "Sports-medicine orthopedic surgeon specializing in joint preservation and rapid return-to-activity plans.",
    longBio:
      "Dr. Reyes has spent 21 years helping athletes and weekend warriors alike get back to what they love, faster. He favors joint-preservation techniques over replacement wherever possible, and builds every recovery plan around a real return-to-activity timeline, not just a discharge date.",
    education: [
      "MD, Baylor College of Medicine",
      "Residency in Orthopedic Surgery, Hospital for Special Surgery",
      "Fellowship in Sports Medicine, Andrews Sports Medicine Institute",
    ],
    focusAreas: ["Sports injuries", "Joint preservation", "ACL & meniscus repair", "Rehabilitation planning"],
    testimonial: {
      quote: "Clear pricing, no surprise bills, and a same-week appointment when I needed one urgently. Rare these days.",
      name: "James O., Manchester, UK",
    },
  },
  {
    slug: "priya-chandran",
    name: "Dr. Priya Chandran",
    initials: "PC",
    credentials: "MD, PhD",
    specialty: "Neurology",
    specialtyId: "neurology",
    years: 15,
    bio: "Neurologist researching migraine and movement disorders, with a calm, patient-first bedside manner.",
    longBio:
      "Dr. Chandran splits her time between clinical practice and migraine research, which means her patients benefit from treatment approaches years ahead of the standard playbook. She's known for her calm, methodical way of explaining complex neurology in plain language.",
    education: [
      "MD, PhD in Neuroscience, Stanford University",
      "Residency in Neurology, UCSF Medical Center",
      "Fellowship in Headache Medicine, NYU Langone",
    ],
    focusAreas: ["Migraine & headache disorders", "Movement disorders", "Neurological diagnostics", "EEG interpretation"],
    testimonial: {
      quote: "Dr. Chandran was the first neurologist who actually explained what was happening instead of just handing me a prescription.",
      name: "Devon P., London, UK",
    },
  },
  {
    slug: "thomas-weller",
    name: "Dr. Thomas Weller",
    initials: "TW",
    credentials: "MD",
    specialty: "General Practice",
    specialtyId: "general",
    years: 25,
    bio: "Family medicine physician and clinic co-founder — your first call for anything, any age.",
    longBio:
      "Dr. Weller co-founded Havenwell 22 years ago on a simple idea: patients deserve a doctor who actually has time for them. A quarter-century into family medicine, he still takes on new patients personally and is often the first call for three generations of the same family.",
    education: [
      "MD, University of Michigan Medical School",
      "Residency in Family Medicine, Henry Ford Hospital",
      "Board Certified, American Board of Family Medicine",
    ],
    focusAreas: ["Annual physicals", "Chronic disease management", "Preventive care", "Referral coordination"],
    testimonial: {
      quote: "Dr. Weller has been our family's doctor for 15 years. He remembers details about us that we forget ourselves.",
      name: "The Alvarez Family, Austin, US",
    },
  },
  {
    slug: "aiko-tanaka",
    name: "Dr. Aiko Tanaka",
    initials: "AT",
    credentials: "MD, FACC",
    specialty: "Cardiology",
    specialtyId: "cardiology",
    years: 9,
    bio: "Cardiologist focused on women's heart health and long-term risk reduction plans.",
    longBio:
      "Dr. Tanaka's practice centers on a gap she saw early in her training: women's heart disease is chronically under-diagnosed and under-treated. She builds long-term risk reduction plans specifically calibrated to how cardiovascular disease actually shows up in women.",
    education: [
      "MD, University of California, San Francisco",
      "Residency in Internal Medicine, UCSF Medical Center",
      "Fellowship in Cardiology, Stanford Health Care",
    ],
    focusAreas: ["Women's heart health", "Risk assessment", "Preventive cardiology", "Cardiac imaging"],
    testimonial: {
      quote: "Dr. Tanaka is the first doctor who took my symptoms seriously instead of telling me it was just stress.",
      name: "Nina R., Toronto, CA",
    },
  },
  {
    slug: "daniel-okafor",
    name: "Dr. Daniel Okafor",
    initials: "DO",
    credentials: "MD, FAAP",
    specialty: "Pediatrics",
    specialtyId: "pediatrics",
    years: 14,
    bio: "Pediatrician with a special interest in adolescent medicine and childhood nutrition.",
    longBio:
      "Dr. Okafor has a particular focus on the years that get the least attention in pediatrics — adolescence. He works closely with teenage patients and their families on nutrition, mental health, and the transition toward independent healthcare decisions.",
    education: [
      "MD, Northwestern University Feinberg School of Medicine",
      "Residency in Pediatrics, Lurie Children's Hospital",
      "Board Certified, American Board of Pediatrics",
    ],
    focusAreas: ["Adolescent medicine", "Childhood nutrition", "Sports physicals", "Mental health screening"],
    testimonial: {
      quote: "Dr. Okafor is the only doctor my teenager has ever actually opened up to.",
      name: "Priya M., Manchester, UK",
    },
  },
  {
    slug: "sofia-bianchi",
    name: "Dr. Sofia Bianchi",
    initials: "SB",
    credentials: "MD",
    specialty: "General Practice",
    specialtyId: "general",
    years: 10,
    bio: "Internal medicine physician who takes the time to actually explain what's going on.",
    longBio:
      "Dr. Bianchi's patients consistently mention the same thing: she explains. Test results, diagnoses, treatment options — nothing leaves the room as a mystery. Her approach is especially valued by patients managing multiple chronic conditions who need one doctor who sees the whole picture.",
    education: [
      "MD, University of Bologna",
      "Residency in Internal Medicine, Mount Sinai Hospital",
      "Board Certified, American Board of Internal Medicine",
    ],
    focusAreas: ["Chronic disease management", "Diabetes care", "Preventive screening", "Care coordination"],
    testimonial: {
      quote: "First doctor in years who explained my results in a way I actually understood.",
      name: "Harold T., Manchester, UK",
    },
  },
];

export function getDoctor(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}
