import React, { useState } from "react";
import { FaBook, FaImage, FaFilePdf } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
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
  isEditOpen,
  setIsEditOpen,
  isDeletePopupOpen,
  setIsDeletePopupOpen,
}) => {
  // State for showing edit and delete options
  const [showOptions, setShowOptions] = useState(false);

  // Calculate total pages from chapters
  const totalPages = chapters.reduce((sum, chapter) => sum + chapter.pages, 0);

  // functions to show the delete and edit options
  const handleDelete = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
    setShowOptions(!showOptions);
  };

  const handleEdit = () => {
    setIsEditOpen(!isEditOpen);
    setShowOptions(!showOptions);
  };

  return (
    <div className="border border-white/10 rounded-xl h-[350px] w-full p-2 bg-[#2D2D2D] relative">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg"
      />

      {/* Status Badge */}
      <span
        className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium
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

      {/* Options to show on the card */}
      <span
        className="text-base absolute top-4 p-1 px-2 bg-black/30 hover:bg-black/40 duration-200 right-4 rounded-full font-medium cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <SlOptions />
      </span>

      {/* Edit and Delete Options */}
      {showOptions && (
        <div className="absolute top-11 right-3 bg-[#1F1F1F]/80 border border-white/10 w-30 rounded-lg shadow-lg z-20">
          <button
            className="block py-[6px] px-2 text-white hover:bg-white/10 w-full text-left border border-b-white/20 border-transparent"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="block py-[6px] px-2 text-white hover:bg-white/10 w-full text-left"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}

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

      {/* Overlay to close the opened options */}
      {showOptions && (
        <div
          className="fixed inset-0 z-10 bg-transparent"
          onClick={() => setShowOptions(!showOptions)}
        ></div>
      )}
    </div>
  );
};

export default ExamCard;
