import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Todos from "./Todos.jsx";
import Calender from "./Calender.jsx";
import TimeTracker from "./TimeTracker.jsx";
import Header from "../../components/productivity-tracker/todos/Header.jsx";

const Main = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen ml-82 mr-3">
      <Navbar />

      <h3 className="font-medium text-2xl pt-[0.6px]">Productivity Tracker</h3>

      <Header selected={selected} setSelected={setSelected} />

      {/* here show the main container */}
      {selected == 1 ? (
        <Todos />
      ) : selected == 2 ? (
        <Calender  />
      ) : (
        <TimeTracker  />
      )}
    </div>
  );
};

export default Main;
