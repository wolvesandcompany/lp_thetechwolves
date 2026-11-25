import type { Metadata } from "next";
import { RestaurantTemplate } from "@/templates/restaurant/RestaurantTemplate";

export const metadata: Metadata = {
  title: "Restaurant Template — The Tech Wolves",
  description:
    "A warm, upscale-casual restaurant & café template for Ember & Oak, featuring an interactive animated menu, reservations form, gallery, and Framer Motion. Part of The Tech Wolves in-house template library.",
};

export default function RestaurantTemplatePage() {
  return <RestaurantTemplate />;
}
