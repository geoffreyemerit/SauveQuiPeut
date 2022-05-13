import React from "react";
import coralsArray from "../data/coralsdata";
import CoralCard from "./CoralCard";

const CoralList = () => {
  return (
    <div className="mb-52">
      <div className="flex flex-row flex-wrap px-[10vh] justify-between mx-[20vh]  gap-4">
        {coralsArray &&
          coralsArray.map((coral) => (
            <CoralCard
              key={coral.id}
              name={coral.name}
              autor={coral.autor}
              age={coral.age}
              price={coral.price}
              image={coral.image}
            />
          ))}
      </div>
    </div>
  );
};

//

export default CoralList;
