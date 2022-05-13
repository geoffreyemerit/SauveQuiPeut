import React from "react";
import GoToTop from "../components/GoToTop";
import TextAboutUs from "../components/TextAboutUs";
import VideoAboutUs from "../components/VideoAboutUs";

const About = () => {
  return (
    <div>
      <VideoAboutUs />
      <TextAboutUs />
      <GoToTop />
    </div>
  );
};

export default About;
