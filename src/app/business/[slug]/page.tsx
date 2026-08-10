import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoctorProfileTemplate } from "@/templates/doctor-profile/DoctorProfileTemplate";
import { getBusinessBySlug } from "@/lib/wizard/businesses";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);
  if (!business || business.status !== "live") return {};
  return {
    title: business.profile_data.practiceName,
    description: business.profile_data.heroSubcopy,
  };
}

export default async function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);
  if (!business || business.status !== "live") notFound();

  return <DoctorProfileTemplate profile={business.profile_data} />;
}
