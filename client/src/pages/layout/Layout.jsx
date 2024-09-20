import Navbar from "../../components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.scss"

const Layout = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <div className={`layout ${isHomePage ? "home-page-background" : ""}`}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
