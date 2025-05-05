import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoMdPaper } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainContainer = ({ setSelected, selected }) => {
  let { pathname } = useLocation();
  console.log(pathname);
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  const options = [
    {
      name: "Dashboard",
      icon: <GoHome />,
      path: "/",
    },
    {
      name: "Exam preparation",
      icon: <IoMdPaper />,
      path: "/exam-preparation",
    },
    {
      name: "Quick Links",
      icon: <IoLinkSharp />,
      path: "/quick-links",
    },
    {
      name: "Password Vault",
      icon: <RiLockPasswordFill />,
      path: "/password-vault",
    },
    {
      name: "Todos",
      icon: <LuListTodo />,
      path: "/todos",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-[4px] bg-[#1C1C1E] min-h-fit min-w-72 border-[1px] border-[#2C2C2C] rounded-xl px-2 py-3">
      {options.map((singleOption, index) => {
        const isActive =
          // Checks if not the home path
          singleOption.path !== "/"
            // true then it checks that either if it's starting with the any of the paths in the options array then accept that.
            ? path.startsWith(singleOption.path)
            // false then this
            : path === "/";

        return (
          <Link
            to={singleOption.path}
            key={singleOption.name + index}
            className={`duration-200 cursor-pointer flex items-center w-full rounded-lg px-3 py-[10px] ${
              isActive
                ? "bg-[#FEFEFE] text-[#112001] font-medium opacity-100"
                : "bg-transparent hover:bg-[#FEFEFE]/5 opacity-50 hover:opacity-100"
            } gap-2 p-2`}
            onClick={() => setSelected(index + 1)}
          >
            <div className="text-2xl">{singleOption.icon}</div>
            <div className="text-lg">{singleOption.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default MainContainer;
