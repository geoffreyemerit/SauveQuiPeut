import React from "react";

const HomeHeader = () => {
  return (
    <div className="flex">
      <div className="pl-12">
        <h1 className="font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3">
          Sauve Qui Peut
        </h1>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white py-3">
          Ou comment le numérique et les NFT peuvent être un levier pour
          l’environnement
        </h2>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white py-3">
          Première plateforme de vente de NFT <br /> à impact écologique positif
        </h2>
      </div>
      <img src="../public/assets/global/grenadeBg.png" alt="SQP" width={600} />
    </div>
  );
};

export default HomeHeader;
