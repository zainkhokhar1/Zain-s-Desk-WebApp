import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

const EditBookPopup = ({ isEditOpen, setIsEditOpen,chapterDetails,setChapterDetails }) => {
  const [chapterName, setChapterName] = useState("");
  const [chapterImage, setChapterImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [status, setStatus] = useState("Pending");

  // Dropdown states
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  // Load old details into the state when the component opens
  useEffect(() => {
    if (chapterDetails) {
      setChapterName(chapterDetails.name || "");
      setPreviewImage(chapterDetails.image || "");
      setPriority(chapterDetails.priority || "Normal");
      setStatus(chapterDetails.status || "Pending");
    }
  }, [chapterDetails]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChapterImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedChapterData = {
      name: chapterName,
      image: chapterImage,
      priority,
      status,
    };
    setChapterDetails(updatedChapterData);
    setIsEditOpen(!isEditOpen);
  };

  if (!isEditOpen) return null;

  return (
    <div
      className={`rounded-lg size-[700px] fixed left-[390px] ${
        previewImage ? "top-5" : "top-20"
      } h-fit max-h-11/12 overflow-y-auto custom-scrollbar bg-[#09090B]/40 backdrop-blur-xl text-white p-4 text-start border-2 border-white/10 py-5 z-40 shadow-lg shadow-white/5`}
    >
      {/* Close Button */}
      <div
        className="absolute right-3 top-3"
        onClick={() => setIsEditOpen(!isEditOpen)}
      >
        <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
      </div>

      {/* Header */}
      <h1 className="text-xl font-semibold pb-1">Edit Chapter</h1>
      <p className="text-xs font-normal text-white/80">
        Update details for the chapter
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-3">
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
              className="w-full h-60 object-cover rounded-lg border border-white/10 mt-1"
            />
          )}

          {/* Dropdowns */}
          <div className="grid grid-cols-6 gap-3">
            {/* Priority Dropdown */}
            <div className="col-span-3">
              <label htmlFor="priority" className="font-medium text-md">
                Priority
              </label>
              <div className="relative">
                <div
                  onClick={() =>
                    setIsPriorityDropdownOpen(!isPriorityDropdownOpen)
                  }
                  className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200 cursor-pointer flex justify-between items-center"
                >
                  <span>{priority}</span>
                  <IoChevronDownOutline
                    className={`text-white/70 transition-transform duration-200 ${
                      isPriorityDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isPriorityDropdownOpen && (
                  <div className="absolute w-full mt-1 bg-[#09090B]/95 backdrop-blur-xl border-2 border-white/10 rounded-lg overflow-hidden z-50">
                    {["Normal", "Medium", "Important"].map((level) => (
                      <div
                        key={level}
                        onClick={() => {
                          setPriority(level);
                          setIsPriorityDropdownOpen(false);
                        }}
                        className={`p-2 cursor-pointer hover:bg-white/5 duration-200 ${
                          priority === level ? "bg-white/10" : ""
                        }`}
                      >
                        {level}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Status Dropdown */}
            <div className="col-span-3">
              <label htmlFor="status" className="font-medium text-md">
                Status
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200 cursor-pointer flex justify-between items-center"
                >
                  <span>{status}</span>
                  <IoChevronDownOutline
                    className={`text-white/70 transition-transform duration-200 ${
                      isStatusDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isStatusDropdownOpen && (
                  <div className="absolute w-full mt-1 bg-[#09090B]/95 backdrop-blur-xl border-2 border-white/10 rounded-lg overflow-hidden z-50">
                    {["Pending", "Remaining", "Completed"].map((state) => (
                      <div
                        key={state}
                        onClick={() => {
                          setStatus(state);
                          setIsStatusDropdownOpen(false);
                        }}
                        className={`p-2 cursor-pointer hover:bg-white/5 duration-200 ${
                          status === state ? "bg-white/10" : ""
                        }`}
                      >
                        {state}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full h-10 rounded-lg p-2 bg-white hover:bg-white/90 text-black mt-3"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookPopup;
