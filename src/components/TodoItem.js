import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaCheck, FaTimes, FaStar } from 'react-icons/fa';

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [isStarred, setIsStarred] = useState(todo.isStarred || false);

  // Function to toggle the completion status of the todo item
  const toggleComplete = async () => {
    await axios.put(`https://66912fd526c2a69f6e8ed197.mockapi.io/todos/${todo.id}`, { ...todo, completed: !todo.completed });
    fetchTodos(); // Refresh the list of todos
  };

  // Function to delete the todo item
  const deleteTodo = async () => {
    await axios.delete(`https://66912fd526c2a69f6e8ed197.mockapi.io/todos/${todo.id}`);
    fetchTodos(); // Refresh the list of todos
  };

  // Function to toggle between edit and view mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Function to handle changes in the input field while editing
  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  // Function to submit the edited task
  const handleEditSubmit = async () => {
    await axios.put(`https://66912fd526c2a69f6e8ed197.mockapi.io/todos/${todo.id}`, { ...todo, task: editedTask });
    setIsEditing(false); // Exit edit mode
    fetchTodos(); // Refresh the list of todos
  };

  // Function to toggle the starred state of the todo item
  const toggleStarred = async () => {
    const newStarredState = !isStarred;
    await axios.put(`https://66912fd526c2a69f6e8ed197.mockapi.io/todos/${todo.id}`, { ...todo, isStarred: newStarredState });
    setIsStarred(newStarredState); // Update local state
    fetchTodos(); // Refresh the list of todos
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        // Render input field and buttons when editing
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={handleEditChange}
          />
          <button onClick={handleEditSubmit}><FaCheck/></button>
          <button onClick={toggleEditMode}><FaTimes /></button>
        </div>
      ) : (
        // Render task details and action buttons when not editing
        <div>
          <p>{todo.task}</p>
          <button
            className={`complete-button ${todo.completed ? 'incomplete' : 'complete'}`}
            onClick={toggleComplete}>
            {todo.completed ? <FaTimes /> : <FaCheck />}
          </button>
          <button onClick={toggleStarred}><FaStar className={`star ${isStarred ? 'starred' : ''}`} /></button>
          <button onClick={toggleEditMode}><FaEdit /></button>
          <button onClick={deleteTodo}><FaTrash /></button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
