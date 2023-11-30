import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./payl";
import "./App.css";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  const EditTodoForm = ({ todo, onSave, onCancel }) => {
    const [editedText, setEditedText] = useState(todo.text);

    const handleSave = () => {
      onSave(todo.id, editedText);
    };
  };
  return (
    <div className="todo-list">
      <div className="add_card">
        <h1 className="textShineBlack">TODO LIST</h1>
        <input
          className="add_inp"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add_btn" onClick={handleAddTodo}>
          ADD TO LIST
        </button>
      </div>
      {todos.length > 0 ? (
        <div className="lists">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button className="edit">
                  <FiEdit />
                </button>
                <button className="trash" onClick={() => removeTodo(todo.id)}>
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
