import React, { useState, useRef } from "react";
import { Mic, Send } from "lucide-react";

export default function ChatPanel() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const recognitionRef = useRef(null);

  // Start speech recognition
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript); // put recognized text into input
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    // TODO: hook into your AIContext to send the message to Quanta
  };

  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Chat with Quanta
      </h3>

      <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${
              m.role === "user"
                ? "bg-indigo-100 dark:bg-indigo-800 text-right"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or use the mic..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm"
        />
        <button
          onClick={startListening}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <Mic size={18} />
        </button>
        <button
          onClick={sendMessage}
          className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
