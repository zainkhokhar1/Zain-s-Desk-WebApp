import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import QuickLinks from "../components/home/QuickLinks";
import TodosContainer from "../components/home/TodosContainer";
import PasswordVaultContainer from "../components/home/PasswordVaultContainer";
import ExamPrepration from "../components/home/ExamPrepration";
import Calender from "../components/home/Calender";
import linkContext from "../context/CreateContext";
import passwordContext from "../context/CreatePasswordContext";

const Home = () => {
  const { createLink } = useContext(linkContext);
  const { createPassword } = useContext(passwordContext);

  console.log(createLink);

  return (
    <div className="ml-82 mr-3">
      <Navbar />

      {/* container for the different sections */}
      <div className="grid grid-cols-6 gap-3">
        <QuickLinks />
        <TodosContainer />

        <ExamPrepration />
        <Calender />
        {/* Have to set the table it's not working perfectly */}
        <PasswordVaultContainer />
      </div>
      {createPassword && (
        <div className="w-screen h-screen bg-black/40 inset-0 z-20 fixed"></div>
      )}
      {createLink && (
        <div className="w-screen h-screen bg-black/40 inset-0 z-20 fixed"></div>
      )}
    </div>
  );
};

export default Home;
