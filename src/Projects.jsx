import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home.jsx"));
const Counter = lazy(() => import("./projects/useEffect/counter/Counter.jsx"));
const TextEdit = lazy(() => import("./projects/useEffect/TextEdit/InputLoad.jsx"));
const InputFocus = lazy(() => import("./projects/useRef/InputFocus/InputFocus.jsx"));
const RefCounter = lazy(() => import("./projects/useRef/Counter/RefCounter.jsx"));
const SideBar = lazy(() => import("./projects/SideBar/SideBar.jsx"));
const BasicUserNavigator = lazy(() => import("./projects/useParam/BasicParamsUse/BasicUserNavigator.jsx"));
const SearchComponent = lazy(() => import("./projects/customHooks/BasicProjects/SearchComponent.jsx"));
const DarkModeToggle = lazy(() => import("./projects/customHooks/BasicProjects/DarkModeToggle.jsx"));
const FetchExample = lazy(() => import("./projects/customHooks/BasicProjects/FetchExample.jsx"));
const Feed = lazy(() => import("./projects/customHooks/Hook-Libraries/Feed.jsx"));
const Accordion = lazy(() => import("./projects/Accordion/App.jsx"));
const Tabs = lazy(() => import("./projects/Tabs/App.jsx"));
const DataTable = lazy(() => import("./projects/DataTable/App.jsx"));
const LikeButton = lazy(() => import("./projects/LikeButton/App.jsx"));

import './App.css';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/textEdit" element={<TextEdit />} />
          <Route path="/input" element={<InputFocus />} />
          <Route path="/refcount" element={<RefCounter />} />
          <Route path="/user/:id" element={<BasicUserNavigator />} />
          <Route path="/searchComponent" element={<SearchComponent />} />
          <Route path="/darkMode" element={<DarkModeToggle />} />
          <Route path="/fetchExample" element={<FetchExample />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/datatable" element={<DataTable />} />
          <Route path="/likebutton" element={<LikeButton />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
