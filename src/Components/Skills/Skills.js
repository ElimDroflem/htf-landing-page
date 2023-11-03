import React from "react";
import "../../style.css";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills--container">
        <p className="skills--title">
          Improving Lives Through Human Task Force
        </p>
        <div className="skills--container-group">
          <div className="skills--group">
            <img className="skills--img" alt="Vector" src="/img/vector-1.svg" />
            <p>
              We scout intelligent individuals from underserved communities.
            </p>
          </div>
          {/* 2nd box */}
          <div className="skills--group">
            <img className="skills--img" alt="Vector" src="/img/vector.svg" />
            <p>
              Task completion on our platform generates revenue for Assistants.
            </p>
          </div>
          {/* 3rd box */}
          <div className="skills--group">
            <img
              className="skills--img"
              alt="Mdi university"
              src="/img/upskill.png"
            />
            <p>
              We furnish the training and platform for self-driven upskilling.
            </p>
          </div>
          {/* 1st box */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
