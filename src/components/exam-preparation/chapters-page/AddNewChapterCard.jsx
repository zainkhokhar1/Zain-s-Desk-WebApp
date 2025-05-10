import React, { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ChapterCreateContext from "../../../context/CreateChapterContext";
import CreateChapterPopup from "./CreateChapterPopup";
import AddNotes from "./AddNotes.jsx";

const AddNewChapterCard = () => {
  const [createChapter, setCreateChapter] = useContext(ChapterCreateContext);

  // handler to show the popup
  const handleCreateChapter = () => {
    setCreateChapter(!createChapter);
  };

  return (
    <div className="p-2 h-86 col-span-1 group border cursor-pointer duration-300 border-white/10 rounded-xl">
      {/* container to show for the image */}
      <div className="h-5/12 w-full bg-white/15 relative rounded-lg">
        <span className="bg-white p-2 w-fit h-fit group-hover:scale-115 duration-200 absolute left-32 rounded-full top-10">
          <IoMdAdd className="text-black text-xl" />
        </span>
      </div>

      <div className="mt-3 ml-2">
        <h2 className="text-lg font-medium text-white-400">
          Add a New Chapter
        </h2>
        <p className="text-sm text-gray-600 mt-1 tracking-wide">
          Create and organize a new chapter with custom details to enhance your
          study flow.
        </p>
      </div>

      {/* Button for create new Chapter */}
      <button
        onClick={handleCreateChapter}
        className="bg-white hover:bg-white/95 duration-200 gap-3 py-[6px] mt-12 flex items-center justify-center rounded-md w-full"
      >
        <IoMdAdd className="text-black text-xl" />
        <span className="text-black">Add new Chapter</span>
      </button>

      {/* popup to create new chapter */}
      <CreateChapterPopup />

      {/* overlay to show when the popup is opened */}
      {createChapter && (
        <div className="fixed inset-0 h-screen w-screen bg-black/60"></div>
      )}
    </div>
  );
};

export default AddNewChapterCard;
