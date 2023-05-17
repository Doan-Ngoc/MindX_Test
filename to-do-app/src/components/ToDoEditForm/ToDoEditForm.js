import React, { useState } from "react";

const ToDoEditForm = (props) => {
    const { title, id, submitEditedTodo, onTodoDeleted, isCompleted, onTodoMarkComplete } = props
    const [editedTodoTitle, setEditedTodoTtle] = useState(title)
    const todoEditHandler = (event) => {
        const { value } = event.target
        setEditedTodoTtle(value)
    }
    const HandleTodoEditSubmit = (event) => {
        event.preventDefault()
        submitEditedTodo(id, editedTodoTitle)
    }

    return (
        <div>
            <form className="d-flex align-items-center gap-4 mb-3" onSubmit={HandleTodoEditSubmit} >
                <input type="checkbox" checked={isCompleted} onChange={() => onTodoMarkComplete(id)} />
                <input
                    className="form-control fs-5 me-3"
                    name="title"
                    value={editedTodoTitle}
                    onChange={todoEditHandler}

                />
                <i class="fa fa-trash" onClick={() => onTodoDeleted(id)}></i>
            </form>

        </div>
    )
}

export default ToDoEditForm