import React from "react";
import "../style.css";
import "../variables.css";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      {/* title */}
      <div className="services--header">Current Services</div>
      {/* top line of boxes */}
      <div className="services--top">
        {/* first box */}
        <div className="services--group">
          <div className="services--title">
            <img
              className="img-2"
              alt="Grommet icons grow"
              src="/img/grommet-icons-grow.svg"
            />
            <h2>Growth</h2>
          </div>
          <p>
            Elevate your web3 project’s presence. From socials to user
            engagement, we’ve got you covered.
          </p>
        </div>
        {/* 2nd box */}
        <div className="services--group">
          <div className="services--title">
            <img
              className="img-2"
              alt="Ic outline more time"
              src="/img/ic-outline-more-time.svg"
            />
            <h2>Time-Saving</h2>
          </div>
          <p>
            Outsource admin, data entry, and more. Optimize both business and
            personal time.
          </p>
        </div>
        {/* 3rd box box */}
        <div className="services--group">
          <div className="services--title">
            <img
              className="img-2"
              alt="Icomoon free lab"
              src="/img/icomoon-free-lab.svg"
            />
            <h2>Research</h2>
          </div>
          <p>Dive deep with large-scale data scraping and web3 research.</p>
        </div>
      </div>

      {/* 4th box */}
      <div className="services--tailored">
        <h2>Tailored For You</h2>
        <p>Need something unique? Reach out for custom services.</p>
        <button className="button--main">Contact Us</button>
      </div>
    </div>
  );
};

export default Services;
