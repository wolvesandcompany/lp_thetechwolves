import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoctorProfileTemplate } from "@/templates/doctor-profile/DoctorProfileTemplate";
import { getBusinessBySlug } from "@/lib/wizard/businesses";

// Unlisted: viewable by anyone with the exact link (e.g. to show a client
// mid-sales-call before payment), but never indexed and not linked from
// anywhere public.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);
  if (!business) notFound();

  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-[60] bg-amber-500 py-1.5 text-center text-xs font-semibold text-black">
        PREVIEW — status: {business.status}
        {business.status === "live" && (
          <>
            {" "}
            · live at <a className="underline" href={`/business/${business.slug}`}>/business/{business.slug}</a>
          </>
        )}
      </div>
      <DoctorProfileTemplate profile={business.profile_data} />
    </div>
  );
}
