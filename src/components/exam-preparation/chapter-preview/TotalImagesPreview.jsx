import React from "react";

const TotalImagesPreview = ({
  imageData,
  currentIndex,
  handleThumbnailClick,
}) => {
  return (
    <div className="col-span-2 w-[97%] ml-1 text-center h-[478px] custom-scrollbar overflow-y-auto pt-3 bg-white/10 p-2 mt-8 rounded-xl">
      <div className="flex flex-col gap-3 h-full">
        {imageData.map((img, index) => (
          <div
            key={index}
            className={`h-28 w-[130px] mx-auto cursor-pointer ${
              index === currentIndex ? "opacity-100" : "opacity-40"
            } hover:opacity-100 duration-200`}
          >
            <img
              src={img.imageUrl}
              className="rounded-xl h-full w-full object-cover"
              onClick={() => {
                handleThumbnailClick(index);
              }}
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalImagesPreview;
