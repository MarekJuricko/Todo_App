import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, fetchTodos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
