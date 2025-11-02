import React from "react";
import {
  HiFire,
  HiLightningBolt,
  HiCheckCircle,
  HiGlobe,
  HiAcademicCap,
  HiBeaker,
  HiBookOpen,
} from "react-icons/hi";

export default function Progress() {
  const subjects = [
    {
      subject: "Calculus",
      value: 85,
      icon: <HiAcademicCap className="text-cyan-500" size={22} />,
      bar: "from-cyan-500 to-teal-400",
    },
    {
      subject: "Biology",
      value: 64,
      icon: <HiBeaker className="text-pink-500" size={22} />,
      bar: "from-pink-500 to-purple-400",
    },
  ];

  const weaken = [
    {
      topic: "Integrals",
      subject: "Calculus",
      value: 45,
      bar: "from-cyan-500 to-fuchsia-500",
    },
    {
      topic: "Cell Division",
      subject: "Biology",
      value: 41,
      bar: "from-cyan-500 to-fuchsia-500",
    },
  ];

  const metrics = [
    {
      label: "Study Streak",
      value: "7 days",
      icon: <HiFire className="text-orange-500" size={20} />,
    },
    {
      label: "Mastery Score",
      value: "78%",
      icon: <HiCheckCircle className="text-yellow-500" size={20} />,
    },
    {
      label: "Total Topics",
      value: "24",
      icon: <HiBookOpen className="text-blue-500" size={20} />,
    },
    {
      label: "Badges Earned",
      value: "3 / 4",
      icon: <HiGlobe className="text-green-500" size={20} />,
    },
  ];

  const achievements = [
    {
      label: "7-Day Streak",
      icon: <HiFire className="text-orange-500" size={24} />,
    },
    {
      label: "Fast Learner",
      icon: <HiLightningBolt className="text-yellow-500" size={24} />,
    },
    {
      label: "Quiz Master",
      icon: <HiCheckCircle className="text-red-500" size={24} />,
    },
    {
      label: "Topic Explorer",
      icon: <HiGlobe className="text-blue-500" size={24} />,
    },
  ];

  const ProgressBar = ({ value, bar }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 overflow-hidden">
      <div
        className={`h-4 bg-gradient-to-r ${bar}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );

  const SubjectCard = ({ subject, value, icon, bar }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{subject}</span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{value}%</span>
      </div>
      <ProgressBar value={value} bar={bar} />
    </div>
  );

  const WeakAreaCard = ({ topic, subject, value, bar }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <div>
          <span className="font-medium">{topic}</span>
          <p className="text-gray-500 dark:text-gray-400 text-xs">{subject}</p>
        </div>
        <span className="text-sm text-red-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 overflow-hidden border border-red-500/30">
        <div
          className={`h-4 bg-gradient-to-r ${bar}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#111827] text-black dark:text-white px-6 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Top Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#0F172A] border border-gray-300 dark:border-[#1E293B] rounded-xl p-4 flex items-center gap-3 shadow-sm"
            >
              {item.icon}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mastery and Weak Areas */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mastery by Subject */}
          <div className="bg-gray-100 dark:bg-[#0F172A] p-6 rounded-2xl shadow-md border border-gray-300 dark:border-[#1E293B]">
            <h2 className="text-xl font-semibold mb-6">Mastery by Subject</h2>
            {subjects.map((item, index) => (
              <SubjectCard key={index} {...item} />
            ))}
          </div>

          {/* Areas to Strengthen */}
          <div className="bg-gray-100 dark:bg-[#0F172A] p-6 rounded-2xl shadow-md border border-gray-300 dark:border-[#1E293B]">
            <h2 className="text-xl font-semibold mb-6 text-red-500">
              Areas to Strengthen
            </h2>
            {weaken.map((item, index) => (
              <WeakAreaCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-100 dark:bg-[#0F172A] p-6 rounded-2xl shadow-md border border-gray-300 dark:border-[#1E293B]">
          <h2 className="text-xl font-semibold mb-6 text-sky-500">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-[#1E293B] rounded-xl p-4 shadow-sm"
              >
                {item.icon}
                <span className="text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Bubble Button */}
      <div className="fixed bottom-6 right-6 bg-violet-600 hover:bg-violet-700 transition rounded-full p-4 shadow-xl cursor-pointer">
        <span className="text-white text-xl">💬</span>
      </div>
    </div>
  );
}
