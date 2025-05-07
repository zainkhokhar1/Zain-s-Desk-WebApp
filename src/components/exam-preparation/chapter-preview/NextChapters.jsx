import React from "react";
import ChaptersCard from "../chapters-page/ChaptersCard";

const NextChapters = ({ nextChapters }) => {
  return (
    <div className="col-span-4 p-4 py-4 space-y-3 h-[520px] overflow-y-auto custom-scrollbar rounded-xl bg-white/10 mt-1">
      <h2 className="text-xl font-medium text-white">Next Chapters</h2>
      {nextChapters.map((oneChapter) => (
        <ChaptersCard key={oneChapter.id} {...oneChapter} />
      ))}
    </div>
  );
};

export default NextChapters;
