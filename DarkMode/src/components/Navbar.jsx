import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="h-16 px-6 flex items-center justify-between border-b dark:border-gray-700 bg-white dark:bg-gray-800">
      <h1 className="font-bold text-lg">DevDashboard</h1>
      <ThemeToggle />
    </header>
  );
}
