import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  Target,
  Sparkles,
} from "lucide-react";

/**
 * Self-contained Planner page (no external components or aliases)
 * - Compact calendar (Oct 2025) with selected day
 * - Upcoming exams with progress bars (Calculus ~90%, Biology ~50%)
 * - Smart Study single progress item (READING ASSIGNMENT 3 at 45%)
 * - Today's Schedule: 3 items matching screenshots
 * - Theme-aware Tailwind class usage only (no app-level dependencies required)
 */

export default function Planner() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 9, 25)); // Oct 25 2025

  const todaysSchedule = [
    { time: "08:00", subject: "Calculus", topic: "Chain Rule Practice", duration: "45 min", color: "from-blue-500 to-cyan-400" },
    { time: "13:00", subject: "Biology", topic: "Cell Division", duration: "30 min", color: "from-green-400 to-emerald-400" },
    { time: "18:30", subject: "History", topic: "WWII Overview", duration: "40 min", color: "from-purple-500 to-indigo-500" },
  ];

  const exams = [
    { subject: "Calculus", date: "May 15", daysLeft: 5, percent: 90, gradient: "from-blue-500 to-cyan-400" },
    { subject: "Biology", date: "May 22", daysLeft: 12, percent: 50, gradient: "from-green-400 to-emerald-400" },
  ];

  const smartStudy = [
    { label: "READING ASSIGNMENT 3", percent: 45, subtitle: "Reading", gradient: "from-indigo-500 to-pink-500" },
  ];

  // build compact calendar cells (35 cells)
  const days = Array.from({ length: 35 }).map((_, i) => {
    const day = i - 2; // maps to 1..31 across grid
    const inMonth = day > 0 && day <= 31;
    const isSelected = inMonth && selectedDate.getDate() === day;
    return { label: inMonth ? String(day) : "", inMonth, isSelected, day };
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f111b] text-gray-900 dark:text-white font-sans p-6 md:p-10">
      <main className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Study Calendar</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Plan your week and keep exams on track.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <CalendarIcon className="w-5 h-5" />
            <span className="font-medium">October 2025</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar + Today's Schedule (left) */}
          <section className="lg:col-span-2 space-y-6">
            {/* Calendar (compact) */}
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <button
                    type="button"
                    className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="previous month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <h3 className="text-base font-medium">October 2025</h3>
                  <button
                    type="button"
                    className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="next month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">Selected: Oct {selectedDate.getDate()}</div>
              </div>

              {/* Weekday labels */}
              <div className="grid grid-cols-7 gap-1 text-[11px] text-gray-500 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <div key={d} className="text-center font-medium">{d}</div>
                ))}
              </div>

              {/* Calendar grid (smaller cells) */}
              <div className="grid grid-cols-7 gap-1 text-sm">
                {days.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!d.inMonth) return;
                      setSelectedDate(new Date(2025, 9, d.day));
                    }}
                    className={`h-8 flex items-center justify-center rounded-md text-[13px] transition-colors ${
                      !d.inMonth
                        ? "text-gray-300"
                        : d.isSelected
                        ? "bg-blue-500 text-white font-semibold"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    }`}
                    aria-pressed={d.isSelected}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Today's Schedule</h2>
                <Clock className="w-5 h-5 text-blue-500" />
              </div>

              <ul className="space-y-3">
                {todaysSchedule.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className={`w-1 rounded-full ${item.color} h-16`} aria-hidden />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.subject}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.topic}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-300">{item.duration}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">{item.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Sidebar: Upcoming Exams + Smart Study + Quote */}
          <aside className="space-y-6">
            {/* Upcoming Exams */}
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold">Upcoming Exams</h3>
              </div>

              <ul className="space-y-4">
                {exams.map((exam, i) => (
                  <li key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${exam.gradient}`}
                          aria-hidden
                        >
                          {exam.subject.charAt(0)}
                        </div>

                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{exam.subject}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{exam.date}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{exam.daysLeft} days</div>
                    </div>

                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${exam.gradient}`}
                        style={{ width: `${exam.percent}%` }}
                        role="progressbar"
                        aria-valuenow={exam.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Study */}
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-semibold">Smart Study</h3>
              </div>

              <div className="space-y-3">
                {smartStudy.map((s, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{s.label}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{s.subtitle}</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">{s.percent}%</div>
                    </div>

                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${s.gradient}`}
                        style={{ width: `${s.percent}%` }}
                        role="progressbar"
                        aria-valuenow={s.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-2xl p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm">
              <p className="text-sm font-medium mb-1">💡 Daily Inspiration</p>
              <p className="text-base font-semibold">"The expert in anything was once a beginner."</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
