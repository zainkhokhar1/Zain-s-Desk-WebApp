import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";
import { SiWikibooks } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import ChaptersCard from "../../components/exam-preparation/ChaptersCard";
import dummyChapters from "../../data";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chapters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen ml-82 mr-3">
      <Navbar />

      {/* Styling card to show on the top for beauty */}
      <div className="bg-[url('https://img.freepik.com/free-vector/internet-network-technology-background_1017-27428.jpg')] bg-cover bg-center text-black/95 p-5 rounded-xl h-40 mt-1 flex mb-6 relative">
        <div className="w-1/2 ml-auto relative -mt-2">
          <h1 className="text-3xl w-full font-bold leading-tight tracking-wide text-gray-800">
            Master Your Exams with Smart Precision
          </h1>
          <p className="font-medium w-full tracking-wide leading-6 text-sky-600 mt-2">
            Track your progress, manage study materials, and harness AI insights
            — all in one streamlined dashboard.
          </p>
        </div>
        <h2 className="flex absolute items-center px-2 py-1 -ml-1 -mt-2 bg-white text-black w-fit rounded-lg">
          <span className="font-medium">Parallel Computing</span>
          {/* icon */}
          <RiArrowRightSLine className="text-2xl" />
          <span>Chapters</span>
        </h2>
      </div>

      {/* here starts the actual Chapters container */}
      <div>
        {/* header Section here */}
        <section className="flex items-center px-8 justify-between w-full">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-5">
              {/* button to go back */}
              <Link
                to={"/exam-preparation"}
                className="text-black/90 cursor-pointer bg-white hover:bg-white/90 duration-100 p-[7px] px-2 rounded-md flex items-center gap-2"
              >
                <FaChevronLeft className="text-gray-800 hover:text-black duration-100" />
                <span className="text-sm">Back</span>
              </Link>
              <div className="flex items-center cursor-pointer hover:bg-[#1C1C1E]/80 duration-200 gap-2 bg-[#1C1C1E] p-2 rounded-md border-[1px] border-[#2C2C2C] w-fit group">
                <input
                  type="text"
                  placeholder="Search Chapters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none w-52 text-[#F0F0F0] placeholder:text-[#F0F0F0]/50"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="rounded-md cursor-pointer bg-white group px-2 py-[6px] flex items-center gap-3">
                <SiWikibooks className="text-xl group-hover:text-black text-black/80" />
                <span className="text-lg font-medium text-black">
                  {dummyChapters.length}
                </span>
              </span>
              <span className="bg-white group px-[12px] py-[11px] rounded-md cursor-pointer">
                <IoFilterOutline className="text-xl group-hover:text-black text-black/80" />
              </span>
            </div>
          </div>
        </section>

        {/* Cards section start from here */}
        <section className="w-full grid grid-cols-3 mt-6 gap-4 mb-8 px-8">
          {/* Create Chapter Card */}
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
                Create and organize a new chapter with custom details to enhance
                your study flow.
              </p>
            </div>

            {/* Button for create new Chapter */}
            <button className="bg-white hover:bg-white/95 duration-200 gap-3 py-[6px] mt-12 flex items-center justify-center rounded-md w-full">
              <IoMdAdd className="text-black text-xl" />
              <span className="text-black">Add new Chapter</span>
            </button>
          </div>

          {/* Loop through the already created cards */}
          {dummyChapters.map((one) => (
            <ChaptersCard key={one.id} {...one} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Chapters;
