"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ["arabic"],
  display: 'swap',
});

export default function ArabicRoomsPage() {
  const router = useRouter();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string>("");
  
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    title: "",
    description: "",
    maxParticipants: 10,
  });

  const generateRoomName = (title: string): string => {
    // Generate a URL-friendly room name from title or use random
    if (title) {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .substring(0, 50) || `room-${Date.now()}`;
    }
    return `room-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setCreating(true);
    setError("");

    try {
      // Generate room name if not provided
      const roomName = newRoom.roomName || generateRoomName(newRoom.title);
      
      // Validate room name format
      const roomNameRegex = /^[a-zA-Z0-9_-]+$/;
      if (!roomNameRegex.test(roomName)) {
        throw new Error("اسم الغرفة يجب أن يحتوي فقط على أحرف وأرقام وشرطات وشرطات سفلية");
      }

      // Create room instantly (no API call needed for ephemeral rooms)
      // Just redirect to the call page
      router.push(`/call/${roomName}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "فشل إنشاء الغرفة");
    } finally {
      setCreating(false);
    }
  };

  return (
    <main className={`relative min-h-screen ${tajawal.className}`}>
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
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              غرف الصوت
            </h1>
            <p className="text-slate-700 mt-2">
              إنشاء أو الانضمام إلى غرف التعاون الصوتي
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="إنشاء غرفة جديدة"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            إنشاء غرفة
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-red-300 bg-red-50/70 backdrop-blur p-4 mb-6 text-red-700">
            {error}
          </div>
        )}

        <div className="text-center rounded-xl border border-black/10 bg-white/70 backdrop-blur p-12 text-slate-900">
          <svg className="w-16 h-16 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          <h2 className="text-xl font-bold mb-2">أنشئ غرفتك الصوتية</h2>
          <p className="text-slate-700 mb-6">انقر على الزر أعلاه لإنشاء غرفة صوتية جديدة على الفور</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            إنشاء غرفة
          </button>
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur p-8 max-w-md w-full text-slate-900">
            <h2 className="text-2xl font-bold mb-6">إنشاء غرفة جديدة</h2>
            
            <form onSubmit={handleCreateRoom} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  عنوان الغرفة
                </label>
                <input
                  id="title"
                  type="text"
                  value={newRoom.title}
                  onChange={(e) => setNewRoom({ ...newRoom, title: e.target.value })}
                  placeholder="غرفتي الرائعة"
                  className="w-full rounded-md border border-black/20 bg-white/70 p-2 outline-none focus:ring-2 focus:ring-amber-400/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="roomName" className="block text-sm font-medium mb-2">
                  اسم الغرفة (متوافق مع الرابط، اختياري - سيتم إنشاؤه تلقائياً إذا كان فارغاً)
                </label>
                <input
                  id="roomName"
                  type="text"
                  value={newRoom.roomName}
                  onChange={(e) => setNewRoom({ ...newRoom, roomName: e.target.value })}
                  placeholder="my-awesome-room"
                  className="w-full rounded-md border border-black/20 bg-white/70 p-2 outline-none focus:ring-2 focus:ring-amber-400/50"
                  pattern="[a-zA-Z0-9_-]+"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  الوصف (اختياري)
                </label>
                <textarea
                  id="description"
                  value={newRoom.description}
                  onChange={(e) => setNewRoom({ ...newRoom, description: e.target.value })}
                  placeholder="وصف مختصر لغرفتك"
                  className="w-full rounded-md border border-black/20 bg-white/70 p-2 outline-none focus:ring-2 focus:ring-amber-400/50"
                  rows={3}
                />
              </div>

              <div>
                <label htmlFor="maxParticipants" className="block text-sm font-medium mb-2">
                  الحد الأقصى للمشاركين
                </label>
                <input
                  id="maxParticipants"
                  type="number"
                  value={newRoom.maxParticipants}
                  onChange={(e) => setNewRoom({ ...newRoom, maxParticipants: parseInt(e.target.value) })}
                  min="2"
                  max="50"
                  className="w-full rounded-md border border-black/20 bg-white/70 p-2 outline-none focus:ring-2 focus:ring-amber-400/50"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 rounded-md border border-black/20 bg-white/70 px-4 py-2 font-semibold hover:bg-white/90"
                  disabled={creating}
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50"
                  disabled={creating}
                  aria-label="إنشاء غرفة"
                >
                  {creating ? "جاري الإنشاء..." : "إنشاء"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
