import React from "react";
import "../style.css";
import "../variables.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav--container">
        <div className="nav--title">Human Task Force</div>
        <div className="nav--links">
          <a href="/">Home</a>
          <a href="/">Contact</a>
        </div>
        <button className="button--main">Launch App</button>
      </div>
    </nav>
  );
};

export default Navbar;
