import { listBusinessSlugs } from "@/lib/studio/store";
import { UploadForm } from "./upload-form";

export default function StudioPage() {
  const sites = listBusinessSlugs();

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-xl font-semibold">TheTechWolves Studio</h1>
        <p className="mt-1 text-sm text-white/50">
          Upload a single-page HTML site (built with ChatGPT/Claude on the call) — get a shareable preview link instantly.
        </p>

        <UploadForm />

        <div className="mt-10">
          <h2 className="text-sm font-semibold text-white/70">Previously uploaded</h2>
          <div className="mt-3 space-y-2">
            {sites.length === 0 && (
              <p className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-white/50">
                Nothing uploaded yet.
              </p>
            )}
            {sites.map((s) => (
              <div
                key={s.slug}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">/business/{s.slug}</p>
                  <p className="text-xs text-white/40">{s.savedAt.toLocaleString()}</p>
                </div>
                <a
                  href={`/business/${s.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80 hover:border-white/30"
                >
                  Open
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
