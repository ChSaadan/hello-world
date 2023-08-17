import React from "react";

const ToDoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleSort = (todos) => {
    const sortComplete = todos.filter((todos) => todos.completed);
    console.log(sortComplete);
    return todos;
  };

  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-update task-button"
              onClick={() => handleEditTodo(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}

      <div className="dropdown">
        <select>
          <option onClick={() => handleSort()}>All</option>
          <option>Complete</option>
          <option>Incomplete</option>
        </select>
        <button>Select</button>
      </div>
    </div>
  );
};

export default ToDoList;
