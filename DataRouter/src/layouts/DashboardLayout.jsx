import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>MyApp</h2>

        <nav>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
