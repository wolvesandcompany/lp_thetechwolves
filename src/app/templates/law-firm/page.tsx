import type { Metadata } from "next";
import { LawFirmTemplate } from "@/templates/law-firm/LawFirmTemplate";

export const metadata: Metadata = {
  title: "Law Firm Template — The Tech Wolves",
  description:
    "A formal, high-trust law firm & attorney template for Sterling & Vance. Navy + gold light theme with an interactive practice-areas panel, attorney profiles, case results, and a styled consultation form. Part of The Tech Wolves in-house template library.",
};

export default function LawFirmTemplatePage() {
  return <LawFirmTemplate />;
}
