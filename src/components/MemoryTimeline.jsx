import React from "react";
import { Clock } from "lucide-react";

const timeline = [
  { date: "Oct 22", title: "Studied Calculus - Chain Rule", note: "Mastered derivative basics." },
  { date: "Oct 21", title: "Biology - Cell Division", note: "Reviewed mitosis and meiosis." },
  { date: "Oct 19", title: "Physics - Motion", note: "Worked on kinematic equations." },
];

export default function MemoryTimeline() {
  return (
    <div className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
        <Clock className="text-purple-400" size={20} /> Study Memory Timeline
      </h3>

      <div className="space-y-4">
        {timeline.map((item, idx) => (
          <div key={idx} className="border-l-2 border-purple-400 pl-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
            <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
