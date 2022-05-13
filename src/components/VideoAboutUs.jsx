import React from "react";
import ReactPlayer from "react-player";

const VideoAboutUs = () => {
  const videoSrc = "../public/assets/global/aboutUs.mp4";
  return (
    <div className="w-full h-full">
      <div className="absolute ml-20 text-6xl font-bold text-white mt-36">
        <h1>YOU ARE THE CHANGE,</h1>
        <h2 className="pt-11">YOU ARE THE FUTUR,</h2>
        <h2 className="pt-11">TODAY IS ALREADY TOMORROW,</h2>
        <h2 className="pt-11">AND TOMORROW EQUALS YOU.</h2>
      </div>

      <ReactPlayer url={videoSrc} width="100%" height="100%" playing loop />
    </div>
  );
};

export default VideoAboutUs;
