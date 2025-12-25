export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {["Users", "Revenue", "Performance"].map((item) => (
        <div
          key={item}
          className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow"
        >
          <h2 className="text-lg font-semibold">{item}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Analytics data goes here
          </p>
        </div>
      ))}
    </div>
  );
}
