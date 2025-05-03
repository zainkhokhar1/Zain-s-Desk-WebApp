import React from "react";

const ImageContainer = ({
  img = "https://a4agriculture.in/wp-content/uploads/2024/01/Handwritten-2-short-notes-by-ashish-ramteke_page_1.webp",
}) => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <img
        src={img}
        alt="img"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
};

export default ImageContainer;
