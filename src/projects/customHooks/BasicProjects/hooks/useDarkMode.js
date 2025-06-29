import { useState, useEffect } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return [darkMode, () => setDarkMode(!darkMode)];
}
