import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";

const Header = ({ selected, setSelected }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex items-center justify-between border-transparent border-b-white/25 border-[1.5px] mb-5 mt-3">
      {/* Options for the tabs */}
      <div className="flex h-full w-full">
        {/* Single Page option shown here */}
        <div
          onClick={() => setSelected(1)}
          className={`opacity-70 p-2 pb-[6px] hover:bg-cyan-600/15 w-26 px-3 rounded-sm duration-200 flex items-center justify-between gap-2 border border-transparent cursor-pointer ${
            selected == 1 &&
            "border-b-2 border-b-cyan-500 bg-cyan-600/15 hover:bg-cyan-600/25 py-[7px] text-cyan-500 opacity-100"
          }`}
        >
          Todo
          <FaRegListAlt />
        </div>

        <div
          onClick={() => setSelected(2)}
          className={`p-2 pb-[6px] opacity-70 flex items-center justify-between w-32 px-2 rounded-sm  hover:bg-green-700/20 duration-200 gap-2 border border-transparent cursor-pointer ${
            selected == 2 &&
            "border-b-2 border-b-green-500 bg-green-600/15 hover:bg-green-600/30 py-[7px] text-green-500 opacity-100"
          }`}
        >
          <span className="w-1/2">Calender</span>
          <AiOutlineCalendar />
        </div>

        <div
          onClick={() => setSelected(3)}
          className={`p-2 pb-[6px] opacity-70 flex items-center justify-between text-nowrap w-39 px-3 rounded-sm  hover:bg-yellow-500/20 duration-200 gap-2 border border-transparent cursor-pointer ${
            selected == 3 &&
            "border-b-2 border-b-yellow-500 bg-yellow-500/15 hover:bg-yellow-500/25 py-[7px] text-yellow-500 opacity-100"
          }`}
        >
          <span className="w-1/2">Time Tracker</span>
          <AiOutlineClockCircle />
        </div>
      </div>

      {/* show the date here */}
      <div className="w-fit mb-1 shadow-xs shadow-amber-600 text-nowrap p-[5px] px-3 border-2 border-orange-300 font-medium rounded-full text-sm bg-amber-400/60">
        {date.toDateString()}
      </div>
    </div>
  );
};

export default Header;
