import type { Metadata } from "next";
import { AiAgencyTemplate } from "@/templates/ai-agency/AiAgencyTemplate";

export const metadata: Metadata = {
  title: "AI Agency Template — The Tech Wolves",
  description:
    "A dark, cinematic AI automation agency template with a live interactive workflow demo, 3D hero, and Framer Motion. Part of The Tech Wolves in-house template library.",
};

export default function AiAgencyTemplatePage() {
  return <AiAgencyTemplate />;
}
