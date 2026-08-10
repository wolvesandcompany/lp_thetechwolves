import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/wizard/auth";
import { listBusinessesForAgent } from "@/lib/wizard/businesses";
import { SignOutButton } from "./sign-out-button";

const STATUS_STYLE: Record<string, string> = {
  draft: "bg-white/10 text-white/60",
  pending_approval: "bg-amber-500/15 text-amber-400",
  live: "bg-emerald-500/15 text-emerald-400",
};

export default async function StudioDashboard() {
  const user = await getSessionUser();
  if (!user) redirect("/studio/login");

  const businesses = await listBusinessesForAgent(user.id, user.role === "admin");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">
              {user.role === "admin" ? "All sites" : "Your sites"}
            </h1>
            <p className="mt-1 text-sm text-white/50">{user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            {user.role === "admin" && (
              <Link
                href="/studio/admin"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 hover:border-white/30"
              >
                Approval queue
              </Link>
            )}
            <Link
              href="/studio/new"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              + New site
            </Link>
            <SignOutButton />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {businesses.length === 0 && (
            <p className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/50">
              No sites yet. Click "New site" to build your first one.
            </p>
          )}
          {businesses.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <div>
                <p className="font-medium">{b.profile_data.practiceName}</p>
                <p className="text-xs text-white/40">{b.profile_data.doctorName}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLE[b.status]}`}>
                  {b.status.replace("_", " ")}
                </span>
                <Link
                  href={`/studio/${b.id}`}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80 hover:border-white/30"
                >
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
