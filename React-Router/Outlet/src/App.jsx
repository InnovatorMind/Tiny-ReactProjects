// App.jsx or Router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout.jsx";
import Users from "./components/Users.jsx";
import Settings from "./components/Settings.jsx";
import Reports from "./components/Reports.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
