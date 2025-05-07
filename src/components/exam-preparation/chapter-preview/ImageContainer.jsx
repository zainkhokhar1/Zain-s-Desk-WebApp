import React from "react";
import ImageGallery from "react-image-gallery";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiFullscreen } from "react-icons/bi";
import { RxExitFullScreen } from "react-icons/rx";
import SingleImageContainer from "./SingleImageContainer";
import { MdDelete } from "react-icons/md";
import { FaBookmark, FaCheckCircle, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { VscBookmark } from "react-icons/vsc";

const MainImageContainer = ({
  galleryRef,
  galleryItems,
  currentIndex,
  setCurrentIndex,
  isFullScreen,
  setIsFullScreen,
  getCurrentImageId,
  updateImageStats,
  imageStats,
  openedImage,
  totalLength,
  setIsDeletingImage,
  isDeletingImage,
  handleDeleteImage,
}) => {
  // Left navigation button
  const LeftNav = ({ onClick, disabled }) => (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav opacity-40 hover:opacity-100 duration-100"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous Slide"
    >
      <SlArrowLeft className="text-2xl text-white" />
    </button>
  );

  // Right navigation button
  const RightNav = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-40 hover:opacity-100 duration-100"
    >
      <SlArrowRight className="text-white text-2xl" />
    </div>
  );

  // Fullscreen button
  const CustomFullscreenButton = ({ onClick, isFullscreen }) => (
    <button
      onClick={onClick}
      className="absolute right-0 bottom-2 text-white cursor-pointer bg-none p-3 text-2xl opacity-40 duration-100 hover:opacity-100"
      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
    >
      {isFullscreen ? (
        <RxExitFullScreen className="!text-3xl" />
      ) : (
        <BiFullscreen />
      )}
    </button>
  );

  return (
    <div
      className={`col-span-10 ${
        isFullScreen ? "h-screen w-screen" : "h-[479px] w-full"
      } overflow-hidden mt-8 bg-transparent border border-white/10 rounded-xl relative`}
    >
      <ImageGallery
        ref={galleryRef}
        renderItem={(item) => (
          <SingleImageContainer img={item.original} isFullScreen={isFullScreen} />
        )}
        onSlide={(currentIndex) => {
          setCurrentIndex(currentIndex);
          const currentId = getCurrentImageId();
          const currentStats = imageStats[currentId];
        }}
        items={galleryItems}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={false}
        infinite={false}
        renderLeftNav={(onClick, disabled) => (
          <LeftNav onClick={onClick} disabled={disabled} />
        )}
        renderRightNav={(onClick, disabled) => <RightNav onClick={onClick} />}
        slideDuration={350}
        onScreenChange={() => {
          setIsFullScreen(!isFullScreen);
        }}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <CustomFullscreenButton
            onClick={onClick}
            isFullscreen={isFullscreen}
          />
        )}
      />

      {/* show all the options to bookmark, save, important,delete and the number of image displaying from the total etc */}

      <span
        onClick={() => {
          const currentId = getCurrentImageId();
          updateImageStats(currentId, "bookmarked");
        }}
        className={`absolute right-4 top-4 text-[20px] cursor-pointer hover:opacity-100 duration-100`}
      >
        {openedImage?.bookmarked ? (
          <FaBookmark className="!opacity-90 text-cyan-400/90" />
        ) : (
          <VscBookmark className="opacity-50 text-[24px]" />
        )}
      </span>
      {/*  only when the user clicks it as done */}
      <div
        onClick={() => {
          const currentId = getCurrentImageId();
          updateImageStats(currentId, "markedAsDone");
        }}
        className={`absolute top-[12px] right-13 ${
          openedImage?.markedAsDone ? "text-green-400" : "opacity-40"
        } bg-black/30 hover:opacity-90 cursor-pointer duration-100 backdrop-blur-sm p-1 rounded-full`}
      >
        <FaCheckCircle className="text-xl" />
      </div>

      <div
        onClick={() => {
          const currentId = getCurrentImageId();
          updateImageStats(currentId, "important");
        }}
        className={`absolute top-[12px] left-4 ${
          openedImage?.important ? "text-red-400" : "opacity-40"
        } flex items-center justify-center bg-black/30 hover:opacity-90 cursor-pointer duration-100 backdrop-blur-sm p-1 rounded-full`}
      >
        {openedImage?.important ? (
          <FaHeart className="!opacity-90 text-red-600 text-[22px]" />
        ) : (
          <CiHeart className="opacity-100 text-[24px]" />
        )}
      </div>

      {/* Add this after the heart icon div */}
      <div
        onClick={() => {
          setIsDeletingImage(!isDeletingImage);
        }}
        className="absolute top-[15px] left-15 flex items-center justify-center bg-black/30 hover:opacity-90 cursor-pointer duration-100 backdrop-blur-sm p-1 rounded-full opacity-40 hover:text-red-400"
      >
        <MdDelete className="text-xl" />
      </div>

      {/* span to show the total images and the current opened image out of it  */}
      <span className="absolute top-[8px] left-1/2 transform -translate-x-1/2 text-sm opacity-90 p-[2px] font-medium bg-white/30 rounded-md duration-100 text-black/80">
        {currentIndex + 1} / {totalLength}
      </span>
    </div>
  );
};

export default MainImageContainer;
