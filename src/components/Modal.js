import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <div className="maindiv">
    <div onClick={() => props.onClose(false)} style={{width:30, height:30, position:'absolute', cursor:'pointer', right: 10, top: 10}}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#fff"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
     
      <h1>{props.todo.title}</h1>
      <div>
        <button
          className="custom_button"
          onClick={() => props.handleComplete(props.todo)}
        >
          <p>Complete</p>
        </button>
        <button
          className="custom_button"
          onClick={() => props.handleEdit(props.todo)}
        >
           <p>Edit</p>
        </button>
        <button
          className="custom_button"
          onClick={() => props.handleDelete(props.todo)}
        >
           <p>Delete</p>
        </button>
      </div>
    </div>
  );
};

export default Modal;
