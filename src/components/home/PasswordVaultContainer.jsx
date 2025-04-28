import React, { useContext } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { HiMiniWallet } from "react-icons/hi2";
import { FaHeart, FaClock } from "react-icons/fa";
import PasswordCard from "./PasswordCard";
import PasswordTable from "./PasswordTable";
import passwordContext from "../../context/CreatePasswordContext";
import Popup from "../password-vault/Popup";

const PasswordVaultContainer = () => {
  const { createPassword, setCreatePassword } = useContext(passwordContext);

  const passwordCardsData = [
    {
      icon: <HiMiniWallet className="text-xl" />,
      title: "Total Passwords",
      count: 12,
      subtitle: "Combination of All categories",
    },
    {
      icon: <FaHeart className="text-xl text-red-400" />,
      title: "Favorites",
      count: 5,
      subtitle: "Most frequently used",
    },
    {
      icon: <FaClock className="text-xl text-yellow-400" />,
      title: "Recent",
      count: 3,
      subtitle: "Accessed in the last 7 days",
    },
    {
      variant: "add-new", // special card flag
      onClick: () =>  setCreatePassword(!createPassword),
    },
  ];

  return (
    <div className="bg-[#1C1C1C] rounded-xl border-white/5 border p-2 mb-2 flex flex-col h-fit items-start col-span-6">
      {/* Header and Search */}
      <div className="flex items-center justify-between gap-2 w-full">
        <h1 className="text-xl font-semibold ml-2">Password Vault</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center cursor-pointer hover:bg-[#1C1C1E]/80 duration-200 gap-2 bg-[#1C1C1E] p-2 rounded-md border-[1px] border-[#2C2C2C] w-fit group">
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent outline-none w-52 text-[#F0F0F0] placeholder:text-[#F0F0F0]/50"
            />
          </div>
          <span className="bg-white group p-1 rounded-md cursor-pointer">
            <IoFilterOutline className="text-2xl group-hover:text-black text-black/80" />
          </span>
          <span className="font-medium cursor-pointer px-3 py-[6px] border border-white/5 hover:bg-white/95 text-black rounded-lg bg-white opacity-95 text-sm hover:opacity-100 duration-200">
            View All
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-8 gap-2 w-full h-fit mt-3">
        {passwordCardsData.map((card, index) => (
          <PasswordCard
            key={index}
            icon={card.icon}
            title={card.title}
            count={card.count}
            subtitle={card.subtitle}
            variant={card.variant}
            onClick={card.onClick}
          />
        ))}
      </div>

      {/* Table */}
      <div className="w-full px-2">
        <h2 className="text-lg pt-5 pb-3 font-semibold">Recent Passwords</h2>
        <PasswordTable />
      </div>
      <Popup />
    </div>
  );
};

export default PasswordVaultContainer;
