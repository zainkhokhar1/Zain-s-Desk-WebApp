import React from "react";
import TodoPieChart from "./PieChart";
import { pieChartData } from "../../../data";

const PieContainer = () => {
  return (
    <>
      {/* pie chart */}
      <div className="col-span-4 h-88 border bg-white/5 border-white/20 p-3 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">Today Todo's Comparison</h1>
        </div>
        {/* show data based on the top selection Today,This week etc */}
        <TodoPieChart data={pieChartData} />
      </div>
    </>
  );
};

export default PieContainer;
