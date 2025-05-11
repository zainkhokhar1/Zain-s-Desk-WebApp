import React from "react";

const CustomSelection = ({
  setOption,
  setIsDropdownOpen,
  isDropdownOpen,
  option,
}) => {
  const options = ["Today", "This Week", "This Month"];
  return (
    <>
      {/* Custom Select Option */}
      <div className="relative w-fit mb-1">
        <div
          className="bg-[#1C1C1E] text-white min-w-32 px-2 py-1 rounded-md cursor-pointer flex items-center justify-between gap-2 border border-purple-500/10 hover:bg-[#2C2C2E]"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{option}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
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

        {/* Dropdown Options */}
        {isDropdownOpen && (
          <div className="absolute mt-1 bg-[#1C1C1E] text-white rounded-lg shadow-lg border border-white/10 w-full z-10">
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  setOption(opt); // Set the selected option
                  setIsDropdownOpen(false); // Close the dropdown
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-[#2C2C2E] ${
                  option === opt ? "bg-[#2C2C2E]" : ""
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSelection;
