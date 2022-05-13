import React from "react";

const ExplorerHeader = () => {
  return (
    <div className="flex h-[32rem]">
      <div className="pl-12 mt-10">
        <h1 className="py-3 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-bg-left to-bg-right">
          EXPLORER CLUB
        </h1>
        <h2 className="py-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-white">
          Come and discover all the possibilities to preserve the planet.
        </h2>
        <h2 className="py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-white">
          40 NFT&apos;s available RIGHT NOW!
        </h2>
        <div className="w-[33rem] h-[3px] bg-gradient-to-r from-[#73E0A9] to-[#5240f5]" />
      </div>
      <div className="pr-4">
        <img
          className="w-[70rem] h-[40rem]  animate-spinveryslow -mt-10"
          src="../public/assets/global/earth.png"
          alt="imageEarthBackground"
        />
      </div>
    </div>
  );
};

export default ExplorerHeader;
