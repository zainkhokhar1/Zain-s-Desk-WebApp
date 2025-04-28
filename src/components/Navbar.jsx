import React from "react";
import Clock from "./home/Clock";
import Search from "./home/Search";
import UserProfile from "./home/UserProfile";
import ThemeToggle from "./home/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-2 ml-20 pb-7">
      <h1 className="text-3xl font-bold relative -left-20 top-2">
        Welcome &nbsp;
        <span className="text-[#FEFEFE]">Zain !</span>
      </h1>
      <Clock />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Search />
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
