"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HomepageClientProps {
  homepageData: any
}

export default function HomepageClient({ homepageData }: HomepageClientProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const hero = homepageData?.hero || {}
  const aboutCoach = homepageData?.aboutCoach || {}
  const whatYoullAchieve = homepageData?.whatYoullAchieve || {}
  const coachingApproach = homepageData?.coachingApproach || {}
  const whoItsFor = homepageData?.whoItsFor || {}
  const finalCTA = homepageData?.finalCTA || {}

  return (
    <main className="space-y-12 sm:space-y-16 relative">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 text-slate-900 px-2">
        <div className={`flex-1 w-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-amber-500/70 shadow-2xl">
            {hero.image && typeof hero.image === 'object' && hero.image.url ? (
              <Image
                src={hero.image.url}
                alt={hero.image.alt || "Coach Moteib bin Nasser AlAjmi portrait"}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <Image
                src="/Design sans titre (1).png"
                alt="Coach Moteib bin Nasser AlAjmi portrait"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
        <div className={`flex-1 space-y-4 sm:space-y-6 text-center md:text-left transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div
            className="inline-flex flex-col items-center text-center px-4 py-3 rounded-2xl border border-[#B99B56]/50 text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1A5345 0%, #15483b 100%)' }}
          >
            <span className="text-base sm:text-lg font-semibold uppercase tracking-widest">Marshall Goldsmith</span>
            <span className="text-xs sm:text-sm font-medium text-[#F7E4B0] tracking-[0.35em]">
              — CERTIFIED EXECUTIVE COACH —
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            <span className={`inline-block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {hero.title || 'Build Balanced Leadership'}
            </span>
            {hero.subtitle && (
              <>
                {' '}
                <span className={`inline-block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {hero.subtitle}
                </span>
              </>
            )}
          </h1>
          <p className="mx-auto md:mx-0 max-w-3xl text-base sm:text-lg md:text-xl text-slate-700 px-2 md:px-0">
            {hero.description || 'Helping managers build balanced lives through proven leadership coaching programs. Transform your management style, strengthen your team, and achieve lasting success.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 pt-2">
            {hero.primaryCTA && (
              <Link
                href={hero.primaryCTA.url || "https://calendly.com/coach_moteib"}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-slate-900 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 delay-900 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                aria-label={hero.primaryCTA.text || "Book Your Call"}
              >
                <span className="relative z-10">{hero.primaryCTA.text || "Book Your Call"}</span>
              </Link>
            )}
            {hero.secondaryCTA && (
              <Link
                href={hero.secondaryCTA.url || "/programs"}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold border-2 border-amber-500 text-slate-900 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                aria-label={hero.secondaryCTA.text || "View Programs"}
              >
                <span className="relative z-10">{hero.secondaryCTA.text || "View Programs"}</span>
              </Link>
            )}
          </div>
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

      {/* About Coach */}
      {aboutCoach.title && (
        <section className="grid md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          <div className="md:col-span-2 rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-4 sm:p-6 space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{aboutCoach.title || 'Meet Your Coach'}</h2>
            {aboutCoach.description && (
              <div className="text-sm sm:text-base text-slate-800" dangerouslySetInnerHTML={{ __html: aboutCoach.description }} />
            )}
            {aboutCoach.linkText && aboutCoach.linkUrl && (
              <Link
                href={aboutCoach.linkUrl}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                {aboutCoach.linkText}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          <div className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-4 sm:p-6 flex flex-col justify-center items-center">
            <div className="relative w-32 h-32 mb-3">
              <Image
                src="/logo.png"
                alt="MINDSHIFT ARABIA Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm text-slate-700 italic">
              Balance Minds. Build Futures.
            </p>
          </div>
        </section>
      )}

      {/* What You'll Achieve */}
      {whatYoullAchieve.title && (
        <section className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-4 sm:p-6 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{whatYoullAchieve.title}</h2>
          {whatYoullAchieve.description && (
            <p className="text-sm sm:text-base text-slate-800">{whatYoullAchieve.description}</p>
          )}
          {whatYoullAchieve.achievements && whatYoullAchieve.achievements.length > 0 && (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-800">
              {whatYoullAchieve.achievements.map((achievement: any, index: number) => (
                <li key={index} className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
                  <span className="block font-semibold text-sm sm:text-base mb-1">{achievement.title}</span>
                  {achievement.description && <span>{achievement.description}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Coaching Approach & Who It's For */}
      {(coachingApproach.title || whoItsFor.title) && (
        <section className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {coachingApproach.title && (
            <div className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-4 sm:p-6 space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{coachingApproach.title}</h2>
              {coachingApproach.description && (
                <div className="text-sm sm:text-base text-slate-800" dangerouslySetInnerHTML={{ __html: coachingApproach.description }} />
              )}
            </div>
          )}
          {whoItsFor.title && (
            <div className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-4 sm:p-6 space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{whoItsFor.title}</h2>
              {whoItsFor.description && (
                <div className="text-sm sm:text-base text-slate-800" dangerouslySetInnerHTML={{ __html: whoItsFor.description }} />
              )}
            </div>
          )}
        </section>
      )}

      {/* Final CTA */}
      {finalCTA.title && (
        <section className="text-center space-y-3 sm:space-y-4 text-slate-900 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{finalCTA.title}</h2>
          {finalCTA.description && (
            <p className="text-sm sm:text-base text-slate-700">{finalCTA.description}</p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {finalCTA.primaryCTA && (
              <Link
                href={finalCTA.primaryCTA.url || "https://calendly.com/coach_moteib"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label={finalCTA.primaryCTA.text || "Book Your Call Today"}
              >
                {finalCTA.primaryCTA.text || "Book Your Call Today"}
              </Link>
            )}
            {finalCTA.secondaryCTA && (
              <Link
                href={finalCTA.secondaryCTA.url || "/programs"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold border-2 border-amber-500 text-slate-900 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-colors"
                aria-label={finalCTA.secondaryCTA.text || "View All Programs"}
              >
                {finalCTA.secondaryCTA.text || "View All Programs"}
              </Link>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
