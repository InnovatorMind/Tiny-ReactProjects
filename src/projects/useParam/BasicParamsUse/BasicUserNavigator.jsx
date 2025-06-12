import { useParams, Link } from "react-router-dom";
import "./BasicUserNavigator.css"; // Import CSS properly (no need for `styles =`)

const BasicUserNavigator = () => {
  const { id } = useParams();

  // Generate a random ID between 1 and 20
  const randomId = Math.floor(Math.random() * 20) + 1;

  return (
    <div className="user-container">
      <h1 className="title">👤 User Details</h1>
      <p className="user-id">User ID is: <span>{id}</span></p>

      <Link to={`/user/${randomId}`} className="random-link">
        🔀 Go to Random User ({randomId})
      </Link>

      <p className="hint">
        Tip: Refresh the page or click the button to explore more users randomly!
      </p>
    </div>
  );
};

export default BasicUserNavigator;
