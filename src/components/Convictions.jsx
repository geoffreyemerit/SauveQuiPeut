import React from "react";
import PropTypes from "prop-types";

const Convictions = ({ name, text, image }) => {
  return (
    <div className="flex flex-col m-5">
      <img className="flex self-center w-10 h-10" src={image} alt={name} />

      <h3 className="flex self-center m-2 text-sm font-bold text-slate-50">
        {name}
      </h3>
      <p className="flex w-48 text-xs text-justify text-slate-50 ">{text}</p>
    </div>
  );
};

Convictions.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Convictions;
