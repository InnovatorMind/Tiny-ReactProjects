import { login } from "../utils/auth";

export default function Login() {
  function handleLogin() {
    login();
    window.location.href = "/dashboard";
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <p>This is a demo login</p>

      <button className="btn primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
