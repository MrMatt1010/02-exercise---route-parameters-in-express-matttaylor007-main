import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        🏘️ House Tricks
      </Link>
    </header>
  );
};

export default Header;
