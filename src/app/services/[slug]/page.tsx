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
import { SERVICES, getService } from "@/lib/services-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle,
    description: service.metaDescription,
    serviceType: service.eyebrow,
    provider: {
      "@type": "Organization",
      name: baseSiteConfig.name,
      url: baseSiteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${baseSiteConfig.url}/services/${service.slug}`,
  };

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.eyebrow, url: `/services/${service.slug}` },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={generateFAQSchema(service.faqs)} />
      <StructuredData data={breadcrumb} />
      <ServicePage service={service} />
    </>
  );
}
