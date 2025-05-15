import React, { useEffect, useState } from "react";

const SingleDateBlock = ({
  day,
  date,
  index,
  currentIndex,
  setCurrentIndex,
}) => {
  // function to handle the click event
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      onClick={() => {
        handleClick(index);
      }}
      className={`flex flex-col items-start min-h-20 min-w-32 p-2 border-[2px] shadow  rounded-lg  duration-300 cursor-pointer ${
        index == currentIndex
          ? "bg-white text-black shadow-black/10 hover:bg-white/95 border-black/50"
          : "bg-white/5 hover:bg-white/10 shadow-white/10  border-white/30"
      }`}
    >
      <span className="oldstyle-nums tracking-wider">{day}</span>
      <span className="text-xl oldstyle-nums tracking-widest font-normal mt-2">
        {date.split("-")[2]}
      </span>
    </div>
  );
};

export default SingleDateBlock;
