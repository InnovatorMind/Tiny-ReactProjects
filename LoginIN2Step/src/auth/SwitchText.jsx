// SwitchText.jsx
import { Link } from "react-router-dom";

export default function SwitchText({ text, link, linkText }) {
  return (
    <p className="text-center text-sm text-slate-600">
      {text}{" "}
      <Link to={link} className="text-indigo-600 hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
