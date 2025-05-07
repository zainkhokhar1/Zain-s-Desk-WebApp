import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { SiWikibooks } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = ({ dummyChapters, searchQuery, setSearchQuery }) => {
  return (
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
  );
};

export default Header;
