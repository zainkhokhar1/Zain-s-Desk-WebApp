import React, { useState } from "react";
import { LuAlarmClockCheck } from "react-icons/lu";
import { MdLabelImportant } from "react-icons/md";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

const SingleTodo = ({status,time,task}) => {
    const [completedTodo, setCompletedTodo] = useState(false);
  return (
    <div
      className={`bg-[#2D2D2D] rounded-lg w-full h-fit p-1 px-2 relative ${
        completedTodo ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="absolute flex items-center left-2 pt-1">
        {/* showing time */}
        <div className="bg-[#E9F44A] size-fit text-black gap-1 px-1 py-[2px] rounded-full flex items-center">
          <LuAlarmClockCheck className="text-black text-md" />
          <span className="text-xs">{time}</span>
        </div>
        <div className="ml-2"></div>
        {/* status container */}
        <div className="bg-[#E9F44A] size-fit flex items-center text-black gap-1 px-1 py-[2px] rounded-full">
          <MdLabelImportant />
          <span className="text-xs">{status}</span>
        </div>

        {/* container to mark the todo as completed */}
        <div
          className="absolute left-68"
          onClick={() => setCompletedTodo(!completedTodo)}
        >
          {completedTodo ? (
            <RiCheckboxCircleFill className="text-xl text-amber-300" />
          ) : (
            <RiCheckboxBlankCircleLine className="text-xl text-amber-200" />
          )}
        </div>
      </div>

      {/* todo task show here */}
      <div className="pt-8 line-clamp-3 pb-2">
        {task}
      </div>
    </div>
  );
};

export default SingleTodo;
