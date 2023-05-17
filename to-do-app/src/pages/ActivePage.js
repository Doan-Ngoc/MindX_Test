import React from 'react'
import ActiveTodoList from '../components/ActiveTodoList/ActiveTodoList'
import TodoForm from '../components/ToDoForm/ToDoForm'

const ActivePage = () => {
    return (
        <div>
            <TodoForm />
            <ActiveTodoList />
        </div>
    )
}

export default ActivePage