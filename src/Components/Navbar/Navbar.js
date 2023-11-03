import React from "react";
import "../../style.css";
import "./navbar.css";

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="nav--link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

export const PrimaryButton = ({ onClick, label }) => (
  <button className="button--main" onClick={onClick}>
    {label}
  </button>
);

const Navbar = () => {
  const launchAppUrl = "https://task.humandao.org/";

  const handleButtonClick = () => {
    window.open(launchAppUrl, "_blank");
  };

  return (
    <nav className="nav">
      <div className="nav--container">
        <div className="nav--title">Human Task Force</div>
        <div className="nav--links">
          <NavLink href="https://humandao.org/" label="Home" />
          <NavLink href="#Contact" label="Contact" />
        </div>
        <PrimaryButton onClick={handleButtonClick} label="Launch App" />
      </div>
    </nav>
  );
};

export default Navbar;
