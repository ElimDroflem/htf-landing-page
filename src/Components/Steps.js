import React from "react";
import "../style.css";
import "../variables.css";
import "./steps.css";

const Steps = () => {
  return (
    <div className="steps">
      <div className="group">
        <div className="overlap-group-2">
          <img
            className="steps-group"
            alt="Steps group"
            src="/img/steps-group.svg"
          />
          <div className="steps-title">
            <div className="text-wrapper-5">How it Works</div>
            <p className="p">
              Maximize efficiency with the HTF platform in just three simple
              steps.
            </p>
          </div>
          <img
            className="HTF-platform-image"
            alt="Htf platform image"
            src="/img/htf-platform-image-2-1.png"
          />
          <div className="steps-one">
            <div className="text-wrapper-6">Step 1: Energy</div>
            <img
              className="img"
              alt="Iconamoon lightning"
              src="/img/iconamoon-lightning-1-fill.svg"
            />
            <p className="text-wrapper-7">
              Purchase energy and gain entry to our pool of expert assistants
            </p>
            <img className="line" alt="Line" src="/img/line-1.svg" />
          </div>
          <div className="steps-two">
            <div className="text-wrapper-8">Step 2: Delegate Work</div>
            <img
              className="img"
              alt="Mdi briefcase"
              src="/img/mdi-briefcase.svg"
            />
            <p className="text-wrapper-7">
              Trade your energy to enlist assistance tailored to your needs
            </p>
            <img className="line" alt="Line" src="/img/line-1.svg" />
          </div>
          <div className="steps-three">
            <div className="text-wrapper-9">Step 3: Achieve Excellence</div>
            <img className="img" alt="Uis chart" src="/img/uis-chart.svg" />
            <p className="text-wrapper-7">
              Receive the completed task, saving you time and resources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
