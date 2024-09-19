import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Flights</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <span>
            <Link to="#" className="login">
              Login
            </Link>
            <Link to="#" className="register">
              Register
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
