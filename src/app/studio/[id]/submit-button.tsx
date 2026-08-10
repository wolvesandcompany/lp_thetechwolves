"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SubmitForApprovalButton({ businessId }: { businessId: string }) {
  const router = useRouter();
  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/studio/businesses/${businessId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentReference: reference }),
    });
    setLoading(false);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Failed to submit");
      return;
    }
    router.refresh();
  }

  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <p className="text-sm text-white/70">
        Once you've collected the client's payment and sent our cut, submit here — it'll notify the admin for approval.
      </p>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <input
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        placeholder="Payment reference / note (optional)"
        className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-emerald-400"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Submitting…" : "Submit for approval"}
      </button>
    </div>
  );
}
