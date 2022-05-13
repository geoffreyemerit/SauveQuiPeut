import React from "react";

const RhinosHeader = () => {
  return (
    <div className="flex h-screen">
      <div className="pl-12 mt-20">
        <h1 className="py-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-bg-left to-bg-right">

          RHINOFEROCES CLUB
        </h1>
        <h2 className="py-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white">
          Participer dès maintenant à la préservation de nos rhinoféroce.
        </h2>
        <h2 className="py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white">
          4300 Rhinos MINT <br /> 8 disponibles à la vente

        </h2>
        <div className="w-[33rem] h-[3px] bg-gradient-to-r from-[#73E0A9] to-[#5240f5]" />
      </div>
      <div className="pr-4">
        <img
          className="w-[35rem] ml-[10rem]"
          src="../public/assets/rhinos/mainRhino.png"
          alt="imageCoralBackground"
          width={800}
        />
      </div>
    </div>
  );
};

export default RhinosHeader;
