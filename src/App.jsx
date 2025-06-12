import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./projects/useEffect/counter/Counter.jsx"
import TextEdit from "./projects/useEffect/TextEdit/InputLoad.jsx"
import InputFocus from "./projects/useRef/InputFocus/InputFocus.jsx"
import RefCounter from "./projects/useRef/Counter/RefCounter.jsx"
import SideBar from "./projects/SideBar/SideBar.jsx";
import BasicUserNavigator from "./projects/useParam/BasicParamsUse/BasicUserNavigator.jsx";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} /> 
        <Route path="/textEdit" element={<TextEdit />} /> 
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/input" element={<InputFocus />} />
        <Route path="/refcount" element={<RefCounter />} />
        <Route path="/user/:id" element={<BasicUserNavigator />} />
      </Routes>
    </Router>
  );
}
export default App;
