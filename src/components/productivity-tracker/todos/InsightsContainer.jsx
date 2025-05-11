import React from "react";
import BarContainer from "./BarContainer";
import PieContainer from "./PieContainer";

const InsightsContainer = () => {
  return (
    <div className="w-full grid grid-cols-12 pt-4 px-1 gap-3 mb-5 ">
      {/* bar container */}
      <BarContainer />

      {/* Pie container */}
      <PieContainer />
    </div>
  );
};

export default InsightsContainer;
