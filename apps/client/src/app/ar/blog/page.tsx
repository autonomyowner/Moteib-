import Link from 'next/link';
import { getPublishedArticles } from '@/lib/keystatic';

export default async function BlogPageAr() {
  const articles = await getPublishedArticles();

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1A5345] via-[#2D6B5C] to-[#1A5345] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              رؤى قيادية
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              اكتشف أفكارًا تحويلية وحكمة عملية لترتقي برحلتك القيادية
            </p>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-10 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg">
              <svg className="w-16 h-16 text-amber-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-[#1A5345] text-xl font-semibold">مقالات جديدة قريبًا!</p>
              <p className="text-slate-600 mt-2">تابعنا للحصول على رؤى قيادية جديدة</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/ar/blog/${article.slug}`}
                className="group"
              >
                <article className="h-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Accent Bar */}
                  <div className="h-2 bg-gradient-to-r from-[#1A5345] via-amber-500 to-[#1A5345] group-hover:h-3 transition-all duration-300" />

                  <div className="p-8 h-full flex flex-col">
                    {/* Date Badge */}
                    <div className="mb-4">
                      <time dateTime={article.entry.publishedDate || undefined} className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full border border-amber-200">
                        {new Date(article.entry.publishedDate || Date.now()).toLocaleDateString('ar-SA', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1A5345] mb-4 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {article.entry.titleAr}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {article.entry.excerptAr}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-amber-600 font-bold group-hover:text-amber-700 group-hover:gap-3 transition-all duration-300">
                      <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                      <span>اقرأ المقال</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
