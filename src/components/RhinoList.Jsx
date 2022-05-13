import React from "react";
import rhinosArray from "../data/rhinosdata";
import RhinoCard from "./RhinoCard";

const RhinoList = () => {
  return (
    <div className="mb-52">
      <div className="flex flex-row flex-wrap px-[10vh] justify-between mx-[20vh] gap-4">
        {rhinosArray &&
          rhinosArray.map((rhino) => (
            <RhinoCard
              key={rhino.id}
              name={rhino.name}
              autor={rhino.autor}
              price={rhino.price}
              image={rhino.image}
            />
          ))}
      </div>
    </div>
  );
};

//

export default RhinoList;
