import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import { subj_PageData } from "../../data";
import examImage from "../../../public/10473220-removebg-preview.png";
import createNewBookContext from "../../context/CreateNewBook";
import CreateBookPopup from "../../components/exam-preparation/Home/AddNewBookPopup";
import EditBookPopup from "../../components/exam-preparation/Home/EditBookPopup";
import DeletionPopup from "../../components/exam-preparation/common/DeletionPopup.jsx";
import Header from "../../components/exam-preparation/Home/Header.jsx";
import BooksContainer from "../../components/exam-preparation/Home/BooksContainer.jsx";
import DecorationCard from "../../components/exam-preparation/Home/DecorationCard.jsx";

const ExamPreparation = () => {
  // state to show the edit chapter popup
  const [isEditOpen, setIsEditOpen] = useState(false);
  // State for showing the deletion popup
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  // Fetching context
  const [createNewBook, setCreateNewBook] = useContext(createNewBookContext);
  const [selectedFilter, setSelectedFilter] = useState("All Subjects");
  const [searchQuery, setSearchQuery] = useState("");
  // state to store the updated details of the chapter
  const [chapterDetails, setChapterDetails] = useState({
    name: "Chapter 1",
    image:
      "https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?t=st=1746602002~exp=1746605602~hmac=bfbc286ed115f8078cf3545ee4b43913171b091b164c0ca13843665edcd08929&w=740",
    priority: "Important",
    status: "Pending",
  });

  const filterOptions = ["All Subjects","Mids","Finals","Important","Completed",];

  // Filter subjects based on selected filter and search query
  const filteredSubjects = subj_PageData.filter((subject) => {
    const matchesFilter =
      selectedFilter === "All Subjects" ||
      subject.type === selectedFilter ||
      subject.status === selectedFilter ||
      subject.priority === selectedFilter;

    const matchesSearch = subject.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Function to handle the chapter deletion
  const handleChapterDeletion = () => {
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };

  return (
    <div className="ml-82 mr-3 min-h-screen">
      <Navbar />
      {/* Styling card to show on the top for beauty */}
      <DecorationCard examImage={examImage} />
      {/* starting the main container */}
      <div className="w-full overflow-hidden">
        {/* Header */}
        <Header
          filterOptions={filterOptions}
          setSearchQuery={setSearchQuery}
          createNewBook={createNewBook}
          setCreateNewBook={setCreateNewBook}
          searchQuery={searchQuery}
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
        {/* Grid of cards */}
        <BooksContainer
          filteredSubjects={filteredSubjects}
          isEditOpen={isEditOpen}
          setIsEditOpen={setIsEditOpen}
          isDeletePopupOpen={isDeletePopupOpen}
          setIsDeletePopupOpen={setIsDeletePopupOpen}
        />
      </div>
      {/* add new book component to show when clicked */}
      <CreateBookPopup />
      {/* show edit options when clicked */}
      <EditBookPopup
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        chapterDetails={chapterDetails}
        setChapterDetails={setChapterDetails}
      />
      {/* show delete options when clicked */}
      <DeletionPopup
        isOpen={isDeletePopupOpen}
        onClose={() => {
          setIsDeletePopupOpen(!isDeletePopupOpen);
        }}
        onDelete={handleChapterDeletion}
        itemName={"Operating System " + "Book"}
      />

      {/* overlay to show when the createBook is opened */}
      {(createNewBook || isEditOpen || isDeletePopupOpen) && (
        <div className="fixed h-screen w-screen inset-0 bg-black/60 z-10"></div>
      )}
    </div>
  );
};

export default ExamPreparation;
