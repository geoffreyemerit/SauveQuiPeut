import React from "react";
import assosArray from "../data/associations";
import AssosTable from "./AssosTable";

const AssosList = () => {
  console.log(assosArray);
  return (
    <div className="mb-52">
      <div className="flex flex-row flex-wrap px-[10vh] justify-between mx-[20vh]  gap-4">
        {assosArray &&
          assosArray.map((asso) => (
            <AssosTable
              key={asso.id}
              name={asso.name}
              desc={asso.desc}
              age={asso.age}
              price={asso.price}
              image={asso.image}
            />
          ))}
      </div>
    </div>
  );
};

//

export default AssosList;
