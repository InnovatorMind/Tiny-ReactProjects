import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Sidebar from "./components/Sidebar";
import Reports from "./components/Reports";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const user = { name: "Jane Doe", role: "Admin" };

  return (
    <div className="dashboard">
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>

      <ErrorBoundary>
        <Reports />
      </ErrorBoundary>

      <ErrorBoundary>
        <ProfileCard user={user} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
