"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function UploadForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ slug: string; url: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setError("Choose an HTML file first");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.set("name", name);
    formData.set("file", file);

    const res = await fetch("/api/studio/upload", { method: "POST", body: formData });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Upload failed");
      return;
    }
    setResult(data);
    setName("");
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="space-y-2">
        <label className="text-sm text-white/70">Business name</label>
        <input
          type="text"
          required
          placeholder="e.g. Dr Sharma Clinic"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm outline-none focus:border-emerald-400"
        />
        <p className="text-xs text-white/40">Becomes the URL: thetechwolves.com/business/your-slug</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/70">HTML file</label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".html,text/html"
          required
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white/70 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-black"
        />
        {fileName && <p className="text-xs text-white/40">Selected: {fileName}</p>}
      </div>

      {error && <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>}

      {result && (
        <div className="space-y-2 rounded-lg bg-emerald-500/10 px-3 py-3 text-sm text-emerald-400">
          <p>Uploaded. Preview is live at:</p>
          <a href={result.url} target="_blank" rel="noreferrer" className="font-semibold underline">
            thetechwolves.com{result.url}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Uploading…" : "Upload & Preview"}
      </button>
    </form>
  );
}
