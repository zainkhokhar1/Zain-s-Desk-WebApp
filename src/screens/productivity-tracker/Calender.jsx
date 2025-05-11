import React from "react";
import Header from "../../components/productivity-tracker/main/Header";

const Calender = ({ selected, setSelected }) => {
  return (
    <div>
      <Header selected={selected} setSelected={setSelected} />

      <div className="pt-2">Calender here</div>
    </div>
  );
};

export default Calender;
