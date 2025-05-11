import React from "react";

const TodoStatusCard = ({ data }) => {
  const { title, value, percentage, image, color, subtext, textColor } = data;

  return (
    <div
      className="w-full col-span-4 h-40 rounded-xl border border-white/20 p-3 flex flex-col justify-between relative hover:scale-102 duration-300 ease-in"
      style={{ backgroundColor: `${color}1A` }} // light background tint
    >
      <img
        src={image}
        alt="img"
        className="w-1/2 h-36 absolute top-1 -right-1 object-contain"
      />
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-4xl font-bold text-white">{value}</p>
      <p className={`text-sm ${textColor} font-semibold`}>{subtext}</p>
      <span style={{ color }}>
        {percentage} &nbsp;
        {title.includes("Total") ? "completed" : "remaining"}
      </span>
    </div>
  );
};

export default TodoStatusCard;
