import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-[#1C1C1E]/80 duration-200 gap-2 bg-[#1C1C1E] p-2 rounded-full border-[1px] border-[#2C2C2C] w-fit group">
      <IoSearchOutline className="text-2xl text-[#FEFEFE] opacity-50 group-hover:opacity-100 duration-200" />
      {/* <input 
        type="text" 
        placeholder="Search anything..." 
        className="bg-transparent outline-none w-full text-[#F0F0F0] placeholder:text-[#F0F0F0]/50"
      /> */}
    </div>
  );
};

export default Search;
