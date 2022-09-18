import React from "react";
import api from "./../api/todos";

function Todo({ todo }) {
  const { content, isCompleted, id } = todo; //destructuring

  const deleteHandler = async () => {
    const response = await api.delete(`/todos/${id}`);
  };

  const completeHandler = async () => {
    const response = await api.put(`/todos/${id}`, {
      isCompleted: !isCompleted,
    });
  };

  return (
    <div className="todo" key={id}>
      <li className={`todo-item ${isCompleted ? "completed" : ""}`}>
        {content}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
