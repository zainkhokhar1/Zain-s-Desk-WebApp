import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditChapterPopup = ({ isOpen, onClose, chapter, onSave }) => {
  const [chapterName, setChapterName] = useState(chapter?.name || "");
  const [chapterImage, setChapterImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(chapter?.image || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChapterImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: chapterName, image: chapterImage });
    onClose();
  };

  useEffect(() => {
    setChapterName(chapter?.name || "");
    setPreviewImage(chapter?.image || "");
    setChapterImage(null);
  }, [chapter]);

  if (!chapter) return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="rounded-lg size-96 h-[520px] bg-[#09090B]/40 backdrop-blur-xl text-white p-5 border-2 border-white/10 shadow-lg shadow-white/5 relative">
        {/* Close Button */}
        <div className="absolute right-3 top-3" onClick={onClose}>
          <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
        </div>

        {/* Header */}
        <h1 className="text-xl font-semibold pb-1">Edit Chapter</h1>
        <p className="text-xs font-normal text-white/80">
          Update chapter details and image
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          {/* Chapter Name */}
          <label htmlFor="name" className="font-medium text-md">
            Chapter Name
          </label>
          <input
            type="text"
            id="name"
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
            className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 text-white"
            placeholder="Enter chapter name"
          />

          {/* Chapter Image */}
          <label htmlFor="chapter-image" className="font-medium text-md">
            Chapter Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            id="chapter-image"
            className="bg-transparent outline-none border-dotted border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200"
          />

          {/* Preview Image */}
          {previewImage && (
            <img
              src={previewImage}
              alt="Chapter preview"
              className="w-full h-42 object-cover rounded-lg border border-white/10 mt-1"
            />
          )}

          {/* Save Button */}
          <button
            type="submit"
            className="w-full h-10 rounded-lg p-2 bg-white hover:bg-white/90 text-black mt-1"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditChapterPopup;
