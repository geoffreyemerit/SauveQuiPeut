import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="flex h-screen">
      <div className="pl-12 mt-20">
        <h1 className="font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3">
          SAUVE QUI PEUT
        </h1>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white py-3">
          Où comment le numérique et les NFT peuvent être un levier pour
          l’environnement
        </h2>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white py-3">
          Première plateforme de vente de NFT <br /> à impact écologique positif
        </h2>
        <div className="flex pt-44">
          <img
            src="../public/assets/global/play.png"
            alt="knowMore"
            width={20}
            height={20}
          />
          <Link className="hover:text-gray-200" to="/ecostats">
            <h4 className="text-sm font-bold text-slate-200 pl-2">
              En savoir plus sur nos éco-stats!
            </h4>
          </Link>
        </div>
      </div>
      <div className="pr-4">
        <img
          src="../public/assets/global/grenadeBg.png"
          alt="SQP"
          width={800}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
