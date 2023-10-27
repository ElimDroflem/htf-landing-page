import React from "react";
import "../style.css";
import "../variables.css";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="overlap-3">
        <p className="skills-title">Improving Lives Through Human Task Force</p>
        <div className="skills-growth">
          <img className="vector" alt="Vector" src="/img/vector-1.svg" />
          <p className="text-wrapper-16">
            We scout intelligent individuals from underserved communities.
          </p>
        </div>
        <div className="skills-income">
          <p className="text-wrapper-16">
            Task completion on our platform generates revenue for Assistants.
          </p>
          <img className="vector-2" alt="Vector" src="/img/vector.svg" />
        </div>
        <div className="skills-upskill">
          <p className="text-wrapper-16">
            We furnish the training and platform for self-driven upskilling.
          </p>
          <div className="frame-4">
            <img
              className="img-2"
              alt="Mdi university"
              src="/img/mdi-university.svg"
            />
            <div className="text-wrapper-17">Upskill</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
