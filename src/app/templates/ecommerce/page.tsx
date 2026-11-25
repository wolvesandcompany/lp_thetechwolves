import type { Metadata } from "next";
import { EcommerceTemplate } from "@/templates/ecommerce/EcommerceTemplate";

export const metadata: Metadata = {
  title: "Kindred Goods — E-commerce Template — The Tech Wolves",
  description:
    "A clean, premium retail template with a filterable product grid, a live cart with badge, and a light editorial theme. Part of The Tech Wolves in-house template library.",
};

export default function EcommerceTemplatePage() {
  return <EcommerceTemplate />;
}
