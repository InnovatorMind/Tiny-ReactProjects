// pages/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops 😵</h1>
      <p>{error.statusText || error.message}</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}
