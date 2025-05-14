import React from "react";
import OldTodoCard from "./OldTodoCard";
import { todosData } from "../../../data";

const AllTimeTodo = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white">All Time Todos</h2>
      <div className="text-xs text-gray-400 ">
        {/* Placeholder for the All Time Todos content */}
        <p className="text-gray-400">
          This section will display all time todos.
        </p>
      </div>

      {/* conatienr to show the old todos in the form of card */}
      <div className="grid grid-cols-1 gap-3 mt-4">
        {todosData.map((singleTodo) => {
          return (
            <OldTodoCard
              key={singleTodo.id}
              text={singleTodo.text}
              date={singleTodo.createdOn}
              category={singleTodo.category}
              startTime={singleTodo.startTime}
              endTime={singleTodo.endTime}
              updatedDate={singleTodo.updatedOn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllTimeTodo;
