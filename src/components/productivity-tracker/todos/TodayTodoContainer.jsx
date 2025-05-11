import React, { useState } from "react";
import { todosData } from "../../../data";
import SingleTodayTodo from "./SingleTodayTodo.jsx";

const TodayTodoContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);

  // Filtered todos based on search, status, and priority
  const filteredTodos = todosData.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || todo.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All" || todo.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <>
      <div className="flex justify-between px-2 pb-3 items-center gap-3">
        <h3 className="text-lg font-medium w-4/12">Today Todo's</h3>

        <div className="flex items-center gap-2 w-8/12">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Todo"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent w-5/12 outline-none border border-white/10 focus:border-white/20 rounded-lg h-9 p-2 text-white"
          />

          {/* Custom Status Filter */}
          <div className="relative w-36">
            <div
              className="bg-transparent border border-white/10 focus:border-white/20 rounded-lg h-9 p-2 text-white flex items-center justify-between cursor-pointer"
              onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
            >
              <span>{statusFilter}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  isStatusDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isStatusDropdownOpen && (
              <div className="absolute mt-1 bg-[#1C1C1E] border border-white/10 rounded-lg shadow-lg z-10 w-full">
                {["All", "Completed", "Pending", "In Progress"].map(
                  (status) => (
                    <div
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setIsStatusDropdownOpen(false);
                      }}
                      className={`px-3 py-2 text-white cursor-pointer hover:bg-white/10 ${
                        statusFilter === status ? "bg-white/10" : ""
                      }`}
                    >
                      {status}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Custom Priority Filter */}
          <div className="relative w-32">
            <div
              className="bg-transparent border border-white/10 focus:border-white/20 rounded-lg h-9 p-2 text-white flex items-center justify-between cursor-pointer"
              onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
            >
              <span>{priorityFilter}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  isPriorityDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isPriorityDropdownOpen && (
              <div className="absolute mt-1 bg-[#1C1C1E] border border-white/10 rounded-lg shadow-lg z-10 w-full">
                {["All", "High", "Medium", "Low"].map((priority) => (
                  <div
                    key={priority}
                    onClick={() => {
                      setPriorityFilter(priority);
                      setIsPriorityDropdownOpen(false);
                    }}
                    className={`px-3 py-2 text-white cursor-pointer hover:bg-white/10 ${
                      priorityFilter === priority ? "bg-white/10" : ""
                    }`}
                  >
                    {priority}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Container to show the filtered todo cards */}
      <div className="flex flex-col items-center gap-3 mt-3">
        {filteredTodos.map((oneData) => (
          <SingleTodayTodo key={oneData.id} {...oneData} />
        ))}
      </div>

      {/* overlay to close the opened dropdown on click */}
      {(isStatusDropdownOpen || isPriorityDropdownOpen) && (
        <div
          className="fixed inset-0 z-0 bg-transparent"
          onClick={() => {
            setIsPriorityDropdownOpen(false);
            setIsStatusDropdownOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default TodayTodoContainer;
