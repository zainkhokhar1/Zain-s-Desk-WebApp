import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/exam-preparation/chapter-preview/Header";
import "react-image-gallery/styles/css/image-gallery.css";
import dummyChapters from "../../data";
import { dummyContent } from "../../data";
import { imageData } from "../../data";
import EditChapterPopup from "../../components/exam-preparation/chapter-preview/EditChapterPopup.jsx";
import DeletionPopup from "../../components/exam-preparation/common/DeletionPopup.jsx";
import MainImageContainer from "../../components/exam-preparation/chapter-preview/ImageContainer.jsx";
import TotalImagesPreview from "../../components/exam-preparation/chapter-preview/TotalImagesPreview";
import EnhancedFeaturesContainer from "../../components/exam-preparation/chapter-preview/EnhancedFeaturesContainer";
import NextChapters from "../../components/exam-preparation/chapter-preview/NextChapters.jsx";

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
    // Add 1 since our IDs start from 1
    return imageData[currentIndex]?.id || 1;
  };

  const galleryItems = imageData.map((img) => ({
    original: img.imageUrl,
    thumbnail: img.imageUrl, // Optional but recommended
  }));

  let openedImage;

  if (imageStats) {
    openedImage = imageStats[currentIndex + 1];
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
        <Header
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          filterOptions={filterOptions}
          isDone={isDone}
          setIsDone={setIsDone}
          isImportant={isImportant}
          setIsImportant={setIsImportant}
          isBookmarked={isBookmarked}
          setIsBookmarked={setIsBookmarked}
          setIsEditPopupOpen={setIsEditPopupOpen}
          setIsDeletePopupOpen={setIsDeletePopupOpen}
        />

        {/* container with grid to show the content after header */}
        <div className="grid grid-cols-12 w-full gap-2">
          {/* container to show the image container with options and to show the tabs and the details options of the image in the down section */}
          <MainImageContainer
            galleryRef={galleryRef}
            galleryItems={galleryItems}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
            getCurrentImageId={getCurrentImageId}
            updateImageStats={updateImageStats}
            imageStats={imageStats}
            openedImage={openedImage}
            totalLength={imageData.length}
            setIsDeletingImage={setIsDeletingImage}
            handleDeleteImage={handleDeleteImage}
            isDeletingImage={isDeletingImage}
          />

          {/* container the images in vertical */}
          <TotalImagesPreview
            imageData={imageData}
            currentIndex={currentIndex}
            handleThumbnailClick={handleThumbnailClick}
          />

          {/* container to show the extracted content, AI enhanced content and the youtube suggestions */}
          <div className="bg-white/10 col-span-8 relative h-[520px] overflow-y-auto custom-scrollbar p-3 mt-1 rounded-xl">
            {/* Tabs Header */}

            <div className="z-20 sticky top-0 w-fit flex items-center gap-2 mx-auto bg-black/70 justify-center p-1 rounded-xl">
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

            <EnhancedFeaturesContainer
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              dummyContent={dummyContent}
            />
          </div>

          {/* container to show some next 4 chapters that may user want to see */}
          <NextChapters nextChapters={nextChapters} />
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
        isImageOpen={isDeletingImage}
        onClose={() => {
          setIsDeletePopupOpen(false);
          setIsDeletingImage(false);
        }}
        onDelete={handleDeleteChapter}
        onImageDelete={handleDeleteImage}
        itemName={isDeletingImage ? "Image 1" : "Chapter 1"}
      />

      {/* layer to show on the background where the popup is opened */}
      {(isEditPopupOpen || isDeletePopupOpen || isDeletingImage) && (
        <div className="bg-black/60 z-20 fixed inset-0 h-screen w-screen"></div>
      )}
    </div>
  );
};

export default SingleChapterPreview;
