import type { Metadata } from "next";
import { FlowdeskTemplate } from "@/templates/saas/FlowdeskTemplate";

export const metadata: Metadata = {
  title: "Flowdesk — SaaS Product Template — The Tech Wolves",
  description:
    "A dark glassmorphism SaaS product template with an interactive animated dashboard preview, live charts, bento features, and an animated pricing toggle. Part of The Tech Wolves in-house template library.",
};

export default function SaasTemplatePage() {
  return <FlowdeskTemplate />;
}
