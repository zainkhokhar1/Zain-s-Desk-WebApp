import React, { useContext, useState } from "react";
import linkContext from "../../context/CreateContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

const Popup = () => {
  const { createLink, setCreateLink } = useContext(linkContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select");

  const categories = ["Select", "Social", "Coding"];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {createLink && (
        <div className=" rounded-lg size-96 h-[490px] fixed left-[500px] top-10 bg-[#09090B]/40 backdrop-blur-xl text-white p-4 text-start border-2 border-white/10 py-5 z-50 shadow-lg shadow-white/5">
          <h1 className="text-xl font-semibold pb-1">
            Create Quick Access Link
          </h1>
          <p className="text-xs font-normal text-white/80">
            Create a short link to open with just one click
          </p>

          <form action="">
            <div className="flex flex-col gap-2 mt-3">
              {/*Name */}
              <label htmlFor="name" className="font-medium text-md">
                Enter Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2"
              />

              {/* url */}
              <label htmlFor="url" className="font-medium text-md">
                Enter URL
              </label>
              <input
                type="text"
                id="url"
                className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2"
              />

              {/* Category */}
              <label htmlFor="category" className="font-medium text-md">
                Select Category
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-transparent outline-none border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200 cursor-pointer flex justify-between items-center"
                >
                  <span
                    className={
                      selectedCategory === "Select"
                        ? "text-white/50"
                        : "text-white"
                    }
                  >
                    {selectedCategory}
                  </span>
                  <IoChevronDownOutline
                    className={`text-white/70 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute w-full mt-1 bg-[#09090B]/95 backdrop-blur-xl border-2 border-white/10 rounded-lg overflow-hidden z-50">
                    {categories.map((category) => (
                      <div
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`p-2 cursor-pointer hover:bg-white/5 duration-200 
                            ${
                              selectedCategory === category ? "bg-white/10" : ""
                            }`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* image */}
              <label htmlFor="img" className="font-medium text-md">
                Select Image
              </label>
              <input
                type="file"
                id="img"
                className="bg-transparent outline-none border-dotted border-2 border-white/10 focus:border-white/20 rounded-lg p-2 hover:bg-white/5 duration-200"
              />

              {/* Button to save the text */}
              <button className="w-full h-10 rounded-lg p-2 bg-white hover:bg-white/90 text-black mt-3">
                Save
              </button>
            </div>
          </form>

          {/* close button */}
          <div
            className="absolute right-3 top-3"
            onClick={() => setCreateLink(false)}
          >
            <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90 cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
