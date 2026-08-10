"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ApproveButton({ businessId }: { businessId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleApprove() {
    if (!confirm("Confirm you've received the agent's payment cut before approving?")) return;
    setLoading(true);
    const res = await fetch(`/api/studio/businesses/${businessId}/approve`, { method: "POST" });
    setLoading(false);
    if (res.ok) router.refresh();
    else alert("Failed to approve");
  }

  return (
    <button
      onClick={handleApprove}
      disabled={loading}
      className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-50"
    >
      {loading ? "Approving…" : "Approve → go live"}
    </button>
  );
}
