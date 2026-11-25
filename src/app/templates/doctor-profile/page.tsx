import type { Metadata } from "next";
import { DoctorProfileTemplate } from "@/templates/doctor-profile/DoctorProfileTemplate";

export const metadata: Metadata = {
  title: "Doctor Profile Template — The Tech Wolves",
  description:
    "A warm, premium solo private-practice physician website with an interactive career-journey timeline, treatments grid, and appointment booking. Part of The Tech Wolves in-house template library.",
};

export default function DoctorProfileTemplatePage() {
  return <DoctorProfileTemplate />;
}
