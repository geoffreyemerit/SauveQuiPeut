import React from "react";
import nftsArray from "../data/nfts";
import ExplorerCard from "./ExplorerCard";

const ExplorerList = () => {
  return (
    <div className="mb-52">
      <div className="flex flex-row flex-wrap px-[10vh] justify-between gap-4">
        {nftsArray &&
          nftsArray
            .sort(() => Math.random() - 0.5)
            .map((nft, index) => (
              <ExplorerCard
                key={index}
                name={nft.name}
                autor={nft.autor}
                age={nft.age}
                price={nft.price}
                image={nft.image}
              />
            ))}
      </div>
    </div>
  );
};

//

export default ExplorerList;
