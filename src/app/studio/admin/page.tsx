import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/wizard/auth";
import { listPendingApproval } from "@/lib/wizard/businesses";
import { ApproveButton } from "./approve-button";

export default async function AdminApprovalQueue() {
  const user = await getSessionUser();
  if (!user) redirect("/studio/login");
  if (user.role !== "admin") redirect("/studio");

  const pending = await listPendingApproval();

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Approval queue</h1>
          <Link href="/studio" className="text-sm text-white/50 hover:text-white">← Back</Link>
        </div>

        {pending.length === 0 && (
          <p className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/50">
            Nothing waiting on approval.
          </p>
        )}

        <div className="space-y-3">
          {pending.map((b) => (
            <div key={b.id} className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{b.profile_data.practiceName}</p>
                  <p className="text-xs text-white/50">{b.profile_data.doctorName}</p>
                  {b.payment_reference && (
                    <p className="mt-1 text-xs text-amber-400">Payment ref: {b.payment_reference}</p>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={`/preview/${b.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 hover:border-white/30"
                  >
                    Preview
                  </a>
                  <ApproveButton businessId={b.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
