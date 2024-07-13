import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'task') {
      setTask(value); // Update the task state with the input value
    } else if (name === 'dueDate') {
      setDueDate(value); // Update the dueDate state with the input value
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (task.trim() === '') {
      return; // Prevent adding tasks that are just empty spaces
    }
    try {
      // Send a POST request to create a new todo item
      const response = await axios.post('https://66912fd526c2a69f6e8ed197.mockapi.io/todos', {
        task,
        dueDate,
        completed: false,
      });
      // Call the addTodo function passed from the parent component to add the new task
      addTodo(response.data);
      // Clear the input fields after adding the task
      setTask('');
      setDueDate('');
    } catch (error) {
      // Show an error if the POST request fails
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <input
        type="date"
        name="dueDate"
        value={dueDate}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
