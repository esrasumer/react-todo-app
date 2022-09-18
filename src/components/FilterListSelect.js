import React from "react";
import "./../App.css";

export default function FilterListSelect({ setStatus }) {
  return (
    <div className="select">
      <select
        onChange={(e) => setStatus(e.target.value)}
        name="todos"
        className="filter-todo"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
