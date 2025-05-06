import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdDone,
  MdStar,
  MdBookmarkBorder,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";

const Header = ({
  selectedFilter,
  setSelectedFilter,
  filterOptions,
  isDone,
  setIsDone,
  isImportant,
  setIsImportant,
  isBookmarked,
  setIsBookmarked,
  setIsEditPopupOpen,
  setIsDeletePopupOpen,
}) => {
  return (
    <header className="flex items-center justify-between">
      {/* Back Navigation */}
      <div className="flex items-center">
        <Link
          to={"/exam-preparation/:subject/chapters"}
          className="text-black/90 cursor-pointer bg-white hover:bg-white/90 duration-100 p-[7px] px-2 rounded-md flex items-center gap-2"
        >
          <FaChevronLeft className="text-gray-800 hover:text-black duration-100" />
          <span className="text-sm">Back</span>
        </Link>
        <span className="flex items-center pl-1">
          <MdOutlineKeyboardArrowRight className="text-xl" />
          Chapter 1
        </span>
      </div>

      {/* Filter Options */}
      <div className="flex py-[4px] rounded-lg h-fit w-fit px-[4px] border border-white/20 bg-[#1C1C1C] items-center gap-1">
        {filterOptions.map((option) => (
          <div
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`${
              selectedFilter === option
                ? "bg-white text-black/95"
                : "text-white/70 hover:text-white hover:bg-white/10"
            } p-1 rounded-lg px-3 cursor-pointer duration-100`}
          >
            {option}
          </div>
        ))}
      </div>

      {/* Chapter Actions */}
      <div className="flex items-center bg-[#1C1C1C] border border-white/20 rounded-lg p-1">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsDone(!isDone)}
            title={isDone ? "Mark as Undone" : "Mark as Done"}
            className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-100 flex items-center gap-1
              ${isDone ? "text-green-400" : "text-white/70 hover:text-white"}`}
          >
            <MdDone className="text-xl" />
            <span className="text-sm">{isDone ? "Undone" : "Done"}</span>
          </button>
          <button
            onClick={() => setIsImportant(!isImportant)}
            title={isImportant ? "Remove Important" : "Mark as Important"}
            className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-100 flex items-center gap-1
              ${
                isImportant
                  ? "text-yellow-400"
                  : "text-white/70 hover:text-white"
              }`}
          >
            <MdStar
              className={`text-xl ${isImportant ? "fill-current" : ""}`}
            />
            <span className="text-sm">Important</span>
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark"}
            className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-100 flex items-center gap-1
              ${
                isBookmarked
                  ? "text-blue-400"
                  : "text-white/70 hover:text-white"
              }`}
          >
            <MdBookmarkBorder
              className={`text-xl ${isBookmarked ? "fill-current" : ""}`}
            />
            <span className="text-sm">{isBookmarked ? "Saved" : "Save"}</span>
          </button>
          <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
          <button
            onClick={() => setIsEditPopupOpen(true)}
            title="Edit Chapter"
            className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white duration-100 flex items-center gap-1"
          >
            <MdEdit className="text-xl" />
            <span className="text-sm">Edit</span>
          </button>
          <button
            onClick={() => setIsDeletePopupOpen(true)}
            title="Delete Chapter"
            className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-red-400 duration-100 flex items-center gap-1"
          >
            <MdDelete className="text-xl" />
            <span className="text-sm">Delete</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
