import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            LOGO
          </Link>
        </div>
        <div className="right">
          <select className="currency" aria-label="currency selection">
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <Link to="#" className="login">
            <img src="/icons/user-white.png" alt="user img not found" />
            Giriş yap
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
