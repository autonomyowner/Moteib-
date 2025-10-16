"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase, supabaseConfigured } from "../../lib/supabase"

export default function OnboardingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true
    const init = async () => {
      if (!supabase) { setLoading(false); return }
      const sessionRes = await supabase.auth.getSession()
      const session = sessionRes.data.session
      if (!session) { router.replace("/login?redirect=/onboarding"); return }
      // Ensure profile row exists
      const insertRes = await supabase.from("users").insert({ id: session.user.id }).select("id").single()
      if (insertRes.error && insertRes.error.code !== '23505') {
        // ignore unique violation-like errors; otherwise surface
      }
      const { data: profile } = await supabase.from("users").select("onboarded").eq("id", session.user.id).maybeSingle()
      if (!active) return
      if (profile?.onboarded) {
        router.replace("/")
        return
      }
      setLoading(false)
    }
    init()
    return () => { active = false }
  }, [router])

  const handleComplete = async () => {
    try {
      setError("")
      setStatus("Completing onboarding…")
      const { data: sessionData } = await supabase!.auth.getSession()
      const userId = sessionData.session!.user.id
      await supabase!.from("users").update({ onboarded: true }).eq("id", userId)
      router.replace("/rooms")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Onboarding failed")
      setStatus("")
    }
  }

  if (!supabaseConfigured) return <div className="p-6 text-sm text-red-600">Supabase is not configured. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.</div>
  if (loading) return <div className="p-6 text-sm opacity-70">Preparing onboarding…</div>

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-semibold">Welcome to TRAVoices</h1>
      <p className="text-sm opacity-70">Your AI-powered real-time voice translation platform. Break language barriers and connect with anyone, anywhere.</p>
      <div className="space-y-3 py-4">
        <div className="p-4 rounded-lg border border-black/10 dark:border-white/15 bg-white/5">
          <h2 className="font-medium text-sm">🎙 Voice Translation</h2>
          <p className="text-xs opacity-70 mt-1">Speak naturally and be understood in any language</p>
        </div>
        <div className="p-4 rounded-lg border border-black/10 dark:border-white/15 bg-white/5">
          <h2 className="font-medium text-sm">🔊 Real-Time Rooms</h2>
          <p className="text-xs opacity-70 mt-1">Create and join voice rooms for seamless collaboration</p>
        </div>
        <div className="p-4 rounded-lg border border-black/10 dark:border-white/15 bg-white/5">
          <h2 className="font-medium text-sm">🧠 Voice Cloning</h2>
          <p className="text-xs opacity-70 mt-1">Preserve your unique voice and speaking style</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={handleComplete} className="rounded-md bg-black text-white px-4 py-2 text-sm dark:bg-white dark:text-black hover:opacity-90">Get Started</button>
        {status && <span className="text-sm opacity-70">{status}</span>}
        {error && <span className="text-sm text-red-600">{error}</span>}
      </div>
    </div>
  )
}


