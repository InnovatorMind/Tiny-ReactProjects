import { useState } from "react";
import OtpInput from "./OtpInput";
import StepIndicator from "./StepIndicator";
import { Link } from "react-router-dom";
import Input from "./Input";
import SwitchText from "./SwitchText";

export default function Register() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-center text-2xl font-semibold">
          Create your account
        </h1>

        <p className="mt-2 text-center text-sm text-slate-500">
          Start building in seconds
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
            <Input label="Full Name" />
            <Input label="Email" />
            <Input label="Password" type="password" />

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

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white">
              Create Account
            </button>

            <SwitchText
              text="Already have an account?"
              link="/login"
              linkText="Sign in"
            />
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form className="mt-8 space-y-6">
            <p className="text-center text-sm text-slate-600">
              Enter the 6-digit code sent to your email
            </p>

            <OtpInput />

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white">
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
