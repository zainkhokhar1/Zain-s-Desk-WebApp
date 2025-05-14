import React, { useEffect, useState } from "react";
import SingleDateBlock from "./SingleDateBlock.jsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import getDaysInCurrentMonth from "../../../utils/getDaysInCurrentMonth.js";
import ScrollContainer from "react-indiana-drag-scroll";

const HeaderMonths = ({ isSelected, setIsSelected }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    let returnedDays = getDaysInCurrentMonth();
    setDays(returnedDays);
  }, []);

  if (days.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-2xl font-bold">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 mb-2">
      {/* Left arrow container */}
      <div className="flex items-center justify-center group h-10 w-12 p-2 bg-white text-black rounded-md shadow shadow-white/10 cursor-pointer hover:bg-white/95 duration-300">
        <BsChevronLeft className="text-2xl group-hover:opacity-100 opacity-70" />
      </div>
      {/* Scrollable container for the days */}
      <ScrollContainer className="mt-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-0">
          {days.map((day, index) => (
            <SingleDateBlock
              key={index}
              day={day.dayName}
              date={day.date}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          ))}
        </div>
      </ScrollContainer>

      {/* Right arrow container */}
      <div className="flex items-center justify-center group h-10 w-12 p-2 bg-white text-black rounded-md shadow shadow-white/10 cursor-pointer hover:bg-white/95 duration-300">
        <BsChevronRight className="text-2xl group-hover:opacity-100 opacity-70" />
      </div>
    </div>
  );
};

export default HeaderMonths;
