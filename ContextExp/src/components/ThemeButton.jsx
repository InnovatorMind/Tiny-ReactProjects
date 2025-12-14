// ThemeButton.jsx
import React, { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme} (click to toggle)
    </button>
  );
}
