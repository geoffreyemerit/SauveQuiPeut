import React from "react";
import PropTypes from "prop-types";

const Chart3 = ({ title1, title2, number, subtitle }) => {
  return (
    <div className="py-3">
      <h1 className="text-white text-4xl font-bold">{title1}</h1>
      <h1 className="text-white text-4xl font-bold">{title2}</h1>
      <h2 className="text-bg-left text-3xl">{number}</h2>
      <h3 className="text-slate-400 text-xl pb-7">{subtitle}</h3>
      <div className="flex gap-4">
        <div className="h-14 w-14 rounded-[50%] bg-bg-right text-white font-bold text-3xl">
          89
        </div>
        <div className="h-24 w-24 rounded-[50%] bg-bg-left text-white font-bold text-6xl">
          112
        </div>
      </div>
    </div>
  );
};

Chart3.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default Chart3;
