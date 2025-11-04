import React from "react";
import {
  BookOpen,
  Target,
  Flame,
  Brain,
  Plus,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

export default function Learn() {
  return (
    <div className="min-h-screen flex justify-center px-6 py-10">
      <div className="w-full max-w-5xl space-y-10">
        {/* HEADER */}
        <div className="text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome back👋
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Ready to learn something amazing today?
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* LEFT SIDE — CONTINUE LEARNING + ACTIONS */}
          <div className="md:col-span-2 space-y-6">
            {/* CONTINUE LEARNING CARD */}
            <div className="rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
                    <BookOpen size={18} className="text-purple-500" />
                    <span>Continue Learning</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-gray-900 dark:text-white">
                    Derivatives – Intro
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                    Calculus · Chapter 3
                  </p>
                </div>
                <div className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                  68%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-3 md:h-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{ width: "68%" }}
                />
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-3 gap-6">
              <ActionButton
                icon={<Plus size={20} />}
                title="Start"
                subtitle="New topic"
                gradient="from-blue-500 to-cyan-400"
              />
              <ActionButton
                icon={<Brain size={20} />}
                title="Review"
                subtitle="Weak areas"
                gradient="from-purple-500 to-pink-500"
              />
              <ActionButton
                icon={<CalendarCheck size={20} />}
                title="Plan"
                subtitle="Study plan"
                gradient="from-indigo-500 to-purple-400"
              />
            </div>
          </div>

          {/* RIGHT SIDE — MASTERY CARD */}
          <div className="rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col items-center text-center">
            <Target size={26} className="text-purple-500 mb-3" />

            <div className="relative w-36 h-36 mb-4">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden>
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#g)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * 78) / 100}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">78%</span>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  This Week’s Mastery
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-1">
              12 topics completed
            </p>
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
              <Flame size={16} className="text-orange-500" />
              <span>7-day streak</span>
            </div>
          </div>
        </div>

        {/* RECOMMENDATION CARD */}
        <div className="rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-pink-500" />
            <h4 className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
              Quanta’s Recommendation
            </h4>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            Integrals are important. Let’s strengthen your integration skills next.
          </p>
          <a
            href="#"
            className="text-sm md:text-base font-medium text-indigo-500 hover:underline mt-2 inline-block"
          >
            Great Progress in Physics!
          </a>
        </div>
      </div>
    </div>
  );
}

/* Small reusable Action button */
function ActionButton({ icon, title, subtitle, gradient }) {
  return (
    <button
      className={`flex flex-col items-center justify-center p-6 rounded-xl text-white bg-gradient-to-r ${gradient} shadow-md hover:opacity-90 transition`}
    >
      <div className="p-2 bg-white/20 rounded-full mb-1">{icon}</div>
      <span className="text-sm md:text-base font-semibold">{title}</span>
      <span className="text-xs md:text-sm opacity-90">{subtitle}</span>
    </button>
  );
}
