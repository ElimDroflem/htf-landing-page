import React from "react";
import "../style.css";
import "../variables.css";
import "./video.css";

const Video = () => {
  return (
    <div className="video">
      <div className="video--container">
        <div className="video--title">Human Task Force: How It Works</div>
        <img
          className="video--screen"
          alt="Video screen"
          src="/img/video-screen.png"
        />
        <div className="video--controls">
          <img
            className="video--play"
            alt="Video play"
            src="/img/video-play.svg"
          />
          <img
            className="video--slider"
            alt="Video slider"
            src="/img/video-slider.png"
          />
          <img
            className="video--fullscreen"
            alt="Video fullscreen"
            src="/img/video-fullscreen.png"
          />
          <img
            className="video--sound"
            alt="Video sound"
            src="/img/video-sound.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
