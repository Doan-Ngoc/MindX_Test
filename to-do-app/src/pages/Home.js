import React from 'react'
import TodoList from '../components/ToDoList/ToDoList'
import TodoForm from '../components/ToDoForm/ToDoForm'

const Home = () => {
    return (
        <div>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Home