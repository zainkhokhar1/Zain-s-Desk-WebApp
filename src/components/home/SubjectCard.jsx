import React from "react";
import { FaBook, FaYoutube } from "react-icons/fa";

const SubjectCard = ({
  title,
  type,
  status,
  image,
  lastUpdated,
  stats,
  priority
}) => {

  return (
    <div className="border border-white/10 rounded-xl h-82 col-span-6 p-2 bg-[#2D2D2D] relative">
      <img
        src={image}
        alt="subjectImage"
        className="w-full h-5/12 object-cover rounded-lg"
      />
      {/* container for the  */}
      <span className={`bg-[#FF0B55] px-2 py-[4px] absolute top-2 right-3 mt-2 rounded-full text-xs text-white font-medium`}>
        {status}
      </span>

      <div className="flex items-start justify-between mt-0">
        <span className="flex items-start gap-2 mt-3">
          <FaBook className="text-md opacity-90 mt-[6px]" />
          <h1 className="text-lg w-50 line-clamp-2 break-all font-semibold relative mt-0">
            {title}
          </h1>
        </span>
        <span className="px-3 text-sm font-medium mt-4 rounded-full py-[2px] bg-[#F6E9B2] text-black/80">
          {type}
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="flex items-center gap-1 mt-3 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit pl-2 pr-4 rounded-md">
          <span className="text-[#F0F0F0] text-md">{stats.images}</span>
          <span className="text-xs">Images</span>
        </div>
        <div className="flex items-center gap-1 mt-3 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit pl-2 pr-4 rounded-md">
          <span className="text-[#F0F0F0] text-md">{stats.videos}</span>
          <span className="text-xs">Videos</span>
        </div>
        <div className="flex items-center gap-1 mt-3 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit pl-2 pr-4 rounded-md">
          <span className="text-[#F0F0F0] text-md">{stats.pdfs}</span>
          <span className="text-xs">Pdfs</span>
        </div>
        {/* priority based things (color coding) */}
        <div className="flex items-center gap-1 py-[6px] bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit pl-2 pr-4 rounded-md">
          <span className="text-xs">{priority}</span>
        </div>
        <div className="flex items-center gap-2 py-[5px] text-sm bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit pl-2 pr-4 rounded-md">
          <FaYoutube />
          <span className='text-xs'>
            5 Videos
          </span>
        </div>
      </div>

      <div className="absolute bottom-1">
        <span className="text-xs">Last Updated :</span>
        <span className="ml-2 text-xs">{lastUpdated}</span>
      </div>
      <button className="absolute right-2 bottom-2 cursor-pointer hover:bg-white/95 duration-200 px-7 py-1 rounded-lg bg-white text-black">
        Start
      </button>
    </div>
  );
};

export default SubjectCard;
 