import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to MyApp</h1>
      <p>A clean demo of Auth + Nested Routes</p>

      <div className="actions">
        <Link className="btn primary" to="/login">
          Login
        </Link>
        <Link className="btn secondary" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
