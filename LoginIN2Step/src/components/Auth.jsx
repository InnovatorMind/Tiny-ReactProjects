import { useState } from "react";
import OtpInput from "./OtpInput";

export default function Auth() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // fake validation
    setError("");
    setStep(2); // move to OTP step
  }

  function handleOtp(e) {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter a valid OTP");
      return;
    }

    alert("OTP Verified ✅");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center">
          Welcome Back
        </h1>
        <p className="mt-2 text-center text-sm text-slate-500">
          Please sign in to your account
        </p>

        {/* Step Indicator */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <StepCircle active={step === 1}>1</StepCircle>
          <div className="h-[2px] w-10 bg-slate-300" />
          <StepCircle active={step === 2}>2</StepCircle>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <Input label="Email Address" value="amarjeet@gmail.com" type="email" />
            <Input label="Password" value="Amar@1234" type="password" />

            {error && (
              <div className="rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white font-medium hover:bg-indigo-500">
              Sign In
            </button>

            <Divider />

            <SocialButton text="Continue with Google" />
            <SocialButton text="Continue with GitHub" />
          </form>
        )}

        {/* STEP 2 (OTP) */}
        {step === 2 && (
          <form onSubmit={handleOtp} className="mt-8 space-y-6">
            <p className="text-sm text-slate-600 text-center">
              Enter the 6-digit code sent to your email
            </p>

            {/* ✅ Professional OTP Input */}
            <OtpInput
              length={6}
              onComplete={(value) => setOtp(value)}
            />

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white font-medium hover:bg-indigo-500">
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

/* ---------- Components ---------- */

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
