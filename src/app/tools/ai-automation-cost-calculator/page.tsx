import type { Metadata } from "next";
import { CostCalculator } from "@/components/CostCalculator";
import { StructuredData } from "@/components/StructuredData";
import { generateMetadata as buildMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Cost Calculator — Free Estimate",
  description:
    "How much does AI automation cost? Use The Tech Wolves free calculator for a 30-second ballpark on automating support, admin, reporting, CRM, or custom workflows.",
  path: "/tools/ai-automation-cost-calculator",
  keywords: [
    "ai automation cost",
    "cost of ai automation",
    "automation cost calculator",
    "how much does ai automation cost",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "AI Automation Cost Calculator", url: "/tools/ai-automation-cost-calculator" },
        ])}
      />
      <CostCalculator />
    </>
  );
}
