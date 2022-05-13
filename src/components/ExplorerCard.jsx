import React from "react";
import PropTypes from "prop-types";

const ExplorerCard = ({ image, name, price, autor }) => {
  return (
    <div className="relative w-56 duration-100 ease-in bg-black border-2 border-green-200 h-80 rounded-2xl bg-gradient-to-t from-free-card-bot/30 to-free-card-top/80 bg-opacity-10 backdrop-blur-lg z-2 shadow-5xl backdrop-filter hover:border-purple-300 ">
      <div className="flex flex-col items-center justify-around w-full h-full ">
        <div className="flex items-center justify-between w-full px-2">
          <img
            className="absolute top-0 right-0 w-full cursor-pointer h-[28vh] rounded-t-2xl bg-carder"
            src={image}
            alt={name}
          />
        </div>

        <div className="w-full mb-3 text-xs text-center text-white bg-opacity-50 rounded-b-2xl pt-[25vh]">
          <p className="text-sm font-bold">{name}</p>
          <p className="pb-2 text-stone-300">{autor}</p>

          <hr className="pt-1 min-w-fit bg-gradient-to-r from-green-400 to-blue-700" />

          <p className="mt-4 text-sm font-bold text-white">Price : {price}</p>
        </div>
      </div>
    </div>
  );
};
ExplorerCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  autor: PropTypes.string,
};

ExplorerCard.defaultProps = {
  image: "",
  name: "",
  price: "",
  autor: "",
};

export default ExplorerCard;
