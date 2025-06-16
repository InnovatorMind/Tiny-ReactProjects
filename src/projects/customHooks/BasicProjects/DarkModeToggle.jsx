import { useDarkMode } from "./hooks/useDarkMode";
import styles from "./DarkModeToggle.module.css";

export default function DarkModeToggle() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <h1 className="text-3xl font-semibold mb-6">
        {darkMode ? "🌙 Dark Mode Enabled" : "☀️ Light Mode Enabled"}
      </h1>
      <button
        onClick={toggleDarkMode}
        className={`${styles.button} ${darkMode ? styles.darkButton : styles.lightButton}`}
      >
        Toggle Mode
      </button>
    </div>
  );
}

