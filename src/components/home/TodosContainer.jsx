import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { todos } from "../../data";
import SingleTodo from "./SingleTodo";

const TodosContainer = () => {

  return (
    <div className="bg-[#1C1C1C] rounded-xl border-white/5 border lg:h-71 max-lg:min-h-71 p-2 flex flex-col items-start lg:col-span-2 max-lg:col-span-3 max-lg:order-3 lg:order-2">
      {/* Header section */}
      <section className="flex justify-between items-center w-full">
        <h1 className="text-lg font-medium relative left-3">Todos for Today</h1>
        <button className="bg-[#E9F44A] text-black px-3  hover:opacity-80 duration-200 w-fit py-[1px] rounded-full">
          Add
        </button>
      </section>
      <div className="h-px w-11/12 mx-auto bg-white/10 mt-2"></div>

      {/* Todos list with scrollbar */}
      <ScrollContainer className="flex flex-col mt-2 gap-2 w-full mt- pt-1 overflow-y-auto max-xl:h-80 xl:max-h-71 cursor-grab">
        {todos.map((todo) => (
          <SingleTodo status={todo.status} time={todo.time} task={todo.task} todo={todo} key={todo.id} />
        ))}

      </ScrollContainer>
    </div>
  );
};

export default TodosContainer;
