import React from "react";

const SingleAllTimeTodo = (props) => {
  const {
    id,
    text,
    priority,
    category,
    status,
    startTime,
    endTime,
    createdOn,
  } = props;

  return (
    <div>
      {/* Example placeholder for the original SingleTodayTodo content */}
      <h3>{text}</h3>
      {/* Add the original SingleTodayTodo content here */}
    </div>
  );
};

export default SingleAllTimeTodo;
