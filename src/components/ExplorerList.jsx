import React, { useState } from "react";
import nftsArray from "../data/nfts";
import ExplorerCard from "./ExplorerCard";

const ExplorerList = () => {
  const [filterType, setFilterType] = useState("");
  return (
    <div className="mb-52">
      <select
        className="focus:text-black text-center text-xl mb-10 ml-16 w-56 h-16 rounded-3xl px-5 py-2.5 bg-gradient-to-br from-green-400 to-blue-600 text-stone-100"
        id="mySelect"
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">ALL</option>
        <option value="rhinos">RHINOS</option>
        <option value="corals">CORALS</option>
        <option value="bees">BEES</option>
        <option value="mams">MAMS</option>
      </select>
      <div className="flex flex-row flex-wrap px-[10vh] justify-between gap-4">
        {nftsArray &&
          nftsArray
            .filter((nft) => !filterType || nft.type === filterType)
            .sort(() => Math.random() - 0.5)
            .map((nft, index) => (
              <ExplorerCard
                key={index}
                name={nft.name}
                autor={nft.autor}
                age={nft.age}
                price={nft.price}
                image={nft.image}
                type={nft.type}
              />
            ))}
      </div>
    </div>
  );
};

//

export default ExplorerList;
