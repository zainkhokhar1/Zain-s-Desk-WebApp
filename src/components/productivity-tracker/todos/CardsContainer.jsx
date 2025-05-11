import React from "react";
import CreateTodo from "./CreateTodo";
import TodoStatusCard from "./TodoStatusCard";
import { data } from "../../../data";

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-3 pt-2">
      {data.map((single, index) => (
        <TodoStatusCard key={index} data={single} />
      ))}
      <CreateTodo />
    </div>
  );
};

export default CardsContainer;
