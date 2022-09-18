import "./../../App.css";
import Form from "./../../components/Form";
import TodoList from "./../../components/TodoList";
import FilterListSelect from "./../../components/FilterListSelect";
import Header from "./../../components/Header";
import React, { useState, useEffect } from "react";
import api from "./../../api/todos";


export default function HomePage() {

    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState("all");

    useEffect(() => {
        fetchDatafromApi();
    }, []);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    const fetchDatafromApi = async () => {
        const response = await api.get("/todos");
        setTodos(response.data);
        filterHandler();
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
            <Header title="Esra" />
            <Form  fetchDatafromApi={fetchDatafromApi}/>
            <FilterListSelect setStatus={setStatus} />
            <TodoList 
            filteredTodos={filteredTodos}
            fetchDatafromApi={fetchDatafromApi}
            />
        </>
    );
}