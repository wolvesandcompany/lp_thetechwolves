import type { Metadata } from "next";
import { BeautySpaTemplate } from "@/templates/beauty-spa/BeautySpaTemplate";

export const metadata: Metadata = {
  title: "Beauty Spa Template — The Tech Wolves",
  description:
    "Lumière Spa — a soft, elegant, luxurious beauty salon & day spa template with an interactive services & price menu, styled booking, and Framer Motion. Part of The Tech Wolves in-house template library.",
};

export default function BeautySpaTemplatePage() {
  return <BeautySpaTemplate />;
}
