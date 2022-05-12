import React from "react";

const BeeHeader = () => {
  return (
    <div className="flex h-screen">
      <div className="pl-12 mt-20">
        <h1 className="font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3">
          BEES CLUB
        </h1>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white py-3">
          Participer dès maintenant à la préservation de nos insectes.
        </h2>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white py-3">
          10000 Bees MINT <br /> 8 disponibles à la vente
        </h2>
        <div className="w-[33rem] h-[3px] bg-gradient-to-r from-[#73E0A9] to-[#5240f5]" />
      </div>
      <div className="pr-4">
        <img
          className="w-[40rem] ml-[5rem]"
          src="../public/assets/bees/mainBee.png"
          alt="imageCoralBackground"
          width={800}
        />
      </div>
    </div>
  );
};

export default BeeHeader;
