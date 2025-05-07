import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import dummyChapters from "../../data";
import DecorationCard from "../../components/exam-preparation/chapters-page/DecorationCard.jsx";
import Header from "../../components/exam-preparation/chapters-page/Header.jsx";
import AddNewChapterCard from "../../components/exam-preparation/chapters-page/AddNewChapterCard.jsx";
import CardsContainer from "../../components/exam-preparation/chapters-page/CardsContainer.jsx";

const Chapters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen ml-82 mr-3">
      <Navbar />
      {/* Styling card to show on the top for beauty */}
      <DecorationCard />
      {/* here starts the actual Chapters container */}
      <div>
        {/* header Section here */}
        <Header
          dummyChapters={dummyChapters}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Cards section start from here */}
        <section className="w-full grid grid-cols-3 mt-3 gap-4 mb-8 px-8">
          {/* Create New Chapter Card */}
          <AddNewChapterCard />
          {/* Already created cards */}
          <CardsContainer dummyChapters={dummyChapters} />
        </section>
      </div>
      
    </div>
  );
};

export default Chapters;
