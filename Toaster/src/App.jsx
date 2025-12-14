// import "./App.css";
import { Toaster } from "sonner";
import MyComonent from "./MyComonent.jsx";

function App() {
  return (
    <>
      <div>
        <MyComonent/>
        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={false}
          offset={{ bottom: "0px", right: "10px", left: "0px", top: "90px" }}
          mobileOffset={{ top: "60px" }}
        />
        <Toaster id="error" position="top-right" richColors />
      </div>
    </>
  );
}

export default App;
