import React from "react";
import { Users, GraduationCap, Brain, Building2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      tagline: "Start your AI study journey.",
      audience: "Best for curious students exploring Quanta.",
      features: [
        "Upload 1 file / week",
        "3 AI questions per day",
        "Basic note summaries",
        "Progress tracking dashboard",
      ],
      gradient: "from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-700",
      buttonStyle:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
    },
    {
      name: "Pro Student",
      price: "$9.99/mo",
      tagline: "Level up your learning with AI.",
      audience: "For serious learners who want unlimited support.",
      features: [
        "Unlimited uploads & AI Q&A",
        "Smart note summaries + highlights",
        "Notebook integration with chat",
        "Study Vault & flashcards",
        "Custom study recommendations",
      ],
      gradient: "from-indigo-500 to-blue-500",
      icon: <GraduationCap className="text-indigo-300" size={24} />,
      buttonStyle:
        "bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:opacity-90",
      highlight: true,
    },
    {
      name: "Scholar",
      price: "$19.99/mo",
      tagline: "Your personal AI tutor.",
      audience: "For achievers who want total mastery and recall.",
      features: [
        "Concept Maps & AI Memory Recall",
        "Notebook LM-style conversations",
        "Advanced tutor feedback & assessments",
        "Custom AI study journeys",
        "Performance insights dashboard",
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: <Brain className="text-pink-300" size={24} />,
      buttonStyle:
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90",
    },
    {
      name: "Institutional",
      price: "Custom",
      tagline: "Empower your entire classroom.",
      audience: "For schools, universities, and learning teams.",
      features: [
        "Multi-user dashboards",
        "Admin analytics & management",
        "Class collaboration tools",
        "LMS & Google Classroom integration",
        "Dedicated Quanta support",
      ],
      gradient: "from-cyan-500 to-teal-400",
      icon: <Building2 className="text-cyan-300" size={24} />,
      buttonStyle:
        "bg-gradient-to-r from-cyan-500 to-teal-400 text-white hover:opacity-90",
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Choose Your Quanta Plan
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you’re exploring, studying, or teaching — Quanta evolves with
            your learning journey.
          </p>
        </header>

        {/* Plans Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-transform hover:scale-[1.02] overflow-hidden ${
                plan.highlight
                  ? "ring-2 ring-indigo-400 dark:ring-indigo-500"
                  : ""
              }`}
            >
              {/* Top Accent Bar */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${plan.gradient}`}
              />

              {/* Title & Icon */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h2>
                {plan.icon && <div>{plan.icon}</div>}
              </div>

              {/* Tagline */}
              <p className="text-sm text-gray-700 dark:text-gray-400 mb-2 italic">
                {plan.tagline}
              </p>

              {/* Audience */}
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                {plan.audience}
              </p>

              {/* Price */}
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="text-indigo-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-2.5 rounded-xl font-semibold shadow-md transition ${plan.buttonStyle}`}
              >
                {plan.name === "Free" ? "Get Started" : "Subscribe"}
              </button>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center pt-10 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-700 dark:text-gray-400 text-sm">
            Have questions?{" "}
            <a
              href="#"
              className="text-indigo-500 font-semibold hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
