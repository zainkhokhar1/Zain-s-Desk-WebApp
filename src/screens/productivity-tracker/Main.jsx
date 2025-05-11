import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Todos from "./Todos.jsx";
import Calender from "./Calender.jsx";
import TimeTracker from "./TimeTracker.jsx";

const Main = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen ml-82 mr-3">
      <Navbar />

      {/* here show the main container */}
      {selected == 1 ? (
        <Todos selected={selected} setSelected={setSelected} />
      ) : selected == 2 ? (
        <Calender selected={selected} setSelected={setSelected} />
      ) : (
        <TimeTracker selected={selected} setSelected={setSelected} />
      )}
    </div>
  );
};

export default Main;
