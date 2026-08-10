"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_DOCTOR_PROFILE, type DoctorBusinessProfile } from "@/lib/wizard/doctor-profile-schema";

const EMPTY: DoctorBusinessProfile = {
  ...DEFAULT_DOCTOR_PROFILE,
  practiceName: "",
  doctorName: "",
  credentials: "",
  specialtyBadge: "",
  heroHeadline: "We take care of you,\n$properly$.",
  heroSubcopy: "",
  phone: "",
  whatsappNumber: "",
  address: "",
  credentialsList: ["", "", "", ""],
  treatments: [
    { title: "", body: "" },
    { title: "", body: "" },
    { title: "", body: "" },
  ],
  testimonials: [],
  hours: [
    { day: "Mon – Fri", time: "9:00 – 18:00" },
    { day: "Saturday", time: "10:00 – 14:00" },
    { day: "Sunday", time: "Closed" },
  ],
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-emerald-400";
  return (
    <div className="space-y-1.5">
      <label className="text-sm text-white/70">{label}</label>
      {textarea ? (
        <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}

export default function NewBusinessPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<DoctorBusinessProfile>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof DoctorBusinessProfile>(key: K, value: DoctorBusinessProfile[K]) {
    setProfile((p) => ({ ...p, [key]: value }));
  }

  function setTreatment(i: number, field: "title" | "body", value: string) {
    setProfile((p) => {
      const treatments = [...p.treatments];
      treatments[i] = { ...treatments[i], [field]: value };
      return { ...p, treatments };
    });
  }

  function setCredential(i: number, value: string) {
    setProfile((p) => {
      const list = [...p.credentialsList];
      list[i] = value;
      return { ...p, credentialsList: list };
    });
  }

  async function handleCreate() {
    setSaving(true);
    setError(null);
    const res = await fetch("/api/studio/businesses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile }),
    });
    const json = await res.json();
    setSaving(false);
    if (!res.ok) {
      setError(json.error ?? "Something went wrong");
      return;
    }
    router.push(`/studio/${json.business.id}`);
  }

  const canSubmit = profile.practiceName.trim() && profile.doctorName.trim() && profile.whatsappNumber.trim();

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-xl font-semibold">New business site</h1>
          <p className="mt-1 text-sm text-white/50">Doctor / private-practice template. Fill what you have — you can edit later.</p>
        </div>

        {error && <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{error}</p>}

        <section className="space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-semibold text-emerald-400">Practice & doctor</h2>
          <Field label="Practice name" value={profile.practiceName} onChange={(v) => set("practiceName", v)} placeholder="Bright Smile Dermatology" />
          <Field label="Doctor's name" value={profile.doctorName} onChange={(v) => set("doctorName", v)} placeholder="Dr. Sarah Osei" />
          <Field label="Credentials line" value={profile.credentials} onChange={(v) => set("credentials", v)} placeholder="MD, FAAD — Founder" />
          <Field label="Specialty badge" value={profile.specialtyBadge} onChange={(v) => set("specialtyBadge", v)} placeholder="Board Certified Dermatologist" />
        </section>

        <section className="space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-semibold text-emerald-400">Hero copy</h2>
          <Field label="Headline (use $..$ to italicize a phrase)" value={profile.heroHeadline} onChange={(v) => set("heroHeadline", v)} textarea />
          <Field label="Sub-copy" value={profile.heroSubcopy} onChange={(v) => set("heroSubcopy", v)} textarea placeholder="A short paragraph about the practice" />
        </section>

        <section className="space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-semibold text-emerald-400">Contact</h2>
          <Field label="Phone (display)" value={profile.phone} onChange={(v) => set("phone", v)} placeholder="+91 98765 43210" />
          <Field
            label="WhatsApp number (digits only, with country code, no +)"
            value={profile.whatsappNumber}
            onChange={(v) => set("whatsappNumber", v.replace(/\D/g, ""))}
            placeholder="919876543210"
          />
          <Field label="Address" value={profile.address} onChange={(v) => set("address", v)} />
        </section>

        <section className="space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-semibold text-emerald-400">Trust strip (4 lines)</h2>
          {profile.credentialsList.map((c, i) => (
            <Field key={i} label={`Credential ${i + 1}`} value={c} onChange={(v) => setCredential(i, v)} />
          ))}
        </section>

        <section className="space-y-6 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-sm font-semibold text-emerald-400">Treatments / appointment types</h2>
          {profile.treatments.map((t, i) => (
            <div key={i} className="space-y-3 border-t border-white/5 pt-4 first:border-0 first:pt-0">
              <Field label={`Treatment ${i + 1} title`} value={t.title} onChange={(v) => setTreatment(i, "title", v)} />
              <Field label="Description" value={t.body} onChange={(v) => setTreatment(i, "body", v)} textarea />
            </div>
          ))}
        </section>

        <button
          onClick={handleCreate}
          disabled={!canSubmit || saving}
          className="w-full rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {saving ? "Creating…" : "Create draft"}
        </button>
      </div>
    </main>
  );
}
