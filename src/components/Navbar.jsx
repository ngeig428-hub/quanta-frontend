import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import SignInModal from "./SignInModal";

export default function Navbar() {
  const {
    darkMode,
    toggleDarkMode,
    user,
    setUser,
    menuOpen,
    setMenuOpen,
  } = useUser();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [authMode, setAuthMode] = useState(null); // "signin" or "signup"
  const menuRef = useRef();
  const navigate = useNavigate();

  const userInitial = user?.email?.[0]?.toUpperCase() || "G";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenuOpen]);

  return (
    <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left / Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              QUANTA
            </Link>
          </div>

          {/* Center links */}
          <div className="flex justify-center">
            <div className="flex gap-6 items-center text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
              <Link to="/learn" className="hover:text-indigo-600 transition">
                Learn
              </Link>
              <Link to="/notebook" className="hover:text-indigo-600 transition">
                Notebook
              </Link>
              <Link to="/planner" className="hover:text-indigo-600 transition">
                Planner
              </Link>
              <Link to="/progress" className="hover:text-indigo-600 transition">
                Progress
              </Link>
              <Link to="/pricing" className="hover:text-indigo-600 transition">
                Pricing
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center justify-end gap-4 relative">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full text-gray-600 dark:text-gray-300 text-sm focus:outline-none"
              aria-label="Toggle theme"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* Auth section */}
            {!user ? (
              <div className="flex gap-4">
                <button
                  onClick={() => setAuthMode("signin")}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthMode("signup")}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold cursor-pointer border-2 border-indigo-600"
                aria-label="Open profile menu"
              >
                {userInitial}
              </button>
            )}

            {/* Profile dropdown */}
            {menuOpen && user && (
              <div
                ref={menuRef}
                className="absolute right-0 top-16 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-[9999]"
              >
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setSettingsOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Profile Settings
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setUser(null);
                    navigate("/");
                  }}
                  className="w-full mt-2 px-3 py-2 rounded-md text-sm bg-red-500 text-white hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile settings modal */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[10000]">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Profile Settings</h2>
              <button
                onClick={() => setSettingsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            <input
              type="text"
              placeholder="Your name"
              className="w-full mb-3 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full mb-3 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setSettingsOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth modal */}
      {authMode && (
        <SignInModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          setUser={setUser}
        />
      )}
    </nav>
  );
}
