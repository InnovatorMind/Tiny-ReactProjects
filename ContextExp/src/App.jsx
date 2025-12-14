// App.jsx
import React, { useContext } from "react";
import ThemeContext, { ThemeProvider } from "./Contexts/ThemeContext";
import { BoxColorProvider } from "./Contexts/BoxContext";
import ThemeButton from "./components/ThemeButton";
import Box from "./components/Box";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
      }}
    >
      <h1>Hello Context API</h1>
      <ThemeButton />
      <Box />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BoxColorProvider>
        <AppContent />
      </BoxColorProvider>
    </ThemeProvider>
  );
}
