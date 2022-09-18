import React from "react";
import Todo from "./Todo";
import EmptyList from "./EmptyList";

function TodoList({ filteredTodos }) {
  if (filteredTodos.length === 0) return <EmptyList />;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
