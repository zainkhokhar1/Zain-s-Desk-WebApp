import React from "react";
import ChaptersCard from "./ChaptersCard";

const CardsContainer = ({dummyChapters}) => {
  return (
    <>
      {dummyChapters.map((one) => (
        <ChaptersCard key={one.id} {...one} />
      ))}
    </>
  );
};

export default CardsContainer;
