import React from "react";
import convictionsArray from "../data/convictions";
import Convictions from "./Convictions";

const HomeConvictions = () => {
  return (
    <div>
      {/* :DIV TOTALE */}
      <div className="flex flex-col m-32">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3 font-bold text-5xl text-center mb-10">
          ZOOM SUR NOS CONVICTIONS
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
