import React from "react";
import "../style.css";
import "../variables.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-bar">
        <div className="rectangle-2" />
        <div className="text-wrapper">Human Task Force</div>
        <div className="text-wrapper-2">Contact</div>
        <div className="frame">
          <div className="text-wrapper-3">Launch App</div>
        </div>
        <div className="text-wrapper-4">Home</div>
      </div>
    </div>
  );
};

export default Navbar;
