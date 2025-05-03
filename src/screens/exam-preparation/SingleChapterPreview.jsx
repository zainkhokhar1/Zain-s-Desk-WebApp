import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdDone,
  MdStar,
  MdBookmarkBorder,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { Link } from "react-router-dom";
import ImageContainer from "../../components/exam-preparation/ImageContainer";

const SingleChapterPreview = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isDone, setIsDone] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const filterOptions = ["All", "BookMarked", "Completed"];
  return (
    <div className="ml-82 mr-3 min-h-screen">
      <Navbar />

      {/* Main container */}
      <div className="min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to={"/exam-preparation/chapters"}
              className="text-black/90 cursor-pointer bg-white hover:bg-white/90 duration-100 p-[4px] px-[7px] rounded-md flex items-center"
            >
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
            </Link>
            <span className="flex items-center pl-1">
              <MdOutlineKeyboardArrowRight className="text-xl" />
              Chapter 1
            </span>
          </div>
          {/* Filter options */}
          <div className="flex py-[4px] rounded-lg h-fit w-fit px-[4px] border border-white/20 bg-[#1C1C1C] items-center gap-1">
            {filterOptions.map((option) => (
              <div
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`${
                  selectedFilter === option
                    ? "bg-white text-black/95"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                } p-1 rounded-lg px-3 cursor-pointer duration-200`}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Options for the chapter like mark as done, important or bookmarked, delete chapter, edit chapter */}
          <div className="flex items-center bg-[#1C1C1C] border border-white/20 rounded-lg p-1">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsDone(!isDone)}
                title={isDone ? "Mark as Undone" : "Mark as Done"}
                className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-200 flex items-center gap-1
                  ${
                    isDone ? "text-green-400" : "text-white/70 hover:text-white"
                  }`}
              >
                <MdDone className="text-xl" />
                <span className="text-sm">{isDone ? "Undone" : "Done"}</span>
              </button>
              <button
                onClick={() => setIsImportant(!isImportant)}
                title={isImportant ? "Remove Important" : "Mark as Important"}
                className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-200 flex items-center gap-1
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
                className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-200 flex items-center gap-1
                  ${
                    isBookmarked
                      ? "text-blue-400"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <MdBookmarkBorder
                  className={`text-xl ${isBookmarked ? "fill-current" : ""}`}
                />
                <span className="text-sm">
                  {isBookmarked ? "Saved" : "Save"}
                </span>
              </button>
              <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
              <button
                title="Edit Chapter"
                className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white duration-200 flex items-center gap-1"
              >
                <MdEdit className="text-xl" />
                <span className="text-sm">Edit</span>
              </button>
              <button
                title="Delete Chapter"
                className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-red-400 duration-200 flex items-center gap-1"
              >
                <MdDelete className="text-xl" />
                <span className="text-sm">Delete</span>
              </button>
            </div>
          </div>
        </header>

        {/* container to show the image container with options and to show the tabs and the details options of the image in the down section */}
        <div className=" h-[440px] w-8/12 mt-8 rounded-md bg-white/95">
          <ImageContainer />
        </div>
      </div>
    </div>
  );
};

export default SingleChapterPreview;
