import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import TodoList from '../ToDoList/ToDoList';

const NavBar = () => {
    return (
        <div className="d-flex justify-content-between"  >
            <NavLink className="nav-link" activeClassName="active" to="/" element={<TodoList />} >All</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/active">Active</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/completed">Completed</NavLink>
        </div>
    )
}

export default NavBar
