import React from "react";

const BeeHeader = () => {
  return (
    <div className="flex h-screen">
      <div className="pl-12 mt-20">
        <h1 className="py-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-bg-left to-bg-right">
          BEES CLUB
        </h1>
        <h2 className="py-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white">
          Participate now in the preservation of our bees.
        </h2>
        <h2 className="py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white">
          32900 bees MINT <br /> 8 available on sale
        </h2>
        <div className="w-[33rem] h-[3px] bg-gradient-to-r from-[#73E0A9] to-[#5240f5]" />
      </div>
      <div className="pr-4">
        <img
          className="w-[40rem] ml-[5rem]"
          src="./assets/bees/mainBee.png"
          alt="imageCoralBackground"
          width={800}
        />
      </div>
    </div>
  );
};

export default BeeHeader;
