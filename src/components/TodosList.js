import React, { useState } from "react";
import Modal from "./Modal";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
    SetIsOpen(false);
    setSelectedTodo({});
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    SetIsOpen(false);
    setSelectedTodo({});
  };
  return (
    <div>
      {todos.map((todo) => (
        <li
          className="list-item"
          key={todo.id}
          onClick={() => {
            SetIsOpen(true);
            setSelectedTodo(todo);
          }}
        >
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : "pending"}`}
            onChange={(event) => event.preventDefault()}
          />

          <div className="customRow" >
            <p style={{ color: todo.completed ? "green" : "red", }}>
              {todo.completed ? "Completed" : "Pending"}
            </p>
            {/* <button
              className="button-edit task-button"
              onClick={() => {
                handleEdit(todo)
                SetIsOpen(false)
              }}
            >
              <i className="fa fa-edit"></i>
            </button> */}
          </div>
        </li>
      ))}
      {isOpen && (
        <Modal
          onClose={() => {
            setSelectedTodo({});
            SetIsOpen(false);
          }}
          todo={selectedTodo}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TodosList;
