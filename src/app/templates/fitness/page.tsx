import type { Metadata } from "next";
import { FitnessTemplate } from "@/templates/fitness/FitnessTemplate";

export const metadata: Metadata = {
  title: "Fitness / Gym Template — The Tech Wolves",
  description:
    "Ironpeak — a bold, high-contrast dark fitness and gym template with an interactive weekly class schedule, CountUp stats, membership pricing, and Framer Motion. Part of The Tech Wolves in-house template library.",
};

export default function FitnessTemplatePage() {
  return <FitnessTemplate />;
}
