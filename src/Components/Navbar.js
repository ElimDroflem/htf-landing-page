import React from "react";
import "../style.css";
import "../variables.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav--title">Human Task Force</div>
      <div className="nav--links">
        <a href="/">Home</a>
        <a href="/">Contact</a>
      </div>
      <div className="button--main">Launch App</div>
    </div>
  );
};

export default Navbar;
