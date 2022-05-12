import React from "react";
import coralsData from "../data/coralsdata";
import insectData from "../data/insectdata";
import mamsData from "../data/mamsdata";

const HurryUp = () => {
  return (
    <div className="flex justify-center items-center h-[25%] w-[75%] m-auto ">
      {coralsData && (
        <div className="border-solid border-2 border-[black] rounded-2xl">
          <img src={coralsData[8].image} alt="imageCoral" />
          <h2 className="">{coralsData[8].name}</h2>
        </div>
      )}
      {insectData && (
        <div>
          <img src={insectData[8].image} alt="imageInsect" />
          <h2 className="">{insectData[8].name}</h2>
        </div>
      )}
      {mamsData && (
        <div>
          <img src={mamsData[8].image} alt="imageMams" />
          <h2 className="">{mamsData[8].name}</h2>
        </div>
      )}
    </div>
  );
};

export default HurryUp;
