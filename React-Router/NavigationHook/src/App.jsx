import { useState } from "react";

import NavHook from "./components/NavHook";
import ParamsHook from "./components/ParamsHook";
import LocationHook from "./components/LocationHook";
import MatchHook from "./components/MatchHook";

const App = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <h2>React Router Hooks Playground</h2>

      <button onClick={() => setActive("navigate")}>
        useNavigate
      </button>
      <button onClick={() => setActive("params")}>
        useParams
      </button>
      <button onClick={() => setActive("location")}>
        useLocation
      </button>
      <button onClick={() => setActive("match")}>
        useMatch
      </button>

      <hr />

      {active === "navigate" && <NavHook />}
      {active === "params" && <ParamsHook />}
      {active === "location" && <LocationHook />}
      {active === "match" && <MatchHook />}
    </>
  );
};

export default App;
