import React from "react";
import { Link } from "react-router-dom";
import ButtonContact from "../components/ButtonContact";
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";
import Chart3 from "../components/Chart3";

const Activity = () => {
  return (
    <div className="flex items-center flex-col pb-10">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-bg-left to-bg-right py-3 font-bold text-5xl text-center">
        SYNTHESIS FLOW CHART
      </h1>
      <div className="flex gap-32 py-10">
        <Chart1
          title1="TODAY'S"
          title2="VISITORS"
          number="3589"
          subtitle="Hourly distribution"
        />
        <Chart2
          title1="ETH DISTRIBUTED"
          title2="PER DAYS"
          number="66%"
          subtitle="PowerSpike"
        />
        <Chart3
          title1="TODAY'S"
          title2="SALES"
          number="112"
          subtitle="89 yesterday"
        />
      </div>
      <Link to="/ecostats">
        <ButtonContact naming="WANNA SEE OTHER STATS?" />
      </Link>
    </div>
  );
};

export default Activity;
