import React from "react";
import collections from "../data/collection";
import Collections from "./Collections";

const HomeCollections = () => {
  return (
    <div className="my-[25vh]">
      <div>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3 font-bold text-5xl text-center mb-10">
          LES COLLECTIONS
        </h2>
      </div>
      <div className="flex flex-row flex-wrap px-[10vh] justify-between mx-[20vh] my-[10vh] gap-4">
        {collections &&
          collections.map((collection) => (
            <Collections
              key={collection.id}
              title={collection.title}
              subtitle={collection.subtitle}
              avgprice={collection.avgprice}
              price={collection.price}
              img={collection.img}
            />
          ))}
      </div>
    </div>
  );
};

//

export default HomeCollections;
