import React, { useState } from "react";
import { FaBookmark, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddNotes from "./AddNotes";

const ChaptersCard = ({
  title,
  notesCount,
  updated,
  progress,
  colorFrom,
  colorTo,
  bookmarked,
  completed,
}) => {
  // state to open and close the addnotes popup.
  const [addNotes, setAddNotes] = useState(false);

  // handler to close the opened popup
  const handleClose = () => {
    setAddNotes(!addNotes);
  };
  return (
    <div className="p-3 h-86 col-span-1 group border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 duration-300 cursor-pointer">
      {/* Header / Chapter Preview */}
      <div
        className={`h-5/12 w-full bg-gradient-to-br ${colorFrom} ${colorTo} relative rounded-lg flex items-center justify-center`}
      >
        {/* Optional Thumbnail or Icon */}
        <span className="text-white text-3xl font-bold">📘</span>

        {/* Bookmark Icon */}
        {bookmarked && (
          <FaBookmark className="absolute top-2 right-2 text-white/80 text-lg" />
        )}

        {/* Completed Icon */}
        {completed && (
          <div className="absolute top-2 left-2 text-green-400 bg-black/30 backdrop-blur-sm p-1 rounded-full">
            <FaCheckCircle className="text-lg" />
          </div>
        )}
      </div>

      {/* Chapter Details */}
      <div className="mt-3 ml-1 mr-1 space-y-3">
        <h2 className="text-lg font-semibold text-white truncate">{title}</h2>
        <p className="text-sm text-gray-400">{notesCount} Notes Uploaded</p>
        <p className="text-xs text-gray-500">Updated: {updated}</p>

        {/* Progress bar */}
        <div className="mt-2">
          <div className="w-full bg-white/10 h-1 rounded-full">
            <div
              className="bg-green-400 h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">Progress: {progress}%</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-2 mt-4">
        <Link
          to={`/exam-preparation/:${title}/:${title}`}
          className="flex-1 bg-white text-black text-sm py-2 rounded-md font-medium duration-200 hover:bg-white/90 text-center"
        >
          View
        </Link>
        <button
          onClick={handleClose}
          className="flex-1 bg-white/10 text-white text-sm py-2 rounded-md font-medium duration-200 hover:bg-white/20"
        >
          Add Notes
        </button>
      </div>

      {/* Popup to add notes to existing chapter */}
      <AddNotes isOpen={addNotes} onClose={handleClose} />

      {/* overlay to show when the popup is opened */}
        {
          addNotes && <div className="fixed inset-0 h-screen w-screen bg-black/60"></div>
        }
    </div>
  );
};

export default ChaptersCard;
