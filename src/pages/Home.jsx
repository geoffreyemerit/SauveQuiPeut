import React from "react";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import HomeEcoStats from "../components/HomeEcoStats";
import HomeConvictions from "../components/HomeConvictions";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeConvictions />
      <HomeEcoStats />
      <Footer />
    </div>
  );
};

export default Home;
