import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ExamCard from "../../components/ExamCard";
import { subj_PageData } from "../../data";
import examImage from "../../../public/10473220-removebg-preview.png";
import { IoFilterOutline } from "react-icons/io5";

const ExamPreparation = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Subjects");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = [
    "All Subjects",
    "Mids",
    "Finals",
    "Important",
    "Completed",
  ];

  // Filter subjects based on selected filter and search query
  const filteredSubjects = subj_PageData.filter((subject) => {
    const matchesFilter =
      selectedFilter === "All Subjects" ||
      subject.type === selectedFilter ||
      subject.status === selectedFilter ||
      subject.priority === selectedFilter;

    const matchesSearch = subject.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="ml-82 mr-3 min-h-screen">
      <Navbar />

      {/* Styling card to show on the top for beauty */}
      <div className="bg-[#D4EAF0] text-black/95 p-5 rounded-xl h-52 mt-1 relative flex">
        <div className="w-full">
          <h1 className="text-4xl w-full mt-2 font-semibold leading-12 tracking-wider">
            Smart Exam Preparation Dashboard
          </h1>
          <p className="font-medium w-full tracking-wide leading-6 text-sky-600 mt-3">
            Organize subjects, chapters, notes, and AI-powered study resources
            in one clean, intuitive platform.
          </p>
        </div>

        {/* second half to show the image */}
        <div className="w-1/2">
          <img
            src={examImage}
            className="w-full h-68 relative -top-14 right-2 object-contain"
            alt="examImage"
          />
        </div>
      </div>

      {/* starting the main container */}
      <div>
        {/* header */}
        <div className="flex justify-between items-center w-full mt-5">
          <h2 className="text-2xl font-semibold">Zain's Books</h2>
          <div className="flex items-center justify-center gap-3">
            <span className="font-medium cursor-pointer px-3 py-[7px] border border-white/5 hover:bg-white/95 text-black rounded-lg bg-white opacity-95 text- hover:opacity-100 duration-200">
              Add New Book
            </span>
            <div className="flex items-center cursor-pointer hover:bg-[#1C1C1E]/80 duration-200 gap-2 bg-[#1C1C1E] p-2 rounded-md border-[1px] border-[#2C2C2C] w-fit group">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-52 text-[#F0F0F0] placeholder:text-[#F0F0F0]/50"
              />
            </div>
            <span className="bg-white group p-1 rounded-md cursor-pointer">
              <IoFilterOutline className="text-2xl group-hover:text-black text-black/80" />
            </span>
          </div>
        </div>

        {/* Filter options */}
        <div className="flex py-[4px] rounded-lg h-fit w-fit px-[4px] border border-white/20 bg-[#1C1C1C] items-center gap-1 my-7">
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

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-4">
          {filteredSubjects.map((subject) => (
            <ExamCard key={subject.id} {...subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamPreparation;
