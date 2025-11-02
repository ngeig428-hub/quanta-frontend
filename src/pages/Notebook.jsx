import React from "react";
import FileUploader from "../components/FileUploader";
import SummaryCard from "../components/SummaryCard";
import ChatPanel from "../components/ChatPanel";
import MemoryTimeline from "../components/MemoryTimeline";
import NotesPanel from "../components/NotesPanel"; // 👈 new component for user notes

export default function Notebook() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Your Intelligent Notebook
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            Upload files, take notes, get AI summaries, and chat with Quanta.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side: uploader, notes, summaries, timeline */}
          <div className="lg:col-span-2 space-y-6">
            <FileUploader />

            {/* User Notes Panel */}
            <NotesPanel />

            {/* AI Summaries */}
            <SummaryCard />

            {/* Memory Timeline */}
            <MemoryTimeline />
          </div>

          {/* Right side: Chat */}
          <div>
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
