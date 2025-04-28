import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 bg-[#1C1C1E] px-[5px] py-[1px] rounded-full border-[1px] border-[#2C2C2C] cursor-pointer hover:bg-[#1C1C1E]/80 duration-200">
      <div className="size-8 rounded-full bg-[#FEFEFE] flex items-center justify-center text-[#112001] font-medium text-lg">
        AS
      </div>
      <div className="flex flex-col">
        <span className="text-[#F0F0F0] font-medium">Zain Khan</span>
        <span className="text-[#F0F0F0]/50 text-sm">zain@example.com</span>
      </div>
      <IoChevronDownOutline className="text-[#FEFEFE]/50 ml-1" />
    </div>
  );
};

export default UserProfile;
