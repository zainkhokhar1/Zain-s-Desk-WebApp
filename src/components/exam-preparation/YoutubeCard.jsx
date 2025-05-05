import React from "react";

const YoutubeCard = ({ thumbnail, title, duration, channel }) => {
  return (
    <div className="bg-white/5 flex items-start min-h-28 col-span-3 p-1 rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 duration-200 cursor-pointer relative">
      <img
        src={thumbnail}
        alt={title}
        className="w-1/4 h-full rounded-lg object-cover"
      />
      <div className="p-3">
        <h3 className="font-medium text-white line-clamp-2 w-11/12">{title}</h3>
        <div className="flex justify-between text-white/60 text-sm mt-2">
          <span>{channel}</span>
        </div>
        <div className="flex items-center gap-1 py-[6px] bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit px-2 rounded-md mt-2">
          <span className="text-xs tracking-wide">{duration}</span>
        </div>
      </div>

      <button className="absolute z-10 right-4 bottom-3 cursor-pointer hover:bg-white/90 duration-200 px-5 py-[3px] rounded-sm bg-white text-black">
        Visit
      </button>
    </div>
  );
};

export default YoutubeCard;
