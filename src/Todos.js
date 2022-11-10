import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Todo from "./Todo";

function Todos() {
  const [todoData, setTodoData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setTodoData((prev) => [...prev, { title, desc }]);
  };
  return (
    <div>
      <div className="heading">
        <h1>Shadow Todo App</h1>
      </div>
      <div className="text-input">
        <form onSubmit={handleSubmit}>
          <input
            className="input-item"
            type="text"
            placeholder="Insert todo title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <input
            className="input-item"
            type="text"
            placeholder="Insert todo description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required
          />

          <br />
          <button className="submit" type="submit">
            <span>
              <FaPlus className="icon" /> Add todo
            </span>
          </button>
        </form>
      </div>
      <div className="todo-container">
        {todoData.map((item, index) => {
          return (
            <Todo
              item={item}
              key={index}
              index={index}
              todoData={todoData}
              setTodoData={setTodoData}
              setTitle={setTitle}
              setDesc={setDesc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
