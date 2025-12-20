import { Link } from "react-router-dom";
import { logout } from "../utils/auth";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  function handleLogout() {
    logout();
    window.location.href = "/";
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>MyApp</h2>
        <nav>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/profile">Profile</Link>
        </nav>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="content">
        {/* child pages render here */}
        <Outlet />
      </main>
    </div>
  );
}
