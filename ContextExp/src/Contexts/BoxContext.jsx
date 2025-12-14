// contexts/ThemeContext.jsx
import React, { createContext, useState } from "react";

const BoxContext = createContext();

export function BoxColorProvider({ children }) {
  const colors = ["lightblue", "lightgreen", "orange", "purple", "pink", "yellow"];
  
  const [colorIndex, setColorIndex] = useState(0);

  const changeBoxColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <BoxContext.Provider value={{ color: colors[colorIndex], changeBoxColor }}>
      {children}
    </BoxContext.Provider>
  );
}

export default BoxContext;
