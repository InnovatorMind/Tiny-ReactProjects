export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="py-2">Name</th>
            <th>Status</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {["Website", "API", "Mobile App"].map((p) => (
            <tr key={p} className="border-b dark:border-gray-700">
              <td className="py-2">{p}</td>
              <td>Active</td>
              <td>You</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
