import React from "react";
import api from "./../api/todos";

function Todo({ todo, fetchDatafromApi }) {
  const { content, isCompleted, id } = todo; //destructuring

  const deleteHandler = async () => {
    const response = await api.delete(`/todos/${id}`);
    fetchDatafromApi()
  };

  const completeHandler = async () => {
    const response = await api.put(`/todos/${id}`, {
      isCompleted: !isCompleted,
    });
    fetchDatafromApi()
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
