import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FileUploader } from "react-drag-drop-files";

const AddNotes = ({ isOpen, onClose }) => {
  const [notesFiles, setNotesFiles] = useState([]);

  const fileTypes = ["JPG", "PNG", "JPEG"];

  const handleNotesDrop = (file) => {
    setNotesFiles((prev) => [...prev, file]);
  };

  const handleSave = () => {
    // Handle saving notes logic here
    console.log("Notes Saved:", { notesFiles });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`rounded-lg ${
          notesFiles.length === 0 ? "h-fit" : "max-h-[600px] overflow-y-auto"
        } w-7/12 bg-[#09090B]/40 backdrop-blur-xl custom-scrollbar text-white p-5 border-2 border-white/10 shadow-lg shadow-white/5 relative`}
      >
        {/* Close Button */}
        <div className="absolute right-3 top-3" onClick={onClose}>
          <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
        </div>

        {/* Header */}
        <h1 className="text-xl font-semibold pb-1">Add Notes</h1>
        <p className="text-xs font-normal text-white/80">
          Fill note title and upload your notes
        </p>

        {/* Form */}
        <div className="flex flex-col gap-3 mt-4">
          {/* Notes Upload (Drag & Drop or Select) */}
          <label className="font-medium text-md">
            Upload Notes for Chapter 1
          </label>
          <div
            style={{
              border: "2px dashed rgba(255, 255, 255, 0.1)",
              backgroundColor: "transparent",
              borderRadius: "8px",
              padding: "24px",
              textAlign: "center",
              transition: "background-color 0.2s",
              cursor: "pointer",
              height: "100px",
              width: "100%",
            }}
          >
            <FileUploader
              style={{
                width: "100%",
                height: "100%",
              }}
              handleChange={handleNotesDrop}
              type={fileTypes}
              name="file"
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="text-white/70 text-sm">Drag & drop files here</p>
              <p className="text-white/50 text-xs mt-1">or</p>
              <p className="text-white/70 text-sm mt-1">Upload Notes</p>
            </FileUploader>
          </div>

          {notesFiles.length > 0 && (
            <ul className="text-sm mt-2 list-disc list-inside text-white/80">
              {notesFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full h-10 mt-3 rounded-lg p-2 bg-white hover:bg-white/90 text-black"
          >
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
