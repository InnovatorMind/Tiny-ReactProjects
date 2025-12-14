import React, { useRef, useState, useEffect } from "react";
import "./SideBar.modules.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Settings from "./components/Settings";

function SideBar() {
  console.log("hi")
  const [activeTab, setActiveTab] = useState("profile");

  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const settingsRef = useRef(null);

  const scrollTo = (ref, tabName) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tabName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "profile", ref: profileRef },
        { name: "projects", ref: projectsRef },
        { name: "settings", ref: settingsRef },
      ];

      for (const section of sections) {
        const top = section.ref.current.getBoundingClientRect().top;
        if (top >= 0 && top < window.innerHeight / 2) {
          setActiveTab(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="sidebar">
        <div
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => scrollTo(profileRef, "profile")}
        >
          Profile
        </div>
        <div
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => scrollTo(projectsRef, "projects")}
        >
          Projects
        </div>
        <div
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => scrollTo(settingsRef, "settings")}
        >
          Settings
        </div>
      </div>

      <div className="mainContent">
        <section ref={profileRef} className="section">
          <Profile />
        </section>
        <section ref={projectsRef} className="section">
          <Projects />
        </section>
        <section ref={settingsRef} className="section">
          <Settings />
        </section>
      </div>
    </div>
  );
}

export default SideBar;
