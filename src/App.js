import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import api from "./api/todos";
import FilterListSelect from "./components/FilterListSelect";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    fetchDatafromApi();
  }, [todos.length]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const fetchDatafromApi = async () => {
    const response = await api.get("/todos");
    setTodos(response.data);
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted)); //true
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted)); //false
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <>
      <Header  title="Esra"/>
      <Form />
      <FilterListSelect setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} />
    </>
  );
}

export default App;
