import React from "react";
import PropTypes from "prop-types";

const Chart1 = ({ title1, title2, number, subtitle }) => {
  return (
    <div className="py-3">
      <h1 className="text-white text-4xl font-bold">{title1}</h1>
      <h1 className="text-white text-4xl font-bold">{title2}</h1>
      <h2 className="text-bg-left text-3xl">{number}</h2>
      <h3 className="text-slate-400 text-xl pb-7">{subtitle}</h3>
      <div className="flex flex-initial gap-2">
        <div className=" absolute font-bold text-white text-4xl mt-24 pl-24">
          LOVE
        </div>
        <div className="bg-bg-left h-14 w-2 rounded-lg" />
        <div className="bg-bg-left h-28 w-2 rounded-lg" />
        <div className="bg-bg-left h-4 w-2 rounded-lg" />
        <div className="bg-bg-left h-10 w-2 rounded-lg" />
        <div className="bg-bg-left h-14 w-2 rounded-lg" />
        <div className="bg-bg-left h-36 w-2 rounded-lg" />
        <div className="bg-bg-left h-14 w-2 rounded-lg" />
        <div className="bg-bg-left h-14 w-2 rounded-lg" />
        <div className="bg-bg-left h-14 w-2 rounded-lg" />
      </div>
    </div>
  );
};

Chart1.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Chart1;
