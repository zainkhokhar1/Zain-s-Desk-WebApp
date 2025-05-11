import React from "react";
import { IoAdd } from "react-icons/io5";

const CreateTodo = () => {
  return (
    <div className="w-full bg-cyan-400/10 col-span-4 h-40 rounded-xl border border-white/20 p-2 relative">
      <img
        src="../../create-todo.png"
        alt="create-img"
        className="w-1/2 h-40 absolute right-2 object-cover"
      />

      <div className="w-1/2 h-full py-2 flex flex-col items-start justify-between">
        <div>
          <h4 className="text-lg font-medium">Create new Todo</h4>
          <p className="text-xs text-white/80">
            Create todo to regulate your day.
          </p>
        </div>
        <button className="h-fit flex items-center justify-center gap-2 w-5/6 px-2 py-1 bg-blue-100 hover:bg-blue-200 duration-300 text-black rounded-md">
          <IoAdd className="!text-black text-xl" />
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
