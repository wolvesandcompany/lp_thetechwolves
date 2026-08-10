"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SignOutButton() {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await createClient().auth.signOut();
        router.push("/studio/login");
        router.refresh();
      }}
      className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/60 hover:border-white/30"
    >
      Sign out
    </button>
  );
}
