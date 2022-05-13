import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const HomeEcoStats = () => {
  return (
    <div>
      <div className="flex flex-col w-full mb-40 text-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3 font-bold text-5xl text-center mb-10">
          DISCOVER OUR ECO-STATS!
        </h2>
        <span className="m-2 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">
          The NFT marketplace with everything for everyone
        </span>
        <ReactPlayer
          className="flex self-center m-5"
          url="https://www.youtube.com/watch?v=Z9uCpZPJ1iI"
        />
        <Link className="flex self-center " to="/ecostats">
          <button
            type="button"
            className="my-10 justify-center w-64 rounded-full px-5 py-2.5 bg-gradient-to-br from-green-400 to-blue-600 text-slate-50"
          >
            FOCUS ON ASSOCIATIONS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeEcoStats;
