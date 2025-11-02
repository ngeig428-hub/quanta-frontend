import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
 <button
  onClick={() => setDarkMode(!darkMode)}
  className="p-1 rounded-full text-gray-600 dark:text-gray-300"
  aria-label="Toggle theme"
>
  {darkMode ? "🌙" : "☀️"}
</button>

  );
}
