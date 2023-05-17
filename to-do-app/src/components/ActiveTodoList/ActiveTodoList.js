import React, { useState } from "react";
import TodoItem from "../ToDoItem/ToDoItem";
import AppContext from "../../contexts/AppContext"
import { useContext } from "react"

const ActiveTodoList = () => {
    const { todos, setTodoList, onTodoMarkComplete, onTodoDeleted, handleTodoClick } = useContext(AppContext)
    const activeTodos = todos.filter(todo => !todo.isCompleted);
    return (
        <div >
            {activeTodos.map(todoItem => (
                <TodoItem
                    key={todoItem.id}
                    isCompleted={todoItem.isCompleted}
                    id={todoItem.id}
                    title={todoItem.title}
                    onTodoMarkComplete={onTodoMarkComplete}
                    onTodoDeleted={onTodoDeleted}
                    handleTodoClick={handleTodoClick}
                />
            ))}
        </div>
    );
};

export default ActiveTodoList;
