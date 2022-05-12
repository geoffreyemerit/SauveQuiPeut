import React from "react";

const CoralHeader = () => {
  return (
    <div className="flex h-screen">
      <div className="pl-12 mt-20">
        <h1 className="font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3">
          CORAL CLUB CAFE
        </h1>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white py-3">
          Participer dès maintenant à la préservation de nos fonds marins.
        </h2>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white py-3">
          10000 Coraux MINT <br /> 8 disponibles à la vente
        </h2>
        <div className="flex pt-44">
          <img
            src="../public/assets/corals/mainCoral.png"
            alt="imageCoralBackground"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="pr-4">
        <img
          src="../public/assets/corals/mainCoral.png"
          alt="imageCoralBackground"
          width={800}
        />
      </div>
    </div>
  );
};

export default CoralHeader;
