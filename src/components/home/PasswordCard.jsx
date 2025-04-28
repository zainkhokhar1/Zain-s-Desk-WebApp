import React from "react";
import { LuPlus } from "react-icons/lu";

const PasswordCard = ({
  icon,
  title,
  count,
  subtitle,
  variant = "default",
}) => {
  if (variant === "add-new") {
    return (
      <div className="bg-[#2C2C2C] hover:bg-[#3A3A3A] transition-all border border-dashed border-white/30 rounded-lg col-span-2 h-33 p-2 flex flex-col justify-around items-center cursor-pointer">
        <div className="bg-[#E8F6B2] text-black p-2 rounded-full mb-3">
          <LuPlus className="text-2xl" />
        </div>
        <h2 className="text-white font-semibold text-base">Add New Entry</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1C] border border-white/20 rounded-lg col-span-2 h-fit p-2">
      {/* Icon container */}
      <div className="bg-[#131313] border border-white/20 size-fit p-3 rounded-lg">
        {icon}
      </div>

      {/* Title and subtitle */}
      <div className="pt-5 flex flex-col gap-1 text-[#E8F6B2] text-xl font-medium">
        <h2>
          {count} {title}
        </h2>
        <p className="text-slate-50 text-xs font-normal">{subtitle}</p>
      </div>
    </div>
  );
};

export default PasswordCard;
