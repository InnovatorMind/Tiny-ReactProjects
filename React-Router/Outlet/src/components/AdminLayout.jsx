import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: "20px" }}>
          <Outlet /> {/* Child routes render here */}
        </main>
      </div>
    </div>
  );
}
