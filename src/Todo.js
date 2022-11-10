import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

function Todo({ item, index, todoData, setTodoData, setTitle, setDesc }) {
  const { title, desc } = item;

  const handleDelete = () => {
    setTodoData(
      todoData.filter(
        (filtered, filterindex) => filtered && filterindex !== index
      )
    );
  };
  const handleEdit = () => {
    setTitle(todoData[index].title);
    setDesc(todoData[index].desc);
    setTodoData(
      todoData.filter(
        (filtered, filterindex) => filtered && filterindex !== index
      )
    );
  };
  return (
    <div className="todo">
      <div className="todo-left">
        <h3 className="todo-title">{title}</h3>
        <p className="todo-desc">{desc}</p>
      </div>
      <div className="todo-right">
        {/* <a href="./edit.html">
          
        </a> */}
        <button className="todo-edit" onClick={handleEdit}>
          <span>
            <FaPen className="icon2" /> Edit
          </span>
        </button>

        <button className="todo-delete" onClick={handleDelete}>
          <span>
            <FaTrash className="icon2" /> Delete
          </span>
        </button>
      </div>
    </div>
  );
}

export default Todo;
