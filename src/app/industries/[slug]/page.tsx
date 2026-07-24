import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { StructuredData } from "@/components/StructuredData";
import {
  generateMetadata as buildMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  baseSiteConfig,
} from "@/lib/seo";
import { INDUSTRIES, getIndustry } from "@/lib/industries-data";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    keywords: industry.keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.metaTitle,
    description: industry.metaDescription,
    serviceType: `${industry.eyebrow} software & automation`,
    provider: {
      "@type": "Organization",
      name: baseSiteConfig.name,
      url: baseSiteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${baseSiteConfig.url}/industries/${industry.slug}`,
  };

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: industry.eyebrow, url: `/industries/${industry.slug}` },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={generateFAQSchema(industry.faqs)} />
      <StructuredData data={breadcrumb} />
      <ServicePage service={industry} />
    </>
  );
}
