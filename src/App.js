import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './index.css'; 

const App = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from the API
  const fetchTodos = async () => {
    try {
      // Make an API request to get todos
      const response = await axios.get('https://66912fd526c2a69f6e8ed197.mockapi.io/todos');
      // Update the state with the fetched todos
      setTodos(response.data);
    } catch (error) {
      // Show an error if the API request fails
      console.error('Error fetching todo data:', error);
    }
  };

  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    // Update state to include the new todo
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // useEffect hook to fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="todo-container">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
