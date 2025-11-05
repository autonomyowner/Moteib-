"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function OnboardingPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to rooms page (no authentication needed)
    router.replace("/rooms")
  }, [router])

  return (
    <div className="p-6 text-sm opacity-70">Redirecting to rooms...</div>
  )
}
