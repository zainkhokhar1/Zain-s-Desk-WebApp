import React from "react";
import Navbar from "../components/Navbar";
import QuickLinks from "../components/home/QuickLinks";
import TodosContainer from "../components/home/TodosContainer";
import PasswordVaultContainer from "../components/home/PasswordVaultContainer";
import ExamPrepration from "../components/home/ExamPrepration";
import Calender from "../components/home/Calender";

const Home = () => {
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
    </div>
  );
};

export default Home;
