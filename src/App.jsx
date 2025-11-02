import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Learn from "./pages/Learn";
import Notebook from "./pages/Notebook";
import Planner from "./pages/Planner";
import Progress from "./pages/Progress";
import Pricing from "./pages/Pricing";

// Contexts
import { UserProvider, useUser } from "./context/UserContext";
import { NotebookProvider } from "./context/NotebookContext";
import { AIProvider } from "./context/AIContext";

// Components
import Navbar from "./components/Navbar";

function AppShell() {
  const { darkMode } = useUser();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 transition-colors">
        <Navbar />
        <main className="px-6 md:px-10 py-8 max-w-6xl mx-auto space-y-10">
          <Routes>
            <Route path="/" element={<Navigate to="/learn" replace />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/notebook" element={<Notebook />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NotebookProvider>
        <AIProvider>
          <AppShell />
        </AIProvider>
      </NotebookProvider>
    </UserProvider>
  );
}
