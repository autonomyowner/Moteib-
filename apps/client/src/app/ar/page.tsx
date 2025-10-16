"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Tajawal } from "next/font/google"

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ["arabic"],
  display: 'swap',
})

export default function ArabicLandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Set RTL direction on html element
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('lang', 'ar')
    
    return () => {
      // Reset to LTR when leaving
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }, [])

  return (
    <main className={`space-y-16 relative ${tajawal.className}`}>
      {/* Landing background: light cream with gold dot grid */}
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
      {/* Hero */}
      <section className="text-center space-y-4 sm:space-y-6 text-slate-900 px-2">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className={`inline-block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>تَحدَّث بطبيعتك.</span>{' '}
          <span className={`inline-block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>وتواصَل فورًا</span>{' '}
          <span className={`inline-block transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>— مع TRAVoices</span>
        </h1>
        <p className={`mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-slate-700 px-2 transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          منصّة ترجمة صوتية فورية مدعومة بالذكاء الاصطناعي، تُمكِّنك من التحدّث بأي لغة — ليُسمع صوتك كما هو، بصوتك الحقيقي المولّد آليًا. جِسْر للتواصل بين الثقافات واللغات واللهجات — في الوقت الفعلي.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/signup"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-slate-900 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            aria-label="ابدأ الحديث"
            style={{
              backgroundSize: '200% 100%',
              animation: isVisible ? 'balayageLTR 3s ease-in-out infinite' : 'none'
            }}
          >
            <span className="relative z-10">ابدأ الحديث</span>
          </Link>
          <Link
            href="/signup"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            aria-label="إنشاء حساب"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 100%)',
              backgroundSize: '200% 100%',
              animation: isVisible ? 'balayageRTL 3s ease-in-out infinite' : 'none'
            }}
          >
            <span className="relative z-10">إنشاء حساب</span>
          </Link>
        </div>
        <style jsx>{`
          @keyframes balayageRTL {
            0%, 100% {
              background-position: 100% 50%;
            }
            50% {
              background-position: 0% 50%;
            }
          }
          @keyframes balayageLTR {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </section>

      {/* Who we are */}
      <section className="grid md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
        <div className="md:col-span-2 rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-6 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">من نحن</h2>
          <p className="text-sm sm:text-base text-slate-800">
            نحن <span className="font-semibold">مبتكرون سعوديون</span> — مهمّتنا إزالة حواجز اللغة، لنجعل أي شخص قادرًا على التحدث بطبيعته، ويُفهَم بدقّة تامّة.
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            وُلِدت TRAVoices من إيمانٍ بأن التواصل الحقيقي يحدث عندما تختفي التقنية خلف المشهد — عندما يتمكّن الناس من الحديث، والفهم، والتعاون بانسيابية، مهما كانت لغتهم.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">القيادة</h3>
          <p className="mt-2 text-sm sm:text-base text-slate-800">
            <span className="font-semibold">ناصر آل خازم</span>، الرئيس التنفيذي
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-700">
            المؤسس والرؤية وراء مهمّة ابتكار أكثر مُترجم صوتي بشري الطابع في العالم. يركّز على تطوير التواصل الفوري، وتوليد الصوت الطبيعي، والفهم السياقي العميق الذي يجعل الحديث يبدو حقيقيًا بحق.
          </p>
        </div>
      </section>

      {/* What is the SaaS */}
      <section className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">ما هي TRAVoices؟</h2>
        <p className="text-sm sm:text-base text-slate-800">
          TRAVoices هي منصّة &ldquo;البرمجيات كخدمة&rdquo; (SaaS) تُقدِّم ترجمة صوتية فورية متعددة اللغات، بدقة سياقية شبه كاملة، مع استنساخ صوت المستخدم الحقيقي.
          تحدث مرة واحدة — ودع صوتك يُسمَع بلغة أخرى، بصوتك أنت.
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-800">
          <li className="rounded-lg border border-black/10 bg-white/70 p-3 sm:p-4">
            <span className="block font-semibold text-sm sm:text-base mb-1">🎙 الترجمة الصوتية بالذكاء الاصطناعي</span>
            ترجمة فورية بين أي لغتين، مع فهم دقيق للسياق والمعنى.
          </li>
          <li className="rounded-lg border border-black/10 bg-white/70 p-3 sm:p-4">
            <span className="block font-semibold text-sm sm:text-base mb-1">🧠 استنساخ الصوت</span>
            يحافظ على نبرة الصوت، والإيقاع، والعاطفة الأصلية للمتحدث.
          </li>
          <li className="rounded-lg border border-black/10 bg-white/70 p-3 sm:p-4">
            <span className="block font-semibold text-sm sm:text-base mb-1">🌐 دعم متعدد اللغات</span>
            من الإنجليزية والعربية إلى الصينية والفرنسية وغيرها — يتكيّف TRAVoices مع كل لهجة ونغمة.
          </li>
          <li className="rounded-lg border border-black/10 bg-white/70 p-3 sm:p-4">
            <span className="block font-semibold text-sm sm:text-base mb-1">🔊 مكالمات فورية</span>
            تكامل سلس مع التطبيقات، ومكالمات الفيديو، وأنظمة الاتصالات، لترجمة فورية ثنائية الاتجاه.
          </li>
          <li className="rounded-lg border border-black/10 bg-white/70 p-3 sm:p-4">
            <span className="block font-semibold text-sm sm:text-base mb-1">💬 محرك الفهم الثقافي</span>
            يفهم العبارات والتعابير الاصطلاحية — لا يترجم الكلمات فقط.
          </li>
        </ul>
      </section>

      {/* What we do and aim */}
      <section className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-6 space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">ما الذي نفعله</h2>
          <p className="text-sm sm:text-base text-slate-800">
            نساعد الأفراد، والشركات، والجهات الحكومية على التواصل عبر الحدود وكأنهم يتحدثون اللغة نفسها.
            من الاجتماعات الدولية إلى خدمة العملاء والتعليم — تجعل TRAVoices التواصل العالمي طبيعيًا وإنسانيًا.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-6 space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">رؤيتنا</h2>
          <p className="text-sm sm:text-base text-slate-800">
            أن نصبح أوّل طبقة ترجمة صوتية عالمية — تمكّن كل إنسان من التحدث بصوته، بأي لغة، مع الحفاظ على وضوح المشاعر ونغمة الصوت الأصلية.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-3 sm:space-y-4 text-slate-900 px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">جاهز للتحدث بلا حدود؟</h2>
        <p className="text-sm sm:text-base text-slate-700">اختبر عصرًا جديدًا من التواصل الصوتي. ابدأ أول تجربة ترجمة فورية خلال ثوانٍ.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="جرّب TRAVoices الآن"
          >
            جرّب TRAVoices الآن
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="تسجيل الدخول"
          >
            تسجيل الدخول
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-2 text-slate-700 pb-6 sm:pb-8">
        <p className="text-xs sm:text-sm">© 2025 TRAVoices — بُنيت بشغف</p>
        <p className="text-xs sm:text-sm italic">نربط الأصوات. نوحّد العوالم.</p>
      </footer>
    </main>
  )
}

