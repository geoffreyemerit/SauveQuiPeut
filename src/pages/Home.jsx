import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeEcoStats from "../components/HomeEcoStats";
import HomeConvictions from "../components/HomeConvictions";
import HomeCollections from "../components/HomeCollections";
import HurryUp from "../components/HurryUp";
import GoToTop from "../components/GoToTop";

const Home = () => {
  console.log("home");
  return (
    <div>
      <HomeHeader />
      <HurryUp />
      <HomeCollections />
      <HomeConvictions />
      <HomeEcoStats />
      <GoToTop />
    </div>
  );
};

export default Home;
