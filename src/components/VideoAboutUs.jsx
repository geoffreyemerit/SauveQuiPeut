import React from "react";
import ReactPlayer from "react-player";

const VideoAboutUs = () => {
  const videoSrc = "../public/assets/global/aboutUs.mp4";
  return (
    <div className="h-full w-full">
      <div className="absolute text-white font-bold text-6xl mt-36 ml-20">
        <h1>Vous êtes le changement,</h1>
        <h2 className="pt-11">Vous êtes le futur,</h2>
        <h2 className="pt-11">Aujourd&apos;hui c&apos;est déjà demain,</h2>
        <h2 className="pt-11">Et demain c&apos;est surtout vous.</h2>
      </div>

      <ReactPlayer url={videoSrc} width="100%" height="100%" playing loop />
    </div>
  );
};

export default VideoAboutUs;
