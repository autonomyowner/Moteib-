"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface CoachClientProps {
  coachData: any
}

export default function CoachClient({ coachData }: CoachClientProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!coachData) {
    return null
  }

  return (
    <main className="space-y-12 sm:space-y-16 relative">
      {/* Hero Section */}
      <section className="text-center space-y-6 px-2">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/logo.png"
              alt={coachData.name || "Moteib bin Nasser AlAjmi"}
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {coachData.name || 'Moteib bin Nasser AlAjmi'}
          </h1>
          {coachData.title && (
            <p className="text-lg sm:text-xl text-amber-600 font-semibold mt-3">
              {coachData.title}
            </p>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">About {coachData.name || 'Moteib bin Nasser AlAjmi'}</h2>
          {coachData.bio && (
            <div className="text-base text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: coachData.bio }} />
          )}
        </div>

        {coachData.philosophy && (
          <div className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Coaching Philosophy</h2>
            {coachData.philosophy.quote && (
              <p className="text-base text-slate-800 leading-relaxed">
                &ldquo;{coachData.philosophy.quote}&rdquo;
              </p>
            )}
            {coachData.philosophy.description && (
              <div className="text-base text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: coachData.philosophy.description }} />
            )}
            {coachData.philosophy.principles && coachData.philosophy.principles.length > 0 && (
              <ul className="space-y-2 text-base text-slate-700">
                {coachData.philosophy.principles.map((principle: any, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{principle.principle}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>

      {/* Expertise Areas */}
      {coachData.expertise && coachData.expertise.length > 0 && (
        <section className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Areas of Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coachData.expertise.map((area: any, index: number) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                {area.description && (
                  <p className="text-sm text-slate-700">{area.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Credentials & Background */}
      <section className="grid md:grid-cols-2 gap-6">
        {coachData.credentials && coachData.credentials.length > 0 && (
          <div className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Credentials & Certifications</h2>
            <ul className="space-y-3 text-base text-slate-700">
              {coachData.credentials.map((credential: any, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl">✓</span>
                  <span>{credential.credential}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {coachData.certifications && coachData.certifications.length > 0 && (
          <div 
            className="rounded-xl perspective-1000 cursor-pointer h-[500px] sm:h-[600px]"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Certifications</h2>
                <div className="relative w-full h-[calc(100%-80px)]">
                  {coachData.certifications[0] && coachData.certifications[0].image && typeof coachData.certifications[0].image === 'object' && coachData.certifications[0].image.url ? (
                    <Image
                      src={coachData.certifications[0].image.url}
                      alt={coachData.certifications[0].alt || "Leadership Certificate"}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src="/certif.png"
                      alt="Leadership Certificate"
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-sm text-slate-500 text-center mt-4">Click to see more</p>
              </div>
              
              {/* Back of card */}
              {coachData.certifications[1] && (
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Certifications</h2>
                  <div className="relative w-full h-[calc(100%-80px)]">
                    {coachData.certifications[1].image && typeof coachData.certifications[1].image === 'object' && coachData.certifications[1].image.url ? (
                      <Image
                        src={coachData.certifications[1].image.url}
                        alt={coachData.certifications[1].alt || "Strategy Certificate"}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src="/2.png"
                        alt="Strategy Certificate"
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <p className="text-sm text-slate-500 text-center mt-4">Click to flip back</p>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 rounded-xl border-2 border-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Ready to Start Your Leadership Journey?
        </h2>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          Book a complimentary consultation call to discuss your goals and discover how coaching can help you achieve them.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://calendly.com/coach_moteib"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
          >
            Book Your Free Consultation
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold border-2 border-slate-900 text-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
          >
            View Coaching Programs
          </Link>
        </div>
      </section>
    </main>
  )
}
