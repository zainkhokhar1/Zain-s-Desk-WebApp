import React, { useState } from "react";
import SubjectCard from "./SubjectCard";
import { subjectCardData } from "../../data";
import ScrollContainer from "react-indiana-drag-scroll";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";

const ExamPrepration = () => {
  const [options, setOptions] = useState(1);

  // Filter subjects based on selected option
  const filteredSubjects = subjectCardData.filter((subject) => {
    if (options === 1) return true; // All Subjects
    if (options === 2) return subject.status === "Bookmarked"; // Bookmarked
    if (options === 3) return subject.status === "Completed"; // Completed
    return true;
  });

  return (
    <div className="size-full col-span-4 h-[400px]">
      <div className="bg-[#1C1C1C] rounded-xl border-white/5 border h-full p-2">
        {/* header */}
        <div className="flex flex-row items-start justify-between w-full h-fit">
          <h1 className="text-xl pt-1 font-semibold relative left-3">
            Exam Preparation
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-[5px] bg-[#2D2D2D] rounded-full">
              <span
                onClick={() => setOptions(1)}
                className={`font-medium ${
                  options == 1
                    ? "bg-white text-black/80"
                    : "bg-transparent hover:bg-white/5"
                } rounded-full cursor-pointer duration-200 border border-[#2C2C2C]/20 px-2 text-sm py-[1px]`}
              >
                All Subjects
              </span>
              <span
                onClick={() => setOptions(2)}
                className={`font-medium ${
                  options == 2
                    ? "bg-white text-black/80"
                    : "bg-transparent hover:bg-white/5 hover:text-[#FEFEFE]"
                } cursor-pointer duration-200 border border-[#2C2C2C]/20 px-2 text-sm py-[1px] rounded-full `}
              >
                BookMarked
              </span>
              <span
                onClick={() => setOptions(3)}
                className={`font-medium ${
                  options == 3
                    ? "bg-white text-black/80"
                    : "bg-transparent hover:bg-white/5 hover:text-[#FEFEFE]"
                } cursor-pointer duration-200 border border-[#2C2C2C]/20 px-2 text-sm py-[1px] rounded-full `}
              >
                Completed
              </span>
            </div>
            {/* search button */}
            <span className="p-1 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 duration-200">
              <IoSearchOutline className="text-xl text-white/70 group-hover:text-white duration-100" />
            </span>
            {/* add button */}
            <span className="p-1 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 duration-200">
              <IoAddOutline className="text-xl text-white/70 group-hover:text-white duration-100" />
            </span>
          </div>
        </div>

        {/* cards container */}
        <ScrollContainer className="flex flex-row gap-3 mt-4">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default ExamPrepration;
