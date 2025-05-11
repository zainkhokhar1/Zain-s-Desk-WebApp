import React from "react";
import Navbar from "../../components/Navbar.jsx";
import TodoStatusCard from "../../components/productivity-tracker/main/TodoStatusCard.jsx";
import CreateTodo from "../../components/productivity-tracker/main/CreateTodo.jsx";
import Header from "../../components/productivity-tracker/main/Header.jsx";

const Todos = ({ selected, setSelected }) => {
  const data = [
    // Total Todo
    {
      title: "Total Todos Today",
      value: 12,
      percentage: "58%",
      image: "/total-Today-Todos.png",
      color: "#22C55E", // Tailwind blue-500
    },
    // Remaining Todo
    {
      title: "Remaining Todos",
      value: 5,
      percentage: "42%",
      image: "/remaining.png",
      color: "#EF4444", // Tailwind amber-500
    },
  ];
  return (
    <div >
      <Header selected={selected} setSelected={setSelected} />
      {/* Cards container */}
      <div className="grid grid-cols-12 gap-3 pt-2">
        {data.map((single, index) => (
          <TodoStatusCard key={index} data={single} />
        ))}
        <CreateTodo />
      </div>
    </div>
  );
};

export default Todos;
