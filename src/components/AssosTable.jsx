import React from "react";
import PropTypes from "prop-types";

const AssosTable = ({ image, name, age, env, price }) => {
  console.log(image, name, age, price);
  return (
    <div className="flex flex-row self-center justify-around w-full overflow-x-auto shadow-md  bg-gradient-to-r from-[#3b8a62] to-[#58519b] rounded-3xl text-slate-200">
      <img
        className="w-full font-bold text-center border-2 h-44 border-slate-900"
        src={image}
        alt={name}
      />
      <span className="flex items-center justify-center w-full text-xl font-bold text-center border-2 h-44 border-slate-900">
        {name}
      </span>
      <span className="flex items-center justify-center w-full text-xl font-bold text-center border-2 h-44 border-slate-900">
        {age}
      </span>
      <span className="flex items-center justify-center w-full text-xl font-bold text-center border-2 h-44 border-slate-900">
        {env}
      </span>
      <span className="flex items-center justify-center w-full text-xl font-bold text-center border-2 h-44 border-slate-900">
        {price}
      </span>
    </div>
  );
};
AssosTable.propTypes = {
  env: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
  price: PropTypes.string,
};

AssosTable.defaultProps = {
  image: "",
  name: "",
  age: "",
  price: "",
  env: "",
};

export default AssosTable;
