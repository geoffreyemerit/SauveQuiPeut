import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="flex h-screen">
      <div className="pl-12 mt-20">
        <h1 className="py-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-bg-left to-bg-right">
          SAUVE QUI PEUT
        </h1>
        <h2 className="py-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white">
          How digital and NFT can be a leverage for the environment
        </h2>
        <h2 className="py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white">
          First NFT sales platform with <br /> a positive ecological impact
        </h2>
        <div className="flex pt-44">
          <img
            src="./assets/global/play.png"
            alt="knowMore"
            width={20}
            height={20}
          />
          <Link className="hover:text-gray-200" to="/ecostats">
            <h4 className="pl-2 text-sm font-bold text-slate-200">
              Learn more about our eco-stats!
            </h4>
          </Link>
        </div>
      </div>
      <div className="pr-4">
        <img src="./assets/global/grenadeBg.png" alt="SQP" width={800} />
      </div>
    </div>
  );
};

export default HomeHeader;
