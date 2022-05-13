import React from "react";
import assosArray from "../data/associations";
import AssosTable from "./AssosTable";

const AssosList = () => {
  console.log(assosArray);
  return (
    <div className="mb-52">
      <div className="flex flex-row flex-wrap px-[10vh] justify-between ">
        <div className="flex flex-row self-center justify-around w-full overflow-x-auto text-xl border-2 shadow-md bg-gradient-to-r from-[#3d986b] to-[#58519b]  rounded-2xl border-slate-900 text-slate-300">
          <span className="flex items-center justify-center w-full h-20 font-bold text-center border-2 h-30 border-slate-900 w-25">
            Logos
          </span>
          <span className="flex items-center justify-center w-full h-20 font-bold text-center border-2 h-30 border-slate-900">
            Associations name
          </span>
          <span className="flex items-center justify-center w-full h-20 font-bold text-center border-2 h-30 border-slate-900">
            Creation
          </span>
          <span className="flex items-center justify-center w-full h-20 font-bold text-center border-2 h-30 border-slate-900">
            Category
          </span>
          <span className="flex items-center justify-center w-full h-20 font-bold text-center border-2 h-30 border-slate-900">
            ETH back
          </span>
        </div>
        {assosArray &&
          assosArray.map((asso) => (
            <AssosTable
              key={asso.id}
              name={asso.name}
              desc={asso.desc}
              age={asso.age}
              env={asso.env}
              price={asso.price}
              image={asso.image}
            />
          ))}
      </div>
    </div>
  );
};

export default AssosList;
