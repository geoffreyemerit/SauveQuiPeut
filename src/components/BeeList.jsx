import React from "react";
import beeArray from "../data/beesdata";
import BeeCard from "./BeeCard";

const BeeList = () => {
  return (
    <div className="mb-52">
      <div className="flex flex-row flex-wrap px-[10vh] justify-between mx-[20vh] gap-4">
        {beeArray &&
          beeArray.map((bee) => (
            <BeeCard
              key={bee.id}
              name={bee.name}
              autor={bee.autor}
              age={bee.age}
              price={bee.price}
              image={bee.image}
            />
          ))}
      </div>
    </div>
  );
};

//

export default BeeList;
