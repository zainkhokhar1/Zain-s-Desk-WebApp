import React, { useState } from "react";
import Logo from "./Logo";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Navbar = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="py-3 pt-6 fixed left-0 px-2 pl-5 h-screen w-[320px] flex flex-col justify-between">
      <div className="flex flex-col items-start gap-7 justify-between">
        <Logo />
        <MainContainer setSelected={setSelected} selected={selected} />
      </div>
      <div>
        <SecondaryContainer setSelected={setSelected} selected={selected}/>
      </div>
    </div>
  );
};

export default Navbar;
