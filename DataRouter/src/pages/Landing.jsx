import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Landing Page</h1>
      <p>Simple Nested Routes Demo</p>

      <Link className="btn" to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}
