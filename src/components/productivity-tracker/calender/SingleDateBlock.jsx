import React from "react";

const SingleDateBlock = ({ day, date, isSelected, setIsSelected }) => {
  return (
    <div
      onClick={setIsSelected(!isSelected)}
      className={`flex flex-col items-start min-h-20 min-w-26 p-2 border-[2px] shadow shadow-white/10 bg-white/5 border-white/30 rounded-lg hover:bg-white/10 duration-300 cursor-pointer ${isSelected ? "bg-white" : ""}`}
    >
      <span className="oldstyle-nums tracking-wider">{day}</span>
      <span className="text-xl oldstyle-nums tracking-widest font-normal mt-2">
        {date.split("-")[2]}
      </span>
    </div>
  );
};

export default SingleDateBlock;
