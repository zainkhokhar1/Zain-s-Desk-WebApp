import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  MdOutlineKeyboardArrowLeft,
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
import { FaCheckCircle, FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import dummyChapters from "../../data";
import ChaptersCard from "../../components/exam-preparation/ChaptersCard";

// Add this dummy data near your other const declarations at the top
const dummyContent = {
  extractedText: `
    Chapter 1: Introduction to Computer Science
    
    Key Points:
    • Definition of Computer Science
    • Basic computer architecture
    • Introduction to programming concepts
    • History of computing
    
    Notes:
    Computer Science is the study of computers and computational systems...
  `,
  enhancedNotes: [
    {
      title: "Expanded Concepts",
      content:
        "Computer Science encompasses both theoretical and practical aspects of computation...",
    },
    {
      title: "Key Terminology",
      content:
        "Algorithm: A step-by-step procedure for calculations\nData Structure: A format for organizing and storing data",
    },
    {
      title: "Additional Resources",
      content:
        "Consider exploring: Data Structures, Algorithms, Programming Languages",
    },
  ],
  youtubeSuggestions: [
    {
      title: "Introduction to Computer Science - Harvard CS50",
      channel: "CS50",
      duration: "2:15:30",
      thumbnail: "https://img.youtube.com/vi/8mAITcNt710/0.jpg",
    },
    {
      title: "Introduction to Computer Science - Harvard CS50",
      channel: "CS50",
      duration: "2:15:30",
      thumbnail: "https://img.youtube.com/vi/8mAITcNt710/0.jpg",
    },
    {
      title: "Introduction to Computer Science - Harvard CS50",
      channel: "CS50",
      duration: "2:15:30",
      thumbnail: "https://img.youtube.com/vi/8mAITcNt710/0.jpg",
    },
    {
      title: "Introduction to Computer Science - Harvard CS50",
      channel: "CS50",
      duration: "2:15:30",
      thumbnail: "https://img.youtube.com/vi/8mAITcNt710/0.jpg",
    },
    {
      title: "How Computers Work: What Makes a Computer, a Computer?",
      channel: "Code.org",
      duration: "1:15:20",
      thumbnail: "https://img.youtube.com/vi/mCq8-xTH7jA/0.jpg",
    },
    {
      title: "Basics of Programming - Complete Tutorial",
      channel: "freeCodeCamp.org",
      duration: "45:30",
      thumbnail: "https://img.youtube.com/vi/zOjov-2OZ0E/0.jpg",
    },
  ],
};

// 3 next chapters to show on the container
const nextChapters = dummyChapters.slice(1, 4);

const SingleChapterPreview = () => {
  const galleryRef = useRef(null);
  // id of the current opened image
  const [currentIndex, setCurrentIndex] = useState(0);
  // making images fack data
  const imageData = [
    { id: 1, imageUrl: "https://i.redd.it/q5uidlp6u6j61.jpg" },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrW0oJN7DU26KYMAyWdHuJ5-EU6RxGCfd8M-6-5JIlBhic6oWOg9ZJvvPyvL7ecgvCn9g&usqp=CAU",
    },
    {
      id: 3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTruXsr7QSmESYNjOJ6J66YPRr51Yrej_trlBk0zd2LRbWfMvBXuUUwHmAjUKYJR0SbX4&usqp=CAU",
    },
    {
      id: 4,
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/288373191/original/b1b4aeff9caf88290621ee4cdfc70fd5c1f962b4/create-handwritten-note-letters-cards-and-assignments-in-beautiful-handwriting.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMcVQceImwZ8JYf8aNQBJCCuASDZFXlJ-fc6LTmnqUO_quWrZ-42OBP7ekXo68RMSudk&usqp=CAU",
    },
    {
      id: 6,
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287258513/original/4a6921c67e19052fa76bde6bf8c30769e112cf3c/write-any-thing-for-you-in-my-beautiful-handwriting.jpeg",
    },
    {
      id: 7,
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/338611016/original/d21a443439ca9bec60f609a70e61e47c90c21fce/do-handwriting-notes-and-letters.jpg",
    },
    {
      id: 8,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeGn_IY1Lrm-3IovpVCP63AU-6AsF9Oo-ZQ3BG8bwPOrrbrdBH9_HOzvMildoNAqmmQA&usqp=CAU",
    },
    {
      id: 9,
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/336620685/original/d02ae2d8d619c504fb37c377b69e240d8559fd7a/do-handwriting-notes-and-letters.jpg",
    },
    {
      id: 10,
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/286057779/original/e35b2ccf543b350b95a12a4c81b4c0a8708a1f31/do-handwriting-notes-and-letters.jpg",
    },
  ];

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

  // console.log(imageStats);

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

  return (
    <div className="ml-82 mr-3 min-h-screen">
      <Navbar />

      {/* Main container */}
      <div className="min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to={"/exam-preparation/chapters"}
              className="text-black/90 cursor-pointer bg-white hover:bg-white/90 duration-100 p-[4px] px-[7px] rounded-md flex items-center"
            >
              <MdOutlineKeyboardArrowLeft className="text-2xl" />
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
                title="Edit Chapter"
                className="py-2 px-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white duration-100 flex items-center gap-1"
              >
                <MdEdit className="text-xl" />
                <span className="text-sm">Edit</span>
              </button>
              <button
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
          <div className="bg-white/10 col-span-8 h-[520px] overflow-y-auto custom-scrollbar p-3 mt-1 rounded-xl">
            {/* Tabs Header */}
            <div className="flex gap-1 mb-4 bg-black/20 p-1 rounded-lg w-fit">
              {[
                "Extracted Text",
                "Enhanced AI Notes",
                "YouTube Suggestions",
              ].map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg cursor-pointer duration-100 ${
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
            <div className="mt-4 custom-scrollbar overflow-y-auto max-h-[500px]">
              {activeTab === "Extracted Text" && (
                <div className="prose prose-invert max-w-none">
                  <p className="whitespace-pre-wrap text-white/90">
                    {dummyContent.extractedText}
                  </p>
                </div>
              )}

              {activeTab === "Enhanced AI Notes" && (
                <div className="space-y-4">
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
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 duration-200 cursor-pointer"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-26 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="font-medium text-white line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="flex justify-between text-white/60 text-sm mt-2">
                          <span>{video.channel}</span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </div>
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
    </div>
  );
};

export default SingleChapterPreview;
