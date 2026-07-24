import type { Metadata } from "next";
import { RealEstateTemplate } from "@/templates/real-estate/RealEstateTemplate";

export const metadata: Metadata = {
  title: "Real Estate Template — The Tech Wolves",
  description:
    "Meridian Estates — an elegant, minimal luxury real estate template with a property search hero, filterable listings grid, featured residence, agent bio, and mortgage estimator. Part of The Tech Wolves in-house template library.",
};

export default function RealEstateTemplatePage() {
  return <RealEstateTemplate />;
}
