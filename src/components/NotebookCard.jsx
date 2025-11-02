import React from "react";
import NotebookCard from "../components/NotebookCard";
import FileUploader from "../components/FileUploader";

export default function Notebook() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Your Notebooks
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-1">
            Upload materials, organize notes, and let Quanta summarize your learning.
          </p>
        </header>

        {/* File Upload Section */}
        <section className="rounded-2xl p-6 bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-lg">
          <FileUploader />
        </section>

        {/* Recent Notebooks Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Recent Notebooks
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NotebookCard
              title="Calculus Notes"
              subject="Mathematics"
              lastEdited="2 days ago"
            />
            <NotebookCard
              title="Genetics & DNA"
              subject="Biology"
              lastEdited="5 days ago"
            />
            <NotebookCard
              title="World History"
              subject="History"
              lastEdited="1 week ago"
            />
          </div>
        </section>

        {/* Placeholder for AI Summaries */}
        <section className="rounded-2xl p-6 bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            AI Summaries
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Once you upload your materials, Quanta will generate smart summaries here.
          </p>
        </section>
      </div>
    </div>
  );
}
