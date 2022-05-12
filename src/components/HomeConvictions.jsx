import React from "react";
import convictionsArray from "../data/convictions";
import Convictions from "./Convictions";

const HomeConvictions = () => {
  return (
    <div>
      {/* :DIV TOTALE */}
      <div className="flex flex-col">
        <h2 className="ml-20 text-xl font-bold text-slate-50">
          Zoom sur nos convictions
        </h2>
        {/* _______________________________ */}
        {/* :DIV 4 LINER */}
        <div>
          {/* :SECTION */}
          <div className="flex flex-row justify-around">
            {convictionsArray &&
              convictionsArray.map((conviction) => (
                <Convictions
                  key={conviction.id}
                  name={conviction.name}
                  text={conviction.text}
                  image={conviction.image}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeConvictions;
