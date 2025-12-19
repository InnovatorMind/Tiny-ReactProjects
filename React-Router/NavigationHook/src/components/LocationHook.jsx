import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <button
        onClick={() =>
          navigate("/profile", {
            state: { from: "home page" }
          })
        }
      >
        Go to Profile
      </button>
    </div>
  );
}

function Profile() {
  const location = useLocation();
  console.log(location)

  return (
    <div>
      <h2>Profile</h2>
      <p>Current Path: {location.pathname}</p>
      <p>Passed State: {location.state?.from}</p>
    </div>
  );
}

export default function LocationHook() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
