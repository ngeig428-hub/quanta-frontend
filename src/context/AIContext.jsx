import React, { createContext, useState, useContext } from "react";

// Create the context
const AIContext = createContext(null);
AIContext.displayName = "AIContext";

// Provider component
export function AIProvider({ children }) {
  const [aiSummaries, setAiSummaries] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  const addSummary = (summary) => {
    setAiSummaries((prev) => [...prev, summary]);
  };

  const addChatMessage = (message) => {
    setChatHistory((prev) => [...prev, message]);
  };

  const value = {
    aiSummaries,
    addSummary,
    chatHistory,
    addChatMessage,
  };

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
}

// ✅ Custom hook for consuming the context
export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error("useAI must be used within an AIProvider");
  }
  return context;
};
