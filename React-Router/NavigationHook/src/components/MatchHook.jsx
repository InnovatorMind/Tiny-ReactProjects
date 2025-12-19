import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useMatch
} from "react-router-dom";

function Navbar() {
  const isUserPage = useMatch("/users/:id");

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/users/101">User</Link>

      {isUserPage && (
        <p style={{ color: "green" }}>
          You are viewing a user profile
        </p>
      )}
    </nav>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function User() {
  const match = useMatch("/users/:id");

  return <h2>User ID: {match.params.id}</h2>;
}

export default function MatchHook() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
