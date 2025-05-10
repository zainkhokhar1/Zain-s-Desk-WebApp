import React, { useContext, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ChapterCreateContext from "../../../context/CreateChapterContext.jsx";
import { FileUploader } from "react-drag-drop-files";

const CreateChapterPopup = () => {
  const [createChapter, setCreateChapter] = useContext(ChapterCreateContext);

  const [chapterName, setChapterName] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);

  const fileTypes = ["JPG", "PNG", "JPEG"];

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  const handleMediaDrop = (file) => {
    setMediaFiles((prev) => [...prev, file]);
  };

  const handleClose = () => {
    setCreateChapter(false);
  };

  const handleSave = () => {
    // Handle actual saving later
    handleClose();
  };

  if (!createChapter) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`rounded-lg  ${
          mediaFiles.length == 0 && coverImage == null
            ? "h-fit"
            : "max-h-[600px] overflow-y-auto top-2"
        } w-7/12 bg-[#09090B]/40 backdrop-blur-xl custom-scrollbar text-white p-5 border-2 border-white/10 shadow-lg shadow-white/5 relative overflow-y-auto`}
      >
        {/* Close Button */}
        <div className="absolute right-3 top-3" onClick={handleClose}>
          <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
        </div>

        {/* Header */}
        <h1 className="text-xl font-semibold pb-1">Create Chapter</h1>
        <p className="text-xs font-normal text-white/80">
          Fill chapter name, add cover image and media content
        </p>

        {/* Form */}
        <div className="flex flex-col gap-3 mt-4">
          {/* Chapter Name */}
          <label className="font-medium text-md">Chapter Name</label>
          <input
            type="text"
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
            placeholder="Enter chapter name"
            className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 text-white"
          />

          {/* Cover Image */}
          <label className="font-medium text-md">Cover Image (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
            className="bg-transparent outline-none border-dotted border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200"
          />
          {coverImage && (
            <img
              src={coverImage}
              alt="Cover Preview"
              className="w-full h-42 object-cover rounded-lg border border-white/10"
            />
          )}

          {/* Media Upload (Drag & Drop or Select) */}
          <label className="font-medium text-md">Upload Media</label>
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
              handleChange={handleMediaDrop}
              type={fileTypes}
              name="file"
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="text-white/70 text-sm">Drag & drop files here</p>
              <p className="text-white/50 text-xs mt-1">or</p>
              <p className="text-white/70 text-sm mt-1">Upload Image</p>
            </FileUploader>
          </div>

          {mediaFiles.length > 0 && (
            <ul className="text-sm mt-2 list-disc list-inside text-white/80">
              {mediaFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full h-10 mt-3 rounded-lg p-2 bg-white hover:bg-white/90 text-black"
          >
            Save Chapter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChapterPopup;
