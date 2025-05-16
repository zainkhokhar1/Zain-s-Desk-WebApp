import React, { useState } from "react";
import HeaderMonths from "./HeaderMonths";
import CalenderTodos from "./CalenderTodos.jsx";

const CalenderContainer = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <h2 className="flex flex-col items-start mb-4">
        <span className="text-2xl font-bold">
          Productivity, But Make It Pretty
        </span>
        <span className="text-sm text-gray-500 ml-1 mt-[2px]">
          Tasks sorted. Brain unknotted. From chaos to calendar one block at a
          time.
        </span>
      </h2>

      {/* Header month to show the scrollable container */}
      <HeaderMonths isSelected={isSelected} setIsSelected={setIsSelected} />

      {/* calender to show the todos */}
      <CalenderTodos />
    </div>
  );
};

export default CalenderContainer;
