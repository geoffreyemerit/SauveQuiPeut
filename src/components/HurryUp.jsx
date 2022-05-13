import React from "react";
import { Link } from "react-router-dom";
import hurrysUpData from "../data/hurrysUp";

const HurryUp = () => {
  return (
    <div>
      <div className="ml-32 ">
        <h2 className="ml-10 text-xl font-bold mb-14 text-slate-50">
          Hurry Up !
        </h2>
      </div>
      <div className="flex justify-between items-center h-[25%] w-[75%] m-auto ">
        {hurrysUpData && (
          <Link to="/explorer/corails">
            <div className="border-solid border-2 border-[#5240f5] rounded-2xl w-[19rem] h-[32rem] ">
              <div className="border-solid bg-black border-2 border-[#73E0A9] rounded-2xl h-[18rem] w-[17rem] m-auto mt-[0.4rem]">
                <img
                  src={hurrysUpData[1].image}
                  alt={hurrysUpData[1].name}
                  className="w-[17rem] h-[17.7rem]"
                />
              </div>
              <div>
                <h2 className="text-white text-center mt-[1rem] ">
                  {hurrysUpData[1].name}
                </h2>
                <h3 className="text-white text-xs text-center mb-[1rem]">
                  {hurrysUpData[1].autor}
                </h3>
              </div>
              <div>
                <p className="text-white w-[80%] m-auto text-sm rounded-2xl">
                  {hurrysUpData[1].desc}
                </p>
              </div>
            </div>
          </Link>
        )}
        {hurrysUpData && (
          <Link to="/explorer/bee">
            <div className="border-solid border-2 border-[#5240f5] rounded-2xl w-[19rem] h-[32rem] ">
              <div className="border-solid bg-black border-2 border-[#73E0A9] rounded-2xl h-[18rem] w-[17rem] m-auto mt-[0.4rem]">
                <img
                  src={hurrysUpData[0].image}
                  alt={hurrysUpData[0].name}
                  className="w-[17rem] h-[17.7rem]"
                />
              </div>
              <div className="">
                <h2 className="text-[white] text-center mt-[1rem] ">
                  {hurrysUpData[0].name}
                </h2>
                <h3 className="text-white text-xs text-center mb-[1rem]">
                  {hurrysUpData[0].autor}
                </h3>
              </div>
              <div>
                <p className="text-white text-sm w-[80%] m-auto rounded-2xl">
                  {hurrysUpData[0].desc}
                </p>
              </div>
            </div>
          </Link>
        )}
        {hurrysUpData && (
          <Link to="/explorer/rhinos">
            <div className=" border-solid border-2 border-[#5240f5] rounded-2xl w-[19rem] h-[32rem]">
              <div className="border-solid bg-black border-2 border-[#73E0A9] rounded-2xl h-[18rem] w-[17rem] m-auto mt-[0.4rem]">
                <img
                  src={hurrysUpData[2].image}
                  alt={hurrysUpData[2].name}
                  className="w-[17rem] h-[17.7rem] rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-white text-center mt-[1rem] ">
                  {hurrysUpData[2].name}
                </h2>
                <h3 className="text-white text-xs text-center mb-[1rem]">
                  {hurrysUpData[2].autor}
                </h3>
              </div>
              <div>
                <p className="text-white text-sm w-[80%] m-auto rounded-2xl">
                  {hurrysUpData[2].desc}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HurryUp;
