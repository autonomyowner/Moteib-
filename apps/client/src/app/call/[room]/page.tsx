"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import VoiceRoom from "@/components/VoiceRoom";
import { supabase, supabaseConfigured } from "@/lib/supabase";

export default function CallPage({ 
  params 
}: { 
  params: Promise<{ room: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("Guest");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roomExists, setRoomExists] = useState(false);

  useEffect(() => {
    const checkAuthAndRoom = async () => {
      if (!supabaseConfigured || !supabase) {
        setError("Authentication not configured");
        setLoading(false);
        return;
      }

      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        setError("Failed to check authentication");
        setLoading(false);
        return;
      }

      if (!session) {
        router.replace(`/login?redirect=${encodeURIComponent(`/call/${resolvedParams.room}`)}`);
        return;
      }

      // Check if room exists and is active
      try {
        const response = await fetch(`/api/rooms/join?roomName=${encodeURIComponent(resolvedParams.room)}`);
        const data = await response.json();
        
        if (!response.ok) {
          setError(data.error || "Room not found or is no longer active");
          setLoading(false);
          return;
        }

        setRoomExists(true);
      } catch (err) {
        setError("Failed to verify room. Please try again.");
        setLoading(false);
        return;
      }

      setIsAuthenticated(true);
      setDisplayName(session.user.email?.split("@")[0] || "TRAVoices User");
      setLoading(false);
    };

    checkAuthAndRoom();
  }, [resolvedParams.room, router]);

  if (loading) {
    return (
      <main className="space-y-12 relative min-h-screen">
        <div
          aria-hidden
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: '#fff8dc',
            backgroundImage: 'radial-gradient(rgba(201,162,39,0.6) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0',
          }}
        />
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center rounded-xl border border-black/10 bg-white/70 backdrop-blur p-8 max-w-md text-slate-900">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-black/10 border-t-amber-500 animate-spin"></div>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Loading...</h2>
            <p className="text-slate-700 text-sm">Checking authentication</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="space-y-12 relative min-h-screen">
        <div
          aria-hidden
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: '#fff8dc',
            backgroundImage: 'radial-gradient(rgba(201,162,39,0.6) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0',
          }}
        />
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center rounded-xl border border-red-300 bg-red-50/70 backdrop-blur p-8 max-w-md text-slate-900">
            <svg className="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h2 className="text-xl font-bold text-red-900 mb-2">Room Not Found</h2>
            <p className="text-red-700 text-sm mb-6">{error}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => router.push("/rooms")} 
                className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go to Rooms
              </button>
              <button 
                onClick={() => router.push("/")} 
                className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold border border-black/20 bg-white/70 hover:bg-white/90"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthenticated || !roomExists) {
    return null;
  }

  return <VoiceRoom room={resolvedParams.room} displayName={displayName} />;
}

