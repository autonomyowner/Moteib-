"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to rooms page (no profile needed without auth)
    router.replace("/rooms");
  }, [router]);

  return (
    <main className="relative min-h-screen">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center rounded-xl border border-black/10 bg-white/70 backdrop-blur p-8 max-w-md text-slate-900">
          <p className="text-slate-700">Redirecting to rooms...</p>
        </div>
      </div>
    </main>
  );
}
