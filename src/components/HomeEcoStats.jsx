import React from "react";
import ReactPlayer from "react-player";

const HomeEcoStats = () => {
  return (
    <div>
      <div className="flex flex-col w-full text-center">
        <h2 className="text-xl font-bold text-slate-50">
          Découvrez nos éco-stats
        </h2>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">
          The NFT marketplace with everything for everyone
        </span>
        <ReactPlayer
          className="flex self-center m-5"
          url="https://www.youtube.com/watch?v=Z9uCpZPJ1iI"
        />
        <button
          type="button"
          className="mb-10 flex self-center justify-center w-64 rounded-full px-5 py-2.5 bg-gradient-to-br from-green-400 to-blue-600 text-slate-50"
        >
          Focus sur les associations
        </button>
      </div>
    </div>
  );
};

export default HomeEcoStats;
