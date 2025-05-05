import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  MdOutlineKeyboardArrowRight,
  MdDone,
  MdStar,
  MdBookmarkBorder,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { Link } from "react-router-dom";
import ImageContainer from "../../components/exam-preparation/ImageContainer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiFullscreen } from "react-icons/bi";
import { RxExitFullScreen } from "react-icons/rx";
import { VscBookmark } from "react-icons/vsc";
import { FaCheckCircle, FaChevronLeft, FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import dummyChapters from "../../data";
import ChaptersCard from "../../components/exam-preparation/ChaptersCard";
import { dummyContent } from "../../data";
import { imageData } from "../../data";
import YoutubeCard from "../../components/exam-preparation/YoutubeCard";
import EditChapterPopup from "../../components/exam-preparation/EditChapterPopup";
import DeletionPopup from "../../components/exam-preparation/DeletionPopup";

// 3 next chapters to show on the container
const nextChapters = dummyChapters.slice(1, 4);

const SingleChapterPreview = () => {
  const galleryRef = useRef(null);
  // id of the current opened image
  const [currentIndex, setCurrentIndex] = useState(0);
  // making images fack data

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isDone, setIsDone] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const filterOptions = ["All", "BookMarked", "Completed"];

  // image when it's full screen
  const [isFullScreen, setIsFullScreen] = useState(false);
  // state to check that the opened image is saved or not
  const [imageStats, setImageStats] = useState({
    // Initialize with stats for each image
    ...Object.fromEntries(
      imageData.map((img) => [
        img.id,
        {
          important: false,
          bookmarked: false,
          markedAsDone: false,
        },
      ])
    ),
  });

  // Add these functions after the state declarations
  const updateImageStats = (imageId, statType) => {
    setImageStats((prev) => ({
      ...prev,
      [imageId]: {
        ...prev[imageId],
        [statType]: !prev[imageId][statType],
      },
    }));
  };

  // Function to get current image ID (add this)
  const getCurrentImageId = () => {
    // Assuming ImageGallery provides current index
    // Add 1 since our IDs start from 1
    return imageData[currentIndex]?.id || 1;
  };

  const galleryItems = imageData.map((img) => ({
    original: img.imageUrl,
    thumbnail: img.imageUrl, // Optional but recommended
  }));

  // left right elements of the container to show
  const LeftNav = ({ onClick, disabled }) => {
    return (
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
  };

  const RightNav = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-40 hover:opacity-100 duration-100"
    >
      <SlArrowRight className="text-white text-2xl" />
    </div>
  );

  // customizing fullscreen button
  const CustomFullscreenButton = ({ onClick, isFullscreen }) => {
    return (
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
  };
  let openedImage;

  if (imageStats) {
    openedImage = imageStats[currentIndex + 1];
    console.log(openedImage);
  }

  const handleThumbnailClick = (index) => {
    if (galleryRef.current) {
      galleryRef.current.slideToIndex(index);
    }
  };

  // starts main content

  const [activeTab, setActiveTab] = useState("Extracted Text");
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isDeletingImage, setIsDeletingImage] = useState(false);

  const handleSaveChapter = (updatedChapter) => {
    // Handle the save logic here
    console.log("Updated chapter:", updatedChapter);
  };

  const handleDeleteChapter = () => {
    // Handle the deletion logic here
    console.log("Deleting chapter");
    setIsDeletePopupOpen(false);
  };

  const handleDeleteImage = () => {
    console.log("Deleting image");
    setIsDeletingImage(false);
  };

  return (
    <div className="ml-82 mr-3 min-h-screen pb-3">
      <Navbar />

      {/* Main container */}
      <div className="min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to={"/exam-preparation/:subject/chapters"}
              className="text-black/90 cursor-pointer bg-white hover:bg-white/90 duration-100 p-[7px] px-2 rounded-md flex items-center gap-2"
            >
              <FaChevronLeft className="text-gray-800 hover:text-black duration-100" />
              <span className="text-sm">Back</span>
            </Link>
            <span className="flex items-center pl-1">
              <MdOutlineKeyboardArrowRight className="text-xl" />
              Chapter 1
            </span>
          </div>
          {/* Filter options */}
          <div className="flex py-[4px] rounded-lg h-fit w-fit px-[4px] border border-white/20 bg-[#1C1C1C] items-center gap-1">
            {filterOptions.map((option) => (
              <div
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`${
                  selectedFilter === option
                    ? "bg-white text-black/95"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                } p-1 rounded-lg px-3 cursor-pointer duration-100`}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Options for the chapter like mark as done, important or bookmarked, delete chapter, edit chapter */}
          <div className="flex items-center bg-[#1C1C1C] border border-white/20 rounded-lg p-1">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsDone(!isDone)}
                title={isDone ? "Mark as Undone" : "Mark as Done"}
                className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-100 flex items-center gap-1
                  ${
                    isDone ? "text-green-400" : "text-white/70 hover:text-white"
                  }`}
              >
                <MdDone className="text-xl" />
                <span className="text-sm">{isDone ? "Undone" : "Done"}</span>
              </button>
              <button
                onClick={() => setIsImportant(!isImportant)}
                title={isImportant ? "Remove Important" : "Mark as Important"}
                className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-100 flex items-center gap-1
                  ${
                    isImportant
                      ? "text-yellow-400"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <MdStar
                  className={`text-xl ${isImportant ? "fill-current" : ""}`}
                />
                <span className="text-sm">Important</span>
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                title={isBookmarked ? "Remove Bookmark" : "Bookmark"}
                className={`py-2 px-1 rounded-lg hover:bg-white/10 duration-100 flex items-center gap-1
                  ${
                    isBookmarked
                      ? "text-blue-400"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <MdBookmarkBorder
                  className={`text-xl ${isBookmarked ? "fill-current" : ""}`}
                />
                <span className="text-sm">
                  {isBookmarked ? "Saved" : "Save"}
                </span>
              </button>
              <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
              <button
                onClick={() => setIsEditPopupOpen(true)}
                title="Edit Chapter"
                className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white duration-100 flex items-center gap-1"
              >
                <MdEdit className="text-xl" />
                <span className="text-sm">Edit</span>
              </button>
              <button
                onClick={() => setIsDeletePopupOpen(true)}
                title="Delete Chapter"
                className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-red-400 duration-100 flex items-center gap-1"
              >
                <MdDelete className="text-xl" />
                <span className="text-sm">Delete</span>
              </button>
            </div>
          </div>
        </header>

        {/* container with grid to show the content after header */}
        <div className="grid grid-cols-12 w-full gap-2">
          {/* container to show the image container with options and to show the tabs and the details options of the image in the down section */}
          <div
            className={`col-span-10 ${
              isFullScreen ? "h-screen w-screen" : "h-[479px] w-full"
            } overflow-hidden mt-8 bg-transparent border border-white/10 rounded-xl relative`}
          >
            {/* <ImageContainer /> */}
            <ImageGallery
              ref={galleryRef}
              renderItem={(item) => (
                <ImageContainer
                  img={item.original}
                  isFullScreen={isFullScreen}
                />
              )}
              onSlide={(currentIndex) => {
                setCurrentIndex(currentIndex);
                // Update current image states based on stored stats
                const currentId = imageData[currentIndex].id;
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
              renderRightNav={(onClick, disabled) => (
                <RightNav onClick={onClick} />
              )}
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
            ></ImageGallery>

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
                <FaHeart className="!opacity-90 text-red-700 text-[22px]" />
              ) : (
                <CiHeart className="opacity-100 text-[24px]" />
              )}
            </div>

            {/* Add this after the heart icon div */}
            <div
              onClick={() => {
                // Add delete functionality here
                console.log(`Deleting image ${getCurrentImageId()}`);
              }}
              className="absolute top-[15px] left-15 flex items-center justify-center bg-black/30 hover:opacity-90 cursor-pointer duration-100 backdrop-blur-sm p-1 rounded-full opacity-40 hover:text-red-400"
            >
              <MdDelete className="text-xl" />
            </div>

            {/* span to show the total images and the current opened image out of it  */}
            <span className="absolute top-[8px] left-1/2 transform -translate-x-1/2 text-sm opacity-90 p-[2px] font-medium bg-white/30 rounded-md duration-100 text-black/80">
              {currentIndex + 1} / {imageData.length}
            </span>

            {/* code for important state updation */}
          </div>

          {/* container the images in vertical */}
          <div className="col-span-2 w-[97%] ml-1 text-center h-[478px] custom-scrollbar overflow-y-auto pt-3 bg-white/10 p-2 mt-8 rounded-xl">
            <div className="flex flex-col gap-3 h-full">
              {imageData.map((img, index) => (
                <div
                  className={`h-28 w-[130px] mx-auto cursor-pointer ${
                    index == currentIndex ? "opacity-100" : "opacity-40"
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

          {/* container to show the extracted content, AI enhanced content and the youtube suggestions */}
          <div className="bg-white/10 col-span-8 relative h-[520px] overflow-y-auto custom-scrollbar p-3 mt-1 rounded-xl">
            {/* Tabs Header */}
            <div className="flex absolute top-3 w-fit text-nowrap left-1/2 transform -translate-x-1/2 gap-2 mx-auto border border-white/40 mb-4 bg-black/20 p-[2px] rounded-lg">
              {[
                "Extracted Text",
                "Enhanced AI Notes",
                "YouTube Suggestions",
              ].map((tab) => (
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
              ))}
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

          {/* container to show some next 4 chapters that may user want to see */}
          <div className="col-span-4 p-4 py-4 space-y-3 h-[520px] overflow-y-auto custom-scrollbar rounded-xl bg-white/10 mt-1">
            <h2 className="text-xl font-medium text-white">Next Chapters</h2>
            {nextChapters.map((oneChapter) => (
              <ChaptersCard key={oneChapter.id} {...oneChapter} />
            ))}
          </div>
        </div>
      </div>
      <EditChapterPopup
        isOpen={isEditPopupOpen}
        onClose={() => setIsEditPopupOpen(false)}
        chapter={{ name: "Chapter 1", image: imageData[currentIndex].imageUrl }}
        onSave={handleSaveChapter}
      />
      <DeletionPopup
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
        onDelete={handleDeleteChapter}
        // Add data accordingly
        itemName={"Chapter 1"}
      />

      {/* layer to show on the background where the popup is opened */}
      {(isEditPopupOpen || isDeletePopupOpen || handleDeleteImage) && (
        <div className="bg-black/60 z-20 fixed inset-0 h-screen w-screen"></div>
      )}
    </div>
  );
};

export default SingleChapterPreview;
