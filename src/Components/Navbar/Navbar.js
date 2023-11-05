import React, { useState, useRef, useEffect } from "react";
import "../../style.css";
import "./navbar.css";

export const PrimaryButton = ({ onClick, label }) => (
  <button className="button--main" onClick={onClick}>
    {label}
  </button>
);

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navContentRef = useRef(null);
  const burgerRef = useRef(null);
  const launchAppUrl = "https://task.humandao.org/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navContentRef.current &&
        !navContentRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setShowLinks(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    window.open(launchAppUrl, "_blank");
  };

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      className="nav--link"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setShowLinks(false)}
    >
      {label}
    </a>
  );

  return (
    <nav className="nav">
      <div className="nav--container">
        <div className="nav--title">Human Task Force</div>
        <button
          ref={burgerRef}
          className="burger"
          onClick={() => setShowLinks(!showLinks)}
        >
          <img src="/img/burger-menu.png" alt="Menu" />
        </button>
        <div className="nav--links desktop-links">
          <NavLink href="https://humandao.org/" label="Home" />
          <NavLink href="#Contact" label="Contact" />
        </div>
        <div
          ref={navContentRef}
          className={`nav-content ${showLinks ? "active" : ""}`}
        >
          <div className="nav--links mobile-links">
            <NavLink href="https://humandao.org/" label="Home" />
            <NavLink href="#Contact" label="Contact" />
          </div>
        </div>
        <PrimaryButton onClick={handleButtonClick} label="Launch App" />
      </div>
    </nav>
  );
};

export default Navbar;
