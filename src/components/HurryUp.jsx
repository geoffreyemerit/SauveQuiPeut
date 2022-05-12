import React from "react";
import { Link } from "react-router-dom";
import coralsData from "../data/coralsdata";
import insectData from "../data/insectdata";
import mamsData from "../data/mamsdata";

const HurryUp = () => {
  return (
    <div className="flex justify-between items-center h-[25%] w-[75%] m-auto ">
      {coralsData && (
      <Link to="/exporer/corails">
        <div className="border-solid border-2 border-[#5240f5] rounded-2xl w-[19rem] h-[32rem] ">
          <div className="border-solid bg-black border-2 border-[#73E0A9] rounded-2xl h-[18rem] w-[17rem] m-auto mt-[0.4rem]">
            <img
              src={coralsData[8].image}
              alt={coralsData[8].name}
              className="w-[17rem] h-[17.7rem]"
            />
          </div>
          <div>
            <h2 className="text-white text-center mt-[1rem] ">
              {coralsData[8].name}
            </h2>
            <h3 className="text-white text-xs text-center mb-[1rem]">
              {coralsData[8].autor}
            </h3>
          </div>
          <div>
            <p className="text-white w-[80%] m-auto text-sm rounded-2xl">
              {coralsData[8].desc}
            </p>
          </div>
        </div>
</Link>

      )}
      {insectData && (
        <div className="border-solid border-2 border-[#5240f5] rounded-2xl w-[19rem] h-[32rem] ">
          <div className="border-solid bg-black border-2 border-[#73E0A9] rounded-2xl h-[18rem] w-[17rem] m-auto mt-[0.4rem]">
            <img
              src={insectData[8].image}
              alt={insectData[8].name}
              className="w-[17rem] h-[17.7rem]"
            />
          </div>
          <div className="">
            <h2 className="text-[white] text-center mt-[1rem] ">
              {insectData[8].name}
            </h2>
            <h3 className="text-white text-xs text-center mb-[1rem]">
              {insectData[8].autor}
            </h3>
          </div>
          <div>
            <p className="text-white text-sm w-[80%] m-auto rounded-2xl">
              {insectData[8].desc}
            </p>
          </div>
        </div>
      )}
      {mamsData && (
        <div className=" border-solid border-2 border-[#5240f5] rounded-2xl w-[19rem] h-[32rem]">
          <div className="border-solid bg-black border-2 border-[#73E0A9] rounded-2xl h-[18rem] w-[17rem] m-auto mt-[0.4rem]">
            <img
              src={mamsData[0].image}
              alt={mamsData[0].name}
              className="w-[17rem] h-[17.7rem] rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-white text-center mt-[1rem] ">
              {mamsData[0].name}
            </h2>
            <h3 className="text-white text-xs text-center mb-[1rem]">
              {mamsData[0].autor}
            </h3>
          </div>
          <div>
            <p className="text-white text-sm w-[80%] m-auto rounded-2xl">
              {mamsData[0].desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HurryUp;
