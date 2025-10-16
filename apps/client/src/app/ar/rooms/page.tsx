"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ["arabic"],
  display: 'swap',
});

interface Room {
  id: string;
  room_name: string;
  title: string;
  description: string;
  is_active: boolean;
  max_participants: number;
  created_at: string;
}

export default function ArabicRoomsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [error, setError] = useState<string>("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [sharing, setSharing] = useState<string | null>(null);
  const [shareModal, setShareModal] = useState<{ room: Room; shareableLink: string } | null>(null);
  
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    title: "",
    description: "",
    maxParticipants: 10,
  });

  useEffect(() => {
    // Set RTL direction
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    
    return () => {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    };
  }, []);

  useEffect(() => {
    const checkAuthAndFetchRooms = async () => {
      if (!supabaseConfigured || !supabase) {
        setError("المصادقة غير مكونة");
        setLoading(false);
        return;
      }

      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session) {
        router.replace("/login?redirect=/ar/rooms");
        return;
      }

      await fetchRooms(session.access_token);
    };

    checkAuthAndFetchRooms();
  }, [router]);

  const fetchRooms = async (token: string) => {
    try {
      const response = await fetch("/api/rooms/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("فشل تحميل الغرف");
      }

      const data = await response.json();
      setRooms(data.rooms || []);
    } catch (err) {
      setError("فشل تحميل الغرف");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabase) return;
    
    setCreating(true);
    setError("");

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setError("يرجى تسجيل الدخول لإنشاء غرفة");
        setCreating(false);
        return;
      }

      const response = await fetch("/api/rooms/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify(newRoom),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "فشل إنشاء الغرفة");
      }

      const { room } = await response.json();
      
      setShowCreateModal(false);
      setNewRoom({
        roomName: "",
        title: "",
        description: "",
        maxParticipants: 10,
      });
      
      router.push(`/call/${room.room_name}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "فشل إنشاء الغرفة");
    } finally {
      setCreating(false);
    }
  };

  const handleJoinRoom = (roomName: string) => {
    router.push(`/call/${roomName}`);
  };

  const handleShareRoom = async (room: Room) => {
    if (!supabase) return;
    
    setSharing(room.id);
    setError("");

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setError("يرجى تسجيل الدخول لمشاركة الغرف");
        setSharing(null);
        return;
      }

      const response = await fetch("/api/rooms/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ roomName: room.room_name }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "فشل إنشاء رابط المشاركة");
      }

      const { shareableLink } = await response.json();
      setShareModal({ room, shareableLink });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "فشل مشاركة الغرفة");
    } finally {
      setSharing(null);
    }
  };

  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  if (loading) {
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
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center rounded-xl border border-black/10 bg-white/70 backdrop-blur p-8 max-w-md text-slate-900">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-black/10 border-t-amber-500 animate-spin"></div>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">جاري التحميل...</h2>
            <p className="text-slate-700 text-sm">جاري جلب غرفك</p>
          </div>
        </div>
      </main>
    );
  }

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

        {rooms.length === 0 ? (
          <div className="text-center rounded-xl border border-black/10 bg-white/70 backdrop-blur p-12 text-slate-900">
            <svg className="w-16 h-16 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <h2 className="text-xl font-bold mb-2">لا توجد غرف بعد</h2>
            <p className="text-slate-700 mb-6">أنشئ غرفتك الصوتية الأولى للبدء</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              إنشاء غرفة
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-6 space-y-4 text-slate-900"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                  <p className="text-sm text-slate-600 font-mono mb-2">
                    {room.room_name}
                  </p>
                  {room.description && (
                    <p className="text-sm text-slate-700">{room.description}</p>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>الحد الأقصى {room.max_participants}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${room.is_active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span>{room.is_active ? 'نشطة' : 'غير نشطة'}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleJoinRoom(room.room_name)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label={`الانضمام إلى غرفة ${room.title}`}
                  >
                    انضم إلى الغرفة
                  </button>
                  <button
                    onClick={() => handleShareRoom(room)}
                    disabled={sharing === room.id}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold border border-black/15 bg-white/60 hover:bg-white/80 disabled:opacity-50"
                    aria-label={`مشاركة غرفة ${room.title}`}
                  >
                    {sharing === room.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></div>
                        جاري المشاركة...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        مشاركة
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur p-8 max-w-md w-full text-slate-900">
            <h2 className="text-2xl font-bold mb-6">إنشاء غرفة جديدة</h2>
            
            <form onSubmit={handleCreateRoom} className="space-y-4">
              <div>
                <label htmlFor="roomName" className="block text-sm font-medium mb-2">
                  اسم الغرفة (متوافق مع الرابط)
                </label>
                <input
                  id="roomName"
                  type="text"
                  value={newRoom.roomName}
                  onChange={(e) => setNewRoom({ ...newRoom, roomName: e.target.value })}
                  placeholder="my-awesome-room"
                  className="w-full rounded-md border border-black/20 bg-white/70 p-2 outline-none focus:ring-2 focus:ring-amber-400/50"
                  required
                />
              </div>

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

      {/* Share Modal */}
      {shareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="rounded-xl border border-black/10 bg-white/90 backdrop-blur p-8 max-w-md w-full text-slate-900">
            <h2 className="text-2xl font-bold mb-6">مشاركة الغرفة</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{shareModal.room.title}</h3>
                <p className="text-sm text-slate-600 font-mono">{shareModal.room.room_name}</p>
              </div>

              <div>
                <label htmlFor="shareLink" className="block text-sm font-medium mb-2">
                  رابط المشاركة
                </label>
                <div className="flex gap-2">
                  <input
                    id="shareLink"
                    type="text"
                    value={shareModal.shareableLink}
                    readOnly
                    className="flex-1 rounded-md border border-black/20 bg-white/70 p-2 text-sm"
                  />
                  <button
                    onClick={() => handleCopyLink(shareModal.shareableLink)}
                    className="rounded-md border border-black/20 bg-white/70 px-3 py-2 text-sm hover:bg-white/90"
                    aria-label="نسخ الرابط"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-600">
                يمكن لأي شخص لديه هذا الرابط الانضمام إلى غرفتك. سيحتاجون إلى تسجيل الدخول للمشاركة في المكالمات الصوتية.
              </p>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShareModal(null)}
                  className="flex-1 rounded-md border border-black/20 bg-white/70 px-4 py-2 font-semibold hover:bg-white/90"
                >
                  إغلاق
                </button>
                <button
                  onClick={() => handleCopyLink(shareModal.shareableLink)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  نسخ الرابط
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

