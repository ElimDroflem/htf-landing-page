import React from "react";
import "../style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="overlap-group">
        <button className="button">
          <div className="text-wrapper-3">Launch App</div>
        </button>
        <div className="header-title">HTF Assistants on Standby!</div>
        <p className="header-subtext">
          Delegate tasks, focus on priorities.
          <br />
          <br />
          Each task completed on our platform empowers an underserved
          individual.
          <br />
          <br />
          Save time, boost impact, uplift lives!
        </p>
        <img
          className="header-image"
          alt="Header image"
          src="/img/header-image.png"
        />
      </div>
    </header>
  );
};

export default Header;
