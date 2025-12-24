import { useState } from "react";
import OtpInput from "./OtpInput";
import StepIndicator from "./StepIndicator";
import { Link } from "react-router-dom";

export default function Login() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  console.log(otp);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-center text-2xl font-semibold">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-sm text-slate-500">
          Please sign in to your account
        </p>

        <StepIndicator step={step} />

        {/* STEP 1 */}
        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            className="mt-8 space-y-5"
          >
            <Input label="Email" />
            <Input label="Password" type="password" />

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white">
              Sign In
            </button>

            <Divider />

            <SwitchText
              text="Don’t have an account?"
              link="/register"
              linkText="Create one"
            />
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form className="mt-8 space-y-6">
            <p className="text-center text-sm text-slate-600">
              Enter the 6-digit code sent to your email
            </p>

            <OtpInput onComplete={(v) => setOtp(v)} />

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white">
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

/* ---- Helpers ---- */

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-indigo-500 focus:outline-none"
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

function SwitchText({ text, link, linkText }) {
  return (
    <p className="text-center text-sm text-slate-600">
      {text}{" "}
      <Link to={link} className="text-indigo-600 hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
