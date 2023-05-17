import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
const TodoForm = (props) => {
  const { onAddNewTodo, handleTodoClick } = useContext(AppContext)
  const { id } = props
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title !== "") {
      onAddNewTodo(title);
      setTitle("")
    };
  };
  return (
    <div className="m-auto" >
      <form className="d-flex justify-content-between gap-3 my-5" onSubmit={onSubmitHandler}>
        <input
          className="form-control fs-5"
          name="title"
          value={title}
          onChange={onChangeHandler}
          onClick={() => handleTodoClick(id)}
          placeholder="add details"
        />
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary mx-auto fs-5" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;