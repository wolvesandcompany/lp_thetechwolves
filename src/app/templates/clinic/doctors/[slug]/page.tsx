import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoctorProfilePage } from "@/templates/clinic/DoctorProfilePage";
import { DOCTORS, getDoctor } from "@/templates/clinic/doctors-data";

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} — Havenwell Clinic Template`,
    description: doctor.bio,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  return <DoctorProfilePage doctor={doctor} />;
}
