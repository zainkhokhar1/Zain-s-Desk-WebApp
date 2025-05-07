import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const DecorationCard = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/internet-network-technology-background_1017-27428.jpg')] bg-cover bg-center text-black/95 p-5 rounded-xl h-40 mt-1 flex mb-4 relative">
      <div className="w-1/2 ml-auto relative -mt-2">
        <h1 className="text-3xl w-full font-bold leading-tight tracking-wide text-gray-800">
          Master Your Exams with Smart Precision
        </h1>
        <p className="font-medium w-full tracking-wide leading-6 text-sky-600 mt-2">
          Track your progress, manage study materials, and harness AI insights —
          all in one streamlined dashboard.
        </p>
      </div>
      <h2 className="flex absolute items-center px-2 py-1 -ml-1 -mt-2 bg-white text-black w-fit rounded-lg">
        <span className="font-medium">Parallel Computing</span>
        {/* icon */}
        <RiArrowRightSLine className="text-2xl" />
        <span>Chapters</span>
      </h2>
    </div>
  );
};

export default DecorationCard;
