import React from "react";
import CollectionArray from "../data/collection";
import Collections from "./Collections";

const HomeCollections = () => {
  return (
    <div>
      {CollectionArray &&
        CollectionArray.map((collection) => (
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
  );
};

//

export default HomeCollections;
