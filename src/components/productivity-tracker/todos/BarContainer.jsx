import React from "react";
import TodoBarChart from "./TodoBarChart";
import { barChartData } from "../../../data";

const BarContainer = () => {
  return (
    <>
      {/* vertical line chart */}
      <div className="col-span-8 h-88 border border-white/20 bg-white/5 p-3 relative rounded-xl overflow-hidden">
        <h3 className="text-white text-lg font-semibold mb-4">
          Todos by Category
        </h3>
        <TodoBarChart data={barChartData} />
      </div>
    </>
  );
};

export default BarContainer;
