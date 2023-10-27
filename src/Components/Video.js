import React from "react";
import "../style.css";

const Video = () => {
  return (
    <div className="video">
      <div className="overlap-group-3">
        <div className="video-title">Quick Onboarding Demo</div>
        <img
          className="video-screen"
          alt="Video screen"
          src="/img/video-screen.png"
        />
        <img
          className="video-play"
          alt="Video play"
          src="/img/video-play.svg"
        />
        <img
          className="video-slider"
          alt="Video slider"
          src="/img/video-slider.png"
        />
        <img
          className="video-fullscreen"
          alt="Video fullscreen"
          src="/img/video-fullscreen.png"
        />
        <img
          className="video-sound"
          alt="Video sound"
          src="/img/video-sound.png"
        />
      </div>
    </div>
  );
};

export default Video;
