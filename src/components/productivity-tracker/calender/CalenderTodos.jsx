import { groupTodosByHour } from "../../../utils/TodosByHour";
import { todosData } from "../../../data";
import ScrollContainer from "react-indiana-drag-scroll";

const CalendarTodos = () => {
  const blocks = groupTodosByHour(todosData);

  return (
    <div className="overflow-x-auto w-full mt-7 relative">
      <div className="flex flex-col gap-4">
        {blocks.map((block, i) => (
          <div
            key={i}
            className="flex text-black rounded-md shadow-sm"
          >
            {/* Time Label */}
            <div className="absolute -left-2 w-20 min-h-16 max-h-fit p-2 border-r border-gray-300 bg-gray-50 flex items-center justify-center text-sm font-medium">
              {block.label}
            </div>

            {/* Todo Cards */}
            <ScrollContainer>
              <div className="flex-1 border border-gray-200/30 flex gap-2 p-2 ml-20">
                {block.todos.length > 0 ? (
                  block.todos.map((todo) => (
                    <div
                      key={todo.id}
                      className="min-w-[200px] max-w-[200px] p-3 rounded-lg bg-white shadow hover:shadow-md border border-gray-300 cursor-pointer transition-all"
                    >
                      <p className="text-sm font-semibold">
                        {todo.text.slice(0, 40)}...
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Priority: {todo.priority}
                      </p>
                      <p className="text-xs text-gray-500">
                        Status: {todo.status}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-400 italic">No todos</div>
                )}
              </div>
            </ScrollContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarTodos;
