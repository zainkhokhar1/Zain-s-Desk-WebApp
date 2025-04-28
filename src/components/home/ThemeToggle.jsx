import React, { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div 
      className="flex items-center cursor-pointer hover:bg-[#1C1C1E]/80 duration-200 bg-[#1C1C1E] p-2 rounded-full border-[1px] border-[#2C2C2C] group"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <IoMoonOutline className="text-2xl text-[#FEFEFE] group-hover:opacity-100 duration-200 opacity-50 hover:opacity-100" />
      ) : (
        <IoSunnyOutline className="text-2xl text-[#FEFEFE] group-hover:opacity-100 duration-200 opacity-50 hover:opacity-100" />
      )}
    </div>
  );
};

export default ThemeToggle;