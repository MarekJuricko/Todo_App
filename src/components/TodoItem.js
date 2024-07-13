import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaCheck, FaTimes, FaStar } from 'react-icons/fa';

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [priority, setPriority] = useState(todo.priority || 'low');
  const [showPrioritySelector, setShowPrioritySelector] = useState(false);


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

  // Function to handle priority change
  const handlePriorityChange = async (newPriority) => {
    setPriority(newPriority);
    setShowPrioritySelector(true); // Close the dropdown
    await axios.put(`https://66912fd526c2a69f6e8ed197.mockapi.io/todos/${todo.id}`, { ...todo, priority: newPriority });
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

          <button 
            onClick={() => setShowPrioritySelector(prev => !prev)}
            className={`priority-button ${priority}`}
          >
            <FaStar className={`star ${priority} }`} />
            {showPrioritySelector && (
              <div className="priority-selector">
                <button 
                  onClick={() => handlePriorityChange('low')}>Low
                </button>
                <button 
                  onClick={() => handlePriorityChange('medium')}>Medium
                </button>
                <button 
                  onClick={() => handlePriorityChange('high')}>High
                </button>
              </div>
            )}
          </button>

          <button onClick={toggleEditMode} className='edit'><FaEdit /></button>
          <button onClick={deleteTodo} className='delete'><FaTrash /></button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
