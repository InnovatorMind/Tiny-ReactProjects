export default function StepIndicator({ step }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <Circle active={step === 1}>1</Circle>
      <div className="h-[2px] w-10 bg-slate-300" />
      <Circle active={step === 2}>2</Circle>
    </div>
  );
}

function Circle({ active, children }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium
        ${
          active
            ? "bg-indigo-600 text-white"
            : "border border-slate-300 text-slate-400"
        }`}
    >
      {children}
    </div>
  );
}
