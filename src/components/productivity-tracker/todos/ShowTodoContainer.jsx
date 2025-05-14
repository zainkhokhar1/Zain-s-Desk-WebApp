import React from "react";
import TodayTodoContainer from "./TodayTodoContainer.jsx";
import AllTimeTodo from "./AllTimeTodo.jsx";

const ShowTodoContainer = () => {
  return (
    <div className="grid grid-cols-12 w-full px-1 gap-3 mb-4">
      {/* Show remaining todos */}
      <div className="col-span-8 min-h-52 max-h-[500px] overflow-y-auto custom-scrollbar border border-white/20 p-3 rounded-xl bg-white/5">
        <TodayTodoContainer />
      </div>

      {/* show all completed todos */}
      <div className="col-span-4 overflow-y-auto custom-scrollbar min-h-52 max-h-[500px] border border-white/20 p-3 rounded-xl bg-white/5">
        <AllTimeTodo />
      </div>
    </div>
  );
};

export default ShowTodoContainer;
