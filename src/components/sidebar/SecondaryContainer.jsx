import React, { useEffect, useState } from "react";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondaryContainer = ({setSelected, selected}) => {

  const [path, setPath] = useState(window.location.pathname);
  
    useEffect(() => {
      setPath(window.location.pathname);
    }, [window.location.pathname]);
    
  const options2 = [
    {
      name: "Notifications",
      icon: <IoNotificationsOutline />,
      path : '/notifications'
    },
    {
      name: "Expense Management",
      icon: <MdAttachMoney />,
      path : '/expense-management'
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
      path : '/settings'
    },
  ];

  return (
    <div className="flex flex-col items-start gap-[4px] bg-[#1C1C1E] min-h-fit w-72 border-[1px] border-[#2C2C2C] rounded-xl px-2 py-3 mt-3">
      {options2.map((singleOption, index) => {
        const optionIndex = index + 6; // Starting from 6 since MainContainer uses 1-5
        return (
          <Link
            to={singleOption.path}
            key={singleOption.name + index}
            className={`duration-200 cursor-pointer flex items-center w-full rounded-lg px-3 py-[10px] ${
              singleOption.path === path
                ? "bg-[#FEFEFE] text-[#112001] font-medium opacity-100"
                : "bg-transparent hover:bg-[#FEFEFE]/5 opacity-50 hover:opacity-100"
            } gap-2 p-2`}
            onClick={() => setSelected(optionIndex)}
          >
            <div className="text-2xl">{singleOption.icon}</div>
            <div className="text-lg">{singleOption.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SecondaryContainer;
