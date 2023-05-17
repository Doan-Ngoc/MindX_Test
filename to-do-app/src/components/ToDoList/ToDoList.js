import React, { useState } from "react";
import TodoItem from "../ToDoItem/ToDoItem";
import ToDoEditForm from "../ToDoEditForm/ToDoEditForm"
import AppContext from "../../contexts/AppContext"
import { useContext } from "react"

const TodoList = (props) => {
  const { todos, setTodoList, onTodoMarkComplete, onTodoDeleted, editedTodoId, handleTodoClick, submitEditedTodo } = useContext(AppContext)
  const deleteToDoList = () => {
    setTodoList([])
  }
  const todoListElement = todos &&
    todos.map((todoItem) => {
      if (todoItem.title) {
        return (
          <div key={todoItem.id} >
            {todoItem.id === editedTodoId ?
              <ToDoEditForm
                title={todoItem.title}
                id={todoItem.id}
                submitEditedTodo={submitEditedTodo}
                isCompleted={todoItem.isCompleted}
                onTodoMarkComplete={onTodoMarkComplete}
                onTodoDeleted={onTodoDeleted}
                handleTodoClick={handleTodoClick} />
              :
              <TodoItem
                isCompleted={todoItem.isCompleted}
                id={todoItem.id}
                title={todoItem.title}
                onTodoMarkComplete={onTodoMarkComplete}
                onTodoDeleted={onTodoDeleted}
                handleTodoClick={handleTodoClick} />
            }
          </div>
        )
      }
    })
  return (
    <div >
      {todoListElement}
      {todos.length > 0 && <button className="btn btn-danger m-auto" onClick={deleteToDoList} >Delete all </button>}
    </div>
  )
}

export default TodoList;
