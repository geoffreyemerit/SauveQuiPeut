import React from "react";
import collections from "../data/collection";
import Collections from "./Collections";

const HomeCollections = () => {
  return (
    <div className="my-[30vh]">
      <div className="mx-32">
        <h2 className="mb-10 ml-10 text-xl font-bold text-slate-50">
          Les collections
        </h2>
      </div>
      <div className="flex flex-row flex-wrap px-[10vh] justify-between mx-[25vh] my-[10vh] gap-4">
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
