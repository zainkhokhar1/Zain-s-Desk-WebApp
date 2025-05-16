function groupTodosByHour(todos, startHour = 9, endHour = 21) {

    // this code is forming only blocks with the start and end hour
  const blocks = Array.from({ length: endHour - startHour }, (_, i) => {
    const blockStart = startHour + i;
    const blockEnd = blockStart + 1;

    return {
      label: `${formatHour(blockStart)} - ${formatHour(blockEnd)}`,
      todos: [],
      startHour: blockStart,
      endHour: blockEnd,
    };
  });

  todos.forEach((todo) => {
    // extracted the start and end time from the todo object
    // and converted them to date objects
    const start = new Date(todo.startTime);
    const end = new Date(todo.endTime);

    const startH = start.getHours();
    const endH = end.getHours() + (end.getMinutes() > 0 ? 1 : 0);

    for (let hour = startH; hour < endH; hour++) {
      const index = hour - startHour;
      if (index >= 0 && index < blocks.length) {
        blocks[index].todos.push(todo);
      }
    }
  });

  return blocks;
}

function formatHour(hour) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h}${suffix}`;
}

export { groupTodosByHour, formatHour };
