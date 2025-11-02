import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="container-fixed pt-8 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h1-title">Welcome back, Maya 👋</h1>
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
