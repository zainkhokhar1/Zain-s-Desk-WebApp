import React from "react";
import ExamCard from "./ExamCard";

const BooksContainer = ({
  filteredSubjects,
  isEditOpen,
  setIsEditOpen,
  isDeletePopupOpen,
  setIsDeletePopupOpen,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4">
      {filteredSubjects.map((subject) => (
        <ExamCard
          key={subject.id}
          {...subject}
          isEditOpen={isEditOpen}
          setIsEditOpen={setIsEditOpen}
          isDeletePopupOpen={isDeletePopupOpen}
          setIsDeletePopupOpen={setIsDeletePopupOpen}
        />
      ))}
    </div>
  );
};

export default BooksContainer;
