import React from 'react';
import TodoItem from './TodoItem';
import { format, isValid, parseISO } from 'date-fns';

const TodoList = ({ todos, fetchTodos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        let formattedDueDate = 'Invalid date';
        
        if (todo.dueDate) {
          const parsedDueDate = parseISO(todo.dueDate);
          if (isValid(parsedDueDate)) {
            formattedDueDate = format(parsedDueDate, 'dd-MM-yyyy');
          }
        }

        return (
          <li key={todo.id}>
            <TodoItem
              key={todo.id}
              todo={todo}
              dueDate={formattedDueDate}
              fetchTodos={fetchTodos}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
