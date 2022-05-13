import React from "react";
import PropTypes from "prop-types";

const Collections = ({ img, title, price, avg, subtitle }) => {
  return (
    <div className="relative w-56 duration-100 ease-in bg-black border-2 border-green-200 h-80 rounded-2xl bg-gradient-to-t from-free-card-bot/30 to-free-card-top/80 bg-opacity-10 backdrop-blur-lg z-2 shadow-5xl backdrop-filter hover:border-purple-300 ">
      <div className="flex flex-col items-center justify-around w-full h-full ">
        <div className="flex items-center justify-between w-full px-2">
          <img
            className="absolute top-0 right-0 w-full cursor-pointer h-[25vh] rounded-t-2xl bg-carder"
            src={img}
            alt="heart"
          />
        </div>

        <div className="w-full mb-3 text-xs text-center text-white bg-opacity-50 rounded-b-2xl pt-[26vh]">
          <p className="text-sm font-bold">
            {title} <br />
          </p>
          <p className="pt-2 pb-2 text-stone-300">{subtitle}</p>

          <hr className="pt-1 min-w-fit bg-gradient-to-r from-green-400 to-blue-700" />

          <p className="text-left pt-[2vh] text-stone-300">{avg} </p>
          <p className="text-sm font-bold text-white">{price}</p>
        </div>
      </div>
    </div>
  );
};
Collections.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  avg: PropTypes.string,
  subtitle: PropTypes.string,
};

Collections.defaultProps = {
  img: "",
  title: "",
  price: "",
  avg: "",
  subtitle: "",
};

export default Collections;
