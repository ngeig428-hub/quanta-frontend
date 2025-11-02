import React, { useState } from "react";

export default function NotesPanel() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (!input.trim()) return;
    setNotes([...notes, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Your Notes
      </h3>
      {notes.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No notes yet. Add your first note below.
        </p>
      ) : (
        <ul className="space-y-2 mb-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200"
            >
              {note.text}
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm"
        />
        <button
          onClick={addNote}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
        >
          Add
        </button>
      </div>
    </div>
  );
}
