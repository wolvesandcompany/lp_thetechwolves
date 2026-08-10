import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { getSessionUser } from "@/lib/wizard/auth";
import { createAdminSupabase } from "@/lib/supabase/admin";
import { SubmitForApprovalButton } from "./submit-button";

export default async function BusinessDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser();
  if (!user) redirect("/studio/login");

  const { id } = await params;
  const admin = createAdminSupabase();
  const { data: business } = await admin.from("businesses").select("*").eq("id", id).maybeSingle();
  if (!business) notFound();
  if (business.agent_id !== user.id && user.role !== "admin") notFound();

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl space-y-6">
        <Link href="/studio" className="text-sm text-white/50 hover:text-white">← Back</Link>

        <div>
          <h1 className="text-xl font-semibold">{business.profile_data.practiceName}</h1>
          <p className="mt-1 text-sm text-white/50">
            {business.profile_data.doctorName} · status: <span className="font-medium text-white/80">{business.status.replace("_", " ")}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`/preview/${business.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 hover:border-white/30"
          >
            Open preview →
          </a>
          {business.status === "live" && (
            <a
              href={`/business/${business.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-400 hover:border-emerald-500/60"
            >
              View live site →
            </a>
          )}
        </div>

        {business.status === "draft" && <SubmitForApprovalButton businessId={business.id} />}
        {business.status === "pending_approval" && (
          <p className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 text-sm text-amber-400">
            Waiting on admin approval.{business.payment_reference ? ` Reference sent: ${business.payment_reference}` : ""}
          </p>
        )}
        {business.status === "live" && (
          <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-sm text-emerald-400">
            Live since {new Date(business.approved_at).toLocaleDateString()}.
          </p>
        )}
      </div>
    </main>
  );
}
