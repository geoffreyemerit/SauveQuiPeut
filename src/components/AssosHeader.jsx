import React from "react";

const AssosHeader = () => {
  return (
    <div className="flex h-[32rem] mb-10">
      <div className="pl-12 mt-20">
        <h1 className="py-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-bg-left to-bg-right">
          ASSOCIATION ECOLOGY
        </h1>
        <h2 className="py-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white">
          Voici un panel d&aquos;associations agissant pour la planète.
        </h2>
        <h2 className="py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white">
          20 associations pour vous !
        </h2>
        <div className="w-[33rem] h-[3px] bg-gradient-to-r from-[#73E0A9] to-[#5240f5]" />
      </div>
      <div className="pr-4">
        <img
          className="w-[40rem] h-[32rem] -ml-10"
          src="../public/assets/global/ecology.png"
          alt="imageCoralBackground"
        />
      </div>
    </div>
  );
};

export default AssosHeader;
