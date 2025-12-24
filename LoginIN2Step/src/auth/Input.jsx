// Input.jsx
export default function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>
  );
}
