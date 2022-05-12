import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeEcoStats from "../components/HomeEcoStats";
import HomeConvictions from "../components/HomeConvictions";
import HomeCollections from "../components/HomeCollections";
import HurryUp from "../components/HurryUp";

const Home = () => {
  console.log("home");
  return (
    <div>
      <HomeHeader />
      <HurryUp />
      <HomeCollections />
      <HomeConvictions />
      <HomeEcoStats />
    </div>
  );
};

export default Home;
