import React from "react";
import Header from "../../components/productivity-tracker/main/Header";

const TimeTracker = ({ selected, setSelected }) => {
  return (
    <div>
      <Header selected={selected} setSelected={setSelected} />
      Time Tracker
    </div>
  );
};

export default TimeTracker;
