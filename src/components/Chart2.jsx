import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PropTypes from "prop-types";

const Chart2 = ({ title1, title2, number, subtitle }) => {
  const percentage = 66;
  return (
    <div className="py-3">
      <h1 className="text-white text-4xl font-bold">{title1}</h1>
      <h1 className="text-white text-4xl font-bold">{title2}</h1>
      <h2 className="text-bg-left text-3xl">{number}</h2>
      <h3 className="text-slate-400 text-xl pb-7">{subtitle}</h3>
      <div style={{ width: 180, height: 180 }} className="ml-5">
        <div className=" absolute font-bold text-white text-4xl mt-6 pl-20">
          180 ETH
        </div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: "#73E0A9",
            trailColor: "#73E0A9",
            backgroundColor: "#73E0A9",
          })}
        />
      </div>
    </div>
  );
};

Chart2.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Chart2;
