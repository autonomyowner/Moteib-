"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ["arabic"],
  display: 'swap',
});

export default function ArabicVisionPage() {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedDesc, setDisplayedDesc] = useState('');
  const [titleComplete, setTitleComplete] = useState(false);
  
  const fullTitle = 'نبني طبقة الصوت لعصر الذكاء الاصطناعي';
  const fullDesc = 'تحوِّل TRAVoices الكلام البشري إلى تواصل عالمي موحّد. نمزج بين الترجمة الفورية، والفهم السياقي، واستنساخ الصوت في نظام واحد متكامل وسلس. ليست مجرد تطبيق ترجمة آخر — بل هي الأساس لحوار عالمي بلا حدود.';

  useEffect(() => {
    // Set RTL direction on html element
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    
    return () => {
      // Reset to LTR when leaving
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    };
  }, []);

  useEffect(() => {
    // Typewriter effect for title
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setTitleComplete(true);
      }
    }, 50); // Faster speed: 50ms per character

    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    // Typewriter effect for description (starts after title completes)
    if (!titleComplete) return;
    
    let descIndex = 0;
    const descInterval = setInterval(() => {
      if (descIndex < fullDesc.length) {
        setDisplayedDesc(fullDesc.slice(0, descIndex + 1));
        descIndex++;
      } else {
        clearInterval(descInterval);
      }
    }, 30); // Faster speed: 30ms per character

    return () => clearInterval(descInterval);
  }, [titleComplete]);

  return (
    <div className={`relative ${tajawal.className}`}>
      {/* Background motif to match pricing page */}
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

      <section className="mx-auto max-w-5xl">
        <header className="pt-4 sm:pt-6 pb-3 sm:pb-4 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 min-h-[4rem]">
            {displayedTitle}
            {!titleComplete && <span className="animate-pulse">|</span>}
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-700 max-w-3xl min-h-[3rem]">
            {displayedDesc}
            {titleComplete && displayedDesc.length < fullDesc.length && <span className="animate-pulse">|</span>}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">لماذا الآن</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-800">
              الصوت هو واجهة التواصل الجديدة — لكن اللغة لا تزال تفصل بيننا.
              نماذج الذكاء الاصطناعي اليوم قادرة على فهم المعنى أبعد من الكلمات،
              ومع ذلك، ما تزال أدوات التواصل تقليدية ومجزأة.
              العالم بحاجة إلى بنية تحتية متعددة اللغات —
              حيث يتدفّق الكلام بسلاسة عبر الحدود واللهجات والثقافات.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">ما الذي نقدّمه</h2>
            <ul className="mt-2 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-800 list-disc list-inside">
              <li>🎙 ترجمة فورية بدقة عاطفية عالية</li>
              <li>🧠 محرك فهم سياقي يتعامل مع العبارات الاصطلاحية والنبرة والمعاني الضمنية</li>
              <li>🗣 استنساخ صوتي يعكس هوية المتحدث وتعبيره الشخصي</li>
              <li>🌍 طبقة تواصل عالمية فورية للمكالمات، والاجتماعات، وواجهات البرمجة (APIs)</li>
              <li>📡 تقنية تأخير تكيفي تضمن ترجمة أسرع من ‎300‎ ملّي ثانية</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900">إلى أين نتجه</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-800">
              من المكالمات بين الأفراد إلى بنى الاتصالات المؤسسية —
              تُنشئ TRAVoices نظام التشغيل للمحادثات البشرية.
              الهدف النهائي: فهم متزامن — بلا ترجمة مكتوبة، بلا تأخير، فقط صوت.
            </p>
          </div>
        </div>

        <section className="mt-8 sm:mt-10 rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">عرض للمستثمرين</h3>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-800">
            نفتح جولة محدودة للشركاء الذين يرون في الصوت الطبقة التالية لبروتوكولات الإنترنت.
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-800">
            تمويلنا يسرّع تطوير:
          </p>
          <ul className="mt-2 mr-4 sm:mr-6 space-y-1 text-xs sm:text-sm text-slate-800 list-disc">
            <li>بنية تحتية للذكاء الصوتي وتخصيص النماذج اللغوية</li>
            <li>شراكات بيانات صوتية عالمية</li>
            <li>استراتيجية التوسع عبر الشركات، والاتصالات، وصنّاع المحتوى</li>
          </ul>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm sm:text-base text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold shadow hover:brightness-105"
            >
              احصل على وصول مبكر
            </Link>
            <a
              href="mailto:founders@travoices.ai?subject=TRAVoices%20—%20عرض%20استثماري"
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm sm:text-base border border-black/10 hover:bg-black/5 text-slate-900"
            >
              🎧 تعرّف على فرص الاستثمار
            </a>
          </div>
        </section>

        <footer className="mt-8 sm:mt-10 pb-2 text-xs sm:text-sm text-slate-700 px-2">
          صُمّمت TRAVoices لأولئك الذين يؤمنون بعالمٍ بلا حواجز لغوية. لنرتقِ معًا بمستوى التواصل الإنساني.
        </footer>
      </section>
    </div>
  );
}

