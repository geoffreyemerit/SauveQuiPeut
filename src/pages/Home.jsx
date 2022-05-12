import React from "react";

import HomeHeader from "../components/HomeHeader";
import HomeEcoStats from "../components/HomeEcoStats";
import HomeConvictions from "../components/HomeConvictions";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeConvictions />
      <HomeEcoStats />
    </div>
  );
};

export default Home;
