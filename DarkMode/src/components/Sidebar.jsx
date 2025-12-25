export default function Sidebar({ setPage }) {
  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4">
      <nav className="space-y-2">
        {["home", "projects", "profile"].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className="block w-full text-left px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </nav>
    </aside>
  );
}
