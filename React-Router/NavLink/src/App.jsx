
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Simple links */}
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 

        {/* NavLinks with active styling */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
