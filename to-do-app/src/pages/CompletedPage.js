import React from 'react'
import TodoList from '../components/ToDoList/ToDoList'
import CompletedTodoList from '../components/CompletedTodoList/CompletedTodoList'

const CompletedPage = () => {
    return (
        <div className='my-5'>
            <CompletedTodoList />
        </div>
    )
}

export default CompletedPage