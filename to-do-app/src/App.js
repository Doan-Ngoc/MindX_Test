import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route} from 'react-router-dom'
import ActiveTodoList from "./components/ActiveTodoList/ActiveTodoList"
import CompletedTodoList from "./components/CompletedTodoList/CompletedTodoList";
import AppContext from './contexts/AppContext'
import Home from "./pages/Home";
import ActivePage from "./pages/ActivePage";
import CompletedPage from "./pages/CompletedPage"

function App() {
  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });

  // Save todo list to localStorage 
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])

  // Load todo list from localStorage when the page is refreshed
  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, [])

  //Thêm Todo Item
  const onAddNewTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      isCompleted: false,
      id: uuidv4(),
    };
    const nextTodoList = [...todoList, newTodo];
    setTodoList(nextTodoList);
  };

  // Cập nhật trạng thái hoàn thành
  const onTodoMarkComplete = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    })
    setTodoList(updatedTodoList)
    setEditedTodoId(null)
  };

  // Delete todoItem
  const onTodoDeleted = (todoID) => {
    const newTodoList = todoList.filter(todoItem => todoItem.id !== todoID)
    setTodoList(newTodoList)
  }

  //Make editing form appear when clicking on todo item
  const [editedTodoId, setEditedTodoId] = useState(null)
  function handleTodoClick(todoId) {
    setEditedTodoId(todoId)
  }

  //Submit todoItem editing form
  const submitEditedTodo = (todoID, todoTitle) => {
    const newTodoList = todoList.map(todo => {
      if (todoID === todo.id) {
        return {
          ...todo,
          title: todoTitle,
        }
      }
      else { return todo }
    })
    setTodoList(newTodoList)
    setEditedTodoId(null)
  }


  return (
    <AppContext.Provider
    value = {{
      todos:todoList,
      onAddNewTodo: onAddNewTodo,
        onTodoMarkComplete: onTodoMarkComplete,
        onTodoDeleted:onTodoDeleted,
        submitEditedTodo: submitEditedTodo,
        editedTodoId: editedTodoId,
        handleTodoClick: handleTodoClick,
        setTodoList : setTodoList
    }}
    >
    <div className="container w-50 ">
      <h1 className="text-center my-5">#todo</h1>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/active" element={<ActivePage/>} />
      <Route path="/completed" element = {<CompletedPage/>} />
        </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;

