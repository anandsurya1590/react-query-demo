import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/query" className={isActive("/query")}>
            UseQuery Demo
          </Link>
        </li>
        <li>
          <Link to="/mutation" className={isActive("/mutation")}>
            UseMutation Demo
          </Link>
        </li>
        <li>
          <Link to="/infinite" className={isActive("/infinite")}>
            UseInfiniteQuery Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
