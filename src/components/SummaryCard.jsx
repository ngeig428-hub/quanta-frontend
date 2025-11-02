import React from "react";
import { Sparkles } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
        <Sparkles className="text-pink-400" size={20} /> AI Summary
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        “In this section, we explore how derivatives represent the rate of change and
        their importance in optimization problems...”
      </p>
      <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md text-sm font-medium hover:opacity-90">
        Generate New Summary
      </button>
    </div>
  );
}
