import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar setPage={setPage} />

        <main className="flex-1 p-6">
          {page === "home" && <Home />}
          {page === "projects" && <Projects />}
          {page === "profile" && <Profile />}
        </main>
      </div>
    </div>
  );
}
