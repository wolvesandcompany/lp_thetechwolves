import type { Metadata } from "next";
import { ClinicTemplate } from "@/templates/clinic/ClinicTemplate";

export const metadata: Metadata = {
  title: "Medical Clinic Template — The Tech Wolves",
  description:
    "A calm, trustworthy multi-specialty clinic template with a filterable 'Meet the Doctors' profile grid, insurance & booking flow, and Framer Motion. Part of The Tech Wolves in-house template library.",
};

export default function ClinicTemplatePage() {
  return <ClinicTemplate />;
}
