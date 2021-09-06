import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import SlingshotLogo from "../img/Slingshotlogo.png";





const Navbar = ({ scrollNav, toggleHome }) => {
  return (
    <nav className={scrollNav && "nav-bg"}>
<div className="links">
<a style = {{textDecoration: "none"}} className="navbar-btn" href = "/"><h2 className = "nav-heading">Slingshot</h2></a>
</div>


      <div className="links">
      <a style = {{textDecoration: "none"}} className="navbar-btn" href = "/"><h2 className = "nav-heading">Home</h2></a>

       <a style = {{textDecoration: "none"}} className="navbar-btn" href = "/projects"><h2 className = "nav-heading">Projects</h2></a>

      </div>
    </nav>
  );
};

export default Navbar;
