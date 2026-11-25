import type { Metadata } from "next";
import { TemplateLibrary } from "@/templates/library/TemplateLibrary";

export const metadata: Metadata = {
  title: "Template Library — The Tech Wolves",
  description:
    "In-house website, SaaS, and automation templates by The Tech Wolves. Built with Next.js, Framer Motion, and 3D. Lightweight, conversion-tuned, and fully customizable.",
};

export default function TemplateLibraryPage() {
  return <TemplateLibrary />;
}
