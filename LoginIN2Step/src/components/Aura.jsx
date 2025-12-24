import { useState } from "react";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | register
  const [step, setStep] = useState(1);

  function handleStepOne(e) {
    e.preventDefault();
    setStep(2); // move to OTP
  }

  function handleOtp(e) {
    e.preventDefault();
    alert(`${mode.toUpperCase()} successful ✅`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        {/* Title */}
        <h1 className="text-center text-2xl font-semibold">
          {mode === "login" ? "Welcome Back" : "Create your account"}
        </h1>

        <p className="mt-2 text-center text-sm text-slate-500">
          {mode === "login"
            ? "Please sign in to your account"
            : "Start building with us in seconds"}
        </p>

        {/* Steps */}
        <StepIndicator step={step} />

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleStepOne} className="mt-8 space-y-5">
            {mode === "register" && (
              <Input label="Full Name" type="text" />
            )}

            <Input label="Email Address" type="email" />

            <Input label="Password" type="password" />

            {mode === "register" && (
              <p className="text-xs text-slate-500">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>.
              </p>
            )}

            <button className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500">
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>

            <Divider />

            <SocialButton text="Continue with Google" />
            <SocialButton text="Continue with GitHub" />

            <AuthSwitch mode={mode} setMode={setMode} />
          </form>
        )}

        {/* STEP 2 (OTP) */}
        {step === 2 && (
          <form onSubmit={handleOtp} className="mt-8 space-y-6">
            <p className="text-center text-sm text-slate-600">
              Enter the 6-digit code sent to your email
            </p>

            <OtpInputs />

            <button className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500">
              Verify OTP
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-sm text-slate-500 hover:underline"
            >
              Go back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function StepIndicator({ step }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <StepCircle active={step === 1}>1</StepCircle>
      <div className="h-[2px] w-10 bg-slate-300" />
      <StepCircle active={step === 2}>2</StepCircle>
    </div>
  );
}

function StepCircle({ active, children }) {
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

function Input({ label, type }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-slate-200" />
      <span className="text-xs text-slate-400">OR</span>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

function SocialButton({ text }) {
  return (
    <button
      type="button"
      className="w-full rounded-lg border py-2.5 font-medium hover:bg-slate-50"
    >
      {text}
    </button>
  );
}

function AuthSwitch({ mode, setMode }) {
  return (
    <p className="text-center text-sm text-slate-600">
      {mode === "login" ? (
        <>
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => setMode("register")}
            className="font-medium text-indigo-600 hover:underline"
          >
            Create one
          </button>
        </>
      ) : (
        <>
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setMode("login")}
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign in
          </button>
        </>
      )}
    </p>
  );
}

function OtpInputs() {
  return (
    <div className="flex justify-center gap-2">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          maxLength="1"
          className="h-12 w-10 rounded-lg border text-center text-lg focus:border-indigo-500 focus:outline-none"
        />
      ))}
    </div>
  );
}
