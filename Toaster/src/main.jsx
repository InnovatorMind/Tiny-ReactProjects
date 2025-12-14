import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      position="top-right"
      richColors
      closeButton
      expand={false}
      offset={{ bottom: "0px", right: "10px", left: "0px", top: "90px" }}
      mobileOffset={{ top: "60px" }}
    />
    <Toaster id="error" position="top-right" richColors />
    <App />
  </StrictMode>
);
