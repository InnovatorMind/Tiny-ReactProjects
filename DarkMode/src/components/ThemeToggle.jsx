import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="px-3 py-1 rounded border bg-transparent"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
