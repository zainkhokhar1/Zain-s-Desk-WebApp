import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const OldTodoCard = ({
  date,
  text,
  category,
  updatedDate,
  startTime,
  endTime,
}) => {
  const [showFullTodo, setShowFullTodo] = useState(false);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-[#26252C] relative border-[1px] border-[#F8FAFB]/70 hover:border-[#F8FAFB]/100 duration-200 p-2 rounded-lg cursor-default opacity-80 hover:opacity-100 text-wrap">
      {/* catogory to show */}
      <p className="flex items-start text-gray-400 text-xs">
        <span className="text-xs text-gray-200 border border-[#F8FAFB]/40 w-fit px-[7px] py-[3px] rounded-full">
          {category}
        </span>
        {showFullTodo && (
          <span className="text-xs ml-2 -mt-0 text-[#F8FAFB]">
            <div className="flex items-center gap-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="">
                {formatTime(startTime)} - {formatTime(endTime)}
              </span>
            </div>
          </span>
        )}
      </p>

      {/* Actual todo to show here */}
      <p
        className={`text-gray-200 mt-2 text-sm ${
          showFullTodo ? "" : "line-clamp-2"
        }`}
      >
        {text}
      </p>

      {/* date to show */}
      <div className="flex items-center mt-2 justify-between">
        <p className="text-gray-400 text-xs">created {date}</p>
        {/*updated date to show */}
        {showFullTodo && (
          <p className="text-gray-400 text-xs">updated {updatedDate}</p>
        )}
      </div>

      {/* description to show */}
      {/* full preview icon */}
      <AiOutlineEye
        onClick={() => setShowFullTodo(!showFullTodo)}
        className="absolute top-2 right-2 text-xl text-white/70 hover:text-white/90 duration-100 cursor-pointer"
      />
    </div>
  );
};

export default OldTodoCard;
