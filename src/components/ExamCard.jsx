import React from "react";
import { FaBook, FaImage, FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExamCard = ({
  title,
  type,
  status,
  image,
  lastUpdated,
  stats,
  priority,
  chapters,
}) => {
  // Calculate total pages from chapters
  const totalPages = chapters.reduce((sum, chapter) => sum + chapter.pages, 0);

  return (
    <div className="border border-white/10 rounded-xl h-[350px] w-full p-2 bg-[#2D2D2D] relative">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg"
      />

      {/* Status Badge */}
      <span
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
        ${
          status === "Completed"
            ? "bg-green-500"
            : status === "Pending"
            ? "bg-yellow-500"
            : status === "Remaining"
            ? "bg-red-500"
            : "bg-blue-500"
        } 
        text-white`}
      >
        {status}
      </span>

      <div className="flex items-start justify-between mt-2">
        <span className="flex items-start gap-2">
          <FaBook className="text-md opacity-90 mt-[6px]" />
          <h1 className="text-lg font-semibold line-clamp-1">{title}</h1>
        </span>
        <span className="px-3 text-sm font-medium rounded-full py-[2px] bg-[#F6E9B2] text-black/80">
          {type}
        </span>
      </div>

      {/* Stats Section */}
      <div className="flex gap-2 flex-wrap mt-3">
        <div className="flex items-center gap-1 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit px-3 py-1 rounded-md">
          <FaImage className="text-sm" />
          <span className="text-[#F0F0F0] text-sm">{stats.images}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit px-3 py-1 rounded-md">
          <FaFilePdf className="text-sm" />
          <span className="text-[#F0F0F0] text-sm">{stats.pdfs}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit px-3 py-1 rounded-md">
          <span className="text-xs">{chapters.length} Chapters</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1F1F1F]/50 border-[#F6E9B2]/30 border w-fit px-3 py-1 rounded-md">
          <span className="text-xs">{totalPages} Pages</span>
        </div>
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-md
          ${
            priority === "Important"
              ? "bg-red-500/20 border-red-500/30"
              : "bg-[#1F1F1F]/50 border-[#F6E9B2]/30"
          }
          border w-fit`}
        >
          <span className="text-xs">{priority}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
        <div className="text-xs text-white/70">Last Updated: {lastUpdated}</div>
        <Link
          to={`/exam-preparation/${title}/chapters`}
          className="px-6 py-1 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ExamCard;
