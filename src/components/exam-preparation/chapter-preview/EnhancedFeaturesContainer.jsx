import React from "react";
import YoutubeCard from "../YoutubeCard";

const EnhancedFeaturesContainer = ({
  activeTab,
  setActiveTab,
  dummyContent,
}) => {
  return (
    <div className="bg-white/10 col-span-8 relative overflow-y-auto custom-scrollbar p-3 mt-1 rounded-xl">
      {/* Tabs Header */}
      <div className="flex absolute top-3 w-fit text-nowrap left-1/2 transform -translate-x-1/2 gap-2 mx-auto border border-white/40 mb-4 bg-black/20 p-[2px] rounded-lg">
        {["Extracted Text", "Enhanced AI Notes", "YouTube Suggestions"].map(
          (tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 rounded-lg cursor-pointer duration-100 ${
                activeTab === tab
                  ? "bg-white text-black/90"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab}
            </div>
          )
        )}
      </div>

      {/* Content based on active tab */}
      <div className="custom-scrollbar mt-14 overflow-y-auto">
        {activeTab === "Extracted Text" && (
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-wrap text-white/90">
              {dummyContent.extractedText}
            </p>
          </div>
        )}

        {activeTab === "Enhanced AI Notes" && (
          <div className="space-y-2 mt-3">
            {dummyContent.enhancedNotes.map((note, index) => (
              <div
                key={index}
                className="bg-white/5 p-4 rounded-lg border border-white/10"
              >
                <h3 className="text-lg font-medium mb-2 text-white">
                  {note.title}
                </h3>
                <p className="text-white/80 whitespace-pre-line">
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "YouTube Suggestions" && (
          <div className="grid grid-cols-3 px-3 mt-2 gap-3">
            {dummyContent.youtubeSuggestions.map((video, index) => (
              <YoutubeCard key={index} {...video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedFeaturesContainer;
