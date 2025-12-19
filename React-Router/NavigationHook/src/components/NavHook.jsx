import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

/* -------------------- PAGES -------------------- */

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the Home page.</p>

      <Link to="/login">Go to Login</Link>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login logic
    const loginSuccess = true;

    if (loginSuccess) {
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to Dashboard</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
      <br /><br />
      <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
}

/* -------------------- APP -------------------- */

export default function NavHook() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
