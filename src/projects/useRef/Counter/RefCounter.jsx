import { useState, useRef, useEffect } from "react";

const RefCounter = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count); // Store previous value

  useEffect(() => {
    prevCountRef.current = count; // Update reference on render
  });

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default RefCounter;
