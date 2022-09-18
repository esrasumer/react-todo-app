import React, { useState } from "react";
import api from "./../api/todos";

export default function Form({ fetchDatafromApi}) {
  const [inputText, setInputText] = useState("");

  async function submitTodoHandler(e) {
    e.preventDefault();

    const res = await api.post("/todos", {
      content: inputText,
      isCompleted: false,
      id: Math.ceil(Math.random() * 10000),
    });

    setInputText("");
    fetchDatafromApi()
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="Add a todo"
      />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}
