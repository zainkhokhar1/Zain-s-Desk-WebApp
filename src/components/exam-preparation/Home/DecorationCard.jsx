import React from "react";

const DecorationCard = ({ examImage }) => {
  return (
    <div className="bg-[#D4EAF0] text-black/95 p-5 rounded-xl h-52 mt-1 relative flex">
      <div className="w-full">
        <h1 className="text-4xl w-full mt-2 font-semibold leading-12 tracking-wider">
          Smart Exam Preparation Dashboard
        </h1>
        <p className="font-medium w-full tracking-wide leading-6 text-sky-600 mt-3">
          Organize subjects, chapters, notes, and AI-powered study resources in
          one clean, intuitive platform.
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
  );
};

export default DecorationCard;
