import React, { useState } from "react";
import CustomSelection from "../../components/productivity-tracker/todos/CustomSelection.jsx";
import CardsContainer from "../../components/productivity-tracker/todos/CardsContainer.jsx";
import InsightsContainer from "../../components/productivity-tracker/todos/InsightsContainer.jsx";
import ShowTodoContainer from "../../components/productivity-tracker/todos/ShowTodoContainer.jsx";

const Todos = () => {
  const [option, setOption] = useState("Today");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      {/* Custom drop down options */}
      <CustomSelection
        setIsDropdownOpen={setIsDropdownOpen}
        setOption={setOption}
        isDropdownOpen={isDropdownOpen}
        option={option}
      />

      {/* Cards container */}
      <CardsContainer />

      {/* Insights section to show the details in the charts (bar and vertically heighted) */}
      <InsightsContainer />

      {/* Todos showing container */}
      <ShowTodoContainer />

      {/* overlay to close the drop down */}
      {isDropdownOpen && (
        <div
          className="inset-0 absolute bg-transparent z-0"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        ></div>
      )}
    </div>
  );
};

export default Todos;
