import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/users/101">Open User 101</Link>
      <br />
      <Link to="/users/202">Open User 202</Link>
    </div>
  );
}

function UserProfile() {
  const params = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID from URL: {params.id}</p>
    </div>
  );
}

export default function ParamsHook() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
