import React, { useContext, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import createNewBookContext from "../../../context/CreateNewBook";

const CreateBookPopup = () => {
  const [bookName, setBookName] = useState("");
  const [bookImage, setBookImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [bookType, setBookType] = useState("Mids");
  const [priority, setPriority] = useState("Normal");
  const [status, setStatus] = useState("Pending");
  const [createNewBook, setCreateNewBook] = useContext(createNewBookContext);

  //   state to control the data
  const [newBookData, setNewBookData] = useState({
    name: bookName,
    image: bookImage,
    type: bookType,
    priority,
    status,
  });

  // For dropdown states
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookData = {
      name: bookName,
      image: bookImage,
      type: bookType,
      priority,
      status,
    };
    setNewBookData(newBookData);
    setCreateNewBook(false);
  };

  if (!createNewBook) return null;

  return (
    <div
      className={`rounded-lg size-[700px] fixed left-[390px] ${
        previewImage ? "top-5" : "top-9"
      } h-fit max-h-11/12 overflow-y-auto custom-scrollbar bg-[#09090B]/40 backdrop-blur-xl text-white p-4 text-start border-2 border-white/10 py-5 z-40 shadow-lg shadow-white/5`}
    >
      {/* Close Button */}
      <div
        className="absolute right-3 top-3"
        onClick={() => setCreateNewBook(false)}
      >
        <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
      </div>

      {/* Header */}
      <h1 className="text-xl font-semibold pb-1">Create New Book</h1>
      <p className="text-xs font-normal text-white/80">
        Add details for the new book
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-3">
          {/* Book Name */}
          <label htmlFor="name" className="font-medium text-md">
            Book Name
          </label>
          <input
            type="text"
            id="name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 text-white"
            placeholder="Enter book name"
          />

          {/* Book Image */}
          <label htmlFor="book-image" className="font-medium text-md">
            Book Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            id="book-image"
            className="bg-transparent outline-none border-dotted border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200"
          />

          {/* Preview Image */}
          {previewImage && (
            <img
              src={previewImage}
              alt="Book preview"
              className="w-full h-60 object-cover rounded-lg border border-white/10 mt-1"
            />
          )}

          {/* Book Type Dropdown */}
          <label htmlFor="type" className="font-medium text-md">
            Select Type
          </label>
          <div className="relative">
            <div
              onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
              className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200 cursor-pointer flex justify-between items-center"
            >
              <span>{bookType}</span>
              <IoChevronDownOutline
                className={`text-white/70 transition-transform duration-200 ${
                  isTypeDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isTypeDropdownOpen && (
              <div className="absolute w-full mt-1 bg-[#09090B]/95 backdrop-blur-xl border-2 border-white/10 rounded-lg overflow-hidden z-50">
                {["Mids", "Finals"].map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setBookType(type);
                      setIsTypeDropdownOpen(false);
                    }}
                    className={`p-2 cursor-pointer hover:bg-white/5 duration-200 ${
                      bookType === type ? "bg-white/10" : ""
                    }`}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* grid to show the dropdowns */}

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
            Save Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBookPopup;
