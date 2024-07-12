import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setTask(e.target.value); // Update the task state with the input value
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (task.trim() === '') {
      return; // Prevent adding tasks that are just empty spaces
    }
    try {
      // Send a POST request to create a new todo item
      const response = await axios.post('https://66912fd526c2a69f6e8ed197.mockapi.io/todos', { task, completed: false });
      // Call the addTodo function passed from the parent component to add the new task
      addTodo(response.data);
      // Clear the input field after adding the task
      setTask('');
    } catch (error) {
      // Shows an error if the POST request fails
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
