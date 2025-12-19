import { NavLink } from "react-router-dom";

const linkStyle = {
  display: "block",
  padding: "10px 15px",
  margin: "5px 0",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#374151",
  fontWeight: "500",
};

export default function Sidebar() {
  return (
    <aside style={{ width: "220px", height:"94vh", background: "#e5e7eb", padding: "20px" }}>
      <h2 style={{ fontSize: "18px", marginBottom: "15px" }}>📂 Navigation</h2>
      <nav>
        <NavLink
          to="/admin/users"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#3b82f6" : "transparent",
            color: isActive ? "white" : "#374151",
          })}
        >
          👥 Users
        </NavLink>
        <NavLink
          to="/admin/settings"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#3b82f6" : "transparent",
            color: isActive ? "white" : "#374151",
          })}
        >
          ⚙️ Settings
        </NavLink>
        <NavLink
          to="/admin/reports"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#3b82f6" : "transparent",
            color: isActive ? "white" : "#374151",
          })}
        >
          📊 Reports
        </NavLink>
      </nav>
    </aside>
  );
}
