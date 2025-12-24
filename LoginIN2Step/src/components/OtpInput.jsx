import { useRef } from "react";

export default function OtpInput({ length = 6, onComplete }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (!value) return;

    inputsRef.current[index].value = value[0];

    if (index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    checkComplete();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "");

    paste.split("").slice(0, length).forEach((char, i) => {
      inputsRef.current[i].value = char;
    });

    inputsRef.current[Math.min(paste.length, length) - 1]?.focus();
    checkComplete();
  };

  const checkComplete = () => {
    const otp = inputsRef.current.map((i) => i.value).join("");
    if (otp.length === length && onComplete) {
      onComplete(otp);
    }
  };

  return (
    <div
      className="flex justify-center gap-2"
      onPaste={handlePaste}
    >
      {[...Array(length)].map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="h-12 w-10 rounded-lg border text-center text-lg focus:border-indigo-500 focus:outline-none"
        />
      ))}
    </div>
  );
}
