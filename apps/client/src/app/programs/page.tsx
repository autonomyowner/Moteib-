"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
          <div className="rounded-xl border-2 border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-6 hover:border-amber-500 transition-colors">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">6-Month Program</h2>
              <p className="text-base text-slate-600 font-semibold">Foundation Building</p>
              <p className="text-sm text-slate-700">
                Perfect for new managers or those looking to strengthen their leadership foundations.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">What You&apos;ll Learn</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Core Leadership Fundamentals:</strong> Essential skills every leader needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Self-Awareness Development:</strong> Understanding your strengths and growth areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Communication Skills Mastery:</strong> Clear, effective communication techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Work-Life Balance Strategies:</strong> Sustainable approaches to managing professional and personal life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Time Management:</strong> Prioritization and productivity systems</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-200">
              <h3 className="text-base font-semibold text-slate-900">Program Structure</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Bi-weekly online 1-on-1 coaching sessions (30 min)</li>
                <li>• 25 total sessions</li>
                <li>• Email support between sessions</li>
                <li>• Personalized action plans</li>
                <li>• Progress assessments</li>
              </ul>
            </div>

            <Link
              href="https://calendly.com/coach_moteib"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-md px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* 9-Month Program */}
          <div className="rounded-xl border-2 border-amber-500 bg-[#f8f4ed] shadow-lg p-6 space-y-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full">
              MOST POPULAR
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">9-Month Program</h2>
              <p className="text-base text-slate-600 font-semibold">Advanced Development</p>
              <p className="text-sm text-slate-700">
                Ideal for managers ready to take their leadership to the next level and build high-performing teams.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">What You&apos;ll Learn</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Everything in 6-month program</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Advanced Team Dynamics:</strong> Building and leading high-performing teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Conflict Resolution Mastery:</strong> Navigate difficult conversations with confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Strategic Decision-Making:</strong> Framework for making better, faster decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Emotional Intelligence:</strong> Leading with empathy and awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Delegation & Empowerment:</strong> Building capable, autonomous teams</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-200">
              <h3 className="text-base font-semibold text-slate-900">Program Structure</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Weekly online 1-on-1 coaching sessions (30 min)</li>
                <li>• 37 total sessions</li>
                <li>• Unlimited email & messaging support</li>
                <li>• Customized leadership assessments</li>
                <li>• Quarterly progress reviews</li>
              </ul>
            </div>

            <Link
              href="https://calendly.com/coach_moteib"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-md px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* 12-Month Program */}
          <div className="rounded-xl border-2 border-slate-200 bg-[#f8f4ed] shadow-sm p-6 space-y-6 hover:border-amber-500 transition-colors">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">12-Month Program</h2>
              <p className="text-base text-slate-600 font-semibold">Complete Transformation</p>
              <p className="text-sm text-slate-700">
                For leaders committed to comprehensive transformation and building a lasting leadership legacy.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">What You&apos;ll Learn</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Everything in 9-month program</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Strategic Leadership Mastery:</strong> Long-term vision and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Organizational Change Management:</strong> Leading transformation initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Executive Presence Development:</strong> Command respect and inspire confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Culture Building:</strong> Create thriving, values-driven organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-lg">✓</span>
                  <span><strong>Legacy Leadership:</strong> Build sustainable impact beyond your tenure</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-200">
              <h3 className="text-base font-semibold text-slate-900">Program Structure</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Weekly online 1-on-1 coaching sessions (30 min)</li>
                <li>• 50 total sessions</li>
                <li>• Priority 24/7 support</li>
                <li>• 360-degree feedback assessments</li>
                <li>• Quarterly strategic planning sessions</li>
                <li>• Guest expert sessions on specific topics</li>
              </ul>
            </div>

            <Link
              href="https://calendly.com/coach_moteib"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-md px-4 py-3 font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Program Comparison</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="text-left py-3 px-2 font-semibold text-slate-900">Feature</th>
              <th className="text-center py-3 px-2 font-semibold text-slate-900">6 Months</th>
              <th className="text-center py-3 px-2 font-semibold text-slate-900 bg-amber-50">9 Months</th>
              <th className="text-center py-3 px-2 font-semibold text-slate-900">12 Months</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">1-on-1 Coaching Sessions</td>
              <td className="text-center py-3 px-2">25 online sessions (30 min)</td>
              <td className="text-center py-3 px-2 bg-amber-50">37 online sessions (30 min)</td>
              <td className="text-center py-3 px-2">50 online sessions (30 min)</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">Session Frequency</td>
              <td className="text-center py-3 px-2">Bi-weekly</td>
              <td className="text-center py-3 px-2 bg-amber-50">Weekly</td>
              <td className="text-center py-3 px-2">Weekly</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">Email Support</td>
              <td className="text-center py-3 px-2">✓</td>
              <td className="text-center py-3 px-2 bg-amber-50">✓</td>
              <td className="text-center py-3 px-2">✓</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">Unlimited Messaging Support</td>
              <td className="text-center py-3 px-2">—</td>
              <td className="text-center py-3 px-2 bg-amber-50">✓</td>
              <td className="text-center py-3 px-2">✓</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">Leadership Assessments</td>
              <td className="text-center py-3 px-2">Basic</td>
              <td className="text-center py-3 px-2 bg-amber-50">Advanced</td>
              <td className="text-center py-3 px-2">360-degree</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">Priority Support</td>
              <td className="text-center py-3 px-2">—</td>
              <td className="text-center py-3 px-2 bg-amber-50">—</td>
              <td className="text-center py-3 px-2">✓</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-3 px-2">Guest Expert Sessions</td>
              <td className="text-center py-3 px-2">—</td>
              <td className="text-center py-3 px-2 bg-amber-50">—</td>
              <td className="text-center py-3 px-2">✓</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Core Leadership Fundamentals Section */}
      <section className="rounded-xl border border-slate-200 bg-[#f8f4ed] shadow-sm p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Core Leadership Fundamentals</h2>
          <p className="text-base text-slate-700 max-w-3xl mx-auto">
            Our coaching approach is built on fundamental principles that help coaches develop into effective, balanced leaders. These core fundamentals are integrated throughout all our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Self-Awareness */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Enhanced Self-Awareness</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Help coaches develop deeper self-awareness by understanding their strengths, weaknesses, leadership style, and impact on others. Through assessments, reflection exercises, and feedback, coaches learn to recognize their patterns, triggers, and blind spots.
            </p>
            <ul className="text-sm text-slate-600 space-y-1.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Identify personal leadership strengths and growth areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Understand emotional triggers and responses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Recognize impact on team dynamics and performance</span>
              </li>
            </ul>
          </div>

          {/* Work-Life Balance */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Work-Life Balance</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Help coaches achieve sustainable work-life balance by establishing boundaries, prioritizing effectively, and creating systems that support both professional excellence and personal well-being. Learn to lead without sacrificing your health, relationships, or happiness.
            </p>
            <ul className="text-sm text-slate-600 space-y-1.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Set healthy boundaries and maintain them</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Develop sustainable work habits and routines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Integrate personal priorities with professional goals</span>
              </li>
            </ul>
          </div>

          {/* Goal Identification */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Goal Identification</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Help coaches identify and clarify their goals through structured exercises and deep reflection. Distinguish between what you think you should want and what truly matters to you, creating clear, meaningful objectives that align with your values and vision.
            </p>
            <ul className="text-sm text-slate-600 space-y-1.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Clarify personal and professional aspirations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Align goals with core values and purpose</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Set SMART goals that inspire action</span>
              </li>
            </ul>
          </div>

          {/* Overcoming Leadership Dilemmas */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Overcoming Leadership Dilemmas</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Help coaches navigate complex leadership dilemmas and challenging situations with confidence. Develop frameworks for decision-making, conflict resolution, and managing competing priorities. Learn to make tough calls while maintaining relationships and integrity.
            </p>
            <ul className="text-sm text-slate-600 space-y-1.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Navigate difficult decisions and trade-offs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Resolve conflicts and manage team tensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Handle competing stakeholder expectations</span>
              </li>
            </ul>
          </div>

          {/* Actionable Planning */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 space-y-3 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-slate-900">Actionable Planning</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Help coaches put together actionable plans to achieve their goals. Transform aspirations into concrete steps with timelines, milestones, and accountability measures. Learn to break down big goals into manageable actions and track progress effectively.
            </p>
            <ul className="text-sm text-slate-600 space-y-1.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Create step-by-step action plans with clear milestones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Establish accountability systems and check-ins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>Adapt plans based on progress and changing circumstances</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-lg bg-amber-50 border border-amber-200">
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong className="text-slate-900">How It Works:</strong> These core fundamentals are woven throughout all coaching sessions. Your coach will work with you to assess where you are in each area, identify specific challenges, and develop personalized strategies to strengthen your leadership foundation. Each session builds on the previous one, creating a comprehensive development journey.
          </p>
        </div>
      </section>

      {/* Investment Section */}
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

