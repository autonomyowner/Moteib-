"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface ProgramsClientProps {
  programsData: any[]
}

export default function ProgramsClient({ programsData }: ProgramsClientProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sixMonth = programsData.find(p => p.duration === '6-month')
  const nineMonth = programsData.find(p => p.duration === '9-month')
  const twelveMonth = programsData.find(p => p.duration === '12-month')

  return (
    <main className="space-y-12 sm:space-y-16 relative">
      {/* Hero */}
      <section className="text-center space-y-4 px-2">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Leadership Coaching Programs
        </h1>
        <p className={`mx-auto max-w-3xl text-base sm:text-lg text-slate-700 px-2 transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Choose the program that fits your leadership journey. All programs are personalized to your unique goals and challenges.
        </p>
      </section>

      {/* Programs Comparison */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* 6-Month Program */}
          {sixMonth && (
            <div className="rounded-xl border-2 border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-6 hover:border-amber-500 transition-colors">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{sixMonth.name}</h2>
                {sixMonth.subtitle && (
                  <p className="text-base text-slate-600 font-semibold">{sixMonth.subtitle}</p>
                )}
                {sixMonth.description && (
                  <p className="text-sm text-slate-700">{sixMonth.description}</p>
                )}
              </div>

              {sixMonth.features && sixMonth.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">What You&apos;ll Learn</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {sixMonth.features.map((feature: any, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                        <span>
                          {feature.title && <strong>{feature.title}:</strong>} {feature.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sixMonth.structure && (
                <div className="space-y-2 pt-3 border-t border-slate-200">
                  <h3 className="text-base font-semibold text-slate-900">Program Structure</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {sixMonth.structure.sessionFrequency && (
                      <li>• {sixMonth.structure.sessionFrequency}</li>
                    )}
                    {sixMonth.structure.totalSessions && (
                      <li>• {sixMonth.structure.totalSessions} total sessions</li>
                    )}
                    {sixMonth.structure.sessionDuration && (
                      <li>• {sixMonth.structure.sessionDuration}</li>
                    )}
                    {sixMonth.structure.support && sixMonth.structure.support.map((item: any, index: number) => (
                      <li key={index}>• {item.item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="https://calendly.com/coach_moteib"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          )}

          {/* 9-Month Program */}
          {nineMonth && (
            <div className={`rounded-xl border-2 ${nineMonth.isPopular ? 'border-amber-500' : 'border-slate-200'} bg-[#f8f4ed] shadow-lg p-6 space-y-6 relative`}>
              {nineMonth.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{nineMonth.name}</h2>
                {nineMonth.subtitle && (
                  <p className="text-base text-slate-600 font-semibold">{nineMonth.subtitle}</p>
                )}
                {nineMonth.description && (
                  <p className="text-sm text-slate-700">{nineMonth.description}</p>
                )}
              </div>

              {nineMonth.features && nineMonth.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">What You&apos;ll Learn</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {nineMonth.features.map((feature: any, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                        <span>
                          {feature.title && <strong>{feature.title}:</strong>} {feature.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {nineMonth.structure && (
                <div className="space-y-2 pt-3 border-t border-slate-200">
                  <h3 className="text-base font-semibold text-slate-900">Program Structure</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {nineMonth.structure.sessionFrequency && (
                      <li>• {nineMonth.structure.sessionFrequency}</li>
                    )}
                    {nineMonth.structure.totalSessions && (
                      <li>• {nineMonth.structure.totalSessions} total sessions</li>
                    )}
                    {nineMonth.structure.sessionDuration && (
                      <li>• {nineMonth.structure.sessionDuration}</li>
                    )}
                    {nineMonth.structure.support && nineMonth.structure.support.map((item: any, index: number) => (
                      <li key={index}>• {item.item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="https://calendly.com/coach_moteib"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          )}

          {/* 12-Month Program */}
          {twelveMonth && (
            <div className="rounded-xl border-2 border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-6 hover:border-amber-500 transition-colors">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{twelveMonth.name}</h2>
                {twelveMonth.subtitle && (
                  <p className="text-base text-slate-600 font-semibold">{twelveMonth.subtitle}</p>
                )}
                {twelveMonth.description && (
                  <p className="text-sm text-slate-700">{twelveMonth.description}</p>
                )}
              </div>

              {twelveMonth.features && twelveMonth.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">What You&apos;ll Learn</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {twelveMonth.features.map((feature: any, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                        <span>
                          {feature.title && <strong>{feature.title}:</strong>} {feature.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {twelveMonth.structure && (
                <div className="space-y-2 pt-3 border-t border-slate-200">
                  <h3 className="text-base font-semibold text-slate-900">Program Structure</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {twelveMonth.structure.sessionFrequency && (
                      <li>• {twelveMonth.structure.sessionFrequency}</li>
                    )}
                    {twelveMonth.structure.totalSessions && (
                      <li>• {twelveMonth.structure.totalSessions} total sessions</li>
                    )}
                    {twelveMonth.structure.sessionDuration && (
                      <li>• {twelveMonth.structure.sessionDuration}</li>
                    )}
                    {twelveMonth.structure.support && twelveMonth.structure.support.map((item: any, index: number) => (
                      <li key={index}>• {item.item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="https://calendly.com/coach_moteib"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Ready to Invest in Your Leadership?</h2>
        <p className="text-base text-slate-700 max-w-2xl mx-auto">
          Every program includes personalized coaching, actionable strategies, and ongoing support. Book a free consultation to discuss which program is right for you.
        </p>
        <Link
          href="https://calendly.com/coach_moteib"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
        >
          Schedule Free Consultation
        </Link>
      </section>
    </main>
  )
}
