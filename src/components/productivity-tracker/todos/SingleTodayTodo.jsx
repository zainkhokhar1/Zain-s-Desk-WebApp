import React, { useState } from "react";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import { TbArrowsUp, TbProgressCheck } from "react-icons/tb";

const SingleTodayTodo = (props) => {
  const {
    id,
    text,
    priority,
    category,
    status,
    startTime,
    endTime,
    createdOn,
    onEdit,
    onDelete,
  } = props;

  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // State to toggle options dropdown

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="relative w-full flex flex-col p-3 bg-white/15 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* First Layer */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-sm text-white/80">#{id}</span>
          <h3 className="text-white font-medium">{text}</h3>
        </div>

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {priority === "High" ? (
                <div className="flex items-center gap-1 text-orange-500">
                  <TbArrowsUp />
                  <span className="text-xs">High Priority</span>
                </div>
              ) : priority === "Medium" ? (
                <div className="flex items-center gap-1 text-green-500">
                  <HiOutlineArrowSmallUp />
                  <span className="text-xs">Medium Priority</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-yellow-200">
                  <span className="text-xs">Low Priority</span>
                </div>
              )}
            </div>

            <button
              className="text-white/60 hover:text-white transition-colors"
              onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>

            {/* Options Dropdown */}
            {isOptionsOpen && (
              <div className="absolute right-5 top-0  bg-[#1C1C1E] border border-white/10 rounded-lg shadow-lg z-50 w-32 overflow-hidden">
                <div
                  className="px-3 py-2 text-white cursor-pointer hover:bg-white/10 border border-transparent border-b-white/10"
                  onClick={() => {
                    setIsOptionsOpen(false);
                    onEdit(id); // Trigger the edit callback
                  }}
                >
                  Edit
                </div>
                <div
                  className="px-3 py-2 text-white cursor-pointer hover:bg-white/10"
                  onClick={() => {
                    setIsOptionsOpen(false);
                    onDelete(id); // Trigger the delete callback
                  }}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Layer */}
      <div className="flex flex-wrap items-start justify-between text-sm">
        {/* Status */}
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${
              status === "Completed"
                ? "bg-green-500/20 text-green-500 border-green-500"
                : status === "Pending"
                ? "bg-yellow-500/20 text-yellow-500 border-yellow-500"
                : "bg-cyan-500/20 text-cyan-500 border-cyan-500"
            }`}
          >
            {/* Icon based on status */}
            {status === "Completed" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" />
              </svg>
            ) : status === "Pending" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0V7a1 1 0 112 0v6z" />
              </svg>
            ) : (
              <TbProgressCheck />
            )}
            {status}
          </span>
        </div>

        {/* Created Date */}
        <div className="flex items-center gap-1 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-white/80">Today</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-1 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white/60"
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
          <span className="text-white/80">
            {formatTime(startTime)} - {formatTime(endTime)}
          </span>
        </div>

        {/* Category */}
        <div className="flex items-center gap-1 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-white/80">{category}</span>
        </div>

        {/* Created Date | updated date */}
        <div className="flex items-center gap-1 mt-2 text-xs">
          <span className="text-white/50">{formatDate(createdOn)}</span>
        </div>
      </div>

      {/* overlay to close the options */}
      {isOptionsOpen && (
        <div
          className="fixed inset-0 h-screen w-screen bg-transparent z-10"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        ></div>
      )}
    </div>
  );
};

export default SingleTodayTodo;
