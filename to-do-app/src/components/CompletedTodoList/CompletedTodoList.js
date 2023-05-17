import React, { useState } from "react";
import TodoItem from "../ToDoItem/ToDoItem";
import AppContext from "../../contexts/AppContext"
import { useContext } from "react"

const CompletedTodoList = () => {
    const { todos, setTodoList, onTodoMarkComplete, onTodoDeleted, handleTodoClick } = useContext(AppContext)
    const deletedTodos = todos.filter(todo => todo.isCompleted);
    const deleteCompletedItems = () => {
        const updatedTodoList = todos.filter(todo => !todo.isCompleted)
        setTodoList(updatedTodoList)
    }
    return (
        <div>
            {deletedTodos.map(todoItem => (
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
            {deletedTodos.length > 0 && <button className="btn btn-danger m-3" onClick={deleteCompletedItems}>Delete all </button>}
        </div>
    );
};

export default CompletedTodoList