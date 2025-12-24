import { useRef, useState } from "react";

export default function OtpInput({ length = 6, onComplete }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const focusIndex = (i) => {
    inputsRef.current[i]?.focus();
    inputsRef.current[i]?.setSelectionRange?.(1, 1);
  };

  const distributeFrom = (startIndex, digits) => {
    const next = [...values];
    let idx = startIndex;
    for (const d of digits) {
      if (idx >= length) break;
      next[idx] = d;
      idx++;
    }
    setValues(next);
    // Move focus to the next empty cell or last filled one
    const nextFocus =
      next.findIndex((v, i) => i >= startIndex && v === "") !== -1
        ? next.findIndex((v, i) => i >= startIndex && v === "")
        : Math.min(startIndex + digits.length, length - 1);
    focusIndex(nextFocus);
    maybeComplete(next);
  };

  const handleChange = (e, index) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, "");
    if (!digits) return;

    if (digits.length === 1) {
      const next = [...values];
      next[index] = digits[0];
      setValues(next);
      if (index < length - 1) focusIndex(index + 1);
      maybeComplete(next);
    } else {
      // User typed/pasted multiple digits into one input (mobile keyboard/autofill)
      distributeFrom(index, digits.split("").slice(0, length - index));
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault();
      const next = [...values];
      if (next[index]) {
        next[index] = "";
        setValues(next);
        focusIndex(index);
      } else if (index > 0) {
        next[index - 1] = "";
        setValues(next);
        focusIndex(index - 1);
      }
      return;
    }

    if (key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusIndex(index - 1);
    }
    if (key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      focusIndex(index + 1);
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!text) return;
    distributeFrom(index, text.split("").slice(0, length - index));
  };

  const maybeComplete = (vals) => {
    const otp = vals.join("");
    if (otp.length === length && !vals.includes("") && onComplete) {
      onComplete(otp);
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {[...Array(length)].map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9]*"
          maxLength={1}
          value={values[i]}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={(e) => handlePaste(e, i)}
          onFocus={(e) => e.target.select()}
          className="h-12 w-10 rounded-lg border text-center text-lg focus:border-indigo-500 focus:outline-none"
        />
      ))}
    </div>
  );
}
