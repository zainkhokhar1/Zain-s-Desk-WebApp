import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const LinkCard = ({ name, createdAt, img,link }) => {
  return (
    <div className="bg-[#141414] border flex flex-col border-white/10 rounded-2xl py-2 pb-1 px-2 max-size-52 size-52">
      <img
        src={img ? img : "../../../public/LinkNotFoundImage.avif"}
        className="h-8/12 object-cover w-full rounded-lg"
        alt="SiteImage"
      />

      <div className="flex justify-between items-center h-fit w-full">
        <div className="flex flex-col mt-1 pl-[4px] pt-1">
          <h1 className="text-xl font-semibold">{name}</h1>
          <span className=" text-[12px] pt-1 text-[#FF0B55]/90">
            {createdAt}
          </span>
        </div>
        <button onClick={()=>window.open(link)} className="bg-[#FF0B55] cursor-pointer hover:bg-[#FF0B55]/80 duration-200 size-10 rounded-lg mt-4 flex items-center justify-center hover:scale-100 scale-95">
          <MdOutlineArrowOutward className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
