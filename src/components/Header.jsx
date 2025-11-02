import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext"; // 👈 Import user context

// 👇 Helper function to extract a clean name from email
function getUserName(email) {
  if (!email) return "there";

  const namePart = email.split("@")[0]; // get part before @
  const cleanName = namePart.replace(/[^a-zA-Z]/g, ""); // remove numbers/symbols

  if (cleanName.length >= 2) {
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  } else {
    return namePart.charAt(0).toUpperCase(); // fallback: first letter
  }
}

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext); // 👈 Get user from context

  const displayName = getUserName(user?.email); // 👈 Extract display name

  return (
    <header className="container-fixed pt-8 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h1-title">Welcome back, {displayName} 👋</h1>
          <p className="h2-subtitle mt-1">Ready to learn something amazing today?</p>
        </div>
        <button
          onClick={toggleTheme}
          className="button-muted px-3 py-2"
          aria-label="Toggle theme"
        >
          <span className="text-sm">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </header>
  );
}
